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
    selectPokemon: boolean
    options: string[]
}

export interface ISelectPokemon {
    $selectPokemon?: boolean
}
