import { NextAuthOptions } from "next-auth";
import { useSession } from "next-auth/react";
import GoogleProviders from "next-auth/providers/google";
import GithubProviders from "next-auth/providers/github";

export const authConfig: NextAuthOptions = {
  providers: [
    GoogleProviders({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    GithubProviders({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
  ],
};
