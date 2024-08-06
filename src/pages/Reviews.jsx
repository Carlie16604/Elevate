import React from "react";
import { Link } from 'react-router-dom';
import '../index.css';
import Rock from '../assets/Reviews/Rock.png';
import ReviewPhoto from '../assets/Reviews/ReviewPhoto.png';
import LeftArrow from '../assets/Calendar/Arrow Left.png';
import RightArrow from '../assets/Calendar/Arrow right.png';

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
                                        <div className='pButton text-[40px]'>Booking</div>
                                    </Link>
                                        <div className='pButton text-center text-[30px] px-[25px] leading-8'>Meet The Team</div>
                                    <Link to='/Contact' onClick={ goTop }>
                                        <div className='pButton text-[40px]'>Contact</div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>
            <section className='my-[10rem] mx-auto'>
                <div className='container'>
                    <div className='mt-[20rem] bg-[#94997833] p-[30px]'>
                        <div className='bg-[#DFDCD8] overflow-x-clip w-full h-[23rem] relative'>
                            <img src={ReviewPhoto} alt='Pilates Woman' className='absolute bottom-0 -left-10 z-20 h-[36rem] rounded-tr-[200px]'/>
                        <div className='flex'>
                            <div className='absolute flex flex-col bg-[#DFDCD8] top-0 right-0 w-[60%] h-full py-[47px] px-[50px]'>
                                <img className='w-[6rem]' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABTCAYAAABgdgI7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDplNGJiYzEzNi02MGQyLTAzNGMtYjViMS05NDhiODhlZjEzOGYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RTYxODUwMUU3RUEyMTFFQzkxNUNEODZEQ0M5NjNCQTMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RTYxODUwMUQ3RUEyMTFFQzkxNUNEODZEQ0M5NjNCQTMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ZTk3ZTdhZDUtM2E2Yy1mNjQyLWFkY2YtN2Y4MzQwMzNmNGExIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6ZWUzN2JiZjMtM2FhOC0xMWViLWE2NGMt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' alt='quote'/>
                                    <p className='text-[16px] italic text-[#000] my-6 z-10'>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.”</p>
                                    <h3 className='text-[#000] text-[21px] mb-1 font-bold'>Harry Potter</h3>
                                    <p className='text-[14px] font-medium text-[#000]'>CEO of Hogwarts</p> 
                            </div>
                        </div>
                        <div className='flex gap-5 absolute bottom-[25px] right-[35px] z-20'>
                            <button title='left' className='py-3 px-5 bg-[#3E5C47] rounded-[400px] hover:bg-[#94997833] transition-all'>
                                <img className='h-[30px] w-[30px] text-[#000] fa-solid fa-arrow-left' src={LeftArrow} alt='Left Arrow Button'/>
                            </button>
                            <button title='left' className='py-3 px-5 bg-[#3E5C47] rounded-[400px] hover:bg-[#94997833] transition-all'>
                                <img className='h-[30px] w-[30px] text-[#000] fa-solid fa-arrow-left' src={RightArrow} alt='Left Arrow Button'/>
                            </button>
                        </div>
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