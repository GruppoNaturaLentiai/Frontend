import React from "react"
import Icon from "../icons"
import * as S from "./styled"
import * as T from "./../typography"

const WorkInProgress = () => (
  <S.Wrapper>
    <Icon type="wip" width={300} />
    <T.H1 style={{ marginTop: 0 }} $font="Caveat">
      Stiamo lavorando per voi...!
    </T.H1>
  </S.Wrapper>
)

export default WorkInProgress
