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

export type Link = {
  title: string
  link: string
  banner: MicroCMSImage
  description: string
}

export type Contact = {
  title: string
  link: string
  icon: string
  image: MicroCMSImage
}
