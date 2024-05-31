import { Schema, Types, model } from "mongoose";

const esquemaMotos = new Schema(
{
    marca: {type: String, required: true},
    modelo: {type: String, required: true},
    cilindraje: {type: String, required: true},
    torque: {type: String, required: true},
    potencia: {type: String, required: true},
    altura: {type: String, required: true},
    seguridad: {type: String, required: true},
    peso: {type: String, required: true},
    tamanoRD: {type: String, required: true},
    tamanoRT: {type: String, required: true},
})

export default model("Motos", esquemaMotos);