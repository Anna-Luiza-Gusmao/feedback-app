import { ChatCircleDots } from "@phosphor-icons/react"
import { CommentBox, FeedbackContainer, FeedbackData, FeedbackDescription, FeedbackId, Tag } from "./styles"

interface FeedbackBoxProps {
    tagsName: Array<string>
}

export function FeedbackBox({tagsName}: FeedbackBoxProps) {
    return (
        <FeedbackContainer>
            <FeedbackData>
                <FeedbackId>1</FeedbackId>
                <FeedbackDescription>
                    <p>Bug ao fazer login no sistema.</p>
                    <p>Ao tentar logar no sistema não consegui acessar e nenhuma mensagem de erro apareceu.</p>
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
                <p>2</p>
            </CommentBox>
        </FeedbackContainer>
    )
}