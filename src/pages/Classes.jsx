import  React from "react";
import { Link } from 'react-router-dom';
import '../index.css';
import Rock from '../assets/Offers/rock.png';
import { classes } from '../data/classes.js';
const Classes = () => {

    const goTop = () => {
        window.scrollTo({
          top: 0,
        });
      };

    return (
        <section id='classes' className='mt-60'>
            <div className='rockContainer'>
                <img className='classesRock' src={Rock} alt='rock' />
            </div>
            <div className='container'>
                <div className='flex-wrap pt-8 mb-14 px-24 relative'>
                    <h1 className='text-[65px] flex flex-col stroke-black font-medium'>What we Offer</h1>
                    <span className='absolute w-[5.5rem] h-[4px] my-[-15px] bg-[#949978]'></span>
                </div>
                <div className='cardContainer'>
                    {classes.map((info) => (
                        <div key={info.id} className={info.id % 2 !== 0 ? 'card-deck' : 'card-deck pt-32'}>
                            <div className='card'>
                                <div className='card-inner'>
                                    <div className='card-front'>
                                        <img className='imgWrap' src={info.img} alt={info.name} />
                                    </div>
                                    <div className='card-back'>
                                        <img className='imgWrap flex scale-x-[-1] brightness-50' src={info.img} alt={info.name} />
                                            <div className='overlay pt-[6.5rem] px-[1rem]'>
                                                <p>{info.description}</p><br/>
                                                <p>{info.recommendation}</p>
                                            </div>
                                    <div className='book'>
                                        <Link to='/Booking' onClick={goTop}>
                                            <p>Book</p>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className='adjectives'>
                                {info.adjectives.map((adj, index) => (
                                    <p key={index}>{adj}</p>
                                ))}
                            </div>
                                <h3 className='classType'>{info.name}</h3>
                            </div>
                        </div> 
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Classes;