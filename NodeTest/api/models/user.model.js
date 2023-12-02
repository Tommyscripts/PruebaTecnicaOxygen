const mongoose = require("mongoose");
require("mongoose-type-email");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
    },
    password: {
        type: String,
        required: true,
    },
    favorites: [
        {
          type: Array,
        },
      ],
})

const userModel = mongoose.model("user", userSchema);
module.exports = userModel;