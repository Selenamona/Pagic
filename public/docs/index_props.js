import projectConfig from '/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: '' },
    'pagePath': "docs/README.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "docs/index.html",
    'title': "简介",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>简介</h1>\n<p>Pagic is a static site generator powered by Deno + React.</p>\n<p><a href="introduction.html">详细介绍</a>\n<a href="usage.html">具体使用</a></p>'
        } }),
    'head': null,
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "\u7B80\u4ECB"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<p>Pagic is a static site generator powered by Deno + React.</p>\n<p><a href="introduction.html">详细介绍</a>\n<a href="usage.html">具体使用</a></p>'
        } }),
    'toc': null,
    'author': undefined,
    'contributors': [],
    'date': "2021-08-03T07:15:47.062Z",
    'updated': null,
    'excerpt': "Pagic is a static site generator powered by Deno + React. 详细介绍 具体使用",
    'cover': undefined,
    'sidebar': [
        {
            "link": "docs/index.html",
            "children": [
                {
                    "text": "基本介绍",
                    "link": "docs/introduction.html",
                    "pagePath": "docs/introduction.md"
                },
                {
                    "text": "使用",
                    "link": "docs/usage.html",
                    "pagePath": "docs/usage.md"
                }
            ],
            "pagePath": "docs/README.md",
            "text": "简介"
        },
        {
            "link": "about/index.html",
            "children": [
                {
                    "text": "加入我们",
                    "link": "about/join_us.html",
                    "pagePath": "about/join_us.md"
                },
                {
                    "text": "团队",
                    "link": "about/team.html",
                    "pagePath": "about/team.md"
                },
                {
                    "text": "使用",
                    "link": "about/usage.html",
                    "pagePath": "about/usage.md"
                }
            ],
            "pagePath": "about/README.md",
            "text": "关于我们"
        }
    ]
};
