import React from 'react';

const ContactUs = () => {
  return (
    <div className="flex flex-col items-center justify-center p-12 bg-white rounded-xl shadow-md mx-auto w-[950px] contact-form-c ">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Contact Us</h1>
      <form className="w-[80%] p-6">
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <div className="flex-1">
            <label className="block o2-title text-[16px] font-bold mb-2" htmlFor="firstName">
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              className=" appearance-none border rounded w-full py-2 px-3 o2-title text-[16px] leading-tight focus:outline-none focus:shadow-outline"
              id="firstName"
              type="text"
              placeholder="Enter First Name"
              required
            />
          </div>
          <div className="flex-1">
            <label className="block o2-title text-[16px] font-bold mb-2" htmlFor="lastName">
              Last Name <span className="text-red-500">*</span>
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 o2-title text-[16px] leading-tight focus:outline-none focus:shadow-outline"
              id="lastName"
              type="text"
              placeholder="Enter Last Name"
              required
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block o2-title text-[16px] font-bold mb-2" htmlFor="email">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 o2-title text-[16px] leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Enter Email"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block o2-title text-[16px] font-bold mb-2" htmlFor="subject">
            Subject
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 o2-title text-[16px] leading-tight focus:outline-none focus:shadow-outline"
            id="subject"
            type="text"
            placeholder="Enter Subject"
          />
        </div>
        <div className="mb-6">
          <label className="block o2-title text-[16px] font-bold mb-2" htmlFor="message">
            Comment 
          </label>
          <textarea
            className="appearance-none border rounded w-full py-2 px-3 o2-title text-[16px] leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            placeholder="Enter Comment "
            rows={4}
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-12 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactUs;