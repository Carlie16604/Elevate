import React from "react";
import NavBar from '../pages/NavBar';
import Facebook from '../assets/Contact/Facebook.svg';
import Instagram from '../assets/Contact/Instagram.svg';
import Linkedin from '../assets/Contact/LinkedIn.svg';
const Contact = () => {

    // https://www.npmjs.com/package/react-calendar
    // https://github.com/wojtekmaj/react-calendar
    // https://mantine.dev/ 

    return (
        <>
        <NavBar />
            <section id='Contact'>
                <div className='container pt-32'>
                    <div className='bg-[#949978] h-screen rounded-t-[4000px] z-[-1]'>
                        <div className='text-[70px] text-center pt-1'>
                            <div className='mt-32'>
                                <h1>Contact</h1>
                            </div>
                        </div>
                        <div className='py-[6rem] pl-[5rem] grid grid-cols-2 items-center'>
                            <div>
                                <h2 className='text-black text-[40px] font-medium leading-[1.2]'>
                                    We're here to help!
                                </h2>
                                <p className='text-[16px] w-[95%] font-medium my-[30px]'>
                                    Our mission is to help clients feel better by finding a balance of strength and flexibility in your body.
                                </p>
                                <div className='grid grid-cols-2 grid-rows-2 gap-y-10'>
                                    <div className='flex flex-col relative'>
                                        <h3 className='text-[2rem] font-medium mb-10'>
                                            Boulder, CO <br/> USA
                                        </h3>
                                        <span className='bg-[#D4CFC9] w-[50px] h-[4px] absolute top-[43px]'/>
                                        <p className='text-[15px] font-medium'> 
                                            1234 S Rocky Road <br/> Boulder CO, 80305
                                        </p>
                                    </div>
                                    <div className='flex flex-col relative'>
                                        <h3 className='text-[2rem] font-medium mb-10'>
                                            Opening Hours
                                        </h3>
                                        <span className='bg-[#D4CFC9] w-[50px] h-[4px] absolute top-[43px]'/>
                                        <p className='text-[15px] font-medium'> 
                                            Mon to Fri: 9:00am - 7:00pm
                                        </p>
                                        <p className='text-[15px] font-medium'> 
                                            Sat 9:00am - 2:00pm
                                        </p>
                                        <p className='text-[15px] font-medium'> 
                                            Sun - CLOSED
                                        </p>
                                    </div>
                                    <div className='flex flex-col relative'>
                                        <h3 className='text-[2rem] font-medium mb-10'>
                                            Our Info
                                        </h3>
                                        <span className='bg-[#D4CFC9] w-[50px] h-[4px] absolute top-[43px]'/>
                                        <p className='text-[15px] font-medium'> 
                                            +1 123-456-7890 
                                        </p>
                                        <p className='text-[15px] font-medium'> 
                                            Pilates@pilates.com
                                        </p>
                                    </div>
                                    <div className='flex flex-col relative'>
                                        <h3 className='text-[2rem] font-medium mb-10'>
                                            Follow Us
                                        </h3>
                                        <span className='bg-[#D4CFC9] w-[50px] h-[4px] absolute top-[43px]'/>
                                        <div className='text-[18px] font-medium flex gap-5'>
                                            <img className='w-[2.80rem] h-[2.80rem] rounded-full cursor-pointer hover:bg-[#fff] ease-in duration-200 hover:text-white hover:border-white hover:border-[3px]' src={Instagram} alt='Instagram'/>
                                            <img className='w-[2.80rem] h-[2.80rem] rounded-full cursor-pointer hover:bg-[#fff] ease-in duration-200 hover:text-white hover:border-white hover:border-[3px]' src={Facebook} alt='Instagram'/>
                                            <img className='w-[2.80rem] h-[2.80rem] rounded-full cursor-pointer hover:bg-[#fff] ease-in duration-200 hover:text-white hover:border-white hover:border-[3px]' src={Linkedin} alt='Instagram'/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        <form className='flex flex-col pt-[30px] pr-[5rem] pb-[50px] pl-[45px] relative'>
                            <h3 className='text-[28px] font-bold mb-14'>
                                Get In Touch!
                            </h3>
                            <span className='bg-[#D4CFC9] w-[50px] h-[4px] absolute top-[67.5px]'/>
                            <input className='w-full py-[12px] px-[20px] h-[51px] text-[14px] bg-[#D4CFC9] outline-none mb-8 rounded-xl' placeholder="Full Name" type='text'/> 
                            <input className='w-full py-[12px] px-[20px] h-[51px] text-[14px] bg-[#D4CFC9] outline-none mb-8 rounded-xl' placeholder="Email Address" type='email'/>
                            <select className='w-full py-[12px] px-[20px] h-[51px] text-[14px] bg-[#D4CFC9] outline-none mb-8 rounded-xl'>
                                <option>Select Class</option>
                                <option>Foundations</option>
                                <option>Water</option>
                                <option>Fire</option>
                                <option>Air</option>
                            </select>
                            <textarea className='w-full max-h-[12rem] py-[12px] px-[20px] h-[140px] text-[14px] bg-[#D4CFC9] outline-none mb-8 rounded-xl' placeholder='Comments'/>
                            <button className='text-white bg-[#ff0336] w-fit py-[15px] px-[30px] font-bold text-[14px] uppercase self-center mt-6'>Submit</button>
                        </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact