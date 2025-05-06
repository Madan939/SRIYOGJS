import React, { useState, useRef } from "react";
import { FaCaretDown } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const RequestSupport = ({
  showRequestSupport,
  setShowRequestSupport,
  isHomePage,
}) => {
  const [formData, setFormData] = useState({
    fullName: "",
    organization: "",
    city: "",
    issue: "",
    supportType: "",
    phone: "",
    email: "",
    issueSince: "",
    department: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  const issueSelectRef = useRef(null);
  const supportTypeSelectRef = useRef(null);
  const triggerDropdown = (selectRef) => {
    if (selectRef.current) {
      selectRef.current.focus();
    }
  };

  return (
    <div className="max-w-[1180px] mx-auto my-0 w-full bg-white rounded-[25px] shadow-lg px-6 py-3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lgMax:transform-none lgMax:left-0 lgMax:rounded-none  lgMax:top-0 lgMax:overflow-y-scroll ">
      <span className="flex justify-end">
        {showRequestSupport ? (
          <IoMdClose
            onClick={() => setShowRequestSupport(false)}
            className="text-red-700 border-[1px] text-2xl cursor-pointer hover:scale-125 transition-all duration-100 ease-linear
"
          />
        ) : (
          ""
        )}
      </span>
      <h2 className="block text-[29px] text-[#8b181b] font-bold mb-4 mt-5 ml-5">
        Request Support
      </h2>
      <form onSubmit={handleSubmit} className=" p-6 rounded-lg">
        {/* Row 1 */}
        <div className=" grid grid-cols-3 smMax:grid-cols-1 gap-4 mb-6">
          <input
            type="text"
            placeholder="Full Name"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full h-[49px] px-4 mb-4 rounded-[10px] border border-gray-300 focus:outline-none focus:border-blue-500"
          />
          <input
            type="text"
            placeholder="Name of Organisation"
            name="organization"
            value={formData.organization}
            onChange={handleChange}
            className="w-full h-[49px] px-4 mb-4 rounded-[10px] border border-gray-300 focus:outline-none focus:border-blue-500"
          />
          <input
            type="text"
            placeholder="City"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="w-full h-[49px] px-4 mb-4 rounded-[10px] border border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-3 smMax:grid-cols-1 gap-4 mb-8">
          <div className="relative">
            <select
              ref={issueSelectRef}
              name="issue"
              value={formData.issue}
              onChange={handleChange}
              className="w-full h-[49px] px-4 py-2 rounded-[10px] text-gray-500 border border-gray-300 focus:outline-none focus:border-blue-500 appearance-none pr-8"
            >
              <option value="">Issue</option>
              <option value="technical">Technical</option>
              <option value="billing">Billing</option>
              <option value="other">Other</option>
            </select>
            <FaCaretDown
              className="absolute text-[30px] top-1/2 right-3 transform -translate-y-1/2 text-gray-500 cursor-pointer"
              onClick={() => triggerDropdown(issueSelectRef)}
            />
          </div>
          <div className="relative">
            <select
              ref={supportTypeSelectRef}
              name="supportType"
              value={formData.supportType}
              onChange={handleChange}
              className="w-full h-[49px] px-4 py-2 rounded-[10px] text-gray-500 border border-gray-300 focus:outline-none focus:border-blue-500 appearance-none pr-8"
            >
              <option value="">Support Type</option>
              <option value="phone">Phone</option>
              <option value="email">Email</option>
              <option value="chat">Chat</option>
            </select>
            <FaCaretDown
              className="absolute top-1/2 text-[30px] right-3 transform -translate-y-1/2 text-gray-500 cursor-pointer"
              onClick={() => triggerDropdown(supportTypeSelectRef)}
            />
          </div>
          <input
            type="text"
            placeholder="Phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full h-[49px] px-4 py-2 rounded-[10px] border border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Row 3 */}
        <div className="grid grid-cols-3 smMax:grid-cols-1 gap-4 mb-6">
          <input
            type="email"
            placeholder="eMail"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full h-[49px] px-4 mb-4 rounded-[10px] border border-gray-300 focus:outline-none focus:border-blue-500"
          />
          <input
            type="text"
            placeholder="Issue Since"
            name="issueSince"
            value={formData.issueSince}
            onChange={handleChange}
            className="w-full h-[49px] px-4 mb-4 rounded-[10px] border border-gray-300 focus:outline-none focus:border-blue-500"
          />
          <input
            type="text"
            placeholder="Department"
            name="department"
            value={formData.department}
            onChange={handleChange}
            className="w-full h-[49px] px-4 mb-4 rounded-[10px] border border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <textarea
            placeholder="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full h-[127px] px-4 py-4 rounded-[10px] border border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="border-2 border-[#8b181b] bg-white text-[#8b181b] hover:bg-[#8b181b] hover:text-white px-4 py-2 rounded duration-200 ease-in"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default RequestSupport;
