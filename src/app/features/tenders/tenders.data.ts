export interface TenderItem {
  id: string;
  date: string;
  deadline: string;
  views: number;
  status: 'open' | 'closed' | 'evaluating';
  title: string;
  excerpt: string;
  body: string[];
  contact: { name: string; phone: string; email: string };
  image: string;
}

export const TENDERS: TenderItem[] = [
  {
    id: 'preselection-2026-05',
    date: '2026-05-18',
    deadline: '2026-06-15',
    views: 156,
    status: 'open',
    title: 'AO «Узбекгидроэнерго» объявляет предварительный отбор коммерческих предложений',
    excerpt: 'Цель — определение стартовой цены на оказание услуг по техническому обслуживанию.',
    body: [
      'Предмет тендера: техническое обслуживание и ремонт оборудования ГЭС.',
      'Объём работ включает диагностику, плановый ремонт и поставку запасных частей.',
      'Подача предложений принимается через корпоративный портал и электронную почту указанного контактного лица.',
    ],
    contact: { name: 'Departament zakupok', phone: '+998 71 200-00-00', email: 'tenders@uzbekhydro.uz' },
    image: '/ges1.png',
  },
  {
    id: 'is-development-2026',
    date: '2026-04-06',
    deadline: '2026-05-30',
    views: 1117,
    status: 'evaluating',
    title: 'Сбор предварительных коммерческих предложений на разработку информационной системы (ИС)',
    excerpt: 'Разработка ERP-модуля для управления техническим обслуживанием активов.',
    body: [
      'Требуется разработка единой информационной системы для учёта оборудования, графика технического обслуживания и аналитики.',
      'Срок разработки: 12 месяцев. Технологический стек — на выбор подрядчика, согласование архитектуры в первые 4 недели.',
    ],
    contact: { name: 'Отдел IT', phone: '+998 71 200-00-11', email: 'it-procurement@uzbekhydro.uz' },
    image: '/hero.jpg',
  },
  {
    id: 'preselection-2026-03',
    date: '2026-03-26',
    deadline: '2026-04-15',
    views: 766,
    status: 'closed',
    title: '“O‘zbekgidroenergo” AJ boshlang‘ich bahosini aniqlash uchun dastlabki tanlov',
    excerpt: 'Boshlang‘ich baho aniqlash uchun dastlabki tanlov e\'lon qilinadi.',
    body: [
      'Ushbu tanlov yopilgan. Yutuqli ishtirokchi jamiyat veb-saytida e\'lon qilinadi.',
    ],
    contact: { name: 'Procurement office', phone: '+998 71 200-00-22', email: 'procurement@uzbekhydro.uz' },
    image: '/hero.png',
  },
  {
    id: 'turbine-supply-2026',
    date: '2026-03-10',
    deadline: '2026-06-30',
    views: 432,
    status: 'open',
    title: 'Поставка турбинных узлов для модернизации Чарвакской ГЭС',
    excerpt: 'Тендер на поставку 4 турбинных блоков с гарантией не менее 25 лет.',
    body: [
      'Поставщик должен иметь подтверждённый опыт поставки оборудования аналогичной мощности.',
      'Условия поставки — DAP, площадка ГЭС. Срок поставки — не позднее Q2 2027.',
    ],
    contact: { name: 'Технический отдел', phone: '+998 71 200-00-33', email: 'tech@uzbekhydro.uz' },
    image: '/ges.png',
  },
  {
    id: 'audit-services-2026',
    date: '2026-02-18',
    deadline: '2026-03-05',
    views: 289,
    status: 'closed',
    title: 'Услуги внешнего аудита финансовой отчётности за 2025 год',
    excerpt: 'Конкурс на оказание услуг аудита по МСФО.',
    body: [
      'Требуется наличие действующей лицензии Республики Узбекистан и опыта работы с предприятиями энергетического сектора.',
    ],
    contact: { name: 'Финансовый департамент', phone: '+998 71 200-00-44', email: 'finance@uzbekhydro.uz' },
    image: '/hero.jpg',
  },
];

export function findTender(id: string): TenderItem | undefined {
  return TENDERS.find(t => t.id === id);
}
