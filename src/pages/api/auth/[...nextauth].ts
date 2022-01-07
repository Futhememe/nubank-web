import NextAuth from 'next-auth';
import GitHubProvider from "next-auth/providers/github";

export default NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      authorization: "https://github.com/login/oauth/authorize?scope=read:user+user:email",
    })
  ],
  secret: process.env.SECRET,
  session: {
    strategy:'jwt'
  },
})

