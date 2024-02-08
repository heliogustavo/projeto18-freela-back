import { db } from "../database/db.connection.js"

export function createMiaudeloDB(photoLink, features, userId) {
    return db.query(
        `INSERT INTO cats (photoLink, "features", "userId") 
            VALUES ($1, $2, $3) 
            RETURNING id, features`,
        [photoLink, features, userId]
    )
}

export function deleteCatDB(id) {
    return db.query(`DELETE FROM cats WHERE id=$1;`, [id])
}