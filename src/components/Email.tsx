import React from 'react';

const Email = () => {
    return (
        <section id="email">
            <div className="container">
                <div className="email">
                  <div className="w-[1370px] rounded-[32px] h-[387px] bg-black flex mt-[201px]">
                      <div className="mt-[59px] ml-[60px]">
                          <h5 className="text-cyan-700 text-[18px] ">Email Newsletter</h5>
                          <h2 className="text-amber-50 text-[72px] leading-[79px] tracking-[2.88px]">Subscribe <br/>
                              for updates</h2>
                      </div>
                      <div className="flex flex-col mt-[60px] ml-[247px]">
                          <input className="w-[522px] rounded-[6px] h-[82px] mb-[20px] text-gray-400 bg-[#191919] text-[24px] pl-[19px]" type="text" placeholder="Name"/>
                          <input className="w-[522px] mb-[20px] rounded-[6px] h-[82px] text-gray-400 bg-[#191919] text-[24px] pl-[19px]" type="email" placeholder="Email"/>
                          <button className="w-[87px] h-[48px] bg-[#118DA8] rounded-[6px] text-[15px] text-amber-50">Submit</button>
                      </div>
                  </div>
                </div>
            </div>
        </section>
    );
};

export default Email;