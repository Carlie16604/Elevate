import React from "react";
import'../index.css';
const Articles = () => {
    return (
        <section id='Articles'>
            <div className='container py-20'>
                <div className='flex flex-col text-center relative items-center'>
                    <p className='text-white relative z-10 text-[15px] uppercase font-bold mb-8'>
                        Lastest News
                    </p>
                    <h2 className='text-[3.4rem] font-bold mb-4'>
                        Our Recent Articles
                    </h2>
                    <p className='text-[#646464] font-medium text-[15px] '>
                    Gymat an unknown printer took a galley of type and scrambled <br/> make a type specimen book.
                    </p>
                </div>
                <div className='flex gap-12 w-full mt-[4rem] md1200:justify-center flex-wrap justify-center'>
                    <div className='bg-[#EEE9E6] w-[30rem] min460:w-[100%] shadow-xl flex flex-col px-[3rem] py-[5rem]'>
                        <p className="text-[15px] font-bold text-[#323232] border-[#3E5C47] border-solid rounded-full border-[1px] w-fit px-5 py-2 mb-6">
                            09.12.2024
                        </p>
                        <h3 className='text-[22px] font-bold py-5'>
                            Childbirth and Pilates
                        </h3>
                        <p className='text-[15px] text-[#646464] font-medium'>
                            The symbiotic relationship between Pilates and Mothers. Increased benefits of easy brith. 
                        </p>
                        <a className='text-[15px] uppercase font-bold mt-10 w-[12rem] h-[3.3rem] rounded-[400px] bg-[#949978] text-white text-center pt-[14px]'>
                            Read More ➜
                            {/* <img src={arrow} className='h-7 w-7 flex'></img> */}
                        </a>
                    </div>
                    <div className='bg-[#EEE9E6] w-[30rem] min460:w-[100%] shadow-xl flex flex-col px-[3rem] py-[5rem]'>
                        <p className="text-[15px] font-bold text-[#323232] border-[#3E5C47] border-solid rounded-full border-[1px] w-fit px-5 py-2 mb-6">
                            09.12.2024
                        </p>
                        <h3 className='text-[22px] font-bold py-5'>
                            Childbirth and Pilates
                        </h3>
                        <p className='text-[15px] text-[#646464] font-medium'>
                            The symbiotic relationship between Pilates and Mothers. Increased benefits of easy brith. 
                        </p>
                        <a className='text-[15px] uppercase font-bold mt-10 w-[12rem] h-[3.3rem] rounded-[400px] bg-[#949978] text-white text-center pt-[14px]'>
                            Read More ➜
                        </a>
                    </div>
                    <div className='bg-[#EEE9E6] w-[30rem] min460:w-[100%] shadow-xl flex flex-col px-[3rem] py-[5rem]'>
                        <p className="text-[15px] font-bold text-[#323232] border-[#3E5C47] border-solid rounded-full border-[1px] w-fit px-5 py-2 mb-6">
                            09.12.2024
                        </p>
                        <h3 className='text-[22px] font-bold py-5'>
                            Childbirth and Pilates
                        </h3>
                        <p className='text-[15px] text-[#646464] font-medium'>
                            The symbiotic relationship between Pilates and Mothers. Increased benefits of easy brith. 
                        </p>
                        <a className='text-[15px] uppercase font-bold mt-10 w-[12rem] h-[3.3rem] rounded-[400px] bg-[#949978] text-white text-center pt-[14px]'>
                            Read More ➜
                        </a>
                    </div>
                    <div className='bg-[#EEE9E6] w-[30rem] min460:w-[100%] shadow-xl flex flex-col px-[3rem] py-[5rem]'>
                        <p className="text-[15px] font-bold text-[#323232] border-[#3E5C47] border-solid rounded-full border-[1px] w-fit px-5 py-2 mb-6">
                            09.12.2024
                        </p>
                        <h3 className='text-[22px] font-bold py-5'>
                            Childbirth and Pilates
                        </h3>
                        <p className='text-[15px] text-[#646464] font-medium'>
                            The symbiotic relationship between Pilates and Mothers. Increased benefits of easy brith. 
                        </p>
                        <a className='text-[15px] uppercase font-bold mt-10 w-[12rem] h-[3.3rem] rounded-[400px] bg-[#949978] text-white text-center pt-[14px]'>
                            Read More ➜
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Articles