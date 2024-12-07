const express = require('express');
const { registerUser, loginUser } = require('../controllers/authController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/register', registerUser); 
router.post('/login', loginUser); 

router.get('/protected', protect, (req, res) => {
  res.status(200).json({ 
    l̥message: 'Access granted to protected route' });
});

module.exports = router;
