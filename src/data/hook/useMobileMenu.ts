import { useState } from "react";

export function useMobileMenu() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const openMenu = () => {
      setIsMenuOpen((isMenuOpen) => !isMenuOpen)
    }
    return {
        openMenu,
        isMenuOpen
    }
}