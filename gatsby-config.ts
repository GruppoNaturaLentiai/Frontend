import type { GatsbyConfig } from "gatsby"

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const config: GatsbyConfig = {
  // pathPrefix: pathPrefix, // restore if we want to use the old https://grupponaturalentiai.github.io/Frontend
  siteMetadata: {
    title: `site-gruppo-natura-lentiai`,
    description: `Sito ufficiale del Gruppo Natura Lentiai. Associazione di volontariato per la tutela e la valorizzazione dei Laghetti della Rimonta, dei narcisi e del territorio.`,
    siteUrl: `https://grupponaturalentiai.it`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "ze02ljgl",
        dataset: "post-blog",
        useCdn: false,
        watchMode: process.env.LOCAL === "true",
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-styled-components",
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
        resolveSiteUrl: () => `https://grupponaturalentiai.it`,
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/icons/LogoFavicon.svg",
        // start_url: `/Frontend/`,  // old https://grupponaturalentiai.github.io/Frontend
        cache_busting_mode: "none",
        start_url: "/",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`, // General name for JSON data
        path: `${__dirname}/src/data/`, // Path to folder containing JSON files
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`, // For image files
        path: `${__dirname}/src/images/`, // Path to folder containing images
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `logos`,
        path: `${__dirname}/src/logos/`,
      },
    },
    `gatsby-transformer-json`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-svgr`,
      options: {
        svgo: true,
        svgoConfig: {
          plugins: [
            { name: "removeViewBox", active: false },
            { name: "removeDimensions", active: true },
          ],
        },
        prettier: true,
        titleProp: true,
      },
    },
    {
      resolve: "gatsby-plugin-react-leaflet",
      options: {
        linkStyles: true,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Funnel Sans:ital,wght@0,300..800;1,300..800`, // Funnel Sans
          `Condiment`, // Condiment
          `Caveat:wght@400..700`, // Caveat
          `Cedarville Cursive`, // Cedarville Cursive
        ],
        display: "swap", // improves loading performance
      },
    },
  ],
}

export default config
