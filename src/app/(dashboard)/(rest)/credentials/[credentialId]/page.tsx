import { requireAuth } from "@/lib/auth-util";
import React from "react";

interface pageProps {
  params: Promise<{
    credentialId: string;
  }>;
}

const page = async ({ params }: pageProps) => {
  await requireAuth();
  const { credentialId } = await params;
  return <div>{credentialId}</div>;
};

export default page;
