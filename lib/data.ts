export type Artwork = {
  slug: string;
  title: string;
  year: string;
  medium: string;
  size: string;
  series: string;
  image: string;
  description: string;
};

export type Series = {
  slug: string;
  title: string;
  description: string;
};

export const series: Series[] = [
  {
    slug: "dialogi-s-gorodom",
    title: "Диалоги с городом",
    description:
      "Цикл работ, исследующий эмоциональную связь человека и городской среды: улицы, окна, отражения и тишина между домами.",
  },
  {
    slug: "vnutrenniy-svet",
    title: "Внутренний свет",
    description:
      "Серия картин о состояниях души — тепло, память и хрупкость момента, переданные через цвет и мягкий свет.",
  },
  {
    slug: "portrety",
    title: "Портреты",
    description:
      "Портретные работы, в которых художница ищет не внешнее сходство, а внутренний характер и настроение модели.",
  },
  {
    slug: "natyurmorty",
    title: "Натюрморты",
    description:
      "Камерные композиции из предметов повседневности, наполненные тихим созерцанием и вниманием к деталям.",
  },
];

export const artworks: Artwork[] = [
  {
    slug: "dialog-1",
    title: "Диалог с городом №1",
    year: "2023",
    medium: "холст, масло",
    size: "70 × 90 см",
    series: "dialogi-s-gorodom",
    image: "/images/lenskaya-dialog1.jpg",

    description:
      "Первая работа цикла — вечерний город, растворяющийся в тёплом свете окон, и одинокая фигура на пересечении улиц.",
  },
  {
    slug: "dialog-2",
    title: "Диалог с городом №2",
    year: "2023",
    medium: "холст, масло",
    size: "60 × 80 см",
    series: "dialogi-s-gorodom",
    image: "/images/lenskaya-dialog2.jpg",

    description:
      "Дождливая улица, отражения фонарей и ощущение движения сквозь застывшее время.",
  },
  {
    slug: "dialog-3",
    title: "Диалог с городом №3",
    year: "2024",
    medium: "холст, акрил",
    size: "80 × 100 см",
    series: "dialogi-s-gorodom",
    image: "/images/lenskaya-dialog3.jpg",

    description:
      "Крыши старого города на рассвете — композиция построена на контрасте холодных и тёплых тонов.",
  },
  {
    slug: "dialog-4",
    title: "Диалог с городом №4",
    year: "2024",
    medium: "холст, масло",
    size: "70 × 70 см",
    series: "dialogi-s-gorodom",
    image: "/images/lenskaya-dialog4.jpg",

    description:
      "Окна многоэтажки как фрагменты чужих историй — приём, ставший визитной карточкой серии.",
  },
  {
    slug: "svet-1",
    title: "Тихий свет",
    year: "2022",
    medium: "холст, масло",
    size: "50 × 60 см",
    series: "vnutrenniy-svet",
    image: "/images/lenskaya-svet1.jpg",

    description:
      "Интерьер комнаты в утреннем свете — работа о состоянии покоя и внутренней тишины.",
  },
  {
    slug: "svet-2",
    title: "Память о лете",
    year: "2023",
    medium: "холст, масло",
    size: "60 × 60 см",
    series: "vnutrenniy-svet",
    image: "/images/lenskaya-svet2.jpg",

    description:
      "Тёплая цветовая гамма и мягкие переходы света передают ностальгию по ушедшему сезону.",
  },
  {
    slug: "svet-3",
    title: "Хрупкость",
    year: "2024",
    medium: "холст, смешанная техника",
    size: "40 × 50 см",
    series: "vnutrenniy-svet",
    image: "/images/lenskaya-svet3.jpg",

    description:
      "Минималистичная композиция, исследующая тему уязвимости через фактуру и полупрозрачные слои краски.",
  },
  {
    slug: "portret-1",
    title: "Портрет девушки в синем",
    year: "2021",
    medium: "холст, масло",
    size: "50 × 70 см",
    series: "portrety",
    image: "/images/lenskaya-portret1.jpg",

    description:
      "Спокойный, сосредоточенный взгляд модели передан через контраст глубокого синего и тёплой охры.",
  },
  {
    slug: "portret-2",
    title: "Автопортрет",
    year: "2022",
    medium: "холст, масло",
    size: "60 × 80 см",
    series: "portrety",
    image: "/images/lenskaya-portret2.jpg",

    description:
      "Личная и рефлексивная работа, в которой художница исследует собственную идентичность.",
  },
  {
    slug: "portret-3",
    title: "Портрет отца",
    year: "2023",
    medium: "холст, масло",
    size: "70 × 90 см",
    series: "portrety",
    image: "/images/lenskaya-portret3.jpg",

    description:
      "Тёплая семейная работа с вниманием к деталям и естественному освещению.",
  },
  {
    slug: "still-1",
    title: "Натюрморт с яблоками",
    year: "2021",
    medium: "холст, масло",
    size: "40 × 40 см",
    series: "natyurmorty",
    image: "/images/lenskaya-still1.jpg",

    description:
      "Классическая постановка в современном прочтении — простота формы и насыщенность цвета.",
  },
  {
    slug: "still-2",
    title: "Утренний кофе",
    year: "2022",
    medium: "холст, акрил",
    size: "40 × 50 см",
    series: "natyurmorty",
    image: "/images/lenskaya-still2.jpg",

    description:
      "Небольшая жанровая сцена, наполненная теплом и спокойствием домашнего утра.",
  },
];

export const exhibitions = [
  {
    year: "2024",
    title: "«Диалоги с городом»",
    place: "Персональная выставка, галерея современного искусства, Москва",
    type: "Персональная",
  },
  {
    year: "2023",
    title: "«Молодые художники России»",
    place: "Групповая выставка, Центральный дом художника, Москва",
    type: "Групповая",
  },
  {
    year: "2023",
    title: "Артократия Fest",
    place: "Групповая выставка, онлайн- и офлайн-платформа Артократия",
    type: "Групповая",
  },
  {
    year: "2022",
    title: "«Внутренний свет»",
    place: "Персональная выставка, арт-пространство, Санкт-Петербург",
    type: "Персональная",
  },
  {
    year: "2021",
    title: "Ярмарка современного искусства",
    place: "Групповая выставка, выставочный центр, Москва",
    type: "Групповая",
  },
];

export const news = [
  {
    date: "Март 2024",
    title: "Открытие персональной выставки «Диалоги с городом»",
    excerpt:
      "В московской галерее современного искусства открылась персональная выставка Анастасии Ленской, объединившая работы последних трёх лет.",
  },
  {
    date: "Ноябрь 2023",
    title: "Участие в проекте «Молодые художники России»",
    excerpt:
      "Работы художницы были представлены в рамках коллективной выставки в Центральном доме художника.",
  },
  {
    date: "Июль 2023",
    title: "Интервью для платформы Артократия",
    excerpt:
      "Анастасия рассказала о вдохновении, рабочем процессе и серии «Диалоги с городом».",
  },
  {
    date: "Май 2022",
    title: "Персональная выставка «Внутренний свет» в Санкт-Петербурге",
    excerpt:
      "Дебютная персональная выставка художницы собрала работы о свете, памяти и внутренних состояниях.",
  },
];
