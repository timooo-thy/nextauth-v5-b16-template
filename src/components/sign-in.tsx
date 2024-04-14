import { signIn } from "@/lib/auth";

export function SignIn() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("", { redirectTo: "/dashboard" });
      }}
    >
      <button
        className="border border-white rounded-md px-5 py-3"
        type="submit"
      >
        Sign In
      </button>
    </form>
  );
}
