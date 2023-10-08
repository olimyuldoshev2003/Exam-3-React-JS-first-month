/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const CardS1 = ({imgSrcS1, textH3S1, textPS1}) => {
  return (
    <div>
      <div className="main flex flex-col items-center justify-center">
        <img src={imgSrcS1} alt="" />
        <h3 className="text-center text-[#212B31] text-[18px] font-[400] mt-[10px] dark:text-[white]">
          {textH3S1}
        </h3>
        <p className="text-center text-[#72787D] text-[16px] font-[400] mt-[10px] md:w-[280px] dark:text-[white]">
          {textPS1}
        </p>
      </div>
    </div>
  );
}

export default CardS1