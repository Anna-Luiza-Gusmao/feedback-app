import { ChatCircleDots } from "@phosphor-icons/react"
import { CommentBox, FeedbackContainer, FeedbackData, FeedbackDescription, FeedbackId, Tag } from "./styles"

interface FeedbackBoxProps {
    index: number
    title: string
    description: string
    status: 'opened' | 'inProgress' | 'concluded'
    tagsName: Array<string>
}

export function FeedbackBox({ index, title, description, tagsName }: FeedbackBoxProps) {
    return (
        <FeedbackContainer>
            <FeedbackData>
                <FeedbackId>{index}</FeedbackId>
                <FeedbackDescription>
                    <p>{title}</p>
                    <p>{description}</p>
                    <section>
                        {
                            tagsName.map((tag, index) => (
                                <Tag key={index}>{tag}</Tag>
                            ))
                        }
                    </section>
                </FeedbackDescription>
            </FeedbackData>
            <CommentBox>
                <ChatCircleDots size={20} />
                <p>0</p>
            </CommentBox>
        </FeedbackContainer>
    )
}