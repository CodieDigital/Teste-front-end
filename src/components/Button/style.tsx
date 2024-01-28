import styled from 'styled-components'
import { IButtonAddPokemon } from '../../interfaces/components'

export const Button = styled.button<IButtonAddPokemon>`
    height: 42px;
    color: ${(props: IButtonAddPokemon) => props.$addPokemon ? '#1D1D1D' : '#FFFFFF'};
    background-color: ${(props: IButtonAddPokemon) => props.$addPokemon ? 'transparent' : '#E40F0F'};
    border: ${(props: IButtonAddPokemon) => props.$addPokemon ? 'solid 1px #1D1D1D' : 'transparent'};
    border-radius: 30px;
    font-weight: bold;
    font-size: 14px;
    cursor: pointer;
    padding: 0px 15px;
`