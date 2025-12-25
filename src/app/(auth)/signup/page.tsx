import { SignupForm } from "@/features/auth/components/signup-form";
import { AuthCard } from "@/features/auth/components/auth-card";
import { requireUnauth } from "@/lib/auth-util";

const page = async () => {
  await requireUnauth("/signup");

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <AuthCard
        title="Create an account"
        description="Get started with your free account"
        footer={{
          text: "Already have an account?",
          linkText: "Sign in",
          linkHref: "/login",
        }}
      >
        <SignupForm />
      </AuthCard>
    </div>
  );
}
export default page;
