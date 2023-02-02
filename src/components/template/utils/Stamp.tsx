interface StampProps {
  text: "Codando" | "Concluído" | "anulado";
  className?: string;
}

export function Stamp({ text, className }: StampProps) {
  const checkText =
    text === "Concluído"
      ? "bg-green-500"
      : text === "Codando"
      ? "bg-yellow-500"
      : text === "anulado"
      ? "bg-red-500"
      : "";

  return (
    <div
      className={`${checkText} absolute
        top-5 lg:top-7 lg:-right-32 2xl:-right-52 -right-36
        text-xs py-2 px-6 rotate-45 2xl:text-base 2xl:justify-center
        flex justify-center w-full 
        ${className}
      `}
    >
      {text}
    </div>
  );
}
