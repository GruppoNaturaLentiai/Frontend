import { useEffect, useRef, useState } from "react"

const useResponsiveClickHandler = (
  mediaQuery: string,
  handler: () => void
): (() => void) | undefined => {
  const [clickHandler, setClickHandler] = useState<(() => void) | undefined>(undefined)
  const mediaQueryRef = useRef<MediaQueryList | null>(null)

  useEffect(() => {
    mediaQueryRef.current = window.matchMedia(mediaQuery)

    const updateClickHandler = (event: MediaQueryListEvent | MediaQueryList) => {
      const shouldSetHandler = event.matches
      const shouldUnsetHandler = !event.matches && clickHandler
      const alreadyUnsetHandler = !event.matches && !clickHandler
      if (alreadyUnsetHandler) return
      if (shouldUnsetHandler) setClickHandler(undefined)
      if (shouldSetHandler) setClickHandler((prev) => prev ? prev : handler)
    }
    updateClickHandler(mediaQueryRef.current)

    mediaQueryRef.current.addEventListener("change", updateClickHandler)
    return () => {
      mediaQueryRef.current?.removeEventListener("change", updateClickHandler)
    }
  }, [mediaQuery, handler])

  return clickHandler
}

export default useResponsiveClickHandler
