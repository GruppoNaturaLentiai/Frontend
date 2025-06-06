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

export const fromBodyRawToExcerpt = (bodyRaw: any) =>
  bodyRaw
    .filter((c: any) => c._type === "block")
    .map((c: any) => c.children.map((child: any) => child?.text ?? "").join(""))
    .join(" ")
    .slice(0, 200)
    .concat("...")
