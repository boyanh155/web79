import userRouter from "./user.route.js"
import authRouter from "./auth.route.js"
import jwt from "jsonwebtoken"

const secretKey = 'mysecretkey';

// middleware 
// middleware : authenticated, authorization

// [authenticated] : isAuthenticated {token-jwt} decode -> userinfo -> next()

// [POST] /login: body{username,password} -> res{token-jwt}

// [GET] /me: req{token-jwt} -> [authenticated] -> res{userinfo}

// router.route("/me").get(authenticated -> (res failed) ,(req,res)=>res{userinfo})


//authentication vs authorization
// authentication: login: username + password: valid -> authorization
// authorization: phân quyền (admin, staff, consumer)


function route(app) {
    app.use('/user', userRouter)
    app.use('/auth', authRouter)

    app.use('/me', (req, res, next) => {
        console.log(req)
        const token = req.query.token
        jwt.verify(token, secretKey, (err, decoded) => {
            if (err) {
                console.error('JWT verification failed:', err.message);
            } else {
                console.log('Decoded JWT:');
                console.log(decoded);
            }
        });
    })

}

export default route