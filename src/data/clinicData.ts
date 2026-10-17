/**
 * Clínica Veterinaria Civet (Clínica Integral Veterinaria) - datos de la veterinaria.
 * Fuente: ficha de Google Maps e Instagram @clinicaveterinariacivet; el WhatsApp lo pasó Luis.
 * Todo lo que se muestra en la web sale de acá: para otra veterinaria alcanza con cambiar este archivo.
 */

export const CLINIC = {
  name: 'Clínica Veterinaria Civet',
  initials: 'CI',
  professional: 'nuestro equipo',
  street: 'Av. Brig. Gral. Juan Manuel de Rosas',
  streets: 'Av. Brig. Gral. J. M. de Rosas, Virrey del Pino',
  locality: 'Virrey del Pino',
  province: 'Provincia de Buenos Aires',
  fullAddress: 'Av. Brig. Gral. Juan Manuel de Rosas, B1763 Virrey del Pino, Provincia de Buenos Aires',
  since: 0,
  // Número del enlace de WhatsApp de su Instagram (wa.me/+541158292251).
  phone: '011 5829-2251',
  whatsappNumber: '541158292251',
  whatsappDisplay: '11 5829-2251',
  instagramHandle: '@clinicaveterinariacivet',
  instagramUrl: 'https://www.instagram.com/clinicaveterinariacivet/',
  email: '',
  mapsUrl: 'https://maps.app.goo.gl/qL9VxTp5cu6HDjeT8',
  coordinates: { lat: -34.8216223, lng: -58.6426373 },
  // Ficha de Google: 4,6 con 524 opiniones (se muestra "+500").
  googleRating: '4.6',
  googleReviews: '+500',
  googleNote: 'Opiniones de clientes en Google',
  googleScope: '',
  // Texto en primera persona armado con la descripción de su Instagram.
  about:
    'En Clínica Veterinaria Civet somos una clínica integral veterinaria de Virrey del Pino, sobre la Avenida Brigadier General Juan Manuel de Rosas. Atendemos clínica y cirugías, y contamos con ecografía, radiografías digitales, análisis de laboratorio y especialidades médicas para el cuidado de tu mascota.',
  // Foto principal del inicio (ruta dentro de /public); null muestra una ilustración con huellitas.
  photo: null as string | null,
  servicesSummary: 'clínica, cirugías, ecografías, radiografías digitales y laboratorio para tu mascota',
  paymentMethods: [] as string[],
  hoursSummary: 'Lunes a sábado de 9 a 18 hs',
  headline: 'Cuidado integral',
  headlineHighlight: 'para tu mascota',
  locationLabel: 'Virrey del Pino',
};

export interface SocialLink {
  id: 'instagram' | 'facebook' | 'tiktok' | 'threads';
  label: string;
  handle: string;
  url: string;
}

export const SOCIALS: SocialLink[] = [
  {
    id: 'instagram',
    label: 'Instagram',
    handle: '@clinicaveterinariacivet',
    url: 'https://www.instagram.com/clinicaveterinariacivet/',
  },
  {
    id: 'facebook',
    label: 'Facebook',
    handle: 'Clínica Integral Veterinaria',
    url: 'https://www.facebook.com/100873984811078',
  },
];

export interface Branch {
  id: string;
  label: string;
  zone: string;
  fullAddress: string;
  mapsUrl: string;
  mapQuery: string;
  whatsapp: string;
  whatsappDisplay: string;
  /** Foto de la fachada (ruta dentro de /public); null muestra un recuadro reservado. */
  photo: string | null;
  /** Video del lugar (ruta dentro de /public); si existe se muestra en lugar de la foto. */
  video: string | null;
  showSchedule: boolean;
}

// Una sola sede. La foto de la sucursal se agrega cuando la tengamos.
export const BRANCHES: Branch[] = [
  {
    id: 'virrey-del-pino',
    label: 'Av. Brig. Gral. J. M. de Rosas',
    zone: 'Virrey del Pino',
    fullAddress: 'Av. Brig. Gral. Juan Manuel de Rosas, B1763 Virrey del Pino, Provincia de Buenos Aires',
    mapsUrl: 'https://maps.app.goo.gl/qL9VxTp5cu6HDjeT8',
    mapQuery: '-34.8216223,-58.6426373',
    whatsapp: '541158292251',
    whatsappDisplay: '11 5829-2251',
    photo: null,
    video: null,
    showSchedule: true,
  },
];

