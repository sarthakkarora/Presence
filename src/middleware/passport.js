import passport from 'passport';
import LocalStrategy from 'passport-local';
import bcrypt from 'bcryptjs';
import { getUserByEmail, getUserById } from '../utils/userHelper';

// Define the local strategy
passport.use(
  new LocalStrategy({ usernameField: 'email' }, async (email, password, done) => {
    try {
      // Fetch user from the database
      const user = await getUserByEmail(email);

      if (!user) {
        return done(null, false, { message: 'Incorrect email or password.' });
      }

      // Compare passwords
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return done(null, false, { message: 'Incorrect email or password.' });
      }

      return done(null, user);
    } catch (err) {
      return done(err);
    }
  })
);

// Serialize user
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// Deserialize user
passport.deserializeUser(async (id, done) => {
  try {
    const user = await getUserById(id);
    done(null, user);
  } catch (err) {
    done(err);
  }
});

export default passport;
