import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
	assetsInclude: ['**/*.md'],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src/')
		}
	},
	plugins: [
		svgr(),
		react({
			babel: {
				plugins: ['babel-plugin-macros', 'babel-plugin-styled-components']
			}
		})
	]
})
