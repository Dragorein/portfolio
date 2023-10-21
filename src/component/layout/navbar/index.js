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
            width : '80vw',
            margin : '0 auto',
            padding : '1rem 2rem',
            alignItems : 'center',
            justifyContent : 'space-around',
            position : 'sticky',
            top : 0,
            zIndex : 3,
        }}>
            <div className='navbarList'>
                <Link className='navbarListItem'>Home</Link>
                <Link className='navbarListItem'>About</Link>
                <Link className='navbarListItem'>Experience</Link>
            </div>
            <CustomButton color={colors.white}>
                <div className='contactIcon' style={{
                    marginRight : '0.5rem'
                }}>
                    <MailOutlineOutlined/>
                </div>
                Contact Me
            </CustomButton>
        </nav>
    )
}

export default Navbar