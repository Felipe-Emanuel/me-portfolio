import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {

  const limit: any = req.query.limit || Infinity
  let id = 0;
  const images = [
    {
      name: 'Next Crud',
      id: id++,
      image: "/images/Next-Crud.png",
      acessLlink: 'https://next-crud-bvuf.vercel.app/',
      gitLlink: 'https://github.com/Felipe-Emanuel/next-crud',
      description: 'Apesar do projeto não apresentar uma versão responsiva, foi trabalhado o conceito lógico da programação POO com JavaScript usando o Firestore do Firebase. Foi usado Typescript para a melhor manutenção de futuras atualizações no código e TailwindCss para a estilização. Next Crud foi desenvolvido em um curso de NextJS e toda sua funcionalidade pode ser acessada de maneira fácil e, claro, o código está público no Github.'
    },
    {
      name: 'Next Quiz',
      id: id++,
      image: "/images/Quiz.png",
      acessLlink: 'https://quiz-tau-sooty.vercel.app/',
      gitLlink: 'https://github.com/Felipe-Emanuel/Quiz'
    },
    {
      name: 'Credit Card',
      id: id++,
      image: "/images/credit-card.png",
      acessLlink: 'https://credit-card-explorer-lab.vercel.app/',
      gitLlink: 'https://github.com/Felipe-Emanuel/Credit-Card'
    },
    {
      name: 'Cash do Fray',
      id: id++,
      image: "/images/cash-do-fray.png",
      acessLlink: 'https://cash-do-fray.vercel.app/#',
      gitLlink: 'https://github.com/Felipe-Emanuel/Cash-do-fray'
    },
    {
      name: 'Alura Tube',
      id: id++,
      image: "/images/alura-tube.png",
      acessLlink: 'https://imersao-alura-tube.vercel.app/',
      gitLlink: 'https://github.com/Felipe-Emanuel/AluraTube'
    },
    {
      name: 'Casa Verde',
      id: id++,
      image: "/images/casa-verde.png",
    },
    {
      name: 'Admin Template',
      id: id++,
      image: "/images/admin-template.png",
    },
    {
      name: 'Pearson Hardman',
      id: id++,
      image: "/images/pearson-hardman.png",
    },
    {
      name: 'Webnar Practicum',
      id: id++,
      image: "/images/webnar_01.png",
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
      name: 'Star Wars',
      id: id++,
      image: "/images/star-wars.png",
    },
    {
      name: 'Ignite Lab',
      id: id++,
      image: "/images/ignite-lab.png",
    },
    {
      name: 'Monty Hall',
      id: id++,
      image: "/images/monty-hall.png",
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
