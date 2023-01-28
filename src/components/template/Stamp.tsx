interface StampProps {
  text: "Codando" | "Concluído" | "anulado";
  className?: string;
}

export function Stamp({ text, className }: StampProps) {
  const checkText =
    text === "Concluído"
      ? "bg-purple-500"
      : text === "Codando"
      ? "bg-yellow-500"
      : text === "anulado"
      ? "bg-red-500"
      : "";

  return (
    <div
      className={`${checkText} absolute top-[2vh] lg:top-7 lg:-right-32 -right-[15vw]
      text-xs py-2 px-6 rotate-45
      flex justify-center w-full 
      ${className}
      `}
    >
      {text}
    </div>
  );
}
