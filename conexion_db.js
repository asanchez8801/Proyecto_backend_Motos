import mongoose from "mongoose";

mongoose.connect(process.env.MONGODB_ATLAS_URI).then((dato)=>{
    console.log("Conectado exitosamente a la base de datos");
}).catch((error)=>{
    console.log("Error de conexión a la Base de Datos");
})