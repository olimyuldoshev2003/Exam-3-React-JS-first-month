/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import Switcher from "./components/Switch UI/Switcher";
import "./App.css";
import { useTranslation } from "react-i18next";
import axios from "axios";

//For Icons
import AddCircleIcon from "@mui/icons-material/AddCircle";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button, IconButton } from "@mui/material";
import NavbarIcon from "./components/NavbarIcon/NavbarIcon";

//For images
import bigImg1S1 from "./assets/Rectangle.png";
import bigImg2S1 from "./assets/Rectangle (1).png";
import bigImgS2 from "./assets/Rectangle (2).png";
import img2S2 from "./assets/Rectangle (3).png";
import img1S3 from "./assets/Rectangle (10).png";
import img2S3 from "./assets/Rectangle (11).png";
import img3S3 from "./assets/Rectangle (12).png";
import img1S6 from "./assets/Rectangle (13).png";
import imgS7 from "./assets/Rectangle (14).png";
import imgOfUserS8 from "./assets/Rectangle (16).png";

//For components
import ButtonRequest from "./components/ButtonRequest/ButtonRequest";
import ButtonMore from "./components/ButtonMore/ButtonMore";
import CardS1 from "./components/CardS1/CardS1";

//For Images of components
import iconCard1S1 from "./assets/Frame (5).png";
import iconCard2S1 from "./assets/Frame (6).png";
import iconCard3S1 from "./assets/Frame (7).png";
import iconCard1S5 from "./assets/Frame (10).png";
import iconCard2S5 from "./assets/Frame (12).png";
import iconCard3S5 from "./assets/Frame (14).png";

import iconCard1S6 from "./assets/Frame (15).png";
import iconCard2S6 from "./assets/Key suppliers engaged.png";
import iconCard3S6 from "./assets/100-percent-Compliance.png";

import iconCard1S8 from "./assets/Frame (16).png";
import iconCard2S8 from "./assets/Great potential 1.png";
import iconCard3S8 from "./assets/Frame (17).png";
import iconCard4S8 from "./assets/Frame (18).png";

//For Swiper
import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

import "./styles.css";
import "./styles2.css";

//For Swiper Images
import img1S2ForSwiper from "./assets/Rectangle (4).png";
import img2S2ForSwiper from "./assets/Rectangle (5).png";
import img3aS2ForSwiper from "./assets/Rectangle (6).png";
import img3bS2ForSwiper from "./assets/Rectangle (7).png";
import img4S2ForSwiper from "./assets/Rectangle (8).png";
import img5S2ForSwiper from "./assets/Rectangle (9).png";
import img1S8ForSwiper from "./assets/Rectangle (17).png";
import img2S8ForSwiper from "./assets/Rectangle (18).png";
import img3S8ForSwiper from "./assets/Rectangle (20).png";
import img4S8ForSwiper from "./assets/Rectangle (21).png";

//For Add Modal
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import CardS5 from "./components/CardS5/CardS5";
import ButtonRequestDarkMode from "./components/ButtonRequestDarkMode/ButtonRequestDarkMode";
import ButtonMoreDarkMode from "./components/ButtonMoreDarkMode/ButtonMoreDarkMode";
import CardS6 from "./components/CardS6/CardS6";
import CardS8 from "./components/CardS8/CardS8";
import SecondButtonMore from "./components/SecondButtonMore/SecondButtonMore";

//For AOS animation
import AOS from "aos";
import "aos/dist/aos.css";
// import { useEffect } from "react";

