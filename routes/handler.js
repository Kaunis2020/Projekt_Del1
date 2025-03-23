/* 
 * Larissa
 * ADMIN-behörigheten krävs
 * Router för registrering och inloggning
 * använder token JWT
 */
const sqlite3 = require('sqlite3');
const express = require('express');
const router = express.Router({mergeParams: true});
const jwt = require('jsonwebtoken');

// Uppgifter inhämtas från ENV-filen;
const dbpath = process.env.DB_DATABASE;

// Skapar användarkonto i databasen;
// LÖSENORDET SPARAS SOM HASHKOD;
// OPEN_READWRITE
router.post('/register', (req, res) =>
{
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(' ')[1];

    if (token === null)
    {
        res.status(404).json({message: "Obehörig person!"});
    }
    // VALIDERAR TOKEN FÖR BEHÖRIGHET ATT LÄGGA i databasen;
    jwt.verify(token, process.env.JWT_SECRET, (err) => {
        if (err)
        {
            res.status(404).json({message: "Obehörig person!"});
        } else
        {
            let fname = req.body.fname;
            let lname = req.body.lname;
            let email = req.body.email;
            let username = req.body.username;
            let password = req.body.password;
            const date = new Date();
            let year = date.getFullYear();
            let month = date.getMonth() + 1;
            let day = date.getDate();
            if (day < 10)
                day = "0" + day;
            if (month < 10)
                month = "0" + month;

            var fulldate = String(year) + "-" + String(month) + "-" + String(day);
            var account_created = fulldate;

            // Kontrollerar uppgifter;
            if (!fname || !lname || !email || !username || !password)
            {
                res.status(404).json();
            } else
            {
                var crypto = require("crypto");
                var sha256 = crypto.createHash("sha256");
                sha256.update(password, "utf8");
                var hashcode = sha256.digest("base64");
                let db = new sqlite3.Database(dbpath, sqlite3.OPEN_READWRITE, (err) => {
                    if (err) {
                        res.status(404).json(err.message);
                    } else {
                        db.run('INSERT INTO users(fname, lname, email, username, password, account_created) VALUES(?, ?, ?, ?, ?, ?)', [fname, lname, email, username, hashcode, account_created], (err) => {
                            if (err) {
                                res.json(err.message);
                            } else
                            {
                                const obj = {message: "Kontot har sparats i databasen"};
                                res.status(200).json(obj);
                            }
                        });
                    }
                });
                db.close();
            }
        }
    });
});

// Jämför användarnamn och lösenord vid inloggning;
// OMVANDLAR INMATAT LÖSENORD TILL HASHKOD; 
// OPEN_READONLY
router.post('/login', (req, res) =>
{
    let username = req.body.username;
    let password = req.body.password;
    // Kontrollerar uppgifter;
    if (!username || !password)
    {
        res.status(404).json();
    } else
    {
        var crypto = require("crypto");
        var sha256 = crypto.createHash("sha256");
        sha256.update(password, "utf8");
        var hashcode = sha256.digest("base64");
        let db = new sqlite3.Database(dbpath, sqlite3.OPEN_READONLY, (err) => {
            if (err) {
                res.status(404).json(err.message);
            } else {
                db.all('SELECT fname, username, password FROM users WHERE username = ? AND password = ?', [username, hashcode], function (error, results) {
                    if (error) {
                        res.status(404).json(error.message);
                    } else
                    {
                        if (results.length > 0)
                        {
                            const payload = {
                                username: username
                            };
                            const token = jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: '1800s'});
                            const obj = {fname: results[0].fname, username: results[0].username, token: token};
                            res.status(200).json(obj);
                        } else
                        {
                            const obj = {error: "Felaktig inloggning!"};
                            res.status(404).json(obj);
                        }
                    }
                });
            }
        });
        db.close();
    }
});

// Inhämtar alla användare
router.get('/users', (req, res) =>
{
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(' ')[1];
    if (token === null)
    {
        res.status(404).json({message: "Obehörig person!"});
    }
    // VALIDERAR TOKEN FÖR BEHÖRIGHET ATT LÄGGA i databasen;
    jwt.verify(token, process.env.JWT_SECRET, (err) => {
        if (err)
        {
            res.status(404).json({message: "Obehörig person!"});
        } else
        {
            let db = new sqlite3.Database(dbpath, sqlite3.OPEN_READONLY, (err) => {
                db.serialize(function () {
                    db.all("SELECT * FROM users", function (err, users) {
                        if (err)
                            res.status(404).json(err.message);
                        else
                        {
                            res.status(200).json(users);
                        }
                    });
                });
                db.close();
            });
        }
    });
});

// Uppdaterar en användare i databasen
// OPEN_READWRITE
router.put('/user', (req, res) =>
{
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(' ')[1];
    if (token === null)
    {
        res.status(404).json({message: "Obehörig person!"});
    }
// VALIDERAR TOKEN FÖR BEHÖRIGHET ATT ÄNDRA i databasen;
    jwt.verify(token, process.env.JWT_SECRET, (err) => {
        if (err)
        {
            res.status(404).json({message: "Obehörig person!"});
        } else
        {
            let id = req.body.id;
            let fname = req.body.fname;
            let lname = req.body.lname;
            let email = req.body.email;
            let username = req.body.username;

            if (!fname || !lname || !email || !username) {
                res.status(404).json({message: "Tomma fält får inte förekomma!"});
            } else
            {
                const sqlquery = "UPDATE users SET fname=?, lname=?, email=?, username=? WHERE id =?";

                let db = new sqlite3.Database(dbpath, sqlite3.OPEN_READWRITE, (err) => {
                    if (err) {
                        res.status(404).json({message: err.message});
                    } else {
                        db.run(sqlquery, [fname, lname, email, username, id], (err) => {
                            if (err) {
                                res.status(404).json({message: err.message});
                            } else
                            {
                                res.status(200).json({message: "Användaren har sparats i databasen."});
                            }
                        });
                    }
                });
                db.close();
            }
        }
    });
});

// OPEN_READWRITE
// Raderar användare med visst id
router.delete('/user/:id', function (req, res, next)
{
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(' ')[1];
    if (token === null)
    {
        res.status(404).json({message: "Obehörig person!"});
    }
    // VALIDERAR TOKEN FÖR BEHÖRIGHET ATT RADERA i databasen;
    jwt.verify(token, process.env.JWT_SECRET, (err) => {
        if (err)
        {
            res.status(404).json({message: "Obehörig person!"});
        } else
        {
            let userid = req.params.id;
            if (!userid)
            {
                res.status(404).json({message: "Användarens ID måste anges!"});
            } else
            {
                let db = new sqlite3.Database(dbpath, sqlite3.OPEN_READWRITE, (err) => {
                    if (err)
                    {
                        res.status(404).json({message: err.message});
                    } else {
                        db.run("DELETE FROM users WHERE id = ?", [userid], (err) => {
                            if (err)
                            {
                                res.status(404).json({message: err.message});
                            } else
                            {
                                //Skickar koden OK;
                                res.status(200).json({message: "Användaren har raderats"});
                            }
                        });
                    }
                    db.close();
                });
            }
        }
    });
});

module.exports = router;