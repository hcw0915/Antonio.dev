import { TagsColor } from '@/constants/tags'
import { ArticlesTag } from '@/types/card'
import { timestampToDate } from '@/utils/date'
import styled from 'styled-components'
import tw from 'twin.macro'

const CardContainer = styled.div`
	${tw`w-[20rem] min-h-[27rem] border-2 border-[white] p-2 rounded-xl cursor-pointer`}
	box-shadow: 0px 10px 20px rgba(0,0,0,0.5);
	transition: 0.3s;
	&:hover {
		scale: 1.05;
	}
`

const CardImage = styled.img`
	${tw`w-full rounded-lg`}
`

const CardTitle = styled.div`
	${tw`text-2xl font-bold pt-2`}
`

const CardBadgeWrapper = styled.div`
	${tw`flex items-center w-full gap-[0.1rem]`}
`

const CardBadge = styled.div<{ bgColor: string }>`
	${tw`bg-[red] flex items-center justify-center px-3 m-1 h-[1.5rem] text-[0.875rem] rounded-full`}
	background-color: ${(p) => p.bgColor};
`

const CardTime = styled.div`
	${tw`text-[#c33f21] font-bold w-full flex items-center justify-end mt-1`}
`

const CardDescription = styled.div`
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 3;
	overflow: hidden;
`

type CardProps = {
	imgUrl: string
	title: string
	tags: ArticlesTag[]
	description: string
	publishTime: number
}

export const Card = (props: CardProps) => {
	const {
		imgUrl = 'https://fakeimg.pl/320x280/',
		title = '測試',
		tags = ['Javascript', 'React', 'Vue', 'CSS'],
		description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, ipsa, Consequuntur, ipsa!r sit amet consectetur, ipsa, Consequuntur, ipsa!r sit amet consectetur',
		publishTime = 1349856000000
	} = props

	const time = timestampToDate(publishTime)

	return (
		<CardContainer>
			<CardImage src={imgUrl} />
			<CardTitle>{title}</CardTitle>
			<CardBadgeWrapper>
				{tags.map((tag) => (
					<CardBadge key={tag} bgColor={TagsColor[tag]}>
						{tag}
					</CardBadge>
				))}
			</CardBadgeWrapper>
			<CardDescription>{description}</CardDescription>
			<CardTime>{time}</CardTime>
		</CardContainer>
	)
}
