import { TDate, IRegion, IScheduleProps } from '../../interfaces/pages'
import { BottomHeader } from '../../components/BottomHeader'
import { Form } from '../../components/Form'
import axios, { AxiosResponse } from 'axios'
import { Main } from './style'
import { useContext } from 'react'
import { ScheduleContext } from '../../context/ScheduleContext'
import { SuccessOrError } from '../../components/SuccessOrError'
import DefaultPage from '../default'


const SchedulePage = ({regions, dates}: IScheduleProps) => {

    const { isError } = useContext(ScheduleContext)

    return (
        <>
            <DefaultPage isHome={true}>
                <BottomHeader section='Agendar consulta' description='Recupere seus pokémons em 5 segundos' />
                {
                    isError === true ? <SuccessOrError isError={isError} /> : null
                }
                {
                    isError === false ? <SuccessOrError isError={isError} /> : null
                }
                {
                    isError === undefined && 
                        <Main>
                            <Form regions={regions} dates={dates} />
                        </Main>
                }
                
                
            </DefaultPage>
        </>
    )

}

export async function getServerSideProps(){

    try {
        
        const regionsResponse: AxiosResponse<{results: IRegion[]}> = await axios.get('https://pokeapi.co/api/v2/region/')
        const regions: IRegion[] = regionsResponse.data.results
        
        const datesResponse: AxiosResponse<TDate> = await axios.get('http://localhost:3000/api/scheduling/date/')
        const dates: TDate = datesResponse.data

        return {
            props: {regions, dates}
        }

    } catch (error) {

        console.error('An error occurred while fetching data.', error)
    
    }

}

export default SchedulePage