/** Texto para aclarar la sucursal en los mensajes de WhatsApp; vacío si hay una sola sede. */
export const sedeTxt = (b: Branch): string => (BRANCHES.length > 1 ? `, sucursal ${b.label} (${b.zone})` : '');

export interface Highlight {
  icon: 'star' | 'heart' | 'calendar' | 'users' | 'pin';
  title: string;
  text: string;
}

export const HIGHLIGHTS: Highlight[] = [
  { icon: 'star', title: '4,6 en Google', text: 'Más de 500 opiniones de clientes' },
  { icon: 'pin', title: 'En Virrey del Pino', text: 'Av. Brig. Gral. Juan Manuel de Rosas' },
  { icon: 'calendar', title: 'Turnos por WhatsApp', text: 'Escribinos y coordinamos tu turno' },
];

export interface Review {
  author: string | null;
  text: string;
}

// Extractos textuales de opiniones públicas de la ficha de Google Maps (524 opiniones, 4,6).
export const REVIEWS: Review[] = [
  {
    author: 'Tavo C.',
    text: 'Después de sentir que me estaban afanando en otra vete, y sentir que no la podía salvar a Lupe, decidí ir por recomendación a Civet y no tengo más que palabras de agradecimiento!! La salvaron a ella y su hermana! Desde ahora es mi vete de…',
  },
  { author: null, text: 'Excelente atención, muy amables, muy conforme de como tratan a los animalitos!!' },
  { author: null, text: 'Buena atención y muy buenos PROFESIONALES, recomendables en todo sentido' },
  { author: null, text: 'Muy buen lugar para atender a sus mascotas.' },
];

export interface TeamMember {
  role: string;
  name: string | null;
  photo: string | null;
  bio?: string;
  /** Verdadero para la tarjeta de pacientes: muestra varios cuadros de fotos en lugar de la tarjeta con nombre. */
  galeria?: boolean;
}

// Fotos de los pacientes (ruta dentro de /public). Mientras esté vacía se muestran 6 cuadros reservados;
// con fotos, se muestran solo las que hay.
export const PACIENTES_FOTOS: string[] = [];

// Nosotros: el equipo y una tarjeta de pacientes con cuadros para fotos. Nombres y fotos: A CONFIRMAR con la veterinaria.
export const TEAM: TeamMember[] = [
  { role: 'Médicos veterinarios', name: null, photo: null },
  {
    role: 'Nuestros pacientes',
    name: null,
    photo: null,
    galeria: true,
    bio: 'Estas son algunas de las mascotas que nos eligen para cuidar su salud.',
  },
];

export interface ServiceItem {
  id: string;
  name: string;
  description: string;
  icon:
    | 'stethoscope'
    | 'sparkles'
    | 'layers'
    | 'shield'
    | 'activity'
    | 'smile'
    | 'crown'
    | 'anchor'
    | 'gem'
    | 'paw'
    | 'syringe'
    | 'scissors'
    | 'heartpulse';
}

// Los cinco primeros salen de la descripción de su Instagram (clínica y cirugías, ecografía, radiografías digitales,
// análisis de laboratorio, especialidades médicas). Vacunación y desparasitación: A CONFIRMAR con la veterinaria.
export const SERVICES: ServiceItem[] = [
  {
    id: 'clinica',
    name: 'Clínica médica',
    description: 'Consulta y revisión general de tu perro o gato, con un plan de cuidado pensado para él.',
    icon: 'stethoscope',
  },
  {
    id: 'cirugias',
    name: 'Cirugías',
    description: 'Procedimientos quirúrgicos programados, con indicaciones claras para el después.',
    icon: 'heartpulse',
  },
  {
    id: 'ecografia',
    name: 'Ecografía',
    description: 'Estudio por imágenes para diagnosticar y planificar el tratamiento de tu mascota.',
    icon: 'layers',
  },
  {
    id: 'radiografias',
    name: 'Radiografías digitales',
    description: 'Radiografías digitales para ver con claridad lo que necesita tu mascota.',
    icon: 'sparkles',
  },
  {
    id: 'laboratorio',
    name: 'Análisis de laboratorio',
    description: 'Análisis para llegar a un diagnóstico y controlar la salud de tu mascota.',
    icon: 'activity',
  },
  {
    id: 'especialidades',
    name: 'Especialidades médicas',
    description: 'Atención de especialistas para los casos que necesitan una mirada más específica.',
    icon: 'gem',
  },
  {
    id: 'vacunacion',
    name: 'Vacunación',
    description: 'Plan de vacunas para cachorros y adultos, con recordatorios de refuerzo.',
    icon: 'syringe',
  },
  {
    id: 'desparasitacion',
    name: 'Desparasitación',
    description: 'Control de parásitos internos y externos para que tu mascota esté protegida.',
    icon: 'shield',
  },
];

