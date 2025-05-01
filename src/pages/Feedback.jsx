import React, { useEffect } from 'react'
import Breadcrumb from '../components/Breadcrumb';
import { LuMessageCircleMore } from "react-icons/lu";
// import { toast } from 'react-toastify';

const Feedback = () => {
  const name = "Feedback Form";
  // const [fullName, setFullName] = useState("");
  // const [province, setProvince] = useState("");
  // const [district, setDistrict] = useState("");
  // const [city, setCity] = useState("");
  // const [ward, setWard] = useState("");
  // const [company, setCompany] = useState("");
  // const [designation, setDesignation] = useState("");
  // const [feedback, setFeedBack] = useState("");
  // const submit = (e) => {
  //   e.preventDefault();
  //   toast.success("Feedback sent successfully");
  // }
  useEffect(() => {
    document.title = "SRIYOG Feedback | Professional Marketplace"
  }, []);
  return (
    <>
      <Breadcrumb name={name} />
      {/* <section className='max-w-[1140px] mx-auto mb-[56px]'>
      <div className='max-md:w-full w-[45%] mx-auto px-4 max-md:px-5 space-y-3 text-justify mb-[56px] '>
          <p>Namaste & Welcome,</p>
          <p>Thank you for using the SRIYOG app! We hope it’s been helpful in connecting you with the right services and making your experience smooth and convenient.</p>
          <p>We’re always working to improve, and your feedback means a lot to us. If you could spare few minutes, we’d love to hear your thoughts—what you liked, what we can improve, or any features you'd like to see in the future.</p>
          <p>Thank you for being a part of the SRIYOG community!</p>
          <p>Warm regards,<br />
            SRIYOG Team</p>
        </div>
        <form className='bg-[#e2e2e2] max-md:w-full  mx-auto max-md:rounded-none max-md:px-5 w-[55%] rounded-md m-auto shadow-md' onSubmit={submit}>
          <div className='mx-8 max-md:mx-2 my-[15px] pt-[12px]'>
            <label htmlFor="fullname" className=' text-[1.1rem]'>Full Name</label><br />
            <input type="text" name="" id="fullname" className='w-full rounded-md h-[40px] mt-2' onChange={(e) => setFullName(e.target.value)} value={fullName} />
          </div>
          <div className='mx-8 max-md:mx-2 mb-[15px] flex flex-wrap justify-between'>
            <div className='w-[48%] max-md:w-full max-md:mb-[15px]'>
              <label htmlFor="province" className=' text-[1.1rem]'>Province</label><br />
              <select id="province" name="province" className='px-4 rounded-md h-[40px] mt-2 w-full' onChange={(e) => setProvince(e.target.value)} value={province}>
                <option value="province_1">Koshi Province</option>
                <option value="province_2">Madhesh Province</option>
                <option value="province_3">Bagmati Province</option>
                <option value="province_4">Gandaki Province</option>
                <option value="province5_">Lumbini Province</option>
                <option value="province6_">Karnali Province</option>
                <option value="province_7">Sudurpashchim Province</option>
              </select>
            </div>
            <div className='w-[48%] max-md:w-full'>
              <label htmlFor="district" className=' text-[1.1rem]'>District</label><br />
              <select id="district" name="district" className='px-4 rounded-md h-[40px] mt-2 w-full' onChange={(e) => setDistrict(e.target.value)} value={district}>
                <option value="bhojpur">Bhojpur</option>
                <option value="dhankuta">Dhankuta</option>
                <option value="ilam">Ilam</option>
                <option value="jhapa">Jhapa</option>
                <option value="khotang">Khotang</option>
                <option value="morang">Morang</option>
                <option value="okhaldhunga">Okhaldhunga</option>
                <option value="panchthar">Panchthar</option>
                <option value="sankhuwasabha">Sankhuwasabha</option>
                <option value="solukhumbu">Solukhumbu</option>
                <option value="sunsari">Sunsari</option>
                <option value="taplejung">Taplejung</option>
                <option value="terhathum">Terhathum</option>
                <option value="udayapur">Udayapur</option>
                <option value="bara">Bara</option>
                <option value="dhanusha">Dhanusha</option>
                <option value="mahottari">Mahottari</option>
                <option value="parsa">Parsa</option>
                <option value="rautahat">Rautahat</option>
                <option value="saptari">Saptari</option>
                <option value="sarlahi">Sarlahi</option>
                <option value="siraha">Siraha</option>
                <option value="bhaktapur">Bhaktapur</option>
                <option value="chitwan">Chitwan</option>
                <option value="dhading">Dhading</option>
                <option value="dolakha">Dolakha</option>
                <option value="kathmandu">Kathmandu</option>
                <option value="kavrepalanchok">Kavrepalanchok</option>
                <option value="lalitpur">Lalitpur</option>
                <option value="makwanpur">Makwanpur</option>
                <option value="nuwakot">Nuwakot</option>
                <option value="ramechhap">Ramechhap</option>
                <option value="rasuwa">Rasuwa</option>
                <option value="sindhuli">Sindhuli</option>
                <option value="sindhupalchok">Sindhupalchok</option>
                <option value="baglung">Baglung</option>
                <option value="gorkha">Gorkha</option>
                <option value="kaski">Kaski</option>
                <option value="lamjung">Lamjung</option>
                <option value="manang">Manang</option>
                <option value="mustang">Mustang</option>
                <option value="myagdi">Myagdi</option>
                <option value="nawalpur">Nawalpur</option>
                <option value="parbat">Parbat</option>
                <option value="syangja">Syangja</option>
                <option value="tanahun">Tanahun</option>
                <option value="arghakhanchi">Arghakhanchi</option>
                <option value="banke">Banke</option>
                <option value="bardiya">Bardiya</option>
                <option value="dang">Dang</option>
                <option value="eastern_rukum">Eastern Rukum</option>
                <option value="gulmi">Gulmi</option>
                <option value="kapilvastu">Kapilvastu</option>
                <option value="palpa">Palpa</option>
                <option value="pyuthan">Pyuthan</option>
                <option value="rolpa">Rolpa</option>
                <option value="rupandehi">Rupandehi</option>
                <option value="nawalparasi_west">Nawalparasi (West)</option>
                <option value="dailekh">Dailekh</option>
                <option value="dolpa">Dolpa</option>
                <option value="humla">Humla</option>
                <option value="jajarkot">Jajarkot</option>
                <option value="jumla">Jumla</option>
                <option value="kalikot">Kalikot</option>
                <option value="mugu">Mugu</option>
                <option value="salyan">Salyan</option>
                <option value="surkhet">Surkhet</option>
                <option value="western_rukum">Western Rukum</option>
                <option value="achham">Achham</option>
                <option value="baitadi">Baitadi</option>
                <option value="bajhang">Bajhang</option>
                <option value="bajura">Bajura</option>
                <option value="dadeldhura">Dadeldhura</option>
                <option value="darchula">Darchula</option>
                <option value="doti">Doti</option>
                <option value="kailali">Kailali</option>
                <option value="kanchanpur">Kanchanpur</option>
              </select>
            </div>

          </div>
          <div className='mx-8 max-md:mx-2 mb-[15px] flex flex-wrap justify-between'>
            <div className='w-[48%] max-md:w-full max-md:mb-[15px]'>
              <label htmlFor="City" className=' text-[1.1rem]'>City</label><br />
              <input type="text" name="" id="City" className='w-full rounded-md h-[40px] mt-2' onChange={(e) => setCity(e.target.value)} value={city} />
            </div>
            <div className='w-[48%] max-md:w-full'>
              <label htmlFor="Ward" className=' text-[1.1rem]'>Ward</label><br />
              <input type="text" name="" id="Ward" className='w-full rounded-md h-[40px] mt-2' onChange={(e) => setWard(e.target.value)} value={ward} />
            </div>

          </div>
          <div className='mx-8 max-md:mx-2 mb-[15px]'>
            <label htmlFor="nof" className=' text-[1.1rem]'>Name of Organization</label><br />
            <input type="text" name="" id="nof" className='w-full rounded-md h-[40px] mt-2' onChange={(e) => setCompany(e.target.value)} value={company} />
          </div>
          <div className='mx-8 max-md:mx-2 mb-[15px]'>
            <label htmlFor="designation" className=' text-[1.1rem]'>Designation</label><br />
            <input type="text" name="" id="designation" className='w-full rounded-md h-[40px] mt-2' onChange={(e) => setDesignation(e.target.value)} value={designation} />
          </div>
          <div className='mx-8 max-md:mx-2 mb-[15px]'>
            <label htmlFor="photo/files" className=' text-[1.1rem]'>Photo/Headshot</label><br />
            <input type="file" name="" id="photo/files" className='  h-[40px] mt-2' />
          </div>
          <div className='mx-8 max-md:mx-2 mb-[15px]'>
            <label htmlFor="feedback" className=' text-[1.1rem]'>Feedback</label><br />
            <textarea name="" id="feedback" className='h-[80px] w-full mt-2' onChange={(e) => setFeedBack(e.target.value)} value={feedback}></textarea>
          </div>
          <div className='mx-8 max-md:mx-2'>
            <input type="submit" name="" id="" value="Submit" className='rounded-md bg-[#4b4b4b] text-white py-2 px-6 mb-4 text-center hover:bg-[#4c4c4c] font-bold cursor-pointer' />
          </div>
        </form>
      </section> */}
      <section className='max-w-[1140px] max-md:w-full max-lg:w-[88%] mx-auto grid lg:grid-cols-5 max-lg:grid-cols-6 max-md:grid-cols-1 max-md:gap-0 max-lg:gap-5 gap-10 mb-[56px]'>
        <div className='lg:col-span-2 max-lg:col-span-2 max-md:col-span-1 max-md:w-[88%] mx-auto max-md:mb-[30px]'>
          <p className='font-medium text-[1.8rem] max-lg:text-[1.2rem] max-md:text-[1.1rem] mb-4'>Welcome to the Feature Request and Bug Report Submission Form</p>
          <img className='mb-4' src="/assets/images/feedback/feedback.png" alt="feedback" />
          <p className='text-justify'>Use this form to request new features or suggest modification to existing features. Your use of this form is conditioned upon your reading and agreeing to the terms and conditions below. You can also use this forms to report suspected bugs in sriyog.com. We normally do not send personal replies to feature requests or bug reports . We do, however, read each and every message. We use the information to improve our products and services. Your comments, suggestions, and ideas for improvements are very important to us.</p>
        </div>
        <div className='bg-[#efefef] rounded-md max-md:rounded-none lg:col-span-3 p-12 max-lg:p-8  max-md:px-8 max-lg:col-span-4'>
          <p className='font-medium text-[1.8rem] flex gap-2 items-center mb-4 max-lg:text-[1.2rem] max-md:text-[1.1rem]'><LuMessageCircleMore className='text-4xl max-md:text-2xl' />Suggestion/Feedback for a feature</p>
          <p className='text-justify mb-4 '>Fill in the details below regarding any new feature you wish to be implemented in Sriyog website. Your feedback and suggestions are highly appreciated. </p>
          <p className='mb-4'>Please provide your details.</p>
          <form action="">
            <div className='mb-4'>
              <label htmlFor="name">Full Name</label><br />
              <input type="text" name="" id="name" placeholder='Pracas Upreti' required className='w-full p-2 rounded-md border border-[#efefef] mt-2' />
            </div>
            <div className='mb-4'>
              <label htmlFor="city">City</label><br />
              <input type="text" name="" id="city" placeholder='Kathmandu' required className='w-full p-2 rounded-md border border-[#efefef] mt-2' />
            </div>
            <div className='mb-4'>
              <label htmlFor="phn">Phone Number</label><br />
              <input type="text" name="" id="phn" placeholder='+977-981234XXXX' required className='w-full p-2 rounded-md border border-[#efefef] mt-2' />
            </div>
            <div className='mb-4'>
              <label htmlFor="email">Email Address</label><br />
              <input type="email" name="" id="email" placeholder='info@gmail.com' required className='w-full p-2 rounded-md border border-[#efefef] mt-2' />
              <span className='text-sm max-md:text-xs mx-2'>We will never share your email address with anyone.</span>
            </div>
            <div className='mb-4'>
              <textarea name="" id="" placeholder='Please write your message' className='h-32 w-full px-4 py-3 rounded-md border border-[#efefef]'></textarea>
            </div>
          </form>
          <input type="submit" name="" id="" value="submit" className='cursor-pointer hover:bg-[#ad3034] px-4 py-2 bg-[#8b181b] text-white font-bold rounded-md' />
        </div>
      </section>
    </>
  )
}

export default Feedback