import bcrypt from "bcrypt"
import { createUserDB, getUserByEmailDB } from "../repositories/user.repository.js"

export async function signUp(req, res) {
    const { name, email, password, cpf, numberPhone } = req.body

    try {
        const user = await getUserByEmailDB(email)
        if (user.rowCount !== 0) return res.status(409).send({ message: "E-mail já foi cadastrado!" })

        const hash = bcrypt.hashSync(password, 10)
        await createUserDB(name, email, hash, cpf, numberPhone)

        res.sendStatus(201)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

export async function signIn(req, res) {
    const { email, password } = req.body

    try {
        const user = await getUserByEmailDB(email)
        if (user.rowCount === 0) return res.status(401).send({ message: "E-mail não cadastrado!" })

        const isPasswordCorrect = bcrypt.compareSync(password, user.rows[0].password)
        if (!isPasswordCorrect) return res.status(401).send({ message: "Senha incorreta!" })
        const userId= user.rows[0].id
        console.log(userId)
        res.send({userId})
    } catch (err) {
        res.status(500).send(err.message)
    }
}