import styled from 'styled-components'

export const BottomHeaderStyle = styled.section`

    display: flex;
    width: 100%;
    height: 187px;
    color: #FFFFFF;
    background-color: #E40F0F;

    > div {
        display: flex;
        flex-direction: column;
        gap: 20px;
        height: 117px;
        width: 80%;
        max-width: 1210px;  
        margin: auto;

        > div {
            display: flex;
            align-items: center;
            gap: 5px;

            > p {
                height: 12px;
                font-size: 12px;
                font-weight: bold;
            }
            
        }

        > h2 {
            font-size: 32px;
            font-weight: bold;
        }

        > p {
            font-size: 14px;
            font-weight: normal;
        }
    }

`