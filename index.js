const express = require('express');
const app = express();
const productRouter = require('./routes/product')

//bodyParser
app.use(express.json());
app.use('/products', productRouter.router);

const auth = (req, res, next) => {
    next();
}

app.use(auth);
//Products
//API  ROOT , base URL

app.listen(8080, () => {
    console.log(`Server started on port http://localhost:8080`);
});





