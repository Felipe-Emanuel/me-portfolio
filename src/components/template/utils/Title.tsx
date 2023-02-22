interface TitleProps {
  as?: "h2" | "h3" | "h4" | "h5" | "h6";
  title?: string ;
  subtitle?: string;
  className?: string;
}

export function Title({ title, subtitle, className, as }: TitleProps) {
  const Comp = as ?? "h1";

  return (
    <div className="relative">
      <Comp
        className={`
            font-black font-default
            text-black dark:text-white
            ${className}
          `}
      >
        {title}
      </Comp>
      <h2
        className={`
          font-light text-sm
          text-gray-600 dark:text-white
        `}
      >
        {subtitle}
      </h2>
    </div>
  );
}
