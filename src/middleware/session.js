import session from 'express-session';

export const sessionMiddleware = session({
  secret: 'your-session-secret',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: process.env.NODE_ENV === 'production' }, // Enable secure cookies in production
});
