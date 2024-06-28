const express = require('express');
const router = express.Router();
const db = require('../config/db');
const s3 = require('../config/s3');
const multer = require('multer');
const path = require('path');
const upload = multer({ storage: multer.memoryStorage() });

// Obtener todos los restaurantes
router.get('/', (req, res) => {
    db.query('SELECT * FROM restaurantes', (err, results) => {
        if (err) {
            console.error('Error fetching restaurants: ', err);
            return res.status(500).send(err);
        }
        res.json(results);
    });
});


module.exports = router;
