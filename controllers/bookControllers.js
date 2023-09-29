const bookModel = require("../models/bookModels") // crud 

module.exports.getBooks = async (req, res) => {
    try {
        const libros = await bookModel.find();
        console.log("Libros encontrados:", libros);
        res.send(libros);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error libros" });
    }
};



module.exports.createBooks = (req, res) => {
    const { codLib, nombreLib, autor, editorial, edicion, categoria, precioUnit, cantidadExist, minStock, maxStock } = req.body;

    bookModel.create({
        codLib,
        nombreLib,
        autor,
        editorial,
        edicion,
        categoria,
        precioUnit,
        cantidadExist,
        minStock,
        maxStock
    })
    .then((data) => {
        console.log("Se creo correctamente");
        res.status(201).send(data);
    })
    .catch((err) => {
        console.log(err);
        res.send({ error: err, msg: "Error" });
    });
}

module.exports.updateBooks = (req, res) => {
    const {id} = req.params;
    const {book} = req.body
    bookModel.findByIdAndUpdate(id, {book})
    .then(() => {
        console.log("Se edito correctamente");
    }).catch((err) => {
        console.log(err);
        res.send({error: err, msg: "Erro de edicion"})
    })
}

module.exports.deleteBooks = (req, res) => {
    const {id} = req.params;
    bookModel.findByIdAndDelete(id)
    .then(() => {
        console.log("Se elimino correctamente");
    }).catch((err) => {
        console.log(err);
        res.send({error: err, msg: "Error eliminado"})
    })
}