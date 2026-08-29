import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import NavBar from '../Components/NavBar.jsx';
import ArticlesSidebar from '../Components/ArticlesSidebar.jsx';
import ArticleImage from '../Components/ArticleImage.jsx';
import { articles } from '../../data/articles.js';
import BG from '../../assets/Universal/sideBackground.jpg';

const readMoreClass = 'text-white bg-[#97ab86] border-2 rounded-[400px] border-[#97ab86] uppercase text-center font-bold mt-8 w-[12rem] h-[3.3rem] text-[15px] pt-[12.7px] tracking-[1px] cursor-pointer shadow-[inset_0_0_0_0_#3E5C47] transition-[box-shadow] ease-out duration-1000 hover:shadow-[inset_400px_0_0_0_#949978]';

const ArticlesHub = () => {
    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, []);

    const goTop = () => {
        window.scrollTo({
            top: 0,
        });
    };

    return (
        <>
            <NavBar />
            <div id='Articles'>
                <img src={BG} rel='norel' className='z-10 absolute h-[50vh] w-screen min-w-[1200px] object-cover lg:h-[40vh]' alt='none'/>
                <div className='container'>
                    <div className='text-[70px] text-center pt-1'>
                        <div className='mt-60 mb-20 md:mt-40'>
                            <h1 className='text-white relative z-10 backdrop-blur-sm'>Articles</h1>
                        </div>
                    </div>
                    <div className='py-16 bg-[#97ab8623] backdrop-blur-sm shadow-xl'>
                        <div className='flex flex-wrap'>
                            <ArticlesSidebar />
                            <div className='flex flex-col flex-1 px-8 pb-8'>
                                <p className='relative text-[25px] mb-3 text-center'>Our recent articles</p>
                                <span className='w-[50px] bg-[#ff8e43] h-[2.5px] mx-auto mt-[-4px] mb-8'/>
                                <div className='flex flex-col gap-10'>
                                    {articles.map((article) => (
                                        <article key={article.id} className='bg-[#f7f4f2] shadow-xl flex flex-col px-[2.5rem] py-[2.5rem] rounded-md rounded-br-[80px]'>
                                            <p className="text-[15px] font-bold text-[#323232] border-[#97ab86] border-solid rounded-full border-[1px] w-fit px-5 py-2 mb-6">
                                                {article.date}
                                            </p>
                                            <h2 className='text-[28px] font-bold pb-5'>
                                                {article.title}
                                            </h2>
                                            <ArticleImage
                                                src={article.image}
                                                alt={article.imageAlt}
                                                className='mb-6'
                                            />
                                            <p className='text-[16px] text-[#646464] font-medium leading-7'>
                                                {article.excerpt.map((part, index) => (
                                                    <span key={index} className={part.highlight ? 'text-[#ff8e43]' : ''}>
                                                        {part.text}
                                                    </span>
                                                ))}
                                            </p>
                                            <p className='text-[16px] text-[#646464] font-medium leading-7 mt-4'>
                                                {article.sections[0].paragraphs[0]}
                                            </p>
                                            <Link to={`/Articles/${article.slug}`} onClick={goTop} className={readMoreClass}>
                                                Read More ➜
                                            </Link>
                                        </article>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ArticlesHub;
