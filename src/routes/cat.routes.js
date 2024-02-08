import { Router } from "express"
import { getMiaudelos, addMiaudelo } from "../controllers/cat.controllers.js"
import { validateSchema } from "../middlewares/validateSchema.js"
import { photoLinkSchema } from "../schemas/url.schemas.js"
import { validateAuth } from "../middlewares/validateAuth.js"

const urlRouter = Router()

urlRouter.post("/addMiaudelo", validateSchema(photoLinkSchema), validateAuth, addMiaudelo)
urlRouter.get("/miaudelosList/:id", getMiaudelos)

export default urlRouter