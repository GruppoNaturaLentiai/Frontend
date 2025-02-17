import React from "react"
import * as S from "./styled"
import Icon from "../icons"
import * as T from "./../typography"
import contacts from "./../../data/contacts.json"

const contactData = [
  {
    icon: <Icon type="facebook" width={32} />,
    text: "I Laghetti della Rimonta - Bardies ",
    linkURL: contacts["facebook-laghetti"],
    onClickHandler: undefined,
  },
  {
    icon: <Icon type="facebook" width={32} />,
    text: "Borgo Valbelluna-montagna-narcisi ",
    linkURL: contacts["facebook-narcisi"],
    onClickHandler: undefined,
  },
  {
    icon: <Icon type="youtube" width={32} />,
    text: "Gruppo Natura Lentiai",
    linkURL: contacts["youtube"],
    onClickHandler: undefined,
  },
  {
    icon: <Icon type="phone" width={32} />,
    text: contacts["phone-spaced"],
    linkURL: undefined,
    onClickHandler: () => {
      window.location.href = `tel:${phoneNumber}`
    }
  },
  {
    icon: <Icon type="whatsapp" width={32} />,
    text: contacts["phone-spaced"],
    linkURL: undefined,
    onClickHandler: () => {
      window.open(whatsappUrl, "_blank")
    }
  },
  {
    icon: <Icon type="email" width={32} />,
    text: contacts["email"],
    linkURL: undefined,
    onClickHandler: () => {
      window.location.href = `mailto:${email}`
    }
  }
]

const phoneNumber = contacts["phone"]
const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\D/g, "")}`
const email = contacts["email"]

const ContactUs = () => (
  <S.Wrapper>
    <S.Title $font="Caveat">Contattaci!</S.Title>
    <S.ContactsWrapper>
      {contactData.map((el, idx) => (
        <S.Row key={idx}>
          {el.linkURL
            ? <a href={el.linkURL} target="_blank" rel="noopener noreferrer">
              <S.IconWrapper onClick={el.onClickHandler}>{el.icon}</S.IconWrapper>
            </a>
            : <S.IconWrapper onClick={el.onClickHandler}>{el.icon}</S.IconWrapper>
          }
          <S.LinkText onClick={el.onClickHandler}>
            {el.linkURL
              ? <a href={el.linkURL} target="_blank" rel="noopener noreferrer">
                <T.H2>{el.text}</T.H2>
              </a>
              : <T.H2>{el.text}</T.H2>
            }
          </S.LinkText>
        </S.Row>
      ))}
    </S.ContactsWrapper>
  </S.Wrapper>
)

export default ContactUs