//For animate.css
// import "animate.css";

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const API = "http://localhost:3000/data";

  //Use states for saving the value of the tags
  const [toDo, setToDo] = useState([]);
  const [openAddModal, setOpenAddModal] = useState(false);
  const [addImg, setAddImg] = useState("");
  const [addTitle, setAddTitle] = useState("");
  const [addDesc, setAddDesc] = useState("");

  const [editImg, setEditImg] = useState("");
  const [editTitle, setEditTitle] = useState("");
  const [editDesc, setEditDesc] = useState("");
  const [editId, setEditId] = useState("");
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [deleteId, setDeleteId] = useState("");

  const openAddModalFunc = () => setOpenAddModal(true);
  const handleCloseAdd = () => setOpenAddModal(false);

  const handleCloseEdit = () => setOpenEditModal(false);

  const handleCloseDelete = () => setOpenDeleteModal(false);

  //For AOS animation
  useEffect(() => {
    AOS.init();
  }, []);

  async function getData() {
    try {
      const { data } = await axios.get(API);
      setToDo(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  async function postData(newUser) {
    try {
      const { data } = await axios.post(API, newUser);
      getData(data);
    } catch (error) {
      console.log(error);
    }
  }

  async function putData(editUser, id) {
    try {
      const { data } = await axios.put(`${API}/${id}`, editUser);
      getData(data);
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteData(id) {
    try {
      const { data } = await axios.delete(`${API}/${id}`);
      getData(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  function addInfo(event) {
    if (
      addImg.trim().length === 0 &&
      addTitle.trim().length === 0 &&
      addDesc.trim.length === 0
    ) {
      event.preventDefault();
      alert("Please fill it up");
    } else {
      event.preventDefault();
      let newObj = {
        title: addTitle,
        description: addDesc,
        image: addImg,
      };
      postData(newObj);
      setAddImg("");
      setAddTitle("");
      setAddDesc("");
      setOpenAddModal(false);
    }
  }

  function openEditModalFunc(item) {
    setEditId(item.id);
    setEditImg(item.image);
    setEditTitle(item.title);
    setEditDesc(item.description);
    setOpenEditModal(true);
  }

  function editInfo(event) {
    if (
      editImg.trim().length === 0 &&
      editTitle.trim().length === 0 &&
      editDesc.trim().length === 0
    ) {
      event.preventDefault();
      alert("Please fill all of texts");
    } else {
      event.preventDefault();
      let newObj = {
        title: editTitle,
        description: editDesc,
        image: editImg,
      };
      putData(newObj, editId);
      setEditImg("");
      setEditTitle("");
      setEditDesc("");
      setOpenEditModal(false);
    }
  }

  function openDeleteModalFunc(id) {
    setDeleteId(id);
    setOpenDeleteModal(true);
  }

  function deleteUser() {
    deleteData(deleteId);
    setOpenDeleteModal(false);
  }

  return (
    <>
      <div
        className=" bg-white dark:bg-black overflow-hidden
    "
      >
        {/* <h1>{t("text")}</h1> */}

        <header className="header" data-aos="fade-up">
          <div className="container">
            <nav className="container_block header_block flex justify-between items-center">
              <div className="item_1_h flex items-center text-[#212B31] text-[22px] font-[400] uppercase">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="44"
                  viewBox="0 0 30 44"
                  fill="none"
                >
                  <path
                    d="M14.6667 2.068L1.37867 22L14.6667 41.932L27.9547 22L14.6667 2.068ZM14.6667 0L29.3333 22L14.6667 44L3.8147e-06 22L14.6667 0Z"
                    fill="#FFC22D"
                  />
                  <path
                    d="M10.6773 16.852L9.36711 18.612L8.81955 24.1853V18.0547L10.6773 16.852Z"
                    fill="#FFC22D"
                  />
                  <path
                    d="M14.1191 11.484L12.4178 13.2733L11.8409 15.9867V13.3613L13.1511 12.2467V12.3053L14.1191 11.484Z"
                    fill="#FFC22D"
                  />
                  <path
                    d="M6.40445 24.1853H8.81956L6.60978 24.596L5.67111 26.4L6.40445 24.1853Z"
                    fill="#FFC22D"
                  />
                  <path
                    d="M12.8089 15.356V13.7427L14.6667 12.3053V14.1093L12.8089 15.356Z"
                    fill="#FFC22D"
                  />
                  <path
                    d="M13.5618 26.2533H12.9849V24.4347L13.5618 24.376V26.2533Z"
                    fill="#FFC22D"
                  />
                  <path
                    d="M13.5618 22.308L12.9849 22.44V20.6213L13.5618 20.416V22.308Z"
                    fill="#FFC22D"
                  />
                  <path
                    d="M13.5618 18.612L12.9849 18.876V17.0427L13.5618 16.72V18.612Z"
                    fill="#FFC22D"
                  />
                  <path
                    d="M11.88 26.2533H11.4107V24.6107L11.88 24.552V26.2533Z"
                    fill="#FFC22D"
                  />
                  <path
                    d="M11.88 22.704L11.4107 22.8067V21.164L11.88 21.0027V22.704Z"
                    fill="#FFC22D"
                  />
                  <path
                    d="M11.88 19.3747L11.4107 19.58V17.9373L11.88 17.6733V19.3747Z"
                    fill="#FFC22D"
                  />
                  <path
                    d="M10.4329 26.2533H10.0418V24.7573L10.4329 24.7133V26.2533Z"
                    fill="#FFC22D"
                  />
                  <path
                    d="M10.4329 23.0413L10.0418 23.1293V21.6333L10.4329 21.5013V23.0413Z"
                    fill="#FFC22D"
                  />
                  <path
                    d="M10.4329 20.02L10.0418 20.196V18.7L10.4329 18.48V20.02Z"
                    fill="#FFC22D"
                  />
                  <path
                    d="M14.1191 11.484L14.6667 10.956L13.1511 12.2467V9.97333L14.6667 7.77333L16.1822 9.97333V12.2467L17.4925 13.3613V16.0013L20.5236 18.04V24.1707H22.9289L23.6622 26.4H20.5333H14.6667V14.2413V14.1093L16.5244 15.356V13.7427L14.6667 12.3053V11.0293L14.1191 11.484ZM14.1876 10.34L13.728 10.7653V11.6453L14.1876 11.2493V10.34ZM16.3484 17.0427L15.7618 16.72V18.612L16.3484 18.876V17.0427ZM16.3484 20.6213L15.7618 20.416V22.308L16.3484 22.44V20.6213ZM16.3484 24.4347L15.7618 24.376V26.2533H16.3484V24.4347ZM18.9005 26.2533H19.2916V24.7573L18.9005 24.7133V26.2533ZM18.9005 23.0413L19.2916 23.1293V21.6333L18.9005 21.5013V23.0413ZM18.9005 20.02L19.2916 20.196V18.7L18.9005 18.48V20.02ZM17.4533 26.2533H17.9325V24.6107L17.4533 24.552V26.2533ZM17.4533 22.704L17.9325 22.8213V21.1787L17.4533 21.0173V22.704ZM17.4533 19.3747L17.9325 19.5947V17.952L17.4533 17.688V19.3747ZM15.0676 11.264L15.5271 11.66V10.78L15.0676 10.3547V11.264Z"
                    fill="#FFC22D"
                  />
                  <path
                    d="M14.1191 11.484L13.1511 12.3053V12.2467L14.6667 10.9707L14.1191 11.484Z"
                    fill="#FFC22D"
                  />
                  <path
                    d="M25.4711 26.3267L3.91111 26.4L14.6667 42.5333L25.4711 26.3267Z"
                    fill="#FFC22D"
                  />
                </svg>
                <h1 className="ml-[5px] text-[#272727] dark:text-white text-[20px] md:text-[13px]">
                  {t("textLogo")}
                </h1>
              </div>
              <div
                className="item_2_h flex justify-between items-center gap-[0_10px] sm:gap-[0_0px]"
                data-aos="fade-down"
              >
                <nav className="navbar">
                  <ul className="flex justify-between items-center gap-[0_10px] text-[#72787D] text-[11px] font-[400] dark:text-[white] uppercase lg:hidden pl-[10px]">
                    <li className="hover:hover:text-[#036FC7] hover:scale-[1.05]"><a href="">{t("navbartext1")}</a></li>
                    <li className="hover:hover:text-[#036FC7] hover:scale-[1.05]"><a href="">{t("navbartext2")}</a></li>
                    <li className="hover:hover:text-[#036FC7] hover:scale-[1.05]"><a href="">{t("navbartext3")}</a></li>
                    <li className="hover:hover:text-[#036FC7] hover:scale-[1.05]"><a href="">{t("navbartext4")}</a></li>
                    <li className="hover:hover:text-[#036FC7] hover:scale-[1.05]"><a href="">{t("navbartext5")}</a></li>
                    <li className="hover:hover:text-[#036FC7] hover:scale-[1.05]"><a href="">{t("navbartext6")}</a></li>
                    <li className="hover:hover:text-[#036FC7] hover:scale-[1.05]"><a href="">{t("navbartext7")}</a></li>
                  </ul>
                </nav>
                <div
                  className="func_icons_and_btn flex justify-between items-center gap-[0_10px]"
                  data-aos="fade-right"
                >
                  <ButtonRequest
                    btnRequestClass={`p-[9px_20px] text-[15px] md:hidden`}
                  ></ButtonRequest>
                  <select
                    onChange={(event) => changeLanguage(event.target.value)}
                    name=""
                    id=""
                    className="outline-none sm:hidden text-[15px] text-[#272727] dark:text-[white] dark:border-[1px] dark:bg-[black] dark:border-[white]"
                  >
                    <option value="">Lang</option>
                    <option value="en">En</option>
                    <option value="ru">Ru</option>
                    <option value="tj">Tj</option>
                  </select>

                  <div className="block_dark_mode sm:hidden">
                    <Switcher />
                  </div>
                  <div className="icon_nav_mobile_tablet lg:block hidden">
                    <NavbarIcon></NavbarIcon>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </header>
        <section className="section_1">
          <div className="container">
            <div
              className="container_block section_1_block"
              data-aos="fade-left"
            >
              <div className="flex_txt_btn flex justify-center">
                <h1 className="text-[#212B31] text-[48px] font-[400] text-center w-[750px] md:w-[100%] md:text-[27px] dark:text-white">
                  {t("firstTextS1")}
                </h1>
              </div>
              <div
                className="flex_btns flex justify-center items-center gap-[0_20px] mt-[30px] sm:flex-col sm:gap-[20px_0]"
                data-aos="fade-right"
              >
                <ButtonRequest
                  btnRequestClass={`p-[13px_25px] text-[17px]`}
                ></ButtonRequest>
                <ButtonMore
                  btnMoreClass={`p-[13px_25px] text-[17px]`}
                ></ButtonMore>
              </div>
              <div className="flex_img flex flex-col justify-center items-center">
                <img
                  src={bigImg1S1}
                  alt=""
                  className="mt-[30px] dark:bg-[#0e0d0d]"
                />
                <img
                  src={bigImg2S1}
                  alt=""
                  className="mt-[10px] dark:bg-[#0e0d0d]"
                />
              </div>
              <div
                className="cards_s_2 flex justify-between items-center md:flex-wrap md:justify-center md:gap-[20px_0] mt-[140px]"
                data-aos="fade-up-right"
              >
                <CardS1
                  imgSrcS1={iconCard1S1}
                  textH3S1={t("textTraH3Card1")}
                  textPS1={t("textTraPCard1")}
                ></CardS1>
                <CardS1
                  imgSrcS1={iconCard2S1}
                  textH3S1={t("textTraH3Card2")}
                  textPS1={t("textTraPCard2")}
                ></CardS1>
                <CardS1
                  imgSrcS1={iconCard3S1}
                  textH3S1={t("textTraH3Card3")}
                  textPS1={t("textTraPCard3")}
                ></CardS1>
              </div>
            </div>
          </div>
        </section>
        <section className="section_2">
          <div className="container">
            <div
              className="container_block section_2_block mt-[100px]"
              data-aos="fade-up-down"
            >
              <h1 className="text-center text-[#212B31] text-[32px] font-[400] dark:text-white">
                {t("firstTextS2")}
              </h1>
              <div
                className="flex_p_and_img_s_2 flex flex-col justify-center items-center"
                data-aos="fade-down-right"
              >
                <p className="text-center text-[#72787D] text-[20px] font-[400] w-[1015px] lg:w-[100%] mt-[10px] dark:text-white">
                  {t("secondTextS2")}
                </p>
                <img
                  src={bigImgS2}
                  alt=""
                  className="mt-[50px] dark:bg-[#0e0d0d]"
                />
                <h1 className="mt-[120px] text-[#212B31] text-[32px] font-[400] w-[750px] text-center md:w-[100%] md:text-[23px] dark:text-white">
                  {t("thirdTextS2")}
                </h1>
              </div>
              <div className="block_2_s_2 mt-[50px] flex justify-between items-center lg:flex-wrap lg:justify-center lg:gap-[20px_0]">
                <div>
                  <h1 className="text-[#212B31] text-[32px] font-[400] w-[449px] md:w-[100%] text-center dark:text-white sm:text-[23px]">
                    {t("fourthTextS2")}
                  </h1>
                  <p className="text-[#72787D] text-[20px] font-[400] mt-[10px] w-[542px] md:w-[100%] text-center dark:text-white sm:text-[18px]">
                    {t("fifthTextS2")}
                  </p>
                  <p className="mt-[10px] text-[#212B31] text-[20px] font-[400] text-center sm:text-[18px] dark:text-white">
                    {t("sixthTextS2")}
                  </p>
                </div>
                <div>
                  <img
                    src={img2S2}
                    alt=""
                    className="mt-[50px] dark:bg-[#0e0d0d]"
                  />
                </div>
              </div>
              <div className="swiper_s_2 mt-[30px]" data-aos="flip-left">
                <Swiper
                  pagination={{
                    type: "fraction",
                  }}
                  navigation={true}
                  loop={true}
                  modules={[Pagination, Navigation]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <img
                      src={img1S2ForSwiper}
                      alt=""
                      className="dark:bg-black"
                    />
                  </SwiperSlide>
                  <SwiperSlide className="dark:bg-black">
                    <img src={img2S2ForSwiper} alt="" />
                  </SwiperSlide>
                  <SwiperSlide className="dark:bg-black">
                    <div className="block_for_third_swiper_s_2 dark:bg-black">
                      <img src={img3aS2ForSwiper} alt="" />
                      <img src={img3bS2ForSwiper} alt="" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="dark:bg-black">
                    <img src={img4S2ForSwiper} alt="" />
                  </SwiperSlide>
                  <SwiperSlide className="dark:bg-black">
                    <img src={img5S2ForSwiper} alt="" />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </section>
        <section className="section_3">
          <div className="container">
            <div className="container_block section_3_block mt-[50px]">
              <h1
                className="text-center text-[#212B31] text-[32px] font-[400] dark:text-white"
                data-aos="flip-right"
              >
                {t("firstTextS3")}
              </h1>
              <div
                className="flex_for_p flex justify-center"
                data-aos="flip-up"
              >
                <p className="text-center mt-[10px] text-[#72787D] text-[20px] font-[400] w-[750px] md:w-[100%] dark:text-white">
                  {t("secondTextS3")}
                </p>
              </div>
              <div
                className="block_1_s_3 flex justify-between items-center md:flex-wrap md:justify-center mt-[50px]"
                data-aos="flip-down"
              >
                <div className="block_texts">
                  <h4 className="text-[#212B31] text-center text-[18px] font-[400] dark:text-white">
                    {t("thirdTextS3")}
                  </h4>
                  <p className="text-[#72787D] text-[16px] font-[400] mt-[20px] w-[310px] sm:w-[100%] dark:text-white">
                    {t("fourthTextS3")}
                  </p>
                </div>
                <div className="block_img md:mt-[20px]">
                  <img src={img1S3} alt="" className="dark:bg-[#0e0d0d]" />
                </div>
              </div>
              <div
                className="block_2_s_3 flex justify-between items-center md:flex-wrap md:justify-center mt-[50px]"
                data-aos="zoom-in"
              >
                <div className="img">
                  <img src={img2S3} alt="" className="dark:bg-[#0e0d0d]" />
                </div>
                <div className="texts">
                  <h4 className="text-[#212B31] text-center text-[18px] font-[400] dark:text-white mt-[30px]">
                    {t("fifthTextS3")}
                  </h4>
                  <p className="text-[#72787D] text-[16px] font-[400] mt-[20px] w-[310px] sm:w-[100%] dark:text-white">
                    {t("sixthTextS3")}
                  </p>
                </div>
              </div>
              <div
                className="block_1_s_3 flex justify-between items-center md:flex-wrap md:justify-center mt-[50px]"
                data-aos="zoom-out"
              >
                <div className="block_texts">
                  <h4 className="text-[#212B31] text-center text-[18px] font-[400] dark:text-white">
                    {t("seventhTextS3")}
                  </h4>
                  <p className="text-[#72787D] text-[16px] font-[400] mt-[20px] w-[310px] sm:w-[100%] dark:text-white">
                    {t("eigthTextS3")}
                  </p>
                </div>
                <div className="block_img md:mt-[20px]" data-aos="zoom-in-up">
                  <img src={img3S3} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section_4">
          <div className="container">
            <div className="container_block section_4_block mt-[50px]">
              <h1
                className="text-center text-[#212B31] text-[32px] font-[400] dark:text-white"
                data-aos="zoom-in-down"
              >
                {t("firstTextS4")}
              </h1>
              <div
                className="flex_for_p flex justify-center"
                data-aos="fade-up"
              >
                <p className="text-center mt-[10px] text-[#72787D] text-[20px] font-[400] w-[750px] md:w-[100%] dark:text-white">
                  {t("secondTextS4")}
                </p>
              </div>
              <div className="section_4_to_do mt-[60px]" data-aos="zoom-out">
                <Button
                  variant="contained"
                  onClick={() => openAddModalFunc()}
                  sx={{ border: `2px solid blue` }}
                  className="dark:bg-[black] dark:text-[white]  dark:border-[1px] dark:border-[#ffffff]"
                >
                  {t("addUserBtn")}
                  <AddCircleIcon className="ml-[20px]"></AddCircleIcon>
                </Button>
                <div className="wrap_the_to_do flex flex-wrap gap-[50px] md:gap-[10px] md:items-center md:justify-center mt-[60px]">
                  {toDo.map((item) => {
                    return (
                      <>
                        <div
                          key={item.id}
                          data-aos="flip-down"
                          className="blocks mt-[20px] p-[10px_10px] border-[1px] rounded-[10px] border-[black] w-[330px] sm:w-[100%] dark:border-[white]"
                        >
                          <div className="flex_items_of_users flex items-start gap-[0_20px] sm:flex-col">
                            <img
                              src={item.image}
                              alt=""
                              className="w-[40px] h-[40px] rounded-[50%]"
                            />
                            <div className="items mt-[10px]">
                              <h1 className="text-[#212B31] text-[18px] font-[400] dark:text-[white]">
                                {item.title}
                              </h1>
                              <p className="text-[#72787D] text-[16px] font-[400] w-[100%] dark:text-white">
                                {item.description}
                              </p>
                            </div>
                          </div>
                          <div className="functonal_btns mt-[10px]">
                            <Button
                              variant="contained"
                              onClick={() => openEditModalFunc(item)}
                              className="dark:bg-[black] dark:border-[1px] dark:border-[white]"
                              sx={{ border: `2px solid blue` }}
                            >
                              <EditIcon className="dark:text-white"></EditIcon>
                            </Button>
                            <Button
                              variant="contained"
                              sx={{
                                marginLeft: `40px`,
                                border: `2px solid blue`,
                              }}
                              onClick={() => openDeleteModalFunc(item.id)}
                              className="dark:bg-[black] dark:border-[1px] dark:border-[white]"
                            >
                              <DeleteIcon className="dark:text-white"></DeleteIcon>
                            </Button>
                          </div>
                        </div>
                      </>
                    );
                  })}
                  <Modal
                    open={openAddModal}
                    onClose={handleCloseAdd}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    className="flex justify-center items-center"
                  >
                    <Box className="p-[20px_20px] bg-[white] dark:bg-[black] dark:border-[1px] dark:border-[white]">
                      <form
                        action=""
                        className="flex flex-col justify-center items-center gap-[30px_0]"
                        onSubmit={() => addInfo(event)}
                      >
                        <input
                          type="img"
                          name=""
                          id=""
                          className="h-[40px] w-[100%] border-[black] border-[1px] outline-none px-[20px] rounded-[30px] dark:bg-[black] dark:text-white placeholder:dark:text-white dark:border-[1px] dark:border-[white]"
                          value={addImg}
                          onChange={(event) => setAddImg(event.target.value)}
                          placeholder={t("placeholderAddimg")}
                          required={true}
                        />
                        <input
                          type="text"
                          name=""
                          id=""
                          className="h-[40px] w-[100%] border-[black] border-[1px] outline-none px-[20px] rounded-[30px] dark:bg-[black] dark:text-white placeholder:dark:text-white dark:border-[1px] dark:border-[white]"
                          value={addTitle}
                          onChange={(event) => setAddTitle(event.target.value)}
                          placeholder={t("placeholderAddTitle")}
                          required={true}
                        />
                        <input
                          type="text"
                          name=""
                          id=""
                          className="h-[40px] w-[100%] border-[black] border-[1px] outline-none px-[20px] rounded-[30px] dark:bg-[black] dark:text-white placeholder:dark:text-white dark:border-[1px] dark:border-[white]"
                          value={addDesc}
                          onChange={(event) => setAddDesc(event.target.value)}
                          placeholder={t("placeholderAddDesc")}
                          required={true}
                        />
                        <Button
                          variant="contained"
                          type="submit"
                          sx={{ border: `2px solid blue` }}
                          className="dark:bg-[black] dark:text-[white] dark:border-[1px] dark:border-[white]"
                        >
                          {t("addUserBtn")}
                          <AddCircleIcon className="ml-[20px]"></AddCircleIcon>
                        </Button>
                        <Button
                          variant="contained"
                          onClick={() => setOpenAddModal(false)}
                          sx={{ border: `2px solid blue` }}
                          className="dark:bg-[black] dark:text-[white]  dark:border-[1px] dark:border-[white]"
                        >
                          {t("closeBtn")}
                        </Button>
                      </form>
                    </Box>
                  </Modal>

                  <Modal
                    open={openEditModal}
                    onClose={handleCloseEdit}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    className="flex justify-center items-center"
                  >
                    <Box className="p-[20px_20px] bg-[white] dark:bg-[black] dark:border-[1px] dark:border-[white]">
                      <form
                        action=""
                        className="flex flex-col justify-center items-center gap-[30px_0]"
                        onSubmit={() => editInfo(event)}
                      >
                        <input
                          type="img"
                          name=""
                          id=""
                          className="h-[40px] w-[100%] border-[black] border-[1px] outline-none px-[20px] rounded-[30px] dark:bg-[black] dark:text-white placeholder:dark:text-white dark:border-[1px] dark:border-[white]"
                          value={editImg}
                          onChange={(event) => setEditImg(event.target.value)}
                          placeholder={t("placeholderEditimg")}
                          required={true}
                        />
                        <input
                          type="text"
                          name=""
                          id=""
                          className="h-[40px] w-[100%] border-[black] border-[1px] outline-none px-[20px] rounded-[30px] dark:bg-[black] dark:text-white placeholder:dark:text-white dark:border-[1px] dark:border-[white]"
                          value={editTitle}
                          onChange={(event) => setEditTitle(event.target.value)}
                          placeholder={t("placeholderEditTitle")}
                          required={true}
                        />
                        <input
                          type="text"
                          name=""
                          id=""
                          className="h-[40px] w-[100%] border-[black] border-[1px] outline-none px-[20px] rounded-[30px] dark:bg-[black] dark:text-white placeholder:dark:text-white dark:border-[1px] dark:border-[white]"
                          value={editDesc}
                          onChange={(event) => setEditDesc(event.target.value)}
                          placeholder={t("placeholderEditDesc")}
                          required={true}
                        />
                        <Button
                          variant="contained"
                          type="submit"
                          sx={{ border: `2px solid blue` }}
                          className="dark:bg-[black] dark:text-[white]  dark:border-[1px] dark:border-[white]"
                        >
                          {t("editBtn")}
                        </Button>
                        <Button
                          variant="contained"
                          onClick={() => setOpenEditModal(false)}
                          sx={{ border: `2px solid blue` }}
                          className="dark:bg-[black] dark:text-[white]  dark:border-[1px] dark:border-[white]"
                        >
                          {t("closeBtn")}
                        </Button>
                      </form>
                    </Box>
                  </Modal>

                  <Modal
                    open={openDeleteModal}
                    onClose={handleCloseDelete}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    className="flex justify-center items-center"
                  >
                    <Box className="p-[20px_20px] bg-[white] dark:bg-black dark:text-white dark:border-[1px] dark:border-[white] sm:w-[280px]">
                      <h1 className="text-[34px] ">{t("textInDeleteModal")}</h1>
                      <div className="mt-[100px] flex items-center gap-[0_50px]">
                        <Button
                          variant="contained"
                          onClick={() => deleteUser()}
                          sx={{ border: `2px solid blue` }}
                          className="dark:bg-[black] dark:text-[white]  dark:border-[1px] dark:border-[white]"
                        >
                          {t("deleteBtn")}
                        </Button>
                        <Button
                          variant="contained"
                          sx={{ border: `2px solid blue` }}
                          onClick={() => setOpenDeleteModal(false)}
                          className="dark:bg-[black] dark:text-[white]  dark:border-[1px] dark:border-[white]"
                        >
                          {t("closeBtn")}
                        </Button>
                      </div>
                    </Box>
                  </Modal>
                </div>
                <h1
                  className="text-center text-[#72787D] text-[20px] font-[400] dark:text-[white] mt-[50px]"
                  data-aos="flip-left"
                >
                  {t("thirdTextS4")}
                </h1>
              </div>
            </div>
          </div>
        </section>
        <section className="section_5">
          <div className="container">
            <div className="container_block section_5_block">
              <h1
                className="text-center text-[#212B31] text-[32px] font-[400] dark:text-[white]"
                data-aos="flip-left"
              >
                {t("firstTextS5")}
              </h1>
              <div className="flex_p_s_5 mt-[20px] flex justify-center">
                <p
                  className="text-center text-[#72787D] text-[20px] font-[400] dark:text-white w-[750px] md:w-[100%]"
                  data-aos="flip-up"
                >
                  {t("secondTextS5")}
                </p>
              </div>
              <div
                className="cards_s_5 flex justify-between items-center mt-[40px] flex-wrap lg:justify-center lg:gap-[30px_0]"
                data-aos="flip-left"
              >
                <CardS5
                  imgSrcS5={iconCard2S5}
                  textH3S5={t("textH3Card1S5")}
                  textPS5={t(`textPCard1S5`)}
                ></CardS5>
                <CardS5
                  imgSrcS5={iconCard3S5}
                  textH3S5={t("textH3Card2S5")}
                  textPS5={t(`textPCard2S5`)}
                ></CardS5>
                <CardS5
                  imgSrcS5={iconCard1S5}
                  textH3S5={t("textH3Card3S5")}
                  textPS5={t(`textPCard3S5`)}
                ></CardS5>
              </div>
              <div
                className="block_1_s_5 flex justify-between items-center mt-[80px] p-[40px] bg-[#F6F8F9] md:flex-wrap md:justify-center md:gap-[30px_0] dark:bg-black dark:border-[1px] dark:border-[white]"
                data-aos="flip-right"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <path
                    d="M18.12 1.73018C24.88 4.88318 26.443 8.81618 26.776 10.8802C27.152 13.2362 26.321 15.0172 25.493 15.8242C24.655 16.6442 23.771 17.0582 22.865 17.0582C22.604 17.0582 22.359 17.0232 22.132 16.9652L17.161 2.48018C17.1438 2.35495 17.1593 2.22739 17.2061 2.10996C17.2529 1.99253 17.3294 1.88924 17.428 1.81018L18.12 1.73018ZM18.12 1.72818C18.0083 1.67673 17.8846 1.65716 17.7624 1.67163C17.6403 1.6861 17.5246 1.73405 17.428 1.81018L18.12 1.72818ZM18.12 1.72818L17.908 2.18118C24.528 5.27118 25.977 9.06918 26.282 10.9572C26.635 13.1652 25.848 14.7792 25.144 15.4652H25.143C24.371 16.2222 23.606 16.5572 22.865 16.5572C22.6461 16.5568 22.4281 16.5272 22.217 16.4692C22.891 12.2842 22.289 9.27118 21.109 6.18918C21.0547 6.04055 20.971 5.90436 20.8629 5.78873C20.7549 5.6731 20.6247 5.58039 20.4801 5.5161C20.3355 5.45182 20.1794 5.41728 20.0212 5.41455C19.8629 5.41181 19.7058 5.44094 19.559 5.50018L19.552 5.50318C19.2608 5.63028 19.0301 5.86513 18.9082 6.15854C18.7863 6.45194 18.7826 6.78115 18.898 7.07718C20.023 10.0172 20.532 12.7172 19.761 16.7412C19.299 16.8802 18.841 16.9992 18.406 16.9992C17.27 16.9992 16.339 16.6322 15.641 15.9942C14.941 15.3542 14.445 14.4132 14.241 13.2192C13.713 10.1252 15.065 7.97518 16.241 6.12718L16.263 6.09218C16.647 5.48818 17.029 4.88618 17.295 4.30218C17.568 3.70418 17.744 3.07218 17.656 2.41418C17.6502 2.3751 17.6545 2.33519 17.6685 2.29825C17.6825 2.26131 17.7057 2.22857 17.736 2.20318L17.428 1.81018L18.12 1.72818ZM18.12 1.72818L17.909 2.18218C17.8809 2.16926 17.8498 2.16409 17.819 2.16718C17.789 2.17173 17.7607 2.18415 17.737 2.20318L17.428 1.81018L18.12 1.72818ZM21.559 17.3022C21.5153 17.2846 21.472 17.2663 21.429 17.2472L21.324 17.2022C21.233 17.2522 21.138 17.2992 21.041 17.3432L21.559 17.3022ZM21.559 17.3022L21.16 16.7202C21.146 16.7982 21.1317 16.8762 21.117 16.9542L21.056 17.0592L21.093 17.0802L21.041 17.3432L21.559 17.3022ZM21.559 17.3022C21.2952 18.6115 20.9566 19.9046 20.545 21.1752L21.559 17.3022ZM21.559 17.3022L20.545 21.1752L21.559 17.3022ZM21.041 17.3432C20.7844 18.5863 20.4599 19.8145 20.069 21.0222L21.041 17.3432ZM21.041 17.3432C20.905 17.4053 20.7665 17.462 20.626 17.5132L21.041 17.3432ZM20.069 21.0222L20.626 17.5122L20.069 21.0222ZM20.069 21.0222C20.037 21.1212 19.957 21.1662 19.891 21.1662C19.8759 21.1658 19.861 21.1628 19.847 21.1572L19.838 21.1542C19.753 21.1242 19.675 21.0082 19.718 20.8702C20.0744 19.7701 20.3761 18.6531 20.622 17.5232L20.069 21.0222ZM20.069 21.0222L20.622 17.5222L20.069 21.0222ZM20.626 17.5122L20.624 17.5222H20.622L20.626 17.5122ZM20.626 17.5122L20.622 17.5222L20.626 17.5122ZM20.545 21.1752C20.502 21.3157 20.4155 21.439 20.298 21.5272C20.1805 21.6155 20.038 21.6641 19.891 21.6662C19.8179 21.6655 19.7454 21.652 19.677 21.6262C19.315 21.5032 19.122 21.0962 19.241 20.7192L20.545 21.1752ZM3.26101 25.0002L3.66201 24.7022L3.65001 24.6852L3.63701 24.6702L3.50401 24.5202C3.12501 24.0922 2.82601 23.7532 2.59601 23.2752C2.34601 22.7552 2.16701 22.0342 2.16701 20.8342V10.8342C2.16701 10.1172 2.40201 9.63018 2.72701 9.32118C3.05701 9.00718 3.52501 8.83418 4.05801 8.83418C4.59101 8.83418 5.05801 9.00718 5.38901 9.32118C5.71401 9.63118 5.94901 10.1172 5.94901 10.8342V17.9692C5.91665 17.9863 5.88497 18.0047 5.85401 18.0242C5.67813 18.1396 5.52154 18.282 5.39001 18.4462C5.07826 18.8397 4.86378 19.3012 4.76401 19.7932C4.52701 20.9002 4.77901 22.3162 6.07201 23.6832L9.56801 27.5862L9.57101 27.5902C9.67557 27.7074 9.80375 27.8012 9.94714 27.8653C10.0905 27.9295 10.2459 27.9625 10.403 27.9623C10.56 27.9621 10.7153 27.9287 10.8585 27.8642C11.0018 27.7997 11.1297 27.7057 11.234 27.5882C11.4406 27.356 11.5544 27.0559 11.5539 26.7451C11.5533 26.4343 11.4384 26.1346 11.231 25.9032L7.41301 21.6612L7.41001 21.6582C6.87801 21.0782 6.87501 20.1432 7.42301 19.5432L7.42401 19.5422C7.49601 19.4622 7.73901 19.2412 8.07601 19.1802C8.36901 19.1272 8.85101 19.1742 9.48601 19.8362L13.301 24.0912L13.306 24.0962L13.311 24.1012C14.946 25.8212 16.311 27.9462 16.311 30.8332V37.5002C16.311 37.5962 16.311 37.6602 16.304 37.7182C16.302 37.7429 16.2963 37.7672 16.287 37.7902C16.2004 37.8237 16.1078 37.8387 16.015 37.8342H9.63801C9.59656 37.8347 9.55513 37.8324 9.51401 37.8272C9.476 37.823 9.43889 37.8129 9.40401 37.7972C9.38929 37.7915 9.37671 37.7814 9.36801 37.7682C9.36301 37.7602 9.34101 37.7202 9.34101 37.6182V32.3362L9.24401 32.2042C8.83201 31.6442 7.43501 29.7682 6.14401 28.0332L4.41801 25.7162L3.86801 24.9782L3.71601 24.7732L3.67601 24.7202L3.66601 24.7062L3.66301 24.7032V24.7022L3.26101 25.0002ZM34.051 17.9692V10.8342C34.051 10.1172 34.286 9.63018 34.611 9.32118C34.941 9.00718 35.409 8.83418 35.942 8.83418C36.475 8.83418 36.942 9.00718 37.273 9.32118C37.598 9.63118 37.833 10.1172 37.833 10.8342V20.8342C37.833 22.0342 37.655 22.7542 37.405 23.2752C37.175 23.7532 36.875 24.0922 36.497 24.5202L36.364 24.6702L36.351 24.6852L36.339 24.7022L36.739 25.0002L36.339 24.7022H36.338L36.335 24.7062L36.325 24.7202L36.285 24.7732L36.133 24.9782L35.583 25.7162L33.857 28.0332C32.8215 29.4216 31.7882 30.8116 30.757 32.2032L30.66 32.3362V37.6172C30.66 37.7202 30.638 37.7602 30.632 37.7682C30.6238 37.7808 30.612 37.7906 30.598 37.7962C30.5628 37.812 30.5254 37.8221 30.487 37.8262C30.4459 37.8314 30.4045 37.8337 30.363 37.8332H23.986C23.8933 37.838 23.8007 37.8234 23.714 37.7902C23.7048 37.7672 23.6991 37.7429 23.697 37.7182C23.6898 37.6457 23.6871 37.5729 23.689 37.5002V30.8332C23.689 27.9462 25.054 25.8202 26.689 24.1012L26.695 24.0962L26.7 24.0912L30.515 19.8362C31.15 19.1742 31.632 19.1272 31.925 19.1802C32.262 19.2402 32.505 19.4602 32.581 19.5432C33.126 20.1432 33.123 21.0782 32.593 21.6592L32.591 21.6612L28.77 25.9042H28.768C28.5613 26.1359 28.4471 26.4356 28.4471 26.7462C28.4471 27.0567 28.5613 27.3564 28.768 27.5882C28.8723 27.7055 29.0002 27.7994 29.1433 27.8638C29.2865 27.9282 29.4416 27.9616 29.5986 27.9618C29.7555 27.962 29.9107 27.9289 30.054 27.8649C30.1973 27.8009 30.3255 27.7072 30.43 27.5902L30.433 27.5862L33.928 23.6822C35.222 22.3162 35.473 20.9002 35.237 19.7932C35.1368 19.3014 34.922 18.8403 34.61 18.4472C34.4786 18.2827 34.322 18.1399 34.146 18.0242C34.1151 18.0046 34.0834 17.9863 34.051 17.9692Z"
                    fill="#2C70C1"
                    stroke="#2C70C1"
                  />
                </svg>
                <p className="text-[#212B31] text-[18px] font-[400] dark:text-white">
                  {t("thirdTextS5")}
                </p>
                <ButtonMore
                  btnMoreClass={`text-[18px] p-[13px_25px] bg-white outline-none`}
                ></ButtonMore>
              </div>
            </div>
          </div>
        </section>
        <section className="section_6">
          <div className="container">
            <div
              className="container_block section_6_block bg-[#212B31] dark:bg-[white] py-[143px]"
              data-aos="fade-down"
            >
              <div className="item_1_s_6 flex justify-between items-center lg:flex-col lg:justify-center lg:gap-[50px_0]">
                <div className="texts">
                  <h1
                    className="text-[#FFFFFF] text-[32px] font-[400] dark:text-[#212B31]"
                    data-aos="flip-right"
                  >
                    {t("firstTextS6")}
                  </h1>
                  <div className="ano_texts mt-[30px]" data-aos="fade-down">
                    <h3 className="text-[#FFFFFF] text-[18px] font-[400] dark:text-[#212B31]">
                      {t("secondTextS6")}
                    </h3>
                    <p className="text-[#FFFFFF] text-[16px] font-[400] opacity-[0.5] mt-[10px] w-[330px] sm:w-[100%] dark:text-[#212B31]">
                      {t("thirdTextS6")}
                    </p>
                    <h3 className="text-[#FFFFFF] text-[18px] font-[400] mt-[30px] dark:text-[#212B31]">
                      {t("fourthTextS6")}
                    </h3>
                    <p className="text-[#FFFFFF] text-[16px] font-[400] opacity-[0.5] mt-[10px] w-[330px] sm:w-[100%] dark:text-[#212B31]">
                      {t("fifthTextS6")}
                    </p>
                    <h3 className="text-[#FFFFFF] text-[18px] font-[400] w-[330px] mt-[30px] sm:w-[100%] dark:text-[#212B31]">
                      {t("sixthTextS6")}
                    </h3>
                    <p className="text-[#FFFFFF] text-[16px] font-[400] opacity-[0.5] mt-[10px] w-[330px] sm:w-[100%] dark:text-[#212B31]">
                      {t("seventhTextS6")}
                    </p>
                  </div>
                  <div className="for_btns mt-[30px] flex items-center gap-[0_50px] sm:flex-col sm:gap-[30px_0]">
                    <ButtonRequestDarkMode
                      btnRequestClass={`p-[13px_25px] text-[17px]`}
                    ></ButtonRequestDarkMode>
                    <ButtonMoreDarkMode
                      btnMoreClass={`p-[13px_25px] text-[17px]`}
                      textBtnMoreDarkMode={t("textBtnMore")}
                    ></ButtonMoreDarkMode>
                  </div>
                </div>
                <div className="img" data-aos="flip-down">
                  <img src={img1S6} alt="" className="dark:bg-[#d4d2d2]" />
                </div>
              </div>
              <div
                className="item_2_s_6 flex justify-between items-center mt-[50px] flex-wrap md:justify-center"
                data-aos="zoom-out"
              >
                <CardS6
                  imgSrcS6={iconCard1S6}
                  textH3S6={t("textH3Card1S6")}
                  textPS6={t("textPCard1S6")}
                ></CardS6>
                <CardS6
                  imgSrcS6={iconCard2S6}
                  textH3S6={t("textH3Card2S6")}
                  textPS6={t("textPCard2S6")}
                ></CardS6>
                <CardS6
                  imgSrcS6={iconCard3S6}
                  textH3S6={t("textH3Card3S6")}
                  textPS6={t("textPCard3S6")}
                ></CardS6>
              </div>
            </div>
          </div>
        </section>
        <section className="section_7">
          <div className="container">
            <div className="container_block section_7_block flex justify-between mt-[40px] lg:flex-wrap lg:justify-center">
              <div className="item_1_s_7">
                <h2
                  className="text-[#212B31] text-[32px] font-[400] dark:text-[white]"
                  data-aos="flip-left"
                >
                  {t("firstTextS7")}
                </h2>
                <p
                  className="text-[#72787D] text-[20px] font-[400] mt-[10px] w-[500px] md:w-[100%] dark:text-[white]"
                  data-aos="flip-right"
                >
                  {t("secondTextS7")}
                </p>
                <img
                  src={imgS7}
                  alt=""
                  className="mt-[20px]"
                  data-aos="flip-up"
                />
              </div>
              <div className="item_2_s_7 flex flex-col items-center justify-center gap-[15px_0] w-[448px] md:w-[100%] md:mt-[20px]">
                <div
                  className="flex items-start gap-[0_20px]"
                  data-aos="fade-up-right"
                >
                  <h3
                    className="text-[#72787D] text-[16px] font-[400] dark:text-[white] p-[10px] w-[40px] h-[40px] border-[1px] border-[solid] border-[#DADEDF] dark:border-[#fff] flex justify-center items-center"
                    data-aos="flip-left"
                  >
                    1
                  </h3>
                  <div>
                    <h4 className="text-[#212B31] text-[17px] font-[400] dark:text-[white]">
                      {t("thirdTextS7")}
                    </h4>
                    <p className="text-[#72787D] text-[18px] font-[400] mt-[10px] dark:text-[white]">
                      {t("fourthTextS7")}
                    </p>
                  </div>
                </div>
                <div
                  className="flex items-start gap-[0_20px]"
                  data-aos="fade-up-left"
                >
                  <h3 className="text-[#72787D] text-[16px] font-[400] dark:text-[white] p-[10px] w-[40px] h-[40px] border-[1px] border-[solid] border-[#DADEDF] dark:border-[#fff] flex justify-center items-center">
                    2
                  </h3>
                  <div>
                    <h4 className="text-[#212B31] text-[17px] font-[400] dark:text-[white]">
                      {t("fifthTextS7")}
                    </h4>
                    <p className="text-[#72787D] text-[18px] font-[400] mt-[10px] dark:text-[white]">
                      {t("sixthTextS7")}
                    </p>
                  </div>
                </div>
                <div
                  className="flex items-start gap-[0_20px]"
                  data-aos="fade-up-left"
                >
                  <h3 className="text-[#72787D] text-[16px] font-[400] dark:text-[white] p-[10px] w-[40px] h-[40px] border-[1px] border-[solid] border-[#DADEDF] dark:border-[#fff] flex justify-center items-center">
                    3
                  </h3>
                  <div>
                    <h4 className="text-[#212B31] text-[17px] font-[400] dark:text-[white]">
                      {t("seventhTextS7")}
                    </h4>
                    <p className="text-[#72787D] text-[18px] font-[400] mt-[10px] dark:text-[white]">
                      {t("eighthTextS7")}
                    </p>
                  </div>
                </div>
                <div
                  className="flex item-start gap-[0_20px]"
                  data-aos="fade-up-down"
                >
                  <h3 className="text-[#72787D] text-[16px] font-[400] dark:text-[white] p-[10px] w-[40px] h-[40px] border-[1px] border-[solid] border-[#DADEDF] dark:border-[#fff] flex justify-center items-center">
                    4
                  </h3>
                  <div>
                    <h4 className="text-[#212B31] text-[17px] font-[400] dark:text-[white]">
                      {t("ninthTextS7")}
                    </h4>
                    <p className="text-[#72787D] text-[18px] font-[400] mt-[10px] dark:text-[white]">
                      {t("tenthTextS7")}
                    </p>
                  </div>
                </div>
                <div
                  className="block_btn flex items-center gap-[0_20px] sm:flex-col sm:gap-[20px_0]"
                  data-aos="zoom-in"
                >
                  <ButtonRequest
                    btnRequestClass={`p-[13px_25px] text-[17px]`}
                  ></ButtonRequest>
                  <ButtonMore
                    btnMoreClass={`p-[13px_25px] text-[17px]`}
                  ></ButtonMore>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section_8">
          <div className="container">
            <div className="container_block section_8_block">
              <h1
                className="text-center text-[#212B31] text-[32px] font-[400] dark:text-white"
                data-aos="fade-right"
              >
                {t("firstTextS8")}
              </h1>
              <div
                className="flex_for_p flex justify-center"
                data-aos="fade-up-left"
              >
                <p className="text-center mt-[10px] text-[#72787D] text-[20px] font-[400] dark:text-white">
                  {t("secondTextS8")}
                </p>
              </div>
              <div className="item_after_text_s_8 mt-[30px] flex justify-between items-start gap-[0_80px] lg:flex-col lg:items-center lg:gap-[20px_0]">
                <div
                  className="cards_s_8 flex flex-col gap-[10px_0]"
                  data-aos="fade-down"
                >
                  <CardS8
                    imgSrcS8={iconCard1S8}
                    textH3S8={t("thirdTextS8")}
                    textPS8={t("fourthTextS8")}
                  ></CardS8>
                  <CardS8
                    imgSrcS8={iconCard2S8}
                    textH3S8={t("fifthTextS8")}
                    textPS8={t("sixthTextS8")}
                  ></CardS8>
                  <CardS8
                    imgSrcS8={iconCard3S8}
                    textH3S8={t("seventhTextS8")}
                    textPS8={t("eigthTextS8")}
                  ></CardS8>
                  <CardS8
                    imgSrcS8={iconCard4S8}
                    textH3S8={t("ninthTextS8")}
                    textPS8={t("tenthTextS8")}
                  ></CardS8>
                </div>
                <Swiper
                  pagination={{
                    type: "fraction",
                  }}
                  navigation={true}
                  loop={true}
                  modules={[Pagination, Navigation]}
                  className="mySwiper"
                >
                  <SwiperSlide className="dark:bg-black flex flex-col justify-center items-center">
                    <div className="py-[132px] px-[60px] md:px-[5px] md:py-[40px] bg-[#F6F8F9] rounded-[5px] dark:bg-[black] dark:border-[1px] dark:border-[white]">
                      <h1
                        className="text-[#212B31] text-[30px] sm:text-[24px] font-[400] dark:text-[white]"
                        data-aos="flip-left"
                      >
                        {t("eleventhTextS8")}
                      </h1>
                      <div className="img_text mt-[20px] flex items-center gap-[0_20px]">
                        <div className="w-[60px]">
                          <img
                            src={imgOfUserS8}
                            className="img1SwiperS8"
                            alt=""
                            data-aos="fade-up-left"
                          />
                        </div>
                        <div className="texts" data-aos="zoom-in-up">
                          <h4
                            className="text-[#212B31] text-[16px] font-[400] dark:text-[white]"
                            data-aos="zoom-left"
                          >
                            {t("twelfthTextS8")}
                          </h4>
                          <p
                            className="text-[#72787D] text-[16px] font-[400] dark:text-[white]"
                            data-aos="zoom-right"
                          >
                            {t("thirteenTextS8")}
                          </p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="dark:bg-black flex flex-col justify-center items-center">
                    <div className="py-[132px] px-[60px] md:px-[5px] md:py-[40px] bg-[#F6F8F9] rounded-[5px] dark:bg-[black] dark:border-[1px] dark:border-[white]">
                      <h1
                        className="text-[#212B31] text-[30px] sm:text-[24px] font-[400] dark:text-[white]"
                        data-aos="flip-left"
                      >
                        {t("eleventhTextS8")}
                      </h1>
                      <div className="img_text mt-[20px] flex items-center gap-[0_20px]">
                        <div className="w-[60px]">
                          <img
                            src={imgOfUserS8}
                            className="img1SwiperS8"
                            alt=""
                            data-aos="fade-up-left"
                          />
                        </div>
                        <div className="texts" data-aos="zoom-in-up">
                          <h4
                            className="text-[#212B31] text-[16px] font-[400] dark:text-[white]"
                            data-aos="zoom-left"
                          >
                            {t("twelfthTextS8")}
                          </h4>
                          <p
                            className="text-[#72787D] text-[16px] font-[400] dark:text-[white]"
                            data-aos="zoom-right"
                          >
                            {t("thirteenTextS8")}
                          </p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
              <div className="swiper_s_8 mt-[50px]" data-aos="flip-up">
                <Swiper
                  pagination={{
                    type: "fraction",
                  }}
                  navigation={true}
                  loop={true}
                  modules={[Pagination, Navigation]}
                  className="mySwiper"
                >
                  <SwiperSlide className="dark:bg-black flex flex-col justify-center items-center">
                    <div>
                      <img
                        src={img1S8ForSwiper}
                        alt=""
                        className="dark:bg-[white]"
                      />
                      <div className="flex_p flex justify-center">
                        <p className="text-[#72787D] text-[16px] font-[400] pt-[40px] w-[134px] dark:text-[white]">
                          {t("firstTextForSwiperS8")}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="dark:bg-black flex flex-col justify-center items-center">
                    <div>
                      <img
                        src={img2S8ForSwiper}
                        alt=""
                        className="dark:bg-[white]"
                      />
                      <div className="flex_p flex justify-center">
                        <p className="text-[#72787D] text-[16px] font-[400] pt-[40px] w-[134px] dark:text-[white]">
                          {t("secondTextForSwiperS8")}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="dark:bg-black dark:bg-blackflex flex-col justify-center items-center">
                    <div>
                      <img
                        src={img3S8ForSwiper}
                        alt=""
                        className="dark:bg-[white]"
                      />
                      <div className="flex_p flex justify-center">
                        <p className="text-[#72787D] text-[16px] font-[400] pt-[40px] w-[134px] dark:text-[white]">
                          {t("thirdTextForSwiperS8")}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="dark:bg-black dark:bg-blackflex flex-col justify-center items-center">
                    <div>
                      <img
                        src={img4S8ForSwiper}
                        alt=""
                        className="dark:bg-[white]"
                      />
                      <div className="flex_p flex justify-center">
                        <p className="text-[#72787D] text-[16px] font-[400] pt-[30px] w-[134px] dark:text-[white]">
                          {t("fourthTextForSwiperS8")}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </section>
        <section className="section_9">
          <div className="container">
            <div className="container_block section_9_block mt-[50px]">
              <div
                className="background_img_s_9 flex flex-col justify-center items-center px-[110px] md:px-[10px]"
                data-aos="zoom-in-down"
              >
                <h1
                  className="text-[#212B31] text-[48px] font-[400] text-center md:text-[27px] dark:text-[white]"
                  data-aos="fade-down"
                >
                  {t("textS9")}
                </h1>
                <div
                  className="btns_s_9 flex gap-[0_20px] mt-[30px] sm:flex-col sm:items-center sm:gap-[20px_0]"
                  data-aos="fade-up"
                >
                  <ButtonRequest
                    btnRequestClass={`p-[13px_25px] text-[17px]`}
                  ></ButtonRequest>
                  <SecondButtonMore
                    textOfSecondBtnMore={t("navbartext7")}
                    secondBtnMoreClass="p-[13px_25px] text-[17px]"
                  ></SecondButtonMore>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer className="footer">
          <div className="container">
            <div className="container_block footer_block mt-[70px]">
              <div className="footer_1 flex justify-between items-start md:flex-wrap md:gap-[30px_0] sm:flex-col sm:items-center">
                <div className="item_1_footer_1">
                  <div
                    className="logo_text_footer flex items-center text-[#212B31] text-[22px] font-[400] uppercase"
                    data-aos="fade-right"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="44"
                      viewBox="0 0 30 44"
                      fill="none"
                    >
                      <path
                        d="M14.6667 2.068L1.37867 22L14.6667 41.932L27.9547 22L14.6667 2.068ZM14.6667 0L29.3333 22L14.6667 44L3.8147e-06 22L14.6667 0Z"
                        fill="#FFC22D"
                      />
                      <path
                        d="M10.6773 16.852L9.36711 18.612L8.81955 24.1853V18.0547L10.6773 16.852Z"
                        fill="#FFC22D"
                      />
                      <path
                        d="M14.1191 11.484L12.4178 13.2733L11.8409 15.9867V13.3613L13.1511 12.2467V12.3053L14.1191 11.484Z"
                        fill="#FFC22D"
                      />
                      <path
                        d="M6.40445 24.1853H8.81956L6.60978 24.596L5.67111 26.4L6.40445 24.1853Z"
                        fill="#FFC22D"
                      />
                      <path
                        d="M12.8089 15.356V13.7427L14.6667 12.3053V14.1093L12.8089 15.356Z"
                        fill="#FFC22D"
                      />
                      <path
                        d="M13.5618 26.2533H12.9849V24.4347L13.5618 24.376V26.2533Z"
                        fill="#FFC22D"
                      />
                      <path
                        d="M13.5618 22.308L12.9849 22.44V20.6213L13.5618 20.416V22.308Z"
                        fill="#FFC22D"
                      />
                      <path
                        d="M13.5618 18.612L12.9849 18.876V17.0427L13.5618 16.72V18.612Z"
                        fill="#FFC22D"
                      />
                      <path
                        d="M11.88 26.2533H11.4107V24.6107L11.88 24.552V26.2533Z"
                        fill="#FFC22D"
                      />
                      <path
                        d="M11.88 22.704L11.4107 22.8067V21.164L11.88 21.0027V22.704Z"
                        fill="#FFC22D"
                      />
                      <path
                        d="M11.88 19.3747L11.4107 19.58V17.9373L11.88 17.6733V19.3747Z"
                        fill="#FFC22D"
                      />
                      <path
                        d="M10.4329 26.2533H10.0418V24.7573L10.4329 24.7133V26.2533Z"
                        fill="#FFC22D"
                      />
                      <path
                        d="M10.4329 23.0413L10.0418 23.1293V21.6333L10.4329 21.5013V23.0413Z"
                        fill="#FFC22D"
                      />
                      <path
                        d="M10.4329 20.02L10.0418 20.196V18.7L10.4329 18.48V20.02Z"
                        fill="#FFC22D"
                      />
                      <path
                        d="M14.1191 11.484L14.6667 10.956L13.1511 12.2467V9.97333L14.6667 7.77333L16.1822 9.97333V12.2467L17.4925 13.3613V16.0013L20.5236 18.04V24.1707H22.9289L23.6622 26.4H20.5333H14.6667V14.2413V14.1093L16.5244 15.356V13.7427L14.6667 12.3053V11.0293L14.1191 11.484ZM14.1876 10.34L13.728 10.7653V11.6453L14.1876 11.2493V10.34ZM16.3484 17.0427L15.7618 16.72V18.612L16.3484 18.876V17.0427ZM16.3484 20.6213L15.7618 20.416V22.308L16.3484 22.44V20.6213ZM16.3484 24.4347L15.7618 24.376V26.2533H16.3484V24.4347ZM18.9005 26.2533H19.2916V24.7573L18.9005 24.7133V26.2533ZM18.9005 23.0413L19.2916 23.1293V21.6333L18.9005 21.5013V23.0413ZM18.9005 20.02L19.2916 20.196V18.7L18.9005 18.48V20.02ZM17.4533 26.2533H17.9325V24.6107L17.4533 24.552V26.2533ZM17.4533 22.704L17.9325 22.8213V21.1787L17.4533 21.0173V22.704ZM17.4533 19.3747L17.9325 19.5947V17.952L17.4533 17.688V19.3747ZM15.0676 11.264L15.5271 11.66V10.78L15.0676 10.3547V11.264Z"
                        fill="#FFC22D"
                      />
                      <path
                        d="M14.1191 11.484L13.1511 12.3053V12.2467L14.6667 10.9707L14.1191 11.484Z"
                        fill="#FFC22D"
                      />
                      <path
                        d="M25.4711 26.3267L3.91111 26.4L14.6667 42.5333L25.4711 26.3267Z"
                        fill="#FFC22D"
                      />
                    </svg>
                    <h1 className="ml-[5px] text-[#272727] dark:text-white text-[15px] md:text-[13px]">
                      {t("textLogo")}
                    </h1>
                  </div>
                  <h4
                    className="mt-[10px] text-[#72787D] text-[16px] font-[400] dark:text-white"
                    data-aos="fade-up"
                  >
                    {t("firstTextFooter")}
                  </h4>
                  <p
                    className="mt-[3px] text-[#72787D] text-[15px] font-[400] dark:text-[white]"
                    data-aos="fade-left"
                  >
                    {t("secondTextFooter")}
                  </p>
                  <a
                    href=""
                    className="text-[#72787D] text-[16px] font-[400] mt-[16px] block dark:text-white"
                    data-aos="zoom-out"
                  >
                    info@stroycontrol.ru
                  </a>
                  <h3
                    className="text-[#72787D] text-[16px] font-[400] dark:text-white"
                    data-aos="fade-right"
                  >
                    +7 (945) 123-45-67
                  </h3>
                  <a href="" className="mt-[10px] block" data-aos="flip-right">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M12 0C5.39999 0 0 5.40964 0 12.0723C0 18.0964 4.39199 23.0964 10.128 24V15.5663H7.07999V12.0723H10.128V9.40964C10.128 6.38554 11.916 4.72289 14.664 4.72289C15.972 4.72289 17.34 4.95181 17.34 4.95181V7.92771H15.828C14.34 7.92771 13.872 8.85542 13.872 9.80723V12.0723H17.208L16.668 15.5663H13.872V24C16.6997 23.5516 19.2746 22.103 21.1319 19.9157C22.9892 17.7284 24.0064 14.9466 24 12.0723C24 5.40964 18.6 0 12 0Z"
                        fill="#73787C"
                        fillOpacity="0.5"
                      />
                    </svg>
                  </a>
                </div>
                <div className="item_2_footer_1 flex flex-col gap-[10px_0]">
                  <p
                    className="text-[#212B31] text-[16px] font-[400] dark:text-[white]"
                    data-aos="fade-down-left"
                  >
                    {t("thirdTextFooter")}
                  </p>
                  <a
                    href=""
                    className="text-[#72787D] text-[15px] font-[400] dark:text-[white]"
                    data-aos="fade-down-right"
                  >
                    {t("navbartext4")}
                  </a>
                  <a
                    href=""
                    className="text-[#72787D] text-[15px] font-[400] dark:text-[white]"
                    data-aos="fade-up-left"
                  >
                    {t("navbartext3")}
                  </a>
                </div>
                <div className="item_3_footer_1 flex flex-col gap-[10px_0]">
                  <p
                    className="text-[#212B31] text-[16px] font-[400] dark:text-[white]"
                    data-aos="fade-up-right"
                  >
                    {t("fourthTextFooter")}
                  </p>
                  <a
                    href=""
                    className="text-[#72787D] text-[15px] font-[400] dark:text-[white]"
                    data-aos="flip-up"
                  >
                    {t("navbartext6")}
                  </a>
                  <a
                    href=""
                    className="text-[#72787D] text-[15px] font-[400] dark:text-[white]"
                    data-aos="fade-up-left"
                  >
                    {t("navbartext5")}
                  </a>
                </div>
                <div className="item_4_footer_1 flex flex-col gap-[10px_0]">
                  <p
                    className="text-[#212B31] text-[16px] font-[400] dark:text-[white]"
                    data-aos="flip-left"
                  >
                    {t("fifthTextFooter")}
                  </p>
                  <a
                    href=""
                    className="text-[#72787D] text-[15px] font-[400] dark:text-[white]"
                    data-aos="flip-up"
                  >
                    {t("navbartext2")}
                  </a>
                  <a
                    href=""
                    className="text-[#72787D] text-[15px] font-[400] dark:text-[white]"
                    data-aos="fade-up-left"
                  >
                    {t("navbartext7")}
                  </a>
                </div>
              </div>
              <div className="footer_2 mt-[100px] flex justify-between items-center sm:flex-col sm:gap-[20px_0]">
                <h3
                  className="text-[#72787D] text-[16px] font-[400] sm:text-center dark:text-[white]"
                  data-aos="zoom-in"
                >
                  {t("sixthTextFooter")}
                </h3>
                <h3
                  className="text-[#72787D] text-[16px] font-[400] dark:text-[white]"
                  data-aos="zoom-out"
                >
                  {t("seventhTextFooter")}
                </h3>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
