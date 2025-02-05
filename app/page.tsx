"use client";

import { useState } from "react";
import "./style.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function Home() {
  const [dropdown, setdropdown] = useState(false);

  const droping = () => {
    let elements = document.getElementsByClassName

  }

  return (




    <>
      <div className="flex sticky top-0 z-10 items-center justify-between p-4 bg-gradient-to-r from-black to-blue-800">
        <a href="#home">
          <div className="flex items-center">
            <img 
              src="https://wallpapers.com/images/featured/bmw-logo-png-zpen5xltuwu1poy4.jpg"
              className="w-14 mr-2"
              alt=""
            />
            <span className="text-white font-bold text-xl">B</span>
            <span className="text-blue-400 font-bold text-xl">M</span>
            <span className="text-white font-bold text-xl">W</span>
          </div>
        </a>
        <div>
          <ul className="flex items-center gap-6 sm:8 md:gap-16 text-white font-bold sm:text-xl sm:mr-10">
            <a href="#drifting">
              <li className="hover:text-blue-400">
                {" "}
                <span className="text-blue-400">D</span>rifting
              </li>
            </a>
            <a href="#sports">
              <li className="hover:text-blue-400">
                {" "}
                <span className="text-blue-400">S</span>ports
              </li>
            </a>
            <a href="#luxary">
              <li className="hover:text-blue-400">
                {" "}
                <span className="text-blue-400">L</span>uxary
              </li>
            </a>
          </ul>
        </div>
      </div>
      <hr className="h-[0.5px]" />
      <section
        id="home"
        className="bg-gradient-to-r from-blue-900 to-black h-[80vh] "
      >
        <div className=" flex flex-col-reverse lg:flex lg:flex-row lg:w-full justify-center h-full items-center">
          <div className="hero-text lg:shadow-lg w-[100%] lg:p-5 lg:w-[50%] lg:ml-10 text-white font-bold text-xl sm:text-2xl md:text-3xl text-center sm:tracking-wider ">
            <h1 className="">
              <span className="text-black lg:text-blue-400">THE BMW</span>{" "}
              <span className=" text-white ">ISN'T A </span>
              <span className="lg:text-black">CAR</span>; IT'S A{" "}
              <span className="lg:text-black">STATEMENT</span> OF{" "}
              <span className="lg:text-blue-400">PERFORMANCE</span>,
              <span className="lg:text-black">INNOV</span>
              <span className="lg:text-blue-400">ATION</span>, & LUXARY ON
              <span className="lg:text-black"> WHEELS</span>
            </h1>
          </div>
          <div className="mix-blend-lighten lg:w-[50%]">
            <img
              className="hero-bmw lg:w-[100%]"
              src="https://www.shutterstock.com/image-illustration/kazakhstan-almaty-january-20-2020-600nw-1626510844.jpg"
              alt=""
            />
          </div>
        </div>
      </section>
      <hr className="h-[0.5px] " />
      <section
        id="drifting"
        className="gap-5 flex flex-col justify-center  p-3 items-center bg-gradient-to-r from-black w-full to-blue-800 min-h-screen"
      >
        <div className="">
        <img
          className=" w-16 h-16 md:w-24 md:h-24  animate-spin duration-1000 rounded-full m-auto"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu6TvTcpb3OJsonxqFYeTiNGS8Jtknxydzbw&s"
          alt=""
        />
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center h-[80%]">
        <div className="">
          <img
            className="bmw w-[70%] md:w-full hover:scale-[1.04] ease-in-out duration-300 rounded-xl m-auto  "
            src="https://c4.wallpaperflare.com/wallpaper/749/499/746/bmw-m4-car-drift-wallpaper-preview.jpg"
            alt=""
          />
        </div>
        <div className="bmw-text shadow-lg p-3 text-white text-md md:text-xl lg:w-[50%] text-center lg:ml-4">
          <h1 className="font-bold text-xl sm:text-2xl hover:text-blue-400 sm:hover:text-black">
            The Perfect Balance of Power and Precision :-
          </h1>
          <p className="hover:text-blue-400">
            The BMW M5 is a powerhouse of performance, known for its precise
            handling and exceptional speed. When it comes to drifting, this
            high-performance sedan proves that raw power and control can come
            together in perfect harmony. Thanks to its sophisticated
            all-wheel-drive system, the M5 can maintain a controlled slide
            around corners, allowing drivers to push its limits while still
            maintaining stability. The car's turbocharged V8 engine delivers
            immense torque, helping to break traction and initiate the drift.
            Whether on a closed circuit or a winding mountain road, the BMW M5’s
            balance of precision engineering and brute force makes it a favorite
            for enthusiasts looking to master the art of drifting.
          </p>
        </div>
        </div>
      </section>
      <hr className="h-[0.5px] " />
      <section
        id="sports"
        className="p-4 min-h-screen bg-gradient-to-r from-blue-900 to-black "
      >
        <img
          className="w-14 sm:w-20 m-auto pt-5 rounded-full hover:scale-[1.03] cursor-pointer"
          src="https://pict.ai/images/secure/3DPRA3/qReX0iloD0erSo8_1720948796.png"
          alt=""
        />
        <div className="flex justify-center text-white">
          <h1 className="font-bold text-xl sm:text-2xl m-3 hover:text-blue-600">
            <span className="text-blue-600 text-2xl sm:text-3xl">S</span>PORTS
          </h1>
        </div>

        <div className="flex  w-full mt-14 sm:mt-0 flex-col xl:flex-row h-full items-center justify-around ">
          <div className="bmw text-white  font-medium text-center hidden sm:flex  font-sans xl:w-[25%] items-center p-3 justify-center  text-[1rem] lg:text-xl">
            <p className="">
              The BMW M3, M4, and M5 are iconic models in the world of
              high-performance sports sedans and coupes. The M3, with its agile
              handling and sharp design, has long been the benchmark for sports
              sedans, offering a perfect blend of luxury, power, and driving
              dynamics. The M4, closely related to the M3 but in a coupe form,
              takes the performance to another level with its aggressive styling
              and track-ready capabilities. Both vehicles are powered by
              turbocharged engines, with the M4 offering a more focused,
              lightweight driving experience compared to its sedan counterpart.
            </p>
          </div>
          <div className="w-[80%] sm:w-[65%] xl:w-[50%]">
            <img
              className="rounded-lg hover:scale-[1.02] cursor-pointer  "
              src="https://i.imgur.com/M5c1ja2.jpg?1"
              alt=""
            />
          </div>
          <div className="sm:text-blue-400 shadow-md text-white flex bmw-text font-medium text-center  font-sans xl:w-[25%] justify-center items-center text-[1rem] lg:text-xl p-3">
            <p>
              The M5, on the other hand, represents BMW's flagship in the
              performance sedan segment, combining luxury and practicality with
              a monstrous V8 engine that delivers thrilling acceleration and
              top-tier handling. The M5 offers more refined comfort compared to
              the M3 and M4 but doesn’t compromise on raw power or driving
              excitement. Whether it’s the precision of the M3, the
              track-oriented M4, or the refined performance of the M5, each
              model showcases BMW’s dedication to pushing the boundaries of
              what’s possible in a sports car, all while maintaining their
              renowned build quality and cutting-edge technology.
            </p>
          </div>
        </div>
      </section>
      <hr className="h-[0.5px] " />
      <section
        id="luxary"
        className="bg-gradient-to-r from-black w-full to-blue-800 min-h-screen"
      >
        <div className="flex flex-col items-center justify-center p-4">
          <img
            className="w-16 h-16 sm:w-24 sm:h-24 rounded-full cursor-pointer  hover:scale-[1.04] duration-300"
            src="https://www.rwcarbon.com/media/uploads_ckeditor/carbon-fiber-front-seat-illuminated-emblem-cover-watermarked-(4).jpg"
            alt=""
          />
          <h1 className="text-white font-bold text-2xl mt-2 hover:text-blue-400">
            <span className="text-blue-400">L</span>UXARY
          </h1>
        </div>
<div className="sm:hidden ">
        <Carousel className=" flex items-center m-2 rounded-lg"  responsive={responsive}>
          <div className="w-[100%] " >
            <img className="w-full p-1"
              src="https://cdn.pixabay.com/photo/2023/05/03/14/47/bmw-7967854_1280.jpg"
              alt=""
            />
          </div>
          <div className="w-full p-1">
            <img className="w-full"
              src="https://media.ed.edmunds-media.com/bmw/7-series/2021/oem/2021_bmw_7-series_sedan_745e-xdrive_ri_oem_1_815.jpg"
              alt=""
            />
          </div>
        </Carousel>
        </div>

        <div className="hidden sm:flex w-full gap-4 mt-14 lg:mt-2 justify-center">
          <div className=" p-4 w-[42%] bmw-seats">
            <img
              className="rounded-lg hover:scale-[1.025] duration-300 cursor-pointer"
              src="https://cdn.pixabay.com/photo/2023/05/03/14/47/bmw-7967854_1280.jpg"
              alt=""
            />
          </div>
          <div className=" p-4 w-[42%] bmw-seats">
            <img
              className="rounded-lg w-full hover:scale-[1.025] duration-300 cursor-pointer"
              src="https://media.ed.edmunds-media.com/bmw/7-series/2021/oem/2021_bmw_7-series_sedan_745e-xdrive_ri_oem_1_815.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col justify-center mt-4 p-3 md:p-5 md:text-xl hero-text text-center text-white font-bold ">
          <h1 className="text-2xl ">
            B<span className="text-blue-400">M</span>W COMF
            <span className="text-blue-400">ORT</span> :-
          </h1>
          <p>
            BMW’s luxury seats are designed with an emphasis on both comfort and
            support, ensuring a premium driving experience. Upholstered in
            high-quality materials like Merino leather, these seats offer
            exceptional cushioning and adjustability, with options like heating,
            ventilation, and massaging features to enhance comfort during long
            drives. The ergonomic design provides excellent lumbar support,
            helping reduce fatigue, while the advanced seating technology allows
            for personalized adjustments to suit each driver’s preference.
            Whether in a 3 Series or a flagship 7 Series, BMW’s seats deliver a
            blend of sophistication and convenience that elevates the overall
            driving experience.
          </p>
        </div>
      </section>
      <hr className="h-[0.5px] " />
      <footer className="flex flex-col  p-12 h-min-screen bg-gradient-to-t from-blue-800 w-full to-black">
        <div className="lg:flex justify-evenly">
          <div className=" lg:w-[25%] text-center mt-2 ">
           
            <h2 className="text-xl flex items-center text-white font-bold">
              <span className="text-2xl">C</span>ONROLLING{" "}
              <img
                className="w-10 ml-3 rounded-full "
                src="https://fordonsdesign.se/wp-content/uploads/2024/01/IMG_7814.webp"
                alt=""
              />
            </h2>
           
            <p className="text-white  text-[1rem] sm:text-xl">
              BMW’s precise and responsive handling is a hallmark of its
              vehicles, thanks to advanced suspension systems, adaptive
              steering, and dynamic stability control. Whether navigating tight
              corners or cruising at high speeds, BMW’s engineering ensures a
              connected, confident driving experience.
            </p>
          </div>
          <div className="lg:w-[25%] text-center mt-2 mb-2">
            <h2 className="text-xl flex items-center text-white font-bold">
              <span className="text-2xl">R</span>OAD GRIP{" "}
              <img
                className="w-10 ml-3 rounded-full "
                src="https://media.istockphoto.com/id/1269785368/vector/road-construction-logo-road-maintenance-creative-sign-concept-paving-design-template-vector.jpg?s=612x612&w=0&k=20&c=nsHUDbyjIO1rFRpkgsug51nz-39zPx470CF6vIlcsg8="
                alt=""
              />
            </h2>
            <p className="text-white text-[1rem] sm:text-xl">
              BMW vehicles are known for their exceptional road grip, thanks to
              advanced tire technology, precision engineering, and adaptive
              handling systems. With features like the xDrive all-wheel drive
              system, BMW ensures optimal traction in various weather
              conditions, offering stability on both dry and wet roads.
              experience.
            </p>
          </div>
          <div className="lg:w-[25%] text-center mt-2">
            <h2 className="text-xl flex items-center text-white font-bold">
              <span className="text-2xl">E</span>NGIEN{" "}
              <img
                className="rounded-full w-14 ml-3"
                src="https://www.carscoops.com/wp-content/uploads/2022/01/BMW-V12-Engine.jpg"
                alt=""
              />
            </h2>
            <p className="text-white text-[1rem]  sm:text-xl">
              BMW engines are renowned for their power, smoothness, and
              efficiency, offering a range of options from turbocharged
              four-cylinders to high-performance V8s and inline-six engines. The
              brand’s engineering focuses on delivering a thrilling driving
              experience while maintaining fuel efficiency and reliability.
            </p>
          </div>
        </div>
        <hr className="mt-5 " />
        <div className=" flex mt-8 justify-center text-white ">
          <div className="font-medium cursor-pointer flex items-center  sm:text-xl ">
          <a href="#home">  ALL RIGHT RESERVED || &copy; BMW{" "}
            
              <img
                src="https://wallpapers.com/images/featured/bmw-logo-png-zpen5xltuwu1poy4.jpg"
                className="w-8 md:w-10 m-auto mt-2 rounded-full"
                alt=""
              />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
