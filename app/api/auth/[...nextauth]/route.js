import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  trustHost: true, // ✅ auto-detect NEXTAUTH_URL (useful for Vercel)
  pages: {
    signIn: "/login", // custom login page
  },
  callbacks: {
    async redirect({ url, baseUrl }) {
      // ✅ Always send users to dashboard after login
      return `${baseUrl}/dashboard`;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
