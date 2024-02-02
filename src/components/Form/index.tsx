import { ScheduleContext } from '../../context/ScheduleContext'
import { IForm } from '../../interfaces/components'
import { Button } from '../Button/style'
import { ContainerForm } from './style'
import { useContext } from 'react'
import { Select } from '../Select'
import { Input } from '../Input'

export const Form = ({regions, dates}: IForm) => {

    const { 
        createSelectPokemon,
        getGenerationRegion,
        selectsPokemons, 
        getAllPokemons, 
        handleSubmit,
        getCities, 
        rateValue, 
        onSubmit,
        register,
        getHours,
        cities, 
        errors,
        time,
    } = useContext(ScheduleContext)
    
    return (
        <ContainerForm>
            <form onSubmit={handleSubmit(onSubmit)} action=''>
                <h3>Preencha o formulário abaixo para agendar sua consulta</h3>
                <section>
                    <Input 
                        {...register('name')} 
                        valueLabel='Nome' 
                        idInput='name' 
                        typeInput='text' 
                        placeholder='Digite seu nome' 
                        error={errors.name}
                    />
                    <Input 
                        {...register('surname')} 
                        valueLabel='Sobrenome' 
                        idInput='surname' 
                        typeInput='text' 
                        placeholder='Digite seu sobrenome'
                        error={errors.surname}
                    />
                    <Select 
                        {...register('region')} 
                        callBack={getCities} 
                        valueLabel='Região' 
                        idSelect='region' 
                        options={regions.map((element) => element.name)} 
                        optionDefault='Selecione uma região' 
                        error={errors.region}
                    />
                    <Select 
                        {...register('city')} 
                        callBack={getAllPokemons} 
                        valueLabel='Cidade' 
                        idSelect='city' 
                        options={cities.map((element: {name: string}) => element.name)}
                        optionDefault={cities.length ? 'Selecione uma cidade' : 'Selecione primeiro uma região'} 
                        isDisable={cities.length ? false : true}
                        error={errors.city}
                    />
                </section>
                <section>
                    <div>
                        <h4>Cadastre seu time</h4>
                        <p>Atendemos até 06 pokémons por vez</p>
                    </div>
                    <ul>
                        {
                            selectsPokemons?.map((item: JSX.Element, index: number) => {
                                return (
                                    <li key={`list-select-${index}`}>
                                        {
                                            item
                                        }
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <Button 
                        type='button' 
                        $addPokemon={true}
                        onClick={() => {
                            getGenerationRegion(regions)
                            createSelectPokemon()
                        }}>
                        Adicionar novo pokémon ao time
                    </Button>
                </section>
                <section>
                    <Select 
                        {...register('schedule.date')} 
                        callBack={getHours} 
                        valueLabel='Data para atendimento' 
                        idSelect='dateSchedule' 
                        options={dates} 
                        optionDefault='Selecione uma data'
                        error={errors.schedule?.date}
                    />
                    <Select 
                        {...register('schedule.time')} 
                        valueLabel='Horário de atendimento' 
                        idSelect='hourSchedule' 
                        options={time} 
                        optionDefault={time.length ? 'Selecione um horário' : 'Selecione primeiro uma data'} 
                        isDisable={time.length ? false : true}
                        error={errors.schedule?.time}
                    />
                </section>
                <section>
                    <div>
                        <div>
                            <p>Número de pokémons a serem atendidos:</p>
                            <p>{selectsPokemons.length === 0 ? '0' : `0${selectsPokemons.length}`}</p>
                        </div>
                        <div>
                            <p>Atendimento unitário por pokémon: </p>
                            <p>R$ 70,00</p>
                        </div>
                        <div>
                            <p>Subtotal:</p>
                            <p>R$ {selectsPokemons.length > 0 ? selectsPokemons.length * 70 : '0.00'}</p>
                        </div>
                        <div>
                            <p>Taxa geracional*: </p>
                            <p>R$ {rateValue ? rateValue.toFixed(2) : '0.00'}</p>
                        </div>
                        <p>*adicionamos uma taxa de 3%, multiplicado pelo número da geração mais alta do time, com limite de até 30%</p>
                    </div>
                    <div>
                        <p>Valor Total: R$ {rateValue? (parseFloat(rateValue.toFixed(2)) + (selectsPokemons.length * 70)).toFixed(2) : '0.00'}</p>
                        <Button type='submit'>Concluir Agendamento</Button>
                    </div>
                </section>
            </form>
        </ContainerForm>
    )
}