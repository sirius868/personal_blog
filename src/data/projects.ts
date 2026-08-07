export interface ProjectEntry {
  name: string;
  summary: string;
  stack: string[];
  status: string;
  links: Array<{
    label: string;
    href: string;
  }>;
}

export const PROJECTS: ProjectEntry[] = [
  {
    name: "Hang's Blog",
    summary: '基于 Astro 的个人博客，专注于技术写作、静态发布和长期知识沉淀。',
    stack: ['Astro', 'Markdown', 'RSS', 'TypeScript'],
    status: 'Active',
    links: [
      { label: '主页', href: '/' },
      { label: '文章', href: '/posts/hello-blog/' }
    ]
  },
  {
    name: 'Notebook System',
    summary: '用于整理工程笔记、源码阅读和复盘流程的写作模板与方法集合。',
    stack: ['Content', 'Writing', 'Workflow'],
    status: 'Ongoing',
    links: [
      { label: '关于', href: '/about/' },
      { label: 'RSS', href: '/rss.xml' }
    ]
  },
  {
    name: 'Future Project',
    summary: '预留给后续作品、工具或实验原型的位置，保持项目页长期可扩展。',
    stack: ['TBD'],
    status: 'Planned',
    links: [{ label: '待补充', href: '/projects/' }]
  }
];
