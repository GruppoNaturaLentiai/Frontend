import React from "react"
import { ReactComponent as LogoSVG } from "./../../icons/LogoFull.svg"

interface IconsProps {
  type: string
}

const Icon: React.FC<IconsProps> = ({ type, ...props }) => {
  switch (type) {
    case "logo":
      return <LogoSVG viewBox="0 0 299 182" {...props} />
    default:
      return null
  }
}

export default Icon
