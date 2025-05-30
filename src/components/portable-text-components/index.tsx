import {
  PortableTextComponentProps,
  PortableTextMarkComponentProps,
  PortableTextReactComponents,
} from "@portabletext/react"
import React from "react"
import { getSanityImageUrl } from "../../helpers"
import * as S from "./styled"
import * as T from "../typography"

const InlineText = ({ children }: { children: React.ReactNode }) => (
  <T.P1 as="span" style={{ display: "inline", margin: 0, lineHeight: "2em" }}>
    {children}
  </T.P1>
)

const Components: PortableTextReactComponents = {
  types: {
    image: ({ value }: { value: any }) => {
      if (!value.asset || !value.asset._ref) return null

      const imageUrl = getSanityImageUrl(value.asset._ref)
      if (!imageUrl) return null

      return (
        <S.ImageWrapper $position={value.position ?? "center"}>
          <S.ResponsiveImg
            src={imageUrl}
            alt={value.textAlt || "Content image"}
            style={{
              height: "auto",
              display: "block",
              margin: "1em 0",
            }}
          />
          {value.undertext && (
            <S.ImgDescription>{value.undertext}</S.ImgDescription>
          )}
        </S.ImageWrapper>
      )
    },
  },
  block: {
    normal: ({ children }) => (
      <T.P1 style={{ lineHeight: "1.6", margin: "1em 0" }}>{children}</T.P1>
    ),
    h1: ({ children }) => (
      <T.H1 style={{ margin: "1.2em 0 0.6em" }}>{children}</T.H1>
    ),
    h2: ({ children }) => (
      <T.H2 style={{ margin: "1.2em 0 0.6em" }}>{children}</T.H2>
    ),
    h3: ({ children }) => (
      <T.H3 style={{ margin: "1.2em 0 0.6em" }}>{children}</T.H3>
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
    bullet: ({ children }) => (
      <li>
        <InlineText>{children}</InlineText>
      </li>
    ),
    number: ({ children }) => (
      <li>
        <InlineText>{children}</InlineText>
      </li>
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
