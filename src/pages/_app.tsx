import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import localFont from 'next/font/local'
import Sidebar from '@/components/Sidebar'

const generalSans = localFont({
  src: [
    {
      path: '../../public/fonts/GeneralSans-Regular.otf',
      weight: '400'
    },
    {
      path: '../../public/fonts/GeneralSans-Medium.otf',
      weight: '600'
    }
  ],
  variable: '--font-generalSans'
})


export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${generalSans.variable} font-sans`}>
      <Sidebar>
        <Component {...pageProps} />
      </Sidebar>
    </main>
  )
}
