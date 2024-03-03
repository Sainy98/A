import React, { useState, useEffect } from 'react';

export default function Nav() {
    const [isSignUpVisible, setIsSignUpVisible] = useState(false);

    const [isScrolled, setIsScrolled] = useState(false);

    const toggleSignUp = () => {
        setIsSignUpVisible(!isSignUpVisible);
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            setIsScrolled(scrollTop > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, []);

    return (

        <nav className={`nav ${isScrolled ? 'scrolled' : ' '}`}>
            <a href='/'>
                <img src='/AIRPNB/logo.png' className='logo' alt='logo' />
            </a>

            <ul className='list-item'>
                <li><a href='/'>Stays</a></li>
                <li><a href='/'>Experiences</a></li>
                <li><a href='/'>Online Experiences</a></li>
            </ul>

            <div className='left-container'>
                <div className='side-container'>
                    <li><a href='/'>Airnbnb your home</a></li>
                    <img src='/AIRPNB//internet.svg' className='internet-logo' alt='Internet logo'></img>
                </div>

                <div className='profile-btn'>
                    <img src='https://www.svgrepo.com/show/491428/line-3.svg' className='bar' onClick={toggleSignUp} alt='Bar Icon'></img>
                    <img src='/AIRPNB//profile.svg' className='profile' alt='profile'></img>
                </div>
            </div>
            {isSignUpVisible && (
                <div className='signUp' id='Sign_up'>
                    <ul>
                        <li><a className='signUp_li' href='/'>Sign up</a></li>

                        <li><a className='signUp_li' href='/'>Login</a> </li>

                        <br />
                        <hr />
                        <br />
                        <li><a className='signUp_li' href='/'>Airbnb your home</a></li>
                        <li><a className='signUp_li' href='/'>Help Centre</a></li>
                    </ul>
                </div>
            )}

            <div className={`bar_container ${isScrolled ? 'scrolled' : ''}`}>

                <div className={`bar_container1 ${isScrolled ? 'scrolled' : ''}`}>
                    <span>{isScrolled ? 'Anywhere' : 'Where'}</span> <br />
                    {!isScrolled && (<input type="text" placeholder="Search destination" />)}
                </div>

                <div className="bar_container2">
                    {!isScrolled && (<div className="line1">|</div>)}
                    <span>{isScrolled ? 'Anyweek' : 'Check in'}</span> <br />
                    {!isScrolled && (<input type="text" placeholder="Add dates" />)}

                </div>

                <div className="bar_container3">
                    {!isScrolled && (<div className="line2">|</div>)}
                    <span>{isScrolled ? 'Add guest' : 'Check out'}</span> <br />
                    {!isScrolled && (<input type="text" placeholder="Add dates" />)}
                </div>
                <br></br>
                {!isScrolled && (
                    <div className="bar_container4">
                        <div className="line3">|</div>
                        <div className="input4">
                            <span>Who</span> <br />
                            <input type="text" placeholder="Add guests" />
                        </div>
                        <div className="search_logo_div">
                            <img className="search_logo " src="/AIRPNB/search.svg" />
                        </div>
                    </div>
                )}

            </div>
        </nav>

    )
}