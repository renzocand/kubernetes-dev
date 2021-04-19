const mongoose = require("mongoose");
var Schema = mongoose.Schema;

var usuariosSchema = new Schema(
  {
    nombre: {
      type: String,
      required: [true, "El nombre es necesario"]
    },
    puesto: {
      type: String,
      required: [true, "El puesto es necesario"]
    }
  },
  { collection: "usuarios" }
);


module.exports = mongoose.model("Usuario", usuariosSchema);
