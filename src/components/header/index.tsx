import { Link } from "gatsby"
import React, { useState } from "react"
import Icon from "../icons"
import * as T from "../typography"
import { navItems } from "./data"
import * as S from "./styled"
import { useLocation } from "@reach/router"

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<string>("")
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false)
  const rootPath = useLocation().pathname.split("/").slice(0, 2).join("/")

  return (
    <>
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
                {el.subsections && (
                  <S.SubsectionList
                    onMouseLeave={() => setMenuOpen("")}
                    $isOpen={el.label === menuOpen}
                  >
                    {el.subsections.map(subSection => (
                      <S.SubsectionItem key={subSection.url}>
                        <Link to={subSection.url}>
                          <T.H4>{subSection.label}</T.H4>
                        </Link>
                      </S.SubsectionItem>
                    ))}
                  </S.SubsectionList>
                )}
              </S.NavBarItem>
            ))}
          </S.NavBarList>
        </S.RightWrapper>
      </S.Header>
      <S.HeaderMobile>
        <S.LeftWrapper>
          <Link to="/" onClick={() => setMobileMenuOpen(false)}>
            <Icon type="logo" />
          </Link>
        </S.LeftWrapper>
        <S.RightWrapper
          className="mobile"
          onClick={() => {
            setMobileMenuOpen(val => !val)
          }}
        >
          <Icon type="hamburger-menu" width={40} />
        </S.RightWrapper>
        <S.RightSidebar $isOpen={mobileMenuOpen}>
          <S.CloseButton onClick={() => setMobileMenuOpen(false)}>
            ×
          </S.CloseButton>
          <S.MobileNavBarList>
            {navItems.map(el => (
              <S.MobileNavBarItem key={el.label} $isActive={rootPath === el.url}>
                {el.subsections ? (
                  <S.LinkIcon $isActive={rootPath === el.url}>
                    <S.IconWrapper
                      $isActive={rootPath === el.url}
                      $isOpen={el.label === menuOpen}
                      onClick={() =>
                        setMenuOpen(old => (el.label === old ? "" : el.label))
                      }
                    >
                      <Icon type="chevron" height={15} />
                    </S.IconWrapper>
                    <Link
                      to={el.url}
                      onClick={() => {
                        setMobileMenuOpen(false)
                        setMenuOpen("")
                      }}
                    >
                      <T.H4>{el.label}</T.H4>
                    </Link>
                  </S.LinkIcon>
                ) : (
                  <Link
                    to={el.url}
                    onClick={() => {
                      setMobileMenuOpen(false)
                      setMenuOpen("")
                    }}
                  >
                    <T.H4>{el.label}</T.H4>
                  </Link>
                )}
                {el.subsections && (
                  <S.MobileSubsectionList $show={el.label === menuOpen}>
                    {el.subsections.map(subSection => (
                      <li key={subSection.label}>
                        <Link
                          to={subSection.url}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <T.H4>{subSection.label}</T.H4>
                        </Link>
                      </li>
                    ))}
                  </S.MobileSubsectionList>
                )}
              </S.MobileNavBarItem>
            ))}
          </S.MobileNavBarList>
        </S.RightSidebar>
      </S.HeaderMobile>
    </>
  )
}

export default Header
