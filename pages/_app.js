import { useRouter } from 'next/router'
import '../styles/globals.css'
import Head from 'next/head'

const App = ({ Component, pageProps }) => {
  const router = useRouter()

  return (
    <div key={router.pathname}>
      <Head>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0, viewport-fit=cover'
        />
      </Head>
      <Component {...pageProps} />
    </div>
  )
}

export default App
