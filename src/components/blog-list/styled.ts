import styled from "styled-components"
import { colors } from "../../styles"
import * as T from "../typography"

// Styled components
export const Container = styled.div`
  margin-top: 2rem;
  padding: 2rem;
  padding-top: 3rem;
  max-width: 1000px;
  margin: 0 auto;
`

export const FeaturedPostWrapper = styled.article`
  margin-bottom: 3rem;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px ${colors.green.green600}66;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 16px ${colors.green.green700}66;
  }
  .gatsby-image-wrapper img {
    width: 33%;
    justify-self: center;
  }
  .cover-image {
    width: 33%;
  }
`

export const CoverImgWrapper = styled.div`
  text-align: center;
`

export const FeaturedContent = styled.div`
  padding: 1.5rem;
  background: #fff;
`

export const FeaturedTitle = styled(T.H2)`
  margin: 0 0 0.5rem;
`

export const MetaInfo = styled(T.P3)`
  color: ${colors.green.green600};
  margin-bottom: 1rem;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
`

export const Card = styled.article`
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px ${colors.green.green600}66;
  background: #fff;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 16px ${colors.green.green700}66;
  }
`

export const CardImage = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
`

export const CardContent = styled.div`
  padding: 1rem;
  flex: 1;
`

export const CardTitle = styled(T.H3)`
  margin: 0 0 0.5rem;
`

export const CardExcerpt = styled(T.P3)`
  margin: 0 0 1rem;
`
