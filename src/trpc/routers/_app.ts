import { z } from "zod";
import { createTRPCRouter, premiumProcedure, protectedProcedure } from "../init";
import prisma from "@/lib/db";
import { inngest } from "@/inngest/client";
import { google } from "@ai-sdk/google";
import { generateText } from "ai";

export const appRouter = createTRPCRouter({
  testAI: premiumProcedure.mutation(async ({ ctx }) => {
    await inngest.send({
      name: "execute/ai",
    });
    return {
      success: true,
      msg: "success",
    };
  }),

  getWorkflows: protectedProcedure.query(({}) => {
    return prisma.workflow.findMany();
  }),

  createWorkflow: protectedProcedure.mutation(async ({}) => {
    await inngest.send({
      name: "test/hello.world",
      data: {
        email: "vsniB@example.com",
      },
    });
    return prisma.workflow.create({
      data: {
        value: "New Workflow",
      },
    });
  }),

  deleteWorkflow: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(({ input }) => {
      return prisma.workflow.delete({
        where: {
          id: input.id,
        },
      });
    }),
});
// export type definition of API
export type AppRouter = typeof appRouter;
