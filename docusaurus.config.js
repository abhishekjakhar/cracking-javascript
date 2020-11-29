module.exports = {
  title: "Cracking JavaScript",
  tagline: "The ultimate resource to prepare for JavaScript Interviews",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "abhishekjakhar",
  projectName: "cracking-javascript",
  themeConfig: {
    prism: {
      defaultLanguage: 'javascript',
      theme: require('prism-react-renderer/themes/nightOwl'),
      darkTheme: require('prism-react-renderer/themes/nightOwl'),
    },
    navbar: {
      title: "Cracking JavaScript",
      items: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Questions",
          position: "left",
        },
        {
          href: "https://github.com/abhishekjakhar/cracking-javascript",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      copyright: `Copyright © ${new Date().getFullYear()} Cracking JavaScript`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
