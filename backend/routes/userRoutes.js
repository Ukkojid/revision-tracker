const express = require('express');
const { registerUser, loginUser, googleLogin } = require('../controllers/userController');

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/google', googleLogin);  // Google OAuth will be configured here

module.exports = router;