import projectConfig from '/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: '' },
    'pagePath': "README.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "index.html",
    'title': "Build a static website",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<p><a href="https://pagic.org/docs/config.html#sidebar">Pagic</a></p>\n<h1>Build a static website</h1>\n<p>pagic build [options]</p>\n<ul>\n<li>--watch   Watch file changes to rebuild</li>\n<li>--serve   Start local service, preview static website</li>\n<li>--port    Specify the port of the local service</li>\n</ul>\n<p>eg: <code>pagic build --watch --serve</code></p>'
        } }),
    'head': null,
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': undefined,
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<p><a href="https://pagic.org/docs/config.html#sidebar">Pagic</a></p>\n<h1>Build a static website</h1>\n<p>pagic build [options]</p>\n<ul>\n<li>--watch   Watch file changes to rebuild</li>\n<li>--serve   Start local service, preview static website</li>\n<li>--port    Specify the port of the local service</li>\n</ul>\n<p>eg: <code>pagic build --watch --serve</code></p>'
        } }),
    'toc': null,
    'author': undefined,
    'contributors': [],
    'date': "2021-08-03T07:15:47.062Z",
    'updated': null,
    'excerpt': "Pagic Build a static website pagic build [options] - --watch Watch file changes to rebuild - --serve Start local service, preview static website - --port Specify the port of the local service eg: pagic build --...",
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
