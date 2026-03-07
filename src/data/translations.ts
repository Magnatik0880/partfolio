import type { Locale } from '@/types'

const translations: Record<Locale, Record<string, string>> = {
  ru: {
    'header.name': 'Санжар Термечиков',
    'header.nickname': 'SANCHO',
    'header.title': 'Principal Systems Engineer',
    'header.subtitle': 'AI & Infrastructure Architect',
    'header.location': 'Россия · Кыргызстан · Remote',

    'hero.description': 'Проектирую и создаю сложные технические системы под ключ — от программного обеспечения и ИИ до инфраструктуры, сетей, операционных систем и низкоуровневого железа.',

    'section.projects': 'Проекты',
    'section.hardware': 'Hardware & Ремонт',
    'section.skills': 'Навыки',
    'section.certifications': 'Сертификаты',
    'section.contact': 'Контакты',
    'section.about': 'Обо мне',
    'section.experience': 'Опыт',
    'section.testimonials': 'Отзывы',

    'hero.download_cv': 'Скачать CV',

    'experience.present': 'наст. время',
    'testimonials.title': 'Что говорят клиенты',

    'about.tag': 'Principal Systems Engineer',
    'about.body': 'Проектирую и создаю сложные технические системы под ключ. Работаю на всех уровнях стека: программное обеспечение, ИИ, инфраструктура, сети, безопасность, операционные системы и низкоуровневое железо. Ключевые компетенции: системное мышление, полная ответственность, надёжность, масштабируемость и реальное продакшен-исполнение.',
    'about.thinking': 'Системное мышление, полное владение, надёжность, масштабируемость и реальное продакшен-исполнение — не принципы, а рабочий стандарт.',
    'about.pillar.reliability': 'Надёжность',
    'about.pillar.control': 'Контроль',
    'about.pillar.automation': 'Автоматизация',
    'about.pillar.production': 'Продакшен',

    'projects.crm.title': 'CRM.MOBO.KG',
    'projects.crm.desc': 'Кастомная CRM/ERP-платформа для сети сервисных центров. Multi-tenant архитектура, RBAC-роли (мастер / менеджер / админ), учёт ремонтов, склад, клиентская база. Спроектирована с нуля под масштабирование и франшизу.',

    'projects.aibot.title': 'AI Customer Support Bot',
    'projects.aibot.desc': 'Telegram-бот с ИИ для общения с клиентами: автоответы на запросы, квалификация лидов, интеграция с CRM, передача живому оператору. Многоагентная архитектура, поддержка OpenAI и Claude.',

    'projects.vpn.title': 'VPN.KG',
    'projects.vpn.desc': 'Продакшен VPN-инфраструктура на WireGuard / AmneziaWG. QR-ключи, ограничение устройств, управление через Telegram-бота. Развёрнута на bare-metal с нуля.',

    'projects.web.title': 'Создание Сайтов',
    'projects.web.desc': 'Разработка сайтов под ключ: портфолио, лендинги, корпоративные сайты, SaaS-платформы. Современный стек (Next.js, React, Laravel), SEO-оптимизация, высокая скорость, полная мобильная адаптация.',

    'projects.primadentale.title': 'PrimaDentale',
    'projects.primadentale.desc': 'Коммерческий сайт под ключ для поставщика стоматологического оборудования и медицинских решений. Полный цикл: архитектура, разработка, UI/UX, хостинг, домен, безопасность и SEO. Продакшен с 2024 года.',

    'projects.mobokg.title': 'MOBO.KG',
    'projects.mobokg.desc': 'Продакшен бизнес-платформа сервисного центра мобильной и IT-техники. Полное владение: бренд, архитектура, разработка, SEO, хостинг и доменная инфраструктура. Рынок Кыргызстана, 2024–наст. время.',

    'hardware.title': 'Hardware & Ремонт',
    'hardware.desc': 'Работаю на уровне платы: micro-soldering, BGA, замена чипов, диагностика питания. Android: bootloader, TWRP, Magisk, кастомные прошивки. Linux / Kali NetHunter. Сборка и диагностика ПК.',

    'skill.level.primary': 'Продакшен',
    'skill.level.advanced': 'Продвинутый',
    'skill.level.conceptual': 'Основы',

    'contact.title': 'Связаться со мной',
    'contact.location': 'Удалённая работа · По всему миру',
    'contact.languages': 'Русский, Кыргызский, English',
    'contact.telegram': 'Telegram',
    'contact.email': 'Email',
    'contact.available': 'Открыт к предложениям',

    'loading': 'Загрузка...',
    'mobile.select': 'Выберите раздел',
    'hint.explore': 'Кликайте по объектам для навигации',
    'hint.back': 'Назад',
  },
  en: {
    'header.name': 'Sanzhar Termechikov',
    'header.nickname': 'SANCHO',
    'header.title': 'Principal Systems Engineer',
    'header.subtitle': 'AI & Infrastructure Architect',
    'header.location': 'Russia · Kyrgyzstan · Remote',

    'hero.description': 'I design and build complex technical systems end-to-end — across software, AI, infrastructure, networking, security, operating systems, and low-level hardware.',

    'section.projects': 'Projects',
    'section.hardware': 'Hardware & Repair',
    'section.skills': 'Skills',
    'section.certifications': 'Certifications',
    'section.contact': 'Contact',
    'section.about': 'About',
    'section.experience': 'Experience',
    'section.testimonials': 'Testimonials',

    'hero.download_cv': 'Download CV',

    'experience.present': 'present',
    'testimonials.title': 'What clients say',

    'about.tag': 'Principal Systems Engineer',
    'about.body': 'I design and build complex technical systems end-to-end. I work across every layer of the stack: software, AI, infrastructure, networking, security, operating systems, and low-level hardware. Core strengths: system-level thinking, full ownership, reliability, scalability, and real-world production execution.',
    'about.thinking': 'System-level thinking, full ownership, reliability, scalability, and real-world production execution — not principles, but working standards.',
    'about.pillar.reliability': 'Reliability',
    'about.pillar.control': 'Control',
    'about.pillar.automation': 'Automation',
    'about.pillar.production': 'Production',

    'projects.crm.title': 'CRM.MOBO.KG',
    'projects.crm.desc': 'Custom CRM/ERP platform for a chain of service centers. Multi-tenant architecture, RBAC roles (technician / manager / admin), repair tracking, inventory, and client management. Designed from scratch for scale and franchise readiness.',

    'projects.aibot.title': 'AI Customer Support Bot',
    'projects.aibot.desc': 'AI-powered Telegram bot for client communication: auto-responses, lead qualification, CRM integration, seamless agent handoff. Multi-agent architecture with OpenAI & Claude.',

    'projects.vpn.title': 'VPN.KG',
    'projects.vpn.desc': 'Production VPN infrastructure on WireGuard / AmneziaWG. QR-key access, device limits, Telegram bot management. Deployed on bare-metal from scratch.',

    'projects.web.title': 'Website Development',
    'projects.web.desc': 'Full-stack website development end-to-end: portfolios, landing pages, corporate sites, SaaS platforms. Modern stack (Next.js, React, Laravel), SEO-optimised, fast-loading, fully responsive.',

    'projects.primadentale.title': 'PrimaDentale',
    'projects.primadentale.desc': 'End-to-end commercial website for a dental equipment and medical solutions supplier. Full ownership: architecture, development, UI/UX, hosting, domain, security and SEO optimisation. Live in production since 2024.',

    'projects.mobokg.title': 'MOBO.KG',
    'projects.mobokg.desc': 'Production business platform for a mobile & IT service center. Full ownership: brand, architecture, development, SEO, hosting and domain infrastructure. Serving the Kyrgyzstan market since 2024.',

    'hardware.title': 'Hardware & Repair',
    'hardware.desc': 'Board-level work: micro-soldering, BGA, chip replacement, power diagnostics. Android: bootloader, TWRP, Magisk, custom firmware. Linux / Kali NetHunter. PC assembly and diagnostics.',

    'skill.level.primary': 'Production',
    'skill.level.advanced': 'Advanced',
    'skill.level.conceptual': 'Conceptual',

    'contact.title': 'Get in Touch',
    'contact.location': 'Remote Work · Worldwide',
    'contact.languages': 'Russian, Kyrgyz, English',
    'contact.telegram': 'Telegram',
    'contact.email': 'Email',
    'contact.available': 'Open for opportunities',

    'loading': 'Loading...',
    'mobile.select': 'Choose a section',
    'hint.explore': 'Click on objects to navigate',
    'hint.back': 'Back',
  },

  kg: {
    'header.name': 'Санжар Термечиков',
    'header.nickname': 'SANCHO',
    'header.title': 'Башкы Системалар Инженери',
    'header.subtitle': 'ЖИ жана Инфраструктура Архитекти',
    'header.location': 'Россия · Кыргызстан · Алыстан',

    'hero.description': 'Татаал техникалык системаларды баштан аяк долбоорлойм жана куруум — программалык камсыздоодон, ЖИден, инфраструктурадан, тармактардан жана коопсуздуктан баштап операциялык системаларга жана төмөнкү деңгээлдеги жабдууларга чейин.',

    'section.projects': 'Долбоорлор',
    'section.hardware': 'Жабдуулар & Оңдоо',
    'section.skills': 'Көндүмдөр',
    'section.certifications': 'Сертификаттар',
    'section.contact': 'Байланыш',
    'section.about': 'Мен жөнүндө',
    'section.experience': 'Тажрыйба',
    'section.testimonials': 'Пикирлер',

    'hero.download_cv': 'CV жүктөө',

    'experience.present': 'азыр',
    'testimonials.title': 'Кардарлар эмне дейт',

    'about.tag': 'Principal Systems Engineer',
    'about.body': 'Татаал техникалык системаларды баштан аяк долбоорлойм жана куруум. Стектин бардык деңгээлдеринде иштейм: программалык камсыздоо, ЖИ, инфраструктура, тармактар, коопсуздук, операциялык системалар жана төмөнкү деңгээлдеги жабдуулар. Негизги компетенциялар: системалык ой жүгүртүү, толук жоопкерчилик, ишенимдүүлүк, масштабдалуучулук жана реалдуу өндүрүштүк аткаруу.',
    'about.thinking': 'Системалык ой жүгүртүү, толук жоопкерчилик, ишенимдүүлүк, масштабдалуучулук жана реалдуу өндүрүштүк аткаруу — принциптер эмес, жумуш стандарты.',
    'about.pillar.reliability': 'Ишенимдүүлүк',
    'about.pillar.control': 'Башкаруу',
    'about.pillar.automation': 'Автоматташтыруу',
    'about.pillar.production': 'Өндүрүш',

    'projects.crm.title': 'CRM.MOBO.KG',
    'projects.crm.desc': 'Кызмат борборлорунун тармагы үчүн кастомдук CRM/ERP-платформа. Multi-tenant архитектура, RBAC-ролдор (чебер / менеджер / администратор), оңдоолорду эсепке алуу, склад, кардарлар базасы. Масштабдоо жана франчайзинг үчүн нөлдөн долбоорлонгон.',

    'projects.aibot.title': 'AI Customer Support Bot',
    'projects.aibot.desc': 'Кардарлар менен байланыш үчүн AI Telegram-бот: автожооптор, лид квалификациясы, CRM интеграциясы, оператор тапшыруу. Көп агенттик архитектура, OpenAI жана Claude колдоосу.',

    'projects.vpn.title': 'VPN.KG',
    'projects.vpn.desc': 'WireGuard / AmneziaWG боюнча өндүрүштүк VPN-инфраструктура. QR-ачкычтар, түзмөктөрдү чектөө, Telegram-бот аркылуу башкаруу. Нөлдөн bare-metal серверде орнотулган.',

    'projects.web.title': 'Сайт Куруу',
    'projects.web.desc': 'Веб-сайттарды баштан аяк куруу: портфолио, лендинг, корпоративтик сайттар, SaaS. Заманбап технологиялар (Next.js, React, Laravel), SEO оптимизация, тез жүктөлүү, мобилдик адаптация.',

    'projects.primadentale.title': 'PrimaDentale',
    'projects.primadentale.desc': 'Стоматологиялык жабдуулар жана медициналык чечимдер жеткирүүчүсүнө коммерциялык сайт. Толук цикл: архитектура, иштеп чыгуу, UI/UX, хостинг, домен жана SEO. 2024-жылдан тартып продакшенда.',

    'projects.mobokg.title': 'MOBO.KG',
    'projects.mobokg.desc': 'Мобилдик жана IT-техниканын кызмат борборунун бизнес-платформасы. Толук жоопкерчилик: бренд, архитектура, иштеп чыгуу, SEO, хостинг. Кыргызстан рыногу, 2024–азыркы убак.',

    'hardware.title': 'Жабдуулар & Оңдоо',
    'hardware.desc': 'Плата деңгээлинде иштейм: micro-soldering, BGA, чипти алмаштыруу, электр диагностикасы. Android: bootloader, TWRP, Magisk, кастомдук прошивкалар. Linux / Kali NetHunter. ПК чогулдуруу жана диагностика.',

    'skill.level.primary': 'Өндүрүш',
    'skill.level.advanced': 'Өнүккөн',
    'skill.level.conceptual': 'Негиздер',

    'contact.title': 'Мен менен байланышыңыз',
    'contact.location': 'Алыстан иштөө · Дүйнө жүзү',
    'contact.languages': 'Орусча, Кыргызча, English',
    'contact.telegram': 'Telegram',
    'contact.email': 'Email',
    'contact.available': 'Сунуштарга ачык',

    'loading': 'Жүктөлүүдө...',
    'mobile.select': 'Бөлүм тандаңыз',
    'hint.explore': 'Навигация үчүн объекттерди басыңыз',
    'hint.back': 'Артка',
  },
}

export default translations
