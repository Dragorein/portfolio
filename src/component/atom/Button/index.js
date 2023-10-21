import React from 'react'

const CustomButton = ({ color, children }) => {
    return (
        <button style={{
            backgroundColor : color,
            borderRadius : 50,
            border : 'none',
            display : 'flex',
            alignItems : 'center',
            justifyContent : 'center',
            padding : '1rem 2rem',
        }}>
            {children}
        </button>
    )
}

export default CustomButton
