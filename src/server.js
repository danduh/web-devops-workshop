const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    console.log('URL -> ', req.url);
    console.log('PATH -> ', req.path);
    console.log('BODY -> ', req.body);
    console.log('PROTOCOL -> ', req.protocol);
    console.log('QUERY -> ', req.query);
    return res.send('Hello World from Docker !!!');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
