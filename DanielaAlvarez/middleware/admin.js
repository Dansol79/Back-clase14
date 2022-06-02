

function adminMiddleware(req, res, next) {
    let admin = true;

    if(admin) {
        next();
    }else{
        res.status(403).send('No tienes permisos para acceder a esta ruta');
    }
   
}

export default adminMiddleware;