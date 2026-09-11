/*
  PUSAT DATA USAHA — ubah seluruh data di file ini sebelum publish.
  Ganti nama perusahaan, kontak, statistik, dan teks dengan data asli usaha Anda.
*/

export const company = {
  name: 'Sentosa Teknik Engineering',
  legalName: 'CV Sentosa Teknik Engineering',
  tagline: 'Pembuatan, Perawatan & Upgrade Steam Boiler Industri',
  establishedYear: 2010,
  phone: '+62 856-8543-495',
  whatsapp: '6285608543495', // format internasional tanpa + atau spasi
  emergencyPhone: '+62 856-8543-495',
  emergencyWhatsapp: '6285608543495',
  email: 'SentosaTeknikEngineering@gmail.com',
  address: 'JL. Raya Tlasih, No. 124, Tulungan, Tlasih Satu, Tlasih, Kec. Sidoarjo, Kabupaten Sidoarjo, Jawa Timur 61273',
  mapEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.927485510727!2d112.62044429999999!3d-7.4732601999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e780a84192abc07%3A0x16edda9279bd2842!2sSentosa%20Teknik%20Engineering.%20CV!5e0!3m2!1sen!2sid!4v1789123349823!5m2!1sen!2sid',
  // brochureUrl: '/company-profile.pdf', // ganti dengan URL PDF brosur asli
};

export const stats = [
  { value: '15+', label: 'Tahun pengalaman' },
  { value: '320+', label: 'Proyek selesai' },
  { value: '120+', label: 'Klien industri' },
  { value: '6', label: 'Sektor industri dilayani' },
];

export const services = [
  {
    no: '01',
    title: 'Pembuatan Boiler Baru',
    short:
      'Fabrikasi steam boiler custom sesuai kebutuhan kapasitas dan bahan bakar, dari desain hingga commissioning.',
    points: [
      'Desain & fabrikasi fire-tube dan water-tube',
      'Kapasitas 1–30 ton/jam, tekanan s/d 25 bar',
      'Dokumentasi bejana tekan & uji hidrostatik',
    ],
  },
  {
    no: '02',
    title: 'Perawatan & Servis',
    short:
      'Maintenance terjadwal, overhaul, dan perbaikan mendadak agar boiler beroperasi aman dan efisien tanpa henti produksi.',
    points: [
      'Service rutin & preventive maintenance',
      'Overhaul tahunan & cleaning tube',
      'Layanan darurat 24 jam untuk kerusakan kritis',
    ],
  },
  {
    no: '03',
    title: 'Upgrade & Retrofit',
    short:
      'Peningkatan kapasitas, efisiensi energi, dan konversi bahan bakar untuk unit boiler lama agar sesuai standar terkini.',
    points: [
      'Upgrade kapasitas & optimasi efisiensi',
      'Konversi bahan bakar ke gas/biomassa',
      'Retrofit sistem kontrol & burners',
    ],
  },
];

export const certifications = [
  {
    code: 'ISO 9001',
    desc: 'Sistem manajemen mutu',
  },
  {
    code: 'SNI',
    desc: 'Standar Nasional Indonesia bejana tekan',
  },
  {
    code: 'K3 Kemnaker',
    desc: 'Keselamatan kerja bejana tekan & uji berkala',
  },
];

export type Project = {
  id: string;
  sector: 'Manufaktur' | 'F&B' | 'Tekstil' | 'Kelapa Sawit' | 'Energi';
  title: string;
  client: string;
  capacity: string;
  challenge: string;
  result: string;
  image: string;
};

export const sectors = ['Semua', 'Manufaktur', 'F&B', 'Tekstil', 'Kelapa Sawit', 'Energi'] as const;

