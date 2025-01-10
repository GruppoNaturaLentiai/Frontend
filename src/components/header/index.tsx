import React from "react"
import * as S from "./styled"
import * as T from "../typography"
import { Link } from "gatsby"
import Icon from "../icons"

const navItems = [
  {
    label: "Laghetti",
    url: "/laghetti",
  },
  {
    label: "Narcisi",
    url: "/narcisi",
  },
  {
    label: "Blog",
    url: "/blog",
  },
  {
    label: "Contatti",
    url: "/contatti",
  },
] as const

const Header: React.FC = () => {
  return (
    <S.Header>
      <S.LeftWrapper>
        <Link to="/">
          <Icon type="logo" />
        </Link>
      </S.LeftWrapper>
      <S.RightWrapper>
        {navItems.map(el => (
          <React.Fragment key={el.label}>
            <Link to={el.url}>
              <T.H4>{el.label}</T.H4>
            </Link>
          </React.Fragment>
        ))}
      </S.RightWrapper>
    </S.Header>
  )
}

export default Header
