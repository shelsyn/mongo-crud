const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const routes = require("./routes/bookRoutes"); // UTILIZA ESTAS RUTAS

const cors = require("cors");
const app = express();

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;
const LOCAL_DB_URI = "mongodb://localhost:27017/biblios"; // LOCAL BASE-D

app.use(express.json());
app.use(cors());

// Inicialmente, conecta a la base de datos de Atlas
mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Mongo Atlas activo"))
  .catch((err) => console.error("Erro de conexion MongoDB Atlas:", err));

// Ruta para Cambiar entre las bases de datos
app.get("/cambiar", async (req, res) => {
  try {
    await mongoose.connection.close(); // Cierra la conexión actual

    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(LOCAL_DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log("esta en la base local");
    } else {
      await mongoose.connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log("Cambiado a MongoDB Atlas");
    }

    res.send("Cambiado de base de datos");
  } catch (error) {
    console.error("Error al cambiar la conexión:", error);
    res.status(500).send("Error al cambiar la conexión");
  }
});

app.use("/api", routes);

app.listen(PORT, () => console.log(`Listening at: ${PORT}`));

//duncion asincrona 28 / si es = 0 desacruvo coonecta a la local 
//estatus 500 err servidor