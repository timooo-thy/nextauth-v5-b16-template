import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signIn } from "@/lib/auth";

export default function Dashboard() {
  return (
    <div className="w-full lg:grid lg:grid-cols-2 min-h-dvh">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="text-balance text-muted-foreground">
              Enter your email below to login to your account
            </p>
          </div>
          <div className="grid gap-4">
            <form
              action={async (formData) => {
                "use server";
                await signIn("resend", {
                  email: formData.get("email"),
                  redirectTo: "/dashboard",
                });
              }}
              className="grid gap-4"
            >
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="m@example.com"
                required
              />
              <Button variant="default" className="w-full">
                Sign in with Resend
              </Button>
            </form>
            <form
              action={async () => {
                "use server";
                await signIn("google", { redirectTo: "/dashboard" });
              }}
            >
              <Button variant="outline" className="w-full">
                Sign in with Google
              </Button>
            </form>
          </div>
        </div>
      </div>
      <div className="hidden lg:block ">
        <Image
          src="/signin-photo.jpg"
          alt="Image"
          width="720"
          height="1080"
          className="object-cover min-h-dvh ml-auto"
          priority
        />
      </div>
    </div>
  );
}
