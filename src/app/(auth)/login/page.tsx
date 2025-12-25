import { LoginForm } from "@/features/auth/components/login-form";
import { AuthCard } from "@/features/auth/components/auth-card";
import { requireUnauth } from "@/lib/auth-util";

const page = async () => {
  await requireUnauth("/login");

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <AuthCard
        title="Welcome back"
        description="Sign in to your account to continue"
        footer={{
          text: "Don't have an account?",
          linkText: "Sign up",
          linkHref: "/signup",
        }}
      >
        <LoginForm />
      </AuthCard>
    </div>
  );
};

export default page;
