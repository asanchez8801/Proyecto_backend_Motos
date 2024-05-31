import { Router } from "express";
import ControladorMotos from "../controladores/controladorMotos.js";

const enrutadorMotos = Router();

   enrutadorMotos.post("/", ControladorMotos.crearMoto);
   enrutadorMotos.get("/:id", ControladorMotos.leerMoto);
   enrutadorMotos.get("/", ControladorMotos.leerMotos);
   enrutadorMotos.put("/:id", ControladorMotos.actualizarMoto );
   enrutadorMotos.delete("/:id", ControladorMotos.eliminarMoto );
   
   export default enrutadorMotos;