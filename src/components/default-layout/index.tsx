import React from "react"
import Footer from "../footer"
import Header from "../header"

const DefaultLayout: React.FC<{ children: any }> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default DefaultLayout
