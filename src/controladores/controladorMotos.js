import ModeloMoto from "../modelos/modeloMotos.js"

const ControladorMotos = {

    crearMoto: async (solicitud , respuesta)=>{
    try {
     const nuevaMoto = new ModeloMoto(solicitud.body);
     const motoCreada = await nuevaMoto.save();
     
    if(motoCreada.id){
    respuesta.json({
    resultado: "Proceso Exitoso",
    mensaje: "Registro creado satisfactoriamente en la base de datos",
    id: motoCreada._id
    });
    }
                                                                       
    } catch (error) {
        respuesta.json({
            resultado: "Proceso Denegado",
            mensaje: "Ocurrió un error al crear el registro en la base de datos",
            datos: error  
    });
    }
},
    
    /* ----------------------------------------------------- */ 
       leerMoto: async (solicitud , respuesta)=>{
       try {
        const motoEncontrada = await ModeloMoto.findById(solicitud.params.id)
        if (motoEncontrada._id){
        respuesta.json({
        resultado: "Proceso Exitoso",
        mensaje: "El registro fue leído satisfactoriamente",
        datos: motoEncontrada
        });
        }
       } catch (error) {
        respuesta.json({
            resultado: "Proceso Denegado",
            mensaje: "Ocurrió un error al tratar de consultar el registro en la base de datos",
            datos: error
            });
       }
       },
       
    /* ----------------------------------------------------- */ 
       leerMotos: async (solicitud , respuesta)=>{
       try {
        const todasLasMotos = await ModeloMoto.find();
            respuesta.json({
            resultado: "Proceso Exitoso",
            mensaje: "Todos los registros fueron leídos satisfactoriamente",
            datos: todasLasMotos
            });
            
       } catch (error) {
        respuesta.json({
            resultado: "Proceso Denegado",
            mensaje: "Ocurrió un error al tratar de consultar todos los registros de la base de datos",
            datos: error
            });
       }
       },
    /* ----------------------------------------------------- */    
       actualizarMoto: async (solicitud , respuesta)=>{
        try {
            const motoActualizada = await ModeloMoto.findByIdAndUpdate(solicitud.params.id , solicitud.body);
            if (motoActualizada._id) {
            respuesta.json({
                resultado: "Proceso Exitoso",
                mensaje: "Registro actualizado satisfactoriamente",
                datos: motoActualizada._id
                });
            }
        } catch  {
            respuesta.json({
                resultado: "Proceso Denegado",
                mensaje: "Ocurrió un error al tratar de actualizar el registro en la base de datos",
                datos: error,
                });
        }
       },
    /* ----------------------------------------------------- */    
       eliminarMoto: async (solicitud , respuesta)=>{
        try {
            const motoEliminada = await ModeloMoto.findByIdAndDelete(solicitud.params.id)
            if (motoEliminada._id){
            respuesta.json({
            resultado: "Proceso Exitoso",
            mensaje: "Registro eliminado satisfactoriamente",
            datos: null
            });
            }
           } catch (error) {
            respuesta.json({
                resultado: "Proceso Denegado",
                mensaje: "Ocurrió un error al tratar de eliminar el registro en la base de datos",
                datos: error
                });
           }
           },
}

export default ControladorMotos;

