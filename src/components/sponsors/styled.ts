import styled from "styled-components";

export const Sponsor = styled.div`
  background-color: white;
  max-height: 50px;
  max-width: 120px;
  min-block-size: fit-content;
  img {
    max-height: 100%;
    max-width: 100%;
    object-fit: contain;
  }
`

export const SponsorGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 0.7rem;
  justify-items: center;
`