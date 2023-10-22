import React from 'react'

const CustomButton = ({ color, onclickFunction, children }) => {
    return (
        <button style={{
            backgroundColor : color,
            borderRadius : 50,
            border : 'none',
            display : 'flex',
            alignItems : 'center',
            justifyContent : 'center',
            padding : '1rem 2rem',
            fontSize : '1rem',
            fontWeight : 600
        }}
        onClick={onclickFunction}
        >
            {children}
        </button>
    )
}

export default CustomButton
