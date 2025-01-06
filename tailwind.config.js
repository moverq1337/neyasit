/* tailwind.config.cjs */
/** @type {import('tailwindcss').Config} */
const { nextui } = require('@nextui-org/react')

module.exports = {
	content: [
		'./index.html',
		'./src/**/*.{js,ts,jsx,tsx},',
		'./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		fontSize: {
			big: '1.875rem',
			base: '0.978rem',
		},
	},
	darkMode: 'class',
	plugins: [nextui()],
}
