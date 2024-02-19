import {
    Content,
    DataFeedbackEmpty,
    FeedbackList,
    HomeContainer,
} from "./styles"
import { Header } from "./components/Header"
import { useEffect, useState } from "react"
import { FeedbackBox } from "../../components/FeedbackBox"
import { ModalAddFeedback } from "./components/ModalAddFeedback"
import { AlertAddedNewFeedbackSuccess } from "../../components/Alerts/AddedNewFeedback"
import { AlertAddedNewFeedbackError } from "../../components/Alerts/ErrorAddedNewFeedback"
import { database } from "../../firebase/config"
import { collection, getDocs } from "firebase/firestore"
import { IDataFeedback } from "../../@types/IDataFeedback"
import { Navbar } from "./components/Navbar"

export function HomePage() {
    const [openAddFeedbackModal, setOpenAddFeedbackModal] = useState(false)
    const [openAddedNewFeedbackSuccess, setOpenAddedNewFeedbackSuccess] = useState(false)
    const [openAddedNewFeedbackError, setOpenAddedNewFeedbackError] = useState(false)
    const [dataFeedback, setDataFeedback] = useState<IDataFeedback[]>([])
    const [chronologicalOrderOfFeedbacks, setChronologicalOrderOfFeedbacks] = useState("older")
    const [addedNewFeedback, setAddedNewFeedback] = useState(false)

    const handleChronologicalOrderOfFeedbacks = (order: string, dataFeedback: IDataFeedback[]) => {
        if (order === "older") {
            const orderedFeedbackData = dataFeedback.sort((a, b) => {
                const dateA = new Date(a.createdAt)
                const dateB = new Date(b.createdAt)

                return dateA.getTime() - dateB.getTime()
            })

            return orderedFeedbackData
        } else {
            const orderedFeedbackData = dataFeedback.sort((a, b) => {
                const dateA = new Date(a.createdAt)
                const dateB = new Date(b.createdAt)

                return dateB.getTime() - dateA.getTime()
            })

            return orderedFeedbackData
        }
    }

    useEffect(() => {
        const createArrayOfIndex = (size: number) => {
            return Array.from({ length: size }, (_, index) => index + 1)
        }

        async function getFeedbackData() {
            const querySnapshot = await getDocs(collection(database, "feedbacks"))
            let temporaryDataFeedback: IDataFeedback[] = []
            querySnapshot.forEach((doc) => {
                temporaryDataFeedback.push({
                    id: doc.id,
                    indexIdentifier: 0,
                    title: doc.data().title,
                    description: doc.data().description,
                    createdAt: doc.data().createdAt,
                    status: doc.data().status,
                    tagsName: doc.data().tags
                })
            })

            const orderedFeedbackData = handleChronologicalOrderOfFeedbacks(chronologicalOrderOfFeedbacks, temporaryDataFeedback)
            const arrayOfIndex = createArrayOfIndex(orderedFeedbackData.length)

            const mergedDataFeedback = orderedFeedbackData.map((feedbacks, index) => ({
                ...feedbacks,
                indexIdentifier: arrayOfIndex[index]
            }))
            setDataFeedback(mergedDataFeedback)
        }

        getFeedbackData()
    }, [addedNewFeedback])

    return (
        <HomeContainer>
            <Navbar />
            <Content>
                <Header
                    amountFeedbacks={dataFeedback.length}
                    handleChronologicalOrderOfFeedbacks={handleChronologicalOrderOfFeedbacks}
                    setOpenAddFeedbackModal={setOpenAddFeedbackModal}
                    chronologicalOrderOfFeedbacks={chronologicalOrderOfFeedbacks}
                    setChronologicalOrderOfFeedbacks={setChronologicalOrderOfFeedbacks}
                    dataFeedback={dataFeedback}
                />
                <FeedbackList>
                    {
                        (dataFeedback.length === 0) ? <DataFeedbackEmpty>Nenhum feedback adicionado.</DataFeedbackEmpty>
                            : dataFeedback.map((feedback) => (
                                <FeedbackBox
                                    key={feedback.id}
                                    index={feedback.indexIdentifier}
                                    title={feedback.title}
                                    description={feedback.description}
                                    status={feedback.status}
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
                addedNewFeedback={addedNewFeedback}
                setAddedNewFeedback={setAddedNewFeedback}
            />
            <AlertAddedNewFeedbackSuccess openAddedNewFeedbackSuccess={openAddedNewFeedbackSuccess} setOpenAddedNewFeedbackSuccess={setOpenAddedNewFeedbackSuccess} />
            <AlertAddedNewFeedbackError openAddedNewFeedbackError={openAddedNewFeedbackError} setOpenAddedNewFeedbackError={setOpenAddedNewFeedbackError} />
        </HomeContainer>
    )
}