import ActiveLink from '../ActiveLink'
import { HeaderStyle } from './style'

export const Header = () => {
    return (
        <>
            <HeaderStyle>
                <div>
                    <div>
                        <img src='./images/white-pokeball.svg' alt='Imagem de uma pokebola' />
                    </div>
                    <div>
                        <h1>Centro Pokémon</h1>
                    </div>
                </div>
                <nav>
                    <ActiveLink children='Quem somos' href='/about' />
                    <ActiveLink children='Agendar consulta' href='/schedule' />
                </nav>
            </HeaderStyle>
        </>
    )
}