import { useEffect, useRef, useState } from "react";

export function TimeOut() {
    const [isActive, setIsActive] = useState(false);
    const [time, setTime] = useState(2.2);
    const timing: any = useRef(0);
  
    useEffect(() => {
      clearTimeout(timing.current);
  
      timing.current = setTimeout(() => {
        setTime((t) => t - 1);
      }, 1000);
  
      time <= 0 ? setIsActive(false) : setIsActive(true)
  
      return () => {
        clearTimeout(timing.current);
      };
    }, [time]);

    return {
        isActive
    }
}