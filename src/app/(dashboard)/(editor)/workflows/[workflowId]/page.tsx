import { requireAuth } from "@/lib/auth-util";
import React from "react";

interface pageProps {
  params: Promise<{
    workflowId: string;
  }>;
}

const page = async ({ params }: pageProps) => {
  await requireAuth();
  const { workflowId } = await params;
  return <div>{workflowId}</div>;
};

export default page;
 