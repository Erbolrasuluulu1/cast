import React from 'react';
import str from "../img/IMAGE (12).svg"
import {BiRightArrowAlt} from "react-icons/bi";


const Jacob = () => {
    return (
        <section id="jacob">
            <div className="container">
               <div className="jacob flex items-center justify-between mt-[235px]">
                   <div>
                       <div className="w-[112px] h-[112px] rounded-[400px] flex items-center justify-center bg-cyan-600 text-[38px] text-amber-50"><BiRightArrowAlt/></div>
                       <h6 className="text-cyan-700 text-[18px] mt-[20px] mb-[-10px]">Meet your host</h6>
                       <h2 className="text-amber-50 text-[65px] mb-[28px]">Jacob Paulaner</h2>
                       <p className="text-gray-400 text-[22px] mb-[33px]">Jacob has a background in audio engineering, and has <br/>
                           been podcasting since the early days.</p>
                       <p className="text-gray-400 text-[22px]">He’s here to help you level up your game by sharing <br/>
                           everything he’s learned along the way.</p>
                   </div>
                   <img className="w-[650px] h-[743px]" src={str} alt=""/>
               </div>
            </div>
        </section>
    );
};

export default Jacob;