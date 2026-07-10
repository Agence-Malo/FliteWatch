import type { Post } from '@/payload-types'
import Image from 'next/image'
import Link from 'next/link'
import { formatDate } from '@/components/blog/card'
import { focalPosition } from '@/lib/focal'

const Featured = ({ post }: { post: Post }) => (
  <Link
    href={`/keep-up-with-us/${post.id}`}
    className={
      'group relative w-full h-[64vh] min-h-[420px] flex flex-col justify-end rounded-[14px] overflow-hidden drop-shadow-2xl'
    }
  >
    {typeof post.image !== 'number' && (
      <Image
        src={`${post.image.url}`}
        alt={post.image.alt}
        fill
        priority
        sizes={'92vw'}
        style={{ objectPosition: focalPosition(post.image) }}
        className={
          'object-cover grayscale-[0.35] group-hover:grayscale-0 group-hover:scale-[1.025] transition-[filter,transform] duration-1000 ease-in-out'
        }
      />
    )}
    <div
      className={'absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.82),transparent_70%)]'}
    />
    <div
      className={
        'relative w-full flex flex-col justify-end items-start gap-[2vh] p-[6vw] lg:p-[3vw]'
      }
    >
      <div className={'flex justify-start items-center gap-[3vw] lg:gap-[1vw]'}>
        {typeof post.category === 'object' && post.category !== null && (
          <small
            className={
              'text-xs tracking-[0.2em] text-white border border-white/40 rounded-full px-[1em] py-[0.4em] leading-none backdrop-blur-sm'
            }
          >
            {post.category.name}
          </small>
        )}
        <small className={'text-xs tracking-[0.2em] text-grey-100'}>
          {formatDate(post.publishedDate)}
        </small>
      </div>
      <h2
        className={
          'text-white font-semibold text-[length:clamp(1.8rem,4vw,3.1rem)] leading-tight max-w-[22ch] cursor-pointer'
        }
      >
        {post.title}
      </h2>
      <p className={'text-grey-100 font-light max-w-[58ch] cursor-pointer'}>{post.excerpt}</p>
      <small
        className={
          'text-xs tracking-[0.28em] text-white mt-[1vh] pb-[0.35em] border-b border-white/60 group-hover:border-white transition-colors duration-300'
        }
      >
        Read the story
      </small>
    </div>
  </Link>
)

export default Featured
