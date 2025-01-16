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
        icon: "src/images/icons/LogoFavicon.svg",
        start_url: `/Frontend/`,
        cache_busting_mode: "none",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `imageMetadata`,
        path: `${__dirname}/src/data/`, // For JSON or Markdown metadata
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
            { name: "removeViewBox", active: false }, // Ensure "name" is explicitly specified
            { name: "removeDimensions", active: true }, // Example: Enable specific optimizations
          ],
        },
        prettier: true,
        titleProp: true,
      },
    },
  ],
}

export default config