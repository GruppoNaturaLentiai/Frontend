import {
  PortableTextComponentProps,
  PortableTextMarkComponentProps,
  PortableTextReactComponents,
} from "@portabletext/react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"

const Components: PortableTextReactComponents = {
  types: {
    image: ({ value }: { value: any }) => {
      if (!value.asset) return null

      // When build time we are provided with GatsbyImageData
      if (value.asset.gatsbyImageData) {
        return (
          <GatsbyImage
            image={getImage(value.asset.gatsbyImageData)!}
            alt={value.alt || "Content image"}
            style={{ maxWidth: "100%", height: "auto" }}
          />
        )
      }

      // If we are loading something at runtime, we need to use the URL
      // since sanity does not provide GatsbyImageData at runtime
      if (value.asset.url) {
        return (
          <img
            src={value.asset.url}
            alt={value.alt || "Content image"}
            style={{ maxWidth: "100%", height: "auto" }}
          />
        )
      }

      return null
    },
  },
  block: {
    normal: ({ children }) => (
      <p style={{ lineHeight: "1.6", margin: "1em 0" }}>{children}</p>
    ),
  },
  marks: {
    link: ({ value, children }: PortableTextMarkComponentProps<any>) => {
      const { href } = value
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "blue" }}
        >
          {children}
        </a>
      )
    },
  },
  list: {
    bullet: ({ children }: PortableTextComponentProps<any>) => (
      <ul>{children}</ul>
    ),
    number: ({ children }: PortableTextComponentProps<any>) => (
      <ol>{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }: PortableTextComponentProps<any>) => (
      <li>{children}</li>
    ),
    number: ({ children }: PortableTextComponentProps<any>) => (
      <li>{children}</li>
    ),
  },
  hardBreak: () => <br />,
  unknownMark: ({ children }: PortableTextMarkComponentProps<any>) => (
    <span style={{ backgroundColor: "yellow" }}>{children}</span>
  ),
  unknownType: ({ value }: { value: any }) => (
    <div style={{ border: "1px solid red", padding: "10px" }}>
      Unknown type: {JSON.stringify(value)}
    </div>
  ),
  unknownBlockStyle: ({ children }: PortableTextComponentProps<any>) => (
    <div style={{ fontStyle: "italic", color: "gray" }}>{children}</div>
  ),
  unknownList: ({ children }: PortableTextComponentProps<any>) => (
    <ul style={{ listStyle: "square" }}>{children}</ul>
  ),
  unknownListItem: ({ children }: PortableTextComponentProps<any>) => (
    <li style={{ color: "red" }}>{children}</li>
  ),
}

export default Components
