import React from 'react'
import { colors } from '../../../utilities/colors'

const CustomImageCard = ({children}) => {
    return (
        <div style={{
            backgroundColor : colors.white,
            borderRadius : 20,
            width : '12rem',
            height : '12rem',
            display : 'flex',
            justifyContent : 'center',
            alignItems : 'center',
            margin : '2rem'
        }}>
            {children}
        </div>
    )
}

export default CustomImageCard