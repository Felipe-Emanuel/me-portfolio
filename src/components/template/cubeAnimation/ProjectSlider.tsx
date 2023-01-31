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
      <div className="relative max-h-[80vh] max-w-[60vw] m-auto shadow-2xl shadow-inherit">
        {slider(data.map((images: string) => images))}
      </div>
    </div>
  );
}
