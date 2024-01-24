/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import Switcher from "./components/Switch UI/Switcher";
import "./App.css";
import { useTranslation } from "react-i18next";
// import axios from "axios";


//From material UI
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

//For Icons
import AddCircleIcon from "@mui/icons-material/AddCircle";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button, IconButton } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

//For Swiper
import React, { useEffect, useRef, useState } from "react";

//For AOS animation
import AOS from "aos";
import "aos/dist/aos.css";


import logoHeader from "./assets/logo-header_light.svg";
import imgS1 from "./assets/fotoONe.svg";
import imgS2 from "./assets/twofoto.svg";
import img1S5 from "./assets/ecoplus+.svg";
import img2S5 from "./assets/Rectangle 13.png";
import img3S5 from "./assets/Rectangle 15.png";
import img4S5 from "./assets/20230708_215039_0000.png";
import TabSongsAndVideos from "./components/TabSongsAndVideos/TabSongsAndVideos";

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  //For AOS animation
  useEffect(() => {
    AOS.init();
  }, []);

  const [menuClass, setMenuClass] = useState("sm:hidden");
  const [showMenu, setShowMenu] = useState(false);
  const [classAnimation, setClassAnimation] = useState("unclicked");
  const [changeMenu, setChangeMenu] = useState("burger_menu_unclicked");
  const [buttonMore, setButtonMore] = useState(false);
  const [classButtonMore, setClassButtonMore] = useState("button_unclicked");
  const [openModalSongsAndVideos, setOpenModalSongsAndVideos] = useState(false)

  function showingMenu() {
    if (!showMenu) {
      setMenuClass("sm:block");
      setClassAnimation("clicked");
      setChangeMenu("burger_menu_clicked");
    } else {
      setMenuClass("sm:hidden");
      setClassAnimation("unclicked");
      setChangeMenu("burger_menu_unclicked");
    }
    setShowMenu(!showMenu);
  }

  function showMoreInformation() {
    if (!buttonMore) {
      setClassButtonMore("button_clicked");
    } else {
      setClassButtonMore("button_unclicked");
    }
    setButtonMore(!buttonMore);
  }

  function handleCloseModalSongsAndVideos() {
    setOpenModalSongsAndVideos(false);
  }

  return (
    <div className="sm:px-[20px] lg:px-[60px] bg-[#000] dark:bg-[#fff]">
      <header className="header flex justify-between items-center py-[10px]">
        <div className="h_block_1 flex items-center gap-[21px]">
          {/* <div className="logo_header bg-lightImg dark:bg-darkImg w-[86px] h-[72px] bg-no-repeat bg-[100%]"></div> */}
          <a href="#">
            <img src={logoHeader} alt="" className="w-[57px] h-[57px]" />
          </a>
          <h1 className="sm:hidden md:block text-[#fff] text-[22px] font-[400] dark:text-[#000] rye duration-300">
            {t("h.t1")}
          </h1>
        </div>
        <div className="h_block_2 flex items-center gap-4">
          <nav className="navbar sm:hidden lg:block">
            <ul className="text-[#fff] text-[17px] font-[400] flex items-center lg:gap-6 dark:text-[#000] rye duration-300">
              <li>
                <a
                  className="hover:text-[gold] dark:hover:text-[blue] hover:duration-300 hover:underline duration-300"
                  href="#"
                >
                  {t("h.t2")}
                </a>
              </li>
              <li>
                <a
                  className="hover:text-[gold] dark:hover:text-[blue] hover:duration-300 hover:underline duration-300"
                  href="#biography"
                >
                  {t("h.t3")}
                </a>
              </li>
              <li>
                <a
                  className="hover:text-[gold] dark:hover:text-[blue] hover:duration-300 hover:underline duration-300"
                  href="#aboutMe"
                >
                  {t("h.t4")}
                </a>
              </li>
              <li>
                <a
                  className="hover:text-[gold] dark:hover:text-[blue] hover:duration-300 hover:underline duration-300"
                  href="#projects"
                >
                  {t("h.t5")}
                </a>
              </li>
              <li>
                <a
                  className="hover:text-[gold] dark:hover:text-[blue] hover:duration-300 hover:underline"
                  href="#contacts"
                >
                  {t("h.t6")}
                </a>
              </li>
            </ul>
          </nav>
          <div className="translation_and_dark_mode flex items-center gap-4">
            <div className="for_dark_mode">
              <Switcher />
            </div>
            <select
              onChange={(event) => changeLanguage(event.target.value)}
              name=""
              id=""
              className="outline-none text-[white] bg-[black] border-none dark:bg-[#fff] text-[15px] dark:text-[#000] rounded-[10px] rye cursor-pointer duration-300"
            >
              <option
                className="text-[#fff] dark:text-[#000] duration-300"
                value=""
              >
                {t("language")}
              </option>
              <option
                className="text-[#fff] dark:text-[#000] duration-300"
                value="ru"
              >
                {t("russian")}
              </option>
              <option
                className="text-[#fff] dark:text-[#000] duration-300"
                value="en"
              >
                {t("english")}
              </option>
            </select>
            <div
              className="for_mobile_size sm:flex sm:flex-col sm:gap-[10px] lg:hidden cursor-pointer"
              onClick={() => showingMenu()}
            >
              <div
                className={`cols w-[36px] bg-[#fff] dark:bg-[#000] h-[2px] ${changeMenu}`}
              ></div>
              <div
                className={`cols w-[24px] bg-[#fff] dark:bg-[#000] h-[2px] text-end ${changeMenu}`}
              ></div>
              <div
                className={`cols w-[36px] bg-[#fff] dark:bg-[#000] h-[2px] ${changeMenu}`}
              ></div>
            </div>
          </div>
        </div>
      </header>
      <nav
        className={`navbar_for_mobile_size  lg:hidden py-[10px] ${menuClass} ${classAnimation}`}
      >
        <ul className="text-[#fff] dark:text-[#000] text-[20px] font-[400] flex flex-col gap-2 px-[20px] rye">
          <li className="">
            <a
              href="#"
              className="hover:text-[gold] dark:hover:text-[blue] hover:duration-300 hover:underline duration-300"
            >
              {t("h.t2")}
            </a>
          </li>
          <li className="">
            <a
              href="#biography"
              className="hover:text-[gold] dark:hover:text-[blue] hover:duration-300 hover:underline duration-300"
            >
              {t("h.t3")}
            </a>
          </li>
          <li className="">
            <a
              href="#aboutMe"
              className="hover:text-[gold] dark:hover:text-[blue] hover:duration-300 hover:underline duration-300"
            >
              {t("h.t4")}
            </a>
          </li>
          <li className="">
            <a
              href="#projects"
              className="hover:text-[gold] dark:hover:text-[blue] hover:duration-300 hover:underline duration-300"
            >
              {t("h.t5")}
            </a>
          </li>
          <li className="">
            <a
              href="#contacts"
              className="hover:text-[gold] dark:hover:text-[blue] hover:duration-300 hover:underline duration-300"
            >
              {t("h.t6")}
            </a>
          </li>
        </ul>
      </nav>
      <main className="pt_serif">
        <section className="section_1 flex items-center media_query_s_1 pb-[80px] mt-[50px]">
          <div className="s_block_1 flex flex-col items-start gap-6">
            <h1 className="text-[#FFAB07] lg:text-[81px] font-[700] md:text-[60px] sm:text-[30px] duration-300">
              {t("h.t1")}
            </h1>
            <h4 className="text-[#FFAB07] lg:text-[38px] font-[700] md:text-[26px] sm:text-[17px] duration-300">
              {t("s1.t2")}
            </h4>
            <button className="text-[#FFFFFF] lg:text-[23px] md:text-[18px] sm:text-[13px] font-[400] lg:p-[13px_48px] sm:p-[10px_40px] border-[5px] border-[solid] border-[#fff] outline-none rounded-[100px] dark:text-[#000] dark:border-[#000] duration-300">
              {t("s1.t3")}
            </button>
          </div>
          <div className="s_1_block_2 relative">
            <img
              src={imgS1}
              className="w-[627px]"
              alt="Kamil Nurmatov - first"
            />
            <div className="min_block_1_s_1_b_2 lg:w-[173px] lg:h-[173px] rounded-full bg-[#fff] grid place-items-center border-[5px] border-[solid] border-[#000] absolute lg:right-0 lg:bottom-[-10px] md:w-[123px] md:h-[123px] md:bottom-[10px] md:right-0 sm:w-[85px] sm:h-[85px] sm:bottom-[10px] sm:right-0 duration-300">
              <p className="text-[#000000] lg:text-[20px] font-[400] md:text-[16px] sm:text-[11px] duration-300">
                {t("s1.t4")}
              </p>
            </div>
            <div className="min_block_2_s_1_b_2 rounded-full bg-[#000] dark:bg-[#fff] inline-block border-[3px] border-[solid] border-[#fff] dark:border-[#000] p-[5px] absolute lg:bottom-[-80px] right-[30px] md:bottom-[-70px] sm:bottom-[-70px] duration-300">
              <div className="flex_elements_s_1 flex items-center gap-2 duration-300">
                <p className=" text-[#fff] dark:text-[#000] lg:text-[30px] md:text-[19px] font-[400] sm:text-[14px]">
                  {t("s1.t5")}
                </p>
                <div className="little_block_s_1 flex justify-center items-center lg:w-[125px] lg:h-[125px] rounded-[125px] border-[5px] border-[solid] border-[#000] md:w-[100px] md:h-[100px] sm:w-[90px] sm:h-[90px] bg-[#fff] duration-300">
                  <p className="lg:text-[25px] font-[400] md:text-[18px] sm:text-[13px] duration-300">
                    {t("s1.t6")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section_2 mt-[20px] py-[50px]">
          <h1
            className="text-center text-[#FFAB07] md:text-[66px] sm:text-[50px] duration-300"
            id="biography"
          >
            {t("h.t3")}
          </h1>
          <h2 className="text-center text-[#FFAB07] md:text-[46px] sm:text-[32px] duration-300">
            {t("h.t1")}
          </h2>
          <div className="s_2_block mt-[30px] flex items-center media_query_s_2 gap-4">
            <div className="min_block_1_s_2">
              <img
                src={imgS2}
                alt="Kamil Nurmatov - second"
                className="w-[627px]"
              />
            </div>
            <div className="min_block_2_s_2">
              <div className="birth lg:p-[27px_31.5px] md:p-[14px_26px] sm:p-[10px_20px] border-t-[1px] border-t-[solid] border-t-[#fff] dark:border-t-[#000]">
                <h1 className="text-[#fff] dark:text-[#000] lg:text-[29px] md:text-[21px] sm:text-[16px] font-[400] duration-300">
                  {t("s2.t3")}: <span>{t("s2.t3Span")}</span>
                </h1>
              </div>
              <div className="place_of_birth lg:p-[27px_31.5px] md:p-[14px_26px] sm:p-[10px_20px] border-t-[1px] border-t-[solid] border-t[#fff] dark:border-t-[#000]">
                <h1 className="text-[#fff] dark:text-[#000] lg:text-[25px] md:text-[21px] sm:text-[16px] font-[400] flex items-center gap-3 duration-300">
                  {t("s2.t4")}:
                  <span className="lg:text-[23px] md:text-[19px] sm:text-[17px] max-w-[300px]">
                    {t("s2.t4Span")}
                  </span>
                </h1>
              </div>
              <div className="country lg:p-[27px_31.5px] md:p-[14px_26px] sm:p-[10px_20px] border-t-[1px] border-t-[solid] border-t-[#fff] dark:border-t-[#000]">
                <h1 className="text-[#fff] dark:text-[#000] lg:text-[29px] sm:text-[16px] md:text-[21px] font-[400] duration-300">
                  {t("s2.t5")}: <span>{t("s2.t5Span")}</span>
                </h1>
              </div>
              <div className="type_of_song lg:p-[27px_31.5px] md:p-[14px_26px] sm:p-[10px_20px] border-y-[1px] border-y-[solid] border-y-[#fff] dark:border-y-[#000]">
                <h1 className="text-[#fff] dark:text-[#000] lg:text-[29px] md:text-[21px] font-[400] duration-300">
                  {t("s2.t6")}: <span>{t("s2.t6Span")}</span>
                </h1>
              </div>
              <div className="for_btn mt-[40px]">
                <button
                  className={`more text-[#fff] dark:text-[#000] lg:text-[30px] md:text-[23px] sm:text-[19px] text-[400] cursor-pointer duration-300 ${classButtonMore}`}
                  onClick={() => showMoreInformation()}
                >
                  {t("s2.t7")}{" "}
                  <KeyboardArrowDownIcon className="icon_dropdown duration-300" />
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="section_3">
          <p className="text-[#fff] text-[17px] font-[400] dark:text-[#000] duration-300">
            {buttonMore ? t("s3.t1") : null}
          </p>
        </section>
        <section className="section_4 mt-[40px]">
          <h1 className="text-[#ffab07] text-center lg:text-[40px] md:text-[26px] sm:text-[33px] font-[700] duration-300">
            {t("s4.t1")}
          </h1>
          <div className="grid_block_s_4 grid md:grid-cols-3 md:grid-rows-3 sm:grid-cols-1 sm:grid-rows-5 mt-[30px]">
            <div className="grid_block_1 md:p-[70px_84px] sm:p-[40px_50px] md:row-start-1 md:row-end-2 md:col-start-1 md:col-end-3 sm:row-start-1 sm:row-end-2 sm:col-start-1 sm:col-end-4">
              <h1 className="text-[#fff] dark:text-[#000] lg:text-[40px] md:text-[26px] sm:text-[17px] font-[700] duration-300">
                {t("s4.t2")}
              </h1>
            </div>
            <div className="grid_block_2 md:p-[70px_84px] sm:p-[40px_50px] md:row-start-1 md:row-end-2 md:col-start-3 md:col-end-4 sm:row-start-2 sm:row-end-3 sm:col-start-1 sm:col-end-4">
              <h1 className="text-[#fff] dark:text-[#000] lg:text-[40px] md:text-[26px] sm:text-[17px]  font-[700] duration-300">
                {t("s4.t3")}
              </h1>
            </div>
            <div className="grid_block_3 md:p-[70px_84px] sm:p-[40px_50px] md:row-start-2 md:row-end-3 md:col-start-1 md:col-end-2 sm:row-start-3 sm:row-end-4 sm:col-start-1 sm:col-end-4">
              <h1 className="text-[#fff] dark:text-[#000] lg:text-[40px] md:text-[26px] sm:text-[17px] font-[700] duration-300">
                {t("s4.t4")}
              </h1>
            </div>
            <div className="grid_block_4 md:p-[70px_84px] sm:p-[40px_50px] md:row-start-2 md:row-end-3 md:col-start-2 md:col-end-4 sm:row-start-4 sm:row-end-5 sm:col-start-1 sm:col-end-4">
              <h1 className="text-[#fff] dark:text-[#000] lg:text-[40px] md:text-[26px] sm:text-[17px] font-[700] duration-300">
                {t("s4.t5")}
              </h1>
            </div>
            <div className="grid_block_5 md:p-[70px_84px] sm:p-[40px_30px] md:row-start-3 md:row-end-4 md:col-start-1 md:col-end-4 sm:row-start-5 sm:row-end-6 sm:col-start-1 sm:col-end-4">
              <h1 className="text-[#fff] dark:text-[#000] lg:text-[40px] md:text-[26px] sm:text-[17px] font-[700] duration-300">
                {t("s4.t6")}
              </h1>
            </div>
          </div>
        </section>
        <section className="section_5 mt-[90px]" id="projects">
          <h1 className="text-[#ffab07] text-center lg:text-[40px] md:text-[35px] sm:text-[36px] font-[700] duration-300">
            {t("s5.t1")}
          </h1>
          <div className="flex_block_s5 flex justify-center mt-[50px] flex-wrap gap-5">
            <div
              className="flex_block_1 relative"
            >
              <p className="text-[#fff] md:text-[50px] sm:text-[32px] font-[700] text-center absolute top-[44%] md:left-[22%] sm:left-[19%] duration-300">
                {t("s5.t2")}
              </p>
              <img
                className="md:w-[500px] md:h-[500px] sm:w-[100%] sm:h-[100%] duration-300"
                src={img1S5}
                alt="Eko-Plus"
              />
            </div>
            <div
              className="flex_block_2 relative"
            >
              <p className="text-[#fff] md:text-[50px] sm:text-[32px] font-[700] text-center absolute md:top-[44%] sm:top-[33%] md:left-[8%] sm:left-[10%] duration-300">
                {t("s5.t3")}
              </p>
              <img
                className="md:w-[500px] md:h-[500px] sm:w-[100%] sm:h-[70vh] duration-300"
                src={logoHeader}
                alt="Kamil-Industry"
              />
            </div>
            <div
              className="flex_block_3 relative cursor-pointer"
              onClick={() => setOpenModalSongsAndVideos(true)}
            >
              <p className="text-[#fff] md:text-[50px] sm:text-[32px] font-[700] text-center absolute top-[44%] left-[32%] duration-300">
                {t("s5.t4")}
              </p>
              <img
                className="md:w-[500px] md:h-[500px] sm:w-[100%] sm:h-[100%] duration-300"
                src={img3S5}
                alt="Songs"
              />
            </div>
            <div className="flex_block_4 relative">
              <p className="text-[#fff] md:text-[50px] sm:text-[27px] font-[700] text-center absolute top-[44%] md:left-[11.5%] sm:left-[6%] duration-300">
                {t("s5.t5")}
              </p>
              <img
                className="md:w-[500px] md:h-[500px] sm:w-[100%] sm:h-[100%] duration-300 rounded-[14px]"
                src={img4S5}
                alt="Distributor.tj"
              />
            </div>
          </div>
          <Modal
            open={openModalSongsAndVideos}
            onClose={handleCloseModalSongsAndVideos}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            className="flex justify-center  items-center"
          >
            <Box className="md:w-[520px] sm:w-[84%] rounded-[30px] outline-none bg-[#242323] dark:bg-[#fff] h-[620px] overflow-auto px-[10px]">
              <header className="header mt-[3px] flex justify-between items-center">
                <h1 className="text-[22px] font-[700] text-[#fff] dark:text-[#000]">
                  {t("inModalS5.t1")}
                </h1>
                <button
                  className="text-[39px] text-[#fff] dark:text-[#000] font-[500]"
                  onClick={() => setOpenModalSongsAndVideos(false)}
                >
                  &times;
                </button>
              </header>
              <section className="section">
                <div className="for_tab">
                  <TabSongsAndVideos />
                </div>
              </section>
            </Box>
          </Modal>
        </section>
        <section className="section_6 mt-[60px]" id="aboutMe">
          <h1 className="text-[#ffab07] text-center lg:text-[40px] md:text-[35px] sm:text-[33px] font-[700] duration-300">
            {t("s6.t1")}
          </h1>
          <div className="blocks_s_6 mt-[60px] flex flex-col gap-[20px]">
            <div className="block_1_s_6 flex flex-col gap-[10px]">
              <h1 className="text-[#48249CF0] lg:text-[40px] md:text-[35px] sm:text-[33px] font-[700] duration-300">
                {t("s6.t2")}
              </h1>
              <iframe
                width="100%"
                className="dark:border-[3px] dark:border-[solid] dark:border-[#000]"
                height="800"
                src="https://halva.tj/tj/articles/our_people/ikhtirokor_varzishgar_va_ovozkhon_kamil_nurmatov_ch_guna_dar_se_oda_muvaffa_gardid/"
                title="Kamil Nurmatov"
              ></iframe>{" "}
            </div>
            <div className="block_2_s_6 flex flex-col gap-[10px]">
              <h1 className="text-[#fff] lg:text-[40px] md:text-[35px] sm:text-[33px] font-[700] dark:text-[#000] duration-300">
                {t("s6.t3")}
              </h1>
              <iframe
                width="100%"
                className="dark:border-[3px] dark:border-[solid] dark:border-[#000]"
                height="800"
                title="Kamil Nurmatov in GOOGLE"
                src="https://tj.mir24.tv/news/140716?fbclid=PAAaZFPwsUuILWM9mkW6I1CJBVhE2ygtJm-lk6hlmM-E4SfC_f8tC1bJ2p0nM"
              ></iframe>
            </div>
            <div className="block_3_s_6 flex flex-col gap-[10px]">
              <h1 className="text-[#fff] lg:text-[40px] md:text-[35px] sm:text-[33px] font-[700] dark:text-[#000] duration-300">
                {t("s6.t4")}
              </h1>
              <iframe
                width="100%"
                className="dark:border-[3px] dark:border-[solid] dark:border-[#000]"
                height="800"
                title="Kamil Nurmatov in the world"
                src="https://vot.tj/tj/?p=18907"
              ></iframe>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer mt-[140px] relative duration-300" id="contacts">
        <div className="for_links bg-[#00000022] dark:bg-[transparent] border-[10.2px] border-solid border-[#ffffff40] dark:border-[#505050] flex items-center flex-wrap p-[10px] gap-[15px] rounded-[0_120px_120px_0] lg:max-w-[1036px] sm:max-w-[510px] duration-300">
          <a
            href="https://instagram.com/kamilnurmatovv?igshid=MzNlNGNkZWQ4Mg=="
            className="instagram duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="lg:w-[70px] lg:h-[70px] sm:w-[30px] sm:h-[30px] duration-300"
              width="80"
              height="80"
              viewBox="0 0 80 80"
              fill="none"
            >
              <rect width="80" height="80" rx="23" fill="#FFAB07" />
              <path
                d="M43.4267 6.66699C47.1767 6.67699 49.08 6.69699 50.7233 6.74366L51.37 6.76699C52.1167 6.79366 52.8533 6.82699 53.7433 6.86699C57.29 7.03366 59.71 7.59366 61.8333 8.41699C64.0333 9.26366 65.8867 10.4103 67.74 12.2603C69.435 13.9266 70.7465 15.9423 71.5833 18.167C72.4067 20.2903 72.9667 22.7103 73.1333 26.2603C73.1733 27.147 73.2067 27.8837 73.2333 28.6337L73.2533 29.2803C73.3033 30.9203 73.3233 32.8237 73.33 36.5737L73.3333 39.0603V43.427C73.3415 45.8583 73.316 48.2897 73.2567 50.7203L73.2367 51.367C73.21 52.117 73.1767 52.8537 73.1367 53.7403C72.97 57.2903 72.4033 59.707 71.5833 61.8337C70.7489 64.0596 69.4371 66.0757 67.74 67.7403C66.0732 69.4347 64.0577 70.7462 61.8333 71.5837C59.71 72.407 57.29 72.967 53.7433 73.1337C52.9524 73.1709 52.1613 73.2042 51.37 73.2337L50.7233 73.2537C49.08 73.3003 47.1767 73.3237 43.4267 73.3303L40.94 73.3337H36.5767C34.1442 73.3421 31.7117 73.3165 29.28 73.257L28.6333 73.237C27.842 73.207 27.0509 73.1726 26.26 73.1337C22.7133 72.967 20.2933 72.407 18.1667 71.5837C15.9422 70.7482 13.9274 69.4365 12.2633 67.7403C10.5668 66.0746 9.25407 64.0589 8.41666 61.8337C7.59332 59.7103 7.03332 57.2903 6.86666 53.7403C6.82952 52.9494 6.79619 52.1583 6.76666 51.367L6.74999 50.7203C6.68856 48.2897 6.66078 45.8584 6.66666 43.427V36.5737C6.65735 34.1423 6.6818 31.711 6.73999 29.2803L6.76332 28.6337C6.78999 27.8837 6.82332 27.147 6.86332 26.2603C7.02999 22.7103 7.58999 20.2937 8.41332 18.167C9.25037 15.94 10.5657 13.9237 12.2667 12.2603C13.9303 10.5652 15.9438 9.25362 18.1667 8.41699C20.2933 7.59366 22.71 7.03366 26.26 6.86699C27.1467 6.82699 27.8867 6.79366 28.6333 6.76699L29.28 6.74699C31.7106 6.68777 34.142 6.66221 36.5733 6.67033L43.4267 6.66699ZM40 23.3337C35.5797 23.3337 31.3405 25.0896 28.2149 28.2152C25.0893 31.3408 23.3333 35.5801 23.3333 40.0003C23.3333 44.4206 25.0893 48.6598 28.2149 51.7854C31.3405 54.911 35.5797 56.667 40 56.667C44.4203 56.667 48.6595 54.911 51.7851 51.7854C54.9107 48.6598 56.6667 44.4206 56.6667 40.0003C56.6667 35.5801 54.9107 31.3408 51.7851 28.2152C48.6595 25.0896 44.4203 23.3337 40 23.3337ZM40 30.0003C41.3132 30.0001 42.6136 30.2586 43.827 30.7609C45.0403 31.2632 46.1428 31.9997 47.0715 32.9281C48.0003 33.8565 48.7371 34.9588 49.2398 36.172C49.7426 37.3851 50.0014 38.6854 50.0017 39.9987C50.0019 41.3119 49.7434 42.6123 49.2411 43.8256C48.7387 45.039 48.0023 46.1415 47.0739 47.0702C46.1455 47.999 45.0432 48.7357 43.83 49.2385C42.6169 49.7412 41.3165 50.0001 40.0033 50.0003C37.3512 50.0003 34.8076 48.9468 32.9323 47.0714C31.0569 45.196 30.0033 42.6525 30.0033 40.0003C30.0033 37.3482 31.0569 34.8046 32.9323 32.9293C34.8076 31.0539 37.3512 30.0003 40.0033 30.0003M57.5033 18.3337C56.3983 18.3337 55.3385 18.7726 54.557 19.554C53.7756 20.3354 53.3367 21.3953 53.3367 22.5003C53.3367 23.6054 53.7756 24.6652 54.557 25.4466C55.3385 26.228 56.3983 26.667 57.5033 26.667C58.6084 26.667 59.6682 26.228 60.4496 25.4466C61.231 24.6652 61.67 23.6054 61.67 22.5003C61.67 21.3953 61.231 20.3354 60.4496 19.554C59.6682 18.7726 58.6084 18.3337 57.5033 18.3337Z"
                fill="white"
              />
            </svg>
          </a>
          <a
            href="https://www.threads.net/@kamilnurmatovv"
            className="threat duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="lg:w-[70px] lg:h-[70px] sm:w-[30px] sm:h-[30px] duration-300"
              width="80"
              height="80"
              viewBox="0 0 80 80"
              fill="none"
            >
              <g clip-path="url(#clip0_44_48)">
                <path
                  d="M34.05 46.02C34.05 43.97 35.035 40.71 42.685 40.71C45.03 40.71 46.475 40.88 48.415 41.315C47.795 49.345 43.865 50.405 40.045 50.405C37.955 50.405 34.05 49.315 34.05 46.02Z"
                  fill="#E4A951"
                />
                <path
                  d="M12.95 80H67.05C70.4846 80 73.7784 78.6356 76.207 76.207C78.6356 73.7784 80 70.4846 80 67.05V12.95C80 9.51545 78.6356 6.22156 76.207 3.79297C73.7784 1.36437 70.4846 0 67.05 0L12.95 0C9.51545 0 6.22156 1.36437 3.79297 3.79297C1.36437 6.22156 0 9.51545 0 12.95L0 67.05C0 70.4846 1.36437 73.7784 3.79297 76.207C6.22156 78.6356 9.51545 80 12.95 80ZM29.33 29.55C32.165 25.5 35.905 23.92 41.08 23.92C44.73 23.92 47.835 25.15 50.055 27.475C52.27 29.805 53.535 33.135 53.825 37.39C55.05 37.905 56.185 38.51 57.215 39.205C61.375 42 63.665 46.18 63.665 50.97C63.665 61.155 55.315 70 40.205 70C27.23 70 13.75 62.45 13.75 39.98C13.75 17.63 26.805 10 40.165 10C46.335 10 60.81 10.91 66.25 28.885L61.15 30.205C56.94 17.405 48.115 15.365 40.03 15.365C26.655 15.365 19.095 23.505 19.095 40.83C19.095 56.365 27.545 64.615 40.205 64.615C50.62 64.615 58.385 59.205 58.385 51.28C58.385 45.885 53.855 43.305 53.62 43.305C52.735 47.93 50.365 55.715 39.955 55.715C33.89 55.715 28.655 51.525 28.655 46.035C28.655 38.195 36.095 35.355 41.97 35.355C44.17 35.355 46.82 35.505 48.205 35.785C48.205 33.395 46.185 29.305 41.075 29.305C36.52 29.305 35.275 30.745 33.825 32.425L33.705 32.56C32.695 31.885 29.33 29.55 29.33 29.55Z"
                  fill="#E4A951"
                />
              </g>
              <defs>
                <clipPath id="clip0_44_48">
                  <rect width="80" height="80" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </a>
          <a
            href="https://www.youtube.com/@Kamilnurmatov"
            className="youtube duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="lg:w-[70px] lg:h-[70px] sm:w-[30px] sm:h-[30px] duration-300"
              width="104"
              height="73"
              viewBox="0 0 104 73"
              fill="none"
            >
              <g clip-path="url(#clip0_44_52)">
                <path
                  d="M101.699 11.386C101.103 9.18525 99.9391 7.17892 98.3244 5.56677C96.7097 3.95462 94.7001 2.7929 92.4958 2.1973C84.4259 0 51.9471 0 51.9471 0C51.9471 0 19.4667 0.0665109 11.3968 2.26381C9.19244 2.85945 7.18285 4.02123 5.56813 5.63345C3.95342 7.24568 2.78992 9.25209 2.1935 11.4529C-0.247465 25.7682 -1.19436 47.5814 2.26053 61.3241C2.85701 63.5248 4.02053 65.5311 5.63525 67.1433C7.24996 68.7554 9.25951 69.9171 11.4638 70.5127C19.5337 72.71 52.0133 72.71 52.0133 72.71C52.0133 72.71 84.4925 72.71 92.562 70.5127C94.7664 69.9172 96.7761 68.7555 98.3908 67.1433C100.006 65.5312 101.169 63.5248 101.766 61.3241C104.34 46.9885 105.134 25.1887 101.699 11.386Z"
                  fill="#FF0000"
                />
                <path
                  d="M41.6093 51.9357L68.553 36.355L41.6093 20.7744V51.9357Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_44_52">
                  <rect width="104" height="73" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </a>
          <a href="https://vk.com/kamilnurmatov" className="vk duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="lg:w-[70px] lg:h-[70px] sm:w-[30px] sm:h-[30px] duration-300"
              width="80"
              height="80"
              viewBox="0 0 80 80"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M78.0167 56.217C76.2034 52.5652 73.8139 49.2291 70.94 46.337C69.9788 45.2507 68.9724 44.2054 67.9233 43.2037L67.7967 43.0803C67.4072 42.7032 67.0228 42.3209 66.6433 41.9337C70.5722 36.4696 73.934 30.6193 76.6767 24.4737L76.7867 24.227L76.8633 23.967C77.2267 22.757 77.64 20.457 76.1733 18.377C74.6533 16.2303 72.2233 15.8437 70.5933 15.8437H63.1033C61.535 15.7722 59.9843 16.1986 58.6731 17.062C57.3619 17.9254 56.3574 19.1814 55.8033 20.6503C54.1914 24.4891 52.1732 28.1444 49.7833 31.5537V22.777C49.7833 21.6437 49.6767 19.7437 48.46 18.1437C47.0067 16.2237 44.9033 15.8437 43.4433 15.8437H31.5567C30.0056 15.808 28.5002 16.3702 27.3522 17.4139C26.2043 18.4576 25.5017 19.9029 25.39 21.4503L25.38 21.6003V21.7503C25.38 23.367 26.02 24.5603 26.5333 25.3103C26.7633 25.647 27.0067 25.9537 27.1633 26.147L27.1967 26.1903C27.3633 26.397 27.4733 26.5337 27.5833 26.687C27.8767 27.0803 28.2933 27.6937 28.4133 29.2737V34.1837C26.0273 30.1881 24.0708 25.9511 22.5767 21.5437L22.55 21.4703L22.5233 21.4003C22.1167 20.337 21.4667 18.7903 20.1633 17.6103C18.6433 16.227 16.8433 15.8437 15.2067 15.8437H7.60668C5.95001 15.8437 3.95334 16.2303 2.46334 17.8003C1.00001 19.347 0.833344 21.2003 0.833344 22.1803V22.627L0.926677 23.0603C3.03101 32.8296 7.36746 41.9794 13.5967 49.7937C16.4446 54.2847 20.311 58.0412 24.8822 60.7586C29.4534 63.4759 34.6007 65.0776 39.9067 65.4337L40.0433 65.4437H40.1833C42.6033 65.4437 45.1267 65.2337 47.0233 63.9703C49.58 62.2637 49.7833 59.647 49.7833 58.3403V54.547C50.44 55.0803 51.2533 55.7937 52.25 56.7537C53.4567 57.9603 54.4167 59.007 55.24 59.9203L55.68 60.407C56.32 61.1203 56.95 61.8237 57.5233 62.4003C58.2433 63.1237 59.1333 63.9203 60.2467 64.5103C61.4567 65.147 62.7267 65.437 64.0733 65.437H71.6767C73.28 65.437 75.5767 65.057 77.1933 63.1837C78.9533 61.1437 78.82 58.6403 78.2667 56.8437L78.1667 56.5203L78.0167 56.217ZM58.95 56.5703C57.9169 55.4155 56.8532 54.2884 55.76 53.1903L55.75 53.1803C51.2267 48.8203 49.1167 48.0637 47.6233 48.0637C46.8267 48.0637 45.95 48.1503 45.38 48.8637C45.1234 49.2039 44.955 49.6025 44.89 50.0237C44.8097 50.5127 44.774 51.0081 44.7833 51.5037V58.3403C44.7833 59.1903 44.6433 59.547 44.25 59.807C43.7267 60.157 42.61 60.4403 40.2133 60.4403C35.6607 60.1305 31.2466 58.7447 27.3339 56.3966C23.4213 54.0485 20.1217 50.8053 17.7067 46.9337L17.68 46.8903L17.6467 46.8503C11.8437 39.6275 7.79949 31.1545 5.83334 22.1003C5.84668 21.667 5.94001 21.4037 6.09334 21.2437C6.25001 21.077 6.63334 20.8437 7.60668 20.8437H15.2067C16.05 20.8437 16.49 21.0303 16.8067 21.3137C17.16 21.6403 17.4733 22.1903 17.8467 23.1703C19.7133 28.657 22.2333 33.7903 24.6233 37.5637C25.8167 39.447 26.99 41.017 28.05 42.127C28.58 42.6803 29.0967 43.1403 29.5933 43.467C30.07 43.7803 30.6133 44.0303 31.1733 44.0303C31.4667 44.0303 31.81 43.997 32.14 43.8537C32.4964 43.6962 32.7898 43.424 32.9733 43.0803C33.3167 42.4537 33.4133 41.5303 33.4133 40.3203V29.077C33.2367 26.3503 32.4133 24.8137 31.6133 23.7237C31.4513 23.5056 31.2846 23.2911 31.1133 23.0803L31.07 23.027C30.9279 22.8543 30.7922 22.6764 30.6633 22.4937C30.4993 22.2898 30.4005 22.0412 30.38 21.7803C30.4062 21.5154 30.5326 21.2706 30.7333 21.0958C30.9341 20.9211 31.1941 20.8297 31.46 20.8403H43.4433C44.13 20.8403 44.36 21.007 44.4767 21.1637C44.6433 21.3803 44.7833 21.8303 44.7833 22.777V37.8703C44.7833 39.6637 45.61 40.877 46.81 40.877C48.19 40.877 49.1867 40.0403 50.9267 38.3003L50.9567 38.267L50.9833 38.237C54.8866 33.4779 58.0756 28.1756 60.45 22.497L60.4633 22.457C60.6418 21.9553 60.9794 21.5257 61.4248 21.2338C61.8701 20.9419 62.3988 20.8037 62.93 20.8403H70.5967C71.6367 20.8403 71.9767 21.107 72.09 21.2637C72.2067 21.4303 72.29 21.787 72.09 22.487C69.352 28.6082 65.9672 34.419 61.9933 39.8203L61.9667 39.8603C61.5833 40.4503 61.16 41.1037 61.1 41.8503C61.0333 42.657 61.38 43.387 61.99 44.1737C62.4333 44.827 63.35 45.7237 64.28 46.6337L64.3667 46.7203C65.34 47.6737 66.3967 48.707 67.2433 49.707L67.2667 49.7303L67.29 49.757C69.8147 52.2753 71.9142 55.1864 73.5067 58.377C73.76 59.2437 73.6067 59.6903 73.4067 59.9203C73.1767 60.187 72.66 60.437 71.68 60.437H64.0733C63.5549 60.4496 63.0419 60.3291 62.5833 60.087C62.0213 59.7601 61.5113 59.3511 61.07 58.8737C60.5933 58.397 60.0767 57.8203 59.4433 57.117L58.95 56.5703Z"
                fill="#E4A951"
              />
            </svg>
          </a>
          <a
            href="https://www.facebook.com/people/%D0%9A%D0%B0%D0%BC%D0%B8%D0%BB%D1%8C-%D0%9D%D1%83%D1%80%D0%BC%D0%B0%D1%82%D0%BE%D0%B2/pfbid02BqLuynTKuqyMD8VaykEBcXmAruBf6jVFkNzq5JwfRiZg3qT15oqFup35Ybux5hdUl/?mibextid=ZbWKwL"
            className="facebook duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="lg:w-[70px] lg:h-[70px] sm:w-[30px] sm:h-[30px] duration-300"
              width="80"
              height="80"
              viewBox="0 0 80 80"
              fill="none"
            >
              <path
                d="M73.3333 40.0003C73.3333 21.6003 58.4 6.66699 40 6.66699C21.6 6.66699 6.66666 21.6003 6.66666 40.0003C6.66666 56.1337 18.1333 69.567 33.3333 72.667V50.0003H26.6667V40.0003H33.3333V31.667C33.3333 25.2337 38.5667 20.0003 45 20.0003H53.3333V30.0003H46.6667C44.8333 30.0003 43.3333 31.5003 43.3333 33.3337V40.0003H53.3333V50.0003H43.3333V73.167C60.1667 71.5003 73.3333 57.3003 73.3333 40.0003Z"
                fill="#E4A951"
              />
            </svg>
          </a>
          <a href="https://t.me/Kamilrecords" className="telegram duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="lg:w-[70px] lg:h-[70px] sm:w-[30px] sm:h-[30px] rounded-full duration-300"
              width="69"
              height="69"
              viewBox="0 0 69 69"
              fill="none"
            >
              <rect width="69" height="69" fill="white" />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1.23215 34.5003C1.23215 30.1315 2.09265 25.8055 3.76451 21.7692C5.43638 17.733 7.88687 14.0656 10.9761 10.9764C14.0653 7.88715 17.7327 5.43665 21.7689 3.76479C25.8052 2.09292 30.1312 1.23242 34.5 1.23242C38.8688 1.23242 43.1948 2.09292 47.2311 3.76479C51.2673 5.43665 54.9347 7.88715 58.0239 10.9764C61.1131 14.0656 63.5636 17.733 65.2355 21.7692C66.9074 25.8055 67.7679 30.1315 67.7679 34.5003C67.7679 43.3235 64.2629 51.7853 58.0239 58.0242C51.785 64.2631 43.3232 67.7681 34.5 67.7681C25.6768 67.7681 17.215 64.2631 10.9761 58.0242C4.73714 51.7853 1.23215 43.3235 1.23215 34.5003ZM45.5991 54.53L50.7495 15.4366L10.5077 34.8305L22.4201 39.1479L35.6582 28.9162C35.9145 28.7185 36.2073 28.5732 36.5197 28.4886C36.8322 28.404 37.1582 28.3818 37.4793 28.4232C37.8003 28.4646 38.1101 28.5688 38.3908 28.73C38.6716 28.8911 38.9179 29.1059 39.1156 29.3622C39.3133 29.6185 39.4586 29.9113 39.5432 30.2237C39.6278 30.5362 39.6501 30.8623 39.6086 31.1833C39.5672 31.5044 39.463 31.8141 39.3018 32.0949C39.1407 32.3756 38.9259 32.6219 38.6696 32.8196L27.6887 41.3017V54.737L35.9934 46.8316L45.5991 54.53Z"
                fill="#E4A951"
              />
            </svg>
          </a>
          <a
            href="https://www.tiktok.com/explore"
            className="tiktok duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="lg:w-[70px] lg:h-[70px] sm:w-[30px] sm:h-[30px] duration-300"
              width="73"
              height="73"
              viewBox="0 0 73 73"
              fill="none"
            >
              <path
                d="M50.4917 17.7025C48.4125 15.3289 47.2666 12.2805 47.2675 9.125H37.8688V46.8417C37.7963 48.8827 36.9346 50.816 35.4651 52.2344C33.9957 53.6527 32.0332 54.4455 29.9908 54.4458C25.6717 54.4458 22.0825 50.9175 22.0825 46.5375C22.0825 41.3058 27.1317 37.3821 32.3329 38.9942V29.3825C21.8392 27.9833 12.6533 36.135 12.6533 46.5375C12.6533 56.6663 21.0483 63.875 29.9604 63.875C39.5113 63.875 47.2675 56.1188 47.2675 46.5375V27.4054C51.0787 30.1425 55.6545 31.611 60.3467 31.6029V22.2042C60.3467 22.2042 54.6283 22.4779 50.4917 17.7025Z"
                fill="#E4A951"
              />
            </svg>
          </a>
          <a
            href="https://twitter.com/Kamilnurmatovv?t=VonsgWwws1RVV8Yh7sEKUw&s=09"
            className="twitter duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="lg:w-[70px] lg:h-[70px] sm:w-[30px] sm:h-[30px] duration-300"
              width="58"
              height="58"
              viewBox="0 0 58 58"
              fill="none"
            >
              <g clip-path="url(#clip0_44_63)">
                <path
                  d="M34.3994 24.5594L55.5268 0H50.5198L32.1755 21.3241L17.5232 0H0.623497L22.7804 32.2462L0.623497 58H5.63053L25.0034 35.481L40.4767 58H57.3765L34.3981 24.5594H34.3994ZM27.5418 32.5298L25.2966 29.319L7.43442 3.76909H15.1249L29.5392 24.389L31.784 27.5998L50.5221 54.4022H42.8325L27.5418 32.5312V32.5298Z"
                  fill="#E4A951"
                />
              </g>
              <defs>
                <clipPath id="clip0_44_63">
                  <rect width="58" height="58" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </a>
          <a
            href="https://ok.ru/profile/593356231482?utm_campaign=android_share&utm_content=profile"
            className="ok duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="lg:w-[70px] lg:h-[70px] sm:w-[30px] sm:h-[30px] duration-300"
              width="80"
              height="80"
              viewBox="0 0 80 80"
              fill="none"
            >
              <path
                d="M39.9533 41.137C30.5367 41.137 22.71 33.317 22.71 24.0637C22.71 14.4903 30.5367 6.66699 39.9567 6.66699C49.6967 6.66699 57.2 14.487 57.2 24.0637C57.1832 28.6072 55.3631 32.9581 52.1398 36.1602C48.9164 39.3623 44.5535 41.1536 40.01 41.1403L39.9533 41.137ZM39.9533 16.7237C35.9667 16.7237 32.9333 20.0737 32.9333 24.067C32.9333 28.0537 35.9667 31.087 39.9567 31.087C44.1067 31.087 46.98 28.0537 46.98 24.067C46.9833 20.0703 44.1067 16.7237 39.9533 16.7237ZM46.82 55.3437L56.5633 64.7603C58.48 66.8303 58.48 69.8637 56.5633 71.7803C54.49 73.8503 51.2933 73.8503 49.6967 71.7803L39.9567 62.2037L30.5367 71.7803C29.58 72.737 28.3 73.2137 26.86 73.2137C25.7433 73.2137 24.4667 72.7337 23.3467 71.7803C21.43 69.8637 21.43 66.8303 23.3467 64.757L33.2467 55.3403C29.6714 54.2816 26.2418 52.7823 23.0367 50.877C20.64 49.6003 20.1633 46.4103 21.44 44.0137C23.0367 41.6203 25.91 40.9837 28.4667 42.5803C31.9287 44.693 35.9059 45.8108 39.9617 45.8108C44.0174 45.8108 47.9947 44.693 51.4567 42.5803C54.0133 40.9837 57.0433 41.6203 58.48 44.0137C59.92 46.4103 59.2767 49.597 57.04 50.877C54.01 52.7937 50.4967 54.2303 46.8233 55.347L46.82 55.3437Z"
                fill="#E4A951"
              />
            </svg>
          </a>
          <a
            href="https://links.freshtunes.com/Oj8OM"
            className="badlink duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="lg:w-[70px] lg:h-[70px] sm:w-[30px] sm:h-[30px] duration-300"
              width="80"
              height="80"
              viewBox="0 0 80 80"
              fill="none"
            >
              <path
                d="M27 46.5V14C27 12.2761 26.3152 10.6228 25.0962 9.40381C23.8772 8.18482 22.2239 7.5 20.5 7.5C18.7761 7.5 17.1228 8.18482 15.9038 9.40381C14.6848 10.6228 14 12.2761 14 14V46.5"
                stroke="#E4A951"
                stroke-width="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M27 23.9779C31.9571 21.1155 37.7201 19.9687 43.3954 20.7154C49.0707 21.4621 54.341 24.0606 58.3889 28.1078C62.4368 32.1551 65.0362 37.4249 65.7839 43.1001C66.5316 48.7752 65.3857 54.5385 62.5241 59.496C59.6625 64.4536 55.245 68.3284 49.9568 70.5195C44.6686 72.7106 38.8052 73.0955 33.2759 71.6145C27.7466 70.1336 22.8605 66.8696 19.3753 62.3287C15.8901 57.7878 14.0007 52.2238 14 46.4996"
                stroke="#E4A951"
                stroke-width="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M27 31.9667C30.3279 28.9901 34.5766 27.2457 39.036 27.025C43.4954 26.8042 47.8956 28.1205 51.5012 30.7539C55.1068 33.3874 57.6995 37.1784 58.8461 41.4935C59.9926 45.8087 59.6237 50.3866 57.8008 54.4625C55.9779 58.5383 52.8115 61.8651 48.8306 63.887C44.8498 65.909 40.2956 66.5036 35.9291 65.5714C31.5626 64.6393 27.6482 62.237 24.84 58.7658C22.0317 55.2947 20.4997 50.9649 20.5 46.5V14"
                stroke="#E4A951"
                stroke-width="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M40 59.5C47.1797 59.5 53 53.6797 53 46.5C53 39.3203 47.1797 33.5 40 33.5C32.8203 33.5 27 39.3203 27 46.5C27 53.6797 32.8203 59.5 40 59.5Z"
                stroke="#E4A951"
                stroke-width="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
