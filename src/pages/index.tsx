import {
  graphql,
  useStaticQuery,
  type HeadFC,
  type PageProps,
  navigate,
} from "gatsby"
import { getImage, GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"
import * as React from "react"
import DefaultLayout from "../components/default-layout"
import HeroMain from "../components/hero-main"
import { ImageData } from "../types"
import * as T from "../components/typography"
import * as SBlog from "../components/blog-list/styled"
import ButtonLink from "../components/button-link"
import { fromBodyRawToExcerpt } from "../helpers"

const content = {
  quote:
    "“Il Creato non è una proprietà di cui possiamo spadroneggiare a nostro piacimento; né, tanto meno, è una proprietà solo di alcuni, di pochi: il Creato è un dono, un dono meraviglioso che Dio ci ha dato perché ne abbiamo cura e lo utilizziamo a beneficio di tutti, sempre con grande rispetto e gratitudine.”",
  signature: "Papa Francesco",
}

const IndexPage: React.FC<PageProps> = () => {
  // Aggiungiamo allSanityPost alla query per pescare gli ultimi 3 articoli
  const data = useStaticQuery(graphql`
    query {
      allImageMetadataJson(filter: { tags: { in: ["main"] } }) {
        nodes {
          title
          description
          fileName
          tags
          copyright
          alt
        }
      }
      allFile(filter: { sourceInstanceName: { eq: "images" } }) {
        nodes {
          base
          childImageSharp {
            gatsbyImageData(
              width: 1050
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
      allSanityPost(sort: { publishedAt: DESC }, limit: 3) {
        nodes {
          title
          publishedAt
          _rawBody
          slug {
            current
          }
          image {
            asset {
              altText
              gatsbyImageData(
                width: 600
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
      }
    }
  `)

  // --- Mappatura Immagine di Copertina ---
  const metadata = data.allImageMetadataJson.nodes
  const images = data.allFile.nodes
  const filteredImages = metadata.map((meta: any) => {
    const image = images.find((img: any) => img.base === meta.fileName)
    return {
      ...meta,
      image: image ? getImage(image.childImageSharp) : null,
    }
  }) as ImageData[]
  const coverImage = filteredImages.find(
    img => img.fileName === "Fioritura02.jpg",
  )

  const latestPosts = data.allSanityPost.nodes.map((post: any) => ({
    title: post.title,
    slug: post.slug.current,
    publishedAt: post.publishedAt,
    excerpt: fromBodyRawToExcerpt(post._rawBody),
    image: post.image?.asset?.gatsbyImageData as IGatsbyImageData,
    alt: post.image?.asset?.altText || "Copertina articolo",
  }))

  const latestPostNode = data.allSanityPost.nodes[0]
  const latestPost = latestPostNode
    ? { title: latestPostNode.title, slug: latestPostNode.slug.current }
    : null

  return (
    <DefaultLayout>
      {/* 1. L'IMPATTO EMOTIVO (Intoccato) */}
      {coverImage && (
        <HeroMain content={content} img={coverImage} latestPost={latestPost} />
      )}

      {/* 2. LA SEZIONE NOVITÀ (Sotto la Hero) */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "3rem 1.5rem" }}>
        <T.H1
          $font="Caveat"
          $textAlign="center"
          style={{ marginBottom: "3rem" }}
        >
          Racconti e Novità
        </T.H1>

        <SBlog.Grid>
          {latestPosts.map((post: any) => (
            <SBlog.Card
              key={post.slug}
              onClick={() => navigate(`${post.slug}`)}
            >
              <SBlog.CoverImgWrapper $isFeatured={false}>
                {post.image && (
                  <GatsbyImage image={post.image} alt={post.alt} />
                )}
              </SBlog.CoverImgWrapper>
              <SBlog.CardContent>
                <SBlog.CardTitle>{post.title}</SBlog.CardTitle>
                <SBlog.MetaInfo>
                  {new Date(post.publishedAt).toLocaleDateString("it-IT", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </SBlog.MetaInfo>
                <SBlog.CardExcerpt>{post.excerpt}</SBlog.CardExcerpt>
              </SBlog.CardContent>
            </SBlog.Card>
          ))}
        </SBlog.Grid>

        <div style={{ marginTop: "2rem" }}>
          <ButtonLink to="/blog" label="Vai al Blog →" />
        </div>
      </div>
    </DefaultLayout>
  )
}

export default IndexPage

import { SEO } from "../components/seo"
export const Head: HeadFC = ({ location }) => (
  <SEO title="Gruppo Natura Lentiai" pathname={location.pathname} />
)
