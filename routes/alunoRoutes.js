const router = require("express").Router();

const Aluno = require('../models/Aluno')

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
        updatedAt
    };

    try {
        await Aluno.create(aluno);
        res.status(201).json({ message: 'Aluno inserido no sistema com sucesso!' });
    } catch (error) {
        res.status(500).json({ error: error });
    }
});

// Read - leitura de dados com filtros opcionais
router.get('/', async (req, res) => {
    const { ra, name } = req.query;

    let filter = {};

    // Adiciona filtro por RA ou nome, se fornecidos
    if (ra) {
        filter.ra = { $regex: new RegExp(ra, 'i') };
    }
    if (name) {
        // Para busca aproximada (case-insensitive), use RegExp:
        filter.name = { $regex: new RegExp(name, 'i') };
    }

    try {
        const alunos = await Aluno.find(filter);
        res.status(200).json(alunos);
    } catch (error) {
        res.status(500).json({ erro: error });
    }
});

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

// Update - atualização dos dados (PATCH)
router.patch('/:id', async (req, res) => {
    const id = req.params.id;

    const { name, age, ra, cpf } = req.body;

    const aluno = {
        name,
        age,
        ra,
        cpf
        // Não incluímos createdAt nem updatedAt aqui,
        // pois updatedAt será tratado automaticamente pelo middleware
    };

    try {
        const updatedAluno = await Aluno.findOneAndUpdate(
            { _id: id },
            aluno,
            { new: true } // retorna o documento já atualizado
        );

        if (!updatedAluno) {
            return res.status(422).json({ message: 'O aluno não foi encontrado!' });
        }

        res.status(200).json(updatedAluno);

    } catch (error) {
        res.status(500).json({ erro: error });
    }
});

    // Delete - deletar dados
router.delete('/:id', async (req, res) => {

    const id = req.params.id;

    const aluno = await Aluno.findOne({_id: id})

    try{

        await Aluno.deleteOne({_id: id})

        if(!aluno) {
            res.status(422).json({message: 'O aluno não foi encontrado!'})
            return;
        }

        res.status(200).json({message: 'Aluno removido com sucesso'})
        
    }catch(error){
        res.status(500).json({ erro: error})
    }
})

module.exports = router;