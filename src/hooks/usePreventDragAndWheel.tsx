import { useEffect } from "react"

const usePreventScrollOnImageView = (condition: boolean) => {
  const handleWheel = (event: WheelEvent) => {
    if (condition) {
      event.preventDefault()
    }
  }

  const handleTouchMove = (event: TouchEvent) => {
    if (condition) {
      event.preventDefault()
    }
  }

  const handleMouseMove = (event: MouseEvent) => {
    if (condition) {
      event.preventDefault()
    }
  }

  useEffect(() => {
    if (condition) {
      window.addEventListener("wheel", handleWheel, { passive: false })
      window.addEventListener("touchmove", handleTouchMove, { passive: false })
      window.addEventListener("mousemove", handleMouseMove)
    } else {
      window.removeEventListener("wheel", handleWheel)
      window.removeEventListener("touchmove", handleTouchMove)
      window.removeEventListener("mousemove", handleMouseMove)
    }

    return () => {
      window.removeEventListener("wheel", handleWheel)
      window.removeEventListener("touchmove", handleTouchMove)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [condition])

  return null
}

export default usePreventScrollOnImageView
