import React from "react";
import { Link } from 'react-router-dom';
import '../index.css';
import Rock from '../assets/Reviews/Rock.png';
import ReviewPhoto from '../assets/Reviews/ReviewPhoto.png';
import Quote from '../assets/Reviews/quote.svg';
import Machine from '../assets/Reviews/Pilates.svg';
import LeftArrow from '../assets/Calendar/Arrow Left.png';
import RightArrow from '../assets/Calendar/Arrow right.png';

// https://www.svgrepo.com/
const Reviews = () => {

    const goTop = () => {
        window.scrollTo({
          top: 0,
        });
      };

    return (
            <>
                <section id='reviws' className='mt-40'>
                    <div className='rockContainer'>
                        <img className='reviewsRock' src={Rock} alt='Rock' />
                    </div>
                    <div className='container'>
                        <div className='flex flex-col relative '>
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
            </section>
            <section className='mt-[10rem] mb-[4rem] mx-auto'>
                <div className='container'>
                    <div className='mt-[20rem] bg-[#94997833] p-[30px]'>
                        <div className='bg-[#eee9e6dd] overflow-x-clip w-full h-[23rem] relative'>
                            <img src={ReviewPhoto} alt='Pilates Woman' className='absolute bottom-0 z-20 h-[36rem] rounded-tr-[200px]'/>
                        <div className='flex'>
                            <div className='absolute flex flex-col top-0 right-0 w-[60%] h-full py-[40px] px-[50px]'>
                                <img className='w-[4rem] rotate-180' src={Quote} alt='quote'/>
                                    <p className='text-[17px] italic text-[#000] my-4 z-10'>“This Pilates studio offers an exceptional experience with knowledgeable instructors who tailor workouts to individual needs, ensuring both beginners and advanced practitioners feel challenged and supported. The serene atmosphere and state-of-the-art equipment create a welcoming environment that inspires a deep connection to the practice.”</p>
                                    <h3 className='text-[#000] text-[21px] mb-1 font-bold'>Harry Potter</h3>
                                    <p className='text-[14px] font-medium text-[#000]'>CEO of Hogwarts</p> 
                                    <img className='w-[13rem] mt-[10.5rem] right-[3.5rem] absolute brightness-90' src={Machine} alt='Pilates Machine'/>
                            </div>
                        </div>
                        {/* <div className='flex gap-3 absolute bottom-[25px] right-[35px] z-20'>
                            <button title='left' className='py-3 px-5 bg-[#3E5C47] hover:opacity-55 ease-in duration-200 rounded-[400px]'>
                                <img className='h-[30px] w-[30px] text-[#000] fa-solid fa-arrow-left' src={LeftArrow} alt='Left Arrow Button'/>
                            </button>
                            <button title='left' className='py-3 px-5 bg-[#3E5C47]  hover:opacity-55 ease-in duration-200 rounded-[400px]'>
                                <img className='h-[30px] w-[30px] text-[#000] fa-solid fa-arrow-left' src={RightArrow} alt='Left Arrow Button'/>
                            </button>
                        </div> */}
                                <div className='review-Logo'>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Reviews;