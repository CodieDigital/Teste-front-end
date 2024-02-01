import styled from 'styled-components'

export const ContainerForm = styled.div`

    display: flex;
    flex-direction: column;
    width: 80%;
    max-width: 900px;
    gap: 20px;
    margin: 32px auto;

    > form {
        display: flex;
        flex-direction: column;
        gap: 32px;

        > h3 {
            text-align: center;
            font-size: var(--third-title-24);
            font-weight: var(--weight-semi-bold);
        }

        > section:nth-child(2) {

            > div {
                margin-bottom: 32px;
            }

            > div {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                width: 265px;
                gap: 8px;
                position: relative;

                > label {
                    font-size: var(--small-size-12);
                    font-weight: var(--weight-bold);
                    color: #1D1D1D;
                }

                > select {
                    -webkit-appearance: none;
                    -moz-appearance: none;
                    width: 100%;
                    height: 45px;
                    font-size: var(--description-size-14);
                    font-weight: var(--weight-medium);
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
                    font-size: var(--icon-select-30);
                    color: #747474;
                    bottom: 7px;
                    right: 6px;
                    z-index: -1;
                }
            }
        }

        > section {
            width: 100%;
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            max-width: 548px;
            margin: 0 auto;
            
            > div {

                > h4 {
                    font-size: var(--small-size-12);
                    font-weight: var(--weight-extra-bold);
                }
    
                > p {
                    font-size: var(--small-size-12);
                    color: #747474;
                }
            }
        }

        > section:nth-child(3) {
            gap: 16px;
            flex-direction: column;

            > div {

                > h4 {
                    margin-bottom: 8px;
                }
            }

            > ul {
                display: flex;
                flex-direction: column;
                gap: 32px;
                margin-bottom: 16px;

                > li {

                    > div {
                        display: flex;
                        align-items: center;
                        flex-direction: row;
                        justify-content: space-between;
                        width: 548px;
                        gap: 8px;
                        position: relative;

                        > label {
                            font-size: var(--small-size-12);
                            font-weight: var(--weight-bold);
                            color: #1D1D1D;
                        }

                        > select {
                            -webkit-appearance: none;
                            -moz-appearance: none;
                            width: 100%;
                            max-width: 438px;
                            height: 45px;
                            font-size: var(--description-size-14);
                            font-weight: var(--weight-medium);
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
                            font-size: var(--icon-select-30);
                            color: #747474;
                            bottom: 7px;
                            right: 6px;
                            z-index: -1;
                        }
                    }
                }
            }
        }

        > section:nth-child(4) {

            > div {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                width: 265px;
                gap: 8px;
                position: relative;

                > label {
                    font-size: var(--small-size-12);
                    font-weight: var(--weight-bold);
                    color: #1D1D1D;
                }

                > select {
                    -webkit-appearance: none;
                    -moz-appearance: none;
                    width: 100%;
                    height: 45px;
                    font-size: var(--description-size-14);
                    font-weight: var(--weight-medium);
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
                    font-size: var(--icon-select-30);
                    color: #747474;
                    bottom: 7px;
                    right: 6px;
                    z-index: -1;
                }
            }
        }

        > section:nth-child(5) {
            flex-direction: column;

            > div:nth-child(1) {
                display: flex;
                flex-direction: column;
                gap: 8px;
                margin-bottom: 32px;

                > div {
                    display: flex;
                    justify-content: space-between;
                    color: #747474;
                    
                    > p {
                        font-size: var(--description-size-14);
                    }
                }

                > p {
                    font-size: var(--small-rate);
                }
            }

            > div:nth-child(2) {
                display: flex;
                justify-content: space-between;
                align-items: center;

                > p {
                    font-size: var(--third-title-24);
                    font-weight: var(--weight-bold);
                    color: var(--black-matte-color);
                }

                > button {
                    padding: 0 15px;
                }
            }
        }
    }

    @media(max-width: 670px){

        > form {

            > section {
                justify-content: center;
                align-items: center;
                gap: 10px;

                > div {
                    min-width: 100%;

                    > select {
                        min-width: 100%;
                        
                    }
                }   
            }

            > section:nth-child(2) {

                > div {
                    margin-bottom: 0;
                }
            }

            > section:nth-child(3) {

                ul {
                    width: 100%;

                    li {

                        > div {
                            width: 100%;
                            flex-direction: column;

                            > select {
                                min-width: 100%;
                            }
                        }
                    }
                }
            }
        }
    }

    @media(max-width: 550px) {
        > form {

            > section:nth-child(5) {

                > div:nth-child(2) {
                    flex-direction: column;
                    
                    > p {
                        margin-bottom: 10px;
                    }
                }
                
            }
        }
    }
`