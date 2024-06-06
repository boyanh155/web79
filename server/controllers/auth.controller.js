import UserModel from "../models/user.model.js"
import jwt from "jsonwebtoken"

const secretKey = 'mysecretkey';

export const login = async(req, res, next) => {

    try {
        console.log(req.body)
        const { name, password } = req.body
        if (!name || !password) return res.status(400).send("Missing parameters")

        // check database 
        const user = await UserModel.findOne({
            name,
            password
        })

        if (!user) return res.status(404).send("User not found")

        // token
        const accessToken = await jwt.sign({ "_id": user._id }, secretKey, { expiresIn: '1h' });


        return res.status(200).json({
            accessToken
        })
    } catch (err) {
        console.log(err)
        return res.json({ err })

    }
}


// Abort
export const register = (req, res, next) => {

}