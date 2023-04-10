import styled from 'styled-components'
import THEME from '@/styles/theme'

export const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
	padding: 8px;
	gap: 4px;

	> svg {
		&:hover {
			color: ${THEME.colors.accentColor};
		}
	}
`
