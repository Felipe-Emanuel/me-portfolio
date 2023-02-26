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
      description: 'Apesar do projeto não apresentar uma versão responsiva, foi trabalhado o conceito lógico da programação POO com JavaScript usando o Firestore do Firebase. Foi usado Typescript para a melhor manutenção de futuras atualizações no código e TailwindCss para a estilização. Next Crud foi desenvolvido em um curso de NextJS e toda sua funcionalidade pode ser acessada de maneira fácil e, claro, o código está público no Github.',
      subtitle: 'Visite-nos e deixe sua marca registrada!',
      techs: ['Typescript', 'ReactJs', 'TailwindCss', 'NextJS', 'Firebase'],
      original: false,
      responsive: false,
      goal: 'Projeto foi desenvolvido como parte de um curso na Udemy com foco em NextJs, POO e Firebase, aprofundamento em lógica de programação e componentização. Um dos desafios foi lidar com classes e modelos e uma grande aprendizado foi trabalhar com tipagem de forma profissional com TypeScript',
      collaborators: '',
    },
    {
      name: 'Next Quiz',
      id: id++,
      image: "/images/Quiz.png",
      acessLlink: 'https://quiz-tau-sooty.vercel.app/',
      gitLlink: 'https://github.com/Felipe-Emanuel/Quiz',
      subtitle: 'Teste seu conhecimento de maneira prática!',
      techs: ['Typescript', 'ReactJs', 'TailwindCss', 'NextJS'],
      original: false,
      responsive: false,
      goal: 'Este projeto foi desenvolvido como parte de um curso na Udemy com foco em Next.js, POO e criação de modelos com ReactJS. Durante o curso, aprendi sobre roteamento do Next.js e parâmetros do useRouter, além de expandir meu raciocínio lógico em programação funcional. O curso foi fundamental para aprimorar minhas habilidades e conhecimentos.',
      collaborators: '',
    },
    {
      name: 'Credit Card',
      id: id++,
      image: "/images/credit-card.png",
      acessLlink: 'https://credit-card-explorer-lab.vercel.app/',
      gitLlink: 'https://github.com/Felipe-Emanuel/Credit-Card',
      subtitle: 'Acesse e veja o IMask em ação, uma das maiores máscaras Vanilla!',
      techs: ['JavaScript', 'Html', 'CSS3'],
      original: false,
      responsive: true,
      goal: 'O projeto foi desenvolvido em um curso da RocketSeat, onde aprendi a utilizar o IMask para máscaras de input em formulários. O instrutor foi excelente e aprendi a trabalhar com Vanilla JS e o DOM. A experiência foi ótima para aprimorar minhas habilidades.',
      collaborators: '',
    },
    {
      name: 'Cash do Fray',
      id: id++,
      image: "/images/cash-do-fray.png",
      acessLlink: 'https://cash-do-fray.vercel.app/#',
      gitLlink: 'https://github.com/Felipe-Emanuel/Cash-do-fray',
      subtitle: 'Acesse e compre moedas ou contas de Runescape 3 ou OSRS, o maior MMORPG do mundo!',
      techs: ['Typescript', 'ReactJs', 'TailwindCss'],
      original: true,
      responsive: true,
      goal: 'Este projeto foi desenvolvido para fins de estudos com a permissão do proprietário do site original. O desafio foi a organização pessoal e gerenciamento individual do projeto, mas minha experiência prévia permitiu que eu concluísse o projeto com confiança e aprimorasse minhas habilidades. O projeto proporcionou uma visão ampliada sobre a organização de projetos maiores.',
      collaborators: '',
    },
    {
      name: 'Alura Tube',
      id: id++,
      image: "/images/alura-tube.png",
      acessLlink: 'https://imersao-alura-tube.vercel.app/',
      gitLlink: 'https://github.com/Felipe-Emanuel/AluraTube',
      subtitle: 'Acesse e cadastre seus vídeos favoritos!',
      techs: ['JavaScript', 'ReactJs', 'Styled-Components', 'NextJS', 'SupaBase'],
      original: false,
      responsive: false,
      goal: 'Neste projeto desenvolvido durante um evento da Alura, aprendi Next.js e componentização em React.js, integração com Supabase e darkMode com Styled-Components. Meu desafio foi lidar com a ideia de guardar dados no Supabase. A experiência abriu portas para criar aplicações com APIs, banco de dados e experiência de usuário. O objetivo foi armazenar uma URL de vídeo no banco de dados e exibi-la no frontend.',
      collaborators: '',
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
