import { IoChevronForwardOutline } from 'react-icons/io5';
import { BottomHeaderStyle } from './style'

export const BottomHeader = ({section, description}: any) => {
    return (
        <>
            <BottomHeaderStyle>
                <div>
                    <div>
                        <p>Home</p>
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