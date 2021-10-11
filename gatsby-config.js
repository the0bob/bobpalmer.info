module.exports = {
  siteMetadata: {
    title: `Bob Palmer`,
    description: `Software Developer from a small town in Kansas. I make widgets, apis, games, and whatever else the bills paid or holds my interest. I like to make the bleep bloop box do things with less clicks, tell the user they did good, then give them a treat like a sound or animation or something in exchange for their sweet, sweet data. I also evaluate all of the components of the application concept and classify them by their importance, allocating resources and time based on the 80/20 principle on both the front end and back end to deliver the most optimized product possible using said allocated resources. Or something. I'm currently sharpening my JavaScript, C#, Java, Unity, React, SpringBoot, Bootstrap, UX, UI, Postgres, SQL, Graphic Design, Project Management, and other skills on a semi-daily basis because I like getting good at things. Keep It Simple, Stupid. I have ADHD and I don't medicate, so I just kinda... ride that wave and see where it takes me. If you're not cool with that, let's not do business.`,
    author: `the0bob`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-fontawesome-css`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `bobpalmer-info`,
        short_name: `playitec`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon/bob-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
