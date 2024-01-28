import { DivLabelInput } from './style'

export const Input = ({valueLabel, idInput, typeInput, placeholder }: any) => {

    return (
        <>
            <DivLabelInput>
                <label htmlFor={idInput}>{valueLabel}</label>
                <input id={idInput} type={typeInput} placeholder={placeholder} />
            </DivLabelInput>
        </>
    )

}