import React from 'react'
import { colors } from '../../../utilities/colors';

const ContactItem = ({imageSource, text, link}) => {
    return (
        <div className='linkContact' style={{
            display : 'flex',
            flexDirection : 'row',
            alignItems : 'center',
            fontSize : '1rem'
        }}>
            <img src={imageSource} alt='linkedin' style={styles.contactImage} />
            {link && (
                <a href={link} style={{
                    textDecoration : 'none',
                    color : colors.white
                }}>{text}</a>
            )}
            {!link && (
                <span>{text}</span>
            )}
        </div>
    )
}

export default ContactItem;

const styles = {
    contactImage : {
        height : '3rem',
        width : '3rem',
        objectFit : 'cover',
        padding : '1rem'
    },
}