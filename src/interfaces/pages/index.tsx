export interface IRegion {
    name: string
    url: string
}

export interface IScheduleProps {
    regions: IRegion[]
    dates: IDate
}

export type IDate = string[]