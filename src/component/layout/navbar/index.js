import React, { useState } from 'react'
import { Link } from "react-scroll";
import { MailOutlineOutlined, MenuOutlined } from "@mui/icons-material";

import '../../../styles/navbar.css'
import { CustomButton } from '../../atom';
import { colors } from '../../../utilities/colors';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <nav className='navbar' style={{
            display : 'flex',
            height : '4rem',
            margin : '0 auto',
            padding : '1rem 3rem',
            alignItems : 'center',
            justifyContent : 'space-between',
            position : 'sticky',
            top : 0,
            zIndex : 3,
        }}>
            <div className='navbarListDesktop' style={{
                fontSize : '2rem',
                fontWeight : 500
            }}>
                <Link className='navbarListItem'
                    activeClass ='active'
                    to='Home'
                    spy
                    smooth
                    offset={-100}
                    duration={500}
                >Home</Link>
                <Link className='navbarListItem'
                    activeClass ='active'
                    to='About'
                    spy
                    smooth
                    offset={-30}
                    duration={500}
                >About</Link>
                <Link className='navbarListItem'
                    activeClass ='active'
                    to='Experience'
                    spy
                    smooth
                    offset={-30}
                    duration={500}
                >Experience</Link>
            </div>
            <div className='contactMeBtn'>
                <CustomButton color={colors.white} onclickFunction={() => {
                        document.getElementById('Contact').scrollIntoView({ behavior : 'smooth' });
                    }}>
                    <div className='contactIcon' style={{
                        marginRight : '0.5rem',
                    }}>
                        <MailOutlineOutlined/>
                    </div>
                    Contact Me
                </CustomButton>
            </div>

            <div className='burgerMenu' onClick={() => setShowMenu(!showMenu)} style={{
                position : 'absolute',
                top : '2rem',
                right : '2rem',
            }}>
                <MenuOutlined fontSize='large'/>
            </div>
            <div className='navbarListMobile' style={{
                position : 'absolute',
                top : '4rem',
                right : '2rem',
                display : showMenu ? 'flex' : 'none',
                fontSize : '1rem',
                fontWeight : 600,
                flexDirection : 'column',
                backgroundColor : colors.transparent,
                borderRadius : '1rem',
                alignItems : 'center'
            }}>
                <Link className='navbarListItemMobile'
                    activeClass ='activeMobile'
                    to='Home'
                    spy
                    smooth
                    offset={-100}
                    duration={500}
                    onClick={() => setShowMenu(false)}
                >Home</Link>
                <Link className='navbarListItemMobile'
                    activeClass ='activeMobile'
                    to='About'
                    spy
                    smooth
                    offset={-30}
                    duration={500}
                    onClick={() => setShowMenu(false)}
                >About</Link>
                <Link className='navbarListItemMobile'
                    activeClass ='activeMobile'
                    to='Experience'
                    spy
                    smooth
                    offset={-30}
                    duration={500}
                    onClick={() => setShowMenu(false)}
                >Experience</Link>
                <Link className='navbarListItemMobile'
                    activeClass ='activeMobile'
                    to='Contact'
                    spy
                    smooth
                    offset={-30}
                    duration={500}
                    onClick={() => setShowMenu(false)}
                >Contact Me</Link>
            </div>
        </nav>
    )
}

export default Navbar