import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { HomePage } from '@/pages/HomePage'
import { Blog } from '@/pages/Blog'
import { About } from '@/pages/About'
import { Articles } from '@/pages/Articles'
import { Examples } from '@/pages/Examples'
import MarkdownBlog from './components/MarkDown'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/blog" element={<Blog />} />
				<Route path="/about" element={<About />} />
				<Route path="/articles" element={<MarkdownBlog />} />
				<Route path="/examples" element={<Examples />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