export const projects: Project[] = [
  {
    id: 'p1',
    sector: 'Kelapa Sawit',
    title: 'Pabrik Kelapa Sawit 60 ton TBS/jam',
    client: 'PT. Sawit Mandiri',
    capacity: 'Boiler water-tube 18 ton/jam, 20 bar',
    challenge:
      'Pabrik membutuhkan pasokan steam stabil untuk sterilisasi TBS dengan bahan bakar cangkang & serat.',
    result:
      'Fabrikasi boiler biomassa dengan efisiensi 88%, operasional tanpa downtime musim panen.',
    image:
      'https://images.pexels.com/photos/5411674/pexels-photo-5411674.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'p2',
    sector: 'F&B',
    title: 'Linie Produksi Minuman',
    client: 'PT. Beverindo Sejahtera',
    capacity: 'Boiler fire-tube 6 ton/jam, 12 bar',
    challenge:
      'Kebutuhan steam higienis bertekanan rendah untuk proses pasteurisasi dan sterilisasi CIP.',
    result:
      'Penggantian & retrofit boiler lama, konsumsi bahan bakar turun 14% dengan kontrol otomatis baru.',
    image:
      'https://images.pexels.com/photos/10040001/pexels-photo-10040001.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'p3',
    sector: 'Tekstil',
    title: 'Pabrik Pencelupan & Pengeringan',
    client: 'PT. Garment Nusantara',
    capacity: 'Boiler 10 ton/jam, 16 bar',
    challenge:
      'Beban steam fluktuatif untuk mesin dyeing dan stenter menimbulkan tekanan tidak stabil.',
    result:
      'Upgrade kapasitas & sistem modulasi burner, stabilitas tekanan terjaga pada beban puncak.',
    image:
      'https://images.pexels.com/photos/8246480/pexels-photo-8246480.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'p4',
    sector: 'Manufaktur',
    title: 'Fasilitas Baja & Logam',
    client: 'PT. Logam Teknik Pratama',
    capacity: 'Boiler 12 ton/jam, 18 bar',
    challenge:
      'Proses pemanasan memerlukan steam bertekanan sedang dengan reliabilitas tinggi.',
    result:
      'Overhaul menyeluruh & ganti tube, perpanjangan usia unit 8 tahun tanpa kebocoran.',
    image:
      'https://images.pexels.com/photos/8803230/pexels-photo-8803230.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'p5',
    sector: 'Energi',
    title: 'Pembangkit Kogenerasi Mini',
    client: 'PT. Energi Bersih Indonesia',
    capacity: 'Boiler water-tube 25 ton/jam, 25 bar',
    challenge:
      'Konversi unit lama dari diesel ke gas alam untuk menurunkan emisi dan biaya operasi.',
    result:
      'Retrofit burner gas & sistem kontrol, emisi CO2 turun 30% dengan biaya bahan bakar lebih rendah.',
    image:
      'https://images.pexels.com/photos/6060192/pexels-photo-6060192.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'p6',
    sector: 'Manufaktur',
    title: 'Pabrik Komponen Otomotif',
    client: 'PT. Auto Parts Maju',
    capacity: 'Boiler 8 ton/jam, 14 bar',
    challenge:
      'Downtime berulang akibat korosi tube pada boiler tua mengganggu jadwal produksi.',
    result:
      'Servis darurat 24 jam, ganti tube & treatment air, produksi kembali normal dalam 36 jam.',
    image:
      'https://images.pexels.com/photos/5851547/pexels-photo-5851547.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
];

export const testimonials = [
  {
    quote:
      'Tim teknisi datang cepat saat boiler kami macet di tengah produksi. Diperbaiki dalam sehari dan jalan kembali tanpa kerugian besar.',
    name: 'Budi Santoso',
    role: 'Plant Manager',
    company: 'PT. Sawit Mandiri',
  },
  {
    quote:
      'Kami pesan boiler baru custom sesuai kapasitas pabrik. Dokumentasi lengkap dan uji hidrostatik dilakukan transparan di tempat.',
    name: 'Ir. Linda Wijaya',
    role: 'Engineering Manager',
    company: 'PT. Beverindo Sejahtera',
  },
  {
    quote:
      'Setelah upgrade burner, konsumsi gas turun signifikan. Laporan efisiensi diberikan dengan angka jelas, bukan janji.',
    name: 'Eko Prasetyo',
    role: 'Procurement Manager',
    company: 'PT. Garment Nusantara',
  },
];

// 

export const navItems = [
  { label: 'Beranda', path: '/' },
  { label: 'Tentang', path: '/tentang' },
  { label: 'Layanan', path: '/layanan' },
  { label: 'Proyek', path: '/proyek' },
  { label: 'Kontak', path: '/kontak' },
];

export const images = {
  heroAccent:
    'https://images.pexels.com/photos/33813584/pexels-photo-33813584.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  workshop:
    'https://images.pexels.com/photos/22717514/pexels-photo-22717514.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  welderSparks:
    'https://images.pexels.com/photos/17406672/pexels-photo-17406672.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  technicianSteam:
    'https://images.pexels.com/photos/29411310/pexels-photo-29411310.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  engineerTablet:
    'https://images.pexels.com/photos/32845690/pexels-photo-32845690.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  inspect:
    'https://images.pexels.com/photos/17572741/pexels-photo-17572741.png?auto=compress&cs=tinysrgb&h=650&w=940',
  boilerUnit:
    'https://images.pexels.com/photos/36152008/pexels-photo-36152008.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
};
