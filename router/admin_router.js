const express = require('express')
const router = express.Router();

const {
    signupadmin,
    volunteerinsert,
    UpdateVolunt,
    signinAdmin 
} = require('../controller/admin_controller')

const {
    getallUser
} = require('../controller/user_controller')

router.post('/signup',signupadmin)
router.get('/signin/:admin_email/:admin_password',signinAdmin )
router.post('/volunteer',volunteerinsert)
router.get('/getall',getallUser)
router.patch('/update/:vol_id',UpdateVolunt)
module.exports = router
