import projectConfig from '/pagic.config.js';
export default {
    'prev': {
        "link": "docs/introduction.html"
    },
    'next': {
        "link": "about/index.html",
        "text": "about/README.md"
    },
    config: { "root": "/", ...projectConfig, branch: '' },
    'pagePath': "docs/usage.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "docs/usage.html",
    'title': undefined,
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h2 id="333">333<a class="anchor" href="#333">§</a></h2>'
        } }),
    'head': null,
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': undefined,
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h2 id="333">333<a class="anchor" href="#333">§</a></h2>'
        } }),
    'toc': React.createElement("nav", { key: "0", className: "toc" },
        React.createElement("ol", null,
            React.createElement("li", null,
                React.createElement("a", { href: "#333" }, "333")))),
    'author': undefined,
    'contributors': [],
    'date': "2021-08-03T06:41:08.385Z",
    'updated': null,
    'excerpt': "333",
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
