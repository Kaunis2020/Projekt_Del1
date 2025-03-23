/* 
 * Larissa, Öppen connection
 * OPEN_READONLY
 * Ingen Admin-behörighet
 * Sortering, filtrering samt kundernas meddelanden
 */
const sqlite3 = require('sqlite3');
const express = require('express');
const router = express.Router({mergeParams: true});
// Uppgifter inhämtas från ENV-filen;
const port = process.env.PORT;
const dbpath = process.env.DB_DATABASE;

// För visning öppnas databasen i read only-läget;
// Filtrerar efter önskad kategori: t ex soppa, dessert, mm.
router.get('/nonvegan/:category', (req, res) =>
{
    let category = req.params.category;
    let db = new sqlite3.Database(dbpath, sqlite3.OPEN_READONLY, (err) => {
        db.serialize(function () {
            db.all("SELECT * FROM nonvegan WHERE category=?", [category], function (err, nonvegan) {
                if (err)
                    res.status(404).json(err.message);
                else
                {
                    res.status(200).json(nonvegan);
                }
            });
        });
        db.close();
    });
});
// För visning öppnas databasen i read only-läget;
// VEGANSK MAT
// Söker på vald kategori;
router.get('/vegan/:category', (req, res) =>
{
    let category = req.params.category;
    let db = new sqlite3.Database(dbpath, sqlite3.OPEN_READONLY, (err) => {
        db.serialize(function () {
            db.all("SELECT * FROM vegan WHERE category=?", [category], function (err, vegan) {
                if (err)
                    res.status(404).json(err.message);
                else
                {
                    res.status(200).json(vegan);
                }
            });
        });
        db.close();
    });
});
// Kalla drycker
router.get('/cold/:category', (req, res) =>
{
    let category = req.params.category;
    let db = new sqlite3.Database(dbpath, sqlite3.OPEN_READONLY, (err) => {
        db.serialize(function () {
            db.all("SELECT * FROM coldbeverages WHERE category=?", [category], function (err, beverages) {
                if (err)
                    res.status(404).json(err.message);
                else
                {
                    res.status(200).json(beverages);
                }
            });
        });
        db.close();
    });
});
// Varma drycker
router.get('/hot/:category', (req, res) =>
{
    let category = req.params.category;
    let db = new sqlite3.Database(dbpath, sqlite3.OPEN_READONLY, (err) => {
        db.serialize(function () {
            db.all("SELECT * FROM hotbeverages WHERE category=?", [category], function (err, beverages) {
                if (err)
                    res.status(404).json(err.message);
                else
                {
                    res.status(200).json(beverages);
                }
            });
        });
        db.close();
    });
});
// För visning öppnas databasen i read only-läget;
router.get('/categories/distinct', (req, res) =>
{
    let all = [];
    let db = new sqlite3.Database(dbpath, sqlite3.OPEN_READONLY, (err) => {
        db.serialize(function () {
            db.all("SELECT DISTINCT category FROM coldbeverages", function (err, beverages) {
                if (err)
                    res.status(404).json(err.message);
                else
                {
                    beverages.forEach((element) => {
                        all.push(element);
                    });
                }
            });
            db.all("SELECT DISTINCT category FROM hotbeverages", function (err, beverages) {
                if (err)
                    res.status(404).json(err.message);
                else
                {
                    beverages.forEach((element) => {
                        all.push(element);
                    });
                }
            });
            db.all("SELECT DISTINCT category FROM nonvegan", function (err, beverages) {
                if (err)
                    res.status(404).json(err.message);
                else
                {
                    beverages.forEach((element) => {
                        all.push(element);
                    });
                }
            });
            db.all("SELECT DISTINCT category FROM vegan", function (err, beverages) {
                if (err)
                    res.status(404).json(err.message);
                else
                {
                    beverages.forEach((element) => {
                        all.push(element);
                    });
                }
                // Returnerar endast unika kategorier; 
                const uniques = all.filter((value, index, self) =>
                    index === self.findIndex((t) => (
                                t.category === value.category
                                ))
                );
                res.status(200).json(uniques);
            });
        });
        db.close();
    });
});
// För visning öppnas databasen i read only-läget;
// Tar bort hänsyn till versaler och gemener;
// COLLATE NOCASE tar bort stora och små bokstäver;
// Letar på olika kategorier;
router.get('/search/:category', (req, res) =>
{
    let category = req.params.category;
    let all = [];
    let db = new sqlite3.Database(dbpath, sqlite3.OPEN_READONLY, (err) => {
        db.serialize(function () {
            db.all("SELECT * FROM coldbeverages WHERE category=? COLLATE NOCASE", [category], function (err, beverages) {
                if (err)
                    res.status(404).json(err.message);
                else
                {
                    beverages.forEach((element) => all.push(element));
                }
            });
            db.all("SELECT * FROM hotbeverages WHERE category=? COLLATE NOCASE", [category], function (err, beverages) {
                if (err)
                    res.status(404).json(err.message);
                else
                {
                    beverages.forEach((element) => all.push(element));
                }
            });
            db.all("SELECT * FROM nonvegan WHERE category=? COLLATE NOCASE", [category], function (err, beverages) {
                if (err)
                    res.status(404).json(err.message);
                else
                {
                    beverages.forEach((element) => all.push(element));
                }
            });
            db.all("SELECT * FROM vegan WHERE category=? COLLATE NOCASE", [category], function (err, beverages) {
                if (err)
                    res.status(404).json(err.message);
                else
                {
                    beverages.forEach((element) => all.push(element));
                }
                res.status(200).json(all);
            });
        });
        db.close();
    });
});
// För visning öppnas databasen i read only-läget;
// Tar bort hänsyn till versaler och gemener;
// COLLATE NOCASE tar bort stora och små bokstäver;
// Letar på olika frisökningar;
router.get('/freesearch/:name', (req, res) =>
{
    let name = '%' + req.params.name + '%';
    let all = [];
    let db = new sqlite3.Database(dbpath, sqlite3.OPEN_READONLY, (err) => {
        db.serialize(function () {
            db.all("SELECT * FROM coldbeverages WHERE name LIKE ? OR ingredients LIKE ? COLLATE NOCASE", [name, name], function (err, beverages) {
                if (err)
                    res.status(404).json(err.message);
                else
                {
                    beverages.forEach((element) => all.push(element));
                }
            });
            db.all("SELECT * FROM hotbeverages WHERE name LIKE ? OR ingredients LIKE ? COLLATE NOCASE", [name, name], function (err, beverages) {
                if (err)
                    res.status(404).json(err.message);
                else
                {
                    beverages.forEach((element) => all.push(element));
                }
            });
            db.all("SELECT * FROM nonvegan WHERE name LIKE ? OR ingredients LIKE ? COLLATE NOCASE", [name, name], function (err, beverages) {
                if (err)
                    res.status(404).json(err.message);
                else
                {
                    beverages.forEach((element) => all.push(element));
                }
            });
            db.all("SELECT * FROM vegan WHERE name LIKE ? OR ingredients LIKE ? COLLATE NOCASE", [name, name], function (err, beverages) {
                if (err)
                    res.status(404).json(err.message);
                else
                {
                    beverages.forEach((element) => all.push(element));
                }
                res.status(200).json(all);
            });
        });
        db.close();
    });
});
// Filtrerar matträtter efter priset;
router.get('/nonvegan/price/:price', (req, res) =>
{
    let price = req.params.price;
    let db = new sqlite3.Database(dbpath, sqlite3.OPEN_READONLY, (err) => {
        db.serialize(function () {
            db.all("SELECT * FROM nonvegan WHERE price <= ?", [price], function (err, nonvegan) {
                if (err)
                    res.status(404).json(err.message);
                else
                {
                    res.status(200).json(nonvegan);
                }
            });
        });
        db.close();
    });
});
// Filtrerar matträtter efter priset;
router.get('/vegan/price/:price', (req, res) =>
{
    let price = req.params.price;
    let db = new sqlite3.Database(dbpath, sqlite3.OPEN_READONLY, (err) => {
        db.serialize(function () {
            db.all("SELECT * FROM vegan WHERE price <= ?", [price], function (err, vegan) {
                if (err)
                    res.status(404).json(err.message);
                else
                {
                    res.status(200).json(vegan);
                }
            });
        });
        db.close();
    });
});
// Filtrerar drycker efter priset;
router.get('/hot/price/:price', (req, res) =>
{
    let price = req.params.price;
    let db = new sqlite3.Database(dbpath, sqlite3.OPEN_READONLY, (err) => {
        db.serialize(function () {
            db.all("SELECT * FROM hotbeverages WHERE price <= ?", [price], function (err, beverages) {
                if (err)
                    res.status(404).json(err.message);
                else
                {
                    res.status(200).json(beverages);
                }
            });
        });
        db.close();
    });
});
// Filtrerar drycker efter priset;
router.get('/cold/price/:price', (req, res) =>
{
    let price = req.params.price;
    let db = new sqlite3.Database(dbpath, sqlite3.OPEN_READONLY, (err) => {
        db.serialize(function () {
            db.all("SELECT * FROM coldbeverages WHERE price <= ?", [price], function (err, beverages) {
                if (err)
                    res.status(404).json(err.message);
                else
                {
                    res.status(200).json(beverages);
                }
            });
        });
        db.close();
    });
});
// För visning öppnas databasen i read only-läget;
// Beställning av MATRÄTTER
router.get('/order', (req, res) =>
{
    let food = [];
    let db = new sqlite3.Database(dbpath, sqlite3.OPEN_READONLY, (err) => {
        db.serialize(function () {
            db.all("SELECT name, category, type, price FROM nonvegan", function (err, nonvegan) {
                if (err)
                    res.status(404).json(err.message);
                else
                {
                    nonvegan.forEach((element) => food.push(element));
                }
            });
            db.all("SELECT name, category, type, price FROM vegan", function (err, vegan) {
                if (err)
                    res.status(404).json(err.message);
                else
                {
                    vegan.forEach((element) => food.push(element));
                    res.status(200).json(food);
                }
            });
        });
        db.close();
    });
});
// Recensioner från restaurangens kunder
// Kunderna kan både skriva och läsa recentioner
router.post("/guestbook", (req, res) =>
{
    let name = req.body.name;
    let email = req.body.email;
    let feedback = req.body.feedback;
    let rating = req.body.rating;
    let date = req.body.date;
    if (!name || !email || !feedback) {
        res.status(404).json({message: "Tomma fält får inte förekomma!"});
    } else
    {
        let db = new sqlite3.Database(dbpath, sqlite3.OPEN_READWRITE, (err) => {
            if (err) {
                res.status(404).json({message: err.message});
            } else {
                db.run('INSERT INTO guestbook(name, email, feedback, rating, date) VALUES(?, ?, ?, ?, ?)',
                        [name, email, feedback, rating, date], (err) => {
                    if (err) {
                        res.status(404).json({message: err.message});
                    } else
                    {
                        res.status(200).json({message: "Omdömet har sparats i databasen."});
                    }
                });
            }
        });
        db.close();
    }
});
// Meddelanden från restaurangens kunder
router.post("/contacts", (req, res) =>
{
    let fname = req.body.fname;
    let lname = req.body.lname;
    let phone = req.body.phone;
    let email = req.body.email;
    let heading = req.body.heading;
    let letter = req.body.letter;
    let date = req.body.date;
    if (!fname || !lname || !phone || !email || !letter) {
        res.status(404).json({message: "Tomma fält får inte förekomma!"});
    } else
    {
        let db = new sqlite3.Database(dbpath, sqlite3.OPEN_READWRITE, (err) => {
            if (err) {
                res.status(404).json({message: err.message});
            } else {
                db.run('INSERT INTO contacts(fname, lname, phone, email, heading, letter, date) VALUES(?, ?, ?, ?, ?, ?, ?)',
                        [fname, lname, phone, email, heading, letter, date], (err) => {
                    if (err) {
                        res.status(404).json({message: err.message});
                    } else
                    {
                        res.status(200).json({message: "Ditt meddelande har sparats i databasen."});
                    }
                });
            }
        });
        db.close();
    }
});
// postar kundens uppgifter
router.post("/customer", (req, res) =>
{
    let fname = req.body.fname;
    let lname = req.body.lname;
    let phone = req.body.phone;
    let email = req.body.email;
    let address = req.body.address;
    if (!fname || !lname || !phone || !email || !address) {
        res.status(404).json({message: "Tomma fält får inte förekomma!"});
        return;
    } else {
        let db = new sqlite3.Database(dbpath, sqlite3.OPEN_READWRITE, (err) => {
            if (err) {
                res.status(404).json({message: err.message});
            } else {
                db.run('INSERT INTO customers(fname, lname, phone, email, address) VALUES (?, ?, ?, ?, ?)', [fname, lname, phone, email, address], (err) => {
                    if (err) {
                        res.status(404).json({message: err.message});
                    } else
                    {
                        var sql = "SELECT LAST_INSERT_ROWID()";
                        db.get(sql, function (err, customid) {
                            if (err)
                                res.status(404).json(err.message);
                            else
                            {
                                /* Utvinner värdet från objectet */
                                var value = Object.values(customid);
                                // returnerar kundens id;
                                res.status(200).json(value[0]);
                            }
                        });
                    }
                });
            }
        });
        db.close();
    }
});

