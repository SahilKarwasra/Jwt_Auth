const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/user');

passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID, 
        clientSecret: process.env.GOOGLE_CLIENT_SECRET, 
        callbackURL: process.env.GOOGLE_CALLBACK_URL, 
      },
      async (accessToken, refreshToken, profile, done) => {
        try {
          // Check if user already exists
          let user = await User.findOne({ where: { googleId: profile.id } });
  
          // If user doesn't exist, create a new one
          if (!user) {
            user = await User.create({
              googleId: profile.id,
              username: profile.displayName,
              email: profile.emails[0].value,
            });
          }
  
          done(null, user);
        } catch (error) {
          done(error, false);
        }
      }
    )
  );
  
  // Serialize user to session
  passport.serializeUser((user, done) => done(null, user.id));
  
  // Deserialize user from session
  passport.deserializeUser(async (id, done) => {
    try {
      const user = await User.findByPk(id);
      done(null, user);
    } catch (error) {
      done(error, false);
    }
  });
  
  module.exports = passport;