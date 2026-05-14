// TODO(content): placeholder FAQ — review answers with suporte/comercial.

export type FAQItem = {
  id: string;
  question: string;
  answer: string;
};

export const faqItems: FAQItem[] = [
  {
    id: "instalacao",
    question: "Quanto tempo leva para instalar?",
    answer:
      "Em áreas com cobertura, a instalação acontece em até 48 horas úteis após a contratação. Em rural, agendamos a visita técnica em até 5 dias úteis.",
  },
  {
    id: "fidelidade",
    question: "Existe fidelidade ou multa de cancelamento?",
    answer:
      "Os planos residenciais e rurais têm fidelidade de 12 meses. O cancelamento antes desse prazo cobra multa proporcional aos meses restantes.",
  },
  {
    id: "suporte",
    question: "Como funciona o suporte 24/7?",
    answer:
      "Atendimento via chat, telefone e WhatsApp todos os dias da semana, 24 horas por dia. Para empresas, oferecemos SLA de 4 horas.",
  },
  {
    id: "wifi",
    question: "O roteador Wi-Fi está incluso?",
    answer:
      "Sim. Todos os planos incluem roteador Wi-Fi compatível, e os planos Gamer & Pro e Rural Híbrido vêm com Wi-Fi 6.",
  },
  {
    id: "cobertura",
    question: "Como verifico se há cobertura no meu endereço?",
    answer:
      "Fale com a nossa equipe pelo WhatsApp informando seu CEP. Confirmamos a disponibilidade e propomos a melhor tecnologia (fibra, rádio ou híbrida).",
  },
  {
    id: "ip-fixo",
    question: "Posso ter IP fixo?",
    answer:
      "Sim, disponível no plano Empresarial e como adicional nos demais planos, mediante contato com o nosso consultor.",
  },
  {
    id: "mudanca",
    question: "Posso levar a Lannet quando me mudar?",
    answer:
      "Sim, dentro da área de cobertura. Solicite a mudança com 7 dias de antecedência pelo WhatsApp ou central de atendimento.",
  },
  {
    id: "pagamento",
    question: "Quais formas de pagamento são aceitas?",
    answer:
      "Boleto bancário, débito automático e cartão recorrente nas principais bandeiras.",
  },
];
