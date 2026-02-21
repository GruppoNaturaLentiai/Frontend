import React, { useState, useRef } from "react"
import { IGatsbyImageData, GatsbyImage } from "gatsby-plugin-image"
import * as S from "./styled"
import * as T from "../typography"
import { navigate } from "gatsby"

// Props injected during build time
export type PostInfo = {
  slug: string
  title: string
  publishedAt: string
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

const getImage = (post: PostInfo) => {
  if (post.coverImage.gatsbyImage) {
    return (
      <GatsbyImage
        image={post.coverImage.gatsbyImage as IGatsbyImageData}
        alt={post.coverImage.altText ?? "Cover image"}
      />
    )
  } else if (post.coverImage.renderImageUrl) {
    return (
      <img
        className="cover-image"
        src={post.coverImage.renderImageUrl}
        alt={post.coverImage.altText ?? "Cover image"}
      />
    )
  }
  return null
}

export const FeaturedBlog: React.FC<BlogListProps> = ({ posts }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const gridRef = useRef<HTMLDivElement>(null)

  // Quanti post mostrare nella griglia per ogni pagina
  const POSTS_PER_PAGE = 6

  if (!posts || posts.length === 0) {
    return <T.P2 style={{ textAlign: "center", marginTop: "2rem" }}>Nessun articolo pubblicato al momento.</T.P2>
  }

  // Ordina per data decrescente
  const sorted = [...posts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  )

  // Il primo è sempre il featured post, gli altri finiscono nella griglia
  const [featured, ...others] = sorted

  // Calcoli per la paginazione
  const totalPages = Math.ceil(others.length / POSTS_PER_PAGE)
  const currentPosts = others.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  )

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    // Scrolla dolcemente verso l'alto (sotto al post in evidenza) quando si cambia pagina
    if (gridRef.current) {
      const yOffset = gridRef.current.getBoundingClientRect().top + window.scrollY - 100
      window.scrollTo({ top: yOffset, behavior: "smooth" })
    }
  }

  return (
    <S.Container>
      {/* Featured Post (Sempre visibile e sempre in cima) */}
      <S.FeaturedPostWrapper onClick={() => navigate(`${featured.slug}`)}>
        <S.CoverImgWrapper $isFeatured={true}>
          {getImage(featured)}
        </S.CoverImgWrapper>
        <S.FeaturedContent>
          <T.P4 style={{ color: "#FE4A49", fontWeight: "bold", marginBottom: "0.5rem" }}>ULTIMO ARTICOLO</T.P4>
          <S.FeaturedTitle>{featured.title}</S.FeaturedTitle>
          <S.MetaInfo>
            {new Date(featured.publishedAt).toLocaleDateString("it-IT", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}{" "}
            • {featured.author}
          </S.MetaInfo>
          <T.P2>{featured.excerpt}</T.P2>
        </S.FeaturedContent>
      </S.FeaturedPostWrapper>

      {/* Griglia post successivi paginata */}
      <div ref={gridRef}>
        <S.Grid>
          {currentPosts.map(post => (
            <S.Card key={post.slug} onClick={() => navigate(`${post.slug}`)}>
              <S.CoverImgWrapper $isFeatured={false}>
                {getImage(post)}
              </S.CoverImgWrapper>
              <S.CardContent>
                <S.CardTitle>{post.title}</S.CardTitle>
                <S.MetaInfo>
                  {new Date(post.publishedAt).toLocaleDateString("it-IT", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </S.MetaInfo>
                <S.CardExcerpt>{post.excerpt}</S.CardExcerpt>
              </S.CardContent>
            </S.Card>
          ))}
        </S.Grid>
      </div>

      {/* Controlli Paginazione */}
      {totalPages > 1 && (
        <S.PaginationWrapper>
          <S.PageButton
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            aria-label="Pagina precedente"
          >
            &#8592;
          </S.PageButton>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
            <S.PageButton
              key={page}
              $active={currentPage === page}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </S.PageButton>
          ))}

          <S.PageButton
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            aria-label="Pagina successiva"
          >
            &#8594;
          </S.PageButton>
        </S.PaginationWrapper>
      )}
    </S.Container>
  )
}