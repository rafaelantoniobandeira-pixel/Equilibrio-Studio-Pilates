/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ServiceItem, GalleryItem, Testimonial } from './types';

export const servicesData: ServiceItem[] = [
  {
    id: 'pilates',
    num: '01',
    name: 'Pilates',
    description: 'Se você convive com dores constantes na coluna, cervical ou joelhos, o Pilates é uma escolha segura. Aqui, nossa instrução é totalmente focada nas suas particularidades, ajudando seu corpo a se reabilitar e se fortalecer com calmaria.',
    whatsappText: 'Gostaria de saber mais sobre o atendimento de Pilates.',
    ctaText: 'Quero uma avaliação'
  },
  {
    id: 'fisioterapia',
    num: '02',
    name: 'Fisioterapia',
    description: 'Entendemos o quanto limitações físicas ou dores agudas prejudicam seu dia a dia. Oferecemos um acompanhamento clínico e humano detalhado para reduzir seu desconforto e recuperar seus movimentos com segurança, sem pressa de academia.',
    whatsappText: 'Gostaria de agendar uma avaliação de Fisioterapia.',
    ctaText: 'Falar direto com fisioterapeuta'
  },
  {
    id: 'ginastica',
    num: '03',
    name: 'Ginástica Rítmica',
    description: 'Ajudamos sua filha a desenvolver disciplina, coordenação motora e autoestima desde cedo. Oferecemos aulas cuidadosas e carinhosas em um espaço acolhedor projetado para que ela aprenda a se expressar com segurança e confiança física.',
    whatsappText: 'Gostaria de informações sobre as turmas de Ginástica Rítmica.',
    ctaText: 'Agendar uma aula experimental'
  },
  {
    id: 'ballet',
    num: '04',
    name: 'Ballet',
    description: 'Trabalhamos o desenvolvimento físico, a postura correta e o foco da sua filha com total delicadeza. Uma atividade clássica amorosa que estimula a concentração, o equilíbrio e a leveza de movimentos na infância e adolescência.',
    whatsappText: 'Gostaria de informações sobre as aulas de Ballet.',
    ctaText: 'Agendar uma aula experimental'
  },
  {
    id: 'jazz',
    num: '05',
    name: 'Jazz',
    description: 'Um estilo ativo que trabalha a expressividade e a coordenação. Ideal para canalizar benfeitoramente a energia da sua filha, melhorando a postura corporal e fortalecendo o corpo em um ambiente seguro e acolhedor.',
    whatsappText: 'Gostaria de informações sobre as turmas de Jazz.',
    ctaText: 'Agendar uma aula experimental'
  }
];

export const galleryData: GalleryItem[] = [
  {
    id: 'g1',
    image: 'https://res.cloudinary.com/dxpwgum9x/image/upload/v1780760754/WhatsApp_Image_2026-06-04_at_14.24.38_2_lptvyj.jpg',
    alt: 'Nosso estúdio completo e equipado com aparelhos de alto padrão, idealizado para um atendimento calmo e focado no seu bem-estar.',
    gridClass: 'md:col-span-2 md:row-span-2'
  },
  {
    id: 'g2',
    image: 'https://res.cloudinary.com/dxpwgum9x/image/upload/v1780760753/WhatsApp_Image_2026-06-04_at_14.23.49_5_cnqtzf.jpg',
    alt: 'Exercício de força e controle motor na cadeira de Pilates, promovendo estabilidade articular e melhora postural.',
    gridClass: 'md:col-span-1 md:row-span-1'
  },
  {
    id: 'g3',
    image: 'https://res.cloudinary.com/dxpwgum9x/image/upload/v1780760754/WhatsApp_Image_2026-06-04_at_14.23.49_4_dkemeg.jpg',
    alt: 'Ventosaterapia: técnica de liberação miofascial que estimula o fluxo sanguíneo local, aliviando tensões musculares profundas.',
    gridClass: 'md:col-span-1 md:row-span-1'
  },
  {
    id: 'g4',
    image: 'https://res.cloudinary.com/dxpwgum9x/image/upload/v1780760754/WhatsApp_Image_2026-06-04_at_14.23.49_7_bcsvup.jpg',
    alt: 'Atendimento clínico individualizado na maca com acessórios de Pilates para ganho de mobilidade e reabilitação ativa.',
    gridClass: 'md:col-span-1 md:row-span-2'
  },
  {
    id: 'g5',
    image: 'https://res.cloudinary.com/dxpwgum9x/image/upload/v1780760754/WhatsApp_Image_2026-06-04_at_14.24.38_3_hi7cj6.jpg',
    alt: 'Instrução atenta e individualizada, respeitando os limites do seu corpo e guiando cada movimento com sensibilidade e foco.',
    gridClass: 'md:col-span-2 md:row-span-1'
  },
  {
    id: 'g6',
    image: 'https://res.cloudinary.com/dxpwgum9x/image/upload/v1780760754/WhatsApp_Image_2026-06-04_at_14.23.49_6_btx5xl.jpg',
    alt: 'Sala de atividades de solo com revestimento em tatame confortável, ideal para alongamentos, reabilitação e aulas infantis.',
    gridClass: 'md:col-span-1 md:row-span-1'
  },
  {
    id: 'g7',
    image: 'https://res.cloudinary.com/dxpwgum9x/image/upload/v1780760754/WhatsApp_Image_2026-06-04_at_14.23.49_8_iqr6vl.jpg',
    alt: 'Acessórios e molas de Pilates minuciosamente organizados para garantir a precisão biomecânica nas suas sessões.',
    gridClass: 'md:col-span-2 md:row-span-1'
  },
  {
    id: 'g8',
    image: 'https://res.cloudinary.com/dxpwgum9x/image/upload/v1780760754/WhatsApp_Image_2026-06-04_at_14.23.49_9_w9wplt.jpg',
    alt: 'Recepção aconchegante e silenciosa, pensada para convidar você a desacelerar a mente antes mesmo do início da sua prática.',
    gridClass: 'md:col-span-1 md:row-span-1'
  }
];

