import React from 'react';
import { Container } from '../../layout';
import { colors } from '../../../utilities/colors';
import { MailOutlineOutlined } from '@mui/icons-material';

const Contact = () => {
    return (
        <section id='contact' style={{
            minHeight : '100vh',
            margin : '0 auto',
            width : '100vw',
            maxWidth : '90rem',
            display : 'flex',
            flexDirection : 'column',
            alignItems : 'center',
            justifyContent : 'center',
        }}>
            <Container>
                <h1 className='title' style={{
                    alignItems : 'center',
                    justifyContent : 'center',
                    margin: '4rem 0 2rem 0',
                }}>Contact Me</h1>
                <span className='introduction' style={{
                    fontSize : '1.7rem',
                    fontWeight : 300
                }}>
                Feel free to complete this form and let's start a conversation about exciting job opportunities.
                </span>
                <form className='form' style={{
                    margin : '1rem',
                    backgroundColor : 'blue',
                    width : '90vw',
                    maxWidth : '65vw',
                    display : 'flex',
                    flexDirection : 'column',
                    alignItems : 'center',
                    justifyContent : 'center',
                }}>
                    <input type='text' className='name' placeholder='Your Name' style={styles.input}/>
                    <input type='text' className='email' placeholder='Your Email' style={styles.input}/>
                    <textarea name='message' placeholder='Your Message' rows={10} style={styles.input}/>
                    <button type='submit' value='send' className='submitBtn' style={{
                        backgroundColor : colors.white,
                        borderRadius : 50,
                        border : 'none',
                        display : 'flex',
                        alignItems : 'center',
                        justifyContent : 'center',
                        padding : '1rem 2rem',
                        fontSize : '1rem',
                        fontWeight : 600
                    }}>
                        <div className='btnIcon' style={{
                            marginRight : '0.5rem',
                        }}>
                            <MailOutlineOutlined/>
                        </div>
                        Send
                    </button>
                    <div className='linkContact' style={{}}>
                    </div>
                </form>
            </Container>
        </section>
    )
}

export default Contact;

const styles = {
    input : {
        fontSize: '1rem',
        fontWeight : 500,
        fontFamily : 'Poppins',
        width : '100%',
        maxWidth : '40rem',
        margin : '0.5rem',
        padding : '0.5rem 1rem',
        color : colors.white,
        border : 'none',
        borderRadius : '0.5rem',
        backgroundColor : 'rgb(20, 20, 20)'
    }
}