var express = require('express');
var router = express.Router();

let pokemonMap = new Map();
router.get('/', function (req, res, next) {
    const name = req.query.name;
    if (!name) {
        return res.status(400).json({ error: 'Name is required' });
    }

    let count = pokemonMap.get(name) || 0;
    const renamedName = `${name}-${getFibonacci(count)}`;

    pokemonMap.set(name, count + 1);

    res.json({ newName: renamedName });
});

function getFibonacci(n) {
    if (n <= 0) return 0;
    if (n === 1) return 1;

    let a = 0;
    let b = 1;
    let temp;

    for (let i = 2; i <= n; i++) {
        temp = a + b;
        a = b;
        b = temp;
    }

    return b;
}

module.exports = router;
