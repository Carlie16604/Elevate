import React from "react";

const NavBar = () => {

    return (
        <>
            <ul className='fixed top-0 w-screen h-11 flex flex-row font-medium gap-16 cursor-pointer justify-end pt-5 pr-60 text-lg'>                
                <li>Home</li>
                <li>About Us</li>
                <li>Classes</li>
                <li>Instructors</li>
            </ul>
        </>
    )
}

export default NavBar;