import { IBottomHeader } from '../../interfaces/components'
import { IoChevronForwardOutline } from 'react-icons/io5'
import { BottomHeaderStyle } from './style'
import ActiveLink from '../ActiveLink'

export const BottomHeader = ({section, description}: IBottomHeader) => {

    return (
        <>
            <BottomHeaderStyle>
                <div>
                    <div>
                        <ActiveLink children='Home' href='/' />
                        <p><IoChevronForwardOutline /></p>
                        <p>{section}</p>
                    </div>
                    <h2>{section}</h2>
                    <p>{description}</p>
                </div>
            </BottomHeaderStyle>
        </>
    )
    
}