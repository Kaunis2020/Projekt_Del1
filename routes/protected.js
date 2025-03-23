/* 
 * Larissa Rosenbrant
 * Skyddad router för radering, uppdatering och 
 * inläggning av data i databasen;
 * ADMIN kan ändra och radera allting i databasen;
 */
const sqlite3 = require('sqlite3');
const express = require('express');
const router = express.Router({mergeParams: true});
const jwt = require('jsonwebtoken');
const dbpath = process.env.DB_DATABASE;

// ANSTÄLLDA
// Lägger ny anställd i databasen
// OPEN_READWRITE
router.post("/employee", (req, res) =>
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
            let photo = req.body.photo;
            let fname = req.body.fname;
            let lname = req.body.lname;
            let position = req.body.position;
            let info = req.body.info;
            let salary = req.body.salary;
            let jobphone = req.body.jobphone;
            let jobmail = req.body.jobmail;
            if (!fname || !lname || !position || !info) {
                res.status(404).json({message: "Tomma fält får inte förekomma!"});
            } else
            {
                let db = new sqlite3.Database(dbpath, sqlite3.OPEN_READWRITE, (err) => {
                    if (err) {
                        res.status(404).json({message: err.message});
                    } else {
                        db.run('INSERT INTO employees(photo, fname, lname, position, info, salary, jobphone, jobmail) VALUES(?, ?, ?, ?, ?, ?, ?, ?)',
                                [photo, fname, lname, position, info, salary, jobphone, jobmail], (err) => {
                            if (err) {
                                res.status(404).json({message: err.message});
                            } else
                            {
                                res.status(200).json({message: "Anställd har sparats i databasen."});
                            }
                        });
                    }
                });
                db.close();
            }
        }
    });
});

// Uppdaterar en anställd i databasen
// OPEN_READWRITE
router.put('/employee', (req, res) =>
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
            let photo = req.body.photo;
            let fname = req.body.fname;
            let lname = req.body.lname;
            let position = req.body.position;
            let info = req.body.info;
            let salary = req.body.salary;
            let jobphone = req.body.jobphone;
            let jobmail = req.body.jobmail;
            if (!fname || !lname || !position || !info) {
                res.status(404).json({message: "Tomma fält får inte förekomma!"});
            } else
            {
                const sqlquery = "UPDATE employees SET photo =?, fname=?, lname=?, position=?, info=?, salary=?, jobphone=?, jobmail=? WHERE id =?";

                let db = new sqlite3.Database(dbpath, sqlite3.OPEN_READWRITE, (err) => {
                    if (err) {
                        res.status(404).json({message: err.message});
                    } else {
                        db.run(sqlquery, [photo, fname, lname, position, info, salary, jobphone, jobmail, id], (err) => {
                            if (err) {
                                res.status(404).json({message: err.message});
                            } else
                            {
                                res.status(200).json({message: "Medarbetaren har sparats i databasen."});
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
router.delete('/employee/:id', function (req, res, next)
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
            let emplid = req.params.id;
            if (!emplid)
            {
                res.status(404).json({message: "Medarbetarens ID måste anges!"});
            } else
            {
                let db = new sqlite3.Database(dbpath, sqlite3.OPEN_READWRITE, (err) => {
                    if (err)
                    {
                        res.status(404).json({message: err.message});
                    } else {
                        db.run("DELETE FROM employees WHERE id = ?", [emplid], (err) => {
                            if (err)
                            {
                                res.status(404).json({message: err.message});
                            } else
                            {
                                //Skickar koden OK;
                                res.status(200).json({message: "Medarbetaren har raderats"});
                            }
                        });
                    }
                    db.close();
                });
            }
        }
    });
});

// KALLA OCH VARMA DRYCKER
// Lägger drycker i databasen
// OPEN_READWRITE
router.post('/beverage', (req, res) =>
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
            let maintype = req.body.maintype;
            let photo = req.body.photo;
            let name = req.body.name;
            let category = req.body.category;
            let type = req.body.type;
            let price = req.body.price;
            let ingredients = req.body.ingredients;
            let description = req.body.description;
            let table = "";

            if (maintype === "hot")
                table = "INSERT INTO hotbeverages(photo, name, category, type, price, ingredients, description) VALUES(?, ?, ?, ?, ?, ?, ?)";
            else
                table = "INSERT INTO coldbeverages(photo, name, category, type, price, ingredients, description) VALUES(?, ?, ?, ?, ?, ?, ?)";

            if (!name || !category || !type || !ingredients || !description) {
                res.status(404).json({message: "Tomma fält får inte förekomma!"});
            } else
            {
                let db = new sqlite3.Database(dbpath, sqlite3.OPEN_READWRITE, (err) => {
                    if (err) {
                        res.status(404).json({message: err.message});
                    } else {
                        db.run(table, [photo, name, category, type, price, ingredients, description], (err) => {
                            if (err) {
                                res.status(404).json({message: err.message});
                            } else
                            {
                                res.status(200).json({message: "Drycken har sparats i databasen."});
                            }
                        });
                    }
                });
                db.close();
            }
        }
    });
});

