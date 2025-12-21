"use client";

import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";

export const Client = () => {
  const trpc = useTRPC();

  const { data: users } = useSuspenseQuery(trpc.getUsers.queryOptions());

  return (
    <div>
      <ul className="list-disc pl-4 text-black">
        {users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Client; 
