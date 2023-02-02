import api from "@api/api";
import { useEffect, useState } from "react";
import { Slider } from "@sliderAnimation/Slider";

export function RenderSlider() {
  const [data, setData] = useState([]);

  async function renderBanner() {
    const req = await api.get("/api/images");
    const res = await req;

    setData(res.data.images);
  }

  useEffect(() => {
    renderBanner();
  }, []);

  return (
    <div>
      <div
        className="
        absolute w-full z-0 right-0 xl:h-[80vh] bg-contain -top-0
        sm:left-0 sm:top-0"
      >
        {Slider(data.map((images: string) => images))}
      </div>
    </div>
  );
}
