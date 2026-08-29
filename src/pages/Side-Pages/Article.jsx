import React, { useEffect } from "react";
import { Link, useParams } from 'react-router-dom';
import NavBar from '../Components/NavBar.jsx';
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
                <div id='ArticlePage'>
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
            <div id='ArticlePage'>
                <img src={BG} rel='norel' className='z-10 absolute h-[50vh] w-screen min-w-[1200px] object-cover lg:h-[40vh]' alt='none'/>
                <div className='container'>
                    <div className='text-[70px] text-center pt-1'>
                        <div className='mt-60 mb-20 md:mt-40'>
                            <h1 className='text-white relative z-10 backdrop-blur-sm'>Articles</h1>
                        </div>
                    </div>
                    <article className='article-page bg-[#f7f4f2] backdrop-blur-sm shadow-xl py-16 px-[6rem] mb-8'>
                        <Link to='/Articles' onClick={goTop} className='text-[15px] font-bold text-[#ff8e43] mb-8 inline-block hover:text-[#3E5C47]'>
                            ← All Articles
                        </Link>
                        <p className="text-[14px] font-bold tracking-[1px] uppercase text-[#97ab86] mb-4">
                            {article.date} · {article.source.label}
                        </p>
                        <h2 className='text-[42px] font-bold leading-[1.15] mb-4 text-[#2f4636]'>
                            {article.title}
                        </h2>
                        <p className='text-[20px] text-[#646464] font-medium leading-8 mb-8 max-w-[46rem]'>
                            {article.dek}
                        </p>
                        <div className='article-hero mb-10'>
                            <ArticleImage
                                src={article.image}
                                alt={article.imageAlt}
                                className='article-hero-image'
                            />
                        </div>
                        <blockquote className='article-pullquote'>
                            {article.pullQuote}
                        </blockquote>
                        {article.sections.map((section) => (
                            <section key={section.heading} className='article-section'>
                                <h3>
                                    {section.heading}
                                </h3>
                                {section.paragraphs.map((paragraph) => (
                                    <p key={paragraph}>
                                        {paragraph}
                                    </p>
                                ))}
                            </section>
                        ))}
                        <div className='article-source'>
                            <p className='text-[14px] font-bold uppercase tracking-[1px] text-[#97ab86] mb-2'>Source</p>
                            <p className='text-[15px] text-[#646464] font-medium leading-6 mb-3'>{article.source.citation}</p>
                            <a
                                href={article.source.url}
                                target='_blank'
                                rel='noreferrer'
                                className='text-[15px] font-bold text-[#ff8e43] hover:text-[#3E5C47]'
                            >
                                Read the original ➜
                            </a>
                        </div>
                        {otherArticles.length > 0 && (
                            <div className='mt-12 pt-8 border-t border-[#97ab86]'>
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
                    </article>
                </div>
            </div>
        </>
    );
};

export default Article;
