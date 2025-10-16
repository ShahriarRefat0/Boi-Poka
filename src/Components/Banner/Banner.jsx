import React from 'react';
import bannerImg from '../../assets/bannerImg.png'
const Banner = () => {
  return (
    <div className="flex justify-between items-center w-11/12 mx-auto bg-[#1313130d] rounded-2xl py-20 px-28 mt-10 mb-24">
      <div>
        <h1 className="font-bold text-[56px] title-font mb-10">
          Books to freshen up <br /> your bookshelf
        </h1>
        <button className=" bg-[#23be0a] text-white outline-note font-bold rounded-lg py-4 px-7">
          View The List
        </button>
      </div>
      <div>
        <img className="" src={bannerImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;