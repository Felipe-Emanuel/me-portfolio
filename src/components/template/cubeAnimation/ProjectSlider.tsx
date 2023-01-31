import { useAppData } from "@/data/hook/useAppData";
import api from "@/data/services/api";
import { useEffect, useState } from "react";
import { slider } from "./cubeAnimation";

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
      <div className="absolute w-screen -right-20 top-0 max-h-[80vh] xl:h-[80vh]">
        {slider(data.map((images: string) => images))}
      </div>
    </div>
  );
}
