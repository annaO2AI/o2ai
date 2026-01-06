'use client';

import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    company_name: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | ''>('');
  const [errorDetails, setErrorDetails] = useState<string>('');
  const [formType, setFormType] = useState<'contact' | 'demo'>('contact');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');
    setErrorDetails('');

    console.log('🚀 Submitting form...');
    console.log('Form data:', formData);

    try {
      console.log('📤 Sending POST request to /api/contact');
      
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          formType,
        }),
      });

      console.log('📥 Response status:', response.status);
      console.log('📥 Response ok:', response.ok);

      // Try to get response text first
      const responseText = await response.text();
      console.log('📥 Response text:', responseText);

      // Try to parse as JSON
      let responseData;
      try {
        responseData = JSON.parse(responseText);
        console.log('📥 Response data:', responseData);
      } catch (parseError) {
        console.error('❌ Failed to parse response as JSON:', parseError);
        console.error('Raw response:', responseText);
        throw new Error(`Server returned invalid JSON: ${responseText.substring(0, 100)}`);
      }

      if (response.ok) {
        console.log('✅ Success!');
        setSubmitStatus('success');
        setFormData({
          first_name: '',
          last_name: '',
          email: '',
          company_name: '',
          subject: '',
          message: ''
        });
      } else {
        console.error('❌ Server returned error status:', response.status);
        console.error('Error data:', responseData);
        setSubmitStatus('error');
        setErrorDetails(JSON.stringify(responseData, null, 2));
      }
    } catch (error: any) {
      console.error('❌ Submission error:', error);
      console.error('Error message:', error.message);
      console.error('Error stack:', error.stack);
      setSubmitStatus('error');
      setErrorDetails(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleFormType = (type: 'contact' | 'demo') => {
    setFormType(type);
    setSubmitStatus('');
    setErrorDetails('');
    setFormData({
      first_name: '',
      last_name: '',
      email: '',
      company_name: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="flex flex-col items-center justify-center p-12 bg-white rounded-xl shadow-md mx-auto w-[950px] contact-form-c">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Contact Us</h1>
      
      <div className="flex gap-4 mb-6">
        <button
          type="button"
          onClick={() => toggleFormType('contact')}
          className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
            formType === 'contact' 
              ? 'bg-blue-500 text-white' 
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          General Inquiry
        </button>
        <button
          type="button"
          onClick={() => toggleFormType('demo')}
          className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
            formType === 'demo' 
              ? 'bg-blue-500 text-white' 
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Request Demo
        </button>
      </div>

      {submitStatus === 'success' && (
        <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded w-[80%]">
          {formType === 'demo' 
            ? "Thank you for your demo request! We'll contact you soon to schedule a demonstration."
            : "Thank you for your message! We'll get back to you soon."
          }
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded w-[80%]">
          <p className="font-bold mb-2">
            There was an error submitting your {formType === 'demo' ? 'demo request' : 'message'}.
          </p>
          {errorDetails && (
            <details className="mt-2">
              <summary className="cursor-pointer font-semibold">Show error details</summary>
              <pre className="mt-2 p-2 bg-red-50 text-xs overflow-auto max-h-40">
                {errorDetails}
              </pre>
            </details>
          )}
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

        {formType === 'demo' && (
          <div className="mb-4">
            <label className="block o2-title text-[16px] font-bold mb-2" htmlFor="company_name">
              Company Name <span className="text-red-500">*</span>
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 o2-title text-[16px] leading-tight focus:outline-none focus:shadow-outline"
              id="company_name"
              type="text"
              placeholder="Enter Company Name"
              required
              value={formData.company_name}
              onChange={handleChange}
            />
          </div>
        )}

        {formType === 'contact' && (
          <>
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
          </>
        )}

        <div className="flex items-center justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-12 rounded focus:outline-none focus:shadow-outline disabled:bg-blue-300 disabled:cursor-not-allowed"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting 
              ? 'Submitting...' 
              : formType === 'demo' 
                ? 'Request Demo' 
                : 'Submit'
            }
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactUs;