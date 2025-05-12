import styled from "styled-components"
import { colors } from "../../styles"

// Styled components
export const Container = styled.div`
  padding: 2rem;
  max-width: 800px;
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
`

export const FeaturedImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`

export const FeaturedContent = styled.div`
  padding: 1.5rem;
  background: #fff;
`

export const FeaturedTitle = styled.h2`
  margin: 0 0 0.5rem;
  font-size: 2rem;
`

export const MetaInfo = styled.div`
  font-size: 0.9rem;
  color: #666;
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

export const CardTitle = styled.h3`
  margin: 0 0 0.5rem;
  font-size: 1.25rem;
`

export const CardExcerpt = styled.p`
  margin: 0 0 1rem;
  font-size: 0.95rem;
  color: #444;
`
