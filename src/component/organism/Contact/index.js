import React, { useRef } from 'react';
import { Container } from '../../layout';
import { colors } from '../../../utilities/colors';
import { MailOutlineOutlined } from '@mui/icons-material';
import { ContactInfo } from '../../molecule';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, form.current, process.env.REACT_APP_EMAILJS_PUBLIC_KEY)
        .then((result) => {
            console.log(result.text);
            e.target.reset()
            alert('Email has been sent');
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <section id='Contact' style={{
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
                    margin: '7rem 0 2rem 0',
                }}>Contact Me</h1>
                <span className='introduction' style={{
                    fontSize : '1.7rem',
                    fontWeight : 300
                }}>
                Feel free to complete this form and let's start a conversation about exciting job opportunities.
                </span>
                <form className='form' style={{
                    margin : '2rem',
                    width : '90vw',
                    maxWidth : '65vw',
                    display : 'flex',
                    flexDirection : 'column',
                    alignItems : 'center',
                    justifyContent : 'center',
                    }} 
                    onSubmit={sendEmail}
                    ref={form}
                >

                    <input type='text' className='name' placeholder='Your Name' name='from_name' style={styles.input}/>
                    <input type='text' className='email' placeholder='Your Email' name='from_email' style={styles.input}/>
                    <textarea name='message' placeholder='Your Message' rows={10} style={styles.input}/>
                    <button type='submit' value='send' className='submitBtn' style={{
                        backgroundColor : colors.white,
                        borderRadius : 50,
                        border : 'none',
                        display : 'flex',
                        alignItems : 'center',
                        justifyContent : 'center',
                        padding : '1rem 2rem',
                        margin : '1rem 2rem',
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
                    <ContactInfo/>

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
    },
}