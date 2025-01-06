const { nextui } = require('@nextui-org/theme')

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/**/*.{js,ts,jsx,tsx,mdx}',
		'./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
	],
	darkMode: 'class',
	theme: {
		extend: {
			fontSize: {
				xs: ['12px', '20px'], //
				sm: ['14px', '20px'], //
				base: ['15px', '24px'], // norm
				big: ['30px', '28px'], // big
				xl: ['20px', '30px'],
				'2xl': ['32px', '40px'],
				cardtitle: ['54px', '30px'],
			},
		},
	},
	plugins: [
		nextui({
			layout: {
				fontSize: {
					xs: ['12px', '20px'],
					sm: ['14px', '20px'],
					base: ['16px', '24px'],
					lg: ['18px', '28px'],
					xl: ['20px', '30px'],
					'2xl': ['32px', '40px'],
				},
			},
			themes: {
				light: {
					colors: {
						white: '#FFFFFF',
						black: '#000000',
						navColor: '#0D1618',
						selectedLinkNav: '#96FFF8',
					},
				},
			},
		}),
	],
}
