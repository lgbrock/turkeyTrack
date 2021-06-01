// Calling our dependencies
const express = require('express')
const router = express.Router()

const passport = require('passport');

// @desc Auth with google
// @req GET /auth/google
router.get('/google', passport.authenticate('google', { scope: ['profile'] }));

// @desc Google callback
// @req GET /auth/google/callback
router.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    
    res.redirect('/profile');
  }
);

// @desc Logout User
// @req GET /logout
router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports = router;