export interface NewsItem {
  id: string;
  date: string;
  views: number;
  category: string;
  title: string;
  excerpt: string;
  body: string[];
  image: string;
}

export const NEWS: NewsItem[] = [
  {
    id: 'pq-163-fargona',
    date: '2026-05-19',
    views: 831,
    category: 'Loyihalar',
    title: '“Gidroenergetika sohasini yanada rivojlantirish”ga oid PQ–163-son qarori: Farg‘ona viloyatidagi loyihalar',
    excerpt: 'Farg‘ona viloyatida amalga oshiriladigan loyihalar bo‘yicha infografika va batafsil ma\'lumotlar.',
    body: [
      'O‘zbekiston Respublikasi Prezidentining 2026-yil 12-aprel kungi PQ–163-son qarori asosida Farg‘ona viloyatida kichik va o‘rta quvvatli gidroelektrostansiyalar qurish bo‘yicha ishlar boshlandi.',
      'Loyihalar umumiy quvvati 38 MVt bo‘lgan 6 ta yangi obyektni o‘z ichiga oladi. Ishlarning birinchi bosqichi 2027-yil oxiriga qadar yakunlanadi.',
      'Loyihalar moliyalashtirilishi xalqaro hamkorlar va davlat byudjeti hisobidan ta\'minlanadi. Ekologik baholash va mahalliy aholi bilan muloqot bosqichi tugatildi.',
    ],
    image: '/hero.jpg',
  },
  {
    id: 'ai-suv-ombori',
    date: '2026-05-19',
    views: 874,
    category: 'Texnologiyalar',
    title: 'Sun\'iy intellekt yordamida suv omborlariga kelishi kutilayotgan suvlarni prognoz qilish tizimi',
    excerpt: 'AI-modeli orqali oqim hajmini bashorat qilish — gidroenergetika ishlab chiqarishini optimallashtirish vositasi.',
    body: [
      'Tizim mavjud meteorologik ma\'lumotlar, qor qoplami va daryo oqimi statistikasini birlashtirib, 14 kunlik prognozni ishlab chiqaradi.',
      'Pilot loyiha Charvoq va Andijon suv omborlarida sinovdan o‘tdi. Bashorat aniqligi 91% darajasiga yetdi.',
      'Tizim 2026-yil yakuniga qadar barcha asosiy GESlarda joriy etiladi.',
    ],
    image: '/hero.png',
  },
  {
    id: 'investitsiya-yigilish',
    date: '2026-05-18',
    views: 1068,
    category: 'Tadbirlar',
    title: 'Investitsiya kompleksi xodimlari bilan tanqidiy-tahliliy yig‘ilish',
    excerpt: 'Mas\'uliyat va qat\'iy intizom ustuvor vazifa etib belgilandi.',
    body: [
      'Yig‘ilishda joriy yilning birinchi choragidagi yutuqlar va kamchiliklar tahlil qilindi.',
      'Boshqaruv raisi tomonidan har bir bo‘lim rahbari oldidagi konkret topshiriqlar belgilandi va ularning bajarilishi har oyda nazorat qilinishi e\'lon qilindi.',
    ],
    image: '/ges.png',
  },
  {
    id: 'adani-uchrashuv',
    date: '2026-05-18',
    views: 1060,
    category: 'Hamkorlik',
    title: 'Hindistonning “Adani Group” kompaniyasi vakillari bilan uchrashuv',
    excerpt: 'Hamkorlik istiqbollari va investitsiya imkoniyatlari muhokama qilindi.',
    body: [
      'Uchrashuvda gidroenergetika, qayta tiklanuvchi energiya manbalari va infratuzilma sohalarida hamkorlik yo‘nalishlari belgilab olindi.',
      'Tomonlar memorandum imzolashga tayyorgarlik bo‘yicha kelishuvga erishdi.',
    ],
    image: '/ges1.png',
  },
  {
    id: 'kuz-qish-tayyorgarlik',
    date: '2026-04-22',
    views: 612,
    category: 'Operatsiyalar',
    title: 'Kuz-qish mavsumiga tayyorgarlik bo‘yicha amaliy mashg‘ulot o‘tkazildi',
    excerpt: 'Asosiy GESlarda profilaktika va texnik holatni baholash ishlari yakunlandi.',
    body: [
      'Mashg‘ulot doirasida favqulodda vaziyatlarda harakatlar algoritmi sinovdan o‘tkazildi.',
      'Barcha GESlar mavsumiy yuklamalarga to‘liq tayyor ekanligi qayd etildi.',
    ],
    image: '/hero.jpg',
  },
  {
    id: 'norin-modernizatsiya',
    date: '2026-04-10',
    views: 945,
    category: 'Modernizatsiya',
    title: 'Norin GES-1 turbina blokining modernizatsiyasi yakunlandi',
    excerpt: 'Quvvat 12% ga oshirildi, energiya samaradorligi sezilarli darajada yaxshilandi.',
    body: [
      'Ishlar yapon hamkorlari bilan birgalikda olib borildi va belgilangan muddatdan oldin tugatildi.',
      'Yangi turbinalar 30 yil davomida ishlash muddatiga ega.',
    ],
    image: '/ges.png',
  },
];

export function findNews(id: string): NewsItem | undefined {
  return NEWS.find(n => n.id === id);
}
