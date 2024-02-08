import { Router } from "express"
import { getMiaudelos, addMiaudelo } from "../controllers/url.controllers.js"
import { validateSchema } from "../middlewares/validateSchema.js"
import { photoLinkSchema } from "../schemas/cats.schemas.js"
import { validateAuth } from "../middlewares/validateAuth.js"

const catsRouter = Router()

catsRouter.post("/addMiaudelo", validateSchema(photoLinkSchema), validateAuth, addMiaudelo)
catsRouter.get("/miaudelo/:id", getMiaudelos)

export default catsRouter