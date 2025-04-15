export default interface IList {
  tab?: string
  title: string
  description: string
  subtitle?: string
  sublist?: Pick<IList, 'title' | 'description'>[]
  note?: string
  image?: StaticImageData
}
