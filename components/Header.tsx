
import React, { useState } from 'react';
import type { NavLink } from '../types';

interface HeaderProps {
    navLinks: NavLink[];
}

const HeaderComponent: React.FC<HeaderProps> = ({ navLinks }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const targetElement = document.querySelector(href);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
        setIsMobileMenuOpen(false); // Close mobile menu on link click
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-20 glass-effect mx-4 mt-4 rounded-2xl overflow-hidden transition-all duration-300 ease-in-out shadow-lg">
            <div className="container mx-auto px-6 py-3 flex justify-between items-center">
                <a href="#about" onClick={(e) => handleLinkClick(e, '#about')} className="text-xl font-bold tracking-tighter">Tahmid H. Khan</a>
                <nav className="hidden md:flex space-x-8 text-sm font-medium text-slate-300">
                    {navLinks.map(link => (
                        <a key={link.href} href={link.href} onClick={(e) => handleLinkClick(e, link.href)} className="nav-link">{link.label}</a>
                    ))}
                </nav>
                <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden p-2 rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
            </div>
            {isMobileMenuOpen && (
                <div className="md:hidden px-6 pb-4 flex flex-col space-y-2 text-sm">
                    {navLinks.map(link => (
                         <a key={link.href} href={link.href} onClick={(e) => handleLinkClick(e, link.href)} className="nav-link text-center py-1">{link.label}</a>
                    ))}
                </div>
            )}
        </header>
    );
};

export const Header = React.memo(HeaderComponent);
