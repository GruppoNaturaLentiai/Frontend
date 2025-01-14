import {
  PortableTextComponentProps,
  PortableTextMarkComponentProps,
  PortableTextReactComponents,
} from "@portabletext/react"
import React from "react"
import { getSanityImageUrl } from "../../helpers"
import * as S from "./styled"
import * as T from "../typography"

const Components: PortableTextReactComponents = {
  types: {
    image: ({ value }: { value: any }) => {
      if (!value.asset || !value.asset._ref) return null

      const imageUrl = getSanityImageUrl(value.asset._ref)
      if (!imageUrl) return null

      return (
        <S.ImageWrapper position={value.position}>
          <div>
            <img
              src={imageUrl}
              alt={value.textAlt || "Content image"}
            />
            {value.undertext && <S.ImgDescription>{value.undertext}</S.ImgDescription>}
          </div>
        </S.ImageWrapper>
      )
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
