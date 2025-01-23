import React from "react"
import * as S from "./styled"
import Icon from "../icons"
import * as T from "./../typography"

const contactData = [
  {
    icon: <Icon type="facebook" width={20} />,
    text: "Laghetti Della Rimonta",
    linkURL: "https://www.facebook.com/profile.php?id=100064320537208"
  },
  {
    icon: <Icon type="facebook" width={20} />,
    text: "Progetto Narcisi",
    linkURL: "https://www.facebook.com/profile.php?id=100069990139319"
  },
  {
    icon: <Icon type="youtube" width={20} />,
    text: "Gruppo Natura Lentiai",
    linkURL: "https://www.youtube.com/channel/UCbP1HqPAvI5Ofoatb9MzZmQ"
  }
]
const phoneNumber = "+393470511865"
const email = "grupponaturalentiai@libero.it"

const ContactUs = () => {


  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleWhatsApp = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\D/g, '')}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleEmail = () => {
    window.location.href = `mailto:${email}`;
  };

  return <S.Wrapper>
    <S.Title $font="Caveat">Contattaci!</S.Title>
    <S.ContactsWrapper>
      {contactData.map((el, idx) => (
        <S.Row key={idx}>
          <a href={el.linkURL} target="_blank" rel="noopener noreferrer">
            <S.IconWrapper>
              {el.icon}
            </S.IconWrapper>
          </a>
          <S.LinkText>
            <a href={el.linkURL} target="_blank" rel="noopener noreferrer">
              <T.H2>{el.text}</T.H2>
            </a>
          </S.LinkText>
        </S.Row>))}
      <S.Row>
        <S.IconWrapper onClick={handleCall}>
          <Icon type="phone" width={20} />
        </S.IconWrapper>
        <S.IconWrapper onClick={handleWhatsApp}>
          <Icon type="whatsapp" width={20} />
        </S.IconWrapper>
        <S.LinkText onClick={handleCall}>
          <T.H2>+39 347 051 1865</T.H2>
        </S.LinkText>
      </S.Row>
      <S.Row>
        <S.IconWrapper onClick={handleEmail}>
          <Icon type="email" width={20} />
        </S.IconWrapper>
        <S.LinkText onClick={handleEmail}>
          <T.H2>grupponaturalentiai@libero.it</T.H2>
        </S.LinkText>
      </S.Row>
    </S.ContactsWrapper >
  </S.Wrapper>
}

export default ContactUs