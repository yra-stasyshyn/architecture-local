import type { AppProps } from 'next/app'
import Head from 'next/head'
import GlobalStyles from 'src/styles/global'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>Arquitetura Local</title>
				<link rel="icon" href="/img/favicon.ico" />
			</Head>
			<GlobalStyles />
			<Component {...pageProps} />
		</>
	)
}
