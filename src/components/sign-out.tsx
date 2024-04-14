import { signOut } from "@/lib/auth";

export function SignOut() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut({ redirectTo: "/" });
      }}
    >
      <button
        className="border border-white rounded-md px-5 py-3"
        type="submit"
      >
        Sign Out
      </button>
    </form>
  );
}
