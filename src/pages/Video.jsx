import React, { useEffect } from 'react';

const Video = () => {
  useEffect(() => {
    document.title = "SRIYOG Video | Professional Marketplace";
  }, []);

  const name = "Featured SRIYOG Video";

  const videos = [
    {
      src: "https://www.youtube.com/embed/eS0Fm8zbk0c",
      caption: "Nepal Startup Meet",
    },
    {
      src: "https://www.youtube.com/embed/jgcHULl0ML8",
      caption: "Nepal Startup Meet 2019: Sriyog.com",
    },
    {
      src: "https://www.youtube.com/embed/cNCSaeLGlS0",
      caption: "How to Find job in SRIYOG ?",
    },
    {
      src: "https://www.youtube.com/embed/dwbmS85CanQ",
      caption: "SRIYOG Nepal Startup Meet",
    },
    {
      src: "https://www.youtube.com/embed/BM9yTsfkgb4",
      caption: "पार्टटाइम जागिर जुराउन वेबसाइटको बिकास - प्रकाश उप्रेती",
    },
    {
      src: "https://www.youtube.com/embed/bc7vYj3Oqz8",
      caption: "बेरोजगारको सहारा बन्दै श्रीयोग डट कम संस्थापक उप्रेती",
    },
    {
      src: "https://www.youtube.com/embed/ejnHoKjom98",
      caption: "How To Earn From Part Time Job In Nepal Sriyog !",
    },
    {
      src: "https://www.youtube.com/embed/3y1_MxeOq8s",
      caption: "Sambhawana Podcast 19: Sriyog.com - Desired Professional Platform",
    },
    {
      src: "https://www.youtube.com/embed/8K1QScXWWic",
      caption: "How to make a sriyog account llश्री योग एप्पस मा कसरी आफुनो नाम रजिस्टर गर्ने ।",
    },
    {
      src: "https://www.youtube.com/embed/FPhQOT6H6fg",
      caption: "पार्ट टाइम रोजगारीको लागि SRIYOG|| Part time jobs in Nepal",
    },
    {
      src: "https://www.youtube.com/embed/HhEHWT-DfxQ",
      caption: "How to get online jobs | get jobs & employees by sriyog app",
    },
    {
      src: "https://www.youtube.com/embed/VmTuwHmrTFw",
      caption: "Sumadhur Bhet- Sima Basnet with Prakash Upreti",
    },
  ];

  return (
    <div className="w-full">
      <section className="mb-[56px] bg-[#8b181b] w-full flex justify-center items-center py-10">
        <section className="w-[1140px] max-lg:w-[88%] max-md:w-[89%]">
          <div>
            <div className="mb-2">
              <h1 className="text-[35px] justify-center items-center flex mt-2 font-semibold text-white">{name}</h1>
             
            </div>

            <div className="w-full aspect-video">
              <iframe
                className="w-full h-full rounded-xl shadow-xl"
                src="https://www.youtube.com/embed/ctzTleg6j1c"
                title="SRIYOG Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>
      </section>

      <section className="w-[1140px] max-lg:w-[88%] max-md:w-[89%] mx-auto px-4 py-10">
       
      <h2 className="text-[18px] font-semibold sm:text-[32px] -mt-10 mb-6">
          SRIYOG Videos
        </h2>

        <div className="grid gap-12 grid-cols-1 sm:grid-cols-2 ">
          {videos.map((video, index) => (
            <div key={index} className="w-full ">
              <div className="aspect-video mb-4 ">
                <iframe
                  className="w-full h-full shadow-xl "
                  src={video.src}
                  title={video.caption}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <p className="sm:text-[18px] ">
                {video.caption}
              </p>
            </div>
          ))}
        </div>

      </section>
    </div>
  );
};

export default Video;
