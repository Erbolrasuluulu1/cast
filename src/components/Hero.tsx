import React from 'react';
import Herol from "../img/IMAGE.png"
import Spo from "../img/IMAGE (1).svg"
import Or from "../img/IMAGE (2).svg"
import blu from "../img/IMAGE (3).svg"
import pur from "../img/IMAGE (4).svg"
import sta from "../img/IMAGE (5).svg"

const Hero = () => {
    return (
        <section id="hero">
          <div className="container">
              <div className="hero flex items-center justify-between mt-[95px]">
                  <img src={Herol} alt="" className="ml-14"/>
                  <div className="hero-title">
                      <h1 className="text-amber-50 text-7xl w-97 leading-[90px] font-light mr-32 mt-[230px]">Take your <br/> podcast to the <br/> next <span className="font-bold text-6xl">level</span></h1>
                      <h6 className="text-amber-50 ml-[20px] mt-[113px]">Listen on</h6>
                      <div className="logos flex m-8">
                          <img className="mr-[17px]" src={Spo} alt=""/>
                          <img className="mr-[17px]" src={Or} alt=""/>
                          <img className="mr-[17px]" src={blu} alt=""/>
                          <img className="mr-[17px]" src={pur} alt=""/>
                          <img src={sta} alt=""/>
                      </div>
                  </div>
              </div>
          </div>
        </section>
    );
};

export default Hero;