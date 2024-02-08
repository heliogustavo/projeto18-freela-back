import { Router } from "express"
import { signIn, signUp } from "../controllers/auth.controllers.js"
import { validateSchema } from "../middlewares/validateSchema.js"
import { loginSchema, userSchema } from "../schemas/user.schemas.js"

const authRouter = Router()

authRouter.post("/signup", validateSchema(userSchema), signUp)
authRouter.post("/signin", validateSchema(loginSchema), signIn)

export default authRouter