import { createMiaudeloDB, editStatusPhotoCatDB, getAllMiaudelos, getOneMiaudeloDB } from '../repositories/cat.repository.js'

export async function addMiaudelo(req, res) {
    const { photoLink, features, userId} = req.body

    try {
        const { rows: [result] } = await createMiaudeloDB(photoLink, features, userId)
        res.status(201).send(result)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

 export async function getMiaudeloById(req, res) {
     const { id } = req.params
     try {
        const miaudeloDetails = await getOneMiaudeloDB(id);
        res.send(miaudeloDetails);
      } catch (error) {
        res.status(500).send(error.message);
      }
 }

 export async function getMiaudelosList(req, res) {
    const { id } = req.params
    try {
        const miaudelosData = await getAllMiaudelos()
        console.log(miaudelosData)
        if (miaudelosData.rowCount === 0) return res.status(404).send({ message: "Nenhum gato adicionado!" })

        res.send(miaudelosData.rows)
    } catch (err) {
        res.status(500).send(err.message)
   }
}

export async function getCurrentCat(req, res) {
    const { userId } = res.locals

    try {
        const { rows: [user] } = await getCompleteCatDB(userId)
        res.send(user)
    } catch (err) {
        res.stats(500).send(err.message)
    }
}

export async function editStatusPhoto (req, res){
    const {userId, statusPhoto}= req.body
    const {id} = req.params
    try {
        await editStatusPhotoCatDB(userId, statusPhoto, id)
        res.send({message: 'Disponibilidade do Miaudelo atualizado!'})
    } catch (err) {
        res.status(500).send(err.message)
    }
}
