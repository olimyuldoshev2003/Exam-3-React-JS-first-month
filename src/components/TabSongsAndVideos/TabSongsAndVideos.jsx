import React, { useRef, useState, useEffect } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useTranslation } from "react-i18next";

import songNumber1 from "../../songs/Ба пеш Камиль Нурматов.mp3";
import songNumber2 from "../../songs/Без лишних слов(feat JONY).mp3";
import songNumber3 from "../../songs/Вспомни - Камиль Нурматов.mp3";
import songNumber4 from "../../songs/Имруз Хит 2023  Камиль Нурматов.mp3";
import songNumber5 from "../../songs/Ишки Аввал Камиль Нурматов.mp3";
import songNumber6 from "../../songs/Камиль Нурматов - Сенёрита.mp3";
import songNumber7 from "../../songs/Кист_сарсупурдаи_ватан_Камиль_Нурматов.mp3";
import songNumber8 from "../../songs/Мой Рай - Камиль Нурматов.mp3";
import songNumber9 from "../../songs/потерпи 2023г.mp3";
import songNumber10 from "../../songs/Хушбахтам .mp3";
import songNumber11 from "../../songs/Ягона КамильНурматов.mp3";
import songNumber12 from "../../songs/Як табассум~Камиль Нурматов.mp3";
import songNumber13 from "../../songs/Наврӯз_2023_Тоҷикистон_Душанбе_Камиль_Нурматов_бо_суруди☆Имруз★.mp3";
import songNumber14 from "../../songs/Ханда куни Камиль Нурматов.mp3";
import songNumber15 from "../../songs/Kamil_Nurmatov+Bonu padarjon.mp3";
import songNumber16 from "../../songs/Kamil_Nurmatov-Anisa.mp3";
import songNumber17 from "../../songs/Shiddat Kamil_Nurmatov&Luas.mp3";
import songNumber18 from "../../songs/Kamil_Nurmatov_mijgona_HAYOTI_MAN.mp3";
import songNumber19 from "../../songs/Kamil_Nurmatov Бикан хдта.mp3";
import songNumber20 from "../../songs/Параллели Kamil_Nurmatov x Bonu.mp3";
import songNumber21 from "../../songs/Мара эҳтиёт кун  Kamil_Nurmatov.mp3";
import songNumber22 from "../../songs/Оставила Kamil_Nurmatov & Nasiba.mp3";
import songNumber23 from "../../songs/Kamil_Nurmatov_Siyo chashmak.mp3";
import songNumber24 from "../../songs/Kamil_Nurmatov - Mahina - Мысли.mp3";
import songNumber25 from "../../songs/ҲА БИГӮ ҶОНАМ Камиль Нурматов.mp3";
import songNumber26 from "../../songs/Любишь_не_любишь_это_не_важно_Kamil_Nurmatov&Mahina.mp3";
import songNumber27 from "../../songs/Kamil Nurmatov - Locomakarina.mp3";
import songNumber28 from "../../songs/MOHI MAN Kamil Nurmatov.mp3";
import songNumber29 from "../../songs/Мешавем мо якҷо Kamil_Nurmatov&Mahina.mp3";
import songNumber30 from "../../songs/Kamil Nurmatov-majnun.mp3";
import songNumber31 from "../../songs/Потухшие огни  Камиль_Нурматов&Барзу.mp3";
import songNumber32 from "../../songs/Шодам Камиль Нурматов.mp3";
import songNumber33 from "../../songs/Орзу бо ёд Luas&Dilnoza&Kamil.mp3";
import songNumber34 from "../../songs/Тирамох Камиль Нурматов.mp3";
import songNumber35 from "../../songs/Листы_календаря_1_Kamil_Nurmatov.mp3";
import songNumber36 from "../../songs/Держи Камиль Нурматов.mp3";
import { Modal } from "@mui/material";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function TabSongsAndVideos() {
  const [value, setValue] = React.useState(0);

  //For translation
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [modal1ForSongNumber1, setModal1ForSongNumber1] = useState(false);
  const [modal2ForSongNumber2, setModal2ForSongNumber2] = useState(false);
  const [modal3ForSongNumber3, setModal3ForSongNumber3] = useState(false);
  const [modal4ForSongNumber4, setModal4ForSongNumber4] = useState(false);
  const [modal5ForSongNumber5, setModal5ForSongNumber5] = useState(false);
  const [modal6ForSongNumber6, setModal6ForSongNumber6] = useState(false);
  const [modal7ForSongNumber7, setModal7ForSongNumber7] = useState(false);
  const [modal8ForSongNumber8, setModal8ForSongNumber8] = useState(false);
  const [modal9ForSongNumber9, setModal9ForSongNumber9] = useState(false);
  const [modal10ForSongNumber10, setModal10ForSongNumber10] = useState(false);
  const [modal11ForSongNumber11, setModal11ForSongNumber11] = useState(false);
  const [modal12ForSongNumber12, setModal12ForSongNumber12] = useState(false);
  const [modal13ForSongNumber13, setModal13ForSongNumber13] = useState(false);
  const [modal14ForSongNumber14, setModal14ForSongNumber14] = useState(false);
  const [modal15ForSongNumber15, setModal15ForSongNumber15] = useState(false);
  const [modal16ForSongNumber16, setModal16ForSongNumber16] = useState(false);
  const [modal17ForSongNumber17, setModal17ForSongNumber17] = useState(false);
  const [modal18ForSongNumber18, setModal18ForSongNumber18] = useState(false);
  const [modal19ForSongNumber19, setModal19ForSongNumber19] = useState(false);
  const [modal20ForSongNumber20, setModal20ForSongNumber20] = useState(false);
  const [modal21ForSongNumber21, setModal21ForSongNumber21] = useState(false);
  const [modal22ForSongNumber22, setModal22ForSongNumber22] = useState(false);
  const [modal23ForSongNumber23, setModal23ForSongNumber23] = useState(false);
  const [modal24ForSongNumber24, setModal24ForSongNumber24] = useState(false);
  const [modal25ForSongNumber25, setModal25ForSongNumber25] = useState(false);
  const [modal26ForSongNumber26, setModal26ForSongNumber26] = useState(false);
  const [modal27ForSongNumber27, setModal27ForSongNumber27] = useState(false);
  const [modal28ForSongNumber28, setModal28ForSongNumber28] = useState(false);
  const [modal29ForSongNumber29, setModal29ForSongNumber29] = useState(false);
  const [modal30ForSongNumber30, setModal30ForSongNumber30] = useState(false);
  const [modal31ForSongNumber31, setModal31ForSongNumber31] = useState(false);
  const [modal32ForSongNumber32, setModal32ForSongNumber32] = useState(false);
  const [modal33ForSongNumber33, setModal33ForSongNumber33] = useState(false);
  const [modal34ForSongNumber34, setModal34ForSongNumber34] = useState(false);
  const [modal35ForSongNumber35, setModal35ForSongNumber35] = useState(false);
  const [modal36ForSongNumber36, setModal36ForSongNumber36] = useState(false);

  const [modal1ForVideoNumber1, setModal1ForVideoNumber1] = useState(false);
  const [modal2ForVideoNumber2, setModal2ForVideoNumber2] = useState(false);
  const [modal3ForVideoNumber3, setModal3ForVideoNumber3] = useState(false);
  const [modal4ForVideoNumber4, setModal4ForVideoNumber4] = useState(false);
  const [modal5ForVideoNumber5, setModal5ForVideoNumber5] = useState(false);
  const [modal6ForVideoNumber6, setModal6ForVideoNumber6] = useState(false);
  const [modal7ForVideoNumber7, setModal7ForVideoNumber7] = useState(false);
  const [modal8ForVideoNumber8, setModal8ForVideoNumber8] = useState(false);
  const [modal9ForVideoNumber9, setModal9ForVideoNumber9] = useState(false);
  const [modal10ForVideoNumber10, setModal10ForVideoNumber10] = useState(false);
  const [modal11ForVideoNumber11, setModal11ForVideoNumber11] = useState(false);
  const [modal12ForVideoNumber12, setModal12ForVideoNumber12] = useState(false);
  const [modal13ForVideoNumber13, setModal13ForVideoNumber13] = useState(false);
  const [modal14ForVideoNumber14, setModal14ForVideoNumber14] = useState(false);
  const [modal15ForVideoNumber15, setModal15ForVideoNumber15] = useState(false);
  const [modal16ForVideoNumber16, setModal16ForVideoNumber16] = useState(false);
  const [modal17ForVideoNumber17, setModal17ForVideoNumber17] = useState(false);
  const [modal18ForVideoNumber18, setModal18ForVideoNumber18] = useState(false);
  const [modal19ForVideoNumber19, setModal19ForVideoNumber19] = useState(false);
  const [modal20ForVideoNumber20, setModal20ForVideoNumber20] = useState(false);
  const [modal21ForVideoNumber21, setModal21ForVideoNumber21] = useState(false);
  const [modal22ForVideoNumber22, setModal22ForVideoNumber22] = useState(false);
  const [modal23ForVideoNumber23, setModal23ForVideoNumber23] = useState(false);
  const [modal24ForVideoNumber24, setModal24ForVideoNumber24] = useState(false);
  // const [modal25ForVideoNumber25, setModal25ForVideoNumber25] = useState(false);
  // const [modal26ForVideoNumber26, setModal26ForVideoNumber26] = useState(false);
  // const [modal27ForVideoNumber27, setModal27ForVideoNumber27] = useState(false);
  // const [modal28ForVideoNumber28, setModal28ForVideoNumber28] = useState(false);
  // const [modal29ForVideoNumber29, setModal29ForVideoNumber29] = useState(false);
  // const [modal30ForVideoNumber30, setModal30ForVideoNumber30] = useState(false);

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          textColor="primary"
          indicatorColor="primary"
          // aria-label="secondary tabs example"
        >
          <Tab
            className="text-[#fff] dark:text-[#000]"
            label={t("inModalS5.t2")}
            {...a11yProps(0)}
            sx={{
              color: `#fff`,
            }}
          />
          <Tab
            className="text-[#fff] dark:text-[#000]"
            label={t("inModalS5.t3")}
            {...a11yProps(1)}
            sx={{
              color: `#fff`,
            }}
          />
        </Tabs>
      </Box>
      <CustomTabPanel
        value={value}
        index={0}
        className="h-[510px] overflow-auto"
      >
        <div className="all_videos flex flex-col gap-6 text-[#fff] dark:text-[#000]">
          <div className="video_1 flex flex-col gap-2">
            <p className="text-[16px] font-[600]">
              1. {t("songsInModalS5.t1")}
            </p>
            <div className="for_btn">
              <button
                onClick={() => {
                  setModal1ForVideoNumber1(true);
                  console.log(modal1ForVideoNumber1);
                }}
                className="bg-[#fff] text-[#242323] dark:text-[#fff] dark:bg-[#242323] outline-none p-[5px_20px] rounded-[20px] max-w-[230px]"
              >
                {t("inModalS5.t5")}
              </button>
            </div>
          </div>
          <div className="video_2 flex flex-col gap-2">
            <p className="text-[16px] font-[600]">
              2. {t("songsInModalS5.t3")}
            </p>
            <div className="for_btn">
              <button
                onClick={() => {
                  setModal2ForVideoNumber2(true);
                }}
                className="bg-[#fff] text-[#242323] dark:text-[#fff] dark:bg-[#242323] outline-none p-[5px_20px] rounded-[20px] max-w-[230px]"
              >
                {t("inModalS5.t5")}
              </button>
            </div>
          </div>
          <div className="video_3 flex flex-col gap-2">
            <p className="text-[16px] font-[600]">
              3. {t("songsInModalS5.t4")}
            </p>
            <div className="for_btn">
              <button
                onClick={() => {
                  setModal3ForVideoNumber3(true);
                }}
                className="bg-[#fff] text-[#242323] dark:text-[#fff] dark:bg-[#242323] outline-none p-[5px_20px] rounded-[20px] max-w-[230px]"
              >
                {t("inModalS5.t5")}
              </button>
            </div>
          </div>
          <div className="video_4 flex flex-col gap-2">
            <p className="text-[16px] font-[600]">
              4. {t("songsInModalS5.t13")}
            </p>
            <div className="for_btn">
              <button
                onClick={() => {
                  setModal4ForVideoNumber4(true);
                }}
                className="bg-[#fff] text-[#242323] dark:text-[#fff] dark:bg-[#242323] outline-none p-[5px_20px] rounded-[20px] max-w-[230px]"
              >
                {t("inModalS5.t5")}
              </button>
            </div>
          </div>
          <div className="video_5 flex flex-col gap-2">
            <p className="text-[16px] font-[600]">
              5. {t("songsInModalS5.t7")}
            </p>
            <div className="for_btn">
              <button
                onClick={() => {
                  setModal5ForVideoNumber5(true);
                }}
                className="bg-[#fff] text-[#242323] dark:text-[#fff] dark:bg-[#242323] outline-none p-[5px_20px] rounded-[20px] max-w-[230px]"
              >
                {t("inModalS5.t5")}
              </button>
            </div>
          </div>
          <div className="video_6 flex flex-col gap-2">
            <p className="text-[16px] font-[600]">
              6. {t("songsInModalS5.t8")}
            </p>
            <div className="for_btn">
              <button
                onClick={() => {
                  setModal6ForVideoNumber6(true);
                }}
                className="bg-[#fff] text-[#242323] dark:text-[#fff] dark:bg-[#242323] outline-none p-[5px_20px] rounded-[20px] max-w-[230px]"
              >
                {t("inModalS5.t5")}
              </button>
            </div>
          </div>
          <div className="video_7 flex flex-col gap-2">
            <p className="text-[16px] font-[600]">
              7. {t("songsInModalS5.t9")}
            </p>
            <div className="for_btn">
              <button
                onClick={() => {
                  setModal7ForVideoNumber7(true);
                }}
                className="bg-[#fff] text-[#242323] dark:text-[#fff] dark:bg-[#242323] outline-none p-[5px_20px] rounded-[20px] max-w-[230px]"
              >
                {t("inModalS5.t5")}
              </button>
            </div>
          </div>
          <div className="video_8 flex flex-col gap-2">
            <p className="text-[16px] font-[600]">
              8. {t("songsInModalS5.t10")}
            </p>
            <div className="for_btn">
              <button
                onClick={() => {
                  setModal8ForVideoNumber8(true);
                }}
                className="bg-[#fff] text-[#242323] dark:text-[#fff] dark:bg-[#242323] outline-none p-[5px_20px] rounded-[20px] max-w-[230px]"
              >
                {t("inModalS5.t5")}
              </button>
            </div>
          </div>
          <div className="video_9 flex flex-col gap-2">
            <p className="text-[16px] font-[600]">
              9. {t("songsInModalS5.t11")}
            </p>
            <div className="for_btn">
              <button
                onClick={() => {
                  setModal9ForVideoNumber9(true);
                }}
                className="bg-[#fff] text-[#242323] dark:text-[#fff] dark:bg-[#242323] outline-none p-[5px_20px] rounded-[20px] max-w-[230px]"
              >
                {t("inModalS5.t5")}
              </button>
            </div>
          </div>
          <div className="video_10 flex flex-col gap-2">
            <p className="text-[16px] font-[600]">
              10. {t("songsInModalS5.t14")}
            </p>
            <div className="for_btn">
              <button
                onClick={() => {
                  setModal10ForVideoNumber10(true);
                }}
                className="bg-[#fff] text-[#242323] dark:text-[#fff] dark:bg-[#242323] outline-none p-[5px_20px] rounded-[20px] max-w-[230px]"
              >
                {t("inModalS5.t5")}
              </button>
            </div>
          </div>
          {/* <div className="song_11 flex flex-col gap-2">
            <p className="text-[16px] font-[600]">
              11. {t("songsInModalS5.t1")}
            </p>
            <div className="for_btn">
              <button
                onClick={() => {
                  setModal11ForVideoNumber11(true);
                }}
                className="bg-[#fff] text-[#242323] dark:text-[#fff] dark:bg-[#242323] outline-none p-[5px_20px] rounded-[20px] max-w-[230px]"
              >
                {t("inModalS5.t5")}
              </button>
            </div>
          </div>
          <div className="song_12 flex flex-col gap-2">
            <p className="text-[16px] font-[600]">
              12. {t("songsInModalS5.t1")}
            </p>
            <div className="for_btn">
              <button
                onClick={() => {
                  setModal12ForVideoNumber12(true);
                }}
                className="bg-[#fff] text-[#242323] dark:text-[#fff] dark:bg-[#242323] outline-none p-[5px_20px] rounded-[20px] max-w-[230px]"
              >
                {t("inModalS5.t5")}
              </button>
            </div>
          </div> */}

          <Modal
            open={modal1ForVideoNumber1}
            onClose={() => setModal1ForVideoNumber1(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            className="flex justify-center  items-center"
          >
            <Box className="md:w-[520px] sm:w-[84%] rounded-[30px] outline-none bg-[#242323] dark:bg-[#fff] px-[10px] text-[#fff] dark:text-[#000] h-[470px] p-[10px]">
              <div className="for_btn_close_modal_1_for_Videos flex justify-end">
                <button
                  className="text-[39px]"
                  onClick={() => setModal1ForVideoNumber1(false)}
                >
                  &times;
                </button>
              </div>
              <div className="Video_1 flex flex-col gap-5">
                <p className="text-[16px] font-[600]">
                  1. {t("songsInModalS5.t1")}
                </p>
                <iframe
                  className="w-[100%] h-[280px]"
                  src="https://www.youtube.com/embed/ogZW9uIjpYo"
                  title="Камиль Нурматов трек:★Ба Пеш☆ [Official music] Тоҷикистон Ба пеш"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
            </Box>
          </Modal>
          {/* Modal number 1 for the Video number 1 */}
          <Modal
            open={modal2ForVideoNumber2}
            onClose={() => setModal2ForVideoNumber2(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            className="flex justify-center  items-center"
          >
            <Box className="md:w-[520px] sm:w-[84%] rounded-[30px] outline-none bg-[#242323] dark:bg-[#fff] px-[10px] text-[#fff] dark:text-[#000] h-[470px] p-[10px]">
              <div className="for_btn_close_modal_1_for_Videos flex justify-end">
                <button
                  className="text-[39px]"
                  onClick={() => setModal2ForVideoNumber2(false)}
                >
                  &times;
                </button>
              </div>
              <div className="Video_2 flex flex-col gap-2">
                <p className="text-[16px] font-[600]">
                  2. {t("songsInModalS5.t3")}
                </p>
                <iframe
                  className="w-[100%] h-[280px]"
                  src="https://www.youtube.com/embed/Lm-Ocyz756s"
                  title="Камиль Нурматов ☆Клип★Вспомни★"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
            </Box>
          </Modal>
          <Modal
            open={modal3ForVideoNumber3}
            onClose={() => setModal3ForVideoNumber3(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            className="flex justify-center  items-center"
          >
            <Box className="md:w-[520px] sm:w-[84%] rounded-[30px] outline-none bg-[#242323] dark:bg-[#fff] px-[10px] text-[#fff] dark:text-[#000] h-[470px] p-[10px]">
              <div className="for_btn_close_modal_1_for_Videos flex justify-end">
                <button
                  className="text-[39px]"
                  onClick={() => setModal3ForVideoNumber3(false)}
                >
                  &times;
                </button>
              </div>
              <div className="Video_3 flex flex-col gap-2">
                <p className="text-[16px] font-[600]">
                  3. {t("songsInModalS5.t4")}
                </p>
                <iframe
                  className="w-[100%] h-[280px]"
                  src="https://www.youtube.com/embed/28phw4sQcSk"
                  title="Камиль Нурматов-☆Имруз☆
(Премьера трека,2023)"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
            </Box>
          </Modal>
          <Modal
            open={modal4ForVideoNumber4}
            onClose={() => setModal4ForVideoNumber4(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            className="flex justify-center  items-center"
          >
            <Box className="md:w-[520px] sm:w-[84%] rounded-[30px] outline-none bg-[#242323] dark:bg-[#fff] px-[10px] text-[#fff] dark:text-[#000] h-[470px] p-[10px]">
              <div className="for_btn_close_modal_1_for_Videos flex justify-end">
                <button
                  className="text-[39px]"
                  onClick={() => setModal4ForVideoNumber4(false)}
                >
                  &times;
                </button>
              </div>
              <div className="Video_4 flex flex-col gap-2">
                <p className="text-[16px] font-[600]">
                  4. {t("songsInModalS5.t13")}
                </p>
                <iframe
                  className="w-[100%] h-[280px]"
                  src="https://www.youtube.com/embed/jcK1YnALVTg"
                  title="Наврӯз 2023 Тоҷикистон Душанбе Камиль Нурматов бо суруди☆Имруз★ #kamilnurmatov"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
            </Box>
          </Modal>
          <Modal
            open={modal5ForVideoNumber5}
            onClose={() => setModal5ForVideoNumber5(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            className="flex justify-center  items-center"
          >
            <Box className="md:w-[520px] sm:w-[84%] rounded-[30px] outline-none bg-[#242323] dark:bg-[#fff] px-[10px] text-[#fff] dark:text-[#000] h-[470px] p-[10px]">
              <div className="for_btn_close_modal_1_for_Videos flex justify-end">
                <button
                  className="text-[39px]"
                  onClick={() => setModal5ForVideoNumber5(false)}
                >
                  &times;
                </button>
              </div>
              <div className="Video_5 flex flex-col gap-2">
                <p className="text-[16px] font-[600]">
                  5. {t("songsInModalS5.t7")}
                </p>
                <iframe
                  className="w-[100%] h-[280px]"
                  src="https://www.youtube.com/embed/rxHcB5KlCJo"
                  title="Кист сарсупурдаи ватан"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
            </Box>
          </Modal>
          <Modal
            open={modal6ForVideoNumber6}
            onClose={() => setModal6ForVideoNumber6(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            className="flex justify-center  items-center"
          >
            <Box className="md:w-[520px] sm:w-[84%] rounded-[30px] outline-none bg-[#242323] dark:bg-[#fff] px-[10px] text-[#fff] dark:text-[#000] h-[470px] p-[10px]">
              <div className="for_btn_close_modal_1_for_Videos flex justify-end">
                <button
                  className="text-[39px]"
                  onClick={() => setModal6ForVideoNumber6(false)}
                >
                  &times;
                </button>
              </div>
              <div className="Video_6 flex flex-col gap-2">
                <p className="text-[16px] font-[600]">
                  6. {t("songsInModalS5.t8")}
                </p>
                <iframe
                  className="w-[100%] h-[280px]"
                  src="https://www.youtube.com/embed/-FwooM8KLto"
                  title="Камиль Нурматов~☆Мой рай★ @ryini"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
            </Box>
          </Modal>
          <Modal
            open={modal7ForVideoNumber7}
            onClose={() => setModal7ForVideoNumber7(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            className="flex justify-center  items-center"
          >
            <Box className="md:w-[520px] sm:w-[84%] rounded-[30px] outline-none bg-[#242323] dark:bg-[#fff] px-[10px] text-[#fff] dark:text-[#000] h-[470px] p-[10px]">
              <div className="for_btn_close_modal_1_for_Videos flex justify-end">
                <button
                  className="text-[39px]"
                  onClick={() => setModal7ForVideoNumber7(false)}
                >
                  &times;
                </button>
              </div>
              <div className="Video_7 flex flex-col gap-2">
                <p className="text-[16px] font-[600]">
                  7. {t("songsInModalS5.t9")}
                </p>
                <iframe
                  className="w-[100%] h-[280px]"
                  src="https://www.youtube.com/embed/jC5OQ1hiWv0"
                  title="Камиль Нурматов-☆Потерпи☆(Премьера трека,2023)"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
            </Box>
          </Modal>
          <Modal
            open={modal8ForVideoNumber8}
            onClose={() => setModal8ForVideoNumber8(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            className="flex justify-center  items-center"
          >
            <Box className="md:w-[520px] sm:w-[84%] rounded-[30px] outline-none bg-[#242323] dark:bg-[#fff] px-[10px] text-[#fff] dark:text-[#000] h-[470px] p-[10px]">
              <div className="for_btn_close_modal_1_for_Videos flex justify-end">
                <button
                  className="text-[39px]"
                  onClick={() => setModal8ForVideoNumber8(false)}
                >
                  &times;
                </button>
              </div>
              <div className="Video_8 flex flex-col gap-2">
                <p className="text-[16px] font-[600]">
                  8. {t("songsInModalS5.t10")}
                </p>
                <iframe
                  className="w-[100%] h-[280px]"
                  src="https://www.youtube.com/embed/6X-1QLibZRA"
                  title="Хит 2023 Хушбахтам Камиль Нурматов KAMIL NURMATOV 1.9 млн"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
            </Box>
          </Modal>
          <Modal
            open={modal9ForVideoNumber9}
            onClose={() => setModal9ForVideoNumber9(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            className="flex justify-center  items-center"
          >
            <Box className="md:w-[520px] sm:w-[84%] rounded-[30px] outline-none bg-[#242323] dark:bg-[#fff] px-[10px] text-[#fff] dark:text-[#000] h-[470px] p-[10px]">
              <div className="for_btn_close_modal_1_for_Videos flex justify-end">
                <button
                  className="text-[39px]"
                  onClick={() => setModal9ForVideoNumber9(false)}
                >
                  &times;
                </button>
              </div>
              <div className="Video_9 flex flex-col gap-2">
                <p className="text-[16px] font-[600]">
                  9. {t("songsInModalS5.t11")}
                </p>
                <iframe
                  className="w-[100%] h-[280px]"
                  src="https://www.youtube.com/embed/eV1x6ivWBiU"
                  title="Камиль Нурматов трек ★Ягона☆ [Official music]"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
            </Box>
          </Modal>
          <Modal
            open={modal10ForVideoNumber10}
            onClose={() => setModal10ForVideoNumber10(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            className="flex justify-center  items-center"
          >
            <Box className="md:w-[520px] sm:w-[84%] rounded-[30px] outline-none bg-[#242323] dark:bg-[#fff] px-[10px] text-[#fff] dark:text-[#000] h-[470px] p-[10px]">
              <div className="for_btn_close_modal_1_for_Videos flex justify-end">
                <button
                  className="text-[39px]"
                  onClick={() => setModal10ForVideoNumber10(false)}
                >
                  &times;
                </button>
              </div>
              <div className="Video_10 flex flex-col gap-2">
                <p className="text-[16px] font-[600]">
                  10. {t("songsInModalS5.t14")}
                </p>
                <iframe
                  className="w-[100%] h-[280px]"
                  src="https://www.youtube.com/embed/2GWywQm_EQs"
                  title="Камиль Нурматов☆Ханда куни★ #kamilnurmatov"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
            </Box>
          </Modal>
          {/* <Modal
            open={modal11ForVideoNumber11}
            onClose={() => setModal11ForVideoNumber11(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            className="flex justify-center  items-center"
          >
            <Box className="md:w-[520px] sm:w-[84%] rounded-[30px] outline-none bg-[#242323] dark:bg-[#fff] px-[10px] text-[#fff] dark:text-[#000] h-[470px] p-[10px]">
              <div className="for_btn_close_modal_1_for_Videos flex justify-end">
                <button
                  className="text-[39px]"
                  onClick={() => setModal11ForVideoNumber11(false)}
                >
                  &times;
                </button>
              </div>
              <div className="Video_11 flex flex-col gap-2">
                <p className="text-[16px] font-[600]">
                  11. {t("songsInModalS5.t11")}
                </p>
              </div>
            </Box>
          </Modal>
          <Modal
            open={modal12ForVideoNumber12}
            onClose={() => setModal12ForVideoNumber12(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            className="flex justify-center  items-center"
          >
            <Box className="md:w-[520px] sm:w-[84%] rounded-[30px] outline-none bg-[#242323] dark:bg-[#fff] px-[10px] text-[#fff] dark:text-[#000] h-[470px] p-[10px]">
              <div className="for_btn_close_modal_1_for_Videos flex justify-end">
                <button
                  className="text-[39px]"
                  onClick={() => setModal12ForVideoNumber12(false)}
                >
                  &times;
                </button>
              </div>
              <div className="Video_12 flex flex-col gap-2">
                <p className="text-[16px] font-[600]">
                  12. {t("VideosInModalS5.t12")}
                </p>
              </div>
            </Box>
          </Modal> */}
        </div>
      </CustomTabPanel>
      <CustomTabPanel
        value={value}
        index={1}
        className="h-[510px] overflow-auto"
      >
        <div className="for_all_songs flex flex-col gap-5 text-[#fff] dark:text-[#000]">
          <div className="song_1 flex flex-col gap-2">
            <p className="text-[16px] font-[600]">
              1. {t("songsInModalS5.t1")}
            </p>
            <div className="for_btn">
              <button
                onClick={() => {
                  setModal1ForSongNumber1(true);
                }}
                className="bg-[#fff] text-[#242323] dark:text-[#fff] dark:bg-[#242323] outline-none p-[5px_20px] rounded-[20px] max-w-[230px]"
              >
                {t("inModalS5.t4")}
              </button>
            </div>
          </div>
          <div className="song_2 flex flex-col gap-2">
            <p className="text-[16px] font-[600]">
              2. {t("songsInModalS5.t2")}
            </p>
            <div className="for_btn">
              <button
                onClick={() => {
                  setModal2ForSongNumber2(true);
                }}
                className="bg-[#fff] text-[#242323] dark:text-[#fff] dark:bg-[#242323] outline-none p-[5px_20px] rounded-[20px] max-w-[230px]"
              >
                {t("inModalS5.t4")}
              </button>
            </div>
          </div>
          <div className="song_3 flex flex-col gap-2">
            <p className="text-[16px] font-[600]">
              3. {t("songsInModalS5.t3")}
            </p>
            <div className="for_btn">
              <button
                onClick={() => {
                  setModal3ForSongNumber3(true);
                }}
                className="bg-[#fff] text-[#242323] dark:text-[#fff] dark:bg-[#242323] outline-none p-[5px_20px] rounded-[20px] max-w-[230px]"
              >
                {t("inModalS5.t4")}
              </button>
            </div>
          </div>
          <div className="song_4 flex flex-col gap-2">
            <p className="text-[16px] font-[600]">
              4. {t("songsInModalS5.t4")}
            </p>
            <div className="for_btn">
              <button
                onClick={() => {
                  setModal4ForSongNumber4(true);
                }}
                className="bg-[#fff] text-[#242323] dark:text-[#fff] dark:bg-[#242323] outline-none p-[5px_20px] rounded-[20px] max-w-[230px]"
              >
                {t("inModalS5.t4")}
              </button>
            </div>
          </div>
          <div className="song_5 flex flex-col gap-2">
            <p className="text-[16px] font-[600]">
              5. {t("songsInModalS5.t5")}
            </p>
            <div className="for_btn">
              <button
                onClick={() => {
                  setModal5ForSongNumber5(true);
                }}
                className="bg-[#fff] text-[#242323] dark:text-[#fff] dark:bg-[#242323] outline-none p-[5px_20px] rounded-[20px] max-w-[230px]"
              >
                {t("inModalS5.t4")}
              </button>
            </div>
          </div>
          <div className="song_6 flex flex-col gap-2">
            <p className="text-[16px] font-[600]">
              6. {t("songsInModalS5.t6")}
            </p>
            <div className="for_btn">
              <button
                onClick={() => {
                  setModal6ForSongNumber6(true);
                }}
                className="bg-[#fff] text-[#242323] dark:text-[#fff] dark:bg-[#242323] outline-none p-[5px_20px] rounded-[20px] max-w-[230px]"
              >
                {t("inModalS5.t4")}
              </button>
            </div>
          </div>
          <div className="song_7 flex flex-col gap-2">
            <p className="text-[16px] font-[600]">
              7. {t("songsInModalS5.t7")}
            </p>
            <div className="for_btn">
              <button
                onClick={() => {
                  setModal7ForSongNumber7(true);
                }}
                className="bg-[#fff] text-[#242323] dark:text-[#fff] dark:bg-[#242323] outline-none p-[5px_20px] rounded-[20px] max-w-[230px]"
              >
                {t("inModalS5.t4")}
              </button>
            </div>
          </div>
          <div className="song_8 flex flex-col gap-2">
            <p className="text-[16px] font-[600]">
              8. {t("songsInModalS5.t8")}
            </p>
            <div className="for_btn">
              <button
                onClick={() => {
                  setModal8ForSongNumber8(true);
                }}
                className="bg-[#fff] text-[#242323] dark:text-[#fff] dark:bg-[#242323] outline-none p-[5px_20px] rounded-[20px] max-w-[230px]"
              >
                {t("inModalS5.t4")}
              </button>
            </div>
          </div>
          <div className="song_9 flex flex-col gap-2">
            <p className="text-[16px] font-[600]">
              9. {t("songsInModalS5.t9")}
            </p>
            <div className="for_btn">
              <button
                onClick={() => {
                  setModal9ForSongNumber9(true);
                }}
                className="bg-[#fff] text-[#242323] dark:text-[#fff] dark:bg-[#242323] outline-none p-[5px_20px] rounded-[20px] max-w-[230px]"
              >
                {t("inModalS5.t4")}
              </button>
            </div>
          </div>
          <div className="song_10 flex flex-col gap-2">
            <p className="text-[16px] font-[600]">
              10. {t("songsInModalS5.t10")}
            </p>
            <div className="for_btn">
              <button
                onClick={() => {
                  setModal10ForSongNumber10(true);
                }}
                className="bg-[#fff] text-[#242323] dark:text-[#fff] dark:bg-[#242323] outline-none p-[5px_20px] rounded-[20px] max-w-[230px]"
              >
                {t("inModalS5.t4")}
              </button>
            </div>
          </div>
          <div className="song_11 flex flex-col gap-2">
            <p className="text-[16px] font-[600]">
              11. {t("songsInModalS5.t11")}
            </p>
            <div className="for_btn">
              <button
                onClick={() => {
                  setModal11ForSongNumber11(true);
                }}
                className="bg-[#fff] text-[#242323] dark:text-[#fff] dark:bg-[#242323] outline-none p-[5px_20px] rounded-[20px] max-w-[230px]"
              >
                {t("inModalS5.t4")}
              </button>
            </div>
          </div>
          <div className="song_12 flex flex-col gap-2">
            <p className="text-[16px] font-[600]">
              12. {t("songsInModalS5.t12")}
            </p>
            <div className="for_btn">
              <button
                onClick={() => {
                  setModal12ForSongNumber12(true);
                }}
                className="bg-[#fff] text-[#242323] dark:text-[#fff] dark:bg-[#242323] outline-none p-[5px_20px] rounded-[20px] max-w-[230px]"
              >
                {t("inModalS5.t4")}
              </button>
            </div>
          </div>

          <div className="song_13 flex flex-col gap-2">
            <p className="text-[16px] font-[600]">
              13. {t("songsInModalS5.t13")}
            </p>
            <div className="for_btn">
              <button
                onClick={() => {
                  setModal13ForSongNumber13(true);
                }}
                className="bg-[#fff] text-[#242323] dark:text-[#fff] dark:bg-[#242323] outline-none p-[5px_20px] rounded-[20px] max-w-[230px]"
              >
                {t("inModalS5.t4")}
              </button>
            </div>
          </div>
          <div className="song_14 flex flex-col gap-2">
            <p className="text-[16px] font-[600]">
              14. {t("songsInModalS5.t14")}
            </p>
            <div className="for_btn">
              <button
                onClick={() => {
                  setModal14ForSongNumber14(true);
                }}
                className="bg-[#fff] text-[#242323] dark:text-[#fff] dark:bg-[#242323] outline-none p-[5px_20px] rounded-[20px] max-w-[230px]"
              >
                {t("inModalS5.t4")}
              </button>
            </div>
          </div>
          <div className="song_15 flex flex-col gap-2">
            <p className="text-[16px] font-[600]">
              15. {t("songsInModalS5.t15")}
            </p>
            <div className="for_btn">
              <button
                onClick={() => {
                  setModal15ForSongNumber15(true);
                }}
                className="bg-[#fff] text-[#242323] dark:text-[#fff] dark:bg-[#242323] outline-none p-[5px_20px] rounded-[20px] max-w-[230px]"
              >
                {t("inModalS5.t4")}
              </button>
            </div>
          </div>
          <div className="song_16 flex flex-col gap-2">
            <p className="text-[16px] font-[600]">
              16. {t("songsInModalS5.t16")}
            </p>
            <div className="for_btn">
              <button
                onClick={() => {
                  setModal16ForSongNumber16(true);
                }}
                className="bg-[#fff] text-[#242323] dark:text-[#fff] dark:bg-[#242323] outline-none p-[5px_20px] rounded-[20px] max-w-[230px]"
              >
                {t("inModalS5.t4")}
              </button>
            </div>
          </div>
          <div className="song_17 flex flex-col gap-2">
            <p className="text-[16px] font-[600]">
              17. {t("songsInModalS5.t17")}
            </p>
            <div className="for_btn">
              <button
                onClick={() => {
                  setModal17ForSongNumber17(true);
                }}
                className="bg-[#fff] text-[#242323] dark:text-[#fff] dark:bg-[#242323] outline-none p-[5px_20px] rounded-[20px] max-w-[230px]"
              >
                {t("inModalS5.t4")}
              </button>
            </div>
          </div>
          <div className="song_18 flex flex-col gap-2">
            <p className="text-[16px] font-[600]">
              18. {t("songsInModalS5.t18")}
            </p>
            <div className="for_btn">
              <button
                onClick={() => {
                  setModal18ForSongNumber18(true);
                }}
                className="bg-[#fff] text-[#242323] dark:text-[#fff] dark:bg-[#242323] outline-none p-[5px_20px] rounded-[20px] max-w-[230px]"
              >
                {t("inModalS5.t4")}
              </button>
            </div>
          </div>
          <div className="song_19 flex flex-col gap-2">
            <p className="text-[16px] font-[600]">
              19. {t("songsInModalS5.t19")}
            </p>
            <div className="for_btn">
              <button
                onClick={() => {
                  setModal19ForSongNumber19(true);
                }}
                className="bg-[#fff] text-[#242323] dark:text-[#fff] dark:bg-[#242323] outline-none p-[5px_20px] rounded-[20px] max-w-[230px]"
              >
                {t("inModalS5.t4")}
              </button>
            </div>
          </div>
          <div className="song_20 flex flex-col gap-2">
            <p className="text-[16px] font-[600]">
              20. {t("songsInModalS5.t20")}
            </p>
            <div className="for_btn">
              <button
                onClick={() => {
                  setModal20ForSongNumber20(true);
                }}
                className="bg-[#fff] text-[#242323] dark:text-[#fff] dark:bg-[#242323] outline-none p-[5px_20px] rounded-[20px] max-w-[230px]"
              >
                {t("inModalS5.t4")}
              </button>
            </div>
          </div>
          <div className="song_21 flex flex-col gap-2">
            <p className="text-[16px] font-[600]">
              21. {t("songsInModalS5.t21")}
            </p>
            <div className="for_btn">
              <button
                onClick={() => {
                  setModal21ForSongNumber21(true);
                }}
                className="bg-[#fff] text-[#242323] dark:text-[#fff] dark:bg-[#242323] outline-none p-[5px_20px] rounded-[20px] max-w-[230px]"
              >
                {t("inModalS5.t4")}
              </button>
            </div>
          </div>
          <div className="song_22 flex flex-col gap-2">
            <p className="text-[16px] font-[600]">
              22. {t("songsInModalS5.t22")}
            </p>
            <div className="for_btn">
              <button
                onClick={() => {
                  setModal22ForSongNumber22(true);
                }}
                className="bg-[#fff] text-[#242323] dark:text-[#fff] dark:bg-[#242323] outline-none p-[5px_20px] rounded-[20px] max-w-[230px]"
              >
                {t("inModalS5.t4")}
              </button>
            </div>
          </div>
          <div className="song_23 flex flex-col gap-2">
            <p className="text-[16px] font-[600]">
              23. {t("songsInModalS5.t23")}
            </p>
            <div className="for_btn">
              <button
                onClick={() => {
                  setModal23ForSongNumber23(true);
                }}
                className="bg-[#fff] text-[#242323] dark:text-[#fff] dark:bg-[#242323] outline-none p-[5px_20px] rounded-[20px] max-w-[230px]"
              >
                {t("inModalS5.t4")}
              </button>
            </div>
          </div>
          <div className="song_24 flex flex-col gap-2">
            <p className="text-[16px] font-[600]">
              24. {t("songsInModalS5.t24")}
            </p>
            <div className="for_btn">
              <button
                onClick={() => {
                  setModal24ForSongNumber24(true);
                }}
                className="bg-[#fff] text-[#242323] dark:text-[#fff] dark:bg-[#242323] outline-none p-[5px_20px] rounded-[20px] max-w-[230px]"
              >
                {t("inModalS5.t4")}
              </button>
            </div>
          </div>
          <div className="song_25 flex flex-col gap-2">
            <p className="text-[16px] font-[600]">
              25. {t("songsInModalS5.t25")}
            </p>
            <div className="for_btn">
              <button
                onClick={() => {
                  setModal25ForSongNumber25(true);
                }}
                className="bg-[#fff] text-[#242323] dark:text-[#fff] dark:bg-[#242323] outline-none p-[5px_20px] rounded-[20px] max-w-[230px]"
              >
                {t("inModalS5.t4")}
              </button>
            </div>
          </div>
          <div className="song_26 flex flex-col gap-2">
            <p className="text-[16px] font-[600]">
              26. {t("songsInModalS5.t26")}
            </p>
            <div className="for_btn">
              <button
                onClick={() => {
                  setModal26ForSongNumber26(true);
                }}
                className="bg-[#fff] text-[#242323] dark:text-[#fff] dark:bg-[#242323] outline-none p-[5px_20px] rounded-[20px] max-w-[230px]"
              >
                {t("inModalS5.t4")}
              </button>
            </div>
          </div>
          <div className="song_27 flex flex-col gap-2">
            <p className="text-[16px] font-[600]">
              27. {t("songsInModalS5.t27")}
            </p>
            <div className="for_btn">
              <button
                onClick={() => {
                  setModal27ForSongNumber27(true);
                }}
                className="bg-[#fff] text-[#242323] dark:text-[#fff] dark:bg-[#242323] outline-none p-[5px_20px] rounded-[20px] max-w-[230px]"
              >
                {t("inModalS5.t4")}
              </button>
            </div>
          </div>
          <div className="song_28 flex flex-col gap-2">
            <p className="text-[16px] font-[600]">
              28. {t("songsInModalS5.t28")}
            </p>
            <div className="for_btn">
              <button
                onClick={() => {
                  setModal28ForSongNumber28(true);
                }}
                className="bg-[#fff] text-[#242323] dark:text-[#fff] dark:bg-[#242323] outline-none p-[5px_20px] rounded-[20px] max-w-[230px]"
              >
                {t("inModalS5.t4")}
              </button>
            </div>
          </div>
          <div className="song_29 flex flex-col gap-2">
            <p className="text-[16px] font-[600]">
              29. {t("songsInModalS5.t29")}
            </p>
            <div className="for_btn">
              <button
                onClick={() => {
                  setModal29ForSongNumber29(true);
                }}
                className="bg-[#fff] text-[#242323] dark:text-[#fff] dark:bg-[#242323] outline-none p-[5px_20px] rounded-[20px] max-w-[230px]"
              >
                {t("inModalS5.t4")}
              </button>
            </div>
          </div>
          <div className="song_30 flex flex-col gap-2">
            <p className="text-[16px] font-[600]">
              30. {t("songsInModalS5.t30")}
            </p>
            <div className="for_btn">
              <button
                onClick={() => {
                  setModal30ForSongNumber30(true);
                }}
                className="bg-[#fff] text-[#242323] dark:text-[#fff] dark:bg-[#242323] outline-none p-[5px_20px] rounded-[20px] max-w-[230px]"
              >
                {t("inModalS5.t4")}
              </button>
            </div>
          </div>
          <div className="song_31 flex flex-col gap-2">
            <p className="text-[16px] font-[600]">
              31. {t("songsInModalS5.t31")}
            </p>
            <div className="for_btn">
              <button
                onClick={() => {
                  setModal31ForSongNumber31(true);
                }}
                className="bg-[#fff] text-[#242323] dark:text-[#fff] dark:bg-[#242323] outline-none p-[5px_20px] rounded-[20px] max-w-[230px]"
              >
                {t("inModalS5.t4")}
              </button>
            </div>
          </div>
          <div className="song_32 flex flex-col gap-2">
            <p className="text-[16px] font-[600]">
              32. {t("songsInModalS5.t32")}
            </p>
            <div className="for_btn">
              <button
                onClick={() => {
                  setModal32ForSongNumber32(true);
                }}
                className="bg-[#fff] text-[#242323] dark:text-[#fff] dark:bg-[#242323] outline-none p-[5px_20px] rounded-[20px] max-w-[230px]"
              >
                {t("inModalS5.t4")}
              </button>
            </div>
          </div>
          <div className="song_33 flex flex-col gap-2">
            <p className="text-[16px] font-[600]">
              33. {t("songsInModalS5.t33")}
            </p>
            <div className="for_btn">
              <button
                onClick={() => {
                  setModal33ForSongNumber33(true);
                }}
                className="bg-[#fff] text-[#242323] dark:text-[#fff] dark:bg-[#242323] outline-none p-[5px_20px] rounded-[20px] max-w-[230px]"
              >
                {t("inModalS5.t4")}
              </button>
            </div>
          </div>
          <div className="song_34 flex flex-col gap-2">
            <p className="text-[16px] font-[600]">
              34. {t("songsInModalS5.t34")}
            </p>
            <div className="for_btn">
              <button
                onClick={() => {
                  setModal34ForSongNumber34(true);
                }}
                className="bg-[#fff] text-[#242323] dark:text-[#fff] dark:bg-[#242323] outline-none p-[5px_20px] rounded-[20px] max-w-[230px]"
              >
                {t("inModalS5.t4")}
              </button>
            </div>
          </div>
          <div className="song_35 flex flex-col gap-2">
            <p className="text-[16px] font-[600]">
              35. {t("songsInModalS5.t35")}
            </p>
            <div className="for_btn">
              <button
                onClick={() => {
                  setModal35ForSongNumber35(true);
                }}
                className="bg-[#fff] text-[#242323] dark:text-[#fff] dark:bg-[#242323] outline-none p-[5px_20px] rounded-[20px] max-w-[230px]"
              >
                {t("inModalS5.t4")}
              </button>
            </div>
          </div>
          <div className="song_36 flex flex-col gap-2">
            <p className="text-[16px] font-[600]">
              36. {t("songsInModalS5.t36")}
            </p>
            <div className="for_btn">
              <button
                onClick={() => {
                  setModal36ForSongNumber36(true);
                }}
                className="bg-[#fff] text-[#242323] dark:text-[#fff] dark:bg-[#242323] outline-none p-[5px_20px] rounded-[20px] max-w-[230px]"
              >
                {t("inModalS5.t4")}
              </button>
            </div>
          </div>

          {/* Modal number 1 for the song number 1 */}
          <Modal
            open={modal1ForSongNumber1}
            onClose={() => setModal1ForSongNumber1(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            className="flex justify-center  items-center"
          >
            <Box className="md:w-[520px] sm:w-[84%] rounded-[30px] outline-none bg-[#242323] dark:bg-[#fff] px-[10px] text-[#fff] dark:text-[#000] h-[200px] p-[10px]">
              <div className="for_btn_close_modal_1_for_songs flex justify-end">
                <button
                  className="text-[39px]"
                  onClick={() => setModal1ForSongNumber1(false)}
                >
                  &times;
                </button>
              </div>
              <div className="song_1 flex flex-col gap-5">
                <p className="text-[16px] font-[600]">
                  1. {t("songsInModalS5.t1")}
                </p>
                <audio
                  src={songNumber1}
                  className="w-[100%]"
                  controls
                  id="chosenSong"
                ></audio>
              </div>
            </Box>
          </Modal>
          {/* Modal number 1 for the song number 1 */}
          <Modal
            open={modal2ForSongNumber2}
            onClose={() => setModal2ForSongNumber2(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            className="flex justify-center  items-center"
          >
            <Box className="md:w-[520px] sm:w-[84%] rounded-[30px] outline-none bg-[#242323] dark:bg-[#fff] px-[10px] text-[#fff] dark:text-[#000] h-[200px] p-[10px]">
              <div className="for_btn_close_modal_1_for_songs flex justify-end">
                <button
                  className="text-[39px]"
                  onClick={() => setModal2ForSongNumber2(false)}
                >
                  &times;
                </button>
              </div>
              <div className="song_2 flex flex-col gap-2">
                <p className="text-[16px] font-[600]">
                  2. {t("songsInModalS5.t2")}
                </p>
                <audio
                  src={songNumber2}
                  className="w-[100%]"
                  controls
                  id="chosenSong"
                ></audio>
              </div>
            </Box>
          </Modal>
          <Modal
            open={modal3ForSongNumber3}
            onClose={() => setModal3ForSongNumber3(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            className="flex justify-center  items-center"
          >
            <Box className="md:w-[520px] sm:w-[84%] rounded-[30px] outline-none bg-[#242323] dark:bg-[#fff] px-[10px] text-[#fff] dark:text-[#000] h-[200px] p-[10px]">
              <div className="for_btn_close_modal_1_for_songs flex justify-end">
                <button
                  className="text-[39px]"
                  onClick={() => setModal3ForSongNumber3(false)}
                >
                  &times;
                </button>
              </div>
              <div className="song_3 flex flex-col gap-2">
                <p className="text-[16px] font-[600]">
                  3. {t("songsInModalS5.t3")}
                </p>
                <audio
                  src={songNumber3}
                  className="w-[100%]"
                  controls
                  id="chosenSong"
                ></audio>
              </div>
            </Box>
          </Modal>
          <Modal
            open={modal4ForSongNumber4}
            onClose={() => setModal4ForSongNumber4(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            className="flex justify-center  items-center"
          >
            <Box className="md:w-[520px] sm:w-[84%] rounded-[30px] outline-none bg-[#242323] dark:bg-[#fff] px-[10px] text-[#fff] dark:text-[#000] h-[200px] p-[10px]">
              <div className="for_btn_close_modal_1_for_songs flex justify-end">
                <button
                  className="text-[39px]"
                  onClick={() => setModal4ForSongNumber4(false)}
                >
                  &times;
                </button>
              </div>
              <div className="song_4 flex flex-col gap-2">
                <p className="text-[16px] font-[600]">
                  4. {t("songsInModalS5.t4")}
                </p>
                <audio
                  src={songNumber4}
                  className="w-[100%]"
                  controls
                  id="chosenSong"
                ></audio>
              </div>
            </Box>
          </Modal>
          <Modal
            open={modal5ForSongNumber5}
            onClose={() => setModal5ForSongNumber5(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            className="flex justify-center  items-center"
          >
            <Box className="md:w-[520px] sm:w-[84%] rounded-[30px] outline-none bg-[#242323] dark:bg-[#fff] px-[10px] text-[#fff] dark:text-[#000] h-[200px] p-[10px]">
              <div className="for_btn_close_modal_1_for_songs flex justify-end">
                <button
                  className="text-[39px]"
                  onClick={() => setModal5ForSongNumber5(false)}
                >
                  &times;
                </button>
              </div>
              <div className="song_5 flex flex-col gap-2">
                <p className="text-[16px] font-[600]">
                  5. {t("songsInModalS5.t5")}
                </p>
                <audio
                  src={songNumber5}
                  className="w-[100%]"
                  controls
                  id="chosenSong"
                ></audio>
              </div>
            </Box>
          </Modal>
          <Modal
            open={modal6ForSongNumber6}
            onClose={() => setModal6ForSongNumber6(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            className="flex justify-center  items-center"
          >
            <Box className="md:w-[520px] sm:w-[84%] rounded-[30px] outline-none bg-[#242323] dark:bg-[#fff] px-[10px] text-[#fff] dark:text-[#000] h-[200px] p-[10px]">
              <div className="for_btn_close_modal_1_for_songs flex justify-end">
                <button
                  className="text-[39px]"
                  onClick={() => setModal6ForSongNumber6(false)}
                >
                  &times;
                </button>
              </div>
              <div className="song_6 flex flex-col gap-2">
                <p className="text-[16px] font-[600]">
                  6. {t("songsInModalS5.t6")}
                </p>
                <audio
                  src={songNumber6}
                  className="w-[100%]"
                  controls
                  id="chosenSong"
                ></audio>
              </div>
            </Box>
          </Modal>
          <Modal
            open={modal7ForSongNumber7}
            onClose={() => setModal7ForSongNumber7(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            className="flex justify-center  items-center"
          >
            <Box className="md:w-[520px] sm:w-[84%] rounded-[30px] outline-none bg-[#242323] dark:bg-[#fff] px-[10px] text-[#fff] dark:text-[#000] h-[200px] p-[10px]">
              <div className="for_btn_close_modal_1_for_songs flex justify-end">
                <button
                  className="text-[39px]"
                  onClick={() => setModal7ForSongNumber7(false)}
                >
                  &times;
                </button>
              </div>
              <div className="song_7 flex flex-col gap-2">
                <p className="text-[16px] font-[600]">
                  7. {t("songsInModalS5.t7")}
                </p>
                <audio
                  src={songNumber7}
                  className="w-[100%]"
                  controls
                  id="chosenSong"
                ></audio>
              </div>
            </Box>
          </Modal>
          <Modal
            open={modal8ForSongNumber8}
            onClose={() => setModal8ForSongNumber8(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            className="flex justify-center  items-center"
          >
            <Box className="md:w-[520px] sm:w-[84%] rounded-[30px] outline-none bg-[#242323] dark:bg-[#fff] px-[10px] text-[#fff] dark:text-[#000] h-[200px] p-[10px]">
              <div className="for_btn_close_modal_1_for_songs flex justify-end">
                <button
                  className="text-[39px]"
                  onClick={() => setModal8ForSongNumber8(false)}
                >
                  &times;
                </button>
              </div>
              <div className="song_8 flex flex-col gap-2">
                <p className="text-[16px] font-[600]">
                  8. {t("songsInModalS5.t8")}
                </p>
                <audio
                  src={songNumber8}
                  className="w-[100%]"
                  controls
                  id="chosenSong"
                ></audio>
              </div>
            </Box>
          </Modal>
          <Modal
            open={modal9ForSongNumber9}
            onClose={() => setModal9ForSongNumber9(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            className="flex justify-center  items-center"
          >
            <Box className="md:w-[520px] sm:w-[84%] rounded-[30px] outline-none bg-[#242323] dark:bg-[#fff] px-[10px] text-[#fff] dark:text-[#000] h-[200px] p-[10px]">
              <div className="for_btn_close_modal_1_for_songs flex justify-end">
                <button
                  className="text-[39px]"
                  onClick={() => setModal9ForSongNumber9(false)}
                >
                  &times;
                </button>
              </div>
              <div className="song_9 flex flex-col gap-2">
                <p className="text-[16px] font-[600]">
                  9. {t("songsInModalS5.t9")}
                </p>
                <audio
                  src={songNumber9}
                  className="w-[100%]"
                  controls
                  id="chosenSong"
                ></audio>
              </div>
            </Box>
          </Modal>
          <Modal
            open={modal10ForSongNumber10}
            onClose={() => setModal10ForSongNumber10(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            className="flex justify-center  items-center"
          >
            <Box className="md:w-[520px] sm:w-[84%] rounded-[30px] outline-none bg-[#242323] dark:bg-[#fff] px-[10px] text-[#fff] dark:text-[#000] h-[200px] p-[10px]">
              <div className="for_btn_close_modal_1_for_songs flex justify-end">
                <button
                  className="text-[39px]"
                  onClick={() => setModal10ForSongNumber10(false)}
                >
                  &times;
                </button>
              </div>
              <div className="song_10 flex flex-col gap-2">
                <p className="text-[16px] font-[600]">
                  10. {t("songsInModalS5.t10")}
                </p>
                <audio
                  src={songNumber10}
                  className="w-[100%]"
                  controls
                  id="chosenSong"
                ></audio>
              </div>
            </Box>
          </Modal>
          <Modal
            open={modal11ForSongNumber11}
            onClose={() => setModal11ForSongNumber11(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            className="flex justify-center  items-center"
          >
            <Box className="md:w-[520px] sm:w-[84%] rounded-[30px] outline-none bg-[#242323] dark:bg-[#fff] px-[10px] text-[#fff] dark:text-[#000] h-[200px] p-[10px]">
              <div className="for_btn_close_modal_1_for_songs flex justify-end">
                <button
                  className="text-[39px]"
                  onClick={() => setModal11ForSongNumber11(false)}
                >
                  &times;
                </button>
              </div>
              <div className="song_11 flex flex-col gap-2">
                <p className="text-[16px] font-[600]">
                  11. {t("songsInModalS5.t11")}
                </p>
                <audio
                  src={songNumber11}
                  className="w-[100%]"
                  controls
                  id="chosenSong"
                ></audio>
              </div>
            </Box>
          </Modal>
          <Modal
            open={modal12ForSongNumber12}
            onClose={() => setModal12ForSongNumber12(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            className="flex justify-center  items-center"
          >
            <Box className="md:w-[520px] sm:w-[84%] rounded-[30px] outline-none bg-[#242323] dark:bg-[#fff] px-[10px] text-[#fff] dark:text-[#000] h-[200px] p-[10px]">
              <div className="for_btn_close_modal_1_for_songs flex justify-end">
                <button
                  className="text-[39px]"
                  onClick={() => setModal12ForSongNumber12(false)}
                >
                  &times;
                </button>
              </div>
              <div className="song_12 flex flex-col gap-2">
                <p className="text-[16px] font-[600]">
                  12. {t("songsInModalS5.t12")}
                </p>
                <audio
                  src={songNumber12}
                  className="w-[100%]"
                  controls
                  id="chosenSong"
                ></audio>
              </div>
            </Box>
          </Modal>
          <Modal
            open={modal13ForSongNumber13}
            onClose={() => setModal13ForSongNumber13(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            className="flex justify-center  items-center"
          >
            <Box className="md:w-[520px] sm:w-[84%] rounded-[30px] outline-none bg-[#242323] dark:bg-[#fff] px-[10px] text-[#fff] dark:text-[#000] h-[200px] p-[10px]">
              <div className="for_btn_close_modal_1_for_songs flex justify-end">
                <button
                  className="text-[39px]"
                  onClick={() => setModal13ForSongNumber13(false)}
                >
                  &times;
                </button>
              </div>
              <div className="song_13 flex flex-col gap-2">
                <p className="text-[16px] font-[600]">
                  13. {t("songsInModalS5.t13")}
                </p>
                <audio
                  src={songNumber13}
                  className="w-[100%]"
                  controls
                  id="chosenSong"
                ></audio>
              </div>
            </Box>
          </Modal>
          <Modal
            open={modal14ForSongNumber14}
            onClose={() => setModal14ForSongNumber14(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            className="flex justify-center  items-center"
          >
            <Box className="md:w-[520px] sm:w-[84%] rounded-[30px] outline-none bg-[#242323] dark:bg-[#fff] px-[10px] text-[#fff] dark:text-[#000] h-[200px] p-[10px]">
              <div className="for_btn_close_modal_1_for_songs flex justify-end">
                <button
                  className="text-[39px]"
                  onClick={() => setModal14ForSongNumber14(false)}
                >
                  &times;
                </button>
              </div>
              <div className="song_14 flex flex-col gap-2">
                <p className="text-[16px] font-[600]">
                  14. {t("songsInModalS5.t14")}
                </p>
                <audio
                  src={songNumber14}
                  className="w-[100%]"
                  controls
                  id="chosenSong"
                ></audio>
              </div>
            </Box>
          </Modal>
          <Modal
            open={modal15ForSongNumber15}
            onClose={() => setModal15ForSongNumber15(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            className="flex justify-center  items-center"
          >
            <Box className="md:w-[520px] sm:w-[84%] rounded-[30px] outline-none bg-[#242323] dark:bg-[#fff] px-[10px] text-[#fff] dark:text-[#000] h-[200px] p-[10px]">
              <div className="for_btn_close_modal_1_for_songs flex justify-end">
                <button
                  className="text-[39px]"
                  onClick={() => setModal15ForSongNumber15(false)}
                >
                  &times;
                </button>
              </div>
              <div className="song_15 flex flex-col gap-2">
                <p className="text-[16px] font-[600]">
                  15. {t("songsInModalS5.t15")}
                </p>
                <audio
                  src={songNumber15}
                  className="w-[100%]"
                  controls
                  id="chosenSong"
                ></audio>
              </div>
            </Box>
          </Modal>
          <Modal
            open={modal16ForSongNumber16}
            onClose={() => setModal16ForSongNumber16(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            className="flex justify-center  items-center"
          >
            <Box className="md:w-[520px] sm:w-[84%] rounded-[30px] outline-none bg-[#242323] dark:bg-[#fff] px-[10px] text-[#fff] dark:text-[#000] h-[200px] p-[10px]">
              <div className="for_btn_close_modal_1_for_songs flex justify-end">
                <button
                  className="text-[39px]"
                  onClick={() => setModal16ForSongNumber16(false)}
                >
                  &times;
                </button>
              </div>
              <div className="song_16 flex flex-col gap-2">
                <p className="text-[16px] font-[600]">
                  16. {t("songsInModalS5.t16")}
                </p>
                <audio
                  src={songNumber16}
                  className="w-[100%]"
                  controls
                  id="chosenSong"
                ></audio>
              </div>
            </Box>
          </Modal>
          <Modal
            open={modal17ForSongNumber17}
            onClose={() => setModal17ForSongNumber17(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            className="flex justify-center  items-center"
          >
            <Box className="md:w-[520px] sm:w-[84%] rounded-[30px] outline-none bg-[#242323] dark:bg-[#fff] px-[10px] text-[#fff] dark:text-[#000] h-[200px] p-[10px]">
              <div className="for_btn_close_modal_1_for_songs flex justify-end">
                <button
                  className="text-[39px]"
                  onClick={() => setModal17ForSongNumber17(false)}
                >
                  &times;
                </button>
              </div>
              <div className="song_17 flex flex-col gap-2">
                <p className="text-[16px] font-[600]">
                  17. {t("songsInModalS5.t17")}
                </p>
                <audio
                  src={songNumber17}
                  className="w-[100%]"
                  controls
                  id="chosenSong"
                ></audio>
              </div>
            </Box>
          </Modal>
          <Modal
            open={modal18ForSongNumber18}
            onClose={() => setModal18ForSongNumber18(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            className="flex justify-center  items-center"
          >
            <Box className="md:w-[520px] sm:w-[84%] rounded-[30px] outline-none bg-[#242323] dark:bg-[#fff] px-[10px] text-[#fff] dark:text-[#000] h-[200px] p-[10px]">
              <div className="for_btn_close_modal_1_for_songs flex justify-end">
                <button
                  className="text-[39px]"
                  onClick={() => setModal18ForSongNumber18(false)}
                >
                  &times;
                </button>
              </div>
              <div className="song_18 flex flex-col gap-2">
                <p className="text-[16px] font-[600]">
                  18. {t("songsInModalS5.t18")}
                </p>
                <audio
                  src={songNumber18}
                  className="w-[100%]"
                  controls
                  id="chosenSong"
                ></audio>
              </div>
            </Box>
          </Modal>
          <Modal
            open={modal19ForSongNumber19}
            onClose={() => setModal19ForSongNumber19(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            className="flex justify-center  items-center"
          >
            <Box className="md:w-[520px] sm:w-[84%] rounded-[30px] outline-none bg-[#242323] dark:bg-[#fff] px-[10px] text-[#fff] dark:text-[#000] h-[200px] p-[10px]">
              <div className="for_btn_close_modal_1_for_songs flex justify-end">
                <button
                  className="text-[39px]"
                  onClick={() => setModal19ForSongNumber19(false)}
                >
                  &times;
                </button>
              </div>
              <div className="song_19 flex flex-col gap-2">
                <p className="text-[16px] font-[600]">
                  19. {t("songsInModalS5.t19")}
                </p>
                <audio
                  src={songNumber19}
                  className="w-[100%]"
                  controls
                  id="chosenSong"
                ></audio>
              </div>
            </Box>
          </Modal>
          <Modal
            open={modal20ForSongNumber20}
            onClose={() => setModal20ForSongNumber20(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            className="flex justify-center  items-center"
          >
            <Box className="md:w-[520px] sm:w-[84%] rounded-[30px] outline-none bg-[#242323] dark:bg-[#fff] px-[10px] text-[#fff] dark:text-[#000] h-[200px] p-[10px]">
              <div className="for_btn_close_modal_1_for_songs flex justify-end">
                <button
                  className="text-[39px]"
                  onClick={() => setModal20ForSongNumber20(false)}
                >
                  &times;
                </button>
              </div>
              <div className="song_20 flex flex-col gap-2">
                <p className="text-[16px] font-[600]">
                  20. {t("songsInModalS5.t20")}
                </p>
                <audio
                  src={songNumber20}
                  className="w-[100%]"
                  controls
                  id="chosenSong"
                ></audio>
              </div>
            </Box>
          </Modal>
          <Modal
            open={modal21ForSongNumber21}
            onClose={() => setModal21ForSongNumber21(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            className="flex justify-center  items-center"
          >
            <Box className="md:w-[520px] sm:w-[84%] rounded-[30px] outline-none bg-[#242323] dark:bg-[#fff] px-[10px] text-[#fff] dark:text-[#000] h-[200px] p-[10px]">
              <div className="for_btn_close_modal_1_for_songs flex justify-end">
                <button
                  className="text-[39px]"
                  onClick={() => setModal21ForSongNumber21(false)}
                >
                  &times;
                </button>
              </div>
              <div className="song_21 flex flex-col gap-2">
                <p className="text-[16px] font-[600]">
                  21. {t("songsInModalS5.t21")}
                </p>
                <audio
                  src={songNumber21}
                  className="w-[100%]"
                  controls
                  id="chosenSong"
                ></audio>
              </div>
            </Box>
          </Modal>
          <Modal
            open={modal22ForSongNumber22}
            onClose={() => setModal22ForSongNumber22(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            className="flex justify-center  items-center"
          >
            <Box className="md:w-[520px] sm:w-[84%] rounded-[30px] outline-none bg-[#242323] dark:bg-[#fff] px-[10px] text-[#fff] dark:text-[#000] h-[200px] p-[10px]">
              <div className="for_btn_close_modal_1_for_songs flex justify-end">
                <button
                  className="text-[39px]"
                  onClick={() => setModal22ForSongNumber22(false)}
                >
                  &times;
                </button>
              </div>
              <div className="song_22 flex flex-col gap-2">
                <p className="text-[16px] font-[600]">
                  22. {t("songsInModalS5.t22")}
                </p>
                <audio
                  src={songNumber22}
                  className="w-[100%]"
                  controls
                  id="chosenSong"
                ></audio>
              </div>
            </Box>
          </Modal>
          <Modal
            open={modal23ForSongNumber23}
            onClose={() => setModal23ForSongNumber23(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            className="flex justify-center  items-center"
          >
            <Box className="md:w-[520px] sm:w-[84%] rounded-[30px] outline-none bg-[#242323] dark:bg-[#fff] px-[10px] text-[#fff] dark:text-[#000] h-[200px] p-[10px]">
              <div className="for_btn_close_modal_1_for_songs flex justify-end">
                <button
                  className="text-[39px]"
                  onClick={() => setModal23ForSongNumber23(false)}
                >
                  &times;
                </button>
              </div>
              <div className="song_23 flex flex-col gap-2">
                <p className="text-[16px] font-[600]">
                  23. {t("songsInModalS5.t23")}
                </p>
                <audio
                  src={songNumber23}
                  className="w-[100%]"
                  controls
                  id="chosenSong"
                ></audio>
              </div>
            </Box>
          </Modal>
          <Modal
            open={modal24ForSongNumber24}
            onClose={() => setModal24ForSongNumber24(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            className="flex justify-center  items-center"
          >
            <Box className="md:w-[520px] sm:w-[84%] rounded-[30px] outline-none bg-[#242323] dark:bg-[#fff] px-[10px] text-[#fff] dark:text-[#000] h-[200px] p-[10px]">
              <div className="for_btn_close_modal_1_for_songs flex justify-end">
                <button
                  className="text-[39px]"
                  onClick={() => setModal24ForSongNumber24(false)}
                >
                  &times;
                </button>
              </div>
              <div className="song_24 flex flex-col gap-2">
                <p className="text-[16px] font-[600]">
                  24. {t("songsInModalS5.t24")}
                </p>
                <audio
                  src={songNumber24}
                  className="w-[100%]"
                  controls
                  id="chosenSong"
                ></audio>
              </div>
            </Box>
          </Modal>
          <Modal
            open={modal25ForSongNumber25}
            onClose={() => setModal25ForSongNumber25(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            className="flex justify-center  items-center"
          >
            <Box className="md:w-[520px] sm:w-[84%] rounded-[30px] outline-none bg-[#242323] dark:bg-[#fff] px-[10px] text-[#fff] dark:text-[#000] h-[200px] p-[10px]">
              <div className="for_btn_close_modal_1_for_songs flex justify-end">
                <button
                  className="text-[39px]"
                  onClick={() => setModal25ForSongNumber25(false)}
                >
                  &times;
                </button>
              </div>
              <div className="song_25 flex flex-col gap-2">
                <p className="text-[16px] font-[600]">
                  25. {t("songsInModalS5.t25")}
                </p>
                <audio
                  src={songNumber25}
                  className="w-[100%]"
                  controls
                  id="chosenSong"
                ></audio>
              </div>
            </Box>
          </Modal>
          <Modal
            open={modal26ForSongNumber26}
            onClose={() => setModal26ForSongNumber26(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            className="flex justify-center  items-center"
          >
            <Box className="md:w-[520px] sm:w-[84%] rounded-[30px] outline-none bg-[#242323] dark:bg-[#fff] px-[10px] text-[#fff] dark:text-[#000] h-[200px] p-[10px]">
              <div className="for_btn_close_modal_1_for_songs flex justify-end">
                <button
                  className="text-[39px]"
                  onClick={() => setModal26ForSongNumber26(false)}
                >
                  &times;
                </button>
              </div>
              <div className="song_26 flex flex-col gap-2">
                <p className="text-[16px] font-[600]">
                  26. {t("songsInModalS5.t26")}
                </p>
                <audio
                  src={songNumber26}
                  className="w-[100%]"
                  controls
                  id="chosenSong"
                ></audio>
              </div>
            </Box>
          </Modal>
          <Modal
            open={modal27ForSongNumber27}
            onClose={() => setModal27ForSongNumber27(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            className="flex justify-center  items-center"
          >
            <Box className="md:w-[520px] sm:w-[84%] rounded-[30px] outline-none bg-[#242323] dark:bg-[#fff] px-[10px] text-[#fff] dark:text-[#000] h-[200px] p-[10px]">
              <div className="for_btn_close_modal_1_for_songs flex justify-end">
                <button
                  className="text-[39px]"
                  onClick={() => setModal27ForSongNumber27(false)}
                >
                  &times;
                </button>
              </div>
              <div className="song_27 flex flex-col gap-2">
                <p className="text-[16px] font-[600]">
                  27. {t("songsInModalS5.t27")}
                </p>
                <audio
                  src={songNumber27}
                  className="w-[100%]"
                  controls
                  id="chosenSong"
                ></audio>
              </div>
            </Box>
          </Modal>
          <Modal
            open={modal28ForSongNumber28}
            onClose={() => setModal28ForSongNumber28(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            className="flex justify-center  items-center"
          >
            <Box className="md:w-[520px] sm:w-[84%] rounded-[30px] outline-none bg-[#242323] dark:bg-[#fff] px-[10px] text-[#fff] dark:text-[#000] h-[200px] p-[10px]">
              <div className="for_btn_close_modal_1_for_songs flex justify-end">
                <button
                  className="text-[39px]"
                  onClick={() => setModal28ForSongNumber28(false)}
                >
                  &times;
                </button>
              </div>
              <div className="song_28 flex flex-col gap-2">
                <p className="text-[16px] font-[600]">
                  28. {t("songsInModalS5.t28")}
                </p>
                <audio
                  src={songNumber28}
                  className="w-[100%]"
                  controls
                  id="chosenSong"
                ></audio>
              </div>
            </Box>
          </Modal>
          <Modal
            open={modal29ForSongNumber29}
            onClose={() => setModal29ForSongNumber29(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            className="flex justify-center  items-center"
          >
            <Box className="md:w-[520px] sm:w-[84%] rounded-[30px] outline-none bg-[#242323] dark:bg-[#fff] px-[10px] text-[#fff] dark:text-[#000] h-[200px] p-[10px]">
              <div className="for_btn_close_modal_1_for_songs flex justify-end">
                <button
                  className="text-[39px]"
                  onClick={() => setModal29ForSongNumber29(false)}
                >
                  &times;
                </button>
              </div>
              <div className="song_29 flex flex-col gap-2">
                <p className="text-[16px] font-[600]">
                  29. {t("songsInModalS5.t29")}
                </p>
                <audio
                  src={songNumber29}
                  className="w-[100%]"
                  controls
                  id="chosenSong"
                ></audio>
              </div>
            </Box>
          </Modal>
          <Modal
            open={modal30ForSongNumber30}
            onClose={() => setModal30ForSongNumber30(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            className="flex justify-center  items-center"
          >
            <Box className="md:w-[520px] sm:w-[84%] rounded-[30px] outline-none bg-[#242323] dark:bg-[#fff] px-[10px] text-[#fff] dark:text-[#000] h-[200px] p-[10px]">
              <div className="for_btn_close_modal_1_for_songs flex justify-end">
                <button
                  className="text-[39px]"
                  onClick={() => setModal30ForSongNumber30(false)}
                >
                  &times;
                </button>
              </div>
              <div className="song_30 flex flex-col gap-2">
                <p className="text-[16px] font-[600]">
                  30. {t("songsInModalS5.t30")}
                </p>
                <audio
                  src={songNumber30}
                  className="w-[100%]"
                  controls
                  id="chosenSong"
                ></audio>
              </div>
            </Box>
          </Modal>
          <Modal
            open={modal31ForSongNumber31}
            onClose={() => setModal31ForSongNumber31(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            className="flex justify-center  items-center"
          >
            <Box className="md:w-[520px] sm:w-[84%] rounded-[30px] outline-none bg-[#242323] dark:bg-[#fff] px-[10px] text-[#fff] dark:text-[#000] h-[200px] p-[10px]">
              <div className="for_btn_close_modal_1_for_songs flex justify-end">
                <button
                  className="text-[39px]"
                  onClick={() => setModal31ForSongNumber31(false)}
                >
                  &times;
                </button>
              </div>
              <div className="song_31 flex flex-col gap-2">
                <p className="text-[16px] font-[600]">
                  31. {t("songsInModalS5.t31")}
                </p>
                <audio
                  src={songNumber31}
                  className="w-[100%]"
                  controls
                  id="chosenSong"
                ></audio>
              </div>
            </Box>
          </Modal>
          <Modal
            open={modal32ForSongNumber32}
            onClose={() => setModal32ForSongNumber32(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            className="flex justify-center  items-center"
          >
            <Box className="md:w-[520px] sm:w-[84%] rounded-[30px] outline-none bg-[#242323] dark:bg-[#fff] px-[10px] text-[#fff] dark:text-[#000] h-[200px] p-[10px]">
              <div className="for_btn_close_modal_1_for_songs flex justify-end">
                <button
                  className="text-[39px]"
                  onClick={() => setModal32ForSongNumber32(false)}
                >
                  &times;
                </button>
              </div>
              <div className="song_32 flex flex-col gap-2">
                <p className="text-[16px] font-[600]">
                  32. {t("songsInModalS5.t32")}
                </p>
                <audio
                  src={songNumber32}
                  className="w-[100%]"
                  controls
                  id="chosenSong"
                ></audio>
              </div>
            </Box>
          </Modal>
          <Modal
            open={modal33ForSongNumber33}
            onClose={() => setModal33ForSongNumber33(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            className="flex justify-center  items-center"
          >
            <Box className="md:w-[520px] sm:w-[84%] rounded-[30px] outline-none bg-[#242323] dark:bg-[#fff] px-[10px] text-[#fff] dark:text-[#000] h-[200px] p-[10px]">
              <div className="for_btn_close_modal_1_for_songs flex justify-end">
                <button
                  className="text-[39px]"
                  onClick={() => setModal33ForSongNumber33(false)}
                >
                  &times;
                </button>
              </div>
              <div className="song_33 flex flex-col gap-2">
                <p className="text-[16px] font-[600]">
                  33. {t("songsInModalS5.t33")}
                </p>
                <audio
                  src={songNumber33}
                  className="w-[100%]"
                  controls
                  id="chosenSong"
                ></audio>
              </div>
            </Box>
          </Modal>
          <Modal
            open={modal34ForSongNumber34}
            onClose={() => setModal34ForSongNumber34(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            className="flex justify-center  items-center"
          >
            <Box className="md:w-[520px] sm:w-[84%] rounded-[30px] outline-none bg-[#242323] dark:bg-[#fff] px-[10px] text-[#fff] dark:text-[#000] h-[200px] p-[10px]">
              <div className="for_btn_close_modal_1_for_songs flex justify-end">
                <button
                  className="text-[39px]"
                  onClick={() => setModal34ForSongNumber34(false)}
                >
                  &times;
                </button>
              </div>
              <div className="song_34 flex flex-col gap-2">
                <p className="text-[16px] font-[600]">
                  34. {t("songsInModalS5.t34")}
                </p>
                <audio
                  src={songNumber34}
                  className="w-[100%]"
                  controls
                  id="chosenSong"
                ></audio>
              </div>
            </Box>
          </Modal>
          <Modal
            open={modal35ForSongNumber35}
            onClose={() => setModal35ForSongNumber35(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            className="flex justify-center  items-center"
          >
            <Box className="md:w-[520px] sm:w-[84%] rounded-[30px] outline-none bg-[#242323] dark:bg-[#fff] px-[10px] text-[#fff] dark:text-[#000] h-[200px] p-[10px]">
              <div className="for_btn_close_modal_1_for_songs flex justify-end">
                <button
                  className="text-[39px]"
                  onClick={() => setModal35ForSongNumber35(false)}
                >
                  &times;
                </button>
              </div>
              <div className="song_35 flex flex-col gap-2">
                <p className="text-[16px] font-[600]">
                  35. {t("songsInModalS5.t35")}
                </p>
                <audio
                  src={songNumber35}
                  className="w-[100%]"
                  controls
                  id="chosenSong"
                ></audio>
              </div>
            </Box>
          </Modal>
          <Modal
            open={modal36ForSongNumber36}
            onClose={() => setModal36ForSongNumber36(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            className="flex justify-center  items-center"
          >
            <Box className="md:w-[520px] sm:w-[84%] rounded-[30px] outline-none bg-[#242323] dark:bg-[#fff] px-[10px] text-[#fff] dark:text-[#000] h-[200px] p-[10px]">
              <div className="for_btn_close_modal_1_for_songs flex justify-end">
                <button
                  className="text-[39px]"
                  onClick={() => setModal36ForSongNumber36(false)}
                >
                  &times;
                </button>
              </div>
              <div className="song_36 flex flex-col gap-2">
                <p className="text-[16px] font-[600]">
                  36. {t("songsInModalS5.t36")}
                </p>
                <audio
                  src={songNumber36}
                  className="w-[100%]"
                  controls
                  id="chosenSong"
                ></audio>
              </div>
            </Box>
          </Modal>
        </div>
      </CustomTabPanel>
    </Box>
  );
}
