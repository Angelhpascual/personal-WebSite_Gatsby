/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    firstName: `Angel`,
    lastName: `hpascual`,
    title: `Angel HPascual`,
    author: `Angelhpascual`,
    description: `angelhpascual's personal site`,
    occupation: `Web Developer`,
    keywords: [
      `angel`,
      `hpascual`,
      `Personal`,
      `Blog`,
      `Resume`,
      `Projects`,
      `Work`,
      `Github`,
      `LinkedIn`,
    ],
    siteUrl:
      process.env.URL || process.env.DEPLOY_URL || `http://localhost:8000`,
    unemployed: true,
    designations: [
      `Web Developer`,
      `React Lover`,
      `Code Jawa`,
      `Jedi Master`,
      
    ],
    institutions: [
      {
        company: `Cristo Rey`,
        link: `http://www.cescristorey.com/`,
        position: `Multiplatform Apps Developer`,
        startDate: `September, 2016`,
        endDate: `September 2018`,
        slug: `cristoRey`,
      },
      {
        company: `Gaming Academy`,
        link: `https://spanishgamingacademy.com/`,
        position: `Operations and Marketing`,
        startDate: `August, 2020`,
        endDate: `In progress`,
        slug: `spanishgamingacademy`,
      },
      
    ],
    readingList: [
      {
        title: `The Invisible Fire`,
        author: `Javier Sierra`,
        link: `https://www.amazon.es/fuego-invisible-Biblioteca-Javier-Sierra/dp/8408208063`,
      },
      {
        title: `On Strange Tides`,
        author: `Tim Powers`,
        link: `https://www.amazon.es/Stranger-Tides-Tim-Powers/dp/006209453X`,
      },
      {
        title: `Moby Dick`,
        author: `Herman Melville`,
        link: `https://es.wikipedia.org/wiki/Moby-Dick`,
      },
      
    ],
    showsList: [
      {
        title: `Game of Thrones`,
        author: `Lars Von Trier`,
        link: `https://es.wikipedia.org/wiki/Game_of_Thrones`,
      },
      {
        title: `Utopia`,
        author: `Dennis Kelly`,
        link: `https://es.wikipedia.org/wiki/Utopia_(serie_de_televisi%C3%B3n)`,
      },
      {
        title: `Star Wars: The Clone Wars`,
        author: `George Lucas, Dave Filoni`,
        link: `https://www.imdb.com/title/tt0458290/`,
      },
      
    ],
    moviesList: [
      {
        title: `Ex Machina`,
        author: `Alex Garland`,
        link: `https://www.imdb.com/title/tt0470752/`,
      },
      {
        title: `The Lunchbox`,
        author: `Ritesh Batra`,
        link: `https://www.imdb.com/title/tt2350496/`,
      },
      {
        title: `Nightcrawler`,
        author: `Dan Gilroy`,
        link: `https://www.imdb.com/title/tt2872718/`,
      },
      {
        title: `Mad Max: Fury Road`,
        author: `George Miller`,
        link: `https://www.imdb.com/title/tt1392190/`,
      },
    ],
  },
  plugins: [
    `gatsby-plugin-preload-link-crossorigin`,
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        excerpt_separator: `<!-- end -->`,
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `angelhpascual's Personal Site`,
        short_name: `angelhpascual`,
        description: `This is my personal site.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `${__dirname}/static/falcon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: ["Raleway:300,400"],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `tomato`,
        showSpinner: true,
      },
    },
  ],
}
