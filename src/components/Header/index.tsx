import { HeaderStyle } from './style'
import ImagePokeBall from '../../../public/images/white-pokeball.svg'
import ActiveLink from '../ActiveLink'
import Image from 'next/image'

export const Header = () => {
    return (
        <>
            <HeaderStyle>
                <div>
                    <div>
                        <Image src={ImagePokeBall} alt='Imagem de uma pokebola' />
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