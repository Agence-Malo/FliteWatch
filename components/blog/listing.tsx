'use client'

import type { Category, Post } from '@/payload-types'
import { useState } from 'react'
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
    <section className={'containerize mt-[4rem] flex flex-col justify-start items-start'}>
      <div
        className={
          'w-full mb-[4vh] flex flex-col lg:flex-row justify-between items-start lg:items-end'
        }
      >
        <div className={'flex flex-col justify-start items-start gap-[1vh]'}>
          <small className={'text-xs tracking-[0.28em] text-grey-300 cursor-default'}>
            Journal
          </small>
          <h1 className={'font-light text-[length:clamp(2.4rem,5vw,4rem)]'}>Keep up with us</h1>
        </div>
        <div
          className={
            'w-full lg:w-auto lg:pb-[0.6rem] flex justify-start lg:justify-end items-baseline gap-[8vw] lg:gap-[2vw] overflow-y-hidden overflow-x-auto [mask-image:_linear-gradient(to_right,_black,_black_90%,_transparent)] lg:[mask-image:none]'
          }
        >
          <button type={'button'} onClick={() => setCurrentCategory(null)}>
            <p
              className={`${!currentCategory ? 'font-bold text-black' : 'text-grey-300 hover:text-black'} transition-colors duration-200 ease-in-out whitespace-nowrap py-[2vh] lg:py-0 cursor-pointer`}
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
                className={`${currentCategory === category.id ? 'font-bold text-black' : 'text-grey-300 hover:text-black'} transition-colors duration-200 ease-in-out whitespace-nowrap py-[2vh] lg:py-0 cursor-pointer`}
              >
                {category.name}
              </p>
            </button>
          ))}
        </div>
      </div>
      {featured ? (
        <>
          <Featured post={featured} />
          {rest.length > 0 && (
            <div className={'w-full mt-[8vh] flex flex-col justify-start items-start'}>
              <small className={'text-xs tracking-[0.28em] text-grey-300 cursor-default mb-[2vh]'}>
                Latest stories
              </small>
              <div className={'w-full flex flex-col'}>
                {rest.map((post) => (
                  <Card key={post.id} post={post} />
                ))}
              </div>
            </div>
          )}
        </>
      ) : (
        <div className={'w-full my-[12vh] flex flex-col justify-center items-center gap-[1vh]'}>
          <small className={'text-xs tracking-[0.28em] text-grey-300 cursor-default'}>
            Journal
          </small>
          <p className={'font-light text-grey-400'}>No articles published yet. Check back soon.</p>
        </div>
      )}
    </section>
  )
}

export default Listing
