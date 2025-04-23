const express = require('express');
const { eq } = require('drizzle-orm');
const { db } = require('../db/index.js');
const { users, products } = require('../db/schema.js');

const router = express.Router();

router.post('/users', async (req, res, next) => {
    try {
        console.log(req.body);
        await db.insert(users).values(req.body);
        res.sendStatus(201);
    } catch (err) {
        next(err);
    }
});

router.get('/users', async (req, res, next) => {
    try {
        const list = await db.select().from(users);
        res.json(list);
    } catch (err) {
        next(err);
    }
});

router.get('/users/:id/products', async (req, res, next) => {
    try {
        const { id } = req.params;
        const userProducts = await db
            .select()
            .from(products)
            .where(eq(products.userId, Number(id)));
        res.json(userProducts);
    } catch (err) {
        next(err);
    }
});

module.exports = router;