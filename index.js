const express = require('express');

const app = express();


app.get('/', (req, resp) => {
    resp.send({Hi : 'Hello Express!!'});
})

const PORT = process.env.PORT || 5000
app.listen(PORT);