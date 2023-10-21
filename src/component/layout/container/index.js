import React from 'react'

const CustomContainer = ({center, children}) => {
    if (center) {
        return (
            <div className='container' style={{
                height : '100vh',
                width : '94vw',
                padding : '0 3rem',
                fontWeight : 700,
                display : 'flex',
                flexDirection : 'column',
                justifyContent : 'center',
            }}>
                {children}
            </div>
        )
    } else {
        return (
            <div className='container' style={{
                height : '100vh',
                width : '94vw',
                padding : '0 3rem',
                fontWeight : 700,
                display : 'flex',
                flexDirection : 'column',
            }}>
                {children}
            </div>
        )
    }
}

export default CustomContainer