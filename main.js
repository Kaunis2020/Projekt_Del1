/* 
 * Larissa Rosenbrant
 * Öppen sida UTAN Admin-behörigheter,
 * Databasen öppnas i READ ONLY-LÄGET;
 */
const sqlite3 = require('sqlite3');
const express = require('express');
const bodyParser = require("body-parser");
const dotenv = require('dotenv');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// Aktivera CORS middleware för alla rutter
app.use(cors());
dotenv.config();
const dbpath = process.env.DB_DATABASE;
const port = process.env.PORT;
const handler = require('./routes/handler');
const protected = require('./routes/protected');
const open = require('./routes/open');
app.use('/handler', handler);
app.use('/protected', protected);
app.use('/open', open);

// För visning öppnas databasen i read only-läget;
// ANSTÄLLDA
app.get('/api/employees', (req, res) =>
{
    let db = new sqlite3.Database(dbpath, sqlite3.OPEN_READONLY, (err) => {
        db.serialize(function () {
            db.all("SELECT * FROM employees", function (err, employees) {
                if (err)
                    res.status(404).json(err.message);
                else
                {
                    res.status(200).json(employees);
                }
            });
        });
        db.close();
    });
});

app.get('/api/allfood', (req, res) =>
{
    let allfood = [];
    let db = new sqlite3.Database(dbpath, sqlite3.OPEN_READONLY, (err) => {
        db.serialize(function () {
            db.all("SELECT * FROM vegan", function (err, vegan) {
                if (err)
                    res.status(404).json(err.message);
                else
                {
                    vegan.forEach((element) => {
                        allfood.push(element);
                    });
                }
            });
            db.all("SELECT * FROM nonvegan", function (err, nonvegan) {
                if (err)
                    res.status(404).json(err.message);
                else
                {
                    nonvegan.forEach((element) => {
                        allfood.push(element);
                    }); 
                   res.status(200).json(allfood);
                }
            });
           
        });
        db.close();
    });
});

// För visning öppnas databasen i read only-läget;
// ICKE-VEGANSK MAT
app.get('/api/nonvegan', (req, res) =>
{
    let db = new sqlite3.Database(dbpath, sqlite3.OPEN_READONLY, (err) => {
        db.serialize(function () {
            db.all("SELECT * FROM nonvegan", function (err, nonvegan) {
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
app.get('/api/vegan', (req, res) =>
{
    let db = new sqlite3.Database(dbpath, sqlite3.OPEN_READONLY, (err) => {
        db.serialize(function () {
            db.all("SELECT * FROM vegan", function (err, vegan) {
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

// För visning öppnas databasen i read only-läget;
// KALLA DRYCKER
app.get('/api/cold', (req, res) =>
{
    let db = new sqlite3.Database(dbpath, sqlite3.OPEN_READONLY, (err) => {
        db.serialize(function () {
            db.all("SELECT * FROM coldbeverages", function (err, coldbeverages) {
                if (err)
                    res.status(404).json(err.message);
                else
                {
                    res.status(200).json(coldbeverages);
                }
            });
        });
        db.close();
    });
});

// För visning öppnas databasen i read only-läget;
// VARMA DRYCKER
app.get('/api/hot', (req, res) =>
{
    let db = new sqlite3.Database(dbpath, sqlite3.OPEN_READONLY, (err) => {
        db.serialize(function () {
            db.all("SELECT * FROM hotbeverages", function (err, hotbeverages) {
                if (err)
                    res.status(404).json(err.message);
                else
                {
                    res.status(200).json(hotbeverages);
                }
            });
        });
        db.close();
    });
});

// Skickar foton för bildspel, OPEN_READONLY
app.get('/api/slider', (req, res) =>
{
    let allphotos = [];
    let db = new sqlite3.Database(dbpath, sqlite3.OPEN_READONLY, (err) => {
        db.serialize(function () {
            db.all("SELECT photo FROM hotbeverages WHERE id > 0 AND id < 9", function (err, hotbeverages) {
                if (err)
                    res.status(404).json(err.message);
                else
                {
                    hotbeverages.forEach((element) => {
                        allphotos.push(element);
                    });
                }
            });
            db.all("SELECT photo FROM nonvegan WHERE id > 0 AND id < 12", function (err, nonvegan) {
                if (err)
                    res.status(404).json(err.message);
                else
                {
                    nonvegan.forEach((element) => {
                        allphotos.push(element);
                    });
                }
            });
            db.all("SELECT photo FROM vegan WHERE id > 0 AND id < 12", function (err, vegan) {
                if (err)
                    res.status(404).json(err.message);
                else
                {
                    vegan.forEach((element) => {
                        allphotos.push(element);
                    });
                    // Sorterar i alfabetisk ordning;
                    allphotos.sort(function (a, b) {
                        if (a.photo < b.photo) {
                            return -1;
                        } else if (a.photo > b.photo) {
                            return 1;
                        } else
                            return 0;
                    });
                    res.status(200).json(allphotos);
                }
            });
        });
        db.close();
    });
});

// Inhämtar alla omdömen för visning
// READ ONLY
app.get('/api/guestbook', (req, res) =>
{
    let db = new sqlite3.Database(dbpath, sqlite3.OPEN_READONLY, (err) => {
        db.serialize(function () {
            db.all("SELECT * FROM guestbook", function (err, feedback) {
                if (err)
                    res.status(404).json(err.message);
                else
                {
                    res.status(200).json(feedback);
                }
            });
        });
        db.close();
    });
});

app.listen(port);
