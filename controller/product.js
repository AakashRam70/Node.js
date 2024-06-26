const fs = require("fs");
const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
const products = data.products;

//seprating out all CRUD Operation
exports.getAllProducts = (req, res) => {
    res.json(products);
}
exports.getSpecificProducts = (req, res) => {
    const id = parseInt(req.params.id);
    const product = products.find(p => p.id === id);
    res.json(product);
}
exports.postProducts = (req, res) => {
    console.log(req.body);
    products.push(req.body);
    res.status(201).json(req.body);
}
exports.patchProduct = (req, res) => {
    const id = parseInt(req.params.id);
    const productIndex = products.findIndex(p => p.id === id)
    const product = products[productIndex];
    products.splice(productIndex, 1, { ...product, ...req.body })
    res.status(201).json();
}
exports.updateProduct = (req, res) => {
    const id = parseInt(req.params.id);
    const productIndex = products.find(p => p.id === id)
    products.splice(productIndex, 1, { ...req.body, id: id })
    res.status(201).json();
}
exports.deleteProduct = (req, res) => {
    const id = parseInt(req.params.id);
    const productIndex = products.findIndex(p => p.id === id)
    const product = products[productIndex];
    products.splice(productIndex, 1)
    res.status(201).json(product);
}
