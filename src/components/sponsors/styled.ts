import styled from "styled-components"

export const Sponsor = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 120px;
  
  .gatsby-image-wrapper {
    max-height: 100%;
    max-width: 100%;
  }
`

export const SponsorGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 0.7rem;
  justify-items: center;
  a {
    display: ruby;
  }
`
