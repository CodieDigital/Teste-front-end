import styled from 'styled-components'

export const HeaderStyle = styled.header`

    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 104px;
    width: 90%;
    max-width: 1300px;
    margin: 0 auto;

    > div:nth-child(1) {
        display: flex;
        align-items: center;
        width: 230px;
        height: 62px;
        padding-right: 15px;
        border-radius: 50px;
        background-color: var(--primary-color);
        animation: logoRetracted 2s ease-in-out forwards;
        animation-delay: 5s;
        cursor: pointer;

        > div:nth-child(1) {
            text-align: center;
            min-width: 61px;
            height: 37px;
            
            > img {
                width: 37px;
                height: 37px;
            }        
        }
        
        > div:nth-child(2) {

            > h1 {
                font-size: var(--logo-title-20);
                font-weight: var(--weight-semi-bold);
                color: var(--white-color);
                animation: textLogoRetracted 2s ease-in-out forwards;
                animation-delay: 5s;
            }
        }
    }

    > div:nth-child(1):hover {
        animation: logoNormal 0.3s ease-in-out forwards;

        > div:nth-child(2) {

            > h1 {
                animation: textLogoNormal 0.3s ease-in-out forwards;
            }
        }
    }

    nav {
        display:flex;
        align-items: center;

        > a:nth-child(1) {
            font-size: var(--description-size-14);
            font-weight: var(--weight-medium);
            text-decoration: none;
            color: var(--black-color);
            cursor: pointer;
            transition: 0.2s;
        }

        > a:nth-child(1):hover {
            color: var(--primary-color);
            transition: 0.2s;
        }

        > a:nth-child(2) {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 42px;
            width: 152px;
            margin-left: 25px;
            padding: 0px 10px;
            font-weight: var(--weight-bold);
            font-size: var(--description-size-14);
            text-decoration: none;
            background-color: var(--primary-color);
            color: var(--white-color);
            border-radius: 30px;
            border:2px solid transparent;
            cursor: pointer;
            transition: 0.2s;
        }

        > a:nth-child(2):hover {
            border: 2px solid var(--primary-color);
            background-color: var(--white-color);
            color: var(--primary-color);
            transition: 0.2s;
        }
    }

    @keyframes logoRetracted {
        0% {
            width: 230px;
        }
        100% {
            width: 62px;
            padding: 0;
        }
    }
    @keyframes logoNormal {
        0% {
            width: 62px;
            padding: 0;
        }
        100% {
            width: 230px;
        }
    }
    @keyframes textLogoRetracted {
        0% {
            opacity: 1;
            font-size: var(--logo-title-20);
            transform: translateX(0);
            visibility: visible;
        }
        100% {
            opacity: 0;
            font-size: 0px;
            visibility: hidden;
        }
    }
    @keyframes textLogoNormal {
        0% {
            opacity: 0;
            font-size: 0px;
            visibility: hidden;
        }
        100% {
            opacity: 1;
            font-size: var(--logo-title-20);
            transform: translateX(0);
            visibility: visible;
        }
    }

    @media(max-width: 630px) {
        
        > div:nth-child(1) {
            width: 61px;
            height: 62px;
            padding-right: 1px;
            animation: none;
    
            > div:nth-child(2) {
                animation: none;

                > h1 {
                    display: none;
                }
            }
        }

        > div:nth-child(1):hover {
            animation: none;

            > div:nth-child(2):hover {
                animation: none;
                display: none;
            }
        }

        > nav {
            flex-direction: column-reverse;

            > a:nth-child(2) {
                margin: 0 0 5px 0;
            }
        }
    }

`