var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    const randomNumber = parseInt(Math.random() * 100);
    const isPrime = checkPrime(randomNumber);


    res.json({ status: isPrime, primeNumber: randomNumber });
});

function checkPrime(num) {
    if (num <= 1) return false;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

module.exports = router;
