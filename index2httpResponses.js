const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("products");
});
//se puede devolver texto, archivos o json
app.get("/miArchivo", (req, res) => {
  res.sendFile("./descarga.jpg", {
    root: __dirname,
  });
});

app.get("/user", (req, res) => {
  res.json({
    name: "matt",
    apellido: "ray",
    age: 27,
    points: [1, 2, 3],
    adress: {
      city: "Bogota",
      neigborhood: "cedritos",
    },
  });
});

app.get("/isAlive", (req, res) => {
    res.sendStatus(204); //no envia nada, solo un codigo de estado. El navegador no muestra nada
  });
app.listen(3000);

console.log("escuchando en puerto 3000");
