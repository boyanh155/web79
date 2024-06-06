import UserModel from "../models/user.model.js"

export const getAllUsers = async(req, res, next) => {
    try {
        const users = await UserModel.find({})
        return res.status(200).json(users)
    } catch (err) {

        return res.status(500).json({ err })
    }
}

export const createUser = async(req, res, next) => {
    try {
        const body = req.body
        const user = await UserModel.create(body)
        await user.save()
        return res.status(200).send("Success")
    } catch (err) {
        console.log(err)
        return res.status(500).json({ err })
    }
}