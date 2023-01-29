interface ProjectCardAuthProps {
  img: string;
}
export function AuthImages({
  img,
}: ProjectCardAuthProps) {
  function renderCards() {
    return (
      <li
        className="w-[50vw] md:w-96 h-60 transition-transform list-none bg-black z-30 pointer-events-none opacity-20"
      >
        <img src={img} className="w-full h-full"/>
      </li>
    );
  }

  return (
      <>{renderCards()}</>
  );
}
