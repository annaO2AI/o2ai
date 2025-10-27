import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e : any) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      const response = await fetch('https://contact-api-g5gkhafve3g0a6ey.centralus-01.azurewebsites.net/api/contact', {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          first_name: formData.first_name,
          last_name: formData.last_name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message
        })
      });

      if (response.ok) {
        setSubmitStatus('success');
        // Reset form
        setFormData({
          first_name: '',
          last_name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
        console.error('Failed to submit form:', await response.text());
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-12 bg-white rounded-xl shadow-md mx-auto w-[950px] contact-form-c ">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Contact Us</h1>
      
      {/* Success Message */}
      {submitStatus === 'success' && (
        <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded w-[80%]">
          Thank you for your message! We'll get back to you soon.
        </div>
      )}
      
      {/* Error Message */}
      {submitStatus === 'error' && (
        <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded w-[80%]">
          There was an error submitting your message. Please try again.
        </div>
      )}

      <form className="w-[80%] p-6" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <div className="flex-1">
            <label className="block o2-title text-[16px] font-bold mb-2" htmlFor="first_name">
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 o2-title text-[16px] leading-tight focus:outline-none focus:shadow-outline"
              id="first_name"
              type="text"
              placeholder="Enter First Name"
              required
              value={formData.first_name}
              onChange={handleChange}
            />
          </div>
          <div className="flex-1">
            <label className="block o2-title text-[16px] font-bold mb-2" htmlFor="last_name">
              Last Name <span className="text-red-500">*</span>
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 o2-title text-[16px] leading-tight focus:outline-none focus:shadow-outline"
              id="last_name"
              type="text"
              placeholder="Enter Last Name"
              required
              value={formData.last_name}
              onChange={handleChange}
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
            value={formData.email}
            onChange={handleChange}
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
            value={formData.subject}
            onChange={handleChange}
          />
        </div>
        <div className="mb-6">
          <label className="block o2-title text-[16px] font-bold mb-2" htmlFor="message">
            Comment 
          </label>
          <textarea
            className="appearance-none border rounded w-full py-2 px-3 o2-title text-[16px] leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            placeholder="Enter Comment"
            rows={4}
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-12 rounded focus:outline-none focus:shadow-outline disabled:bg-blue-300 disabled:cursor-not-allowed"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactUs;