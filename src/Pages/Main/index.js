import React from 'react'
import { Home, About, Experience, Contact } from "../../component";

const Main = () => {
    return (
        <div className='content' style={{
            padding : '0',
            margin : '0'
        }}>
            <Home/>
            <About/>
            <Experience/>
            <Contact/>
        </div>
    )
}

export default Main