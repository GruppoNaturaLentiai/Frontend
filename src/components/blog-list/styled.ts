import styled from "styled-components"
import { breakpoint, breakpointNum, colors } from "../../styles"
import * as T from "../typography"

export const Container = styled.div`
  margin-top: 2rem;
  padding: 2rem;
  padding-top: 3rem;
  max-width: 1200px; 
  margin: 0 auto;
  width: 100%; 
  box-sizing: border-box; 

  @media (max-width: ${breakpointNum.mobile}px) {
    padding: 1.5rem 1rem; 
  }
`

export const FeaturedPostWrapper = styled.article`
  margin-bottom: 4rem;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px ${colors.green.green600}66;
  cursor: pointer;
  background: #fff;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: row; 
  align-items: stretch;
  
  /* Sostituisci max-height con height fisso per forzare la forma del banner su Desktop */
  height: 400px; 

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 24px ${colors.green.green700}66;
  }

  /* Spostiamo il passaggio a colonna ai 900px (bigtablet) per evitare schiacciamenti */
  @media (max-width: ${breakpoint.bigtablet}) {
    flex-direction: column; 
    height: auto; /* Sblocchiamo l'altezza in verticale per far adattare il testo */
  }
`

export const CoverImgWrapper = styled.div<{ $isFeatured?: boolean }>`
  flex: ${({ $isFeatured }) => ($isFeatured ? "1" : "none")};
  
  .gatsby-image-wrapper, .cover-image {
    width: 100%;
    /* Su desktop l'immagine prende tutta l'altezza (i 400px definiti sopra) */
    height: ${({ $isFeatured }) => ($isFeatured ? "100%" : "220px")};
    object-fit: cover;
    
    /* FIX PER TABLET/MOBILE: Quando andiamo in colonna, diamo un'altezza massima fissa all'immagine in evidenza */
    @media (max-width: ${breakpoint.bigtablet}) {
      height: ${({ $isFeatured }) => ($isFeatured ? "350px" : "220px")};
    }
    
    @media (max-width: ${breakpoint.mobile}) {
      height: ${({ $isFeatured }) => ($isFeatured ? "250px" : "200px")};
    }
  }
`

export const FeaturedContent = styled.div`
  flex: 1;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;

  @media (max-width: ${breakpoint.bigtablet}) {
    padding: 2rem;
  }

  @media (max-width: ${breakpoint.mobile}) {
    padding: 1.5rem;
  }
`

export const FeaturedTitle = styled(T.H2)`
  margin: 0 0 0.5rem;
`

export const MetaInfo = styled(T.P3)`
  color: ${colors.green.green600};
  margin-bottom: 1rem;
  font-style: italic;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2.5rem;

  @media (max-width: ${breakpointNum.mobile}px) {
    grid-template-columns: 1fr; /* Forza una singola colonna perfetta su smartphone */
  }
`

export const Card = styled.article`
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px ${colors.green.green600}40;
  background: #fff;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px ${colors.green.green700}50;
  }
`

export const CardContent = styled.div`
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`

export const CardTitle = styled(T.H3).attrs({ as: 'h2' })`
  margin: 0 0 0.5rem;
  line-height: 1.3;
`

export const CardExcerpt = styled(T.P3)`
  margin: 0;
  color: ${colors.green.green900};
  display: -webkit-box;
  -webkit-line-clamp: 3; /* Tronca il testo dopo 3 righe */
  -webkit-box-orient: vertical;
  overflow: hidden;
`

/* --- NUOVI STILI PER LA PAGINAZIONE --- */
export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  margin-top: 4rem;
`

export const PageButton = styled.button<{ $active?: boolean }>`
  background-color: ${({ $active }) => ($active ? colors.green.green600 : colors.green.green200)};
  color: ${({ $active }) => ($active ? colors.green.green50 : colors.green.green900)};
  border: none;
  border-radius: 8px;
  width: 45px;
  height: 45px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover:not(:disabled) {
    background-color: ${({ $active }) => ($active ? colors.green.green700 : colors.green.green300)};
    transform: translateY(-2px);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

export const PageNumbers = styled.div`
  display: flex;
  gap: 12px;
  
  /* Nasconde i numeri singoli su mobile */
  @media (max-width: ${breakpointNum.mobile}px) {
    display: none;
  }
`

export const MobilePageIndicator = styled(T.P3)`
  display: none;
  
  /* Mostra la scritta "Pagina X di Y" solo su mobile */
  @media (max-width: ${breakpointNum.mobile}px) {
    display: block;
    font-weight: bold;
    margin: 0 1rem;
    color: ${colors.green.green900};
  }
`