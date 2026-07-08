import payload from '@/lib/payload'
import { Category, Post } from '@/payload-types'

export const getPosts = async (limit?: number): Promise<Post[]> => {
  try {
    return (
      await (await payload()).find({
        collection: 'posts',
        where: { _status: { equals: 'published' } },
        sort: '-publishedDate',
        ...(limit ? { limit } : { pagination: false, limit: 0 }),
      })
    ).docs
  } catch (e) {
    console.error(e)
    throw Error(`${e}`)
  }
}

export const getPost = async (slug: string): Promise<Post | null> => {
  try {
    return (
      (
        await (await payload()).find({
          collection: 'posts',
          where: {
            id: { equals: slug },
            _status: { equals: 'published' },
          },
          limit: 1,
        })
      ).docs[0] ?? null
    )
  } catch (e) {
    console.error(e)
    throw Error(`${e}`)
  }
}

export const getCategories = async (): Promise<Category[]> => {
  try {
    return (
      await (await payload()).find({
        collection: 'categories',
        pagination: false,
        limit: 0,
      })
    ).docs
  } catch (e) {
    console.error(e)
    throw Error(`${e}`)
  }
}
