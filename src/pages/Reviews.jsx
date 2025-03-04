import React from "react";
import '../index.css';
import ReviewPhoto2 from '../assets/Reviews/ReviewPhoto2.png';
import Quote from '../assets/Reviews/quote.svg';
import Machine from '../assets/Reviews/Pilates.svg';
// import LeftArrow from '../assets/Calendar/Arrow Left.png';
// import RightArrow from '../assets/Calendar/Arrow right.png';

// https://www.svgrepo.com/
const Reviews = () => {

// https://github.com/dscyrescotti/ShuffleIt
// https://dscyrescotti.github.io/ShuffleIt/documentation/shuffleit/

    return (
        <>
            <section className='mt-[15rem] mx-auto'>
                <div className='container'>
                    <div className=' bg-[#94997833] p-[30px]'>
                        <div className='bg-[#f8f4f1] overflow-x-clip w-full h-[23rem] relative'>
                            <img src={ReviewPhoto2} alt='Pilates Woman' className='absolute bottom-0 z-20 h-[36rem] rounded-tr-[200px] border-black'/>
                                <div className='flex'>
                                    <div className='absolute flex flex-col top-0 right-0 w-[60%] h-full py-[40px] px-[50px]'>
                                        <img className='w-[4rem] rotate-180' src={Quote} alt='quote'/>
                                            <p className='text-[17px] italic text-[#000] my-4 z-10'>“This Pilates studio offers an exceptional experience with knowledgeable instructors who tailor workouts to individual needs, ensuring both beginners and advanced practitioners feel challenged and supported. The serene atmosphere and state-of-the-art equipment create a welcoming environment that inspires a deep connection to the practice.”</p>
                                            <h3 className='text-[#F65D34] text-[21px] mb-1 font-bold'>Harry Potter</h3>
                                            <p className='text-[14px] font-medium text-[#ff8e43]'>CEO of Hogwarts</p> 
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