import pg from "pg"
import dotenv from "dotenv"
dotenv.config()

const { Pool } = pg

const configDatabase = {
  connectionString: process.env.DATABASE_URL
}

if (process.env.MODE === "prod") configDatabase.ssl = true

console.log(process.env.DATABASE_URL)

export const db = new Pool(configDatabase)

