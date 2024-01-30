import { IRegion } from "../pages"

export interface IBottomHeader {
    section: string
    description: string
}

export interface IButtonAddPokemon {
    $addPokemon?: boolean
}

export interface IInput {
    valueLabel: string 
    idInput: string
    typeInput: string
    placeholder: string
}

export interface ISelect {
    valueLabel: string 
    idSelect: string
    selectPokemon?: boolean
    options: string[]
    callBack?: (region: string) => void
}

export interface ISelectPokemon {
    $selectPokemon?: boolean
}

export interface IForm {
    regions: IRegion[]
    dates: string[]
}

export interface ICity {
    name: string
    url: string
}

export interface IPokemon {
    name: string
    url: string
}

export interface ISchedule {
    date: string
    hours: string[]
}

export type IHour = string[]