import styled from 'styled-components'

interface IAddPokemon {
    add?: boolean
}

export const ButtonStyle = styled.button<IAddPokemon>`
    height: 42px;
    color: ${(props: IAddPokemon) => (props.add ? '#1D1D1D' : '#FFFFFF')};
    background-color: ${(props: IAddPokemon) => (props.add ? 'transparent' : '#E40F0F')};
    border: ${(props: IAddPokemon) => (props.add ? 'solid 1px #1D1D1D' : 'transparent')};
    border-radius: 30px;
    font-weight: bold;
    font-size: 14px;
    cursor: pointer;
    padding: 0px 15px;

`