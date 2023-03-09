import type { AppProps } from 'next/app'
import Head from 'next/head'
import GlobalStyles from 'src/styles/global'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title> React Avançado - BoilerPlate</title>
				<link rel="shortcut icon" href="/public/img/next.svg" />
				<link rel="apple-touch-icon" href="/public/img/next.svg" />
				<link rel="manifest" href="/manifest.json" />
				<meta
					name="description"
					content="A simple project Starter to work with Typescript, React,
				 Next JS, and Styled Components"
				/>
				<meta name="theme-color" content="#FFFFFF" />
			</Head>
			<GlobalStyles />
			<Component {...pageProps} />
		</>
	)
}
