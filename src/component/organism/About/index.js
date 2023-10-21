import React from 'react'
import { Container } from '../../layout'
import SkillList from '../../molecule/skillList'
import '../../../styles/about.css'

const About = () => {
    return (
        <section id="about" style={{
            minHeight : '100vh',
            margin : '0 auto',
            width : '100vw',
            maxWidth : '90rem',
            display : 'flex',
            flexDirection : 'column',
            alignItems : 'center',
            justifyContent : 'center',
            padding : '0 1rem',
        }}>
            <Container>
                <span className='title' style={{
                    fontWeight : 600,
                    alignItems : 'center',
                    justifyContent : 'center',
                    margin: '4rem 0 2rem 0',
                }}>
                    What I Do
                </span>
                <span className='description' style={{
                    fontWeight : 400,
                    maxWidth : '80rem',
                    textAlign : 'left',
                    alignItems : 'center',
                    justifyContent : 'center',
                }}>
                    As a Full Stack Developer, I've honed my skills in fintech and digital solutions.
                    During my internship at Emporia Digital Raya, I created innovative Payment Gateways and optimized services.
                    Currently at Cranium Indonesia, I specialize in designing Content Management Systems, creating RESTful APIs, and integrating third-party services effectively.
                    My expertise spans Node.js, Express, React, SQL/NoSQL databases.
                    I'm passionate about crafting tech solutions that drive success. Open to exciting opportunities in the tech world.
                </span>
                <span className='title' style={{
                    fontWeight : 600,
                    paddingTop: '1rem',
                    alignItems : 'center',
                    justifyContent : 'center',
                }}>
                    My Skills
                </span>
                <SkillList/>
            </Container>
        </section>
    )
}

export default About