import { db } from "../database/db.connection.js"

export function createMiaudeloDB(photoLink, features) {
    return db.query(
        `INSERT INTO cats ("photoLink", "features") 
            VALUES ($1, $2) 
            RETURNING features, available`,
        [photoLink, features]
    )
}

export async function getOneMiaudeloDB(id) {
    try {
        const query = 'SELECT * FROM miaudelo WHERE id = $1';
        const { rows } = await db.query(query, [id]);
        
        return rows[0];
    } catch (error) {
        res.status(500).send(`Erro ao buscar detalhes do miaudelo: ${error.message}`)
    }
}

export function getAllMiaudelos() {
    return db.query(`SELECT * FROM cats`)
}

export function editStatusPhotoCatDB(photoId, statusPhoto) {
    return db.query(
        `UPDATE cats
        SET available = $1
        WHERE id = $2`,
        [statusPhoto, photoId]
    )
}
