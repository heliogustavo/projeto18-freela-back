import { findUserIdDB } from "../repositories/auth.repository.js"

export async function validateAuth(req, res, next) {
    const tokenEmail = req.body.email
    if (!tokenEmail) return res.sendStatus(401)
    console.log(tokenEmail)
    try {
        const userId = await findUserIdDB(tokenEmail)
        if (session.rowCount === 0) return res.sendStatus(401)
        res.locals.userId = userId.rows[0].userId
        console.log(tokenEmail)
        next()
    } catch (err) {
        res.status(500).send(err)
    }
}