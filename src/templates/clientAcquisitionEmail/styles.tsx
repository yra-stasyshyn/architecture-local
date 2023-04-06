import THEME from '@/styles/theme'

export const Main = {
	fontFamily: "'Source Pro', sans-serif",
	margin: 0,
	padding: 0,
	backgroundColor: THEME.colors.secondaryColor
}

export const Container = {
	padding: '80px 40px 80px 40px',
	minWidth: 320,
	width: '100%',
	maxWidth: 800,
	color: THEME.colors.primaryColor
}

export const Heading = {
	fontSize: THEME.fontSize.title2Desktop,
	fontWeight: 700,
	color: THEME.colors.primaryColor
}

export const FormItem = {
	fontSize: THEME.fontSize.textDesktop,
	borderBottom: `1px solid ${THEME.colors.accentColor}`,
	paddingBottom: 5
}

export const Paragraph = {
	fontSize: THEME.fontSize.textDesktop,
	paddingBottom: 5
}

export const ImageContainer = {
	display: 'flex',
	justifyContent: 'center',
	marginBottom: 100
}

export const Button = {
	marginTop: 20
}
