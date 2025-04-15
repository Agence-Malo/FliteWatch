export default interface IList {
  tab?: string
  title: string
  description: string
  subtitle?: string
  sublist?: IList[]
  note?: string
}
