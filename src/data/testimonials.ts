export interface Testimonial {
  name: string
  role: string
  text: string
  avatar: string | null
}

export const testimonials: Testimonial[] = [
  {
    name: 'Алексей Морозов',
    role: 'CEO, TechStart',
    text: 'Санжар сдал CRM-платформу точно в срок и без единого критического бага в продакшене. Системное мышление, глубокое погружение в задачу и честная коммуникация — редкое сочетание.',
    avatar: null,
  },
  {
    name: 'Marina Volkova',
    role: 'Product Manager, SaaS Co.',
    text: 'Worked with Sancho on our Telegram bot integration. He delivered beyond expectations — the multi-agent architecture he designed handles 10x our initial load without issues.',
    avatar: null,
  },
  {
    name: 'Бекжан Асанов',
    role: 'Основатель, MedClinic',
    text: 'Санчо сделал нам сайт под ключ за 2 недели: дизайн, разработка, хостинг, SEO. Через месяц — первая страница Google. Рекомендую без оговорок.',
    avatar: null,
  },
  {
    name: 'Dmitry Petrov',
    role: 'CTO, FinTech Ltd.',
    text: 'Hired Sancho for a VPN infrastructure audit and rebuild. He identified 3 critical security gaps we had missed, rewrote the deployment scripts, and documented everything. Solid engineer.',
    avatar: null,
  },
]
