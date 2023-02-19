import { ReactNode } from "react";
interface ContentProps {
  children?: ReactNode;
  id: string;
}

export function Section({ children, id }: ContentProps) {
  return (
    <section
      id={id}
      className={`text-dark relative -left-10 px-10 w-screen h-fit pt-4`}
    >
      {children}
    </section>
  );
}
