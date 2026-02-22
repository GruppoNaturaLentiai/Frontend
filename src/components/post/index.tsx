import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"
import React from "react"
import * as T from "../typography"
import { PortableText } from "@portabletext/react"
import Components from "../portable-text-components"
import * as S from "./styled"
import { Link } from "gatsby"

interface PostProps {
  renderTitle: string
  renderPublishedAt: string
  gatsbyImage?: IGatsbyImageData
  renderImageUrl?: string
  renderBody: any
  author: string
  coverImageAlt: string
  prevPost?: { slug: string; title: string | null } | null
  nextPost?: { slug: string; title: string | null } | null
}

const Post: React.FC<PostProps> = ({
  renderTitle,
  renderPublishedAt,
  gatsbyImage,
  renderImageUrl,
  renderBody,
  author,
  coverImageAlt,
  prevPost,
  nextPost,
}) => {
  return (
    <S.Article>
      <S.BackLink to="/blog" state={{ fromPost: true }}>
        ← Torna al blog
      </S.BackLink>
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

      <S.PostNavigation>
        <S.NavSide className="left">
          {prevPost && (
            <S.NavButton $align="left">
              <Link
                to={
                  prevPost.slug.startsWith("/")
                    ? prevPost.slug
                    : `/${prevPost.slug}`
                }
              >
                <T.P4 className="nav-label">Articolo precedente</T.P4>
                <T.H4 className="nav-title">← {prevPost.title}</T.H4>
              </Link>
            </S.NavButton>
          )}
        </S.NavSide>

        <S.BackToBlogButton to="/blog" state={{ fromPost: true }}>
          <T.H5>Torna all'elenco</T.H5>
        </S.BackToBlogButton>

        <S.NavSide className="right">
          {nextPost && (
            <S.NavButton $align="right">
              <Link
                to={
                  nextPost.slug.startsWith("/")
                    ? nextPost.slug
                    : `/${nextPost.slug}`
                }
              >
                <T.P4 className="nav-label">Articolo successivo</T.P4>
                <T.H4 className="nav-title">{nextPost.title} →</T.H4>
              </Link>
            </S.NavButton>
          )}
        </S.NavSide>
      </S.PostNavigation>
    </S.Article>
  )
}

export default Post
