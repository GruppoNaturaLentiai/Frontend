import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"
import React from "react"
import * as T from "../typography"
import { PortableText } from "@portabletext/react"
import Components from "../portable-text-components"
import * as S from "./styled"

interface PostProps {
  renderTitle: string
  renderPublishedAt: string
  gatsbyImage?: IGatsbyImageData
  renderImageUrl?: string
  renderBody: any
  author: string
  coverImageAlt: string
}

const Post: React.FC<PostProps> = ({
  renderTitle,
  renderPublishedAt,
  gatsbyImage,
  renderImageUrl,
  renderBody,
  author,
  coverImageAlt,
}) => {
  return (
    <S.Article>
      <T.H1>{renderTitle}</T.H1>
      <S.AuthorDateWrapper>
        {author && (
          <T.P3>
            Di <span style={{ fontWeight: "bold" }}>{author}</span>
          </T.P3>
        )}
        <T.P3>{" | "}</T.P3>
        {renderPublishedAt && (
          <T.P3>
            {new Date(renderPublishedAt).toLocaleDateString("it-IT", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </T.P3>
        )}
      </S.AuthorDateWrapper>
      <S.CoverImageWrp>
        {gatsbyImage && <GatsbyImage image={gatsbyImage} alt={coverImageAlt} />}
        {!gatsbyImage && renderImageUrl && (
          <img
            src={renderImageUrl}
            alt={coverImageAlt}
            style={{ maxWidth: "100%", height: "auto", objectFit: "cover" }}
          />
        )}
      </S.CoverImageWrp>
      <PortableText value={renderBody} components={Components} />
    </S.Article>
  )
}

export default Post
