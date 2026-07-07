import type { Post } from '@/payload-types'
import Image from 'next/image'
import Link from 'next/link'

export const formatDate = (date: string) =>
  new Intl.DateTimeFormat('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(date))

const Card = ({ post }: { post: Post }) => (
  <Link
    href={`/keep-up-with-us/${post.id}`}
    className={
      'group w-full flex flex-col justify-start items-stretch bg-grey-50 rounded-lg overflow-clip drop-shadow-2xl'
    }
  >
    <div className={'w-full h-[24vh] overflow-hidden'}>
      {typeof post.image !== 'number' && (
        <Image
          src={`${post.image.url}`}
          alt={post.image.alt}
          width={parseInt(`${post.image.width}`)}
          height={parseInt(`${post.image.height}`)}
          className={
            'object-cover object-center w-full h-full group-hover:scale-105 transition-transform duration-500 ease-in-out'
          }
        />
      )}
    </div>
    <div className={'w-full flex flex-col justify-start items-start gap-[1vh] p-[6vw] lg:p-[2vw]'}>
      <div className={'w-full flex justify-between items-baseline gap-[2vw] lg:gap-[1vw]'}>
        <small className={'font-bold text-grey-400'}>
          {typeof post.category === 'object' && post.category !== null ? post.category.name : ''}
        </small>
        <small className={'text-grey-300'}>{formatDate(post.createdAt)}</small>
      </div>
      <h3 className={'cursor-pointer'}>{post.title}</h3>
      <p className={'text-justify cursor-pointer line-clamp-3'}>{post.excerpt}</p>
    </div>
  </Link>
)

export default Card
