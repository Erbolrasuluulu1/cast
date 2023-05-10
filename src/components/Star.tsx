import React from 'react';
import {AiFillStar} from "react-icons/ai";

const Star = () => {
    return (
        <section id="star">
            <div className="container">
                <div className="star flex flex-col mt-[200px]">
                   <div className="flex mb-[35px]">
                       <div className="bg-[#000000] mr-[35px] w-[433px] h-[333px] rounded-[32px] pt-[34px] pl-[50px]">

                           <div>
                               <div className="flex text-amber-300 text-[22px] mb-[21px]">
                                   <AiFillStar/>
                                   <AiFillStar/>
                                   <AiFillStar/>
                                   <AiFillStar/>
                                   <AiFillStar/>
                               </div>
                               <h1 className="text-amber-50 text-[36px] mb-[19px]">I can’t recommend <br/> this podcast <br/> enough</h1>
                               <h2 className="text-gray-400 text-[24px] ">Betty Lacey</h2>
                           </div>
                       </div>
                       <div className="bg-[#000000] mr-[35px] w-[433px] h-[333px] rounded-[32px] pt-[34px] pl-[50px]">
                           <div>
                               <div className="flex text-amber-300 text-[22px] mb-[21px]">
                                   <AiFillStar/>
                                   <AiFillStar/>
                                   <AiFillStar/>
                                   <AiFillStar/>
                                   <AiFillStar/>
                               </div>
                               <h1 className="text-amber-50 text-[36px] mb-[19px]">Jacob is the best <br/> in the business</h1>
                               <h2 className="text-gray-400 text-[24px] ">Adam Driver</h2>
                           </div>
                       </div>
                       <div className="bg-[#000000] w-[433px] h-[333px] rounded-[32px] pt-[34px] pl-[50px]">
                           <div>
                               <div className="flex text-amber-300 text-[22px] mb-[21px]">
                                   <AiFillStar/>
                                   <AiFillStar/>
                                   <AiFillStar/>
                                   <AiFillStar/>
                                   <AiFillStar/>
                               </div>
                               <h1 className="text-amber-50 text-[36px] mb-[19px]">A wealth of audio <br/> knowledge</h1>
                               <h2 className="text-gray-400 text-[24px] ">Marcus Brown</h2>
                           </div>
                       </div>
                   </div>
                    <div className="flex">
                        <div className="bg-[#000000] mr-[35px] w-[433px] h-[333px] rounded-[32px] pt-[34px] pl-[50px]">
                            <div>
                                <div className="flex text-amber-300 text-[22px] mb-[21px]">
                                    <AiFillStar/>
                                    <AiFillStar/>
                                    <AiFillStar/>
                                    <AiFillStar/>
                                    <AiFillStar/>
                                </div>
                                <h1 className="text-amber-50 text-[36px] mb-[19px]">Every episode is a <br/>
                                    gem!</h1>
                                <h2 className="text-gray-400 text-[24px] ">Jessica Knowl</h2>
                            </div>
                        </div>
                        <div className="bg-[#000000] mr-[35px] w-[433px] h-[333px] rounded-[32px] pt-[34px] pl-[50px]">
                            <div>
                                <div className="flex text-amber-300 text-[22px] mb-[21px]">
                                    <AiFillStar/>
                                    <AiFillStar/>
                                    <AiFillStar/>
                                    <AiFillStar/>
                                    <AiFillStar/>
                                </div>
                                <h1 className="text-amber-50 text-[36px] mb-[19px]">Whoa whoa, let me <br/>
                                    take some notes!</h1>
                                <h2 className="text-gray-400 text-[24px] ">Scott Adams</h2>
                            </div>
                        </div>
                        <div className="bg-[#000000]  w-[433px] h-[333px] rounded-[32px] pt-[34px] pl-[50px]">
                            <div>
                                <div className="flex text-amber-300 text-[22px] mb-[10px]">
                                    <AiFillStar/>
                                    <AiFillStar/>
                                    <AiFillStar/>
                                    <AiFillStar/>
                                    <AiFillStar/>
                                </div>
                                <h1 className="text-amber-50 text-[34px] mb-[5px]">I’ve upped my <br/> game considerably <br/> since I started <br/> listening</h1>
                                <h2 className="text-gray-400 text-[24px] ">Steven Blast</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Star;