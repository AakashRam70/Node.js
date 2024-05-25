const express = require("express");
const productController = require('../controller/product')
const router = express.Router();

router
    .get('/', productController.getAllProducts)
    .get('/:id', productController.getSpecificProducts)
    .post('/', productController.postProducts)
    .patch('/:id', productController.patchProduct)
    .put('/:id', productController.updateProduct)
    .delete('/:id', productController.deleteProduct)

exports.router = router;