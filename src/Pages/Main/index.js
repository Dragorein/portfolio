import React from 'react'
import { Home, About, Experience } from "../../component";

const Main = () => {
    return (
        <div className='content' style={{
            padding : '0'
        }}>
            <Home/>
            <About/>
            <Experience/>
        </div>
    )
}

export default Main