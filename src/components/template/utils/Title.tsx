interface TitleProps {
  as?: "h2" | "h3" | "h4" | "h5" | "h6";
  title?: string;
  subtitle?: string;
  className?: string;
}

export function Title({ title, subtitle, className, as }: TitleProps) {
  const Comp = as ?? "h1";

  return (
    <div className="relative">
      <Comp
        className={
          className ??
          `
            font-black text-3xl
            text-gray-900 dark:text-white
          `
        }
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
