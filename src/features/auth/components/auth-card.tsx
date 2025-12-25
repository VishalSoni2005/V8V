import type React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface AuthCardProps {
  title: string;
  description: string;
  children: React.ReactNode;
  footer: {
    text: string;
    linkText: string;
    linkHref: string;
  };
}

export function AuthCard({
  title,
  description,
  children,
  footer,
}: AuthCardProps) {
  return (
    <Card className="w-full max-w-md border-border/50 shadow-xl">
      <CardHeader className="space-y-1 text-center">
        <CardTitle className="text-2xl font-semibold tracking-tight">
          {title}
        </CardTitle>
        <CardDescription className="text-muted-foreground">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter className="flex flex-col space-y-4">
        <div className="text-center text-sm text-muted-foreground">
          {footer.text}{" "}
          <Button
            variant="link"
            asChild
            className="p-0 h-auto font-semibold text-foreground"
          >
            <Link href={footer.linkHref}>{footer.linkText}</Link>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
