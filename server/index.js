const express = require('express');

const app = express();


app.get('/', (req, resp) => {
    resp.send({Hi : 'Hello Express!!'});
})

app.listen(5000);