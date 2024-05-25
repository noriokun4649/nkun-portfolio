import type { MicroCMSImage } from "microcms-js-sdk"

export type Work = {
  title: string
  image: MicroCMSImage
  description: string
  linkname: string
  link: string
  date: string
  genre: string
}
