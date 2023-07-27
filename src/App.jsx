import React from "react";
import { useEffect } from "react";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// importing aos
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import Switcher from "./components/Switcher";
import logo from "./assets/Logo (1).svg";
import IconNavbar from "./components/Block";
import logo1 from "./assets/Rectangle 14 (1).svg";
import oi from "./assets/01.svg";
import iz from "./assets/02.svg";
import is from "./assets/03.svg";
import swiper1 from "./assets/428x573 (1).svg";
import swiper2 from "./assets/428x573 (2).svg";
import swiper3 from "./assets/428x573.svg";
import group from "./assets/Group 187.svg";
import video from "./assets/videosection.svg";
import icon from "./assets/social icons.svg";
import img1 from "./assets/placeholder.png";
import img2 from "./assets/placeholder (1).png";
import sec1 from "./assets/350x350 (2).svg";
import sec2 from "./assets/350x350 (3).svg";
import swiper4 from "./assets/about10 1.svg";
import swiper5 from "./assets/”.svg";
import swiper6 from "./assets/about10 1 (1).svg";
import group1 from "./assets/Group 93.svg";

import react, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Card from "./components/Card";

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="bg-[#272727] sm:overflow-hidden py-[10px] dark:bg-white">
        <div className=" w-[90%] m-auto flex justify-between items-center">
          <div>
            <img src={logo} alt="logo" />
          </div>
          <div>
            <ul className="text-white dark:text-black flex gap-10 sm:hidden lg:flex">
              <li>Buy</li>
              <li>Blog</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="flex gap-5 items-center">
            <button className="sm:hidden md:flex py-[7px] px-[10px] bg-[#FCD54C]">
              Book a consultation
            </button>
            <div className="flex items-center gap-3 text-[white] dark:text-[black] sm:hidden md:flex">
              <p>En</p>
              <p>Ru</p>
            </div>
            <p className="sm:hidden md:flex text-white dark:text-black">
              +7 (212) 674-25-10
            </p>
            <div className="sm:flex lg:hidden">
              <IconNavbar></IconNavbar>
            </div>

            <Switcher />
          </div>
        </div>
        <div className="pt-[20px] bg w-[90%] m-auto mb-[100px] ">
          <div className="flex justify-end w-[95%] m-auto">
            <img src={icon} alt="" />
          </div>
          <div className="flex items-center sm:w-[100%] lg:w-[80%] m-auto">
            <img src={logo1} alt="" />
            <div className="relative  right-[10%] my-[200px] m-auto">
              <h1 className="md:text-[70px] lg:text-[90px] sm:text-[40px] font-[700] text-[white]">
                Welcome home <span className="text-[#FCD54C]">To</span> luxury
              </h1>
              <p className="text-[white] text-[20px] font-[700]">
                Book a consultation
              </p>
            </div>
          </div>
          <div className="flex justify-end items-end">
            <div className="bg-[#272727] dark:bg-white flex justify-between p-[20px] lg:w-[60%] md:w-[80%] sm:w-[90%] flex-wrap">
              <div className="flex sm:w-[80%] sm:mb-[20px] sm:m-auto md:w-[30%] gap-3 ">
                <img src={oi} alt="" />
                <div>
                  <p className="text-white dark:text-[black]">
                    Lorem Ipsum Dolorem apset
                  </p>
                </div>
              </div>
              <div className="flex sm:w-[80%] sm:mb-[20px] sm:m-auto md:w-[30%] gap-3">
                <img src={iz} alt="" />
                <div>
                  <p className="text-white dark:text-[black]">
                    Lorem Ipsum Dolorem apset
                  </p>
                </div>
              </div>
              <div className="flex sm:w-[80%] sm:mb-[20px] sm:m-auto md:w-[30%] gap-3">
                <img src={is} alt="" />
                <div>
                  <p className="text-white dark:text-[black]">
                    Lorem Ipsum Dolorem apset
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center mb-[30px] justify-between  flex-wrap md:w-[90%] md:flex lg:w-[90%] m-auto">
          <div className="sm:w-[90%] sm:m-auto md:w-[50%]">
            <h3 className="text-[#FFF] dark:text-[#000] text-[40px] font-[700]">
              Latest projects
            </h3>
          </div>
          <ul className="text-white dark:text-[#000]  flex gap-5 sm:m-auto sm:w-[90%] md:w-[40%] lg:w-[30%]">
            <li>All</li>
            <li>Building</li>
            <li>Interior</li>
            <li>View all projects</li>
          </ul>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          className="w-[90%] m-auto"
        >
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            loop={true}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={swiper1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={swiper2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={swiper3} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={group} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={swiper1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={swiper2} alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="md:w-[50%] sm:w-[80%] m-auto mt-[50px]">
          <p
            className="text-[#FCD54C] text-[18px] not-italic font-semibold "
            data-aos="fade-up"
          >
            Our expertise
          </p>{" "}
          <br />
          <h1
            className="text-[#E8E8E8] font-bold md:text-[40px] sm:text-[30px] lg:text-[50px] not-italic dark:text-[#111827]"
            data-aos="fade-down"
            data-aos-duration="2000"
          >
            "The best apartment in Dubai" we will find your dream
          </h1>{" "}
          <br />
          <p
            className="text-[#E8E8E8] text-[18px] not-italic font-normal  sm:text-[15px] lg:w-[679px] md:w-[450px] dark:text-[#111827]"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            nibh massa, euismod ut libero id, blandit posuere augue. Morbi porta
            volutpat diam egestas ultrices. Phasellus tempus fringilla neque,
            nec viverra orci tristique vel. In efficitur vehicula magna, varius
            pellentesque nisl vehicula vel. Aenean vel sem ac elit commodo
            finibus in nec massa. Nulla facilisi. Nulla vestibulum venenatis
            sollicitudin. Etiam auctor mollis justo eu tincidunt. Aliquam varius
            varius tortor. Cras id venenatis sem. Quisque ut risus ex. Sed et
            tempor massa. Praesent ac eros hendrerit, congue justo ac, molestie
            urna. Fusce nec neque vitae dolor dapibus elementum. Maecenas nec
            orci quis sem condimentum dapibus varius a lorem. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div
          className="w-[90%] m-auto my-[50px]"
          data-aos="zoom-in"
          data-aos-duration="2000"
        >
          <img src={video} alt="" />
        </div>
        <div
          className="lg:w-[75%] border-2 dark:border-black border-[#FCD54C] p-[20px] md:w-[80%] sm:w-[90%] m-auto"
          data-aos="fade-down"
          data-aos-duration="2000"
        >
          <p className="text-[white] dark:text-[black] sm:text-[18px] md:text-[25px] lg:text-[30px] font-[400]">
            “Don’t limit yourself. Many people limit themselves to what they
            think they can do. You can go as far as your mind lets you. What you
            believe, remember, you can achieve.” — Mary Kay Ash{" "}
          </p>
        </div>
        <div className="flex my-[50px]  sm:w-[100%] md:w-[80%] m-auto flex-wrap">
          <div
            className="md:w-[40%] sm:w-[80%] m-auto sm:mb-[20px]"
            data-aos="zoom-in-right"
            data-aos-duration="2000"
          >
            <Card
              img={img1}
              text="Sed in sem pellentesque, eleifend erat vitae, tincidunt turpis. Pellentesque augue elit, rutrum sit amet commodo vel, porta quis purus. Nullam faucibus, odio eu bibendum auctor, eros dolor aliquet purus, sit amet pellentesque neque est id tortor. In egestas, erat a dapibus dapibus, mi augue ornare lorem, nec pretium ligula purus nec tellus. Aenean a scelerisque nisi. Nullam pretium fermentum nunc, feugiat placerat urna rutrum eget. Nullam mattis justo consequat risus. Donec imperdiet enim id efficitur pharetra. Nam sollicitudin at est eget auctor. Ut sed ante quis nulla tincidunt auctor. Quisque accumsan pretium tincidunt. Etiam viverra ultrices est vitae suscipit. Pellentesque elementum purus non nisl pharetra consequat. Nunc in venenatis orci."
            />
          </div>
          <div
            className="md:w-[40%] sm:w-[80%] m-auto"
            data-aos="zoom-in-left"
            data-aos-duration="2000"
          >
            <Card
              img={img2}
              text="Sed in sem pellentesque, eleifend erat vitae, tincidunt turpis. Pellentesque augue elit, rutrum sit amet commodo vel, porta quis purus. Nullam faucibus, odio eu bibendum auctor, eros dolor aliquet purus, sit amet pellentesque neque est id tortor. In egestas, erat a dapibus dapibus, mi augue ornare lorem, nec pretium ligula purus nec tellus. Aenean a scelerisque nisi. Nullam pretium fermentum nunc, feugiat placerat urna rutrum eget. Nullam mattis justo consequat risus. Donec imperdiet enim id efficitur pharetra. Nam sollicitudin at est eget auctor. Ut sed ante quis nulla tincidunt auctor. Quisque accumsan pretium tincidunt. Etiam viverra ultrices est vitae suscipit. Pellentesque elementum purus non nisl pharetra consequat. Nunc in venenatis orci."
            />
          </div>
        </div>
        <div className="bgg py-[20px] mb-[50px]">
          <div
            className="text-center"
            data-aos="fade-down"
            data-aos-duration="2000"
          >
            <p className="text-[#272727] dark:text-[brown] text-[18px] font-[600]">
              Do you have any questions?
            </p>
            <h1 className="text-[#272727] dark:text-[brown] sm:text-[60px] md:text-[120px] font-[700]">
              Contact us
            </h1>
          </div>
          <div className="flex justify-center ">
            <div>
              <input
                className="px-[5px] py-[15px]"
                type="text"
                placeholder="Enter your mail"
              />
            </div>
            <div>
              <button className="bg-[#272727]  text-white py-[15px] px-[15px]">
                Send
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-between mb-[20px] items-center w-[90%] m-auto">
          <div>
            <h3 className="text-[#FFF] dark:text-[#000] md:text-[60px] sm:text-[20px] font-[700]">
              Useful articles
            </h3>
          </div>
          <p className="text-[#929292]  text-[14px] text-[400]">
            View all articles
          </p>
        </div>
        <div className="flex w-[80%] justify-evenly m-auto flex-wrap">
          <div
            className="lg:w-[30%] md:w-[50%] sm:mb-[20px] sm:w-[90%]"
            data-aos="zoom-in-up"
            data-aos-duration="2000"
          >
            <img src={sec1} alt="" />
          </div>
          <div
            className="lg:w-[30%] md:w-[50%] sm:mb-[20px] sm:w-[90%] border-2 border-[#FCD54C] p-[20px]"
            data-aos="fade-down"
            data-aos-duration="2000"
          >
            <p className="text-[16px] font-[400] text-white dark:text-black my-[10px]">
              Jule 03, 2022
            </p>
            <h3 className="text-[25px] font-[600] text-white dark:text-black my-[10px]">
              Discover Architecture
            </h3>
            <p className="my-[10px] text-[16px] font-[400] dark:text-black text-white">
              Projects for many large domestic and foreign corporations,
              enterprises in many elds such
            </p>
            <p className="mt-[70px] text-[#FCD54C]">Learn more</p>
          </div>
          <div
            className="lg:w-[30%] md:w-[50%] sm:w-[90%]"
            data-aos="zoom-in-up"
            data-aos-duration="2000"
          >
            <img src={sec2} alt="" />
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          className="w-[90%] m-auto my-[50px]"
        >
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            loop={true}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
            }}
            modules={[Pagination]}
            className="swiper"
          >
            <SwiperSlide>
              <div className=" w-[100%] border-2 border-[#FCD54C] p-[20px]">
                <div className="flex justify-between items-center">
                  <div>
                    <img className="rounded-[50%]" src={swiper4} alt="" />
                  </div>
                  <div>
                    <img src={swiper5} alt="" />
                  </div>
                </div>
                <h3 className="text-[white] text-[20px] font-[700]">Paul</h3>
                <p className="text-[#929292] text-[16px] font-[400]">
                  Owner in Paul.com
                </p>
                <p className="text-[#929292] text-[16px] font-[400]">
                  Projects for many large domestic and foreign corporations,
                  enterprises in many elds such as nance, banking, F&B,
                  education, communication.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[100%] border-2 border-[#FCD54C] p-[20px]">
                <div className="flex justify-between items-center">
                  <div>
                    <img className="rounded-[50%]" src={swiper6} alt="" />
                  </div>
                  <div>
                    <img src={swiper5} alt="" />
                  </div>
                </div>
                <h3 className="text-[white] text-[20px] font-[700]">Paul</h3>
                <p className="text-[#929292] text-[16px] font-[400]">
                  Owner in Paul.com
                </p>
                <p className="text-[#929292] text-[16px] font-[400]">
                  Projects for many large domestic and foreign corporations,
                  enterprises in many elds such as nance, banking, F&B,
                  education, communication.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[100%] border-2 border-[#FCD54C] p-[20px]">
                <div className="flex justify-between items-center">
                  <div>
                    <img className="rounded-[50%]" src={swiper4} alt="" />
                  </div>
                  <div>
                    <img src={swiper5} alt="" />
                  </div>
                </div>
                <h3 className="text-[white] text-[20px] font-[700]">Paul</h3>
                <p className="text-[#929292] text-[16px] font-[400]">
                  Owner in Paul.com
                </p>
                <p className="text-[#929292] text-[16px] font-[400]">
                  Projects for many large domestic and foreign corporations,
                  enterprises in many elds such as nance, banking, F&B,
                  education, communication.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[100%] border-2 border-[#FCD54C] p-[20px]">
                <div className="flex justify-between items-center">
                  <div>
                    <img className="rounded-[50%]" src={swiper4} alt="" />
                  </div>
                  <div>
                    <img src={swiper5} alt="" />
                  </div>
                </div>
                <h3 className="text-[white] text-[20px] font-[700]">Paul</h3>
                <p className="text-[#929292] text-[16px] font-[400]">
                  Owner in Paul.com
                </p>
                <p className="text-[#929292] text-[16px] font-[400]">
                  Projects for many large domestic and foreign corporations,
                  enterprises in many elds such as nance, banking, F&B,
                  education, communication.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[100%] border-2 border-[#FCD54C] p-[20px]">
                <div className="flex justify-between items-center">
                  <div>
                    <img className="rounded-[50%]" src={swiper4} alt="" />
                  </div>
                  <div>
                    <img src={swiper5} alt="" />
                  </div>
                </div>
                <h3 className="text-[white] text-[20px] font-[700]">Paul</h3>
                <p className="text-[#929292] text-[16px] font-[400]">
                  Owner in Paul.com
                </p>
                <p className="text-[#929292] text-[16px] font-[400]">
                  Projects for many large domestic and foreign corporations,
                  enterprises in many elds such as nance, banking, F&B,
                  education, communication.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[100%] border-2 border-[#FCD54C] p-[20px]">
                <div className="flex justify-between items-center">
                  <div>
                    <img className="rounded-[50%]" src={swiper4} alt="" />
                  </div>
                  <div>
                    <img src={swiper5} alt="" />
                  </div>
                </div>
                <h3 className="text-[white] text-[20px] font-[700]">Paul</h3>
                <p className="text-[#929292] text-[16px] font-[400]">
                  Owner in Paul.com
                </p>
                <p className="text-[#929292] text-[16px] font-[400]">
                  Projects for many large domestic and foreign corporations,
                  enterprises in many elds such as nance, banking, F&B,
                  education, communication.
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div
          className="w-[80%] m-auto"
          data-aos="fade-down-right"
          data-aos-duration="2000"
        >
          <h1 className="text-[70px] text-white dark:text-black">FAQ</h1>
        </div>
        <div
          className="w-[80%] m-auto"
          data-aos="fade-down-left"
          data-aos-duration="2000"
        >
          <Accordion
            className="dark:bg-[#FFF] dark:text-black"
            sx={{ background: "#272727", color: "white" }}
          >
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon className="dark:text-black text-white" />
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>
                The largest and oldest Quotations Page on the Web with about 30
                categories
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Sed in sem pellentesque, eleifend erat vitae, tincidunt turpis.
                Pellentesque augue elit, rutrum sit amet commodo vel, porta quis
                purus. Nullam faucibus, odio eu bibendum auctor, eros dolor
                aliquet purus, sit amet pellentesque neque est id tortor. In
                egestas, erat a dapibus dapibus, mi augue ornare lorem, nec
                pretium ligula purus nec tellus. Aenean a scelerisque nisi.
                Nullam pretium fermentum nunc, feugiat placerat urna rutrum
                eget. Nullam mattis justo consequat risus. Donec imperdiet enim
                id efficitur pharetra. Nam sollicitudin at est eget auctor. Ut
                sed ante quis nulla tincidunt auctor. Quisque accumsan pretium
                tincidunt. Etiam viverra ultrices est vitae suscipit.
                Pellentesque elementum purus non nisl pharetra consequat. Nunc
                in venenatis orci.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            className="dark:bg-[#FFF] dark:text-black"
            sx={{ background: "#272727", color: "white" }}
          >
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon className="dark:text-black text-white" />
              }
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>
                A huge collection of inspirational quotes, thoughts of greatest
                minds in history
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Sed in sem pellentesque, eleifend erat vitae, tincidunt turpis.
                Pellentesque augue elit, rutrum sit amet commodo vel, porta quis
                purus. Nullam faucibus, odio eu bibendum auctor, eros dolor
                aliquet purus, sit amet pellentesque neque est id tortor. In
                egestas, erat a dapibus dapibus, mi augue ornare lorem, nec
                pretium ligula purus nec tellus. Aenean a scelerisque nisi.
                Nullam pretium fermentum nunc, feugiat placerat urna rutrum
                eget. Nullam mattis justo consequat risus. Donec imperdiet enim
                id efficitur pharetra. Nam sollicitudin at est eget auctor. Ut
                sed ante quis nulla tincidunt auctor. Quisque accumsan pretium
                tincidunt. Etiam viverra ultrices est vitae suscipit.
                Pellentesque elementum purus non nisl pharetra consequat. Nunc
                in venenatis orci.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            className="dark:bg-[#FFF] dark:text-black"
            sx={{ background: "#272727", color: "white" }}
          >
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon className="dark:text-black text-white" />
              }
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>
                Quotations from the great works of literature
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Sed in sem pellentesque, eleifend erat vitae, tincidunt turpis.
                Pellentesque augue elit, rutrum sit amet commodo vel, porta quis
                purus. Nullam faucibus, odio eu bibendum auctor, eros dolor
                aliquet purus, sit amet pellentesque neque est id tortor. In
                egestas, erat a dapibus dapibus, mi augue ornare lorem, nec
                pretium ligula purus nec tellus. Aenean a scelerisque nisi.
                Nullam pretium fermentum nunc, feugiat placerat urna rutrum
                eget. Nullam mattis justo consequat risus. Donec imperdiet enim
                id efficitur pharetra. Nam sollicitudin at est eget auctor. Ut
                sed ante quis nulla tincidunt auctor. Quisque accumsan pretium
                tincidunt. Etiam viverra ultrices est vitae suscipit.
                Pellentesque elementum purus non nisl pharetra consequat. Nunc
                in venenatis orci.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            className="dark:bg-[#FFF] dark:text-black"
            sx={{ background: "#272727", color: "white" }}
          >
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon className="dark:text-black text-white" />
              }
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>
                Read quotes and sayings from famous people in history
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Sed in sem pellentesque, eleifend erat vitae, tincidunt turpis.
                Pellentesque augue elit, rutrum sit amet commodo vel, porta quis
                purus. Nullam faucibus, odio eu bibendum auctor, eros dolor
                aliquet purus, sit amet pellentesque neque est id tortor. In
                egestas, erat a dapibus dapibus, mi augue ornare lorem, nec
                pretium ligula purus nec tellus. Aenean a scelerisque nisi.
                Nullam pretium fermentum nunc, feugiat placerat urna rutrum
                eget. Nullam mattis justo consequat risus. Donec imperdiet enim
                id efficitur pharetra. Nam sollicitudin at est eget auctor. Ut
                sed ante quis nulla tincidunt auctor. Quisque accumsan pretium
                tincidunt. Etiam viverra ultrices est vitae suscipit.
                Pellentesque elementum purus non nisl pharetra consequat. Nunc
                in venenatis orci.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            className="dark:bg-[#FFF] dark:text-black"
            sx={{ background: "#272727", color: "white" }}
          >
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon className="dark:text-black text-white" />
              }
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Collected quotes from Albert Einstein</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ color: "white" }}>
              <Typography>
                Sed in sem pellentesque, eleifend erat vitae, tincidunt turpis.
                Pellentesque augue elit, rutrum sit amet commodo vel, porta quis
                purus. Nullam faucibus, odio eu bibendum auctor, eros dolor
                aliquet purus, sit amet pellentesque neque est id tortor. In
                egestas, erat a dapibus dapibus, mi augue ornare lorem, nec
                pretium ligula purus nec tellus. Aenean a scelerisque nisi.
                Nullam pretium fermentum nunc, feugiat placerat urna rutrum
                eget. Nullam mattis justo consequat risus. Donec imperdiet enim
                id efficitur pharetra. Nam sollicitudin at est eget auctor. Ut
                sed ante quis nulla tincidunt auctor. Quisque accumsan pretium
                tincidunt. Etiam viverra ultrices est vitae suscipit.
                Pellentesque elementum purus non nisl pharetra consequat. Nunc
                in venenatis orci.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
        <footer>
          <div
            className="cont mt-[50px] w-[90%] m-auto"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <div>
              <img className="m-auto" src={logo} alt="" />
            </div>
            <br />
            <br />

            <div className=" xl:grid xl:grid-cols-5 xl:gap-[50px] lg:grid lg:grid-cols-3 lg:gap-[60px] sm:grid sm:grid-cols-2 m-auto sm:gap-2">
              <div className="">
                <p className="text-white dark:text-black font-bold">Buy</p>
                <br />
                <p className="text-[gray]">Apartment in Dubai</p>
                <p className="text-[gray]">House in Dubai</p>
                <p className="text-[gray]">Apartments in Dubai</p>
                <p className="text-[gray]">Loft in Dubai</p>
                <p className="text-[gray]">Penthouse in Dubai</p>
                <p className="text-[gray]">Villa in Dubai</p>
              </div>

              <div className="">
                <p className="text-white dark:text-black font-bold">Services</p>
                <br />
                <p className="text-[gray]">Property management in Dubai, UAE</p>
                <p className="text-[gray]">Sell ​​property in Dubai, UAE</p>
                <p className="text-[gray]">Rent property in Dubai, UAE</p>
                <p className="text-[gray]">Investments in Dubai, UAE</p>
                <p className="text-[gray]">
                  Real estate for cryptocurrency in Dubai
                </p>
                <p className="text-[gray]">Moving to Dubai, UAE</p>
              </div>

              <div className="">
                <p className="text-white dark:text-black font-bold">
                  Information
                </p>
                <br />
                <p className="text-[gray]">Video</p>
                <p className="text-[gray]">Podcasts</p>
                <p className="text-[gray]">Laws</p>
                <p className="text-[gray]">Questions and answers</p>
                <p className="text-[gray]">Books</p>
                <p className="text-[gray]">Articles</p>
              </div>

              <div className="">
                <p className="text-white dark:text-black font-bold">
                  About company
                </p>
                <br />
                <p className="text-[gray]">Jobs </p>
                <p className="text-[gray]">Story</p>
                <p className="text-[gray]">Licenses</p>
                <p className="text-[gray]">Why are we</p>
                <p className="text-[gray]">Real estate agency</p>
              </div>

              <div className="">
                <p className="text-white dark:text-black font-bold">Contact</p>
                <br />
                <p className="text-[gray]">964 Worthington Drive Dubai, UAE</p>
                <p className="text-[gray]">dubairealty@mail.com</p>
                <br />
                <br />
                <button className="bg-[#FCD54C] p-[15px]">
                  Book a consultation
                </button>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default App;

//data-aos="fade-down-right"
//data-aos="fade-down-left"
//data-aos-duration="2000"
