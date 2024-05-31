import express from "express";
import enrutadorMotos from "./src/rutas/rutasMotos.js";
import morgan from "morgan";

 const servidor = express();
 
 servidor.use(morgan("dev"));
 servidor.use(express.json());
 servidor.use("/motos", enrutadorMotos);
 
 //ruta raiz 
 servidor.get("/", (solicitud , respuesta)=>{
  respuesta.status(404).send(
  "No Encontrado"
  );
 });
 
 //exportar el archivo 
 export default servidor;