import express from 'express';
import routerProd from './routers/routerProductos.js';
import routerCart from './routers/routerCart.js';
const app = express();

 app.use(express.json());
 app.use(express.urlencoded({ extended: true }));

 //Rutas
app.use('/api/productos', routerProd);
app.use('/api/cart', routerCart);


//Habilitar servidor
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en ${PORT}`);
});