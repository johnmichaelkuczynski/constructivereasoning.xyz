import { useQuery, useQueryClient } from "@tanstack/react-query";

const basePath = import.meta.env.BASE_URL.replace(/\/$/, "");

export type AuthUser = {
  email: string;
  name: string;
  picture: string;
};

export function signInUrl(): string {
  return `${basePath}/api/auth/google`;
}

export function useAuth() {
  const { data, isLoading } = useQuery<AuthUser | null>({
    queryKey: ["auth", "me"],
    queryFn: async () => {
      const res = await fetch(`${basePath}/api/auth/me`, {
        credentials: "include",
      });
      if (res.status === 401) return null;
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return (await res.json()) as AuthUser;
    },
    staleTime: 60 * 1000,
    refetchOnWindowFocus: true,
    retry: false,
  });
  return { user: data ?? null, isLoading };
}

export function useSignOut() {
  const qc = useQueryClient();
  return async () => {
    await fetch(`${basePath}/api/auth/logout`, {
      method: "POST",
      credentials: "include",
    });
    qc.clear();
    window.location.href = basePath || "/";
  };
}
