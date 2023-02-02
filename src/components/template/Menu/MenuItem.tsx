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
  const checkPath = () => paths === path && "dark:text-white/70 text-dark/60";
  const checkCursor = () =>
    paths === path ? `cursor-default` : `cursor-pointer`;

  return (
    <Link
      onClick={onClick}
      href={`${url}`}
      className={`dark:text-white dark:hover:text-white/80 flex justify-center items-center
          transition-all duration-300 text-dark hover:text-dark/60
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
