import React, { useEffect } from 'react'
import Breadcrumb from '../components/Breadcrumb'
import img1 from "/assets/images/fonts/jdr-amrit.JPG";
import img2 from "/assets/images/fonts/jdr-amrit-2.jpg";
import img3 from "/assets/images/fonts/jdr-amrit-4.jpg"
import img4 from "/assets/images/fonts/jdr-bagmati.jpg";
import img5 from "/assets/images/fonts/jdr-binduakshar.jpg";
import img6 from "/assets/images/fonts/jdr-birendra.jpg";
import img7 from "/assets/images/fonts/jdr-dharahara.jpg";
import img8 from "/assets/images/fonts/jdr-harka-bunma.JPG";
import img9 from "/assets/images/fonts/jdr-janakpur.jpg";
import img10 from "/assets/images/fonts/jdr-koshi.jpg";
import img11 from "/assets/images/fonts/jdr-lumbini.jpg";
import img12 from "/assets/images/fonts/jdr-mahalaxmi.jpg";
import img13 from "/assets/images/fonts/jdr-mechi.jpg";
import img14 from "/assets/images/fonts/jdr-pracas.jpg";
import img15 from "/assets/images/fonts/jdr-province-1.jpg";
import img16 from "/assets/images/fonts/jdr-province-2.jpg";
import img17 from "/assets/images/fonts/jdr-province-3.jpg";
import img18 from "/assets/images/fonts/jdr-province-4.jpg";
import img19 from "/assets/images/fonts/jdr-province-5.jpg";
import img20 from "/assets/images/fonts/jdr-province-6.jpg";
import img21 from "/assets/images/fonts/jdr-province-7.jpg";
import img22 from "/assets/images/fonts/jdr-purwanchal.JPG";
import img23 from "/assets/images/fonts/jdr-puspakshar.JPG";
import img24 from "/assets/images/fonts/jdr-sagarmatha.JPG";
import img25 from "/assets/images/fonts/pracas.JPG";
import img26 from "/assets/images/fonts/24.png";
import font1 from "/assets/download-fonts/JDR-AMRIT.ttf";
import font2 from "/assets/download-fonts/JDR-Amrit2.ttf";
import font3 from "/assets/download-fonts/JDR-Amrit4.ttf";
import font4 from "/assets/download-fonts/JDR-Bagmati.ttf";
import font5 from "/assets/download-fonts/JDR-Bindukshar-1.ttf";
import font6 from "/assets/download-fonts/JDR-Birendra.ttf";
import font7 from "/assets/download-fonts/JDR-Dharahara.ttf";
import font8 from "/assets/download-fonts/JDR-Harka-Bunma.ttf";
import font9 from "/assets/download-fonts/JDR-Janakpur.ttf";
import font10 from "/assets/download-fonts/JDR-Koshi.ttf";
import font11 from "/assets/download-fonts/JDR-Lumbini.ttf";
import font12 from "/assets/download-fonts/JDR-Mahalaxmi.ttf";
import font13 from "/assets/download-fonts/JDR-Mechi.ttf";
import font14 from "/assets/download-fonts/JDR-Pracas.ttf";
import font15 from "/assets/download-fonts/JDR-Province-1.ttf";
import font16 from "/assets/download-fonts/JDR-Province-2.ttf";
import font17 from "/assets/download-fonts/JDR-Province-3.ttf";
import font18 from "/assets/download-fonts/JDR-Province-4.ttf";
import font19 from "/assets/download-fonts/JDR-Province-5.ttf";
import font20 from "/assets/download-fonts/JDR-Province-6.ttf";
import font21 from "/assets/download-fonts/JDR-Province-7.ttf";
import font22 from "/assets/download-fonts/JDR-Purwanchal.ttf";
import font23 from "/assets/download-fonts/JDR-Puspakshar-1.ttf";
import font24 from "/assets/download-fonts/JDR-Sagarmatha.ttf";
import font25 from "/assets/download-fonts/Pracas.ttf";
import font26 from "/assets/download-fonts/jdr-fonts.zip";


const Fonts = () => {
  const name = "Download JDR Fonts";
  const des = "";
  const card = [
    { name: "JDR Amrit", image: `${img1}`, link: `${font1}` },
    { name: "JDR Amrit 2", image: `${img2}`, link: `${font2}` },
    { name: "JDR Amrit 4", image: `${img3}`, link: `${font3}` },
    { name: "JDR Bagmati", image: `${img4}`, link: `${font4}` },
    { name: "JDR Bindukshar 1", image: `${img5}`, link: `${font5}` },
    { name: "JDR Birendra", image: `${img6}`, link: `${font6}` },
    { name: "JDR Dharahara", image: `${img7}`, link: `${font7}` },
    { name: "JDR Harka Bunma", image: `${img8}`, link: `${font8}` },
    { name: "JDR Janakpur", image: `${img9}`, link: `${font9}` },
    { name: "JDR Koshi", image: `${img10}`, link: `${font10}` },
    { name: "JDR Lumbini", image: `${img11}`, link: `${font11}` },
    { name: "JDR Mahalaxmi", image: `${img12}`, link: `${font12}` },
    { name: "JDR Mechi", image: `${img13}`, link: `${font13}` },
    { name: "JDR Pracas", image: `${img14}`, link: `${font14}` },
    { name: "JDR Province 1", image: `${img15}`, link: `${font15}` },
    { name: "JDR Province 2", image: `${img16}`, link: `${font16}` },
    { name: "JDR Province 3", image: `${img17}`, link: `${font17}` },
    { name: "JDR Province 4", image: `${img18}`, link: `${font18}` },
    { name: "JDR Province 5", image: `${img19}`, link: `${font19}` },
    { name: "JDR Province 6", image: `${img20}`, link: `${font20}` },
    { name: "JDR Province 7", image: `${img21}`, link: `${font21}` },
    { name: "JDR Purwanchal", image: `${img22}`, link: `${font22}` },
    { name: "JDR Puspakshar", image: `${img23}`, link: `${font23}` },
    { name: "JDR Sagarmatha", image: `${img24}`, link: `${font24}` },
    { name: "Pracas", image: `${img25}`, link: `${font25}` },
    { name: "Download All Fonts", image: `${img26}`, link: `${font26}` },
  ]
 useEffect(()=>{
      document.title="SRIYOG Fonts | Professional Marketplace"
    },[]);
  return (
    <>
      <Breadcrumb name={name} des={des} />
      <section className='max-w-[1140px] mx-auto grid lg:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1  max-lg:w-[88%] max-md:w-[87%] gap-8 mb-[56px]'>
        {card.map((item, idx) => (
          <div key={idx + 1} className='bg-[#fff] hover:-translate-y-4 transition duration-500 ease-in-out py-[40px] text-center shadow-[0_0_10px_rgba(0,0,0,0.3)] rounded-md'>
            <img src={item.image} alt={item.name} className='mb-4 h-[170px] w-full' />
            <p className='mb-[25px] font-semibold text-[#333] text-[1.4rem]'>{item.name}</p>
            <a href={item.link} className='bg-[#4b4b4b] text-white px-5 py-3 rounded-md font-bold hover:bg-[#5a5a5a]'>Download Font</a>
          </div>
        ))}
      </section>
    </>
  )
}

export default Fonts