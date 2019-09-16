const mongoose = require('mongoose');

const HomelessSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    idCard: {
        type: String,
    },
    cpf: {
        type: String,
    },
    dateOfBirth:{
        type: Date,
        required: true,
    },
    genre: {
        type: String,
        required: true,
    },
    sexualOrientation: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});


const Homeless = mongoose.model('Homeless', HomelessSchema);

module.exports = Homeless;