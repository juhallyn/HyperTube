const express = require('express');
const axios = require('axios');

const app = express();

const ytsApiUrl = "https://yts.mx/api/v2/list_movies.json?limit=50"

app.get('/api/movies/list', (req, res) => {
    res.send(JSON.stringify(api));
});

app.get('/api/movies/list/:page', (req, res) => {
    axios.get(`${ytsApiUrl}&page=${req.params.page}`).then((apiResponse) => {
        res.send(JSON.stringify(apiResponse.data.data));
    })
})

app.listen(8080, () => {
    console.log('listen 8080...');
});