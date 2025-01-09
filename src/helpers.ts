export const stripTrailingSlash = (str: string) =>
  str.endsWith("/") ? str.slice(0, -1) : str
