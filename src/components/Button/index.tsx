import { ButtonStyle } from './style'

interface IButton {
    buttonAdd?: boolean
    valueButton: string
}

export const Button = ({buttonAdd, valueButton}: IButton) => {
    return (
        <>
            <ButtonStyle add={buttonAdd}>{valueButton}</ButtonStyle>
        </>
    )
}