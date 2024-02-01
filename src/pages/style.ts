import styled from 'styled-components'

export const Main = styled.main`

    height: 100%;
    overflow: hidden;
    position: relative;

    > div {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        position: absolute;

        > h2 {
            text-align: center;
            font-size: var(--second-title-32);
            font-weight: var(--weight-bold);
            width: 80%;
            max-width: 509px;
            color: #FFFFFF;
        }

    }

    
    > img {
        width: 100%;
        height: 100%;
        min-height: 720px;
        object-fit: cover;
    }

`