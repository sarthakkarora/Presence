// pages/api/auth/[...nextauth].js
import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      profile(profile) {
        return {
          id: profile.id,             // GitHub ID
          name: profile.name,         // User's full name
          email: profile.email,       // User's email
          image: profile.avatar_url,  // Profile image
          username: profile.login,    // GitHub username
        };
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      profile(profile) {
        return {
          id: profile.sub,             // Google ID
          name: profile.name,          // User's full name
          email: profile.email,        // User's email
          image: profile.picture,      // Profile image
          username: profile.email,     // Use email as username for Google
        };
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      // Attach the common id and username to the session object
      session.user.id = token.id;
      session.user.username = token.username;
      return session;
    },
    async jwt({ token, profile }) {
      // Store the id and username in the token for both GitHub and Google
      if (profile) {
        token.id = profile.id || profile.sub;
        token.username = profile.login || profile.email;
      }
      return token;
    },
  },
});

export {handler as GET, handler as POST};