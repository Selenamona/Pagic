// import { React } from 'https://deno.land/x/pagic@v1.4.0/mod.ts';
export default {
    // Input and output
    srcDir: ".",
    // outDir: "public",
    root: "/",
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
    plugins: ['clean', 'init', 'md', 'tsx', 'sidebar', 'prev_next', 'ga', 'script', 'layout', 'out'],
    // Page content
    title: 'Pagic',
    description: 'A static site generator powered by Deno + React',
    sidebar: {
        '/': [
            {
                link: 'docs/README.md',
                children: ['docs/introduction.md', 'docs/usage.md'],
            }, {
                link: 'about/README.md',
                expanded: false,
                children: ['about/join_us.md', 'about/team.md', 'about/usage.md'],
            }
        ],
    },
    tools: {
        editOnGitHub: false,
        backToTop: true,
    },
};
