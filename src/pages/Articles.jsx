import React from "react";
import { Link } from 'react-router-dom';
import { articles } from '../data/articles.js';
import'../index.css';

const Articles = () => {

    const goTop = () => {
        window.scrollTo({
          top: 0,
        });
      };

    return (
        <section id='Articles' className='bg-[#ddedd065] border-2 border-[#97ab86]'>
            <div className='container py-16'>
                <div className='flex flex-col text-center relative items-center'>
                    <h2 className='text-[3.4rem] font-bold mb-4'>
                        Our Recent Articles
                    </h2>
                    <p className='text-[#646464] font-medium text-[15px] '>
                    Find out what we have going on in house <br/> with our news letter!
                    </p>
                </div>
                <div className='flex gap-12 w-full mt-[4rem] md1200:justify-center justify-center'>
                    {articles.map((article) => (
                        <div key={article.id} className='bg-[#f7f4f2] w-[30rem] min460:w-[100%] shadow-xl flex flex-col px-[2.5rem] py-[2.5rem] rounded-md rounded-br-[150px]'>
                            <p className="text-[15px] font-bold text-[#323232] border-[#97ab86] border-solid rounded-full border-[1px] w-fit px-5 py-2 mb-6">
                                {article.date}
                            </p>
                            <h3 className='text-[22px] font-bold pb-5 min-h-[86px] flex items-center'>
                                {article.title}
                            </h3>
                            <p className='text-[15px] text-[#646464] font-medium'>
                                {article.excerpt.map((part, index) => (
                                    <span key={index} className={part.highlight ? 'text-[#ff8e43]' : ''}>
                                        {part.text}
                                    </span>
                                ))}
                            </p>
                            <Link to={`/Articles/${article.slug}`} onClick={goTop} className='text-white bg-[#97ab86] border-2 rounded-[400px] border-[#97ab86] uppercase text-center font-bold mt-10 w-[12rem] h-[3.3rem] text-[15px] pt-[12.7px] tracking-[1px] cursor-pointer shadow-[inset_0_0_0_0_#3E5C47] transition-[box-shadow] ease-out duration-1000 hover:shadow-[inset_400px_0_0_0_#949978] '>
                                Read More ➜
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Articles
