import React from "react";

const NavBar = () => {

    const handleScroll = () => {
        if (window.scrollY > 10) {
            setSticky(true);
            } else {
            setSticky(false);
        }
    };

    window.addEventListener("scroll", handleScroll);

    return (
        <>
            <div className='p-0 w-screen fixed z-50'>
                <div className='container flex flex-row-reverse'>
                    <div className='NavBar'> 
                        <ul className='font-bold cursor-pointer text-2xl'>                
                            <a href='#Home'>Home</a>
                            <a>About Us</a>
                            <a href='#offers'>Classes</a>
                            <a>Contact</a>
                            {/* Link for Conatct */}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavBar;