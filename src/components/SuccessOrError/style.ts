import styled from 'styled-components'

export const ContainerSuccessOrError = styled.div`
    width: 100%;
    height: 100%;

    > section {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
        padding: 20px 30px 30px 30px;
        width: 365px;
        min-height: 203px;
        margin: 100px auto 0 auto;
        background-color: var(--rose-opacity-color);
        border: 1px solid var(--rose-color);
        border-radius: 8px;
        text-align: center;
    
        > h2 {
            font-size: var(--logo-title-20);
            font-weight: var(--weight-bold);
            color: var(--black-matte-color);
        }
    
        > p {
            font-size: var(--description-size-14);
            color: var(--gray-color);
        }
    
        > a {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 42px;
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

        > a:hover {
            border: 2px solid var(--primary-color);
            background-color: var(--white-color);
            color: var(--primary-color);
            transition: 0.2s;
        }
    
    
        > img {
            width: 42px;
            height: 42px;
        }
    }

`