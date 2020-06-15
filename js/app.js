var a =require("./alumno.js")
var e= require("./estructura.js")

module.exports = {
    
    agregarp: function(req){
        nocuenta = req.body.nocuenta
        nombre = req.body.nombre
        curp = req.body.curp
        nestudios = req.body.nestudios
        plantel = req.body.plantel
        const miInfo = new Estructura();
        let product = new Producto(nocuenta,nombre,curp,nestudios,plantel);
        miInfo.agregar(product);
    },
    obtener : function(nocuenta){
        let nodoR = miInfo.buscar(nocuenta);
        return nodoR.showInfo();
    }
}