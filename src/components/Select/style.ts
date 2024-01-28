import styled from 'styled-components'

interface ISelectProps {
    pokemon?: boolean
}

export const DivLabelSelect = styled.div<ISelectProps>`

    display: flex;
    flex-direction: ${(props: ISelectProps) => (props.pokemon ? 'row' : 'column')};
    align-items: ${(props: ISelectProps) => (props.pokemon ? 'center' : 'none')};
    max-width: ${(props: ISelectProps) => (props.pokemon ? '548px' : '265px')};
    gap: ${(props: ISelectProps) => (props.pokemon ? '30px' : '10px')};
    position: relative;

    > label {
        font-size: 12px;
        font-weight: bold;
        color: #1D1D1D;
    }

    > select {
        -webkit-appearance: none;
        -moz-appearance: none;
        width: 100%;
        min-width: 256px;
        max-width: ${(props: ISelectProps) => (props.pokemon ? '438px' : '265px')};
        height: 45px;
        font-size: 14px;
        font-weight: medium;
        padding-left: 10px;
        border-radius: 8px;
        border: solid 2px #D5D5D5;
        color: #747474;
        background-color: transparent;
    }

    > div {
        width: 30px;
        height: 30px;
        position: absolute;
        font-size: 30px;
        color: #747474;
        bottom: 7px;
        right: 10px;
        z-index: -1;
    }

`