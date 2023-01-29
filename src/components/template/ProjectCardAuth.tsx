interface ProjectCardAuthProps {
  img: any;
}
export function ProjectCardAuth({
  img,
}: ProjectCardAuthProps) {
  function renderCards() {
    return (
      <div
        className="w-[50vw] md:w-96 h-60 transition-transform"
      >
        <img src={img} className="w-full h-full"/>
      </div>
    );
  }

  return (
    <div className="bg-black z-30 pointer-events-none opacity-20">

      <div>{renderCards()}</div>
    </div>
  );
}
