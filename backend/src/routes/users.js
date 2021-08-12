const { Router } = require('express');
const router = Router();


const {getUsers, createUser, deleteUser, getUser} = require('../controllers/users.controller')

router.route('/')
    .get(getUsers)
    .post(createUser)

router.route('/:id')
    .delete(deleteUser)
    .get(getUser)


module.exports = router;