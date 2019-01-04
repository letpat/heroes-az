const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const routes = require('./routes');

const root = './';
const port = process.env.PORT || '3000';
const app = express();
const allowed = [
    '.js',
    '.css',
    '.png',
    '.jpg'
];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(root, 'dist')));
app.use('/api', routes);
app.get('*', (req, res) => {
    if (allowed.filter(ext => req.url.indexOf(ext) > 0).length > 0) {
        res.sendFile(path.resolve(`./${req.url}`));
    } else {
        res.sendFile('index.html', { root });
    }
});

app.listen(port, () => console.log(`API running on localhost:${port}`));