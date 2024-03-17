//TODO: Clean up this file

// import { PrismaAdapter } from "@auth/prisma-adapter";
import GithubProvider from 'next-auth/providers/github';
// import GoogleProvider from 'next-auth/providers/google';
// import prisma from "./connect";
// import { getServerSession } from 'next-auth';

export enum AuthProvidersOptions {
  // eslint-disable-next-line no-unused-vars
  GITHUB = 'github',
}

export const authOptions = {
  //   adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID ?? '',
      clientSecret: process.env.GITHUB_SECRET ?? '',
    }),
  ],
};

// export const getAuthSession = () => getServerSession(authOptions);
