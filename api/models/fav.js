const mongoose = require('mongoose')

const model = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    favId: {
        type: Number,
        required: true
      },
});

module.exports = new mongoose.model("Fav", model)