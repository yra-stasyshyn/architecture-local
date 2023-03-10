import React from 'react'
import { render } from '@testing-library/react'
import Logo from './index'
import THEME from '@/styles/theme'

describe('Logo', () => {
	describe('with default props', () => {
		let wrapper: HTMLElement

		beforeEach(() => {
			wrapper = render(<Logo />).container.firstChild as HTMLElement
		})

		test('renders 5 child elements', () => {
			// Arrange & Act are done in beforeEach

			// Assert
			expect(wrapper.childElementCount).toEqual(5)
		})

		test('renders a rectangle as the first child', () => {
			// Arrange & Act are done in beforeEach

			// Assert
			expect(wrapper.firstChild).toHaveStyle('width: 26px')
			expect(wrapper.firstChild).toHaveStyle('height: 100px')
			expect(wrapper.firstChild).toHaveStyle(
				`background-color: ${THEME.colors.secondaryColor}`
			)
		})

		test('renders 3 circles with the same properties as the second, third and fourth child elements', () => {
			// Arrange & Act are done in beforeEach

			// Assert
			const circles = wrapper.querySelectorAll(
				'div:nth-of-type(n+2):nth-of-type(-n+4)'
			)
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
				expect(wrapper.lastChild).toHaveStyle('width: 26px')
				expect(wrapper.lastChild).toHaveStyle('height: 100px')
				expect(wrapper.firstChild).toHaveStyle(
					`background-color: ${THEME.colors.secondaryColor}`
				)
			}
		)
	})

	describe('with custom props', () => {
		let wrapper: HTMLElement

		beforeEach(() => {
			wrapper = render(<Logo sizeMultiplier={2} color="#ff0000" />).container
				.firstChild as HTMLElement
		})

		test('renders 5 child elements', () => {
			// Arrange & Act are done in beforeEach

			// Assert
			expect(wrapper.childElementCount).toEqual(5)
		})

		test('renders a rectangle with custom properties as the first child', () => {
			// Arrange & Act are done in beforeEach

			// Assert
			expect(wrapper.firstChild).toHaveStyle('width: 52px')
			expect(wrapper.firstChild).toHaveStyle('height: 200px')
			expect(wrapper.firstChild).toHaveStyle('background-color: #ff0000')
		})

		test('renders 3 circles with custom properties as the second, third and fourth child elements', () => {
			// Arrange & Act are done in beforeEach

			// Assert
			const circles = wrapper.querySelectorAll(
				'div:nth-of-type(n+2):nth-of-type(-n+4)'
			)
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
			expect(wrapper.lastChild).toHaveStyle('width: 52px')
			expect(wrapper.lastChild).toHaveStyle('height: 200px')
			expect(wrapper.lastChild).toHaveStyle('background-color: #ff0000')
		})
	})
})
