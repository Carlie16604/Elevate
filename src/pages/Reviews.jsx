import React from "react";
import '../index.css';
import ReviewPhoto from '../assets/Reviews/ReviewPhoto.png';
import Quote from '../assets/Reviews/quote.svg';
import Machine from '../assets/Reviews/Pilates.svg';
import Stretch from '../assets/Reviews/stretch.svg';
import Sweat from '../assets/Reviews/sweat.svg';
import Moulding from '../assets/Reviews/moulding.svg';
import Core from '../assets/Reviews/core.svg';
// import LeftArrow from '../assets/Calendar/Arrow Left.png';
// import RightArrow from '../assets/Calendar/Arrow right.png';

// https://www.svgrepo.com/
const Reviews = () => {

// https://github.com/dscyrescotti/ShuffleIt
// https://dscyrescotti.github.io/ShuffleIt/documentation/shuffleit/

    return (
        <>
            <section>
                <div className="my-[2rem] mx-auto">
                    <div className='flex gap-32 justify-center flex-wrap pt-[3rem]'>
                        <img src={Stretch} alt='stretching person' className="scale-[.8] brightness-125 h-32 w-32"/>
                        <img src={Core} alt='person stretching their core' className="scale-[.8] brightness-125 h-32 w-32"/>
                        <img src={Sweat} alt='Sweating person' className="scale-[.8]  h-32 w-32"/>
                        <img src={Moulding} alt='Moulding person' className="scale-[.8] brightness-125 h-32 w-32"/>
                    </div>
                </div>
            </section>
            <section className='mt-[15rem] mx-auto'>
                <div className='container'>
                    <div className=' bg-[#94997833] p-[30px]'>
                        <div className='bg-[#eee9e6dd] overflow-x-clip w-full h-[23rem] relative'>
                            <img src={ReviewPhoto} alt='Pilates Woman' className='absolute bottom-0 z-20 h-[36rem] rounded-tr-[200px]'/>
                                <div className='flex'>
                                    <div className='absolute flex flex-col top-0 right-0 w-[60%] h-full py-[40px] px-[50px]'>
                                        <img className='w-[4rem] rotate-180' src={Quote} alt='quote'/>
                                            <p className='text-[17px] italic text-[#000] my-4 z-10'>“This Pilates studio offers an exceptional experience with knowledgeable instructors who tailor workouts to individual needs, ensuring both beginners and advanced practitioners feel challenged and supported. The serene atmosphere and state-of-the-art equipment create a welcoming environment that inspires a deep connection to the practice.”</p>
                                            <h3 className='text-[#F65D34] text-[21px] mb-1 font-bold'>Harry Potter</h3>
                                            <p className='text-[14px] font-medium text-[#FFA366]'>CEO of Hogwarts</p> 
                                            <img className='w-[13rem] mt-[10.5rem] right-[3.5rem] absolute brightness-90' src={Machine} alt='Pilates Machine'/>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Reviews;