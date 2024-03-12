const express = require('express');
const app = express();
const reqFilter = (req, res) => {
    if (req.query) {
        res.send('something here');
    }
    else {
        res.send('nothing here');
    }
};
app.use(reqFilter)
app.get('/',reqFilter, (req, res) => {
    res.send('root')
});
app.get('/x', (req, res) => {
    res.send('root')
});
app.listen(9000);