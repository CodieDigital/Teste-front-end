import { IAreaCity, ICity, IInfoSchedule, IPokemon, TTime } from '../interfaces/components'
import { FieldErrors, UseFormHandleSubmit, UseFormRegister, useForm } from 'react-hook-form'
import { Dispatch, SetStateAction, createContext, useEffect, useState } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import { IRegion } from '../interfaces/pages'
import { Select } from '../components/Select'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'
import Cookies from 'js-cookie'
import * as yup from 'yup'
import axios from 'axios'

const schema = yup.object().shape({
    name: yup.string().required('Nome é obrigatório'),
    surname: yup.string().required('Sobrenome é obrigatório'),
    region: yup.string().required('Região é obrigatória'),
    city: yup.string().required('Cidade é obrigatória'),
    pokemons: yup.array().of(
      yup.string().optional()
    ),
    schedule: yup.object().shape({
        date: yup.string().required('Data é obrigatória'),
        time: yup.string().required('Horário é obrigatório')
    }).required(),
})

export interface IDefaultProviderProps {
    children: React.ReactNode
}

export interface IScheduleContext {
    setDescriptionError: Dispatch<SetStateAction<string | undefined>>,
    setIsError: Dispatch<SetStateAction<boolean | undefined>>,
    getGenerationRegion: (regions: IRegion[]) => void,
    handleSubmit: UseFormHandleSubmit<IInfoSchedule>,
    onSubmit: (payload: IInfoSchedule) => void,
    register: UseFormRegister<IInfoSchedule>,
    getAllPokemons: (city: string) => void,
    descriptionSuccess: string | undefined,
    descriptionError: string | undefined,
    getCities: (region: string) => void,
    errors: FieldErrors<IInfoSchedule> ,
    getHours: (date: string) => void,
    createSelectPokemon: () => void,
    selectsPokemons: JSX.Element[],
    isError: boolean | undefined,
    rateValue: number,
    cities: ICity[],
    time: string[],
}

export const ScheduleContext = createContext({} as IScheduleContext)

