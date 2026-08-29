import  React from "react";
import { Link } from 'react-router-dom';
import NavBar from '../Components/NavBar.jsx'
import { classes } from '../../data/classes.js';
import BG from '../../assets/Universal/sideBackground.jpg';
const Classes = () => {

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
                <img src={BG} rel='norel' className='z-10 absolute h-[40vh] w-full object-cover desktop:h-[50vh]' alt='none'/>
                <div className='container'>
                    <div className='text-[42px] desktop:text-[70px] text-center pt-1'>
                        <div className='mt-32 mb-10 desktop:mt-60 desktop:mb-20 md:mt-40'>
                            <h1 className='text-white relative z-10 backdrop-blur-sm'>Classes</h1>
                        </div>
                    <div className='bg-[#97ab8623] backdrop-blur-sm shadow-xl pt-[.15rem] vh-[100vh]'>
                    <div className='cardContainer'>
                        {classes.map((info) => (
                            <div key={info.id} className={info.id % 2 !== 0 ? 'card-deck' : 'card-deck desktop:pt-24'}>
                                <div className='card'>
                                    <div className='card-inner' onClick={(event) => event.currentTarget.classList.toggle('rotated')}>
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
            </div>
        </>
    )
}

export default Classes;