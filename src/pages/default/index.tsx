import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { ContainerHome } from './style'

const DefaultPage = ({children, isHome}: any) => {
    return (
        
        isHome ?
            <ContainerHome>
                <Header />
                {
                    children
                }
                <Footer />
            </ContainerHome>
            :
            <>
                <Header />
                    {
                        children
                    }
                <Footer />
            </>
            
    )
}

export default DefaultPage