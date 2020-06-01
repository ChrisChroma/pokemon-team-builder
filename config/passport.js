const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
const Trainer = require('../models/trainer')


// new code below
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK,
    },
    function (accessToken, refreshToken, profile, cb) {
      Trainer.findOne({ googleId: profile.id }, function (err, trainer) {
        if (err) return cb(err);
        if (trainer) {
          return cb(null, trainer);
        } else {
          // we have a new Trainer via OAuth!
          var newTrainer = new Trainer({
            name: profile.displayName,
            email: profile.emails[0].value,
            googleId: profile.id,
          });
          newTrainer.save(function (err) {
            if (err) return cb(err);
            return cb(null, newTrainer);
          });
        }
      });
    }
  )
);

passport.serializeUser(function(trainer, done) {
    return done(null, trainer._id);
});

passport.deserializeUser(function(id, done) {
    Trainer.findById(id, function(err, trainer) {
        return done(err, trainer);
    });
});