import  React from "react";
import { Link } from 'react-router-dom';
import NavBar from '../Components/NavBar.jsx'
import { classes } from '../../data/classes.js';
import BG from '../../assets/Universal/sideBackground.jpg';
const Classes = () => {

    const rotateCard = (card) => {
        const cardInner = card.querySelector('.card-inner');
        cardInner.classList.toggle('rotated');
      }

    const goTop = () => {
        window.scrollTo({
          top: 0,
        });
      };

    //   redo next

    return (
        <>
        <NavBar />
            <div id='Classes'>
                <img src={BG} rel='norel' className='z-0 absolute h-[50vh] w-screen min-w-[1200px] object-cover lg:h-[40vh]' alt='none'/>
                <div className='container'>
                    <div className='text-[70px] text-center pt-1'>
                        <div className='mt-60 mb-20 md:mt-40'>
                            <h1 className='text-white relative z-10'>Classes</h1>
                        </div>
                    <div className='cardContainer'>
                        {classes.map((info) => (
                            <div key={info.id} className={info.id % 2 !== 0 ? 'card-deck' : 'card-deck pt-24'}>
                                <div className='card'>
                                    <div className='card-inner' onClick={rotateCard}>
                                        <div className='card-front'>
                                            <img className='imgWrap rounded-tl-[100px]' src={info.img} alt={info.name} />
                                        </div>
                                        <div className='card-back rounded-tr-[100px]'>
                                            <img className='imgWrap flex scale-x-[-1] brightness-50 rounded-tl-[100px]' src={info.img} alt={info.name} />
                                                <div className='overlay pt-[8.5rem] px-[1rem] text-[17px] cursor-default'>
                                                    <p>{info.description}</p><br/>
                                                    <p>{info.recommendation}</p>
                                                </div>
                                        <div className='book py-3 px-5 w-fit self-center text-black bg-[#D4CFC9] border-2 rounded-[400px] border-[#fff] inline-block text-[14px] tracking-[1px] cursor-pointer shadow-[inset_0_0_0_0_#DFDCD8] transition-[box-shadow] ease-out duration-1000 hover:shadow-[inset_400px_0_0_0_#D4CFC9] hover:text-white'>
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
                </div>
            </div>
        </>
    )
}

export default Classes;