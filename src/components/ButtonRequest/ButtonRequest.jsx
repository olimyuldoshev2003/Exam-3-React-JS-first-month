/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { useTranslation } from "react-i18next";

const ButtonRequest = ({ btnRequestClass }) => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div>
      <div className="main">
        <button
          className={`${btnRequestClass} bg-[#212B31] rounded-[4px]  text-[#FFFFFF] font-[400] dark:text-[#212B31] dark:bg-[white]`}
        >
          {t("textBtnHeader")}
        </button>
      </div>
    </div>
  );
};

export default ButtonRequest;
