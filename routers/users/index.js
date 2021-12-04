const router = require('express').Router();

const { 
    getUsers, updateUser, deleteUser
} = require('../../controllers');

router.get('/', getUsers);
router.put('/update/:username', updateUser);
router.delete('/delete/:username', deleteUser);

module.exports = router;