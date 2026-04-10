import type { Project, Skill } from '@/types'

export const projects: Project[] = [
  {
    id: 'controle-gastos',
    title: 'Controle de Gastos',
    description: 'Aplicativo PWA completo para controle financeiro pessoal com dashboard, gráficos e autenticação Firebase.',
    longDescription: 'Aplicação full-featured para gestão de despesas e receitas com autenticação, dashboards interativos com Recharts, filtros avançados, suporte a modo offline como PWA e design responsivo.',
    coverGradient: ['#065f46', '#047857'],
    tags: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS', 'PWA', 'Recharts'],
    category: 'web',
    year: 2026,
    liveUrl: 'https://geri-app.netlify.app',
    featured: true,
  },
  {
    id: 'landing-inowatt',
    title: 'Landing Page Inowatt',
    description: 'Landing page corporativa para empresa industrial com blog, formulários e integração Firebase.',
    longDescription: 'Site completo para a Inowatt com páginas de automação, blog, captação de leads via Firestore e deploy via Firebase Hosting com Docker.',
    coverGradient: ['#1e3a5f', '#2563eb'],
    tags: ['HTML', 'CSS', 'JavaScript', 'Firebase', 'Docker'],
    category: 'web',
    year: 2026,
    liveUrl: 'https://inowatt.net',
    featured: true,
  },
  {
    id: 'loqquei',
    title: 'Enterprise Platform',
    description: 'Plataforma enterprise com Next.js, Supabase, MobX State Tree e editor BPMN integrado.',
    longDescription: 'Sistema complexo com dashboards, gestão de processos BPMN, editor de fluxos, autenticação robusta e notificações push.',
    coverGradient: ['#4c1d95', '#7c3aed'],
    tags: ['Flutter', 'Dart', 'API', 'MobX', 'UX/UI'],
    category: 'web',
    year: 2025,
    liveUrl: 'https://app.loqquei.com.br',
    featured: true,
  },
  {
    id: 'design-system',
    title: 'Design System UI',
    description: 'Sistema de design com componentes reutilizáveis, tokens de design e documentação interativa.',
    coverGradient: ['#831843', '#db2777'],
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Storybook'],
    category: 'ui',
    year: 2024,
    featured: false,
    githubUrl: 'https://github.com/Lo-Zig/Fokus',
  },
  {
    id: 'cli-tools',
    title: 'Dev CLI Tools',
    description: 'Conjunto de utilitários de linha de comando para automatizar tarefas repetitivas do workflow de desenvolvimento.',
    coverGradient: ['#1c1917', '#44403c'],
    tags: ['Node.js', 'TypeScript', 'CLI', 'Shell'],
    category: 'tool',
    year: 2024,
    githubUrl: 'https://github.com/Lo-Zig/Banco-JS',
    featured: false,
  },
  {
    id: 'portfolio-website',
    title: 'Portfolio Website',
    description: 'Este próprio portfolio — construído com Vite, React, Framer Motion e Tailwind CSS 4.',
    coverGradient: ['#064e3b', '#6ee7b7'],
    tags: ['React', 'TypeScript', 'Framer Motion', 'Tailwind CSS'],
    category: 'web',
    year: 2025,
    githubUrl: 'https://github.com/Lo-Zig/portfolio',
    featured: false,
  },
]

export const featuredProjects = projects.filter((p) => p.featured)

export const skills: Skill[] = [
  // Frontend
  { name: 'React', level: 'expert', category: 'frontend' },
  { name: 'TypeScript', level: 'expert', category: 'frontend' },
  { name: 'Tailwind CSS', level: 'expert', category: 'frontend' },
  { name: 'Next.js', level: 'proficient', category: 'frontend' },
  { name: 'Framer Motion', level: 'proficient', category: 'frontend' },
  { name: 'React Router', level: 'expert', category: 'frontend' },
  { name: 'CSS / SCSS', level: 'expert', category: 'frontend' },
  { name: 'HTML5', level: 'expert', category: 'frontend' },

  // Tooling
  { name: 'Vite', level: 'expert', category: 'tooling' },
  { name: 'Git / GitHub', level: 'expert', category: 'tooling' },
  { name: 'Firebase', level: 'proficient', category: 'tooling' },
  { name: 'Supabase', level: 'proficient', category: 'tooling' },
  { name: 'Docker', level: 'proficient', category: 'tooling' },
  { name: 'Node.js', level: 'proficient', category: 'tooling' },
  { name: 'Vitest', level: 'learning', category: 'tooling' },

  // Design
  { name: 'Figma', level: 'proficient', category: 'design' },
  { name: 'Design Systems', level: 'proficient', category: 'design' },
  { name: 'Responsive Design', level: 'expert', category: 'design' },
  { name: 'Storybook', level: 'learning', category: 'design' },
]
