import express from "express";
import ProductManager from "./ProductManager.js";
const app = express();
app.use(express.urlencoded({ extended:true}));
app.use(express.json());
const manager = new ProductManager(".products.json");

app.get("/products", async (rq, res) => {
try {
    const limit = req.query.limit;
    const products = await ProductManager.getAllProducts();
     res.send(products);
}
});

app.get('/products/:pid', async (req, res) => {
    try {
      const productId = req.params.pid;
    }
});

app.listen(8080, () => {
    console.log("servidor 8080");
});