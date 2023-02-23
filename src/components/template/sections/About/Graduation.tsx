import Image from "next/image";
import moment from "moment";
import Practicum from "public/images/About/PracticumLogo.jpeg";
import { useState, useEffect } from "react";
import { Paragraph } from "../../utils/Paragraph";

export function Graduation() {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState(
    moment("15/12/2022", "DD/MM/YYYY").startOf("day")
  );

  const openGraduation = () => setIsOpen((isOpen) => !isOpen);

  const checkIfIsOpen = () => (isOpen ? "w-24" : "w-5");

  useEffect(() => {
    const interval = setInterval(() => {
      setData(moment().startOf("day"));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex md:justify-center md:items-center md:w-full md:max-w-[22rem] md:gap-4">
      <div
        onMouseEnter={openGraduation}
        onMouseLeave={openGraduation}
        className={`
                bg-light bg-opacity-25 flex transition-all duration-300 rounded-full ${checkIfIsOpen()}
                h-5 absolute bottom-0 left-14 sm:top-[5.5rem] sm:left-52
                md:w-20 md:h-20 md:bottom-0 md:left-0 md:relative md:mt-4 md:top-0
                lg:mt-10
                items-center gap-1 overflow-hidden
                ring-1 ring-pinkLight dark:ring-orangeDark z-40
                
            `}
      >
        <Image
          src={Practicum}
          alt="Practicum bootcamp logo"
          width={100}
          height={100}
          className="rounded-full w-5 h-5 md:h-full md:w-full"
        />
        <a
          href="https://practicum.com/pt-bra/?utm_source=google&utm_medium=cpc&utm_campaign=Inhouse_gl_BRA_Countrypage_Allprofs_ua_sem&utm_content=cid--17894326202_gid--140093801512_network--g_placement--_dvc--c_tid--kwd-336980067113_mt--e_creative--613525396509&utm_term=practicum&gclid=CjwKCAiAl9efBhAkEiwA4ToriukgilYMZ9eS4jpSPxyOiab1FO-by-_3w962N9mYiuHWW6WzthSK4RoCQHoQAvD_BwE"
          target="_blank"
          className="md:hidden"
        >
          <Paragraph as="span" size="xs" className="text-black z-10">
            Practicum
          </Paragraph>
        </a>
      </div>
      <div className="m-auto hidden md:flex md:flex-col">

        <a
          href="https://practicum.com/pt-bra/?utm_source=google&utm_medium=cpc&utm_campaign=Inhouse_gl_BRA_Countrypage_Allprofs_ua_sem&utm_content=cid--17894326202_gid--140093801512_network--g_placement--_dvc--c_tid--kwd-336980067113_mt--e_creative--613525396509&utm_term=practicum&gclid=CjwKCAiAl9efBhAkEiwA4ToriukgilYMZ9eS4jpSPxyOiab1FO-by-_3w962N9mYiuHWW6WzthSK4RoCQHoQAvD_BwE"
          target="_blank"
          className="w-fit"
        >
      <Paragraph size="base" hover className="font-bold">
          Practicum
      </Paragraph>
        </a>
      <Paragraph size="xs">
        Bootcamp indicado pela própria Google!
      </Paragraph>
      
      </div>

    </div>
  );
}
