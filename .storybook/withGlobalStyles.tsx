import GlobalStyles from "../src/styles/global"


// @ts-ignore
const withGlobalStyles = (Story) => (
	<>
		<GlobalStyles />
		{Story()}
	</>
)


export default withGlobalStyles
