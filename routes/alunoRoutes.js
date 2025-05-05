const router = require("express").Router();

const Person = require('../models/Aluno')

//Create - criação de dados
router.post('/', async (req, res) => {

    // Verificação de corpo inválido
    if (!req.body) {
        res.status(422).json({ error: 'Corpo da requisição ausente ou inválido (JSON esperado)' });
        return;
    }
       
       const { name, age, ra, cpf, createdAt, updatedAt } = req.body;
       

    if (!name) {
        res.status(422).json({ error: 'O nome é obrigatório!' });
        return;
    }

    const aluno = {
        name,
        age,
        ra,
        cpf,
        createdAt,
        UpdatedAt
    };

    try {
        await Aluno.create(aluno);
        res.status(201).json({ message: 'Aluno inserido no sistema com sucesso!' });
    } catch (error) {
        res.status(500).json({ error: error });
    }
});

//Read - leitura de dados
router.get('/', async(req, res) => {

    try{

        const alunos = await Aluno.find()

        res.status(200).json(alunos)

    } catch (error) {
        res.status(500).json({ erro: error})
    }

})

//leitura dinamica
router.get('/:id', async (req, res) => {
    //extrair o dado da requisição, pela url = req.params
    const id = req.params.id

    try{
        const aluno = await Aluno.findOne({_id: id})

        if(!aluno) {
            res.status(422).json({message: 'O aluno não foi encontrado!'})
            return;
        }

        res.status(200).json(aluno)

    } catch (error) {
        res.status(500).json({ erro: error})
    }

})

//Update - atualização dos dados (PUT, PATCH)
router.patch('/:id', async (req, res) => {

    const id = req.params.id

    const{ name, age, ra, cpf, createdAt, UpdatedAt } = req.body

    const person = {
        name,
        age,
        ra,
        cpf,
        createdAt,
        UpdatedAt
    }

    try {
        const updatedAluno = await Aluno.updateOne({_id: id}, aluno)

        if(updatedAluno.matchedCount === 0){
            res.status(422).json({message: 'O aluno não foi encontrado!'})
            return;
        }

        res.status(200).json(aluno)

    } catch (error){
        res.status(500).json({ erro: error})
    }
})

    // Delete - deletar dados
router.delete('/:id', async (req, res) => {

    const id = req.params.id;

    const aluno = await Aluno.findOne({_id: id})

    try{

        await Aluno.deleteOne({_id: id})

        if(!person) {
            res.status(422).json({message: 'O aluno não foi encontrado!'})
            return;
        }

        res.status(200).json({message: 'Aluno removido com sucesso'})
        
    }catch(error){
        res.status(500).json({ erro: error})
    }
})

module.exports = router;