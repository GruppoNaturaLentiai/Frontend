import { Link } from "gatsby"
import React, { useState } from "react"
import Icon from "../icons"
import * as T from "../typography"
import { navItems } from "./data"
import * as S from "./styled"
import { useLocation } from "@reach/router";


const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<string>("")
  const rootPath = useLocation().pathname.split("/").slice(0, 2).join("/")

  return (
    <S.Header>
      <S.LeftWrapper>
        <Link to="/">
          <Icon type="logo" />
        </Link>
      </S.LeftWrapper>
      <S.RightWrapper>
        <S.NavBarList>
          {navItems.map(el => (
            <S.NavBarItem
              key={el.label}
              $isActive={rootPath === el.url}
              onMouseOver={() => setMenuOpen(el.label)}
              onMouseLeave={() => setMenuOpen("")}
            >
              <Link to={el.url}>
                <T.H4>{el.label}</T.H4>
              </Link>
              {el.subsections &&
                <S.SubsectionList
                  onMouseLeave={() => setMenuOpen("")}
                  $isOpen={el.label === menuOpen}
                >
                  {el.subsections.map(subSection =>
                    <S.SubsectionItem key={subSection.url}>
                      <Link to={subSection.url}>
                        <T.H4>{subSection.label}</T.H4>
                      </Link>
                    </S.SubsectionItem>
                  )}
                </S.SubsectionList>
              }
            </S.NavBarItem>
          ))}
        </S.NavBarList>
      </S.RightWrapper>
    </S.Header>
  )
}

export default Header
