import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import DefaultLayout from "../components/default-layout"
import ContactUs from "../components/contact-us"

const ContactPage: React.FC<PageProps> = () => {
  return (
    <DefaultLayout>
      <ContactUs />
    </DefaultLayout>
  )
}

export default ContactPage

import { SEO } from "../components/seo"

export const Head: HeadFC = ({ location }) => (
  <SEO
    title="Gruppo Natura Lentiai - Contattaci"
    pathname={location.pathname}
  />
)
