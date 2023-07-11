var express = require('express');
var router = express.Router();
const axios = require("axios")

const url = "https://api.thecatapi.com/v1/images/search?limit=10";
const api_key = "live_01T2OeMxgOePLxsmYF1GcByPq5dBXPmYCi7oezd5Vud75CbGxLAXRAvzqYxOd3II"

/* GET users listing. */
router.get('/:id', async function (req, res, next) {
  const id = req.params.id
  console.log(url + `&breeds_id=${id}`)
  api = await axios.get(url + `&breed_ids=${id}&api_key=${api_key}`)
  json = api.data;
  console.log(json)
  res.send(json)
});

module.exports = router;