export const ScheduleProvider = ({children}: IDefaultProviderProps) => {

    const { register, handleSubmit, formState: { errors }, watch, reset } = useForm({
        resolver: yupResolver(schema),
    })
    
    const test = Cookies.get('schedules') 
    const router = useRouter()

    const [myPokemonsRegionGeneration, setMyPokemonsRegionGeneration] = useState<{region: string, generation: number}[]>([])
    const [descriptionSuccess, setDescriptionSuccess] = useState<string | undefined>()
    const [descriptionError, setDescriptionError] = useState<string | undefined>()
    const [isSubmitSuccessful, setIsSubmitSuccessful] = useState<boolean>()
    const [selectsPokemons, setSelectsPokemons] = useState<JSX.Element[]>([])
    const [allPokemons, setAllPokemons] = useState<IPokemon[]>([])
    const [isError, setIsError] = useState<boolean | undefined>(undefined)
    const [rateValue, setRateValue] = useState<number>(0)
    const [cities, setCities] = useState<ICity[]>([])
    const [time, setTime] = useState<TTime>([])
    
    const onSubmit = (payload: IInfoSchedule) => {
        if(payload.pokemons && !payload.pokemons.some((element: string | undefined) => element === '')){
            const allScheduleDataCookies = Cookies.get('schedules') ? 
                JSON.parse(Cookies.get('schedules')!) : []
    
            const freeTime = allScheduleDataCookies.filter((scheduleObj: IInfoSchedule) => 
                payload.schedule.date === scheduleObj.schedule.date && 
                    payload.schedule.time === scheduleObj.schedule.time  
            )

            if(freeTime.length === 0){
                allScheduleDataCookies.length > 0 ?
                    Cookies.set('schedules', JSON.stringify([...allScheduleDataCookies, payload])) :
                        Cookies.set('schedules', JSON.stringify([payload]))
                setDescriptionSuccess(`Seu agendamento para dia ${payload.schedule.date},  às ${payload.schedule.time},
                    para ${payload.pokemons?.length} pokémons foi realizado com sucesso!`)
                setIsError(false)
                setIsSubmitSuccessful(true)
            } else {
                setIsError(true)
                setIsSubmitSuccessful(false)
                setDescriptionError(`O horário (${payload.schedule.time}) não está disponível para o dia (${payload.schedule.date})`)
            }

        } else {
            toast.error('Adicione pelo menos 1 pokémon')
        }
    }
    
    const createSelectPokemon = () => {
        if(cities.length > 0){
            if(selectsPokemons.length < 6 && allPokemons.length > 0){
                setSelectsPokemons([...selectsPokemons, 
                    <Select 
                        {...register(`pokemons.${selectsPokemons.length}`)} 
                        key={`pokemon-${selectsPokemons.length}`}
                        valueLabel={`Pokémon 0${selectsPokemons.length + 1}`} 
                        idSelect={`pokemon-${selectsPokemons.length}`} 
                        options={allPokemons.map((element) => element.name)}
                        optionDefault='Selecione um pokémon'
                        selectPokemon={true} 
                    />
                ])
            } else {
                selectsPokemons.length === 6 ? toast.error('Limite de pokémons alcançado') : toast.error('A cidade não tem pokémons')
            }
        } else {
            toast.error('Selecione primeiro uma cidade')
        }
    }
    
    const getCities = async (region: string) => {
        !region && setCities([])

        if(region){
            setCities([])
            try {
                const {data} = await axios.get(`https://pokeapi.co/api/v2/region/${region}/`)
                setCities(data.locations)
            } catch (error) {
                console.error('Error when trying to search for cities', error)
            }
        }
    }
    
    const getAllPokemons = async (city: string) => {
        if(city){
            try {
                const {data} = await axios.get(`https://pokeapi.co/api/v2/location/${city}/`)
                const pokemonsArray: IPokemon[] = []
                await Promise.all(data.areas.map(async (area: IAreaCity) => {
                    !area && setAllPokemons([])
                    const {data} = await axios.get(area.url)
                    data.pokemon_encounters.forEach((element: {pokemon: {name: string, url: string}}) => {     
                        pokemonsArray.push(element.pokemon)
                    })
                }))
                setAllPokemons([...pokemonsArray])
            } catch (error) {
                console.error('Error when trying to search for Pokémon', error)
            }
        }
    }
    
    const getHours = async (date: string) => { 
        !date && setTime([])

        if(date){
            try {
                const {data} = await axios.post('http://localhost:3000/api/scheduling/time', {date: 0})
                setTime(data)
            } catch (error) {
                console.error('Error when trying to find the time', error)
            }
        }
    }
    
    const getGenerationRegion = (regions: IRegion[]) => {  
        const region = watch('region')
        const index = regions.findIndex((element) => element.name === region)
        
        const pokemonObj = {
            region: region,
            generation: index + 1,
        }
        
        allPokemons && setMyPokemonsRegionGeneration([...myPokemonsRegionGeneration, pokemonObj])
    }
    
    const getGenerationAndRate = () => {
        if(allPokemons.length > 0){
            const rate = 0.03 * (selectsPokemons.length * 70)
            setRateValue(myPokemonsRegionGeneration.reduce((a, b) => Math.max(a, b.generation), 0) * rate)
        }
    }
    
    useEffect(() => {
        getGenerationAndRate()
    }, [selectsPokemons, allPokemons])

    useEffect(() => {
        if(isSubmitSuccessful) {
            reset({
                name: '',
                surname: '',
                region: '',
                city: '',
                schedule: {
                    date: '',
                    time: ''
                }
            })
            setSelectsPokemons([])
        }

    }, [isSubmitSuccessful])

    return (
        <ScheduleContext.Provider value={{
            createSelectPokemon,
            getGenerationRegion,
            setDescriptionError,
            descriptionSuccess,
            isError,
            descriptionError,
            selectsPokemons,
            getAllPokemons,
            handleSubmit,
            setIsError,
            rateValue,
            getCities,
            onSubmit,
            register,
            getHours,
            errors,
            cities,
            time,
        }}>
            {children}
        </ScheduleContext.Provider>
    )
}