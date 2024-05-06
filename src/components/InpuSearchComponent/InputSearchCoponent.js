
import React from 'react'
import { SearchOutlined } from '@ant-design/icons'
import InputComponent from '../InputComponent/InputComponent'
import ButtonComponent from '../ButtonComponent/ButtonComponent'

const InputSearchComponent = (props) => {
    const {
        size, placeholder, textbutton,
        bordered, backgroundColorInput = '#F1F1F7',
        backgroundColorButton = 'rgb(132, 177, 46)',
        colorButton = '#fff'
    } = props

    return (
        <div style={{ display: 'flex'}}>
            <InputComponent
                size={size}
                placeholder={placeholder}
                bordered={bordered}
                style={{ backgroundColor: backgroundColorInput}}
                className="w-[500px] border-0"
                {...props}
            />
            <ButtonComponent
                size="large"
                styleButton={{ background: backgroundColorButton, border: !bordered && 'none' }}
                icon={<SearchOutlined color={colorButton} style={{ color: '#fff' }} />}
                textbutton={textbutton}
                styleTextButton={{ color: colorButton }}
            />
        </div>
    )
}

export default InputSearchComponent