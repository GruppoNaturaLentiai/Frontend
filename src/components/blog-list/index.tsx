import React from "react";
import { IGatsbyImageData, GatsbyImage, getImage } from "gatsby-plugin-image";
import * as S from "./styled";

// Props injected during build time
export type PostInfo = {
  slug: string;
  title: string;
  publishedAt: string; // ISO date string
  author: string;
  excerpt: string;
  coverImage: {
    description?: string;
    altText: string;
    title?: string;
    gatsbyImage?: IGatsbyImageData | null;
  };
};

interface BlogListProps {
  posts: PostInfo[];
}

export const FeaturedBlog: React.FC<BlogListProps> = ({ posts }) => {
  if (!posts || posts.length === 0) {
    return <p>No posts available.</p>;
  }

  // Ordina per data decrescente
  const sorted = [...posts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  // Il primo è il featured post
  const [featured, ...others] = sorted;

  console.log(featured.coverImage)
  // Estrai immagini Gatsby
  const featuredImage = featured.coverImage.gatsbyImage
    ? getImage(featured.coverImage.gatsbyImage)
    : null;

  return (
    <S.Container>
      {/* Featured Post */}
      <S.FeaturedPostWrapper>
        {featuredImage && (
          <GatsbyImage
            image={featuredImage}
            alt={featured.coverImage.altText}
            style={{ width: '100%', height: 'auto' }}
          />
        )}
        <S.FeaturedContent>
          <S.FeaturedTitle>{featured.title}</S.FeaturedTitle>
          <S.MetaInfo>
            {new Date(featured.publishedAt).toLocaleDateString()} • {featured.author}
          </S.MetaInfo>
          <p>{featured.excerpt}</p>
        </S.FeaturedContent>
      </S.FeaturedPostWrapper>

      {/* Griglia post successivi */}
      <S.Grid>
        {others.map((post) => {
          const imageData = post.coverImage.gatsbyImage ? getImage(post.coverImage.gatsbyImage) : null;
          return (
            <S.Card key={post.slug}>
              {imageData && (
                <GatsbyImage
                  image={imageData}
                  alt={post.coverImage.altText}
                  style={{ width: '100%', height: 160 }}
                />
              )}
              <S.CardContent>
                <S.CardTitle>{post.title}</S.CardTitle>
                <S.MetaInfo>
                  {new Date(post.publishedAt).toLocaleDateString()} • {post.author}
                </S.MetaInfo>
                <S.CardExcerpt>{post.excerpt}</S.CardExcerpt>
              </S.CardContent>
            </S.Card>
          )
        })}
      </S.Grid>
    </S.Container>
  );
};
