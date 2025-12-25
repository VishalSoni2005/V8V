import { LogoutButton } from "@/components/logout-button";
import { requireAuth } from "@/lib/auth-util";
import { caller } from "@/trpc/server";

const Page = async () => {
  await requireAuth();

  const users = await caller.getUsers(); //! this will call protectedProcedure prisma queries

  return (
    <main>
      <h1>Welcome to the Home Page!</h1>
      <strong>Users: {JSON.stringify(users)}</strong>
      <LogoutButton />
    </main>
  );
};

export default Page;
