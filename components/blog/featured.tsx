import type { Post } from '@/payload-types'
import Image from 'next/image'
import Link from 'next/link'
import { formatDate } from '@/components/blog/card'

const Featured = ({ post }: { post: Post }) => (
  <section className={'w-full flex justify-center items-center'}>
    <div
      className={
        'w-full flex flex-col-reverse lg:flex-row justify-center items-center lg:items-stretch rounded-lg overflow-clip drop-shadow-2xl'
      }
    >
      <Link
        href={`/keep-up-with-us/${post.id}`}
        className={
          'w-full lg:w-1/2 flex flex-col justify-center items-start gap-[2vh] bg-grey-50 lg:pl-[4vw] lg:py-[4vh] lg:pr-[2vw] p-[6vw]'
        }
      >
        <div className={'w-full flex justify-start items-baseline gap-[4vw] lg:gap-[1.5vw]'}>
          <small className={'font-bold text-grey-400'}>Latest</small>
          {typeof post.category === 'object' && post.category !== null && (
            <small className={'text-grey-300'}>{post.category.name}</small>
          )}
          <small className={'text-grey-300'}>{formatDate(post.createdAt)}</small>
        </div>
        <h2 className={'cursor-pointer'}>{post.title}</h2>
        <p className={'text-justify cursor-pointer'}>{post.excerpt}</p>
      </Link>
      <Link
        href={`/keep-up-with-us/${post.id}`}
        className={'w-full lg:w-1/2 h-[28vh] lg:h-auto relative overflow-hidden'}
      >
        {typeof post.image !== 'number' && (
          <Image
            src={`${post.image.url}`}
            alt={post.image.alt}
            width={parseInt(`${post.image.width}`)}
            height={parseInt(`${post.image.height}`)}
            className={'object-cover object-center w-full h-full absolute inset-0'}
          />
        )}
      </Link>
    </div>
  </section>
)

export default Featured
