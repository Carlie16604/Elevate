import React from "react";
import { Link } from 'react-router-dom';
import { articles } from '../../data/articles.js';
import Insta from '../../assets/Blog/insta.jpg';

const ArticlesSidebar = () => {
    const goTop = () => {
        window.scrollTo({
            top: 0,
        });
    };

    return (
        <div className='flex flex-col px-5 py-4'>
            <div className='text-[16px] bg-[#fcfbfa] p-3 rounded-xl mb-5 h-auto min-w-[250px]'>
                <p className='pb-3'>Subscribe:</p>
                <div className='flex flex-col gap-1 relative'>
                    <input className='h-8 mx-1 pl-2 py-1 bg-[#eae6e2]' placeholder="Email Address" type='email' />
                </div>
            </div>
            <div className='text-[16px] bg-[#fcfbfa] p-3 rounded-xl mb-5 h-auto min-w-[250px]'>
                <p className='pb-3'>Check out our Socials:</p>
                <div className='flex flex-col gap-1 relative'>
                    <p className='cursor-pointer bg-[#eae6e2] mx-1 pl-2 py-1 text-black shadow-[inset_0_0_0_0_#ff8e43] transition-[box-shadow] ease-out duration-1000 hover:shadow-[inset_400px_0_0_0_#fff] hover:text-[#ff8e43]'>Instagram</p>
                    <p className='cursor-pointer bg-[#eae6e2] mx-1 pl-2 py-1 text-black shadow-[inset_0_0_0_0_#ff8e43] transition-[box-shadow] ease-out duration-1000 hover:shadow-[inset_400px_0_0_0_#fff] hover:text-[#ff8e43]'>Facebook</p>
                    <p className='cursor-pointer bg-[#eae6e2] mx-1 pl-2 py-1 text-black shadow-[inset_0_0_0_0_#ff8e43] transition-[box-shadow] ease-out duration-1000 hover:shadow-[inset_400px_0_0_0_#fff] hover:text-[#ff8e43]'>Pinterest</p>
                    <p className='cursor-pointer bg-[#eae6e2] mx-1 pl-2 py-1 text-black shadow-[inset_0_0_0_0_#ff8e43] transition-[box-shadow] ease-out duration-1000 hover:shadow-[inset_400px_0_0_0_#fff] hover:text-[#ff8e43]'>Linkedin</p>
                </div>
            </div>
            <div className='text-[16px] bg-[#fcfbfa] p-3 rounded-xl mb-5 h-auto min-w-[250px]'>
                <p className='pb-3'>Instagram:</p>
                <div className='flex flex-col gap-1 relative p-[.3rem]'>
                    <img src={Insta} alt='Elevate Instagram' className='h-[226px] rounded-lg w-auto hover:scale-105 transition duration-[.4s] ease-in-out '/>
                </div>
            </div>
            <div className='text-[16px] bg-[#fcfbfa] p-3 rounded-xl mb-5 h-auto min-w-[250px]'>
                <p className='pb-3'>Read More:</p>
                <div className='flex flex-col gap-1 relative'>
                    {articles.map((article) => (
                        <Link
                            key={article.slug}
                            to={`/Articles/${article.slug}`}
                            onClick={goTop}
                            className='cursor-pointer bg-[#eae6e2] mx-1 pl-2 py-1 text-black shadow-[inset_0_0_0_0_#ff8e43] transition-[box-shadow] ease-out duration-1000 hover:shadow-[inset_400px_0_0_0_#fff] hover:text-[#ff8e43]'
                        >
                            {article.title}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ArticlesSidebar;
