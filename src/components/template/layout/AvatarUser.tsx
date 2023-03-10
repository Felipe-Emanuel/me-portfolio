import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { useAuth } from "@hook/useAuth";

interface AvatarUserProps{
    className?: string;
    path?: string;
}

export function AvatarUser({className, path}: AvatarUserProps) {
  const router = useRouter()
  const paths = router.pathname
  const avatarSelector = () => paths === path ?
    'border-2 border-blueLight dark:border-orangeDark animate-pup': 'border-2 border-transparent'
  const { user } = useAuth();
  return (
    <Link href="/profile">
      <Image
        src={user?.imageUrl ?? "/images/avatar.svg"}
        alt="Perfil"
        width={40}
        height={40}
        className={`h-6 md:h-10 w-6 md:w-10 rounded-full cursor-pointer
          ${avatarSelector()} ${className}`}
        />
    </Link>
  );
}
