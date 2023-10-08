/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const CardS6 = ({ imgSrcS6, textH3S6, textPS6 }) => {
  return (
    <div>
      <div className="main flex flex-col justify-center items-center">
        <img src={imgSrcS6} alt="" className="mt-[30px]" />
        <h3 className="text-[#FFFFFF] text-[18px] font-[400] dark:text-[#212B31] mt-[10px] text-center">
          {textH3S6}
        </h3>
        <p className="text-[#FFFFFF] text-[16px] font-[400] dark:text-[#72787D] w-[332px] sm:w-[100%] mt-[10px] text-center">
          {textPS6}
        </p>
      </div>
    </div>
  );
};

export default CardS6;
