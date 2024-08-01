import  React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../index.css';
import imgPl from '../assets/Offers/ImgPlaceholder.png';
import Rock from '../assets/Offers/rock.png';
import Foundations from '../assets/Offers/Foundations.png';
import Water from '../assets/Offers/Water.png';
import Fire from '../assets/Offers/Fire.png';
import Air from '../assets/Offers/Air.png';
// https://github.com/michalsnik/aos for card animation
const Classes = () => {

    const goTop = () => {
        window.scrollTo({
          top: 0,
        });
      };

    return (
        <section id='classes' className='mt-60'>
            <div className='rockContainer'>
                <img className='classesRock' src={Rock} alt='rock' />
            </div>
            {/* Add Card Flip here */}
            <div className='container'>
                <div className='flex-wrap pt-8 mb-20 px-14 relative'>
                    <h1 className='text-[65px] flex flex-col stroke-black'>What we Offer</h1>
                    <span className='absolute w-[5.5rem] h-[4px] my-[-15px] bg-[#949978]'></span>
                </div>
                <div className='cardContainer'>
                    <div className='card-deck'>
                        <div className='card'>
                            <div className='card-inner'>
                                <div className='card-front'>
                                    <img className='imgWrap' src={Foundations} alt='Img Placeholder' />
                                    <div className='book'>
                                        <Link to='/Booking' onClick={ goTop }>
                                            <p>Book</p>
                                        </Link>                                
                                    </div>
                                </div>
                                <div className='card-back'>
                                    <h3>pee pee poo poo</h3>
                                </div>
                            </div>
                            <div className='adjectives'>
                                <p>Fundamentals</p>
                                <p>Learning</p>
                                <p></p>
                                <p></p>
                            </div>
                            <h3 className='classType'>Foundations</h3>
                        </div>
                    </div>
                    <div className='card-deck pt-32'>
                        <div className='card'>
                            <div className='card-inner'>
                                <div className='card-front'>
                                    <img className='imgWrap' src={Water} alt='Img Placeholder' />
                                    <div className='book'>  
                                        <Link to='/Booking' onClick={ goTop }>
                                            <p>Book</p>
                                        </Link>                             
                                    </div>
                                </div>
                                <div className='card-back'>
                                    <h3>pee pee poo poo</h3>
                                </div>
                            </div>
                            <div className='adjectives'>
                                <p>Core Focused</p>
                                <p>Full-Body</p>
                                <p></p>
                                <p></p>
                            </div>
                            <h3 className='classType'>Water</h3>
                        </div>
                    </div>
                    <div className='card-deck mt-[-160px]'>
                        <div className='card'>
                            <div className='card-inner'>
                                <div className='card-front'>
                                    <img className='imgWrapper' src={Fire} alt='Img Placeholder' />
                                    <div className='book'>
                                        <Link to='/Booking' onClick={ goTop }>
                                            <p>Book</p>
                                        </Link>                             
                                    </div>
                                </div>
                                <div className='card-back'>
                                    <h3>pee pee poo poo</h3>
                                </div>
                            </div>
                            <div className='adjectives'>
                                <p>Next Level</p>
                                <p>Full-Body</p>
                                <p>Strength</p>
                                <p></p>
                            </div>
                            <h3 className='classType'>Fire</h3>
                        </div>
                    </div>
                    <div className='card-deck pt-32'>
                        <div className='card'>
                            <div className='card-inner'>
                                <div className='card-front'>
                                    <img className='imgWrapper' src={Air} alt='Img Placeholder' />
                                    <div className='book'>
                                        <Link to='/booking' onClick={ goTop }>
                                            <p>Book</p>
                                        </Link>
                                    </div>
                                </div>
                                <div className='card-back'>
                                    <h3>pee pee poo poo</h3>
                                </div>
                            </div>
                            <div className='adjectives'>
                                <p>Cardio</p>
                                <p>Stamina Building</p>
                                <p></p>
                                <p></p>
                            </div>
                            <h3 className='classType'>Air</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Classes;