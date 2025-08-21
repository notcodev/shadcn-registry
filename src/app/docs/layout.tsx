import { DocsLayout } from 'fumadocs-ui/layouts/docs'

import { layoutOptions } from '@/lib/layout-options'
import { source } from '@/lib/source'

export default function Layout({ children }: LayoutProps<'/docs'>) {
  return (
    <DocsLayout tree={source.pageTree} {...layoutOptions()}>
      {children}
    </DocsLayout>
  )
}
