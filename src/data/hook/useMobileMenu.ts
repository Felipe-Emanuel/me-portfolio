import { useState, useEffect } from "react";
import { useWindow } from "./useWindow";

export function useMobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOverlayActive, setIsOverlayActive] = useState(false);
  const { width } = useWindow()


  const openMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

useEffect(() => {
  width > 640 && setIsMenuOpen(false)
}, [width])

  useEffect(() => {
    if (isMenuOpen) {
      setIsOverlayActive(true);
    } else {
      setIsOverlayActive(false);
    }
  }, [isMenuOpen]);

  return {
    openMenu,
    isOverlayActive,
    isMenuOpen,
  };
}