import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import MinimalisticLogo from './index'
import THEME from '@/styles/theme'

describe('Logo', () => {
	describe('with default props', () => {
		let wrapper: HTMLElement
		let circles: NodeListOf<Element>
		let firstL: ChildNode | null
		let finalL: ChildNode | null

		beforeEach(() => {
			wrapper = render(<MinimalisticLogo />).container.firstChild as HTMLElement
			firstL = wrapper.firstChild
			circles = wrapper.querySelectorAll(
				'div:nth-of-type(n+2):nth-of-type(-n+4)'
			)
			finalL = wrapper.lastChild
		})

		test('renders 5 child elements', () => {
			// Arrange & Act are done in beforeEach

			// Assert
			expect(wrapper.childElementCount).toEqual(5)
		})

		test('renders a rectangle as the first child', () => {
			// Arrange & Act are done in beforeEach

			// Assert
			expect(firstL).toHaveStyle('width: 26px')
			expect(firstL).toHaveStyle('height: 100px')
			expect(firstL).toHaveStyle(
				`background-color: ${THEME.colors.secondaryColor}`
			)
		})

		test('renders 3 circles with the same properties as the second, third and fourth child elements', () => {
			// Arrange & Act are done in beforeEach

			// Assert
			expect(circles.length).toEqual(3)

			circles.forEach((circle) => {
				expect(circle).toHaveStyle('width: 64px')
				expect(circle).toHaveStyle('height: 64px')
				expect(wrapper.firstChild).toHaveStyle(
					`background-color: ${THEME.colors.secondaryColor}`
				)
				expect(circle).toHaveStyle('border-radius: 50%')
			})
		})

		test(
			'renders the last child element as a rectangle with the same' +
				' properties as the first child element',
			() => {
				// Arrange & Act are done in beforeEach

				// Assert
				expect(finalL).toHaveStyle('width: 26px')
				expect(finalL).toHaveStyle('height: 100px')
				expect(finalL).toHaveStyle(
					`background-color: ${THEME.colors.secondaryColor}`
				)
			}
		)
	})

	describe('with custom props', () => {
		let wrapper: Element
		let circles: NodeListOf<Element>
		let firstL: ChildNode | null
		let finalL: ChildNode | null
		const mockOnClick = jest.fn()

		beforeEach(() => {
			wrapper = render(
				<MinimalisticLogo
					sizeMultiplier={2}
					color="#ff0000"
					highlightColorOnHover="black"
					onClick={mockOnClick}
				/>
			).container.firstChild as HTMLElement
			firstL = wrapper.firstChild
			circles = wrapper.querySelectorAll(
				'div:nth-of-type(n+2):nth-of-type(-n+4)'
			)
			finalL = wrapper.lastChild
		})

		test('change color on hover', () => {
			// Arrange done in beforeEach

			// Act - simulate mouse hover
			fireEvent.mouseOver(wrapper)

			// Assert
			expect(firstL).toHaveStyle('background-color: black;')
			circles.forEach((circle) => {
				expect(circle).toHaveStyle('background-color: black;')
			})
			expect(finalL).toHaveStyle('background-color: black;')
		})

		test('activate function on click', () => {
			// Arrange done in beforeEach

			// Act - simulate mouse hover
			fireEvent.click(wrapper)

			// Assert
			expect(mockOnClick).toHaveBeenCalled()
		})

		test('renders 5 child elements', () => {
			// Arrange & Act are done in beforeEach

			// Assert
			expect(wrapper.childElementCount).toEqual(5)
		})

		test('renders a rectangle with custom properties as the first child', () => {
			// Arrange & Act are done in beforeEach

			// Assert
			expect(firstL).toHaveStyle('width: 52px')
			expect(firstL).toHaveStyle('height: 200px')
			expect(firstL).toHaveStyle('background-color: #ff0000')
		})

		test('renders 3 circles with custom properties as the second, third and fourth child elements', () => {
			// Arrange & Act are done in beforeEach

			// Assert
			expect(circles.length).toEqual(3)

			circles.forEach((circle) => {
				expect(circle).toHaveStyle('width: 128px')
				expect(circle).toHaveStyle('height: 128px')
				expect(circle).toHaveStyle('background-color: #ff0000')
				expect(circle).toHaveStyle('border-radius: 50%')
			})
		})

		test('renders the last child element as a rectangle with custom properties as the first child', () => {
			// Arrange & Act are done in beforeEach

			// Assert
			expect(finalL).toHaveStyle('width: 52px')
			expect(finalL).toHaveStyle('height: 200px')
			expect(finalL).toHaveStyle('background-color: #ff0000')
		})
	})
})
