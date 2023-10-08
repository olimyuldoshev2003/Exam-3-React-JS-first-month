/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { useTranslation } from "react-i18next";

const SecondButtonMore = ({ secondBtnMoreClass, textOfSecondBtnMore }) => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div>
      <div className="main">
        <button
          className={`${secondBtnMoreClass} rounded-[4px] font-[400] text-[#212B31] bg-[white]  dark:text-[#FFFFFF] dark:bg-[black]`}
        >
          {textOfSecondBtnMore}
        </button>
      </div>
    </div>
  );
};

export default SecondButtonMore;
