const express = require("express")
const router = express.Router()
const authentication = require("../middleware/authentication");

const loginUser = require("../functions/userFunctions/loginUser");
const getUsers = require("../functions/userFunctions/getUsers");
const getUserByMiddleware = require("../functions/userFunctions/getUserByMiddleware");
const getUserById = require("../functions/userFunctions/getUserById");
const registerUser = require("../functions/userFunctions/registerUser");
const checkPassword = require("../functions/userFunctions/checkPassword");
const changePassword = require("../functions/userFunctions/changeUserPassword");

const {
  registerUserValidator,
  loginUserValidator,
  checkActualPasswordValidator,
  changeUserPasswordValidator,
} = require("../middleware/expressValidator");


router.get('/',authentication,getUserByMiddleware)

router.get('/users',getUsers)

router.get('/get_user_by_id/:user_id',getUserById)

router.post('/register',registerUserValidator,registerUser)

router.post('/login',loginUserValidator,loginUser)

router.put('/check_password',
  authentication,
  checkActualPasswordValidator,
  checkPassword
)

router.put(
  '/change_password',
  authentication,
  changeUserPasswordValidator,
  changePassword
)

module.exports = router