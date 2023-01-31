import { useAppData } from "@/data/hook/useAppData";
import api from "@/data/services/api";
import { useEffect, useState } from "react";
import { slider } from "./CubeAnimation";

export function ProjectSlider() {
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
        {slider(data.map((images: string) => images))}
      </div>
    </div>
  );
}
