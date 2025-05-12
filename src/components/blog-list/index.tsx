import React from "react"
import { IGatsbyImageData, GatsbyImage } from "gatsby-plugin-image"
import * as S from "./styled"
import * as T from "../typography"
import { navigate } from "gatsby"

// Props injected during build time
export type PostInfo = {
  slug: string
  title: string
  publishedAt: string // ISO date string
  author: string
  excerpt: string
  coverImage: {
    description?: string
    altText: string
    title?: string
    gatsbyImage?: IGatsbyImageData | null
    renderImageUrl?: string
  }
}

interface BlogListProps {
  posts: PostInfo[]
}

const getImage = (post: any) => {
  let image = null
  if (post.coverImage.gatsbyImage) {
    image = (
      <GatsbyImage
        image={post.coverImage.gatsbyImage as IGatsbyImageData}
        alt={post.coverImage.altText ?? ""}
        style={{ width: "30%", height: "auto" }}
      />
    )
  } else if (post.coverImage.renderImageUrl) {
    image = (
      <img
        className="cover-image"
        src={post.coverImage.renderImageUrl}
        alt={post.coverImage.altText ?? ""}
        style={{ height: "auto" }}
      />
    )
  }

  return image
}

export const FeaturedBlog: React.FC<BlogListProps> = ({ posts }) => {
  if (!posts || posts.length === 0) {
    return <T.P2>No posts available.</T.P2>
  }

  // Ordina per data decrescente
  const sorted = [...posts].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  )

  // Il primo è il featured post
  const [featured, ...others] = sorted

  return (
    <S.Container>
      {/* Featured Post */}
      <S.FeaturedPostWrapper onClick={() => navigate(`${featured.slug}`)}>
        <S.CoverImgWrapper>
          {getImage(featured)}
        </S.CoverImgWrapper>
        <S.FeaturedContent>
          <S.FeaturedTitle>{featured.title}</S.FeaturedTitle>
          <S.MetaInfo>
            {new Date(featured.publishedAt).toLocaleDateString("it-IT", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })} •{" "}
            {featured.author}
          </S.MetaInfo>
          <T.P3>{featured.excerpt}</T.P3>
        </S.FeaturedContent>
      </S.FeaturedPostWrapper>

      {/* Griglia post successivi */}
      <S.Grid>
        {others.map(post => {
          return (
            <S.Card key={post.slug} onClick={() => navigate(`${post.slug}`)}>
              <S.CoverImgWrapper>
                {getImage(post)}
              </S.CoverImgWrapper>
              <S.CardContent>
                <S.CardTitle>{post.title}</S.CardTitle>
                <S.MetaInfo>
                  {new Date(post.publishedAt).toLocaleDateString("it-IT", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })} •{" "}
                  {post.author}
                </S.MetaInfo>
                <S.CardExcerpt>{post.excerpt}</S.CardExcerpt>
              </S.CardContent>
            </S.Card>
          )
        })}
      </S.Grid>
    </S.Container>
  )
}
