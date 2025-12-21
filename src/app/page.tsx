import { getQueryClient, trpc } from "@/trpc/server";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { Client } from "./client";
import { Suspense } from "react";

const Page = async () => {
  const queryClient = getQueryClient();

  void queryClient.prefetchQuery(trpc.getUsers.queryOptions());

  return (
    <main>
      <h1>Welcome to the Home Page</h1>
      <p>This is the main landing page of the application.</p>
      <h2>Users List</h2>

      <HydrationBoundary state={dehydrate(queryClient)}>
        <Suspense fallback={<div>Loading users...</div>}>
          <Client />
        </Suspense> 
      </HydrationBoundary>
    </main>
  );
};

export default Page;
