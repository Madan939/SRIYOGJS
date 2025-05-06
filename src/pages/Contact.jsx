import React, { useEffect } from 'react'
import Breadcrumb from '../components/Breadcrumb';
import { FaAddressCard, FaBullhorn, FaUser } from 'react-icons/fa6';
import { IoShieldHalfSharp } from 'react-icons/io5';
import { RiMailOpenFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const Contact = () => {
    const card = [
        { img: "/assets/images/contact/1.png", name: "Niranjan Sharma", field: "Project Manager", app: "Telegram", link: "https://t.me/niranjanpm" },
        { img: "/assets/images/contact/2.png", name: "Aashis Sunar", field: "Business Development Officer", app: "WhatsApp", link: "https://wa.me/9779852024365" },
        { img: "/assets/images/contact/3.png", name: "Suraj Majhi", field: "Business Manager", app: "Telegram", link: "https://t.me/sriyog" }
    ]
    const name = "Contact";
    useEffect(() => {
        document.title = "SRIYOG Contact | Professional Marketplace"
    }, []);
    return (
        <>
            <Breadcrumb name={name} />
            <section className='max-w-[1140px] mx-auto mb-[56px]  flex flex-wrap justify-between'>
                <div className=' text-[#333] w-[560px] p-[35px] max-lg:w-[88%] max-md:w-[89%] h-[703px] max-md:h-auto mx-auto max-md:p-0'>
                    <p className='font-semibold text-[1.8rem]  mb-[15px] max-md:text-[1.5rem]'>Welcome to SRIYOG Support</p>
                    <p className='mb-[25px]'>Welcome to SRIYOG! We're located at Rem.Work, Kamalpokhari, Kathmandu, Nepal.</p>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.193460784485!2d85.32073757615186!3d27.711312476180435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef740a066ed089%3A0xaf7934e44a7b1e17!2sSRIYOG!5e0!3m2!1sen!2snp!4v1741059444503!5m2!1sen!2snp"
                        width="100%" height="300" frameborder="0" style={{ border: "0" }} allowfullscreen="" className='mb-[25px]'>
                    </iframe>
                    <div className='flex flex-wrap justify-between'>
                        <div className='w-[238.5px] mb-[25px] max-md:w-full'>
                            <p className='flex gap-2 items-center text-[1.6rem] font-semibold '><FaAddressCard className='text-[#8b181b]' />Registration</p>
                            <p className='text-[14px] max-md:text-[16px]'>Easy Registration system to join as professional.</p>
                        </div>
                        <div className='w-[238.5px] mb-[25px] max-md:w-full'>
                            <p className='flex gap-2 items-center text-[1.6rem] font-semibold '><FaUser className='text-[#8b181b]' />Membership</p>

                            <p className='text-[14px] max-md:text-[16px]'>Reasonable verification fee for yearly membership</p>
                        </div>
                        <div className='w-[238.5px] mb-[25px] max-md:w-full'>
                            <p className='flex gap-2 items-center text-[1.6rem] font-semibold '><FaBullhorn className='text-[#8b181b]' />Promotion</p>
                            <p className='text-[14px] max-md:text-[16px]'>Various ways to promote your skills and profile.</p>
                        </div>
                        <div className='w-[238.5px] mb-[25px] max-md:w-full'>
                            <p className='flex gap-2 items-center text-[1.6rem] font-semibold '><IoShieldHalfSharp className='text-[#8b181b]' />Security</p>
                            <p className='text-[14px] max-md:text-[16px]'>Verified and secured platform to showcase your skills.</p>
                        </div>
                    </div>
                </div>
                <div className=' w-[570px] h-[703px] bg-[#efefef] p-[45px] max-lg:w-full max-md:py-11 max-md:px-14 max-md:h-auto'>
                    <p className='text-[#333] font-semibold text-[1.6rem] flex items-center mb-[40px]  gap-2'><RiMailOpenFill className='text-[2rem]  max-md:text-[2.5rem]' />Send Your Queries</p>
                    <form >
                        <section className='mb-4 flex flex-wrap justify-between w-full '>
                            <div className='w-[48%] max-md:w-full'>
                                <label htmlFor="fname">First Name</label><br />
                                <input type="text" name="" id="fname" className='mt-1 px-3 py-2  rounded-md w-full border-[1.5px]  max-md:mb-4' placeholder='first Name' required />
                            </div>
                            <div className='w-[48%] max-md:w-full'>
                                <label htmlFor="lname">Last Name</label><br />
                                <input type="text" name="" id="lname" className='mt-1 px-3 py-2 border-[1.5px] rounded-md w-full' placeholder='Last Name' required />
                            </div>
                        </section>
                        <section className='mb-4 w-full'>
                            <label htmlFor="mail">Email</label><br />
                            <input type="email" name="" id="mail" className='mt-1 px-3 py-2 rounded-md w-full border-[1.5px]' required />
                            <span className='text-[12px] text-[#333]'>We'll never share your email with anyone else.
                            </span>
                        </section>
                        <section className='mb-4 flex flex-wrap justify-between'>
                            <div className='w-[30%] max-md:w-full'>
                                <label htmlFor="country">Country Code</label><br />
                                <select name="countryCode" id="country" className='w-full px-2 py-[0.65rem] mt-1 rounded-md border-[1.5px] bg-[#ffff]  max-md:mb-4' required>
                                    <option value="+977-">Nepal (+977)</option>
                                    <option value="+93-">Afghanistan (+93)</option>
                                    <option value="+355-">Albania (+355)</option>
                                    <option value="+213-">Algeria (+213)</option>
                                    <option value="+376-">Andorra (+376)</option>
                                    <option value="+244-">Angola (+244)</option>
                                    <option value="+1-268-">Antigua and Barbuda (+1-268)</option>
                                    <option value="+54-">Argentina (+54)</option>
                                    <option value="+374-">Armenia (+374)</option>
                                    <option value="+61-">Australia (+61)</option>
                                    <option value="+43-">Austria (+43)</option>
                                    <option value="+994-">Azerbaijan (+994)</option>
                                    <option value="+973-">Bahrain (+973)</option>
                                    <option value="+880-">Bangladesh (+880)</option>
                                    <option value="+1-246-">Barbados (+1-246)</option>
                                    <option value="+375-">Belarus (+375)</option>
                                    <option value="+32-">Belgium (+32)</option>
                                    <option value="+501-">Belize (+501)</option>
                                    <option value="+229-">Benin (+229)</option>
                                    <option value="+975-">Bhutan (+975)</option>
                                    <option value="+591-">Bolivia (+591)</option>
                                    <option value="+387-">Bosnia and Herzegovina (+387)</option>
                                    <option value="+267-">Botswana (+267)</option>
                                    <option value="+55-">Brazil (+55)</option>
                                    <option value="+673-">Brunei (+673)</option>
                                    <option value="+359-">Bulgaria (+359)</option>
                                    <option value="+226-">Burkina Faso (+226)</option>
                                    <option value="+257-">Burundi (+257)</option>
                                    <option value="+855-">Cambodia (+855)</option>
                                    <option value="+237-">Cameroon (+237)</option>
                                    <option value="+1-">Canada (+1)</option>
                                    <option value="+238-">Cape Verde (+238)</option>
                                    <option value="+236-">Central African Republic (+236)</option>
                                    <option value="+235-">Chad (+235)</option>
                                    <option value="+56-">Chile (+56)</option>
                                    <option value="+86-">China (+86)</option>
                                    <option value="+57-">Colombia (+57)</option>
                                    <option value="+269-">Comoros (+269)</option>
                                    <option value="+506-">Costa Rica (+506)</option>
                                    <option value="+385-">Croatia (+385)</option>
                                    <option value="+53-">Cuba (+53)</option>
                                    <option value="+357-">Cyprus (+357)</option>
                                    <option value="+420-">Czech Republic (+420)</option>
                                    <option value="+45-">Denmark (+45)</option>
                                    <option value="+253-">Djibouti (+253)</option>
                                    <option value="+1-767-">Dominica (+1-767)</option>
                                    <option value="+1-809-">Dominican Republic (+1-809)</option>
                                    <option value="+593-">Ecuador (+593)</option>
                                    <option value="+20-">Egypt (+20)</option>
                                    <option value="+503-">El Salvador (+503)</option>
                                    <option value="+240-">Equatorial Guinea (+240)</option>
                                    <option value="+291-">Eritrea (+291)</option>
                                    <option value="+372-">Estonia (+372)</option>
                                    <option value="+251-">Ethiopia (+251)</option>
                                    <option value="+679-">Fiji (+679)</option>
                                    <option value="+358-">Finland (+358)</option>
                                    <option value="+33-">France (+33)</option>
                                    <option value="+241-">Gabon (+241)</option>
                                    <option value="+220-">Gambia (+220)</option>
                                    <option value="+995-">Georgia (+995)</option>
                                    <option value="+49-">Germany (+49)</option>
                                    <option value="+233-">Ghana (+233)</option>
                                    <option value="+30-">Greece (+30)</option>
                                    <option value="+1-473-">Grenada (+1-473)</option>
                                    <option value="+502-">Guatemala (+502)</option>
                                    <option value="+224-">Guinea (+224)</option>
                                    <option value="+245-">Guinea-Bissau (+245)</option>
                                    <option value="+592-">Guyana (+592)</option>
                                    <option value="+509-">Haiti (+509)</option>
                                    <option value="+504-">Honduras (+504)</option>
                                    <option value="+36-">Hungary (+36)</option>
                                    <option value="+354-">Iceland (+354)</option>
                                    <option value="+91-">India (+91)</option>
                                    <option value="+62-">Indonesia (+62)</option>
                                    <option value="+98-">Iran (+98)</option>
                                    <option value="+964-">Iraq (+964)</option>
                                    <option value="+353-">Ireland (+353)</option>
                                    <option value="+972-">Israel (+972)</option>
                                    <option value="+39-">Italy (+39)</option>
                                    <option value="+225-">Ivory Coast (+225)</option>
                                    <option value="+1-876-">Jamaica (+1-876)</option>
                                    <option value="+81-">Japan (+81)</option>
                                    <option value="+962-">Jordan (+962)</option>
                                    <option value="+7-">Kazakhstan (+7)</option>
                                    <option value="+254-">Kenya (+254)</option>
                                    <option value="+686-">Kiribati (+686)</option>
                                    <option value="+965-">Kuwait (+965)</option>
                                    <option value="+996-">Kyrgyzstan (+996)</option>
                                    <option value="+856-">Laos (+856)</option>
                                    <option value="+371-">Latvia (+371)</option>
                                    <option value="+961-">Lebanon (+961)</option>
                                    <option value="+266-">Lesotho (+266)</option>
                                    <option value="+231-">Liberia (+231)</option>
                                    <option value="+218-">Libya (+218)</option>
                                    <option value="+423-">Liechtenstein (+423)</option>
                                    <option value="+370-">Lithuania (+370)</option>
                                    <option value="+352-">Luxembourg (+352)</option>
                                    <option value="+389-">North Macedonia (+389)</option>
                                    <option value="+261-">Madagascar (+261)</option>
                                    <option value="+265-">Malawi (+265)</option>
                                    <option value="+60-">Malaysia (+60)</option>
                                    <option value="+960-">Maldives (+960)</option>
                                    <option value="+223-">Mali (+223)</option>
                                    <option value="+356-">Malta (+356)</option>
                                    <option value="+692-">Marshall Islands (+692)</option>
                                    <option value="+222-">Mauritania (+222)</option>
                                    <option value="+230-">Mauritius (+230)</option>
                                    <option value="+52-">Mexico (+52)</option>
                                    <option value="+691-">Micronesia (+691)</option>
                                    <option value="+373-">Moldova (+373)</option>
                                    <option value="+377-">Monaco (+377)</option>
                                    <option value="+976-">Mongolia (+976)</option>
                                    <option value="+382-">Montenegro (+382)</option>
                                    <option value="+212-">Morocco (+212)</option>
                                    <option value="+258-">Mozambique (+258)</option>
                                    <option value="+95-">Myanmar (+95)</option>
                                    <option value="+264-">Namibia (+264)</option>
                                    <option value="+31-">Netherlands (+31)</option>
                                    <option value="+64-">New Zealand (+64)</option>
                                    <option value="+505-">Nicaragua (+505)</option>
                                    <option value="+227-">Niger (+227)</option>
                                    <option value="+234-">Nigeria (+234)</option>
                                    <option value="+850-">North Korea (+850)</option>
                                    <option value="+47-">Norway (+47)</option>
                                    <option value="+968-">Oman (+968)</option>
                                    <option value="+92-">Pakistan (+92)</option>
                                    <option value="+680-">Palau (+680)</option>
                                    <option value="+970-">Palestine (+970)</option>
                                    <option value="+507-">Panama (+507)</option>
                                    <option value="+675-">Papua New Guinea (+675)</option>
                                    <option value="+595-">Paraguay (+595)</option>
                                    <option value="+51-">Peru (+51)</option>
                                    <option value="+63-">Philippines (+63)</option>
                                    <option value="+48-">Poland (+48)</option>
                                    <option value="+351-">Portugal (+351)</option>
                                    <option value="+974-">Qatar (+974)</option>
                                    <option value="+40-">Romania (+40)</option>
                                    <option value="+7-">Russia (+7)</option>
                                    <option value="+250-">Rwanda (+250)</option>
                                </select>

                            </div>
                            <div className='w-[40%] max-md:w-full'>
                                <label htmlFor="phone">Phone</label><br />
                                <input type="text" name="" id="phone" placeholder='Phone' className='mt-1 px-3 py-2 rounded-md w-full border-[1.5px]  max-md:mb-4' required />
                            </div>
                            <div className='w-[25%] max-md:w-full'>
                                <label htmlFor="ext">Extension</label><br />
                                <input type="text" name="" id="ext" placeholder='Extension' className='mt-1 px-3 py-2 rounded-md w-full border-[1.5px] ' required />
                            </div>
                        </section>
                        <section className='mb-5'>
                            <label htmlFor="help" className='text-[#333]'>What do you need help with?</label><br />
                            <select name="help" id="help" className='w-full px-3 py-2 mt-1 rounded-md border-[1.5px] bg-[#fff]' required>
                                <option value="Registration">Registration</option>
                                <option value="Membership">Membership</option>
                                <option value="Dropzone">Dropzone</option>
                                <option value="Community Manager">Community Manager</option>
                                <option value="Promotion">Promotion</option>
                                <option value="Advertising">Advertising</option>
                                <option value="Complain">Complain</option>
                                <option value="Suggestion">Suggestion</option>
                                <option value="Others">Others</option>
                            </select>
                        </section>
                        <section className='mb-4'>
                            <textarea name="" id="" className='w-full h-[90px] px-3 py-2 border-[1.5px]' placeholder='Message'></textarea>
                        </section>
                        <input type="submit" name="" id="" value="Submit" className='bg-[#8b181b] text-white py-2 px-4 font-semibold hover:bg-[#d2333b] rounded-md transition duration-300 ease-in-out cursor-pointer ' />
                    </form>

                </div>
            </section>
            <section className=' w-full mb-[56px]  bg-[#efefef] py-[40px]'>
                <div className='max-w-[1140px] max-lg:w-full mx-auto flex flex-wrap justify-around'>
                    {card.map((item, index) => (
                        <div key={index + 1} className='w-[28%] max-md:w-[85%]  p-[25px] text-[#333] text-center rounded-md '>
                            <img src={item.img} alt={item.name} className='mb-3 max-md:w-[90%] mx-auto' />
                            <p className='text-[1.1rem] font-semibold mb-3'>{item.name}</p>
                            <p className='mb-5'>{item.field}</p>
                            <Link to={item.link} target="_blank" className='border-[1.5px] rounded-md border-[#8b181b] hover:bg-[#8b181b] hover:text-white transition duration-300 ease-in-out font-semibold py-2 px-3'>{item.app}</Link>
                        </div>
                    ))}
                </div>

            </section>
        </>
    )
}

export default Contact