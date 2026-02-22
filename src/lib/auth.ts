import { betterAuth, StrictEndpoint } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { checkout, portal, polar } from "@polar-sh/better-auth";
import { polarClient } from "./polar";
import { prisma } from "../lib/db";


export const auth = betterAuth({
  secret: process.env.BETTER_AUTH_SECRET!,
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  emailAndPassword: {
    enabled: true,
    autoSignIn: true,
  },
  plugins: [
    polar({
      client: polarClient,
      createCustomerOnSignUp: true,

      use: [
        checkout({
          products: [
            {
              productId: "95b6d006-b93c-496a-8d84-1da4c07ded12",
              slug: "pro",
            },
          ],
          successUrl: process.env.POLAR_SUCCESS_URL,
          authenticatedUsersOnly: true,
        }),

        portal(),
      ],
    }),
  ],
});
