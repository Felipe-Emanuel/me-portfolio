import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  let id = 0;
  const images = [
    {
      id: id++,
      image: "/images/alura-tube.png",
    },
    {
      id: id++,
      image: "/images/Quiz.png",
    },
    {
      id: id++,
      image: "/images/admin-template.png",
    },
    {
      id: id++,
      image: "/images/pearson-hardman.png",
    },
    {
      id: id++,
      image: "/images/webnar_01.png",
    },
    {
      id: id++,
      image: "/images/Next-Crud.png",
    },
    {
      id: id++,
      image: "/images/casa-verde.png",
    },

    {
      id: id++,
      image: "/images/Rick&Morty.png",
    },
    {
      id: id++,
      image: "/images/Login-system.png",
    },
    {
      id: id++,
      image: "/images/star-wars.png",
    },
    {
      id: id++,
      image: "/images/ignite-lab.png",
    },
    {
      id: id++,
      image: "/images/monty-hall.png",
    },
    {
      id: id++,
      image: "/images/covid-cases.png",
    },
    {
      id: id++,
      image: "/images/credit-card.png",
    },

    {
      id: id++,
      image: "/images/guitar-sell.png",
    },
    {
      id: id++,
      image: "/images/old-portfolio.png",
    },
    {
      id: id++,
      image: "/images/cash-do-fray.png",
    },
  ];
  res.status(200).json({ images });
}
