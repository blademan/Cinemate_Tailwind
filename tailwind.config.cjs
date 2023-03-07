/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			screens: {
				other: { min: '340px', max: '1200px' },
			},
			colors: {
				darkbg: '#1E293B',
				blue: {
					850: '#1e40af',
				},
			},
		},
	},
	plugins: [require('flowbite/plugin')],
}
