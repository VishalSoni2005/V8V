import { requireAuth } from "@/lib/auth-util";
import React from "react";

interface pageProps {
  params: Promise<{
    executionId: string;
  }>;
}

const page = async ({ params }: pageProps) => {
  await requireAuth();
  const { executionId } = await params;
  return <div>{executionId}</div>;
};

export default page;
 