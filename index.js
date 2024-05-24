const express = require('express');
const app = express();

app.use((req, res, next) => {
    console.log(req.method, req.ip, req.get('User-Agent'), req.hostname)
    next()
})

const auth = (req, res, next) => {
    // console.log(req.query);

    if (req.query.password === '123') {
        next()
    } else {
        res.sendStatus(401);
    }
}

app.use(auth);

app.get('/', (req, res) => {
    res.json({ type: 'GET' })
})

app.post('/', (req, res) => {
    res.json({ type: 'POST' })
})

app.put('/', (req, res) => {
    res.json({ type: 'PUT' })
})

app.delete('/', (req, res) => {
    res.json({ type: 'DELETE' })
})

app.patch('/', (req, res) => {
    res.json({ type: 'PATCH' })
})

app.listen(8080, () => {
    console.log(`Server started on port http://localhost:8080`);
});





