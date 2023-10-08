/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { useTranslation } from "react-i18next";

const ButtonMore = ({ btnMoreClass }) => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div>
      <div className="main">
        <button
          className={`${btnMoreClass} rounded-[4px] font-[400] text-[#212B31] border-[1px] border-[solid] border-[#DADEDF] dark:text-[#FFFFFF] dark:bg-[black]`}
        >
          {t("textBtnMore")}
        </button>
      </div>
    </div>
  );
};

export default ButtonMore