import { createMiaudeloDB, getUrlByIdDB } from '../repositories/url.repository.js'

export async function addMiaudelo(req, res) {
    const { photoLink } = req.body
    const { userId } = res.locals

    try {
        const { rows: [result] } = await createMiaudeloDB(photoLink, features, userId)
        res.status(201).send(result)
    } catch (err) {
        res.status(500).send(err.message)
    }

}

 export async function getMiaudelos(req, res) {
     const { id } = req.params
     try {
         const cat = await getMiaudelos (id)
         if (cat.rowCount === 0) return res.status(404).send({ message: "URL não existe!" })

         res.send(cat.rows[0])
     } catch (err) {
         res.status(500).send(err.message)
    }
 }



