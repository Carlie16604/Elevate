import React from "react";
import NavBar from '.././Components/NavBar';
import BG from '../../assets/Universal/example.jpg';
import Facebook from '../../assets/Contact/facebook.svg';
import Instagram from '../../assets/Contact/instagram.svg';
import Linkedin from '../../assets/Contact/linkedin.svg';
import Pintrest from '../../assets/Contact/pinterest.svg';
const Contact = () => {

    // https://www.npmjs.com/package/react-calendar
    // https://github.com/wojtekmaj/react-calendar
    // https://mantine.dev/ 

    return (
        <>
        <NavBar />
            <section id='Contact'>
                <img src={BG} rel='norel' className='z-0 absolute h-[50vh] w-screen min-w-[1200px] object-cover lg:h-[40vh]' alt='none'/>
                <div className='container'>
                    <div className='text-[70px] text-center pt-1'>
                        <div className='mt-60 mb-20 md:mt-40'>
                            <h1 className='text-white relative z-10'>Contact</h1>
                        </div>
                    </div>
                    <div className='pt-12 pb-[5rem] px-[7rem] grid grid-cols-2 items-center'>
                        <div>
                            <h2 className='text-[#ff8e43] text-[40px] font-bold leading-[1.2]'>
                                We're here to help!
                            </h2>
                            <p className='text-[16px] w-[95%] font-medium my-[30px]'>
                                Our mission is to help clients feel better by finding a balance of strength and flexibility in your body.
                            </p>
                            <div className='grid grid-cols-2 grid-rows-2 gap-y-10'>
                                <div className='flex flex-col relative'>
                                    <h3 className='text-black text-[2rem] font-medium mb-10'>
                                        Boulder, CO
                                    </h3>
                                    <span className='bg-[#949978] w-[50px] h-[4px] absolute top-[43px]'/>
                                    <p className='text-[15px] font-medium'> 
                                        1234 S Rocky Road <br/> Boulder CO, 80305
                                    </p>
                                </div>
                                <div className='flex flex-col relative'>
                                    <h3 className='text-black text-[2rem] font-medium mb-10'>
                                        Opening Hours
                                    </h3>
                                    <span className='bg-[#949978] w-[50px] h-[4px] absolute top-[43px]'/>
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
                                    <h3 className='text-black text-[2rem] font-medium mb-10'>
                                        Our Info
                                    </h3>
                                    <span className='bg-[#949978] w-[50px] h-[4px] absolute top-[43px]'/>
                                    <p className='text-[15px] font-medium'> 
                                        +1 123-456-7890 
                                    </p>
                                    <p className='text-[15px] font-medium'> 
                                        Pilates@pilates.com
                                    </p>
                                </div>
                                <div className='flex flex-col relative'>
                                    <h3 className='text-black text-[2rem] font-medium mb-10'>
                                        Follow Us
                                    </h3>
                                    <span className='bg-[#949978] w-[50px] h-[4px] absolute top-[43px]'/>
                                    <div className='text-[18px] font-medium flex gap-3'>
                                        <img className='w-[2.80rem] h-[2.80rem] rounded-full cursor-pointer hover:bg-[#fff] ease-in duration-200 hover:text-white hover:border-white hover:border-[3px]' src={Instagram} alt='Instagram'/>
                                        <img className='w-[2.80rem] h-[2.80rem] rounded-full cursor-pointer hover:bg-[#fff] ease-in duration-200 hover:text-white hover:border-white hover:border-[3px]' src={Facebook} alt='Facebook'/>
                                        <img className='w-[2.80rem] h-[2.80rem] rounded-full cursor-pointer hover:bg-[#fff] ease-in duration-200 hover:text-white hover:border-white hover:border-[3px]' src={Linkedin} alt='Linkedin'/>
                                        <img className='w-[2.80rem] h-[2.80rem] rounded-full cursor-pointer hover:bg-[#fff] ease-in duration-200 hover:text-white hover:border-white hover:border-[3px]' src={Pintrest} alt='Pintrest'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <form className='flex flex-col mt-[6rem] pt-[30px] pb-[50px] pl-[45px] relative'>
                            <h3 className='text-[#ff8e43] text-[28px] font-bold mb-14'>
                                Get In Touch!
                            </h3>
                            <span className='bg-[#949978] w-[50px] h-[4px] absolute top-[67.5px]'/>
                            <input className='w-full py-[12px] px-[20px] h-[51px] text-[14px] bg-[#D4CFC9] outline-none mb-8 rounded-xl border-[2.3px] border-[#b2b799]' placeholder="Full Name" type='text'/> 
                            <input className='w-full py-[12px] px-[20px] h-[51px] text-[14px] bg-[#D4CFC9] outline-none mb-8 rounded-xl border-[2.3px] border-[#b2b799]' placeholder="Email Address" type='email'/>
                            <select className='w-full py-[12px] px-[20px] h-[51px] text-[14px] bg-[#D4CFC9] outline-none mb-8 rounded-xl border-[2.3px] border-[#b2b799]'>
                                <option>Select Class</option>
                                <option>Foundations</option>
                                <option>Water</option>
                                <option>Fire</option>
                                <option>Air</option>
                            </select>
                            <textarea className='w-full max-h-[12rem] py-[12px] px-[20px] h-[140px] text-[14px] bg-[#D4CFC9] outline-none mb-8 rounded-xl border-[2.3px] border-[#b2b799]' placeholder='Comments'/>
                            <button className='py-3 px-5 w-fit self-center text-black bg-transparent border-2 rounded-[400px] border-[#ff8e43] inline-block text-[14px] tracking-[1px] cursor-pointer shadow-[inset_0_0_0_0_#ff8e43] transition-[box-shadow] ease-out duration-1000 hover:shadow-[inset_400px_0_0_0_#ff8e43] hover:text-white'>Submit</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact