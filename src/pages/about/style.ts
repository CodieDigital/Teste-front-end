import styled from 'styled-components'

export const Main = styled.main`

    height: 100%;

    > div {
        display: flex;
        flex-direction: column;
        width: 80%;
        max-width: 900px;
        gap: 20px;
        margin: 30px auto;

        > h3 {
            font-size: 18px;
            font-weight: bold;
        }

        > h4 {
            font-size: 15px;
            font-weight: 600;
        }

        > p {
            font-size: 13px;
            font-weight: 500;
            line-height: 20px;
        }
    }

`