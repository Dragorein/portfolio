import React from 'react'
import { Container } from '../../layout'
import SkillList from '../../molecule/skillList'
import '../../../styles/about.css'

const About = () => {
    return (
        <section id="about" style={{
            height : 'calc(100vh - 4rem)',
            width : '100vw',
            margin : '0 auto',
            overflow : 'hidden',
            position : 'relative',
        }}>
            <Container>
                    <span className='title' style={{
                        paddingTop: '5rem',
                        fontWeight : 600,
                        alignSelf : 'center'
                    }}>
                        What I Do
                    </span>
                    <span className='description' style={{
                        fontWeight : 400,
                        maxWidth : '80vw',
                        textAlign : 'left',
                        alignSelf : 'center'
                    }}>
                        As a Full Stack Developer, I've honed my skills in fintech and digital solutions.
                        During my internship at Emporia Digital Raya, I created innovative Payment Gateways and optimized services.
                        Currently at Cranium Indonesia, I specialize in designing Content Management Systems, creating RESTful APIs, and integrating third-party services effectively.
                        My expertise spans Node.js, Express, React, SQL/NoSQL databases.
                        I'm passionate about crafting tech solutions that drive success. Open to exciting opportunities in the tech world.
                    </span>
                    <span className='title' style={{
                        paddingTop: '2.5rem',
                        fontWeight : 600,
                        alignSelf : 'center'
                    }}>
                        My Skills
                    </span>
                <SkillList/>
            </Container>
        </section>
    )
}

export default About