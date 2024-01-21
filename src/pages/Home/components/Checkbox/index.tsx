import { Dispatch, SetStateAction } from "react"
import "./styles.css"

interface ICheckboxStatusProps {
    labelName: string,
    typeChecked: string,
    checked: boolean,
    setIsCheckedStatus: Dispatch<SetStateAction<{
        opened: boolean
        inProgress: boolean
        concluded: boolean
    }>>    
}

type StatusType = 'opened' | 'inProgress' | 'concluded'

export function CheckboxStatus(props: ICheckboxStatusProps) {
    return (
        <div className="checkboxContainer">
            <label className="container">
                <input
                    type="checkbox"
                    checked={props.checked}
                    onChange={() => props.setIsCheckedStatus((prevStatus) => ({
                      ...prevStatus,
                      [props.typeChecked as StatusType]: !prevStatus[props.typeChecked as StatusType]
                    }))}
                />
                <div className="checkmark" />
            </label>
            {props.labelName}
        </div>
    )
}