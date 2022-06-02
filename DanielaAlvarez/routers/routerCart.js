import { Router } from 'express';
import Cart from '../class/cart.js';

const cart = new Cart();

const routerCart = Router();

routerCart.get('/:id?', (req, res) =>{
    let producto = cart.listProducts(req.params.id);
    res.json(producto);
   
})

routerCart.post('/', (req, res) =>{
    cart.createCart(req.body);
    res.json({mensaje: "Producto guardado"});
})

routerCart.delete('/:id', (req, res) =>{
    cart.deleteCart(req.params.id);
    res.json({mensaje: "Producto eliminado"});
})

routerCart.get('/:id/productos', (req, res) =>{
    let producto = cart.listProducts(req.params.id);
    res.json(producto);
   
})

routerCart.post('/:id/productos', (req, res) =>{
    cart.addProductsCart(req.body, req.params.id);
    res.json({mensaje: "Producto guardado"});
});

routerCart.delete('/:id/productos/:id_prod', (req, res) =>{
    cart.deleteProductsCart(req.params.id_prod, req.params.id);
    res.json({mensaje: "Producto eliminado"});
});




export default routerCart;