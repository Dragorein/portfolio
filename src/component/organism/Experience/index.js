import React from 'react'
import { Container } from '../../layout'
import { colors } from '../../../utilities/colors'

const Experience = () => {
    return (
        <section id="experience" style={{
            minHeight : 'calc(100vh-4rem)',
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
                <span style={{
                    margin : '1rem 0'
                }}>My Experience</span>
                <div className='card' style={{
                    textAlign : 'left',
                    padding : '2rem'
                }}>
                <div className='experienceCard' style={{
                    backgroundColor : 'rgba(200,200,200,0.2)',
                    padding : '2rem',
                    borderRadius : 50,
                    fontWeight : 500,
                    fontSize : '2rem',
                    width : '65vw'
                }}>
                    <span className='occupation' style={{
                        fontWeight : 500,
                        fontSize : '2.5rem',
                    }}>Full Stack Developer Intern, Emporia Digital Raya</span>
                    <p className='year' style={{
                        fontWeight : 300,
                        fontSize : '1rem',
                    }}>Aug 2021 - Dec 2021</p>
                    <p className='description' style={{
                        fontWeight : 400,
                        fontSize : '1.5rem',
                    }}>Emporia Digital Raya, a subsidiary of PT Anabatic Technologies, specializes in fintech solutions.</p>
                    <hr/>
                        <ul>
                            <li>Developed a Payment Gateway to expand payment options.</li>
                            <li>Maintained gateways for seamless integration.</li>
                            <li>Implemented new features for application and database maintenance.</li>
                            <li>Optimized and standardized services for efficiency.</li>
                            <li>Collaborated on a mobile app with atomic design and an OOP approach.</li>
                        </ul>
                    </div>
                </div>
                <div className='card' style={{
                    textAlign : 'left',
                }}>
                <div className='experienceCard' style={{
                    backgroundColor : 'rgba(200,200,200,0.2)',
                    padding : '2rem',
                    borderRadius : 50,
                    fontWeight : 500,
                    fontSize : '2rem',
                    width : '65vw'
                }}>
                    <span className='occupation' style={{
                        fontWeight : 500,
                        fontSize : '2.5rem',
                    }}>Full Stack Developer, Cranium Indonesia</span>
                    <p className='year' style={{
                        fontWeight : 300,
                        fontSize : '1rem',
                    }}>Sep 2022 - Now</p>
                    <p className='description' style={{
                        fontWeight : 400,
                        fontSize : '1.5rem',
                    }}>Cranium Indonesia is a software house based in Jakarta, Indonesia, providing digital solutions</p>
                    <hr/>
                        <ul>
                            <li>Designed a CMS using Express JS and Handlebars/React JS.</li>
                            <li>Proficient in creating RESTful APIs with Express JS and enhancing database management using Sequelize.</li>
                            <li>Integrated third-party services (OneSignal, Mailgun, Google Firebase, AWS) into APIs and mobile apps.</li>
                            <li>Strong understanding of SQL databases (MySQL, PostgreSQL) and NoSQL architecture.</li>
                        </ul>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Experience