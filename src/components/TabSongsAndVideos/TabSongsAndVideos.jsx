import * as React from "react";
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
            <iframe
              className="w-[100%] h-[280px]"
              src="https://www.youtube.com/embed/ogZW9uIjpYo"
              title="Камиль Нурматов трек:★Ба Пеш☆ [Official music] Тоҷикистон Ба пеш"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div className="video_2 flex flex-col gap-2">
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
          <div className="video_3 flex flex-col gap-2">
            <p className="text-[16px] font-[600]">
              3. {t("songsInModalS5.t1")}
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
          <div className="video_4 flex flex-col gap-2">
            <p className="text-[16px] font-[600]">
              4. {t("songsInModalS5.t5")}
            </p>
            <iframe
              className="w-[100%] h-[280px]"
              src="https://www.youtube.com/embed/wrrvVLZ5oww"
              title="☆Камиль Нурматов☆~Премьера Клипа★Ишки Аввал★[Official video]"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div className="video_5 flex flex-col gap-2">
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
          <div className="video_6 flex flex-col gap-2">
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
          <div className="video_7 flex flex-col gap-2">
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
          <div className="video_8 flex flex-col gap-2">
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
          <div className="video_9 flex flex-col gap-2">
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
          <div className="video_10 flex flex-col gap-2">
            <p className="text-[16px] font-[600]">
              10. {t("songsInModalS5.t1")}
            </p>
          </div>
          <div className="video_11 flex flex-col gap-2">
            <p className="text-[16px] font-[600]">
              11. {t("songsInModalS5.t1")}
            </p>
          </div>
          <div className="video_12 flex flex-col gap-2">
            <p className="text-[16px] font-[600]">
              12. {t("songsInModalS5.t1")}
            </p>
          </div>
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
            <audio
              src={songNumber1}
              className="w-[100%]"
              controls
              id="chosenSong"
            ></audio>
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
        </div>
      </CustomTabPanel>
    </Box>
  );
}
