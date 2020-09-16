const express = require('express');

const app = express();


app.get('/', (req, resp) => {
    resp.send({Hi : 'Hello Afsha!!, Imran Loves You'});
})

const PORT = process.env.PORT || 5000
app.listen(PORT);