import React from 'react';
import cast from "../img/Vector (1).svg"
import c1 from "../img/IMAGE (1).svg"
import c2 from "../img/IMAGE (2).svg"
import c3 from "../img/IMAGE (3).svg"
import c4 from "../img/IMAGE (4).svg"
import c5 from "../img/IMAGE (5).svg"
import { AiOutlineInstagram, AiOutlineTwitter} from "react-icons/ai";
import {FiFacebook} from "react-icons/fi";

const Footer = () => {
    return (
        <footer id="footer">
            <div className="container">
                <div className="footer flex items-start mt-[200px]">
                    <div>
                        <img className="mb-[29px] hover:text-blue-500 " src={cast} alt=""/>
                        <div className="flex text-amber-50  text-[30px] ">
                           <div className="mr-[10px]"><a href="https://www.instagram.com/"><AiOutlineInstagram/></a></div>
                             <div className="mr-[10px]"><a href="https://twitter.com/?lang=ru"><AiOutlineTwitter/></a></div>
                            <a href="https://ru-ru.facebook.com/"> <FiFacebook/></a>
                        </div>
                    </div>
                    <div className="flex flex-col text-amber-50 ml-[239px] text-[17px]">
                        <a className="mb-[10px] hover:text-blue-500 " href="#">Home</a>
                        <a className="mb-[10px] hover:text-blue-500" href="#">About</a>
                        <a className="mb-[10px] hover:text-blue-500" href="#">Episodes</a>
                        <a className="mb-[10px] hover:text-blue-500 " href="#">Contact</a>

                    </div>
                    <div className="flex flex-col text-amber-50 ml-[146px] mr-[100px] text-[17px]">
                        <a className="mb-[10px] hover:text-blue-500" href="#">Style Guide</a>
                        <a className="mb-[10px] hover:text-blue-500" href="#">Instructions</a>
                        <a className="mb-[10px] hover:text-blue-500" href="#">Changelog</a>
                        <a className="mb-[10px] hover:text-blue-500" href="#">Credit</a>
                        <a className="mb-[10px] hover:text-blue-500" href="#">Powered by Webflow</a>
                        <a className="mb-[127px] hover:text-blue-500" href="#">Licenses</a>
                    </div>
                    <div className="flex mr-[17px]">
                        <img className=" mr-[17px]" src={c1} alt=""/>
                        <img className=" mr-[17px]" src={c2} alt=""/>
                        <img className=" mr-[17px]" src={c3} alt=""/>
                        <img className=" mr-[17px]" src={c4} alt=""/>
                        <img className=" mr-[17px]" src={c5} alt=""/>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;