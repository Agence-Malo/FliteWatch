import payload from '@/lib/payload'
import { Jet } from '@/payload-types'

export interface IFleet {
  id: Jet['id']
  name: Jet['name']
  manufacturer: Jet['manufacturer']
  images: { hero: Jet['images']['hero'] }
}

export const getFleet = async (): Promise<IFleet[]> => {
  try {
    return (
      await (await payload()).find({
        collection: 'jets',
        pagination: false,
        select: {
          id: true,
          name: true,
          plate: true,
          manufacturer: true,
          images: {
            hero: true,
          },
        },
        limit: 0
      })
    ).docs
  } catch (e) {
    console.error(e)
    throw Error(`${e}`)
  }
}
