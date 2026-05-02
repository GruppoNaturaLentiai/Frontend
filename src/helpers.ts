import { pathPrefix } from "./constants"

const stripTrailingSlash = (str: string) =>
  str.endsWith("/") ? str.slice(0, -1) : str

export const cleanSlug = (str: string) =>
  stripTrailingSlash(str.replace(pathPrefix, ""))

export const getSanityImageUrl = (ref: string) => {
  if (!ref) return null

  const [, id, dimensions, format] =
    ref.match(/image-([^-]+)-(\d+x\d+)-(.+)/) || []
  if (!id || !dimensions || !format) return null

  return `https://cdn.sanity.io/images/ze02ljgl/post-blog/${id}-${dimensions}.${format}`
}

export const buildSanityImageUrl = (image: any, targetWidth = 800) => {
  if (!image?.asset?.url) return null
  let url = image.asset.url

  if (image.crop && image.asset.metadata?.dimensions) {
    const { width, height } = image.asset.metadata.dimensions
    const { top, bottom, left, right } = image.crop
    if (top > 0 || bottom > 0 || left > 0 || right > 0) {
      const cw = Math.round(width * (1 - left - right))
      const ch = Math.round(height * (1 - top - bottom))
      const cx = Math.round(width * left)
      const cy = Math.round(height * top)
      url += `?rect=${cx},${cy},${cw},${ch}`
    }
  }

  const separator = url.includes("?") ? "&" : "?"
  if (image.hotspot) {
    url += `${separator}w=${targetWidth}&fit=crop&crop=focalpoint&fp-x=${image.hotspot.x}&fp-y=${image.hotspot.y}`
  } else {
    url += `${separator}w=${targetWidth}&fit=max`
  }
  return url
}

export const fromBodyRawToExcerpt = (bodyRaw: any) =>
  bodyRaw
    .filter((c: any) => c._type === "block")
    .map((c: any) => c.children.map((child: any) => child?.text ?? "").join(""))
    .join(" ")
    .slice(0, 200)
    .concat("...")
