import React, { useState, useRef, useEffect } from "react"
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
  isFromPost?: boolean
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

export const FeaturedBlog: React.FC<BlogListProps> = ({ posts, isFromPost }) => {
  // Inizializziamo a 1 di default
  const [currentPage, setCurrentPage] = useState(1)
  const gridRef = useRef<HTMLDivElement>(null)

  // Quando il componente viene montato, controlla se c'è una pagina salvata in memoria
  useEffect(() => {
    if (isFromPost) {
      // Se arriviamo da un post, ripristiniamo la pagina salvata
      const savedPage = sessionStorage.getItem("gnl-blog-page")
      if (savedPage) {
        setCurrentPage(parseInt(savedPage, 10))
      }
    } else {
      // Se arriviamo da qualsiasi altra parte (es. Menu), resettiamo a 1 e puliamo la memoria
      sessionStorage.removeItem("gnl-blog-page")
      setCurrentPage(1)
    }
  }, [isFromPost])

  const POSTS_PER_PAGE = 6

  if (!posts || posts.length === 0) {
    return <T.P2 style={{ textAlign: "center", marginTop: "2rem" }}>Nessun articolo pubblicato al momento.</T.P2>
  }

  const sorted = [...posts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  )

  const [featured, ...others] = sorted
  const totalPages = Math.ceil(others.length / POSTS_PER_PAGE)
  const currentPosts = others.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  )

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    // SALVA LA PAGINA IN MEMORIA!
    if (typeof window !== "undefined") {
      sessionStorage.setItem("gnl-blog-page", page.toString())
    }

    if (gridRef.current) {
      const yOffset = gridRef.current.getBoundingClientRect().top + window.scrollY - 100
      window.scrollTo({ top: yOffset, behavior: "smooth" })
    }
  }

  // --- LOGICA SMART PAGINATION ---
  const getVisiblePages = (current: number, total: number) => {
    // Se ci sono 5 pagine o meno, mostrale tutte
    if (total <= 5) return Array(total).fill(0).map((_, i) => i + 1)
    // Se siamo all'inizio, mostra le prime 5
    if (current <= 3) return [1, 2, 3, 4, 5]
    // Se siamo alla fine, mostra le ultime 5
    if (current >= total - 2) return [total - 4, total - 3, total - 2, total - 1, total]
    // Altrimenti, mostra la pagina corrente al centro con 2 prima e 2 dopo
    return [current - 2, current - 1, current, current + 1, current + 2]
  }

  const visiblePages = getVisiblePages(currentPage, totalPages)

  return (
    <S.Container>
      {/* Mostra il post in evidenza SOLO nella prima pagina */}
      {currentPage === 1 && (
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
      )}

      {/* Griglia post successivi paginata */}
      <div ref={gridRef}>
        <S.Grid>
          {currentPosts.map(post => (
            <S.Card key={post.slug} onClick={() => navigate(`${post.slug}`)}>
              {/* ... (Lascia intatto il contenuto della Card) ... */}
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

      {/* Controlli Paginazione aggiornati */}
      {totalPages > 1 && (
        <S.PaginationWrapper>

          {/* 1. Vai alla PRIMA pagina (nascosto su mobile) */}
          <S.PageButton
            className="desktop-only"
            onClick={() => handlePageChange(1)}
            disabled={currentPage === 1}
            aria-label="Prima pagina"
          >
            «
          </S.PageButton>

          {/* 2. Pagina Precedente */}
          <S.PageButton
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            aria-label="Pagina precedente"
          >
            ←
          </S.PageButton>

          {/* 3. Finestra Scorrevole dei Numeri (visibile solo su desktop) */}
          <S.PageNumbers>
            {visiblePages.map(page => (
              <S.PageButton
                key={page}
                $active={currentPage === page}
                onClick={() => handlePageChange(page)}
              >
                {page}
              </S.PageButton>
            ))}
          </S.PageNumbers>

          {/* 4. L'indicatore Testuale (visibile SOLO su mobile) */}
          <S.MobilePageIndicator>
            Pagina {currentPage} di {totalPages}
          </S.MobilePageIndicator>

          {/* 5. Pagina Successiva */}
          <S.PageButton
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            aria-label="Pagina successiva"
          >
            →
          </S.PageButton>

          {/* 6. Vai all'ULTIMA pagina (nascosto su mobile) */}
          <S.PageButton
            className="desktop-only"
            onClick={() => handlePageChange(totalPages)}
            disabled={currentPage === totalPages}
            aria-label="Ultima pagina"
          >
            »
          </S.PageButton>

        </S.PaginationWrapper>
      )}
    </S.Container>
  )
}