import { HeaderStyle } from './style'

export const Header = () => {
    return (
        <>
            <HeaderStyle>
                <div>
                    <img src='./images/white-pokeball.svg' alt='' />
                    <h1>Centro Pokémon</h1>
                </div>
                <nav>
                    <a href=''>Quem somos</a>
                    <a href=''>Agendar consulta</a>
                </nav>
            </HeaderStyle>
        </>
    )
}