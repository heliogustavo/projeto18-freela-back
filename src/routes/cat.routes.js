import { Router } from "express"
import { getMiaudelos, addMiaudelo } from "../controllers/cat.controllers.js"
import { validateSchema } from "../middlewares/validateSchema.js"
import { photoLinkSchema } from "../schemas/cats.schemas.js"
import { validateAuth } from "../middlewares/validateAuth.js"

const catsRouter = Router()

catsRouter.post("/addMiaudelo", validateSchema(photoLinkSchema), validateAuth, addMiaudelo)
catsRouter.get("/miaudelosList/:id", getMiaudelos)

export default catsRouter