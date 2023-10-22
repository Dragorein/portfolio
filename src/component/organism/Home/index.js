import React from 'react'

import { UserImage } from '../../../assets'
import { Link } from 'react-scroll'
import { CustomButton } from '../../atom'
import { colors } from '../../../utilities/colors'
import { BusinessCenterOutlined } from "@mui/icons-material";

import '../../../styles/home.css';
import { Container } from '../../layout'

const Home = () => {
    return (
        <section id='Home' style={{
            height : 'calc(100vh - 4rem)',
            width : '100vw',
            margin : '0 auto',
            overflow : 'hidden',
            position : 'relative',
        }}>
            <Container center>
                <div className='content' style={{ padding: '2rem' }}>
                    <span className='introduction' style={{ fontWeight : 500 }}>Hi, </span>
                    <br/>
                    <span className='intro'>
                        I'm <span className='introName' style={{ color : colors.warning }}>Reiner Terry</span>
                        <br/>Full Stack Developer
                    </span>
                    <p className='bio' style={{ fontWeight : 300 }}>
                        I'm a node.js Full Stack Developer with experience in creating restful APIs and mobile or web design using React.
                    </p>
                    <Link>
                        <CustomButton color={colors.white} onclickFunction={() => {
                            document.getElementById('Contact').scrollIntoView({ behavior : 'smooth' });
                        }}>
                            <div style={{ marginRight : '0.5rem' }}>
                                <BusinessCenterOutlined />
                            </div>
                            Hire Me
                        </CustomButton>
                    </Link>
                </div>
                <img src={UserImage} alt='user' className='userImage' style={{
                    position : 'absolute',
                    zIndex : -1,
                    top : '-6rem',
                    objectFit : 'cover',
                    height : '100vh'
                }}/>
            </Container>
        </section>
    )
}

export default Home