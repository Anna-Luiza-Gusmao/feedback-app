export interface IDataFeedback {
    id: string
    indexIdentifier: number
    title: string
    description: string
    createdAt: string
    status: 'opened' | 'inProgress' | 'concluded'
    tagsName: Array<string>
}