// KALLA OCH VARMA DRYCKER
// Updaterar drycker i databasen
// OPEN_READWRITE
router.put('/beverage', (req, res) =>
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
            let id = req.body.id;
            let maintype = req.body.maintype;
            let photo = req.body.photo;
            let name = req.body.name;
            let category = req.body.category;
            let type = req.body.type;
            let price = req.body.price;
            let ingredients = req.body.ingredients;
            let description = req.body.description;
            let table = "";

            if (maintype === "hot")
                table = "UPDATE hotbeverages SET photo=?, name=?, category=?, type=?, price=?, ingredients=?, description=? WHERE id =?";
            else
                table = "UPDATE coldbeverages SET photo=?, name=?, category=?, type=?, price=?, ingredients=?, description=? WHERE id =?";

            if (!name || !category || !type || !ingredients || !description) {
                res.status(404).json({message: "Tomma fält får inte förekomma!"});
            } else
            {
                let db = new sqlite3.Database(dbpath, sqlite3.OPEN_READWRITE, (err) => {
                    if (err) {
                        res.status(404).json({message: err.message});
                    } else {
                        db.run(table, [photo, name, category, type, price, ingredients, description, id], (err) => {
                            if (err) {
                                res.status(404).json({message: err.message});
                            } else
                            {
                                res.status(200).json({message: "Drycken har sparats i databasen."});
                            }
                        });
                    }
                });
                db.close();
            }
        }
    });
});

// Raderar drycker med ett visst ID i databasen
// OPEN_READWRITE
router.delete('/cold/:id', (req, res) =>
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
            let _id = req.params.id;
            if (!_id)
            {
                res.status(404).json({message: "Dryckens ID måste anges!"});
            } else
            {
                let db = new sqlite3.Database(dbpath, sqlite3.OPEN_READWRITE, (err) => {
                    if (err)
                    {
                        res.status(404).json({message: err.message});
                    } else {
                        db.run("DELETE FROM coldbeverages WHERE id = ?", [_id], (err) => {
                            if (err)
                            {
                                res.status(404).json({message: err.message});
                            } else
                            {
                                //Skickar koden OK;
                                res.status(200).json({message: "Drycken har raderats"});
                            }
                        });
                    }
                    db.close();
                });
            }
        }
    });
});

// Raderar drycker med ett visst ID i databasen
// OPEN_READWRITE
router.delete('/hot/:id', (req, res) =>
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
            let _id = req.params.id;
            if (!_id)
            {
                res.status(404).json({message: "Dryckens ID måste anges!"});
            } else
            {
                let db = new sqlite3.Database(dbpath, sqlite3.OPEN_READWRITE, (err) => {
                    if (err)
                    {
                        res.status(404).json({message: err.message});
                    } else {
                        db.run("DELETE FROM hotbeverages WHERE id = ?", [_id], (err) => {
                            if (err)
                            {
                                res.status(404).json({message: err.message});
                            } else
                            {
                                //Skickar koden OK;
                                res.status(200).json({message: "Drycken har raderats"});
                            }
                        });
                    }
                    db.close();
                });
            }
        }
    });
});

// VEGANSK OCH ICKE-VEGANSK MAT
// Lägger maträtter i databasen
// OPEN_READWRITE
router.post('/food', (req, res) =>
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
            let maintype = req.body.maintype;
            let photo = req.body.photo;
            let name = req.body.name;
            let category = req.body.category;
            let price = req.body.price;
            let ingredients = req.body.ingredients;
            let description = req.body.description;
            let table = "";

            if (maintype === "vegan")
                table = "INSERT INTO vegan(photo, name, category, price, ingredients, description) VALUES(?, ?, ?, ?, ?, ?)";
            else
                table = "INSERT INTO nonvegan(photo, name, category, price, ingredients, description) VALUES(?, ?, ?, ?, ?, ?)";

            if (!name || !category || !price || !ingredients || !description) {
                res.status(404).json({message: "Tomma fält får inte förekomma!"});
            } else
            {
                let db = new sqlite3.Database(dbpath, sqlite3.OPEN_READWRITE, (err) => {
                    if (err) {
                        res.status(404).json({message: err.message});
                    } else {
                        db.run(table, [photo, name, category, price, ingredients, description], (err) => {
                            if (err) {
                                res.status(404).json({message: err.message});
                            } else
                            {
                                res.status(200).json({message: "Maträtten har sparats i databasen."});
                            }
                        });
                    }
                });
                db.close();
            }
        }
    });
});

