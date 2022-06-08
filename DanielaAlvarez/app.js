import express from 'express';
import routerProd from './routers/routerProductos.js';
import routerCart from './routers/routerCart.js';
import routerAllProd from './routers/routerAllProdu.js';
const app = express();

 app.use(express.json());
 app.use(express.urlencoded({ extended: true }));

 app.use(express.static('./uploads'));
 app.use(express.static('./views'));

 //Configuracion mortor de plantillas, vistas
 app.set('view engine', 'pug');
 app.set('views', './views');


 //Rutas
app.use('/api/productos', routerProd);
app.use('/api/carrito', routerCart);
app.use('/api', routerAllProd);
app.get('/',(req, res) =>{
    res.redirect('/api/productos')
})


//Habilitar servidor
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en ${PORT}`);
});