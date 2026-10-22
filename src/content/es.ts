import type { ProcessStep } from '@/components/ui/ProcessSteps'
import type { TerminalLine } from '@/components/ui/Terminal'

// All user-facing copy, rioplatense Spanish. Voice rules: design system README.

export const nav = {
  links: [
    { label: 'Servicios', href: '#servicios' },
    { label: 'Proceso', href: '#proceso' },
    { label: 'Manifiesto', href: '#manifiesto' },
    { label: 'Contacto', href: '#contacto' },
  ],
  cta: { label: 'Agendá una llamada', href: '#contacto' },
  skip: 'Saltar al contenido',
  themeToLight: 'Usar tema claro',
  themeToDark: 'Usar tema oscuro',
  backToTop: 'Volver arriba',
}

export const hero = {
  eyebrow: 'Software de iteración rápida',
  titleBefore: 'Del dato crudo al ',
  titleHighlight: 'software',
  titleAfter: ' que funciona.',
  lede: 'Somos un estudio de software. Armamos pruebas de concepto, automatizamos procesos con AI y llevamos a producción lo que demuestra valor.',
  primary: { label: 'Contanos tu idea', href: '#contacto' },
  secondary: { label: 'Ver cómo trabajamos', href: '#proceso' },
  terminal: {
    title: 'poc/reclamos',
    status: 'staging',
    lines: [
      {
        kind: 'cmd',
        text: 'dataminers poc --idea "clasificar reclamos con AI"',
      },
      { kind: 'info', text: 'relevando datos de muestra' },
      { kind: 'ok', text: 'dataset de muestra listo' },
      { kind: 'ok', text: 'modelo evaluado contra el proceso actual' },
      { kind: 'ok', text: 'demo desplegada en staging' },
      { kind: 'next', text: 'feedback del cliente: iterar' },
    ] satisfies TerminalLine[],
  },
}

export const services = {
  eyebrow: 'Servicios',
  title: 'Tres formas de empezar',
  items: [
    {
      eyebrow: 'Validar',
      title: 'Pruebas de concepto',
      body: 'Validamos una idea con código real antes de invertir en un producto entero. Una pregunta, una demo, una respuesta.',
      tags: ['poc', 'demo funcional'],
    },
    {
      eyebrow: 'Automatizar',
      title: 'Procesos con AI',
      body: 'Detectamos tareas repetitivas y las resolvemos con modelos de lenguaje, agentes y automatizaciones integradas a tus sistemas.',
      tags: ['llm', 'agentes', 'rag'],
      featured: true,
    },
    {
      eyebrow: 'Escalar',
      title: 'De PoC a producto',
      body: 'Lo que funcionó se endurece: arquitectura, tests, despliegue y monitoreo para que escale sin sorpresas.',
      tags: ['ci/cd', 'observabilidad'],
    },
  ],
}

export const process = {
  eyebrow: 'Cómo trabajamos',
  title: 'Ciclos cortos, decisiones con evidencia',
  steps: [
    {
      label: 'relevar',
      title: 'Relevamos',
      body: 'Entendemos el proceso, los datos disponibles y qué decisión querés tomar.',
    },
    {
      label: 'prototipar',
      title: 'Prototipamos',
      body: 'Una PoC funcionando con datos reales, en días y no en meses.',
    },
    {
      label: 'medir',
      title: 'Medimos',
      body: 'La comparamos contra el proceso actual con métricas acordadas al inicio.',
    },
    {
      label: 'escalar',
      title: 'Escalamos',
      body: 'Si funciona, la llevamos a producción. Si no, lo sabés rápido y barato.',
    },
  ] satisfies ProcessStep[],
}

export const manifesto = {
  eyebrow: 'Manifiesto',
  quote:
    'Una PoC no es una maqueta: es una pregunta con código. La respondemos rápido para que decidas con evidencia, no con intuición.',
  by: '— equipo Dataminers',
}

export const contact = {
  eyebrow: 'Contacto',
  title: '¿Tenés un proceso que podría resolver una AI?',
  body: 'Contanos qué querés validar. Te respondemos con una propuesta de PoC: alcance, plazo y cómo vamos a medir si funcionó.',
  tags: ['propuesta de poc', 'sin compromiso'],
  privacy:
    'Usamos estos datos solo para responderte. No los compartimos ni te sumamos a listas de correo.',
  fields: {
    name: {
      label: 'Nombre',
      placeholder: 'Ana Pérez',
      hint: 'Para saber con quién hablamos.',
    },
    email: {
      label: 'Email de trabajo',
      placeholder: 'ana@empresa.com',
      hint: 'Te respondemos a este email.',
    },
    idea: {
      label: '¿Qué proceso querés resolver?',
      placeholder: 'Por ejemplo: clasificar los reclamos que llegan por email.',
      hint: 'Dos o tres líneas alcanzan.',
    },
  },
  summaryTitle: 'Antes de enviar:',
  ready: 'Todo listo para enviar.',
  submit: 'Enviar idea',
  sending: 'Enviando…',
  sent: 'Recibimos tu idea. Te respondemos por email.',
  mailto:
    'Abrimos tu cliente de correo con el mensaje listo. Envialo desde ahí.',
  failed: (reason: string) => `No se pudo enviar (${reason}).`,
  retry: 'Reintentar',
}

export const footer = {
  tagline: '// software de iteración rápida, PoCs y procesos con AI',
  links: [
    { label: 'Servicios', href: '#servicios' },
    { label: 'Proceso', href: '#proceso' },
    { label: 'Contacto', href: '#contacto' },
  ],
  copyright: `© ${new Date().getFullYear()} Dataminers`,
}
