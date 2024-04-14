import { auth } from "@/lib/auth";
import Image from "next/image";

export default async function UserAvatar() {
  const session = await auth();

  if (!session?.user) return null;

  return (
    <div>
      <Image
        src={session.user.image || "/placeholder.png"}
        alt="User Avatar"
        width={100}
        height={100}
      />
    </div>
  );
}
