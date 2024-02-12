import { Router } from "express"
import { getMiaudeloById, addMiaudelo, getMiaudelosList, editstatusphoto } from "../controllers/cat.controllers.js"
import { validateSchema } from "../middlewares/validateSchema.js"
import { photoLinkSchema } from "../schemas/cats.schemas.js"

const catsRouter = Router()

catsRouter.post("/addmialdelo", validateSchema(photoLinkSchema), addMiaudelo)
catsRouter.get("/miaudeloslist", getMiaudelosList)
catsRouter.get("/miaudelo/:id", getMiaudeloById)
catsRouter.post("/editstatusphoto", validateSchema, editstatusphoto)

export default catsRouter