// VEGANSK OCH ICKE-VEGANSK MAT
// Uppdaterar maträtter i databasen
// OPEN_READWRITE
router.put('/food', (req, res) =>
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
            let id = req.body.id;
            let maintype = req.body.maintype;
            let photo = req.body.photo;
            let name = req.body.name;
            let category = req.body.category;
            let price = req.body.price;
            let ingredients = req.body.ingredients;
            let description = req.body.description;
            let table = "";

            if (maintype === "vegan")
                table = "UPDATE vegan SET photo=?, name=?, category=?, price=?, ingredients=?, description=? WHERE id =?";
            else
                table = "UPDATE nonvegan SET photo=?, name=?, category=?, price=?, ingredients=?, description=? WHERE id =?";

            if (!name || !category || !price || !ingredients || !description) {
                res.status(404).json({message: "Tomma fält får inte förekomma!"});
            } else
            {
                let db = new sqlite3.Database(dbpath, sqlite3.OPEN_READWRITE, (err) => {
                    if (err) {
                        res.status(404).json({message: err.message});
                    } else {
                        db.run(table, [photo, name, category, price, ingredients, description, id], (err) => {
                            if (err) {
                                res.status(404).json({message: err.message});
                            } else
                            {
                                res.status(200).json({message: "Maträtten har sparats i databasen."});
                            }
                        });
                    }
                });
                db.close();
            }
        }
    });
});

// Raderar mat med ett visst ID i databasen
// OPEN_READWRITE
router.delete('/vegan/:id', (req, res) =>
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
            let _id = req.params.id;
            if (!_id)
            {
                res.status(404).json({message: "Maträttens ID måste anges!"});
            } else
            {
                let db = new sqlite3.Database(dbpath, sqlite3.OPEN_READWRITE, (err) => {
                    if (err)
                    {
                        res.status(404).json({message: err.message});
                    } else {
                        db.run("DELETE FROM vegan WHERE id = ?", [_id], (err) => {
                            if (err)
                            {
                                res.status(404).json({message: err.message});
                            } else
                            {
                                //Skickar koden OK;
                                res.status(200).json({message: "Maträtten har raderats"});
                            }
                        });
                    }
                    db.close();
                });
            }
        }
    });
});

// Raderar mat med ett visst ID i databasen
// OPEN_READWRITE
router.delete('/nonvegan/:id', (req, res) =>
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
            let _id = req.params.id;
            if (!_id)
            {
                res.status(404).json({message: "Maträttens ID måste anges!"});
            } else
            {
                let db = new sqlite3.Database(dbpath, sqlite3.OPEN_READWRITE, (err) => {
                    if (err)
                    {
                        res.status(404).json({message: err.message});
                    } else {
                        db.run("DELETE FROM nonvegan WHERE id = ?", [_id], (err) => {
                            if (err)
                            {
                                res.status(404).json({message: err.message});
                            } else
                            {
                                //Skickar koden OK;
                                res.status(200).json({message: "Maträtten har raderats"});
                            }
                        });
                    }
                    db.close();
                });
            }
        }
    });
});

// Inhämtar alla meddelanden
router.get('/contacts', (req, res) =>
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
                    db.all("SELECT * FROM contacts", function (err, letters) {
                        if (err)
                            res.status(404).json(err.message);
                        else
                        {
                            res.status(200).json(letters);
                        }
                    });
                });
                db.close();
            });
        }
    });
});

