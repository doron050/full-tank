const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// returns the 'id' argument that was given
app.get('/test', (req, res) => {
    res.send('id: ' + req.query.id);
});

app.listen(port, () => console.log('full-tank app listening on port 3000!'));
