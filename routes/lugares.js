const express = require('express');
const router = express.Router();
const db = require('../config/db');
const s3 = require('../config/s3');
const multer = require('multer');
const path = require('path');
const upload = multer({ storage: multer.memoryStorage() });

// Obtener todos los lugares turísticos
router.get('/', (req, res) => {
    db.query('SELECT * FROM lugares_turisticos', (err, results) => {
        if (err) {
            console.error('Error fetching places: ', err);
            return res.status(500).send(err);
        }
        res.json(results);
    });
});



module.exports = router;
