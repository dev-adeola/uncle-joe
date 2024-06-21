// pages/api/auth/[...nextauth].js

import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {},
      async authorize(credentials, req) {
        if (credentials?.endpoints == "login") {
          try {
            const res = await fetch("https://p2p.ratefy.co/login", {
              method: "POST",
              body: JSON.stringify(credentials),
              // headers: { "Content-Type": "application/json" },
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "User-Agents": "Ratefy",
              },
            });
            const user = await res.json();
            console.log({ user }, "userm", user?.message);
            // If no error and we have user data, return it
            if (
              user &&
              user.message &&
              user.message.includes("The username has already been taken")
            ) {
              throw new Error(user.message);
            } else if (res.ok && user) {
              const token = user?.token;
              // console.log({ user: user, token });
              // return user;
              return Promise.resolve({ token, user });
            } else {
              throw new Error(user.message);
            }
          } catch (error) {
            console.log({ error });
            throw new Error(error.message);
          }
        }
        else {
          try {
            const res = await fetch("https://p2p.ratefy.co/register", {
              method: "POST",
              body: JSON.stringify(credentials),
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "User-Agents": "Ratefy",
              },
            });
            const user = await res.json();
            if (!res.ok) {
              throw new Error(user.message);
            }
            const token = user.token; // Extract the token from user data
            return Promise.resolve({ token, user });
          } catch (error) {
            console.error(error);
            throw new Error("Error: " + error.message);
          }
        }
      },
    }),
  ],

  //   callbacks: {
  //     async jwt({ token, user, account, isNewUser }) {
  //       if (user) {
  //         token = user?.token;
  //       }
  //       console.log(
  //         { token, user, account, isNewUser },
  //         " JSON.stringify(user?.token)",
  //         JSON.stringify(user?.token),
  //         account
  //       );
  //       return token;
  //     },

  //     // That token store in session
  //     session: async ({ session, user, token }) => {
  //       // this token return above jwt()
  //       console.log({ session, user, token });
  //       // Assuming response is the object containing the nested token structure
  //       const tokens = token?.token;
  //       console.log({ tokens, token });
  //       session.token = tokens;
  //       return session;
  //     },
  //     // async error(error, req, res) {
  //     //   // Handle error logic
  //     //   console.error("NextAuth error:", error);
  //     //   res.status(500).end(error.message);
  //     // },
  //   },
  callbacks: {
    async jwt({ token, user }) {
      // console.log({ token, user }, "tokens: user?.token,", user?.token);
      if (user) {
        return {
          token: token?.token,
          tokens: user?.token,
          user_id: user?.data?.id,
        }; // Include user ID and token in the JWT claims
      }
      return token;
    },
    async session({ session, token }) {
      // console.log({ session, token });
      if (token) {
        session.token = token; // Set the session token
      }
      return session;
    },
  },
  pages: {
    signIn: "/auth/login",
    signOut: "/auth/logout",
    newUser: "/auth/register",
    verifyUser: '/auth/success',
    error: "/auth/error",
  },
};
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
