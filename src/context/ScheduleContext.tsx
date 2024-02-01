import { IAreaCity, ICity, IInfoSchedule, IPokemon, THour } from '../interfaces/components'
import { UseFormHandleSubmit, UseFormRegister, useForm } from 'react-hook-form'
import { createContext, useEffect, useState } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import { IRegion } from '../interfaces/pages'
import { Select } from '../components/Select'
import { toast } from 'react-toastify'
import * as yup from 'yup'
import axios from 'axios'

const schema = yup.object().shape({
    name: yup.string().required(),
    surname: yup.string().required(),
    region: yup.string().required(),
    city: yup.string().required(),
    pokemons: yup.array().of(
      yup.string().optional()
    ).required().min(1),
    date: yup.string().required(),
    hour: yup.string().required(),
})

export interface IDefaultProviderProps {
    children: React.ReactNode
}

export interface IScheduleContext {
    getGenerationRegion: (regions: IRegion[]) => void,
    handleSubmit: UseFormHandleSubmit<IInfoSchedule>,
    onSubmit: (payload: IInfoSchedule) => void,
    register: UseFormRegister<IInfoSchedule>,
    getAllPokemons: (city: string) => void,
    getCities: (region: string) => void,
    getHours: (date: string) => void,
    createSelectPokemon: () => void,
    selectsPokemons: JSX.Element[],
    rateValue: number,
    cities: ICity[],
    hours: string[],
}

export const ScheduleContext = createContext({} as IScheduleContext)

export const ScheduleProvider = ({children}: IDefaultProviderProps) => {

    const { register, handleSubmit, formState: { errors }, watch } = useForm({
        resolver: yupResolver(schema),
    })
    
    const onSubmit = (payload: IInfoSchedule) => {
        console.log(payload)
    }

    const [myPokemonsRegionGeneration, setMyPokemonsRegionGeneration] = useState<{region: string, generation: number}[]>([])
    const [selectsPokemons, setSelectsPokemons] = useState<JSX.Element[]>([])
    const [allPokemons, setAllPokemons] = useState<IPokemon[]>([])
    const [rateValue, setRateValue] = useState<number>(0)
    const [cities, setCities] = useState<ICity[]>([])
    const [hours, setHours] = useState<THour>([])
    
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
        if(!region){
            setCities([])
        }
        if(region){
            setCities([])
            try {
                const {data} = await axios.get(`https://pokeapi.co/api/v2/region/${region}/`)
                setCities(data.locations)
            } catch (error) {
                console.log('Erro ao buscar as cidades', error)
            }
        }
    }
    
    const getAllPokemons = async (city: string) => {
        console.log(allPokemons)   
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
                console.log('Erro ao buscar as cidades', error)
            }
        }
    }

    const getHours = async (date: string) => {
        if(!date){
            setHours([])
        }
        if(date){
            try {
                const {data} = await axios.post('http://localhost:3000/api/scheduling/time', {date: date})
                setHours(data)
            } catch (error) {
                console.log(error)
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

    return (
        <ScheduleContext.Provider value={{
            createSelectPokemon,
            getGenerationRegion,
            selectsPokemons,
            getAllPokemons,
            handleSubmit,
            rateValue,
            getCities,
            onSubmit,
            register,
            getHours,
            cities,
            hours,
        }}>
            {children}
        </ScheduleContext.Provider>
    )
}