export interface ScheduleDay {
  dayName: string;
  dayIndex: number; // 0 = domingo ... 6 = sábado
  open: string | null;
  close: string | null;
  /** Segundo turno del día (horario cortado), si lo hay. */
  open2?: string;
  close2?: string;
}

/** Falso si no se conocen los horarios: sin horarios no se muestra "Abierto ahora". */
export const HAS_SCHEDULE = true;

// Horarios de la ficha de Google: lunes a sábado de 9 a 18, domingo cerrado.
export const SCHEDULE: ScheduleDay[] = [
  { dayName: 'Lunes', dayIndex: 1, open: '09:00', close: '18:00' },
  { dayName: 'Martes', dayIndex: 2, open: '09:00', close: '18:00' },
  { dayName: 'Miércoles', dayIndex: 3, open: '09:00', close: '18:00' },
  { dayName: 'Jueves', dayIndex: 4, open: '09:00', close: '18:00' },
  { dayName: 'Viernes', dayIndex: 5, open: '09:00', close: '18:00' },
  { dayName: 'Sábado', dayIndex: 6, open: '09:00', close: '18:00' },
  { dayName: 'Domingo', dayIndex: 0, open: null, close: null },
];

/** Turnos del día como pares [desde, hasta]; vacío si está cerrado. */
const turnosDelDia = (d?: ScheduleDay): [string, string][] => {
  if (!d) return [];
  const pares: [string | null | undefined, string | null | undefined][] = [
    [d.open, d.close],
    [d.open2, d.close2],
  ];
  return pares.filter((p): p is [string, string] => Boolean(p[0] && p[1]));
};

/** Una línea por turno ("09:00 - 12:30", "16:00 - 18:00") o "Cerrado". */
export function horarioLineas(d: ScheduleDay): string[] {
  const turnos = turnosDelDia(d);
  return turnos.length ? turnos.map(([a, b]) => `${a} - ${b}`) : ['Cerrado'];
}

const TIME_ZONE = 'America/Argentina/Buenos_Aires';

export interface ClinicStatus {
  isOpen: boolean;
  badge: string;
  detail: string;
}

const toMinutes = (t: string) => {
  const [h, m] = t.split(':').map(Number);
  return h * 60 + m;
};

export function getClinicStatus(now: Date = new Date()): ClinicStatus {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: TIME_ZONE,
    weekday: 'short',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
  }).formatToParts(now);

  const weekday = (parts.find((p) => p.type === 'weekday')?.value || '').toLowerCase().slice(0, 3);
  const hour = parseInt(parts.find((p) => p.type === 'hour')?.value || '0', 10) % 24;
  const minute = parseInt(parts.find((p) => p.type === 'minute')?.value || '0', 10);
  const dayMap: Record<string, number> = { sun: 0, mon: 1, tue: 2, wed: 3, thu: 4, fri: 5, sat: 6 };
  const today = dayMap[weekday] ?? now.getDay();
  const minutes = hour * 60 + minute;

  const turnos = turnosDelDia(SCHEDULE.find((d) => d.dayIndex === today));
  const abierto = turnos.find(([a, b]) => minutes >= toMinutes(a) && minutes < toMinutes(b));
  if (abierto) {
    return { isOpen: true, badge: 'Abierto ahora', detail: `Cierra a las ${abierto[1]} hs` };
  }
  const proximo = turnos.find(([a]) => minutes < toMinutes(a));
  if (proximo) {
    return { isOpen: false, badge: 'Cerrado ahora', detail: `Abre hoy a las ${proximo[0]} hs` };
  }

  for (let i = 1; i <= 7; i++) {
    const siguiente = turnosDelDia(SCHEDULE.find((d) => d.dayIndex === (today + i) % 7));
    if (siguiente.length) {
      const dia = SCHEDULE.find((d) => d.dayIndex === (today + i) % 7);
      const cuando = i === 1 ? 'mañana' : `el ${dia?.dayName.toLowerCase()}`;
      return { isOpen: false, badge: 'Cerrado por hoy', detail: `Abre ${cuando} a las ${siguiente[0][0]} hs` };
    }
  }
  return { isOpen: false, badge: 'Cerrado ahora', detail: '' };
}

/** Enlace de WhatsApp con el mensaje armado; sin número usa el de turnos general. */
export function whatsappUrl(message: string, number: string = CLINIC.whatsappNumber): string {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
