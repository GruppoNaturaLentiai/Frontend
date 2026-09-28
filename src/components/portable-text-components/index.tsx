import {
  PortableTextComponentProps,
  PortableTextMarkComponentProps,
  PortableTextReactComponents,
} from "@portabletext/react"
import React, { useState } from "react"
import { getSanityImageUrl, getYouTubeId } from "../../helpers"
import * as S from "./styled"
import * as T from "../typography"

const InlineText = ({ children }: { children: React.ReactNode }) => (
  <T.P1 as="span" style={{ display: "inline", margin: 0, lineHeight: "2em" }}>
    {children}
  </T.P1>
)

// Carica l'iframe di YouTube solo al click: prima solo la miniatura statica (i.ytimg.com, senza cookie)
const YouTubeEmbed = ({ id, title }: { id: string; title: string }) => {
  const [playing, setPlaying] = useState(false)

  return (
    <S.VideoFrame>
      {playing ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&playsinline=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <S.VideoPoster
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={`Riproduci il video: ${title}`}
        >
          <img
            src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
            alt=""
            loading="lazy"
          />
          <S.PlayIcon />
        </S.VideoPoster>
      )}
    </S.VideoFrame>
  )
}

const Components: PortableTextReactComponents = {
  types: {
    youtube: ({ value }: { value: any }) => {
      const id = getYouTubeId(value.url)
      if (!id) return null

      return (
        <S.VideoWrapper>
          <YouTubeEmbed id={id} title={value.undertext || "Video YouTube"} />
          {value.undertext && (
            <S.ImgDescription as="figcaption">
              {value.undertext}
            </S.ImgDescription>
          )}
        </S.VideoWrapper>
      )
    },
    image: ({ value }: { value: any }) => {
      if (!value.asset || !value.asset._ref) return null

      const imageUrl = getSanityImageUrl(value.asset._ref)
      if (!imageUrl) return null

      return (
        <S.ImageWrapper
          className="portable-image"
          $position={value.position ?? "center"}
        >
          <S.ResponsiveImg
            src={imageUrl}
            alt={value.textAlt || "Content image"}
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
