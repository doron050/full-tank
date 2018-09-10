const express = require('express');
const app = express();

// returns the 'id' argument that was given
app.get('/test', (req, res) => {
    res.send('id: ' + req.query.id);
});

app.listen(3000, () => console.log('full-tank app listening on port 3000!'));
