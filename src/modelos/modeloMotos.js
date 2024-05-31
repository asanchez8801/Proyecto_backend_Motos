import { Schema, Types, model } from "mongoose";

const esquemaMotos = new Schema(
{
    Marca: {type: String, required: true},
    Modelo: {type: String, required: true},
    Cilindraje: {type: String, required: true},
    Torque_HP: {type: Number, required: true},
    Potencia_NM: {type: Number, required: true},
    Altura_mm: {type: Number, required: true},
    ABS: {type: Boolean, required: true},
    StabiliTrak: {type: Boolean, required: true},
    Peso_kg: {type: Number, required: true},
    Rueda_Delantera: {type: String, required: true},
    Rueda_Trasera: {type: String, required: true},
})

export default model("Motos", esquemaMotos);