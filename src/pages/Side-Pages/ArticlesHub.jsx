import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import NavBar from '../Components/NavBar.jsx';
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
            <div id='ArticlesPage'>
                <img src={BG} rel='norel' className='z-10 absolute h-[40vh] w-full object-cover desktop:h-[50vh]' alt='none'/>
                <div className='container'>
                    <div className='text-[42px] desktop:text-[70px] text-center pt-1'>
                        <div className='mt-32 mb-10 desktop:mt-60 desktop:mb-20 md:mt-40'>
                            <h1 className='text-white relative z-10 backdrop-blur-sm'>Articles</h1>
                        </div>
                    </div>
                    <div className='py-8 px-4 desktop:py-16 desktop:px-16 bg-[#97ab8623] backdrop-blur-sm shadow-xl mb-8'>
                        <p className='relative text-[25px] mb-3 text-center'>Studio reading</p>
                        <span className='w-[50px] bg-[#ff8e43] h-[2.5px] mx-auto block mt-[-4px] mb-10'/>
                        <div className='flex flex-col gap-12'>
                            {articles.map((article) => (
                                <article key={article.id} className='bg-[#f7f4f2] shadow-xl grid grid-cols-1 lg:grid-cols-[1.1fr_1.4fr] gap-6 desktop:gap-10 px-6 desktop:px-[2.5rem] py-8 desktop:py-[2.5rem] rounded-md rounded-br-[80px]'>
                                    <ArticleImage
                                        src={article.image}
                                        alt={article.imageAlt}
                                        className='article-card-image h-full min-h-[240px]'
                                    />
                                    <div className='flex flex-col'>
                                        <p className="text-[15px] font-bold text-[#323232] border-[#97ab86] border-solid rounded-full border-[1px] w-fit px-5 py-2 mb-5">
                                            {article.date}
                                        </p>
                                        <h2 className='text-[28px] font-bold pb-3 text-[#2f4636]'>
                                            {article.title}
                                        </h2>
                                        <p className='text-[16px] text-[#646464] font-medium leading-7'>
                                            {article.dek}
                                        </p>
                                        <Link to={`/Articles/${article.slug}`} onClick={goTop} className={readMoreClass}>
                                            Read More ➜
                                        </Link>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ArticlesHub;
