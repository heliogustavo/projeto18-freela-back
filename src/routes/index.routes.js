import { Router } from "express"
import authRouter from "./auth.routes.js"
import userRouter from "./user.routes.js"
import catsRouter from "./cat.routes.js"

const router = Router()

router.use(authRouter)
router.use(userRouter)
router.use(catsRouter)

export default router