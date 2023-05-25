const express = require('express')
const router = express.Router();

const {
    signupuser,
    updateUser,
    signinUser,
    register
} = require('../controller/user_controller')

const{
    getvolunteer
} = require('../controller/admin_controller')

router.post('/signup',signupuser);
router.get('/signin/:user_mail/:user_password',signinUser);
router.get('/register/:user_rollno/:vol_id',register);
router.patch('/update/:user_rollno',updateUser);
router.get('/get',getvolunteer);
module.exports = router