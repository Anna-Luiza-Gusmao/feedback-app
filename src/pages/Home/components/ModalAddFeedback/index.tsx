import Modal from '@mui/material/Modal'
import { AddFeedbackButton, Box, CloseButton, DescriptionContainer, ErrorsContainer, MainContent, NumberOfCharacters, TagsContainer, TitleContainer } from './styles'
import { X } from '@phosphor-icons/react'
import { Controller, useForm } from 'react-hook-form'
import { useState } from 'react'
import Select, { StylesConfig, components, NoticeProps } from 'react-select'
import makeAnimated from 'react-select/animated'
import { useTheme } from 'styled-components'

interface IModalAddFeedbackProps {
    openAddFeedbackModal: boolean
    setOpenAddFeedbackModal: React.Dispatch<React.SetStateAction<boolean>>
    setOpenAddedNewFeedbackSuccess: React.Dispatch<React.SetStateAction<boolean>>
    setOpenAddedNewFeedbackError: React.Dispatch<React.SetStateAction<boolean>>
}

type FormValues = {
    title: string
    description: string
    tags: Array<string>
}

export function ModalAddFeedback({ 
    openAddFeedbackModal, 
    setOpenAddFeedbackModal, 
    setOpenAddedNewFeedbackSuccess,
    setOpenAddedNewFeedbackError
}: IModalAddFeedbackProps) {
    const handleClose = () => setOpenAddFeedbackModal(false)
    const [amountCharactersInDescription, setAmountCharactersInDescription] = useState(0)
    const tagOptions = [
        { value: 'Todos', label: 'Todos' },
        { value: 'UX/UI', label: 'UX/UI' },
        { value: 'Front-end', label: 'Front-end' },
        { value: 'Back-end', label: 'Back-end' },
        { value: 'Bug', label: 'Bug' },
        { value: 'Feature', label: 'Feature' },
        { value: 'Enhancement', label: 'Enhancement' },
        { value: 'Tests', label: 'Tests' },
    ]
    const animatedComponents = makeAnimated()
    const theme = useTheme()
    const customSelectStyles: StylesConfig = {
        control: (baseStyles, state) => ({
            ...baseStyles,
            border: 'none',
            outline: state.isFocused ? `2px solid ${theme.colors["purple-300"]}` : 'none',
            background: theme.colors["gray-150"],
            fontFamily: 'Inter',
            fontSize: '0.875rem',
        }),
        option: (styles, { isDisabled, isFocused, isSelected }) => {
            return {
                ...styles,
                fontFamily: 'Inter',
                fontSize: '0.875rem',
                backgroundColor: isSelected
                    ? theme.colors["purple-100"]
                    : isFocused
                        ? theme.colors["purple-100"]
                        : undefined,
                color: isSelected
                    ? theme.colors.white
                    : 'black',

                ':active': {
                    ...styles[':active'],
                    backgroundColor: !isDisabled
                        ? isSelected
                            ? 'none'
                            : theme.colors["purple-100"]
                        : undefined,
                },
            }
        },
        multiValue: (styles) => {
            return {
                ...styles,
                backgroundColor: theme.colors["purple-100"],
            }
        },
        multiValueLabel: (styles) => ({
            ...styles,
            color: theme.colors["gray-700"],
        }),
        placeholder: (base) => ({
            ...base,
            color: theme.colors["gray-700"],
        })
    }
    const CustomNoOptionsMessage = (props: NoticeProps) => (
        <components.NoOptionsMessage {...props}>
            <p style={{ fontSize: '0.875rem' }}>Não há mais tags para serem selecionadas.</p>
        </components.NoOptionsMessage>
    )

    const { register, handleSubmit, reset, setValue, control, formState: { errors } } = useForm<FormValues>()

    const handleSubmitNewFeedback = handleSubmit(async (data) => {
        try {
            setAmountCharactersInDescription(0)
            reset()
            handleClose()
            setOpenAddedNewFeedbackSuccess(true)
        } catch (error) {
            setOpenAddedNewFeedbackError(true)
        }
    })

    const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const value = e.target.value
        const updatedValue = value.slice(0, 450)

        const hasEnoughCharacters = /.{0,9}\S/.test(updatedValue)

        if (hasEnoughCharacters || updatedValue === '') {
            setAmountCharactersInDescription(updatedValue.length)
            setValue('description', updatedValue)
        }
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
                <MainContent>
                    <TitleContainer>
                        <label htmlFor='title'>Título<span>*</span></label>
                        <p>Adicione um título para o seu novo feedback.</p>
                        <input
                            type='text'
                            {...register('title', { required: true, minLength: 3 })}
                            name='title'
                            placeholder='Digite o título aqui'
                        />
                        <ErrorsContainer>
                            {
                                errors.title?.type === 'minLength' ? <p role="alert">O título deve conter no mínimo 3 caracteres.</p>
                                    : errors.title?.type === 'required' ? <p role="alert">O campo de título é obrigatório.</p>
                                        : <p style={{ visibility: 'hidden' }}>invisible</p>
                            }
                        </ErrorsContainer>
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
                        <ErrorsContainer>
                            {
                                errors.description?.type === 'minLength' ? <p role="alert">A descrição deve conter no mínimo 10 caracteres.</p>
                                    : errors.description?.type === 'required' ? <p role="alert">O campo de descrição é obrigatório.</p>
                                        : <p style={{ visibility: 'hidden' }}>invisible</p>
                            }
                        </ErrorsContainer>
                    </DescriptionContainer>
                    <TagsContainer>
                        <label htmlFor='tags'>Tags</label>
                        <p>Adicione uma ou mais tags para identificar a categoria responsável pelo seu novo feedback.</p>
                        <Controller
                            name="tags"
                            control={control}
                            defaultValue={[]}
                            render={({ field }) => (
                                <Select
                                    {...field}
                                    closeMenuOnSelect={false}
                                    components={{
                                        ...animatedComponents,
                                        NoOptionsMessage: CustomNoOptionsMessage
                                    }}
                                    isMulti
                                    options={tagOptions}
                                    placeholder="Selecione uma ou mais tags"
                                    styles={customSelectStyles}
                                />
                            )}
                        />
                    </TagsContainer>

                    <AddFeedbackButton type='submit'>Adicionar Feedback</AddFeedbackButton>
                </MainContent>
            </Box>
        </Modal>
    )
}