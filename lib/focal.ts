import type { Media } from '@/payload-types'

export const focalPosition = (image?: Pick<Media, 'focalX' | 'focalY'> | null) =>
  `${image?.focalX ?? 50}% ${image?.focalY ?? 50}%`
