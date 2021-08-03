import { React } from 'https://deno.land/x/pagic@v1.4.0/mod.ts';
export default {
  // Input and output
  srcDir: ".",
  // outDir: "public",
  // root: "/",
  exclude: [
    "**/.*",
    "**/package.json",
    "**/package-lock.json",
    "**/node_modules",
    "pagic.config.ts",
    "pagic.config.tsx",
    "**/config.gypi",
    "**/CVS",
    "**/npm-debug.log",
    "public"
  ],
  // Themes and plugins
  theme: "docs",
  plugins: ['sidebar'],
  github: 'https://github.com/Selenamona/Pagic',
  // plugins: ['clean', 'init', 'md', 'tsx', 'sidebar', 'prev_next', 'ga', 'script', 'layout', 'out'],
  // Page content
  title: 'Pagic 基础实现',
  description: 'A static site generator powered by Deno + React', // meta
  // Due to the use of jsx syntax, the config file needs to be renamed to pagic.config.tsx and make sure React is imported.
  head: <link rel="icon" type = "image/png" href="/favicon.png" />,
  nav: [
    {
      text: '本网站使用 Pagic 构建',
      link: 'https://pagic.org/docs/config.html',
      target: '_blank',
    }
  ],
  sidebar: {
    '/': [
      {
        link: 'docs/README.md',
        children: ['docs/introduction.md', 'docs/usage.md'],
      }, {
        link: 'about/README.md',
        children: ['about/join_us.md', 'about/team.md', 'about/usage.md'],
      }
    ],
  },
  tools: {
    editOnGitHub: false,
    backToTop: true,
  },
};
