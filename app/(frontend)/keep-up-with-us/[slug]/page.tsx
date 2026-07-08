import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import dynamicImport from 'next/dynamic'
import Image from 'next/image'
import { RichText } from '@payloadcms/richtext-lexical/react'
import { getPost, getPosts } from '@/app/(frontend)/actions/posts'
import Card, { formatDate } from '@/components/blog/card'

import View from '@/components/ui/view'

const Footer = dynamicImport(() => import('@/components/ui/footer'))

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> => {
  const post = await getPost((await params).slug)
  if (!post) return {}
  const image = typeof post.image !== 'number' ? post.image : null
  return {
    title: `${post.title} | FliteWatch`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.createdAt,
      ...(image?.url && {
        images: [
          {
            url: image.url,
            ...(image.width && { width: image.width }),
            ...(image.height && { height: image.height }),
            alt: image.alt,
          },
        ],
      }),
    },
  }
}

const Article = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const post = await getPost((await params).slug)
  if (!post) notFound()

  const others = (await getPosts()).filter((other) => other.id !== post.id).slice(0, 3)

  return (
    <main className={'w-full flex flex-col items-center overflow-hidden justify-start'}>
      <View />
      <section className={'w-[92vw] h-[32vh] md:h-[52vh] lg:h-[64vh] mt-[4rem]'}>
        {typeof post.image !== 'number' && (
          <Image
            src={`${post.image.url}`}
            alt={post.image.alt}
            width={parseInt(`${post.image.width}`)}
            height={parseInt(`${post.image.height}`)}
            className={'w-full h-full object-cover object-center rounded-lg drop-shadow-2xl'}
            priority
          />
        )}
      </section>
      <article
        className={
          'containerize md:w-[64vw] lg:w-[56vw] my-[8vh] flex flex-col justify-start items-start gap-[4vh]'
        }
      >
        <header className={'w-full flex flex-col justify-start items-start gap-[1vh]'}>
          <div className={'w-full flex justify-start items-baseline gap-[4vw] lg:gap-[1.5vw]'}>
            {typeof post.category === 'object' && post.category !== null && (
              <small className={'font-bold text-grey-400 cursor-default'}>
                {post.category.name}
              </small>
            )}
            <small className={'text-grey-300 cursor-default'}>{formatDate(post.createdAt)}</small>
          </div>
          <h1>{post.title}</h1>
          <p className={'text-grey-400'}>{post.excerpt}</p>
        </header>
        <RichText
          data={post.fullContent}
          className={
            'w-full flex flex-col gap-[2vh] [&_a]:underline [&_ul]:list-disc [&_ul]:pl-4 [&_ol]:list-decimal [&_ol]:pl-4 [&_blockquote]:border-l-2 [&_blockquote]:border-grey-300 [&_blockquote]:pl-4'
          }
        />
      </article>
      {others.length > 0 && (
        <section className={'containerize flex flex-col justify-start items-start'}>
          <small className={'text-xs tracking-[0.28em] text-grey-300 cursor-default mb-[2vh]'}>
            More news
          </small>
          <div className={'w-full flex flex-col'}>
            {others.map((other) => (
              <Card key={other.id} post={other} />
            ))}
          </div>
        </section>
      )}
      <Footer />
    </main>
  )
}

export default Article
