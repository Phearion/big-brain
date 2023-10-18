import { defineConfig, presetTypography, presetUno } from 'unocss';

export default defineConfig({
	theme: {
		colors: {
			blurple: {
				50: '#e0e3ff',
				100: '#cdd2ff',
				200: '#9ea7ff',
				300: '#7782fa',
				DEFAULT: '#5865F2',
				500: '#3d48c3',
				600: '#293294',
				700: '#1a2165',
				800: '#0e1137',
				900: '#020208',
			},
		},
		fontFamily: {
			sans: 'var(--font-inter)',
			mono: 'var(--font-mono)',
		},
	},
	presets: [
		presetUno({ dark: 'class' }),
		presetTypography({
			cssExtend: {
				pre: {
					padding: '1em',
					'line-height': '1.5',
					'border-radius': '4px',
				},
				code: {
					'font-size': '1em',
					'font-weight': 'unset',
				},
				':where(:not(pre) > code)::before': {
					content: '""',
				},
				':where(:not(pre) > code)::after': {
					content: '""',
				},
				a: {
					color: '#5865F2',
					'text-decoration': 'none',
				},
				'a > img': {
					display: 'inline-block',
				},
				'a > img[height="44"]': {
					height: '44px',
				},
				h1: {
					display: 'flex',
					'place-items': 'center',
					'scroll-margin-top': '6.5rem',
				},
				h2: {
					display: 'flex',
					'place-items': 'center',
					'margin-top': '1.25em',
					'scroll-margin-top': '6.5rem',
				},
				h3: {
					display: 'flex',
					'place-items': 'center',
					'margin-top': '1.25em',
					'scroll-margin-top': '6.5rem',
				},
				h4: {
					display: 'flex',
					'place-items': 'center',
					'margin-top': '1.25em',
					'scroll-margin-top': '6.5rem',
				},
				// eslint-disable-next-line id-length
				p: {
					margin: '.5em 0',
				},
			},
		}),
	],
});
