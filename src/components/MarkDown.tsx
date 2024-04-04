import React, { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import README from './README.md'

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { atomDark as theme } from 'react-syntax-highlighter/dist/esm/styles/prism'

const MarkdownBlog = () => {
	const [markdownContent, setMarkdownContent] = useState('')

	useEffect(() => {
		// 从服务器获取 Markdown 文件的内容，这里可以使用任何方式获取你的 Markdown 内容
		fetch(README)
			.then((response) => response.text())
			.then((text) => {
				setMarkdownContent(text)
			})
	}, [])

	return (
		<div className="blog-content">
			{/* <ReactMarkdown /> */}
			<ReactMarkdown
				className={'prose'}
				remarkPlugins={[remarkGfm]}
				children={markdownContent}
				components={{
					code(props) {
						const { children, className, node, ...rest } = props
						const match = /language-(\w+)/.exec(className || '')
						return match ? (
							<SyntaxHighlighter
								{...rest}
								PreTag="div"
								children={String(children).replace(/\n$/, '')}
								language={match[1]}
								style={theme}
							/>
						) : (
							<code {...rest} className={className}>
								{children}
							</code>
						)
					}
				}}
			/>
		</div>
	)
}

export default MarkdownBlog
