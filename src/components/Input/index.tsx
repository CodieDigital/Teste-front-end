import { IInput } from '../../interfaces/components'
import { ContainerLabelInput } from './style'
import React from 'react'

export const Input = React.forwardRef<HTMLInputElement, IInput>(({valueLabel, idInput, typeInput, placeholder, ...rest}, ref) => {

    return (
        <>
            <ContainerLabelInput>
                <label htmlFor={idInput}>{valueLabel}</label>
                <input 
                    id={idInput} 
                    type={typeInput} 
                    placeholder={placeholder} 
                    ref={ref} 
                    {...rest} 
                />
            </ContainerLabelInput>
        </>
    )

})