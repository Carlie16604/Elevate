import React from "react";

const NavBar = () => {

    return (
        <>
        <div className='p-0 w-screen fixed'>
            <div className='flex flex-row-reverse'>
                <div className='NavBar'> 
                    <ul className='font-bold cursor-pointer text-lg'>                
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Classes</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>
        </div>
            {/* <ul className='fixed top-0 w-screen h-11 flex flex-row font-medium gap-16 cursor-pointer justify-end pt-5 pr-60 text-lg'>                 */}
        </>
    )
}

export default NavBar;