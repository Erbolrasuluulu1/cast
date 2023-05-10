import React from 'react';
import bla from "../img/IMAGE (7).svg"
import mkr from "../img/IMAGE (8).svg"
import chl from "../img/IMAGE (9).svg"

const You = () => {
    return (
        <section id="you">
          <div className="container">
              <div className="you">
                <div  className="flex items-center justify-between mt-[106px]">
                   <h1 className="text-[64px] text-amber-50 tracking-[3px] ">Latest episodes</h1>
                    <button className="text-[17px] text-amber-50 bg-cyan-600 w-[178px] h-[51px]  rounded-[10px]">View all episodes</button>
                </div>

                  <div className="bg-black w-[1370px] h-[545px] rounded-[32px] mt-[66px] mb-[60px] flex">
                      <img src={bla} alt="" className="w-[389px] h-[465px] mt-[40px] ml-[40px] mr-[53px]"/>
                      <div>
                          <h5 className="bg-neutral-700 w-[73px] h-[27px] text-amber-50 text-center rounded-[6px] mb-[48px] mt-[48px]">Gear</h5>
                          <h6 className="text-cyan-700 mb-[18px]">Episode 3</h6>
                          <h2 className="text-amber-50 leading-[70px] text-[64px] tracking-[2.56px] mb-[28px]">Should you get <br/> outboard audio gear?</h2>
                          <p className="text-gray-400 leading-[33px] text-[22px] mb-[18px]">Is hardware really worth it when it comes to podcasting? The answer is...it <br/>
                              depends. Here’s our reasons on why you might want to consider picking <br/>
                              something up.</p>
                          <button className=" w-[208px] h-[51px] bg-cyan-600 rounded-[6px] text-amber-50 text-[18px]">View Episode Details</button>
                      </div>
                  </div>
                  <div className="bg-black w-[1370px] h-[545px] rounded-[32px] flex">
                      <img src={mkr} alt="" className="w-[389px] h-[465px] mt-[40px] ml-[40px] mr-[53px]"/>
                      <div>
                          <h5 className="bg-neutral-700 w-[136px] h-[27px] text-amber-50 text-center rounded-[6px] mb-[48px] mt-[48px]">Tips & Tricks</h5>
                          <h6 className="text-cyan-700 mb-[18px]">Episode 2</h6>
                          <h2 className="text-amber-50 leading-[70px] text-[64px] tracking-[2.56px] mb-[28px]">Mic tricks to take <br/> you to the next level</h2>
                          <p className="text-gray-400 leading-[33px] text-[22px] mb-[18px]">Stop rolling with those default settings on your mic. These small tweaks will <br/> take you from sounding good to great.</p>
                          <button className=" w-[208px] h-[51px] bg-cyan-600 rounded-[6px] text-amber-50 text-[18px]">View Episode Details</button>
                      </div>
                  </div>
                  <div className="bg-black w-[1370px] h-[545px] rounded-[32px] mt-[60px] flex">
                      <img src={chl} alt="" className="w-[389px] h-[465px] mt-[40px] ml-[40px] mr-[53px]"/>
                      <div>
                          <h5 className="bg-neutral-700 w-[73px] h-[27px] text-amber-50 text-center rounded-[6px] mb-[48px] mt-[48px]">Gear</h5>
                          <h6 className="text-cyan-700 mb-[18px]">Episode 1</h6>
                          <h2 className="text-amber-50 leading-[70px] text-[64px] tracking-[2.56px] mb-[28px]">The best microphone <br/>
                              under $200</h2>
                          <p className="text-gray-400 leading-[33px] text-[22px] mb-[18px]">With so many microphones on the market, how are you supposed to know <br/>
                              what’s the best? Take a look at our top picks.</p>
                          <button className=" w-[208px] h-[51px] bg-cyan-600 rounded-[6px] text-amber-50 text-[18px]">View Episode Details</button>
                      </div>
                  </div>
              </div>
          </div>
        </section>
    );
};

export default You;