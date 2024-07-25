import React from "react";

const NavBar = () => {

    return (
        <>
            <div className='p-0 w-screen fixed'>
                <div className='flex flex-row-reverse'>
                    <div className='NavBar'> 
                        <ul className='font-bold cursor-pointer text-2xl'>                
                            <li>Home</li>
                            <li>About Us</li>
                            <li>Classes</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavBar;