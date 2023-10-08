/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { useTranslation } from "react-i18next";

const ButtonRequestDarkMode = ({ btnRequestClass }) => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div>
      <div className="main">
        <button
          className={`${btnRequestClass} bg-[#fff] rounded-[4px]  text-[#212B31] font-[400] dark:text-[#fff] dark:bg-[#212B31]`}
        >
          {t("textBtnHeader")}
        </button>
      </div>
    </div>
  );
};

export default ButtonRequestDarkMode;
