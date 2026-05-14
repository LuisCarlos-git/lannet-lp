// TODO(content): placeholder testimonials — replace with real depoimentos autorizados antes do go-live.

export type Testimonial = {
  id: string;
  name: string;
  role: string;
  quote: string;
  stars: number;
};

export const testimonials: Testimonial[] = [
  {
    id: "mariana",
    name: "Mariana Costa",
    role: "Designer UX",
    quote:
      "Trabalho de casa e faço videoconferência o dia todo. A internet continua super estável, não cai. Excelente serviço!",
    stars: 5,
  },
  {
    id: "rafael",
    name: "Rafael Almeida",
    role: "Streamer",
    quote:
      "Latência baixa e upload simétrico mudaram minhas lives. Quedas? Nenhuma desde que troquei.",
    stars: 5,
  },
  {
    id: "joao",
    name: "João Pereira",
    role: "Produtor rural",
    quote:
      "Aqui na fazenda nada chegava. Com o plano rural híbrido consigo monitorar tudo e a família fica conectada.",
    stars: 5,
  },
];
