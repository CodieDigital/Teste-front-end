import { IRegion } from '../pages'

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
    isDisable?: boolean
    options: string[]
    optionDefault: string
    callBack?: (region: string, length: number) => void
}

export interface ISelectPokemon {
    $selectPokemon?: boolean
    $isDisable?: boolean
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

export type THour = string[]

export interface IAreaCity {
    name: string
    url: string
}

export interface IInfoSchedule {
    name: string
    surname: string
    region: string
    city: string
    pokemons: (string | undefined)[]
    date: string
    hour: string
}

