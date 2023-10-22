import React from 'react'
import { GmailIllustration, LinkedinIllustration, WhatsAppIllustration } from '../../../assets'
import { ContactItem } from '../../atom';

const ContactInfo = () => {
    return (
        <div className='linkContact' style={{
            display : 'flex',
            width : '100%',
            flexDirection : 'row',
            justifyContent : 'space-evenly',
            flexWrap : 'wrap'
        }}>
            <ContactItem imageSource={LinkedinIllustration} text={'Reiner Terry Gunawan'} link={'https://www.linkedin.com/in/reiner-terry/'} />
            <ContactItem imageSource={GmailIllustration} text={'reinerterry@gmail.com'} />
            <ContactItem imageSource={WhatsAppIllustration} text={'(+62) 85311840970'} />
        </div>
    )
}

export default ContactInfo;