import projectConfig from '/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: '' },
    'pagePath': "docs/introduction.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "docs/introduction.html",
    'title': "基本介绍",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>基本介绍</h1>\n<h2 id="%E4%BB%8B%E7%BB%8D1">介绍1<a class="anchor" href="#%E4%BB%8B%E7%BB%8D1">§</a></h2>\n<h3 id="%E4%BA%8C%E7%BA%A7%E6%A0%87%E9%A2%981">二级标题1<a class="anchor" href="#%E4%BA%8C%E7%BA%A7%E6%A0%87%E9%A2%981">§</a></h3>\n<h3 id="%E4%BA%8C%E7%BA%A7%E6%A0%87%E9%A2%982">二级标题2<a class="anchor" href="#%E4%BA%8C%E7%BA%A7%E6%A0%87%E9%A2%982">§</a></h3>\n<h2 id="%E4%BB%8B%E7%BB%8D2">介绍2<a class="anchor" href="#%E4%BB%8B%E7%BB%8D2">§</a></h2>\n<h2 id="%E4%BB%8B%E7%BB%8D3">介绍3<a class="anchor" href="#%E4%BB%8B%E7%BB%8D3">§</a></h2>'
        } }),
    'head': null,
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "\u57FA\u672C\u4ECB\u7ECD"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h2 id="%E4%BB%8B%E7%BB%8D1">介绍1<a class="anchor" href="#%E4%BB%8B%E7%BB%8D1">§</a></h2>\n<h3 id="%E4%BA%8C%E7%BA%A7%E6%A0%87%E9%A2%981">二级标题1<a class="anchor" href="#%E4%BA%8C%E7%BA%A7%E6%A0%87%E9%A2%981">§</a></h3>\n<h3 id="%E4%BA%8C%E7%BA%A7%E6%A0%87%E9%A2%982">二级标题2<a class="anchor" href="#%E4%BA%8C%E7%BA%A7%E6%A0%87%E9%A2%982">§</a></h3>\n<h2 id="%E4%BB%8B%E7%BB%8D2">介绍2<a class="anchor" href="#%E4%BB%8B%E7%BB%8D2">§</a></h2>\n<h2 id="%E4%BB%8B%E7%BB%8D3">介绍3<a class="anchor" href="#%E4%BB%8B%E7%BB%8D3">§</a></h2>'
        } }),
    'toc': React.createElement("nav", { key: "0", className: "toc" },
        React.createElement("ol", null,
            React.createElement("li", null,
                React.createElement("a", { href: "#%E4%BB%8B%E7%BB%8D1" }, "\u4ECB\u7ECD1"),
                React.createElement("ol", null,
                    React.createElement("li", null,
                        React.createElement("a", { href: "#%E4%BA%8C%E7%BA%A7%E6%A0%87%E9%A2%981" }, "\u4E8C\u7EA7\u6807\u98981")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#%E4%BA%8C%E7%BA%A7%E6%A0%87%E9%A2%982" }, "\u4E8C\u7EA7\u6807\u98982")))),
            React.createElement("li", null,
                React.createElement("a", { href: "#%E4%BB%8B%E7%BB%8D2" }, "\u4ECB\u7ECD2")),
            React.createElement("li", null,
                React.createElement("a", { href: "#%E4%BB%8B%E7%BB%8D3" }, "\u4ECB\u7ECD3")))),
    'author': undefined,
    'contributors': [],
    'date': "2021-08-03T07:15:47.062Z",
    'updated': null,
    'excerpt': "介绍1 二级标题1 二级标题2 介绍2 介绍3",
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
