import React from "react";
import { useQuery } from "@tanstack/react-query";
import { LogIn, Search } from "lucide-react";

const basePath = import.meta.env.BASE_URL.replace(/\/$/, "");

export const ADMIN_EMAIL = "johnmichaelkuczynski@gmail.com";

export type AuthUser = {
  id: number;
  username: string;
  email: string | null;
  displayName: string | null;
};

export type AuthUserResponse = {
  authenticated: boolean;
  user: AuthUser | null;
};

let cachedIsAdmin = false;

export function isAdminNow(): boolean {
  return cachedIsAdmin;
}

export function userIsAdmin(data: AuthUserResponse | undefined): boolean {
  return Boolean(
    data?.authenticated &&
      data.user?.email &&
      data.user.email.toLowerCase() === ADMIN_EMAIL,
  );
}

const DEV_USER: AuthUserResponse = {
  authenticated: true,
  user: {
    id: 0,
    username: "dev",
    email: ADMIN_EMAIL,
    displayName: "Dev (Admin)",
  },
};

export function useAuthUser() {
  return useQuery<AuthUserResponse>({
    queryKey: ["auth-user"],
    queryFn: async () => {
      // In dev, return a fake admin user so the app is fully functional
      // without going through Google OAuth.
      if (import.meta.env.DEV) {
        cachedIsAdmin = true;
        return DEV_USER;
      }
      const res = await fetch(`${basePath}/api/auth/user`, {
        credentials: "include",
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = (await res.json()) as AuthUserResponse;
      cachedIsAdmin = Boolean(
        data.authenticated &&
          data.user?.email &&
          data.user.email.toLowerCase() === ADMIN_EMAIL,
      );
      return data;
    },
    staleTime: 60_000,
  });
}

function SignInScreen() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground p-6">
      <div className="w-full max-w-md rounded-lg border border-border bg-card p-8 flex flex-col items-center gap-6 text-center">
        <div className="w-12 h-12 bg-primary rounded-md flex items-center justify-center text-primary-foreground">
          <Search className="w-6 h-6" />
        </div>
        <div>
          <h1 className="text-2xl font-serif font-bold text-primary">
            Constructive Critical Reasoning
          </h1>
          <p className="text-muted-foreground mt-2 text-sm">
            Sign in with your Google account to access the course.
          </p>
        </div>
        <a href={`${basePath}/api/auth/google`} className="w-full">
          <button
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-md text-sm font-medium bg-primary text-primary-foreground hover:opacity-90"
            data-testid="button-login"
          >
            <LogIn className="w-4 h-4" />
            Sign in with Google
          </button>
        </a>
      </div>
    </div>
  );
}

export function AuthGate({ children }: { children: React.ReactNode }) {
  const { data, isLoading, isError } = useAuthUser();

  // In dev (Replit preview), skip the login wall so you can work freely.
  // The deployed build (import.meta.env.PROD) always enforces sign-in.
  if (import.meta.env.DEV) {
    return <>{children}</>;
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background text-muted-foreground">
        Loading…
      </div>
    );
  }

  if (isError || !data?.authenticated) {
    return <SignInScreen />;
  }

  return <>{children}</>;
}
