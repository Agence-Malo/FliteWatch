import { getPayload } from 'payload'
import config from '@payload-config';
import { Jet } from '@/payload-types'

const payload = await getPayload({ config })

export interface IFleet {
  id: Jet['id']
  name: Jet['name']
  manufacturer: Jet['manufacturer']
  images: { hero: Jet['images']['hero'] }
}

export const getFleet = async (): Promise<IFleet[]> => {
  try {
    return (
      await payload.find({
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
      })
    ).docs
  } catch (e) {
    console.error(e)
    throw Error(`${e}`)
  }
}
