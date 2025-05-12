import React from "react"
import * as S from "./styled"
import * as T from "../typography"
import { footerSections } from "./../../data/sections"
import contacts from "./../../data/contacts.json"

import Icon from "../icons"
import { Link } from "gatsby"

const contactData = [
  {
    icon: <Icon type="facebook" width={25} />,
    text: "FB - Laghetti della Rimonta",
    linkURL: contacts["facebook-laghetti"],
  },
  {
    icon: <Icon type="facebook" width={25} />,
    text: "FB - Progetto Narcisi",
    linkURL: contacts["facebook-narcisi"],
  },
  {
    icon: <Icon type="youtube" width={25} />,
    text: "Youtube - Gruppo Natura Lentiai",
    linkURL: contacts["youtube"],
  },
  {
    icon: <Icon type="whatsapp" width={25} />,
    text: "Whatsapp",
    onClick: () => {
      const whatsappUrl = `https://wa.me/${contacts["phone"].replace(/\D/g, "")}`
      window.open(whatsappUrl, "_blank")
    },
  },
]

const Footer: React.FC = () => {
  return (
    <>
      <S.Footer>
        <S.UpperContent>
          <S.LogoWrapper>
            <Link to="/" aria-label="Vai alla home">
              <Icon type="logo" width={200} />
            </Link>
            <S.ContactsIcons>
              {contactData.map((contact, idx) => (
                <S.IconWrapper
                  title={contact.text}
                  onClick={contact.onClick}
                  key={`contact-${idx}`}
                >
                  {contact.linkURL ? (
                    <a
                      href={contact.linkURL}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={contact.text}
                    >
                      {contact.icon}
                    </a>
                  ) : (
                    <>{contact.icon}</>
                  )}
                </S.IconWrapper>
              ))}
            </S.ContactsIcons>
            <S.ContactsLong>
              <S.ContactsLongText>
                <T.H3>Email: </T.H3>
                <T.H4
                  onClick={() => {
                    window.location.href = `mailto:${contacts["email"]}`
                  }}
                >
                  {contacts["email"]}
                </T.H4>
              </S.ContactsLongText>
              <S.ContactsLongText>
                <T.H3>Telefono: </T.H3>
                <T.H4
                  onClick={() => {
                    window.location.href = `tel:${contacts["phone"]}`
                  }}
                >
                  {contacts["phone-spaced"]}
                </T.H4>
              </S.ContactsLongText>
            </S.ContactsLong>
          </S.LogoWrapper>
          <S.SitemapWrapper>
            {footerSections.map((main, idx) => (
              <S.LinksColumn key={`footer-sec-${idx}`}>
                {main.url ? (
                  <Link to={main.url}>
                    <T.H3 $font="Caveat">{main.label}</T.H3>
                  </Link>
                ) : (
                  <T.H3 $font="Caveat" key={`footer-sec-${idx}`}>
                    {main.label}
                  </T.H3>
                )}
                {main.subsections.map((subsec, idx) => (
                  <Link to={subsec.url} key={`footer-subsec-${idx}`}>
                    <T.H4>{subsec.label}</T.H4>
                  </Link>
                ))}
              </S.LinksColumn>
            ))}
          </S.SitemapWrapper>
          <S.SponsorsWrapper>
            <T.H3 $font="Caveat">I nostri sponsor</T.H3>
            <S.SponsorsLogosWrapper>
              <S.SponsorPlaceholder />
              <S.SponsorPlaceholder />
              <S.SponsorPlaceholder />
              <S.SponsorPlaceholder />
              <S.SponsorPlaceholder />
            </S.SponsorsLogosWrapper>
          </S.SponsorsWrapper>
        </S.UpperContent>
        <S.HorizontalSeparator />
        <S.LowerContent>
          <T.P2>
            © Copyright Andrea Nicolai - GNL Lentiai 2025 - Tutti i diritti
            riservati.
          </T.P2>
        </S.LowerContent>
      </S.Footer>
      <S.MobileFooter>
        <S.UpperContent>
          <S.LogoWrapper>
            <Link to="/" aria-label="Vai alla home">
              <Icon type="logo" width={200} />
            </Link>
            <S.ContactsIcons>
              {contactData.map((contact, idx) => (
                <S.IconWrapper
                  title={contact.text}
                  onClick={contact.onClick}
                  key={`contact-${idx}`}
                >
                  {contact.linkURL ? (
                    <a
                      href={contact.linkURL}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={contact.text}
                    >
                      {contact.icon}
                    </a>
                  ) : (
                    <>{contact.icon}</>
                  )}
                </S.IconWrapper>
              ))}
            </S.ContactsIcons>
            <S.ContactsLong>
              <S.ContactsLongText>
                <T.H3>Email: </T.H3>
                <T.H4
                  onClick={() => {
                    window.location.href = `mailto:${contacts["email"]}`
                  }}
                >
                  {contacts["email"]}
                </T.H4>
              </S.ContactsLongText>
              <S.ContactsLongText>
                <T.H3>Telefono: </T.H3>
                <T.H4
                  onClick={() => {
                    window.location.href = `tel:${contacts["phone"]}`
                  }}
                >
                  {contacts["phone-spaced"]}
                </T.H4>
              </S.ContactsLongText>
            </S.ContactsLong>
          </S.LogoWrapper>
          <S.SponsorsWrapper>
            <T.H3 $font="Caveat">I nostri sponsor</T.H3>
            <S.SponsorsLogosWrapper>
              <S.SponsorPlaceholder />
              <S.SponsorPlaceholder />
              <S.SponsorPlaceholder />
              <S.SponsorPlaceholder />
              <S.SponsorPlaceholder />
            </S.SponsorsLogosWrapper>
          </S.SponsorsWrapper>
          <S.SitemapWrapper>
            {footerSections.map((main, idx) => (
              <S.LinksColumn key={`sec-mob-${idx}`}>
                {main.url ? (
                  <Link to={main.url}>
                    <T.H3 $font="Caveat">{main.label}</T.H3>
                  </Link>
                ) : (
                  <T.H3 $font="Caveat" key={`sec-mob-${idx}`}>
                    {main.label}
                  </T.H3>
                )}
                {main.subsections.map((subsec, idx) => (
                  <Link to={subsec.url} key={`subsec-mob-${idx}`}>
                    <T.H4>{subsec.label}</T.H4>
                  </Link>
                ))}
              </S.LinksColumn>
            ))}
          </S.SitemapWrapper>
        </S.UpperContent>
        <S.HorizontalSeparator />
        <S.LowerContent>
          <T.P2>
            © Copyright Andrea Nicolai - GNL Lentiai 2025 - Tutti i diritti
            riservati.
          </T.P2>
        </S.LowerContent>
      </S.MobileFooter>
    </>
  )
}

export default Footer
