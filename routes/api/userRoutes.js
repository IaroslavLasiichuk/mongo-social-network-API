const router = require('express').Router();

const {
    getUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser

} = require('../../controllers/userController.js');

// /api/courses
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
router.route('/:userId').get(getSingleUser).delete(deleteUser).put(updateUser);

module.exports = router;