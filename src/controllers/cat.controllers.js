import { createMiaudeloDB } from '../repositories/cat.repository.js'

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




