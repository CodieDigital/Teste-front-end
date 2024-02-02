import styled from 'styled-components'

export const ContainerLabelInput = styled.div`

    display: flex;
    flex-direction: column;
    width: 265px;
    gap: 8px;

    > label {
        font-size: var(--small-size-12);
        font-weight: var(--weight-bold);
        color: var(--black-matte);
    }

    > input {
        height: 39px;
        font-size: var(--description-size-14);
        font-weight: var(--weight-medium);
        padding-left: 15px;
        border-radius: 8px;
        border: solid 2px var(--white-gray-color);
        color: var(--gray-color);
    }

    .error {
        position: absolute;
        bottom: -15px;
        left: 5px;
        color: red;
    }

`