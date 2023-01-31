import Link from "next/link";
import { useRouter } from "next/router";


interface MenuItemProps {
  url?: string;
  text: string;
  className?: string;
  path?: string;
  icon: any;
  onClick?: (e: any) => void;
}

export function MenuItem({
  path,
  url,
  text,
  icon,
  className,
  onClick,
}: MenuItemProps) {
  const router = useRouter();

  const paths = router.pathname;

  const checkPath = () => paths === path && "bg-light dark:bg-dark";

  function renderContentLink() {
    return (
      <button
        key={Math.random()}
        className={`transition-all
          flex flex-col justify-center items-center
          w-20 h-20 text-gray-600
          dark:text-gray-200
          
          ${className}`}
      >
        {icon}
        <span className={`text-xs font-light`}>{text}</span>
      </button>
    );
  }

  return (
    <li
      onClick={onClick}
      className={`hover:bg-gray-100 cursor-pointer dark:hover:bg-dark
        ${checkPath()}
      `}
    >
      {url ? (
        <Link href={url}>{renderContentLink()}</Link>
      ) : (
        renderContentLink()
      )}
    </li>
  );
}
