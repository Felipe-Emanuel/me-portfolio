import api from "@api/api";
import { useEffect, useState } from "react";
import { Slider } from "@cubeAnimation/CubeAnimation";

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
      <div className="
        relative sm:absolute w-screen z-0 h-[75vh] right-0 -left-7 -top-14
        sm:left-0 sm:-right-20 sm:top-0 sm:max-h-[80vh]
        xl:h-[80vh]"
      >
        {Slider(data.map((images: string) => images))}
      </div>
    </div>
  );
}
