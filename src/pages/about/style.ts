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
            font-size: var(--title-about-18);
            font-weight: var(--weight-bold);
        }

        > h4 {
            font-size: var(--secont-title-about-15);
            font-weight: var(--weight-semi-bold);
        }

        > p {
            font-size: var(--description-about-13);
            font-weight: var(--weight-medium);
            line-height: 20px;
        }
    }

`