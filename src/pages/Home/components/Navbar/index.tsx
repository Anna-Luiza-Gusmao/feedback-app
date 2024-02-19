import { useState } from "react"
import { BoxFromNavbar, CheckboxContent, HeaderFromNavbar, HeaderStatusFromNavbar, HeaderTagsFromNavbar, NavBar, Tag } from "./styles"
import { FunnelSimple } from "@phosphor-icons/react"
import TagsList from "./tagsList.json"
import { CheckboxStatus } from "../Checkbox"

interface ICheckedTags {
    [key: string]: boolean
}

export function Navbar() {
    const [isCheckedStatus, setIsCheckedStatus] = useState({
        opened: false,
        inProgress: false,
        concluded: false
    })
    const [isCheckedTags, setIsCheckedTags] = useState<ICheckedTags>(TagsList.tags)

    const handleClearFilter = () => {
        setIsCheckedStatus({
            opened: false,
            inProgress: false,
            concluded: false
        })
    }

    const handleSelectedTag = (tagName: string) => {
        setIsCheckedTags((prevTags) => {
            let updatedTags: ICheckedTags

            if (tagName === 'Todos') {
                updatedTags = Object.keys(prevTags).reduce((tags, key) => {
                    if (key === "Todos") tags[key] = true
                    tags[key] = false

                    return tags
                }, {} as ICheckedTags)

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

    return (
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
    )
}