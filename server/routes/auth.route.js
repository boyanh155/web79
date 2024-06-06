import { Router } from "express"
import { login } from "../controllers/auth.controller.js"

// controllers
// import { createUser, getAllUsers } from "../controllers/user.controller.js"


const router = Router()

router
    .route('/login').post(login)



export default router