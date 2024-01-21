import { ArrowCircleDown, ArrowCircleUp, PlusCircle } from "@phosphor-icons/react"
import { AddFeedbackButton, Box, HeaderContainer, NumberFeedbacksContainer, OrdererButton, OrdererContainer } from "./styles"
import { useState } from "react"

export function Header() {
    const [feedbacksMostRecent, setFeedbacksMostRecent] = useState(true)

    const handleOrderOfFeedbacks = () => {
        setFeedbacksMostRecent(!feedbacksMostRecent)
    }

    return (
        <HeaderContainer>
            <Box>
                <NumberFeedbacksContainer>
                    <div>
                        <p>3</p>
                    </div>
                    <p>Feedbacks</p>
                </NumberFeedbacksContainer>
                <OrdererContainer>
                    <p>Ordenar por:</p>
                    {
                        feedbacksMostRecent ? (
                            <OrdererButton onClick={handleOrderOfFeedbacks}>
                                <p>Mais recentes</p>
                                <ArrowCircleDown size={24} />
                            </OrdererButton>
                        ) : (
                            <OrdererButton onClick={handleOrderOfFeedbacks}>
                                <p>Mais antigos</p>
                                <ArrowCircleUp size={24} />
                            </OrdererButton>
                        )
                    }
                </OrdererContainer>
            </Box>
            <AddFeedbackButton>
                <PlusCircle size={24} />
                <p>Adicionar Feedback</p>
            </AddFeedbackButton>
        </HeaderContainer>
    )
}