// Raderar kundernas meddelanden med ett visst ID i databasen
// OPEN_READWRITE
router.delete('/contact/:id', function (req, res, next)
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
            let contactid = req.params.id;
            if (!contactid)
            {
                res.status(404).json({message: "Meddelandets ID måste anges!"});
            } else
            {
                let db = new sqlite3.Database(dbpath, sqlite3.OPEN_READWRITE, (err) => {
                    if (err)
                    {
                        res.status(404).json({message: err.message});
                    } else {
                        db.run("DELETE FROM contacts WHERE id = ?", [contactid], (err) => {
                            if (err)
                            {
                                res.status(404).json({message: err.message});
                            } else
                            {
                                //Skickar koden OK;
                                res.status(200).json({message: "Meddelandet har raderats"});
                            }
                        });
                    }
                    db.close();
                });
            }
        }
    });
});

// Raderar recensioner med ett visst ID i databasen
// OPEN_READWRITE
router.delete('/guestbook/:id', (req, res) =>
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
            let _id = req.params.id;
            if (!_id)
            {
                res.status(404).json({message: "Inläggets ID måste anges!"});
            } else
            {
                let db = new sqlite3.Database(dbpath, sqlite3.OPEN_READWRITE, (err) => {
                    if (err)
                    {
                        res.status(404).json({message: err.message});
                    } else {
                        db.run("DELETE FROM guestbook WHERE id = ?", [_id], (err) => {
                            if (err)
                            {
                                res.status(404).json({message: err.message});
                            } else
                            {
                                //Skickar koden OK;
                                res.status(200).json({message: "Inlägget har raderats"});
                            }
                        });
                    }
                    db.close();
                });
            }
        }
    });
});

// Inhämtar alla beställningar
// ADMIN-behörighet krävs för att se;
router.get('/orders', (req, res) =>
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
                    db.all("SELECT * FROM orders", function (err, orders) {
                        if (err)
                            res.status(404).json(err.message);
                        else
                        {
                            res.status(200).json(orders);
                        }
                    });
                });
                db.close();
            });
        }
    });
});

// Inhämtar kund med visst id;
// ADMIN-behörighet krävs för att se;
router.get('/customer/:customerid', (req, res) =>
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
            let customer_id = req.params.customerid;
            let db = new sqlite3.Database(dbpath, sqlite3.OPEN_READONLY, (err) => {
                db.serialize(function () {
                    db.all("SELECT * FROM customers WHERE customer_id =?", [customer_id], function (err, customer) {
                        if (err)
                            res.status(404).json(err.message);
                        else
                        {
                            res.status(200).json(customer);
                        }
                    });
                });
                db.close();
            });
        }
    });
});

// Inhämtar beställning med visst id;
// ADMIN-behörighet krävs för att se;
router.get('/order/:orderid', (req, res) =>
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
            let order_id = req.params.orderid;
            let db = new sqlite3.Database(dbpath, sqlite3.OPEN_READONLY, (err) => {
                db.serialize(function () {
                    db.all("SELECT * FROM orderitems WHERE order_id =?", [order_id], function (err, orderitems) {
                        if (err)
                            res.status(404).json(err.message);
                        else
                        {
                            res.status(200).json(orderitems);
                        }
                    });
                });
                db.close();
            });
        }
    });
});

// Raderar order
// Raderingen börjar bakifrån med orderitems,
// eftersom det är tre olika tabeller
// som är kopplade till varandra 
// med främmande nycklar: customer_id och order_id;
router.delete('/order', (req, res) =>
{
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(' ')[1];
    if (token === null)
    {
        res.status(404).json({message: "Obehörig person!"});
    }
    jwt.verify(token, process.env.JWT_SECRET, (err) => {
        if (err)
        {
            res.status(404).json({message: "Obehörig person!"});
        } else
        {
            let order_id = Number(req.body.order_id);
            let customer_id = Number(req.body.customer_id);
            let db = new sqlite3.Database(dbpath, sqlite3.OPEN_READWRITE, (err) => {
                db.serialize(function () {
                    db.run("DELETE FROM orderitems WHERE order_id =? AND customer_id = ?", [order_id, customer_id], function (err) {
                        if (err)
                        {
                            res.status(404).end(err.message);
                            return;
                        }
                    });
                    db.run("DELETE FROM orders WHERE order_id =? AND customer_id = ?", [order_id, customer_id], function (err) {
                        if (err) {
                            res.status(404).end(err.message);
                            return;
                        }
                    });
                    db.run("DELETE FROM customers WHERE customer_id = ?", [customer_id], function (err) {
                        if (err)
                        {
                            res.status(404).end(err.message);
                            return;
                        } else {
                            res.status(200).json({message: "Ordern har raderats i databasen"});
                        }
                    });
                });
                db.close();
            });
        }
    });
});
module.exports = router;