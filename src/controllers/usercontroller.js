const User = require("../models/user");

async function login(req,res) {
    try {
        res.status(200).json({
            message: "User logged in", user: req.body.email
        })
    } catch (error) {
        res.status(500).json({message: "Login unsuccessful - please try again", errorMessage:error.message})
        console.log(error);
    }
};

async function register(req,res) {
    try {
        const userResponse = await User.create(req.body);
        res.status(201).json({message: "User successfully added", details: userResponse})
    } catch (error) {
        res.status(500).json({message: "Unable to register user", errorMessage:error.message})
        console.log(error);
    }
};

async function listAllUsers(req,res) {
    try {
        const users = await User.findAll();
        res.status(201).json({message: "List of users:", details: users})
    } catch (error) {
        res.status(500).json({message: "Unable to list users", errorMessage:error.message})
        console.log(error);
    }
};

module.exports = {login, register, listAllUsers}