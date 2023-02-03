interface ContentProps {
  children?: any;
}

export function Content({ children }: ContentProps) {
  return (
    <div className={`flex dark:text-gray-200 relative bg-light`}>{children}</div>
  );
}
