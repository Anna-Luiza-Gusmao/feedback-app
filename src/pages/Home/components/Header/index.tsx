import { ArrowCircleDown, ArrowCircleUp, PlusCircle } from "@phosphor-icons/react"
import { AddFeedbackButton, Box, HeaderContainer, NumberFeedbacksContainer, OrdererButton, OrdererContainer } from "./styles"
import { IDataFeedback } from "../../../../@types/IDataFeedback"

interface IHeaderProps {
    amountFeedbacks: number
    handleChronologicalOrderOfFeedbacks: (order: string, dataFeedback: IDataFeedback[]) => IDataFeedback[]
    setOpenAddFeedbackModal: React.Dispatch<React.SetStateAction<boolean>>
    chronologicalOrderOfFeedbacks: string
    setChronologicalOrderOfFeedbacks: React.Dispatch<React.SetStateAction<string>>
    dataFeedback: IDataFeedback[]
}

export function Header({
    amountFeedbacks,
    handleChronologicalOrderOfFeedbacks,
    setOpenAddFeedbackModal,
    chronologicalOrderOfFeedbacks,
    setChronologicalOrderOfFeedbacks,
    dataFeedback
}: IHeaderProps) {
    const handleOrderOfFeedbacks = (order: string) => {
        setChronologicalOrderOfFeedbacks(order)
        handleChronologicalOrderOfFeedbacks(order, dataFeedback)
    }

    return (
        <HeaderContainer>
            <Box>
                <NumberFeedbacksContainer>
                    <div>
                        <p>{amountFeedbacks}</p>
                    </div>
                    <p>Feedbacks</p>
                </NumberFeedbacksContainer>
                <OrdererContainer>
                    <p>Ordenar por:</p>
                    {
                        chronologicalOrderOfFeedbacks === "older" ? (
                            <OrdererButton onClick={() => handleOrderOfFeedbacks("last")}>
                                <p>Mais antigos</p>
                                <ArrowCircleDown size={24} />
                            </OrdererButton>
                        ) : (
                            <OrdererButton onClick={()=> handleOrderOfFeedbacks("older")}>
                                <p>Mais recentes</p>
                                <ArrowCircleUp size={24} />
                            </OrdererButton>
                        )
                    }
                </OrdererContainer>
            </Box>
            <AddFeedbackButton onClick={() => setOpenAddFeedbackModal(true)}>
                <PlusCircle size={24} />
                <p>Adicionar Feedback</p>
            </AddFeedbackButton>
        </HeaderContainer>
    )
}