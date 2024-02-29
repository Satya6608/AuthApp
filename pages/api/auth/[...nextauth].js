import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import AppleProvider from "next-auth/providers/apple";
export default NextAuth({
    providers: [
        GoogleProvider({
          clientId: '873444546166-0eiv5f5l3kr30e2uh522f04tej86msm2.apps.googleusercontent.com',
          clientSecret: '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'
        }),
        AppleProvider({
          clientId: process.env.APPLE_ID,
          clientSecret: process.env.APPLE_SECRET
        })
      ]
})