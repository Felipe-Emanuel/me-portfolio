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
      className={`${checkText} absolute top-4 -right-12
      text-xs py-2 px-6 z-50 rotate-45
      flex items-center justify-center w-[50%] text-center
      ${className}
      `}
    >
      {text}
    </div>
  );
}
