import { headers } from "next/headers";
import { auth } from "./auth";
import { redirect } from "next/navigation";

export const requireAuth = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) {
    // If not authenticated, send them to login
    redirect("/login");
  }
  return session;
};

// export const requireUnauth = async () => {
//   const session = await auth.api.getSession({
//     headers: await headers(),
//   });

//   if (!session?.user) {
//     redirect("/");
//   }
//   return session;
// };

export const requireUnauth = async (currentPath: string) => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (session?.user) {
    // If already authenticated, send them *away* from auth pages
    // but only if they’re not already on home
    if (currentPath !== "/") {
      redirect("/");
    }
  }

  return session;
};