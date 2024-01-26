import Modal from '@mui/material/Modal'
import { AddFeedbackButton, Box, CloseButton, DescriptionContainer, TagsContainer, TitleContainer } from './styles'
import { X } from '@phosphor-icons/react'

interface IModalAddFeedbackProps {
    openAddFeedbackModal: boolean
    setOpenAddFeedbackModal: React.Dispatch<React.SetStateAction<boolean>>
}

export function ModalAddFeedback({ openAddFeedbackModal, setOpenAddFeedbackModal }: IModalAddFeedbackProps) {
    const handleClose = () => setOpenAddFeedbackModal(false)

    return (
        <Modal
            open={openAddFeedbackModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box>
                <CloseButton onClick={handleClose}>
                    <X size={24} />
                </CloseButton>
                <h1>Adicionar novo feedback</h1>
                <TitleContainer>
                    <h2>Título<span>*</span></h2>
                    <p>Adicione um título para o seu novo feedback.</p>
                </TitleContainer>
                <DescriptionContainer>
                    <h2>Descrição<span>*</span></h2>
                    <p>Adicione uma breve descrição para o seu novo feedback.</p>
                </DescriptionContainer>
                <TagsContainer>
                    <h2>Tags</h2>
                    <p>Adicione uma ou mais tags para identificar a categoria responsável pelo seu novo feedback.</p>
                </TagsContainer>

                <AddFeedbackButton>Adicionar Feedback</AddFeedbackButton>
            </Box>
        </Modal>
    )
}