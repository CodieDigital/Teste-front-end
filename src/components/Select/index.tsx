import { MdExpandMore } from 'react-icons/md';
import { MdExpandLess } from 'react-icons/md';
import React, { useEffect, useState } from 'react'
import { DivLabelSelect } from './style';
import { ISelect } from '../../interfaces/components';


export const Select = React.forwardRef<HTMLSelectElement, ISelect>(({valueLabel, idSelect, selectPokemon, options, callBack, ...rest }, ref) => {
    
    const [expand, setExpand] = useState(false)
    
    useEffect(() => {
        const handleClick = (event: any) => {
            if(event.target.tagName === 'SELECT' && event.target.id === idSelect){
                expand ? setExpand(false) : setExpand(true)
            } else {
                setExpand(false)   
            }
        }
        document.addEventListener('click', handleClick)
        return () => {
            document.removeEventListener('click', handleClick);
        }
    }, [expand])
    
    return (
        <>
            <DivLabelSelect $selectPokemon={selectPokemon}>
                <label htmlFor={idSelect}>{valueLabel}</label>
                <select ref={ref} {...rest} onChange={(e) => {
                    e.preventDefault()
                    callBack ? callBack(e.target.value) : null
                }} name={idSelect} id={idSelect} >
                    {
                        options?.map((item: string, index: number) => {
                            return <option key={index} value={item}>{item}</option>
                        })
                    }
                </select>
                {
                    expand ? <div><MdExpandLess  /></div> : <div><MdExpandMore /></div>
                }
            </DivLabelSelect>
        </>
    )
})