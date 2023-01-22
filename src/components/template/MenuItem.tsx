import Link from "next/link";

interface MenuItemProps {
  url?: string;
  text: string;
  icon: any;
  className?: string;
  onClick?: (e: any) => void;
}

export function MenuItem({
  url,
  text,
  icon,
  className,
  onClick,
}: MenuItemProps) {
  function renderContentLink() {
    return (
      <button
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
      className={`hover:bg-gray-100 cursor-pointer dark:hover:bg-gray-800`}
    >
      {url ? (
        <Link href={url}>{renderContentLink()}</Link>
      ) : (
        renderContentLink()
      )}
    </li>
  );
}
