import { Form } from '../../components/Form'
import { Input } from '../../components/Input'
import { Select } from '../../components/Select'
import { BottomHeader } from '../../components/bottomHeader'
import { IDate, IRegion, IScheduleProps } from '../../interfaces/pages'
import DefaultPage from '../default'
import { Main } from './style'
import axios, { AxiosResponse } from 'axios'

const SchedulePage = ({regions, dates}: IScheduleProps) => {

    return (
        <>
            <DefaultPage>
                <BottomHeader section='Agendar consulta' description='Recupere seus pokémons em 5 segundos' />
                <Main>
                    <Form regions={regions} dates={dates} />
                </Main>
            </DefaultPage>
        </>
    )
}

export async function getServerSideProps(){
    try {
        
        const regionsResponse: AxiosResponse<{results: IRegion[]}> = await axios.get('https://pokeapi.co/api/v2/region/')
        const regions: IRegion[] = regionsResponse.data.results
        
        const datesResponse: AxiosResponse<IDate> = await axios.get('http://localhost:3000/api/scheduling/date/')
        const dates: IDate = datesResponse.data

        return {
            props: {regions, dates}
        }

    } catch (error) {

        console.error("Error fetching data:", error);

        return {
            props: {
                error: "An error occurred while fetching data."
            }
        };
    }
}

export default SchedulePage