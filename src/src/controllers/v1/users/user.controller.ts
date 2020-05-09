import {UserModel, IUser} from "../../../models/mongoDB/index";

async function getUsers(req:any, res:any) {
    try {
        const users = await UserModel.find()
        return res.status(200).json({users})
    } catch (e) {
        return res.status(500).json({ error: "server error" })    
    }
    
}

async function findUserById(req:any, res:any, next:any) {
    const { id } = req.params
    try {
        const user = await UserModel.findById(id)
        if (!user) return res.status(404).json({ error: "user not found" })    
        req.user = user
        return next()
    } catch (e) {
        return res.status(404).json({ error: "user not found" })    
    }
    
}


async function getUser(req:any, res:any) {
    
    return res.status(200).json(req.user)
    
}

async function createUser(req:any, res:any) {
    
    const User:IUser = req.body
    if (!User.name) return res.status(403).json({error: "user name not found"})
    if (!User.lastName) return res.status(403).json({error: "user lastName not found"})
    if (!User.age) return res.status(403).json({error: "user age not found"})
    
    const createdUser = new UserModel(User);

    try {
        const newUser = await createdUser.save();
        return res.status(201).json(newUser)
    } catch (e) {
        return res.status(400).json({error: "invalid User"})
    }

}

async function updateUser(req:any, res:any) {
    let { user } = req
    const User:IUser = req.body;
    const { name, lastName, age } = User
    try {
        if(name) user.name = name
        if(lastName) user.lastName = lastName
        if(age) user.age = age
        user = await user.save()
        return res.status(200).json(user)
    } catch (e) {
        return res.status(400).json({error: "Bad request"})
    }

}

async function deleteUser(req:any, res:any) {
    const { user } = req;
    try {
        await user.remove()
        return res.status(200).json({success: "user is deleted"})
    } catch (e) {
        return res.status(400).json({error: "error"})
    }
}

export { getUsers, getUser, createUser, updateUser, deleteUser, findUserById }