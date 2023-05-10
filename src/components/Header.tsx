import React from 'react';
import Logo from "../img/Vector (1).svg"

const Header = () => {
    return (
        <header id="header">
           <div className="container">
               <div className="header flex items-center justify-between  m-8 ">
                   <img src={Logo}/>
                   <div className="header-nav  text-amber-50 text-[17px]">
                       <a href="#" className="hover:text-blue-500 ">Home</a>
                       <a href="#" className="ml-[155px] hover:text-blue-500 ">About</a>
                       <a href="#" className="ml-[40px] hover:text-blue-500 ">Contact</a>
                   </div>
               </div>
           </div>
        </header>
    );
};

export default Header;