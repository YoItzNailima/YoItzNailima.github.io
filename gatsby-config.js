module.exports = {
  siteMetadata: {
    title: `Nailima's World`,
    name: `Nailima`,
    siteUrl: `https://ItzNailima.github.io/`,
    description: `A place for me to document all my projects`,
    hero: {
      heading: `A home for my projects`,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitch`,
        url: `https://twitch.tv/ItzNailima`,
      },
      {
        name: `github`,
        url: `https://github.com/ItzNailima`,
      },
      {
        name: `youtube`,
        url: `https://www.youtube.com/user/spider6516`,
      },
      {
        name: `twitter`,
        url: `https://twitter.com/ItzNailima`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Novela by Narative`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
      },
    },
  ],
};