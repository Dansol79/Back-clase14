import { Router } from 'express';
import Productos from '../class/productos.js';
import adminMiddleware from '../middleware/admin.js';

const productos = new Productos();


const routerProd = Router();

routerProd.get('/:id', (req, res) =>{
    let id = req.params.id;
    if(id){
        let data = productos.getById(id);
        res.json(data);
    }else{
        let data = productos.getAll();
        res.json(data);
    }
})

routerProd.post('/',adminMiddleware, (req, res) =>{
    productos.save(req.body);
    res.json({mensaje: "Producto guardado"});
})

routerProd.put('/:id',adminMiddleware, (req, res) =>{
    productos.putData(req.body,req.params.id);
    res.json({mensaje: "Producto actualizado"});
});

routerProd.delete('/:id', adminMiddleware, (req, res) =>{
    productos.deleteData(req.params.id);
    res.json({mensaje: "Producto eliminado"});
});




export default routerProd;