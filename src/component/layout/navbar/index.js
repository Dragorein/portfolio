import React from 'react'
import { Link } from "react-scroll";
import { MailOutlineOutlined } from "@mui/icons-material";

import '../../../styles/navbar.css'
import { CustomButton } from '../../atom';
import { colors } from '../../../utilities/colors';

const Navbar = () => {
    return (
        <nav className='navbar' style={{
            display : 'flex',
            flex : 1,
            height : '4rem',
            width : '50vw',
            margin : '0 auto',
            padding : '1rem 2rem',
            alignItems : 'center',
            justifyContent : 'space-between',
            position : 'sticky',
            top : 0,
            zIndex : 3,
            backgroundColor : 'rgba(100, 100, 100, 0.8)',
            borderBottomLeftRadius:50,
            borderBottomRightRadius:50
        }}>
            <div className='navbarList' style={{
                fontSize : '2rem',
                fontWeight : 500
            }}>
                <Link className='navbarListItem'>Home</Link>
                <Link className='navbarListItem'>About</Link>
                <Link className='navbarListItem'>Experience</Link>
            </div>
            <CustomButton color={colors.white}>
                <div className='contactIcon' style={{
                    marginRight : '0.5rem',
                }}>
                    <MailOutlineOutlined/>
                </div>
                Contact Me
            </CustomButton>
        </nav>
    )
}

export default Navbar