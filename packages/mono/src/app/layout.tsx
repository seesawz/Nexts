import { init } from '@/app/init'
import PKG from '../../package.json'
import type { AppThemeConfig } from './config'
import { Viewport } from 'next'
import { getQueryClient } from '@/lib/query-client.server'


const { version } = PKG
init()

export const revalidate = 60

//聚合对象
let aggregationDate: { theme: AppThemeConfig } | null = null

/* 
    viewport 会合并到meta标签 key值为name value值为content
    可以使用静态 viewport 对象或动态 generateViewport 函数自定义页面的初始视口。
    export const viewport: Viewport = {xxx}
 */
export function generateViewport(): Viewport {
  return {
    themeColor: [
      { media: '(prefers-color-scheme: dark)', color: '#000212' },
      { media: '(prefers-color-scheme: light)', color: '#fafafa' },
    ],
  }
}

export function generateMeta() {
  const apiClient = getQueryClient()
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  )
}
