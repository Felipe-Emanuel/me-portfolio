import Link from "next/link";
import Image from "next/image";
import { useAuth } from "@/data/hook/useAuth";

interface AvatarUserProps{
    className?: string;
}

export function AvatarUser({className}: AvatarUserProps) {
  const { user } = useAuth();
  return (
    <Link href="/profile">
      <Image
        src={user?.imageUrl ?? "/images/avatar.svg"}
        alt="Perfil"
        width={40}
        height={40}
        className={`h-10 w-10 rounded-full cursor-pointer ${className}`}
        />
    </Link>
  );
}
