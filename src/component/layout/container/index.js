import React from 'react'

const CustomContainer = ({center, children}) => {
    if (center) {
        return (
            <div className='container' style={{
                minHeight : '100vh',
                width : '80vw',
                padding : '0 3rem',
                fontWeight : 700,
                display : 'flex',
                flexDirection : 'column',
                margin : '1rem 0',
                justifyContent : 'center',
            }}>
                {children}
            </div>
        )
    } else {
        return (
            <div className='container' style={{
                minHeight : '100vh',
                width : '80vw',
                display : 'flex',
                flexDirection : 'column',
                margin : '1rem 0',
                alignItems : 'center',
            }}>
                {children}
            </div>
        )
    }
}

export default CustomContainer