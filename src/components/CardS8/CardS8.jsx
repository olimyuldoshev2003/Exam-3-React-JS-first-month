/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'

const CardS8 = ({imgSrcS8, textH3S8, textPS8}) => {
  return (
    <div>
      <div className="main flex gap-[0_20px] md:flex-col">
        <img src={imgSrcS8} alt="" className="w-[40px] h-[40px]" />
        <div className="texts_s_8">
          <h3 className="text-[#212B31] text-[18px] font-[400] dark:text-[white] md:mt-[20px]">
            {textH3S8}
          </h3>
          <p className="text-[#72787D] text-[16px] font-[400] w-[300px] sm:w-[100%] mt-[10px] dark:text-[white]">
            {textPS8}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CardS8