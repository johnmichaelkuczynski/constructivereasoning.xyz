import { isAdminNow, useAuthUser, userIsAdmin } from "./auth";

// Admin mode is no longer a toggle — it is on if and only if the signed-in
// Google account is the administrator's. The server enforces the same rule
// independently on admin endpoints.

export function isAdminMode(): boolean {
  return isAdminNow();
}

export function useAdminMode(): [boolean] {
  const { data } = useAuthUser();
  return [userIsAdmin(data)];
}
