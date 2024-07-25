import React from "react";
import '../index.css';
import Rock from '../assets/Reviews/Rock.png';

const Reviews = () => {
    return (
        <>
            <div id='reviws'>
                <div className='container'>
                    <div>
                        <img src={Rock} alt='Rock' />
                        <div className='portalsContainer'>
                            <div className='portals'>
                                <h3>Booking</h3>
                                <h3>Meet The Team</h3>
                                <h3>Contact</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Reviews;