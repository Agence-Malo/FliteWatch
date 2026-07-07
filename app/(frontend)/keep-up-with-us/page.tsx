import dynamicImport from 'next/dynamic'
import { getCategories, getPosts } from '@/app/(frontend)/actions/posts'

import View from '@/components/ui/view'

const Listing = dynamicImport(() => import('@/components/blog/listing'))
const Footer = dynamicImport(() => import('@/components/ui/footer'))

const KeepUpWithUs = async () => (
  <main className={'w-full flex flex-col items-center overflow-hidden justify-start'}>
    <View />
    <Listing posts={await getPosts()} categories={await getCategories()} />
    <Footer />
  </main>
)

export default KeepUpWithUs

export const dynamic = 'force-dynamic';
