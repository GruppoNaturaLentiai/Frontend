import { Link } from "gatsby"
import React from "react"
import * as T from "./../typography"
import * as S from "./styled"

interface ButtonLinkProps {
  to: string
  label: string
}

const ButtonLink = ({ to, label }: ButtonLinkProps) => (
  <S.Wrapper>
    <Link style={{ textDecoration: "none" }} to={to}>
      <S.ButtonWrapper>
        <T.P2>{label}</T.P2>
      </S.ButtonWrapper>
    </Link>
  </S.Wrapper>
)

export default ButtonLink
