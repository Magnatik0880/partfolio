export interface Experience {
  year: string
  role: string
  company: string
  desc: string
  color: 'cyan' | 'green' | 'purple' | 'pink'
}

export const experiences: Experience[] = [
  {
    year: '2024–н.в.',
    role: 'Principal Systems Engineer',
    company: 'MOBO.KG',
    desc: 'Архитектура и разработка CRM/ERP-платформы, AI-ботов, VPN-инфраструктуры и корпоративных сайтов. Полная ответственность за технический стек: от кода до серверов и безопасности.',
    color: 'cyan',
  },
  {
    year: '2020–2024',
    role: 'Full-Stack Developer & AI Engineer',
    company: 'Self-employed',
    desc: 'Разработка SaaS-платформ, Telegram-ботов с интеграцией LLM (OpenAI, Claude), автоматизация бизнес-процессов. Проекты для клиентов из России, Кыргызстана и СНГ.',
    color: 'green',
  },
  {
    year: '2015–2020',
    role: 'Senior Backend Developer',
    company: 'Various clients',
    desc: 'PHP/Laravel, Python, PostgreSQL. Проектирование REST API, multi-tenant систем, интеграций с платёжными системами и внешними сервисами. DevOps: Linux, Nginx, Docker, CI/CD.',
    color: 'purple',
  },
  {
    year: '2008–2015',
    role: 'Hardware Engineer & Developer',
    company: 'Service Center',
    desc: 'Диагностика и ремонт электроники на уровне платы: micro-soldering, BGA. Android-разработка: bootloader unlock, кастомные прошивки, TWRP, Magisk. Сборка и обслуживание ПК.',
    color: 'pink',
  },
]
