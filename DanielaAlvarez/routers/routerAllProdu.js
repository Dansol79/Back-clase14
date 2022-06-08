import { Router } from "express";

const routerAllProd = Router()

routerAllProd.get('/',(req,res)=>{
    res.render('./layouts/form-add-prod.pug')
})

export default routerAllProd;