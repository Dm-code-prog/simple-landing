import '@/styles/globals.css'
import '@/styles/main.scss'
import { Layout } from '@/components/dom/Layout'

export const metadata = {
  title: 'Simple',
  description: 'Simple crypto payments by phone number',
  viewport: 'width=device-width, initial-scale=1',
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head />
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
