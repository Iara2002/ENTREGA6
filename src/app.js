import express from "express";
import ProductManager from "./ProductManager.js";
const app = express(); 
const manager = new ProductManager();

app.get("/productos", async (req, res) => {

    const {limit} = req.query;
    const productos = await manager.getProducts();
    if(limit){
        res.send(productos.splice(0, +limit));
    }else {
       res.send(productos);
    }
    
});

app.get("products/:pid", async (req, res) => {
      const {id:pid} = req.params;
    const productos = await manager.getProductById(+pid);
    res.send(productos);
});

app.listen(8080, () => {
    console.log("conectados");
});