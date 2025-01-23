import type { GatsbyConfig } from "gatsby"
import { pathPrefix } from "./src/constants"

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const config: GatsbyConfig = {
  pathPrefix: pathPrefix,
  siteMetadata: {
    title: `site-gruppo-natura-lentiai`,
    siteUrl: `https://www.yourdomain.tld`,
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
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/icons/LogoFavicon.svg",
        start_url: `/Frontend/`,
        cache_busting_mode: "none",
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
        linkStyles: true, // (default: true) Enable/disable loading stylesheets via CDN
      },
    },
  ],
}

export default config
