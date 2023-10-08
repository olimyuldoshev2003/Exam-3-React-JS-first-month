/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const CardS5 = ({imgSrcS5, textH3S5, textPS5}) => {
  return (
    <div>
      <div className="main flex flex-col justify-center items-center">
        <img src={imgSrcS5} alt="" />
        <h3 className="text-[#212B31] text-[18px] font-[400] dark:text-[white] mt-[10px]">
          {textH3S5}
        </h3>
        <p className="text-[#72787D] text-[16px] font-[400] dark:text-[white] w-[332px] sm:w-[100%] mt-[10px]">
          {textPS5}
        </p>
      </div>
    </div>
  );
}

export default CardS5