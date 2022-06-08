import { Router } from 'express';
import Productos from '../class/productos.js';
import multer from 'multer';
import adminMiddleware from '../middleware/admin.js';

const productos = new Productos();


const routerProd = Router();

routerProd.get('/:id', (req, res) =>{
  let data = productos.getById(req.params.id);
  res.render('./index.pug', {data})
})

//Configurar Multer
const storage = multer.diskStorage({
    destination: function(req, file,cb){
        cb(null,'uploads')
    },
    filename:function(req,file,cb){
        cb(null,`${file.originalname}`)
    }
})
const upload = multer({storage: storage})

let test = [];


routerProd.post('/agregar',upload.single('img') , adminMiddleware, (req, res, next) =>{
    const file = req.file;

    if(!file){
       const error = new Error('No se ha seleccionado ningun archivo');
       error.httpStatusCode = 400;
       return next(error);
    }
    test = {...req.body, img: file.filename};
    res.send(productos.save(test));
    res.redirect('/');

})

routerProd.put('/:id',adminMiddleware, (req, res) =>{
    res.send(productos.putData(req.body, req.params.id))
    res.redirect('/');
});

routerProd.delete('/:id', adminMiddleware, (req, res) =>{
    res.send(productos.deleteData(req.params.id))
    res.redirect('/')
});




export default routerProd;