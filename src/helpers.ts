import { pathPrefix } from "./constants"

const stripTrailingSlash = (str: string) =>
  str.endsWith("/") ? str.slice(0, -1) : str

export const cleanSlug = (str: string) => stripTrailingSlash(str.replace(pathPrefix, ""))