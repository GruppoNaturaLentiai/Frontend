import React from "react"
import { ReactComponent as LogoSVG } from "./../../icons/LogoFull.svg"
import { ReactComponent as HamburgerMenu } from "./../../icons/hamburger-menu.svg"
import { ReactComponent as Chevron } from "./../../icons/chevron.svg"
import { ReactComponent as Phone } from "./../../icons/phone.svg"
import { ReactComponent as Email } from "./../../icons/email.svg"
import { ReactComponent as Facebook } from "./../../icons/facebook.svg"
import { ReactComponent as Whatsapp } from "./../../icons/whatsapp.svg"
import { ReactComponent as Youtube } from "./../../icons/youtube.svg"


interface IconsProps {
  type: string
  width?: number
  height?: number
}

const Icon: React.FC<IconsProps> = ({ type, ...props }) => {
  switch (type) {
    case "logo":
      return <LogoSVG viewBox="0 0 299 182" {...props} />
    case "hamburger-menu":
      return <HamburgerMenu viewBox="0 0 40 40" {...props} />
    case "chevron":
      return <Chevron viewBox="0 0 407.437 407.437" {...props} />
    case "phone":
      return <Phone viewBox="0 0 24 24" {...props} />
    case "email":
      return <Email viewBox="0 0 54.1 54.1" {...props} />
    case "whatsapp":
      return <Whatsapp viewBox="0 0 20 20" {...props} />
    case "facebook":
      return <Facebook viewBox="0 0 960 960" {...props} />
    case "youtube":
      return <Youtube viewBox="0 0 310 310" {...props} />
    default:

      return null
  }
}

export default Icon
