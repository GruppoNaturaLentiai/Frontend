import React from "react"
import Footer from "../footer"
import Header from "../header"
import CookieBanner from "../cookie-banner"
import * as S from "./styled"

const DefaultLayout: React.FC<{ children: any }> = ({ children }) => {
  return (
    <>
      <Header />
      <S.Wrapper>{children}</S.Wrapper>
      <CookieBanner />
      <Footer />
    </>
  )
}

export default DefaultLayout
