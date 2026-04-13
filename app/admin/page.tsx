import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { AdminDashboard } from "./AdminDashboard";

/**
 * Server component gate for the CRM.
 * Clerk middleware already blocks unauthenticated requests, but we
 * double-check here and pull the user's email to pass to the dashboard.
 */
export default async function AdminPage() {
  const { userId } = await auth();
  if (!userId) redirect("/admin/login");

  const user = await currentUser();
  const email = user?.emailAddresses?.[0]?.emailAddress ?? "";

  return <AdminDashboard email={email} />;
}
