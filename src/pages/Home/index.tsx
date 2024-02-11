import { FunnelSimple } from "@phosphor-icons/react"
import {
    BoxFromNavbar,
    CheckboxContent,
    Content,
    DataFeedbackEmpty,
    FeedbackList,
    HeaderFromNavbar,
    HeaderStatusFromNavbar,
    HeaderTagsFromNavbar,
    HomeContainer,
    NavBar,
    Tag
} from "./styles"
import { Header } from "./components/Header"
import { CheckboxStatus } from "./components/Checkbox"
import { useEffect, useState } from "react"
import TagsList from "./tagsList.json"
import { FeedbackBox } from "../../components/FeedbackBox"
import { ModalAddFeedback } from "./components/ModalAddFeedback"
import { AlertAddedNewFeedbackSuccess } from "../../components/Alerts/AddedNewFeedback"
import { AlertAddedNewFeedbackError } from "../../components/Alerts/ErrorAddedNewFeedback"
import { database } from "../../firebase/config"
import { collection, getDocs } from "firebase/firestore"

interface CheckedTags {
    [key: string]: boolean
}

interface IDataFeedback {
    id: string
    title: string
    description: string
    createdAt: string
    tagsName: Array<string>
}

export function HomePage() {
    const [isCheckedStatus, setIsCheckedStatus] = useState({
        opened: false,
        inProgress: false,
        concluded: false
    })
    const [isCheckedTags, setIsCheckedTags] = useState<CheckedTags>(TagsList.tags)
    const [openAddFeedbackModal, setOpenAddFeedbackModal] = useState(false)
    const [openAddedNewFeedbackSuccess, setOpenAddedNewFeedbackSuccess] = useState(false)
    const [openAddedNewFeedbackError, setOpenAddedNewFeedbackError] = useState(false)
    const [dataFeedback, setDataFeedback] = useState<IDataFeedback[]>([])

    const handleClearFilter = () => {
        setIsCheckedStatus({
            opened: false,
            inProgress: false,
            concluded: false
        })
    }

    const handleSelectedTag = (tagName: string) => {
        setIsCheckedTags((prevTags) => {
            let updatedTags: CheckedTags

            if (tagName === 'Todos') {
                updatedTags = Object.keys(prevTags).reduce((tags, key) => {
                    if (key === "Todos") tags[key] = true
                    tags[key] = false

                    return tags
                }, {} as CheckedTags)

                if (Object.keys(updatedTags).some((key) => !updatedTags[key])) {
                    updatedTags.Todos = true
                }
            } else {
                updatedTags = {
                    ...prevTags,
                    [tagName]: !prevTags[tagName]
                }

                if (Object.keys(updatedTags).some((key) => key !== 'Todos' && updatedTags[key])) {
                    updatedTags.Todos = false
                }
            }

            return updatedTags
        })
    }

    useEffect(() => {
        async function getFeedbackData() {
            const querySnapshot = await getDocs(collection(database, "feedbacks"))
            let temporaryDataFeedback: IDataFeedback[] = []
            querySnapshot.forEach((doc) => {
                temporaryDataFeedback.push({
                    id: doc.id,
                    title: doc.data().title,
                    description: doc.data().description,
                    createdAt: doc.data().createdAt,
                    tagsName: doc.data().tags
                })
            })

            setDataFeedback(temporaryDataFeedback)
        }

        getFeedbackData()
    }, [dataFeedback])

    return (
        <HomeContainer>
            <NavBar>
                <HeaderFromNavbar>
                    <p>Filtros</p>
                    <FunnelSimple size={28} />
                </HeaderFromNavbar>
                <BoxFromNavbar>
                    <HeaderTagsFromNavbar>
                        <p>Tags</p>
                        <section>
                            {Object.keys(isCheckedTags).map((tagName) => (
                                <Tag
                                    key={tagName}
                                    $selected={isCheckedTags[tagName]}
                                    onClick={() => handleSelectedTag(tagName)}
                                >
                                    {tagName}
                                </Tag>
                            ))}
                        </section>
                    </HeaderTagsFromNavbar>
                </BoxFromNavbar>
                <BoxFromNavbar>
                    <HeaderStatusFromNavbar>
                        <p>Status</p>
                        <button onClick={handleClearFilter}>Limpar filtro</button>
                    </HeaderStatusFromNavbar>
                    <CheckboxContent>
                        <div>
                            <CheckboxStatus
                                labelName="Em Aberto"
                                typeChecked="opened"
                                checked={isCheckedStatus.opened}
                                setIsCheckedStatus={setIsCheckedStatus}
                            />
                            <p>0</p>
                        </div>
                        <div>
                            <CheckboxStatus
                                labelName="Em Progresso"
                                typeChecked="inProgress"
                                checked={isCheckedStatus.inProgress}
                                setIsCheckedStatus={setIsCheckedStatus}
                            />
                            <p>0</p>
                        </div>
                        <div>
                            <CheckboxStatus
                                labelName="Concluído"
                                typeChecked="concluded"
                                checked={isCheckedStatus.concluded}
                                setIsCheckedStatus={setIsCheckedStatus}
                            />
                            <p>0</p>
                        </div>
                    </CheckboxContent>
                </BoxFromNavbar>
            </NavBar>
            <Content>
                <Header setOpenAddFeedbackModal={setOpenAddFeedbackModal} />
                <FeedbackList>
                    {
                        (dataFeedback.length === 0) ? <DataFeedbackEmpty>Nenhum feedback adicionado.</DataFeedbackEmpty>
                            : dataFeedback.map((feedback, index) => (
                                <FeedbackBox
                                    key={feedback.id}
                                    index={index + 1}
                                    title={feedback.title}
                                    description={feedback.description}
                                    tagsName={feedback.tagsName}
                                />
                            ))
                    }
                </FeedbackList>
            </Content>

            <ModalAddFeedback
                openAddFeedbackModal={openAddFeedbackModal}
                setOpenAddFeedbackModal={setOpenAddFeedbackModal}
                setOpenAddedNewFeedbackSuccess={setOpenAddedNewFeedbackSuccess}
                setOpenAddedNewFeedbackError={setOpenAddedNewFeedbackError}
            />
            <AlertAddedNewFeedbackSuccess openAddedNewFeedbackSuccess={openAddedNewFeedbackSuccess} setOpenAddedNewFeedbackSuccess={setOpenAddedNewFeedbackSuccess} />
            <AlertAddedNewFeedbackError openAddedNewFeedbackError={openAddedNewFeedbackError} setOpenAddedNewFeedbackError={setOpenAddedNewFeedbackError} />
        </HomeContainer>
    )
}