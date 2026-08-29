import React, { useEffect } from "react";
import { Link, useParams } from 'react-router-dom';
import NavBar from '../Components/NavBar.jsx';
import ArticlesSidebar from '../Components/ArticlesSidebar.jsx';
import ArticleImage from '../Components/ArticleImage.jsx';
import { getArticleBySlug, articles } from '../../data/articles.js';
import BG from '../../assets/Universal/sideBackground.jpg';

const Article = () => {
    const { slug } = useParams();
    const article = getArticleBySlug(slug);
    const otherArticles = articles.filter((item) => item.slug !== slug);

    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, [slug]);

    const goTop = () => {
        window.scrollTo({
            top: 0,
        });
    };

    if (!article) {
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
                        <div className='py-28 bg-[#97ab8623] backdrop-blur-sm shadow-xl text-center'>
                            <p className='text-[22px] font-medium mb-8'>We could not find that article.</p>
                            <Link to='/Articles' onClick={goTop} className='text-white bg-[#97ab86] border-2 rounded-[400px] border-[#97ab86] uppercase font-bold px-8 py-3 tracking-[1px]'>
                                Back to Articles
                            </Link>
                        </div>
                    </div>
                </div>
            </>
        );
    }

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
                            <div className='flex flex-col flex-1 px-10 pb-8 max-w-[820px]'>
                                <Link to='/Articles' onClick={goTop} className='text-[15px] font-bold text-[#ff8e43] mb-6 w-fit hover:text-[#3E5C47]'>
                                    ← All Articles
                                </Link>
                                <p className="text-[15px] font-bold text-[#323232] border-[#97ab86] border-solid rounded-full border-[1px] w-fit px-5 py-2 mb-6">
                                    {article.date}
                                </p>
                                <h2 className='text-[36px] font-bold leading-tight mb-6'>
                                    {article.title}
                                </h2>
                                <ArticleImage
                                    src={article.image}
                                    alt={article.imageAlt}
                                    className='mb-8'
                                />
                                {article.sections.map((section) => (
                                    <div key={section.heading} className='mb-8'>
                                        <h3 className='text-[24px] font-bold mb-3 text-[#2f4636]'>
                                            {section.heading}
                                        </h3>
                                        {section.paragraphs.map((paragraph) => (
                                            <p key={paragraph} className='text-[16px] text-[#646464] font-medium leading-7 mb-4'>
                                                {paragraph}
                                            </p>
                                        ))}
                                    </div>
                                ))}
                                {otherArticles.length > 0 && (
                                    <div className='mt-4 pt-8 border-t border-[#97ab86]'>
                                        <p className='text-[18px] font-bold mb-4'>Keep reading</p>
                                        <div className='flex flex-col gap-3'>
                                            {otherArticles.map((item) => (
                                                <Link
                                                    key={item.slug}
                                                    to={`/Articles/${item.slug}`}
                                                    onClick={goTop}
                                                    className='text-[16px] font-medium text-[#ff8e43] hover:text-[#3E5C47]'
                                                >
                                                    {item.title} ➜
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Article;
