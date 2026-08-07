import type { NextAuthConfig } from 'next-auth';
import Google from 'next-auth/providers/google';

export const authConfig = {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
      allowDangerousEmailAccountLinking: true,
    }),
  ],
  pages: {
    signIn: '/login',
  },
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
      }
      return token;
    },
    session({ session, token }) {
      if (session.user && token.id) {
        session.user.id = token.id as string;
        session.user.role = token.role as any;
      }
      return session;
    },
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const role = auth?.user?.role;
      
      const isProtectedRoute = nextUrl.pathname.startsWith('/dashboard') || 
                               nextUrl.pathname.startsWith('/saved') || 
                               nextUrl.pathname.startsWith('/progress') || 
                               nextUrl.pathname.startsWith('/history');
      
      const isAdminRoute = nextUrl.pathname.startsWith('/admin');
      const isCoachRoute = nextUrl.pathname.startsWith('/coach');

      if (isAdminRoute) {
        if (isLoggedIn && (role === 'SUPER_ADMIN' || role === 'ADMIN')) return true;
        return false;
      }

      if (isCoachRoute) {
        if (isLoggedIn && role === 'COACH') return true;
        return false;
      }

      if (isProtectedRoute) {
        if (isLoggedIn) return true;
        return false; // Redirect to unauthenticated page
      }
      return true;
    },
  },
} satisfies NextAuthConfig;
