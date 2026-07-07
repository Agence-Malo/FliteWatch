'use client'

import type { Category, Post } from '@/payload-types'
import { useState } from 'react'
import { Divider } from '@heroui/react'
import Featured from '@/components/blog/featured'
import Card from '@/components/blog/card'

const Listing = ({ posts, categories }: { posts: Post[]; categories: Category[] }) => {
  const [currentCategory, setCurrentCategory] = useState<string | null>(null)

  const filtered = currentCategory
    ? posts.filter((post) =>
        typeof post.category === 'object' && post.category !== null
          ? post.category.id === currentCategory
          : post.category === currentCategory,
      )
    : posts

  const [featured, ...rest] = filtered

  return (
    <section className={'w-[92vw] mt-[4rem] flex flex-col justify-start items-center gap-[4vh]'}>
      <div className={'w-full flex flex-col justify-start items-center lg:gap-[2vh]'}>
        <div
          className={'w-full flex flex-col lg:flex-row justify-start items-start lg:items-baseline'}
        >
          <h1 className={'lg:w-4/12'}>Keep up with us</h1>
          <div
            className={
              'w-full lg:w-8/12 pr-[4vw] lg:pr-0 flex justify-start lg:justify-end items-baseline gap-[8vw] lg:gap-[3vw] overflow-y-hidden overflow-x-auto [mask-image:_linear-gradient(to_right,_black,_black_90%,_transparent)] lg:[mask-image:none]'
            }
          >
            <button type={'button'} onClick={() => setCurrentCategory(null)}>
              <p
                className={`${!currentCategory ? 'font-bold' : 'hover:opacity-75 transition-opacity duration-200 ease-in-out'} whitespace-nowrap py-[2vh] lg:py-0 cursor-pointer`}
              >
                All
              </p>
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                type={'button'}
                onClick={() => setCurrentCategory(category.id)}
              >
                <p
                  className={`${currentCategory === category.id ? 'font-bold' : 'hover:opacity-75 transition-opacity duration-200 ease-in-out'} whitespace-nowrap py-[2vh] lg:py-0 cursor-pointer`}
                >
                  {category.name}
                </p>
              </button>
            ))}
          </div>
        </div>
        <Divider className={'w-full bg-grey-500'} />
      </div>
      {featured ? (
        <>
          <Featured post={featured} />
          {rest.length > 0 && (
            <div
              className={
                'w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[6vw] md:gap-[2vw] my-[4vh]'
              }
            >
              {rest.map((post) => (
                <Card key={post.id} post={post} />
              ))}
            </div>
          )}
        </>
      ) : (
        <p className={'my-[8vh]'}>No articles published yet. Check back soon!</p>
      )}
    </section>
  )
}

export default Listing
