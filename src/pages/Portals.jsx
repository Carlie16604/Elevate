import React from "react";
import { Link } from 'react-router-dom';
import Rock from '../assets/Portals/Rock.png'

const Portals = () => {

    const goTop = () => {
        window.scrollTo({
          top: 0,
        });
      };
    
    return (
        <>
            <section id='portals' className='my-20'>
                <div className='container'>
                    <div className='flex flex-col relative '>
                        <div className='rockContainer'>
                        <img className='reviewsRock right-0 top-1/4' src={Rock} alt='Rock' />
                            <div className='flex flex-row justify-center gap-32 relative'>
                                <div className='portals'>
                                    <Link to='/Booking' onClick={ goTop }>
                                        <div className='text-white pButton text-[35px]'>Booking</div>
                                    </Link>
                                    <Link to='/About' onClick={ goTop }>
                                        <div className='text-white pButton text-center text-[30px] px-[25px] leading-8'>Meet The <br/>Team</div>
                                    </Link>
                                    <Link to='/Contact' onClick={ goTop }>
                                        <div className='text-white pButton text-[35px]'>Contact</div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Portals;