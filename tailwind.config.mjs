/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
        'dark-irish-green': '#004225', // Custom dark Irish green color
      },
			fontFamily: {
        serif: ['Times New Roman', 'serif'], // Setting Times New Roman as the default serif font
      },
    }
	},
	plugins: [],
}
