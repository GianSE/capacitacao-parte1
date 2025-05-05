const mongoose = require('mongoose');
const moment = require('moment');

const alunoSchema = new mongoose.Schema({
    name: String,
    age: Number,
    ra: String,
    cpf: String,
    createdAt: {
        type: String,
        default: () => moment().format('YYYY-MM-DD HH:mm:ss')
    },
    updatedAt: {
        type: String,
        default: () => moment().format('YYYY-MM-DD HH:mm:ss')
    }
});

// Middleware para atualizar a data antes de salvar
alunoSchema.pre('findOneAndUpdate', function (next) {
    this._update.updatedAt = moment().format('YYYY-MM-DD HH:mm:ss');
    next();
});

const Aluno = mongoose.model('Aluno', alunoSchema);

module.exports = Aluno;
