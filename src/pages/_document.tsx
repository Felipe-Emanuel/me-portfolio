import { Html, Head, Main, NextScript } from 'next/document'
import { useRouter } from 'next/router'

export default function Document() {
  // const router = useRouter()
  // const paths = router.pathname


  // const title = paths === '/' ? 'Portfólio Felipe Emanuel' : `Portfólio - ${paths}`
  

  return (
    <Html lang="pt-br">
      <Head />
      <body>
        <Main />
        <NextScript />
        <title>Portfólio Felipe Emanuel</title>
      </body>
    </Html>
  )
}
