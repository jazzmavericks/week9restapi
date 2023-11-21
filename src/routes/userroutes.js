const {Router} = require ("express");
const userRouter = Router();

const {hashPassword, comparePassword} = require("../middleware/index.js");
const {register, login, listAllUsers} = require("../controllers/usercontroller.js");

userRouter.post("/register", hashPassword, register);
userRouter.post("/loginUser", comparePassword, login);

userRouter.get("/listAllUsers", listAllUsers);

module.exports = userRouter;