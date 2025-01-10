import React from "react"
import * as S from "./styled"
import * as T from "../typography"

const Footer: React.FC = () => {
  return (
    <S.Footer>
      <T.H1>Sezioni del sito e altre informazioni</T.H1>
      <T.P2>© Copyright GNL Lentiai 2025 - Tutti i diritti riservati.</T.P2>
    </S.Footer>
  )
}

export default Footer
