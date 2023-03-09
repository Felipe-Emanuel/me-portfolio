import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {

  const limit: any = req.query.limit || Infinity
  let id = 0;
  const images = [
    {
      name: 'Pearson Hardman',
      id: id++,
      image: "/images/pearson-hardman.png",
    },
    {
      name: 'Next Quiz',
      id: id++,
      image: "/images/Quiz.png",
    },
    {
      name: 'Credit Card',
      id: id++,
      image: "/images/credit-card.png",
    },
    {
      name: 'Webnar Practicum',
      id: id++,
      image: "/images/webnar_01.png",
    },
    {
      name: 'Alura Tube',
      id: id++,
      image: "/images/alura-tube.png",
    },
    {
      name: 'Monty Hall',
      id: id++,
      image: "/images/monty-hall.png",
    },
    {
      name: 'Admin Template',
      id: id++,
      image: "/images/admin-template.png",
    },
    {
      name: 'Star Wars',
      id: id++,
      image: "/images/star-wars.png",
    },
    {
      name: 'Cash do Fray',
      id: id++,
      image: "/images/cash-do-fray.png",
    },
    {
      name: 'Rick and Morty API',
      id: id++,
      image: "/images/Rick&Morty.png",
    },
    {
      name: 'Login System',
      id: id++,
      image: "/images/Login-system.png",
    },
    {
      name: 'Next Crud',
      id: id++,
      image: "/images/Next-Crud.png",
    },
    {
      name: 'Ignite Lab',
      id: id++,
      image: "/images/ignite-lab.png",
    },
    {
      name: 'Casa Verde',
      id: id++,
      image: "/images/casa-verde.png",
    },
    {
      name: 'Covid Cases',
      id: id++,
      image: "/images/covid-cases.png",
    },
    {
      name: 'Guitar Sell',
      id: id++,
      image: "/images/guitar-sell.png",
    },
    {
      name: 'Old Portfolio',
      id: id++,
      image: "/images/old-portfolio.png",
    },
  ];
  res.status(200).json({ images: images.slice(0, limit) });
}
