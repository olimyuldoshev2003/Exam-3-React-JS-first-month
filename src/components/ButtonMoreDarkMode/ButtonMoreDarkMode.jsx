/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { useTranslation } from "react-i18next";

const ButtonMoreDarkMode = ({ btnMoreClass, textBtnMoreDarkMode }) => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div>
      <div className="main">
        <button
          className={`${btnMoreClass} rounded-[4px] font-[400] text-[#fff] border-[1px] border-[solid] border-[#fff] dark:text-[#212B31] dark:bg-[#FFFFFF] dark:border-[#212B31]`}
        >
                  {textBtnMoreDarkMode}
        </button>
      </div>
    </div>
  );
};

export default ButtonMoreDarkMode;
