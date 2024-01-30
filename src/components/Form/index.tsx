import { useEffect, useState } from "react"
import { Button } from "../Button/style"
import { Input } from "../Input"
import { Select } from "../Select"
import { ContainerForm } from "./style"
import { ICity, IForm, IHour, IPokemon, ISchedule } from "../../interfaces/components"
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import axios from "axios"  

const schema = yup.object().shape({
  name: yup.string().required(),
  surname: yup.string().required(),
  region: yup.string().required(),
  city: yup.string().required(),
  pokemons: yup.array().of(
    yup.string()
  ).required(),
  date: yup.string().required(),
  hour: yup.string().required(),
});

export const Form = ({regions, dates}: IForm) => {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            pokemons: []
        }
    });

    const onSubmit = (payload: any) => {
        console.log(payload)
    }
    
    const [selects, setSelect] = useState<any>([])
    const [cities, setCities] = useState<ICity[]>([])
    const [pokemons, setPokemons] = useState<IPokemon[]>([])
    const [hours, setHours] = useState<IHour>([])
    
    const createSelectPokemon = (e: any) => {
        e.preventDefault()
        if(selects.length < 6){
          setSelect([...selects, <Select 
                {...register(`pokemons`, {required:true})} 
                key={selects.length}
                valueLabel={`Pokémon 0${selects.length + 1}`} 
                idSelect={`pokemon${selects.length}`} 
                selectPokemon={true} 
                options={pokemons.map((element) => element.name)}
            />
        ])
        }
    }

    const getCities = async (region: string) => {
        const findRegion = regions.find((element) => element.name === region)
        if(findRegion){
            try {
                const {data} = await axios.get(findRegion.url)
                setCities(['Selecione uma cidade', ...data.locations])
            } catch (error) {
                console.log('Erro ao buscar as cidades', error)
            }
        }
    }

    const getPokemons = async (city: string) => {
        const findCity = cities.find((element) => element.name === city)
        if(findCity){
            try {
                const {data} = await axios.get(findCity.url)
                const pokemonsArray: IPokemon[] = []
                await Promise.all(data.areas.map(async (area: any) => {
                    const {data} = await axios.get(area.url)
                    data.pokemon_encounters.forEach((element: any) => {     
                        pokemonsArray.push(element.pokemon)
                    })
                }))
                setPokemons([...pokemonsArray])
            } catch (error) {
                console.log('Erro ao buscar as cidades', error)
            }
        }
    }

    const getHours = async (payload: string) => {
        try {
            const {data} = await axios.post('http://localhost:3000/api/scheduling/time', {date: payload})
            setHours(data)
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        console.log(pokemons)
        
    }, [pokemons])

    return (
        <ContainerForm>
            <form onSubmit={handleSubmit(onSubmit)} action="">
                <h3>Preencha o formulário abaixo para agendar sua consulta</h3>
                <section>
                    <Input {...register('name')} valueLabel='Nome' idInput='name' typeInput='text' placeholder='Digite seu nome' />
                    <Input {...register('surname')} valueLabel='Sobrenome' idInput='surname' typeInput='text' placeholder='Digite seu sobrenome' />
                    <Select {...register('region')} callBack={getCities} valueLabel='Região' idSelect='region' options={regions.map((element) => element.name)} />
                    <Select {...register('city')} callBack={getPokemons} valueLabel='cidade' idSelect='city' options={cities.map((element: {name: string}) => element.name)} />
                </section>
                <section>
                    <div>
                        <h4>Cadastre seu time</h4>
                        <p>Atendemos até 06 pokémons por vez</p>
                    </div>
                    <ul>
                        {
                            selects?.map((item: any) => {
                                return (
                                    <li key={item.props.valueLabel}>
                                        {
                                            item
                                        }
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <Button type='button' $addPokemon={true} onClick={(e) =>  createSelectPokemon(e)}>Adicionar novo pokémon ao time...</Button>
                </section>
                <section>
                    <Select {...register('date')} callBack={getHours} valueLabel='Data para atendimento' idSelect='dateSchedule' options={dates} />
                    <Select {...register('hour')} valueLabel='Horário de atendimento' idSelect='timeSchedule' options={hours} />
                </section>
                <section>
                    <div>
                        <div>
                            <p>Número de pokémons a serem atendidos:</p>
                            <p>{selects.length === 0 ? '0' : `0${selects.length}`}</p>
                        </div>
                        <div>
                            <p>Atendimento unitário por pokémon: </p>
                            <p>R$ 70,00</p>
                        </div>
                        <div>
                            <p>Subtotal:</p>
                            <p>R$ {selects.length * 70}</p>
                        </div>
                        <div>
                            <p>Taxa geracional*: </p>
                            <p>R$ 2,10</p>
                        </div>
                        <p>*adicionamos uma taxa de 3%, multiplicado pelo número da geração mais alta do time, com limite de até 30%</p>
                    </div>
                    <div>
                        <p>Valor Total: R$ 72,10</p>
                        <Button type='submit'>Concluir Agendamento</Button>
                    </div>
                </section>
            </form>
        </ContainerForm>
    )
}