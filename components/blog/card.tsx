import type { Post } from '@/payload-types'
import Image from 'next/image'
import Link from 'next/link'
import { focalPosition } from '@/lib/focal'

export const formatDate = (date: string) =>
  new Intl.DateTimeFormat('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(date))

const Card = ({ post }: { post: Post }) => {
  const [dayMonth, year] = formatDate(post.publishedDate).split(', ')

  return (
    <Link
      href={`/keep-up-with-us/${post.id}`}
      className={
        'group w-full flex flex-col lg:grid lg:grid-cols-[8rem_300px_1fr_auto] items-start lg:items-center gap-[2vh] lg:gap-[2vw] border-t border-grey-200 last:border-b py-[4vh]'
      }
    >
      <div
        className={
          'flex lg:flex-col justify-start items-baseline lg:items-start gap-[1.5vw] lg:gap-[0.25vh]'
        }
      >
        <small className={'text-[0.82rem] tracking-[0.08em] text-grey-300'}>{dayMonth}</small>
        <small className={'text-[0.82rem] tracking-[0.08em] text-grey-300'}>{year}</small>
      </div>
      <div
        className={
          'relative w-full h-[200px] lg:w-[300px] lg:h-[150px] rounded-[10px] overflow-hidden order-first lg:order-none'
        }
      >
        {typeof post.image !== 'number' && (
          <Image
            src={`${post.image.url}`}
            alt={post.image.alt}
            fill
            sizes={'(min-width: 1024px) 300px, 92vw'}
            style={{ objectPosition: focalPosition(post.image) }}
            className={
              'object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-[filter,transform] duration-700 ease-in-out'
            }
          />
        )}
      </div>
      <div className={'flex flex-col justify-start items-start gap-[1vh]'}>
        {typeof post.category === 'object' && post.category !== null && (
          <small className={'text-[0.68rem] tracking-[0.22em] text-grey-400'}>
            {post.category.name}
          </small>
        )}
        <h3
          className={
            'font-semibold text-[length:clamp(1.15rem,2vw,1.6rem)] leading-snug max-w-[30ch] cursor-pointer'
          }
        >
          {post.title}
        </h3>
        <p className={'font-light text-grey-300 max-w-[60ch] cursor-pointer line-clamp-2'}>
          {post.excerpt}
        </p>
      </div>
      <span
        className={
          'hidden lg:block justify-self-end pr-[1vw] text-xl text-grey-200 group-hover:text-grey-400 group-hover:translate-x-[8px] transition-[color,transform] duration-300 ease-out cursor-pointer'
        }
      >
        →
      </span>
    </Link>
  )
}

export default Card
