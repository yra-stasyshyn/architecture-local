import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Button, { ButtonProps } from './index'
import 'jest-styled-components'
import THEME from '@/styles/theme'

describe('Button', () => {
	const defaultProps: ButtonProps = {
		onClick: jest.fn(),
		children: 'Click me!'
	}

	it('renders with default props', () => {
		// Arrange
		const { getByRole } = render(<Button {...defaultProps} />)

		// Act
		const button = getByRole('button')

		// Assert
		expect(button).toBeInTheDocument()
		expect(button).toHaveTextContent('Click me!')
		expect(button).toHaveStyleRule('background-color', 'transparent')
		expect(button).toHaveStyleRule('color', THEME.colors.primaryColor)
	})

	it('renders with custom props', () => {
		// Arrange
		const customProps: ButtonProps = {
			bgColor: 'red',
			textColor: 'white',
			colorOnHover: 'blue',
			fontSize: 20,
			onClick: jest.fn(),
			children: 'Custom button'
		}
		const { getByRole } = render(<Button {...customProps} />)

		// Act
		const button = getByRole('button')

		// Assert
		expect(button).toBeInTheDocument()
		expect(button).toHaveTextContent('Custom button')
		expect(button).toHaveStyleRule('background-color', 'red')
		expect(button).toHaveStyleRule('color', 'white')

		// Act - simulate mouse hover
		fireEvent.mouseOver(button)

		// Assert - check hover styles
		expect(button).toHaveStyleRule('color', 'blue', { modifier: ':hover' })
	})

	it('calls onClick when clicked', () => {
		// Arrange
		const { getByRole } = render(<Button {...defaultProps} />)

		// Act
		const button = getByRole('button')
		fireEvent.click(button)

		// Assert
		expect(defaultProps.onClick).toHaveBeenCalled()
	})
})
