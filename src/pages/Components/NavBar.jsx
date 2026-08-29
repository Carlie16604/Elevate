import React, { useEffect, useState } from "react";
import { Link, useLocation } from 'react-router-dom';
import Logo from '../../assets/NavBar/Logo.png';

const links = [
    { to: '/', label: 'Home' },
    { to: '/Classes', label: 'Classes' },
    { to: '/Booking', label: 'Booking' },
    { to: '/Contact', label: 'Contact' },
    { to: '/Blog', label: 'Blog' },
    { to: '/Articles', label: 'Articles' },
];

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    const goTop = () => {
        window.scrollTo({
            top: 0,
        });
        setMenuOpen(false);
    };

    useEffect(() => {
        setMenuOpen(false);
    }, [location.pathname]);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : '';
        return () => {
            document.body.style.overflow = '';
        };
    }, [menuOpen]);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1200) {
                setMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <header className='site-header p-0 w-full fixed z-50 shadow-xl backdrop-blur-sm'>
            <div className='site-header-bar px-4 py-2 desktop:px-10'>
                <Link to='/' onClick={goTop} className='site-logo'>
                    <img src={Logo} alt='Elevate Logo' className='h-12 desktop:h-[58px]'/>
                </Link>
                <nav className='desktop-nav'>
                    <ul className='nav-desktop font-medium cursor-pointer text-xl'>
                        {links.map((link) => (
                            <Link key={link.to} to={link.to} onClick={goTop}>
                                <div>{link.label}</div>
                            </Link>
                        ))}
                    </ul>
                </nav>
                <button
                    type='button'
                    className='menu-toggle'
                    onClick={() => setMenuOpen((open) => !open)}
                    aria-expanded={menuOpen}
                    aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                >
                    <span className={menuOpen ? 'menu-toggle-bar open-top' : 'menu-toggle-bar'} />
                    <span className={menuOpen ? 'menu-toggle-bar open-mid' : 'menu-toggle-bar'} />
                    <span className={menuOpen ? 'menu-toggle-bar open-bot' : 'menu-toggle-bar'} />
                </button>
            </div>
            {menuOpen && (
                <nav className='mobile-menu' aria-label='Mobile'>
                    {links.map((link) => (
                        <Link key={link.to} to={link.to} onClick={goTop} className='mobile-menu-link'>
                            {link.label}
                        </Link>
                    ))}
                </nav>
            )}
        </header>
    );
};

export default NavBar;