// postar kundens order
router.post("/order", (req, res) =>
{
    let customer_id = req.body.customer_id;
    let visitdate = req.body.visitdate;
    let servicetype = req.body.servicetype;
    let tabletype ="";
    if(servicetype === "Ett bord"){
        tabletype = req.body.tabletype;
    }   
    let address = req.body.address;
    let persons = req.body.persons;
    let orderdate = req.body.orderdate;
    let ordertotal = req.body.ordertotal;
    if (!servicetype || !persons || !orderdate || !ordertotal || !address) {
        res.status(404).json({message: "Tomma fält får inte förekomma!"});
        return;
    } else {
        let db = new sqlite3.Database(dbpath, sqlite3.OPEN_READWRITE, (err) => {
            if (err)
            {
                console.log(err.message);
                res.status(404).json({message: err.message});
            } else
            {
                db.run('INSERT INTO orders(customer_id, visitdate, servicetype, tabletype, address, persons, orderdate, ordertotal) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
                        [customer_id, visitdate, servicetype, tabletype, address, persons, orderdate, ordertotal], (err) => {
                    if (err)
                    {
                        console.log(err.message);
                        res.status(404).json({message: err.message});
                    } else
                    {
                        db.get("SELECT LAST_INSERT_ROWID()", function (err, orderid) {
                            if (err)
                            {
                                console.log(err.message);
                                res.status(404).json({message: err.message});
                            } else {
                                /* Utvinner värdet från objectet */
                                var value = Object.values(orderid);
                                // returnerar order_id;
                                res.status(200).json(value[0]);
                            }
                        });
                    }
                });
            }
        });
        db.close();
    }
});

// postar orderitems
// HÄR MÅSTE MAN ANVÄNDA PREPARED STATEMENT
// ANNARS HINNER INTE GÖRA INSÄTTNINGAR;
router.post("/orderitems", (req, res) =>
{
    let message = '';
    var values = req.body.values;
    if (values.length === 0) {
        res.status(404).json({message: "Tomma fält får inte förekomma!"});
        return;
    } else
    {
        let db = new sqlite3.Database(dbpath, sqlite3.OPEN_READWRITE, (err) => {
            if (err)
                message = err.message;
            db.serialize(function () {
                var stmt = db.prepare("INSERT INTO orderitems(order_id, customer_id, name, category, type, price, quantity, subtotal) VALUES (?, ?, ?, ?, ?, ?, ?, ?)");
                for (var i = 0; i < values.length; i++) {
                    stmt.run(values[i].order_id, values[i].customer_id, values[i].name, values[i].category, values[i].type, values[i].price, values[i].quantity, values[i].subtotal);
                }
                stmt.finalize();
            });
        });
        message = "Beställningen har sparats i databasen.";
        res.status(200).json({message: message});
        db.close();
    }
});

module.exports = router;