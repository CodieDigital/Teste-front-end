import { MdExpandMore } from 'react-icons/md';
import { MdExpandLess } from 'react-icons/md';
import { useEffect, useState } from 'react'
import { DivLabelSelect } from './style';
import { ISelect } from '../../interfaces/components';


export const Select = ({valueLabel, idSelect, selectPokemon, options }: ISelect) => {

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
                <select name={valueLabel} id={idSelect} >
                    {
                        options?.map((item: any) => {
                            return <option key={item} value={item}>{item}</option>
                        })
                    }
                </select>
                {
                    expand ? <div><MdExpandLess  /></div> : <div><MdExpandMore /></div>
                }
            </DivLabelSelect>
        </>
    )

}