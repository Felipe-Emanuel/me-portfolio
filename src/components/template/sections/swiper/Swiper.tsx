import { Swiper, SwiperProps } from "swiper/react";
import { ReactNode } from "react";
import { Navigation, Pagination, A11y } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface SwiperComponentProps {
  settings: SwiperProps;
  children: ReactNode;
}

export default function SwiperComponent({ children, settings }: SwiperComponentProps) {
  return (
    <Swiper modules={[Navigation, Pagination, A11y]} {...settings}>
      {children}
    </Swiper>
  );
}
