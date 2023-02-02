import { useWindow } from "@/data/hook/useWindow";
import Image from "next/image";

export function Logo() {
  const { width } = useWindow();

  const responsiveLogo = width > 768 ? 100 : 70;

  return (
    <Image
      width={responsiveLogo}
      height={responsiveLogo}
      alt="Sullivan Logo"
      src="/images/logo/logo_transparent.png"
    />
  );
}
