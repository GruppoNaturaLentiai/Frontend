import React from "react"
import Icon from "../icons"
import * as S from "./styled"
import * as T from "./../typography"

const Component404 = () => (
  <S.Wrapper>
    <Icon type="sad-face" width={300} />
    <T.H1 style={{ marginTop: 0 }} $font="Caveat">
      Questa pagina non esiste!
    </T.H1>
  </S.Wrapper>
)

export default Component404
