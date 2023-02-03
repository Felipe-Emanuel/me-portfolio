import Link from "next/link";
import { useRouter } from "next/router";

interface MenuItemProps {
  url?: string;
  text: string;
  className?: string;
  path?: string;
  icon?: any;
  onClick?: (e: any) => void;
}

export function MenuItem({
  path,
  url,
  text,
  className,
  icon,
  onClick,
}: MenuItemProps) {
  const router = useRouter();
  const paths = router.pathname;
  const checkPath = () => paths === path && "text-white/50";
  const checkCursor = () =>
    paths === path ? `cursor-default` : `cursor-pointer`;

  return (
    <Link
      onClick={onClick}
      href={url ?? '#'}
      className={`text-white dark:hover:text-white/60 flex justify-center items-center
          transition-all duration-300 hover:text-white/60
          ${checkPath()}
          ${checkCursor()}
          ${className}
        `}
    >
      {text}
      <span>{icon}</span>
    </Link>
  );
}
