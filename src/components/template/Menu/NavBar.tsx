import { MenuItem } from "@Menu/MenuItem";

export function NavBar() {
  const pathsArray = ["/", "/settings", "/about"];

  return (
    <nav className={`z-10 text-gray-200`}>
      <ul className={`gap-4 flex text-xs md:text-sm lg:text-base`}>
        <MenuItem path={pathsArray[0]} url="/" text="Início" />
        <MenuItem path={pathsArray[2]} url="/about" text="Sobre" />
      </ul>

    </nav>
  );
}
