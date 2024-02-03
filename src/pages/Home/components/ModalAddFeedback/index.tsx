import Modal from '@mui/material/Modal'
import { AddFeedbackButton, Box, CloseButton, DescriptionContainer, NumberOfCharacters, TagsContainer, TitleContainer } from './styles'
import { X } from '@phosphor-icons/react'
import { useForm } from 'react-hook-form'
import { useState } from 'react'

interface IModalAddFeedbackProps {
    openAddFeedbackModal: boolean
    setOpenAddFeedbackModal: React.Dispatch<React.SetStateAction<boolean>>
}

type FormValues = {
    title: string
    description: string
    tags: Array<string>
}

export function ModalAddFeedback({ openAddFeedbackModal, setOpenAddFeedbackModal }: IModalAddFeedbackProps) {
    const handleClose = () => setOpenAddFeedbackModal(false)
    const [amountCharactersInDescription, setAmountCharactersInDescription] = useState(0)
    const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm<FormValues>()

    const handleSubmitNewFeedback = handleSubmit((data) => {
        console.log(data)
        setAmountCharactersInDescription(0)
        reset()
    })

    const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const value = e.target.value
        const updatedValue = value.slice(0, 450)

        setAmountCharactersInDescription(updatedValue.length)
        setValue('description', updatedValue)
    }

    return (
        <Modal
            open={openAddFeedbackModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box onSubmit={handleSubmitNewFeedback}>
                <CloseButton onClick={handleClose}>
                    <X size={24} />
                </CloseButton>
                <h1>Adicionar novo feedback</h1>
                <TitleContainer>
                    <label htmlFor='title'>Título<span>*</span></label>
                    <p>Adicione um título para o seu novo feedback.</p>
                    <input
                        type='text'
                        {...register('title', { required: true, minLength: 3 })}
                        name='title'
                        placeholder='Digite o título aqui'
                    />
                </TitleContainer>
                <DescriptionContainer>
                    <label htmlFor='description'>Descrição<span>*</span></label>
                    <p>Adicione uma breve descrição para o seu novo feedback.</p>
                    <textarea
                        {...register('description', { required: true, minLength: 10 })}
                        name='description'
                        placeholder='Digite a descrição aqui'
                        rows={9}
                        maxLength={450}
                        onChange={handleDescriptionChange}
                    />
                    <NumberOfCharacters>{amountCharactersInDescription}/450</NumberOfCharacters>
                </DescriptionContainer>
                <TagsContainer>
                    <label>Tags</label>
                    <p>Adicione uma ou mais tags para identificar a categoria responsável pelo seu novo feedback.</p>
                </TagsContainer>

                <AddFeedbackButton type='submit'>Adicionar Feedback</AddFeedbackButton>
            </Box>
        </Modal>
    )
}