import projectConfig from '/pagic.config.js';
export default {
    'prev': undefined,
    'next': undefined,
    config: { "root": "/", ...projectConfig, branch: '' },
    'pagePath': "README.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "index.html",
    'title': "Build a static website",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>Build a static website</h1>\n<p>pagic build [options]</p>\n<h1>--watch   Watch file changes to rebuild</h1>\n<h1>--serve   Start local service, preview static website</h1>\n<h1>--port    Specify the port of the local service</h1>\n<p>eg: <code>pagic build --watch --serve</code></p>'
        } }),
    'head': null,
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "Build a static website"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<p>pagic build [options]</p>\n<h1>--watch   Watch file changes to rebuild</h1>\n<h1>--serve   Start local service, preview static website</h1>\n<h1>--port    Specify the port of the local service</h1>\n<p>eg: <code>pagic build --watch --serve</code></p>'
        } }),
    'toc': null,
    'author': undefined,
    'contributors': [],
    'date': "2021-08-03T06:41:08.385Z",
    'updated': null,
    'excerpt': "pagic build [options] --watch Watch file changes to rebuild --serve Start local service, preview static website --port Specify the port of the local service eg: pagic build --watch --serve",
    'cover': undefined,
    'sidebar': [
        {
            "link": "docs/index.html",
            "children": [
                {
                    "link": "docs/introduction.html",
                    "pagePath": "docs/introduction.md"
                },
                {
                    "link": "docs/usage.html",
                    "pagePath": "docs/usage.md"
                }
            ],
            "pagePath": "docs/README.md",
            "text": "docs/README.md"
        },
        {
            "link": "about/index.html",
            "expanded": false,
            "children": [
                {
                    "link": "about/join_us.html",
                    "pagePath": "about/join_us.md"
                },
                {
                    "link": "about/team.html",
                    "pagePath": "about/team.md"
                },
                {
                    "link": "about/usage.html",
                    "pagePath": "about/usage.md"
                }
            ],
            "pagePath": "about/README.md",
            "text": "about/README.md"
        }
    ]
};
