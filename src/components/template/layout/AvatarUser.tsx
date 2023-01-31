import Link from "next/link";
import Image from "next/image";
import { useAuth } from "@/data/hook/useAuth";
import { useRouter } from "next/router";

interface AvatarUserProps{
    className?: string;
    path?: string;
}

export function AvatarUser({className, path}: AvatarUserProps) {
  const router = useRouter()
  const paths = router.pathname
  const avatarSelector = () => paths === path &&
    'border-2 border-dark dark:border-white animate-pup'
  const { user } = useAuth();
  return (
    <Link href="/profile">
      <Image
        src={user?.imageUrl ?? "/images/avatar.svg"}
        alt="Perfil"
        width={40}
        height={40}
        className={`h-10 w-10 rounded-full cursor-pointer
          ${avatarSelector()} ${className}`}
        />
    </Link>
  );
}
