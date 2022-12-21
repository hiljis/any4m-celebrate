/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			boxShadow: {
				'3xl': '0 0 40px 10px rgba(0, 144, 255, 0.25)',
				insideBlue: 'inset 0 -6px 6px 0 rgba(0, 144, 255, 0.5)',
			},
			keyframes: {
				shadowPulse: {
					'0%, 100%': {
						width: '19rem',
						height: '19rem',
						'box-shadow': '0 0 40px 10px rgba(0, 144, 255, 0.25)',
					},
					'50%': {
						width: '20rem',
						height: '20rem',
						'box-shadow': '0 0 1px 1px rgba(0, 144, 255, 0.25)',
					},
				},
			},
			animation: {
				shadowPulse: 'shadowPulse 2s ease-in-out infinite',
			},
		},
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			white: '#ffffff',
			black: '#000000',
			'any4m-blue': {
				DEFAULT: '#0090FF',
				20: 'rgba(0, 144, 255, 0.2)',
				25: 'rgba(0, 144, 255, 0.25)',
				50: 'rgba(0, 144, 255, 0.5)',
			},
		},
		fontSize: {
			sm: '1.6rem',
			md: '2.1rem',
			lg: '2.1',
			xl: '',
			base: '1rem',
		},
	},
	plugins: [],
};
