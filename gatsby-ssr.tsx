import "normalize.css"
import * as React from "react"

// The `wrapRootElement` function wraps the root element of your Gatsby app with additional elements like context providers.
export const wrapRootElement = ({ element }) => {
  return <>{element}</>
}
