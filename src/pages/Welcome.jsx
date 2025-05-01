import { Card, Image } from "antd";
import React, { useEffect } from "react";
import image from "../assets/images/welcome/logo.png";
import image2 from "../assets/images/welcome/prakash_sig.png";
import { Link } from "react-router-dom";
import { FaLinkedin, FaTelegram, } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";


const Welcome = () => {
   useEffect(()=>{
      document.title="SRIYOG Welcome | Professional Marketplace"
    },[]);
  
  return (
    <div className="flex justify-center items-center mb-[56px]  max-w-[1140px] max-lg:w-[88%] max-md:w-[89%] mx-auto  sm:px-6  py-0">
      <Card className=" mt-12 shadow-2xl rounded-[6px]  ">
        <div className="flex justify-center items-center">
          <Image
            className="w-24 mt-10 mb-10 h-20 justify-center items-center"
            src={image}
            preview={false}
            alt="Pracas Upreti"
          />
        </div>
        <div className="px-1">
          <p className="text-base text-justify ">
          <span className="ml-8  inline-block max-md:ml-0">
    SRIYOG पार्ट टाइम गर्न तथा काम गर्ने ब्यक्तीहरु पाउने नेपालकै ठुलो संजाल हो ।
  </span> फुर्सदको समयलाई अवसरमा परिणत गरि जिओलोकेशन सिस्टममा
            आधारित भइ १८ समूह अनि त्यसै समुह भित्र पर्ने १५० भन्दा बढी
            उप-समूहहरुमा काम गर्ने अवसर प्रदान गर्दछ ।
            <br />
            <br />
            SRIYOG is Nepal's largest network for finding part-time and working
            people. Turning leisure time 
            into opportunities, based on the
            geolocation system, it provides the opportunity to work in 18 groups
            and more than 150 sub-groups within the same group.
            <br />
            <br />
            काम भनौ वा काम खोज्ने मान्छे र काम गरिदिने मान्छेको बीचमा सेतु बन्दै
            देशमा रहेको बिध्यमान बेरोजगारीको समस्यालाई धेरै हद सम्म समाधान गर्ने
            जमर्को हामीले १२ सेप्टेम्बर २०१६ मा गरेको थियौ, फलस्वरूप आज तपाई
            हामी सँग काम गर्न वा कामदार खोज्नको लागि जोडिन आउनु भएको छ ।
            <br />
            <br />
            We did work on 12th September 2016 to solve the existing
            unemployment problem in the country by building a bridge between the
            people who are looking for work and the people who do the work.
            <br />
            <br />
            काम सानो ठुलो भन्ने हुदैन तर पनि सानो भन्दा सानो देखि लिएर ठुलो काम
            गर्ने व्यक्तिहरुलाई काम बारे जानकारी, सीप भएका दक्ष प्राबिधिकहरुको
            डिजिटल प्रोफाइलिंग गर्ने व्यबस्था हामीले मिलाउदै आइरहेको छौ । हरेक
            व्यक्ति संग केहि न केहि सिप हुन्छ, अझ महिलाहरु संग झन बढी सीप हुन्छ,
            जुन सीपको लागि न शिक्षाको आवश्यकता पर्छ न कुनै कागज पत्रको नै । छोरि
            मान्छे अगाडी बढ्दै गरेको नेपाल जस्तो हाम्रो सानो मुलुकमा सीप र
            दक्षता पहिचान गरि सम्बन्धित पेशामा हामी कामको मुल्यांकन गर्दै समान
            अवसर उपलब्ध होस भन्ने कामना गर्दछौ ।
            <br />
            <br />
            The job does not mean small or big, but we are arranging the system
            of digital profiling of skilled professionals with information about
            the work, from the smallest to the largest. Every person has some
            skills, even women have more skills, for which skills neither need
            education nor any papers. In our small country like Nepal, where
            girls are moving forward, we wish that equal opportunities are
            available in the related professions by recognizing skills and
            competences.
            <br />
            <br />
            पुरानो तरिका अनुसार कामदार खोज्ने भन्दा पनि सर्विस बेच्ने या भनौ
            सर्विस किन्नु पर्ने बाध्यता अनि तेस्तो व्यक्तिलाई काम लगाउदा काटिने
            सर्विस फी लिने पुरानो बिचाधारालाई परिणत गर्दै “नो मिडलमेन कन्सेप्ट”
            लाई बिकाश गर्दै लैजाने प्रवृतिको विकास गरेको छौ । तपाई जति काम गर्नु
            हुन्छ, त्यो तपाईको सीप र मेहेनतको कमाई हो । तपाई कसैलाई काम लगाउनु
            हुन्छ भने किन १०-१५% रकम ज्यादा खर्च गर्नु हुन्छ र काम गर्ने मान्छे
            र काम गराउने मान्छे बीचमा भएको समझदारी बिशुद्ध रुपमा दुवै व्यक्तिको
            भइ तेस्रो व्यक्तिको कुनै कमिसन नहोस भन्ने हामी चाहन्छौ ।
            <br />
            <br />
            Instead of looking for workers according to the old method, we have
            developed a tendency to develop the "no middleman concept" by
            changing the old way of having to sell services or rather buying
            services and charging a service fee when hiring such a person. The
            amount of work you do is the result of your skill and hard work. If
            you hire someone, why spend 10-15% more money and we want the
            agreement between the person doing the work and the person doing the
            work to be purely between both people and there is no commission for
            the third person.
            <br />
            <br />
            SRIYOG मा १८ समूह अनि १५० भन्दा बढी उप समूहहरुमा दैनिक जीवनमा काम
            गर्ने व्यक्ति या कामदार खोज्ने अवसर दिनेछ ।
            <br />
            <br />
            In SRIYOG, 18 groups and more than 150 sub-groups will provide an
            opportunity to find people who work in daily life.
          </p>
        </div>

        <div className="w-48 h-52 mt-16 mx-10">
          <Image src={image2} alt="Pracas_signature" preview={false} />
        </div>
        <div className="flex mx-14">
          <p className="-mt-16 text-base font-semibold">
            प्रकाश उप्रेती
            <br />
            <span className="font-normal">संस्थापक</span>
            <br />
              <div className="flex gap-2 mt-1">

             <Link to= "https://t.me/sriyog">
             <FaTelegram   className="text-[20px]  text-black hover:text-black inline-block" />
                                         </Link>
                                         <Link to="https://x.com/pracas" target="_blank">
                                         <FaSquareXTwitter className="text-[20px]  text-black hover:text-black inline-block" />
                                    </Link>
                                       
                                         <Link to="https://www.linkedin.com/in/pracasupreti/">
                                           <FaLinkedin className="text-[20px]  text-black hover:text-black inline-block" />
                                         </Link>
            </div>
          </p>
        </div>
      </Card>
    </div>
  );
};

export default Welcome;
