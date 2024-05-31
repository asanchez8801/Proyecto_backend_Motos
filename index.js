import "dotenv/config";
import "./conexion_db.js";
import servidor from "./servidor.js"

servidor.listen(3000, ()=>{
    console.log("corriendo servidor con nodemon");
    });