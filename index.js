const express = require('express');
const app = express();
const fs = require('fs');

const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const products = data.products;

app.use(express.json());


app.use((req, res, next) => {
    // console.log(req.method, req.ip, req.get('User-Agent'), req.hostname)
    next()
})


const auth = (req, res, next) => {
    next();
}

app.use(auth);
//Products
//API  ROOT , base URL

//Create POST / products   C R U D
app.post('/products', (req, res) => {
    console.log(req.body);
    products.push(req.body);
    res.status(201).json(req.body);

})


// Read GET /products/:id
app.get('/products/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const product = products.find(p => p.id === id);
    res.json(product);
})

//Update PATCH / products   C R U D
app.patch('/products/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const productIndex = products.findIndex(p => p.id === id)
    const product = products[productIndex];
    products.splice(productIndex, 1, { ...product, ...req.body })
    res.status(201).json();
});

//Update PUT / products   C R U D
app.put('/products/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const productIndex = products.find(p => p.id === id)
    products.splice(productIndex, 1, { ...req.body, id: id })
    res.status(201).json();
})

app.get('/products', (req, res) => {
    res.json(products);
})

//delete DELETE /products/:id
app.delete('/products/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const productIndex = products.findIndex(p => p.id === id)
    const product = products[productIndex];
    products.splice(productIndex, 1)
    res.status(201).json(product);
})

app.listen(8080, () => {
    console.log(`Server started on port http://localhost:8080`);
});





