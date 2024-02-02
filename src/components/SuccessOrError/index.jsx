import { ScheduleContext } from '../../context/ScheduleContext'
import { ContainerSuccessOrError } from './style'
import { useContext } from 'react'
import ImageError from '../../../public/warning.svg'
import ImageSuccess from '../../../public/check.svg'
import ActiveLink from '../ActiveLink'
import Image from 'next/image'

export const SuccessOrError = ({isError}) => {

    const { descriptionError, descriptionSuccess } = useContext(ScheduleContext)

    return (
        <ContainerSuccessOrError>
            <section>
                <h2>{isError ? 
                        'Houve um problema no agendamento' : 
                            'Consulta agendada'}</h2>
                {
                    <Image 
                        src={isError ? 
                                ImageError : 
                                    ImageSuccess} 
                        alt={isError ? 
                                'Imagem com um simbolo de perigo' : 
                                    'Imagem de confirmação do agendamento'} /> 
                }
                <p>{isError ? descriptionError : descriptionSuccess}</p>
                <ActiveLink children='Fazer novo agendamento' href='/schedule' />
            </section>
        </ContainerSuccessOrError>
    )
}