export const testimonialsData: Testimonial[] = [
  {
    id: 't1',
    text: '“Cheguei no Studio com queixas de dores no 2 joelhos q já foram fraturados e fiz cirurgia com pinos e placa e com uma fratura não consolidada no ombro. Eu não consiga descer uma escada e as vezes nem pentear o cabelo. Mas, com menos de 2 meses fazendo Pilates com a Pricilla e com a Taty, não só consigo descer escadas como até secar meu cabelo. O atendimento é unico”',
    author: 'Eliene Kelly Vieira',
    service: 'Aluna de Pilates'
  },
  {
    id: 't2',
    text: '“Esse studio de pilates tem o compromisso das atividades serem realizadas de forma adequada e personalizada. A minha experiência está sendo muito satisfatória, pois estava sentindo muita dor e mal estar na lombar e hoje já estou sem remédios e sem dores, fortalecendo os músculos a cada dia. Agradeço a dedicação da Equipe do Studio Equilíbrio.”',
    author: 'Mara Tabatinga',
    service: 'Aluna de Pilates'
  },
  {
    id: 't3',
    text: '“Excelente studio de pilates na Ponte Alta Norte do Gama. Priscila super comprometida nas aulas. Além do pilates, o studio tem aulas ginástica rítmica, minha filha ama.”',
    author: 'Adriana Azevedo',
    service: 'Mãe de Aluna (Ginástica Rítmica & Pilates)'
  },
  {
    id: 't4',
    text: '“A experiência está sendo ótima, tem resolvido meus problemas de dores no corpo, na lombar, e a Pricila é ótima como pessoa e como profissional. Só tenho elogios, estou lá a pouco tempo e já tenho resultados incríveis. 🙏”',
    author: 'Gerson',
    service: 'Aluno de Pilates'
  },
  {
    id: 't5',
    text: '“Gosto muito de fazer Pilates na Equilíbrio Studio. Equipe focada e comprometida com o resultado. Cuidado individualizado com cada aluno. Muito bom mesmo.”',
    author: 'Cassia Silva',
    service: 'Aluna de Pilates'
  },
  {
    id: 't6',
    text: '“Estúdio de pilates maravilhoso, com instrutoras muito competentes. Lugar limpo ,organizado e aconchegante. Aulas dinâmicas e personalizadas.”',
    author: 'Helô Christiane',
    service: 'Aluna de Pilates'
  },
  {
    id: 't7',
    text: '“Faço Pilates com a Priscila há quase dois anos e é uma experiência extremamente gratificante. Uma profissional muito capacitada, cuidadosa, que faz com que o aluno se sinta muito confiante e seguro. Uma profissional que tá sempre buscando a melhor forma de trabalhar com cada aluno dentro das suas necessidades. Parabéns e obrigada Priscila! 🥇”',
    author: 'Lucimar Rodrigues',
    service: 'Aluna de Pilates'
  }
];
