// estructura 

const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    codLib: {
        type: Number,
        required: true
    },
    nombreLib: {
        type: String,
        required: true
    },
    autor: {
        type: String,
        required: true
    },
    editorial: {
        type: String,
        required: true
    },
    edicion: {
        type: Number,
        required: true
    },
    categoria: {
        type: String,
        required: true
    },
    precioUnit: {
        type: Number,
        required: true
    },
    cantidadExist: {
        type: Number,
        required: true
    },
    minStock: {
        type: Number,
        required: true
    },
    maxStock: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model("Book", bookSchema);