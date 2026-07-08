import type { Post } from '@/payload-types'
import Image from 'next/image'
import Link from 'next/link'
import { formatDate } from '@/components/blog/card'

const Meta = ({ post, light }: { post: Post; light?: boolean }) => (
  <div className={'flex justify-start items-baseline gap-[2vw] lg:gap-[0.75vw]'}>
    {typeof post.category === 'object' && post.category !== null && (
      <small
        className={`${light ? 'text-xs tracking-[0.2em] text-grey-200' : 'text-[0.68rem] tracking-[0.22em] text-grey-400'}`}
      >
        {post.category.name}
      </small>
    )}
    <small
      className={`${light ? 'text-xs tracking-[0.2em] text-grey-200' : 'text-[0.68rem] tracking-[0.22em] text-grey-400'}`}
    >
      {formatDate(post.createdAt)}
    </small>
  </div>
)

const Hero = ({ posts }: { posts: Post[] }) => {
  const [latest, ...rows] = posts.slice(0, 3)

  return (
    <div className={'w-full flex flex-col lg:flex-row justify-start items-stretch gap-[4vh] lg:gap-[2vw]'}>
      <Link
        href={`/keep-up-with-us/${latest.id}`}
        className={`group relative w-full ${rows.length > 0 ? 'lg:w-[55%]' : ''} min-h-[340px] h-[40vh] flex flex-col justify-end rounded-[12px] overflow-hidden drop-shadow-2xl`}
      >
        {typeof latest.image !== 'number' && (
          <Image
            src={`${latest.image.url}`}
            alt={latest.image.alt}
            fill
            sizes={'(min-width: 1024px) 55vw, 92vw'}
            className={
              'object-cover object-center grayscale group-hover:grayscale-0 group-hover:scale-[1.03] transition-[filter,transform] duration-[800ms] ease-in-out'
            }
          />
        )}
        <div
          className={'absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.8),transparent_62%)]'}
        />
        <div
          className={'relative w-full flex flex-col justify-end items-start gap-[1.5vh] p-[6vw] lg:p-[2vw]'}
        >
          <div className={'flex justify-start items-baseline gap-[2vw] lg:gap-[0.75vw]'}>
            <small className={'text-xs tracking-[0.2em] text-grey-200'}>Latest</small>
            <Meta post={latest} light />
          </div>
          <h3
            className={
              'text-white font-semibold text-[length:clamp(1.25rem,2.2vw,1.8rem)] leading-snug max-w-[24ch] cursor-pointer'
            }
          >
            {latest.title}
          </h3>
        </div>
      </Link>
      {rows.length > 0 && (
        <div className={'w-full lg:w-[45%] flex flex-col justify-between'}>
          {rows.map((post) => (
            <Link
              key={post.id}
              href={`/keep-up-with-us/${post.id}`}
              className={
                'group flex-1 w-full flex justify-between items-center gap-[2vw] border-t border-grey-200 last:border-b py-[3vh] lg:py-[2vh]'
              }
            >
              <div className={'flex flex-col justify-center items-start gap-[1vh]'}>
                <Meta post={post} />
                <h3
                  className={
                    'font-semibold text-base md:text-lg leading-snug max-w-[30ch] cursor-pointer'
                  }
                >
                  {post.title}
                </h3>
              </div>
              <span
                className={
                  'text-xl text-grey-200 group-hover:text-grey-400 group-hover:translate-x-[7px] transition-[color,transform] duration-300 ease-out cursor-pointer'
                }
              >
                →
              </span>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

const Trio = ({ posts }: { posts: Post[] }) => (
  <div className={'w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[2vw] gap-y-[6vh]'}>
    {posts.slice(0, 3).map((post) => (
      <Link
        key={post.id}
        href={`/keep-up-with-us/${post.id}`}
        className={'group w-full flex flex-col justify-start items-start gap-[1.5vh]'}
      >
        <div className={'relative w-full h-[210px] rounded-[12px] overflow-hidden'}>
          {typeof post.image !== 'number' && (
            <Image
              src={`${post.image.url}`}
              alt={post.image.alt}
              fill
              sizes={'(min-width: 1024px) 30vw, 92vw'}
              className={
                'object-cover object-center grayscale group-hover:grayscale-0 group-hover:scale-105 transition-[filter,transform] duration-700 ease-in-out'
              }
            />
          )}
        </div>
        <Meta post={post} />
        <h3
          className={
            'font-semibold text-base md:text-lg leading-snug max-w-[30ch] group-hover:opacity-[0.72] transition-opacity duration-300 ease-in-out cursor-pointer'
          }
        >
          {post.title}
        </h3>
        <small className={'text-xs tracking-[0.2em] text-black'}>
          Read more{' '}
          <span
            className={
              'inline-block text-grey-400 group-hover:translate-x-[7px] transition-transform duration-300 ease-out'
            }
          >
            →
          </span>
        </small>
      </Link>
    ))}
  </div>
)

const Teaser = ({ posts, variant }: { posts: Post[]; variant: 'hero' | 'trio' }) => {
  if (posts.length === 0) return null

  return (
    <section className={'containerize my-[8vh] flex flex-col justify-start items-start'}>
      <div
        className={
          'w-full mb-[4vh] flex flex-col lg:flex-row justify-between items-start lg:items-end gap-[2vh]'
        }
      >
        <div className={'flex flex-col justify-start items-start gap-[1vh]'}>
          <small className={'text-xs tracking-[0.28em] text-grey-300 cursor-default'}>
            Journal
          </small>
          <h2 className={'font-light text-[length:clamp(1.9rem,3.5vw,2.8rem)] leading-tight'}>
            Keep up with us
          </h2>
        </div>
        <Link
          href={'/keep-up-with-us'}
          className={'group flex justify-start items-baseline gap-[0.5em] lg:pb-[0.4rem]'}
        >
          <small className={'text-xs tracking-[0.2em] font-semibold text-black'}>
            View all stories
          </small>
          <span
            className={
              'text-grey-400 group-hover:translate-x-[7px] transition-transform duration-300 ease-out cursor-pointer'
            }
          >
            →
          </span>
        </Link>
      </div>
      {variant === 'hero' ? <Hero posts={posts} /> : <Trio posts={posts} />}
    </section>
  )
}

export default Teaser
