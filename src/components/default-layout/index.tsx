import React from "react"
import Footer from "../footer"
import Header from "../header"
import CookieBanner from "../cookie-banner"
import * as S from "./styled"
import { Helmet } from "react-helmet"

const DefaultLayout: React.FC<{ children: any }> = ({ children }) => {
  return (
    <>
      <Helmet>
        <title>Gruppo Natura Lentiai</title>
        <meta
          name="description"
          content="Sito ufficiale del Gruppo Natura Lentiai, dedicato alla natura, alla salvaguardia ed alla cultura del territorio bellunese. In particolare trattiamo le attività di Laghetti della Rimonta e Progetto Narcisi, oltre ad altri progetti di natura e cultura."
        />
        <link rel="canonical" href="https://grupponaturalentiai.it/" />
      </Helmet>
      <Header />
      <S.Wrapper>{children}</S.Wrapper>
      <CookieBanner />
      <Footer />
    </>
  )
}

export default DefaultLayout
