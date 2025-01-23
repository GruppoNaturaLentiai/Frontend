import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import DefaultLayout from "../components/default-layout"
import ContactUs from "../components/contact-us"

const ContactPage: React.FC<PageProps> = () => {
  return (<DefaultLayout>
    <ContactUs />
  </DefaultLayout>)
}

export default ContactPage

export const Head: HeadFC = () => (
  <title>Gruppo Natura Lentiai - Contattaci</title>
)
