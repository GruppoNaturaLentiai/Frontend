import React from "react"
import * as S from "./styled"
import Icon from "../icons"
import * as T from "./../typography"
import contacts from "./../../data/contacts.json"

const contactData = [
  {
    icon: <Icon type="facebook" width={20} />,
    text: "Laghetti della Rimonta",
    linkURL: contacts["facebook-laghetti"],
  },
  {
    icon: <Icon type="facebook" width={20} />,
    text: "Progetto Narcisi",
    linkURL: contacts["facebook-narcisi"],
  },
  {
    icon: <Icon type="youtube" width={20} />,
    text: "Gruppo Natura Lentiai",
    linkURL: contacts["youtube"],
  },
]

const phoneNumber = contacts["phone"]
const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\D/g, "")}`
const email = contacts["email"]

const ContactUs = () => {
  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`
  }

  const handleWhatsApp = () => {
    window.open(whatsappUrl, "_blank")
  }

  const handleEmail = () => {
    window.location.href = `mailto:${email}`
  }

  return (
    <S.Wrapper>
      <S.Title $font="Caveat">Contattaci!</S.Title>
      <S.ContactsWrapper>
        {contactData.map((el, idx) => (
          <S.Row key={idx}>
            <a href={el.linkURL} target="_blank" rel="noopener noreferrer">
              <S.IconWrapper>{el.icon}</S.IconWrapper>
            </a>
            <S.LinkText>
              <a href={el.linkURL} target="_blank" rel="noopener noreferrer">
                <T.H2>{el.text}</T.H2>
              </a>
            </S.LinkText>
          </S.Row>
        ))}
        <S.Row>
          <S.IconWrapper onClick={handleCall}>
            <Icon type="phone" width={20} />
          </S.IconWrapper>
          <S.IconWrapper onClick={handleWhatsApp}>
            <Icon type="whatsapp" width={20} />
          </S.IconWrapper>
          <S.LinkText onClick={handleCall}>
            <T.H2>{contacts["phone-spaced"]}</T.H2>
          </S.LinkText>
        </S.Row>
        <S.Row>
          <S.IconWrapper onClick={handleEmail}>
            <Icon type="email" width={20} />
          </S.IconWrapper>
          <S.LinkText onClick={handleEmail}>
            <T.H2>{contacts["email"]}</T.H2>
          </S.LinkText>
        </S.Row>
      </S.ContactsWrapper>
    </S.Wrapper>
  )
}

export default ContactUs
