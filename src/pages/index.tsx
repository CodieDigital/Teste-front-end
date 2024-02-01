import DefaultPage from './default'
import ImageHome from '../../public/images/pokemon-hero.jpg'
import Image from 'next/image'
import { Main } from './style'

const Home = () => {
    return (
        <>
            <DefaultPage isHome={true}>
                <Main>
                    <div>
                        <h2>Cuidamos bem do seu pokémon, pra ele cuidar bem de você</h2>
                    </div>
                    <Image src={ImageHome} alt='Imagem de personagens do anime pokémon' />
                </Main>
            </DefaultPage>
        </>
    )
}

export default Home