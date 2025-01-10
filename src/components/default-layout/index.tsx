import React from "react"
import Footer from "../footer"
import Header from "../header"
import * as S from "./styled"

const DefaultLayout: React.FC<{ children: any }> = ({ children }) => {
  return (
    <>
      <Header />
      <S.Wrapper>
        <main>{children}</main>
      </S.Wrapper>
      <Footer />
    </>
  )
}

export default DefaultLayout
