export interface IRegion {
    name: string
    url: string
}

export interface IScheduleProps {
    regions: IRegion[]
    dates: TDate
}

export type TDate = string[]