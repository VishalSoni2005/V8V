"use client";

import { LogoutButton } from "@/components/logout-button";
import { useTRPC } from "@/trpc/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

const Page = () => {
  const trpc = useTRPC();
  const queryClient = useQueryClient();

  const { data: workflows, isLoading } = useQuery(
    trpc.getWorkflows.queryOptions()
  );

  const createWorkflow = useMutation(
    trpc.createWorkflow.mutationOptions({
      onSuccess: (newWorkflow) => {
        console.log("New workflow created:", newWorkflow);

        queryClient.invalidateQueries(trpc.getWorkflows.queryOptions());
      },
    })
  );

  useEffect(() => {
    if (workflows) {
      console.log("Current workflows:", workflows);
    }
  }, [workflows]);

  return (
    <main className="p-6 space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          Workflows {workflows ? `(${workflows.length})` : ""}
        </h1>
        <LogoutButton />
      </div>

      <Button
        onClick={() => createWorkflow.mutate()}
        disabled={createWorkflow.isPending}
      >
        {createWorkflow.isPending ? "Creating..." : "Create Workflow"}
      </Button>

      {isLoading && <p>Loading workflows...</p>}

      {workflows && (
        <ul className="space-y-2">
          {workflows.map((workflow) => (
            <li key={workflow.id} className="border rounded p-2 text-sm">
              {workflow.id ?? "Untitled Workflow"}
            </li>
          ))}
        </ul>
      )}
    </main>
  );
};

export default Page;
