const express = require('express');
const { db } = require('../db/index.js');
const { products } = require('../db/schema.js');

const router = express.Router();

router.post('/products', async (req, res, next) => {
    try {
        await db.insert(products).values(req.body);
        res.sendStatus(201);
    } catch (err) {
        next(err);
    }
});

router.get('/products', async (req, res, next) => {
    try {
        const list = await db.select().from(products);
        res.json(list);
    } catch (err) {
        next(err);
    }
});

module.exports = router;