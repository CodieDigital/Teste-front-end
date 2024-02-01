import { ISelect } from '../../interfaces/components'
import React, { useEffect, useState } from 'react'
import { MdExpandMore } from 'react-icons/md'
import { MdExpandLess } from 'react-icons/md'
import { DivLabelSelect } from './style'


export const Select = React.forwardRef<HTMLSelectElement, ISelect>(({valueLabel, options, idSelect, selectPokemon, callBack, optionDefault, isDisable, ...rest }, ref) => {
    
    const [expandToggleArrow, setExpandToggleArrow] = useState(false)
    
    useEffect(() => {
        const handleClick = (event: any) => {
            if(
                event.target.tagName === 'SELECT' && 
                event.target.id === idSelect
            ){
                callBack && callBack(event.target.value, event.target.length) 
                expandToggleArrow ? setExpandToggleArrow(false) : setExpandToggleArrow(true)
            } else {
                setExpandToggleArrow(false)   
            }
        }
        document.addEventListener('click', handleClick)
        return () => {
            document.removeEventListener('click', handleClick)
        }
    }, [expandToggleArrow])
    
    return (
        <>
            <DivLabelSelect $isDisable={isDisable} $selectPokemon={selectPokemon}>
                <label htmlFor={idSelect}>{valueLabel}</label>
                <select
                    name={valueLabel} 
                    id={idSelect}
                    disabled={isDisable}
                    ref={ref}
                    {...rest}
                >
                    <option value=''>{optionDefault}</option>
                    {
                        options?.map((item: string, index: number) => {
                            return <option key={index} value={item}>{item}</option>
                        })
                    }
                </select>
                {
                    expandToggleArrow ? <div><MdExpandLess  /></div> : <div><MdExpandMore /></div>
                }
            </DivLabelSelect>
        </>
    )
})