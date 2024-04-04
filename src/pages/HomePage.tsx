import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import styled, { css } from 'styled-components'
import tw from 'twin.macro'

const LinksContainer = styled.div<{}>`
	${tw`relative w-[23.75rem] h-[23.75rem] flex justify-center items-center`}
`

const LinkMainSection = styled.div<{ isOpen: boolean }>`
	${tw`relative w-[6.25rem] h-[6.25rem] flex justify-center items-center border-2 border-[#919191] rounded-full cursor-pointer`}
	user-select:none;
	transition: 0.5s;
	transform: ${(p) => (p.isOpen ? `rotate(360deg)` : '0')};
	&:hover {
		scale: 1.1;
	}
`

const LinkItem = styled.li<{ idx: number; isOpen: boolean }>`
	${tw`absolute list-none`};
	opacity: ${(p) => (p.isOpen ? 0 : 1)};

	left: ${(p) => (p.isOpen ? '9.375rem' : 0)};
	transform-origin: ${(p) => (p.isOpen ? '2.5rem' : '11.875rem')};
	transition: 0.5s;
	transform: ${(p) => `rotate(calc(360deg / 4 * ${p.idx}));`};

	&:hover {
		scale: 1.1;
	}
`

const Link = styled.a<{ bgColor: string; idx: number; isOpen: boolean }>`
	${tw`relative font-bold flex justify-center items-center w-[5rem] h-[5rem] rounded-full text-[#000000] translate-x-1/2 translate-y-1/2 `}
	background-color: ${(p) => p.bgColor};
	opacity: 1;
	transform: ${(p) =>
		p.isOpen ? 'none' : `rotate(calc(360deg / -4 * ${p.idx}))`};
	transition: 0.5s;
	box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.5);
`

const navConfig = [
	{
		id: 0,
		title: 'Blog',
		bgColor: '#ff0000',
		subBgColor: '#ffcccc',
		url: '/blog'
	},
	{
		id: 1,
		title: 'Articles',
		bgColor: '#1877f2',
		subBgColor: '#9fc4ff',
		url: '/articles'
	},
	{
		id: 2,
		title: 'Examples',
		bgColor: '#ffc72e',
		subBgColor: '#fff3c4',
		url: '/examples'
	},
	{
		id: 3,
		title: 'About',
		bgColor: '#25d366',
		subBgColor: '#a8f5c4',
		url: '/about'
	}
]

export const HomePage = () => {
	const [isOpen, setIsOpen] = useState<boolean>(true)

	const handleOpen = () => {
		setIsOpen((prev) => !prev)
	}

	const handleMouseEnter = (id: number) => {
		if (document.body) {
			document.body.style.background = navConfig[id].subBgColor
			document.body.style.transition = '.8s'
		}
	}

	const handleMouseLeave = () => {
		if (document.body) {
			document.body.style.background = 'none'
		}
	}

	return (
		<LinksContainer>
			{navConfig.map((item, idx) => {
				return (
					<LinkItem
						key={item.title}
						idx={idx}
						isOpen={isOpen}
						onMouseEnter={() => handleMouseEnter(item.id)}
						onMouseLeave={handleMouseLeave}
					>
						<Link
							href={item.url}
							idx={idx}
							bgColor={item.bgColor}
							isOpen={isOpen}
						>
							{item.title}
						</Link>
					</LinkItem>
				)
			})}

			<LinkMainSection onClick={handleOpen} isOpen={isOpen}>
				Click Me!
			</LinkMainSection>
		</LinksContainer>
	)
}
