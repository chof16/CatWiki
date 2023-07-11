var express = require('express');
var router = express.Router();
const axios = require("axios")

const url = `https://api.thecatapi.com/v1/breeds`;
const api_key = "live_01T2OeMxgOePLxsmYF1GcByPq5dBXPmYCi7oezd5Vud75CbGxLAXRAvzqYxOd3II"
let config = {
    headers: {
        'x-api-key': api_key
    }
}

/* GET users listing. */
router.get('/', async function (req, res, next) {
    api = await axios.get(url, config)
    json = api.data;
    res.send(json)
});

router.get('/:id', async function (req, res, next) {
    const id=req.params.id
    api = await axios.get(url+`/${id}`, config)
    json = api.data;
    console.log(json)
    res.send(json)
});

router.get('/top/10', async function (req, res, next) {
    api = await axios.get(url+"?limit=10", config)
    json = api.data;
    console.log(json)
    res.send(json)
});

module.exports = router;
