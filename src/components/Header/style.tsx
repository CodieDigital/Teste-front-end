import styled from 'styled-components'

export const HeaderStyle = styled.header`

    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 101px;
    width: 90%;
    max-width: 1300px;
    margin: 0 auto;

    > div:first-child {
        display: flex;
        align-items: center;
        width: 230px;
        height: 60px;
        border-radius: 50px;
        background-color: #E40F0F;
        padding: 0px 15px;

        & img {
            margin-right: 20px;
        }

        & h1 {
            font-size: 20px;
            font-weight: bold;
            color: #FFFFFF;
        }
    }

    nav {
        display:flex;
        align-items: center;

        > a:nth-child(1) {
            font-size: 14px;
            font-weight: normal;
            text-decoration: none;
            color: #000000;
            cursor: pointer;
        }

        > a:nth-child(2) {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 42px;
            width: 152px;
            color: #FFFFFF;
            background-color: #E40F0F;
            border: transparent;
            border-radius: 30px;
            font-weight: bold;
            font-size: 14px;
            cursor: pointer;
            padding: 0px 10px;
            margin-left: 25px;
            text-decoration: none;
        }
    }

`