import React, { useState, useEffect } from 'react';

const testimonials = [
  // {
  //   id: 1,
  //   rating: 5,
  //   text: '"O2.AI has completely transformed how our internal teams operate. Tasks that used to take hours are now automated within minutes. Our ..."',
  //   author: 'Armando McClure',
  //   role: 'Senior Manager, Operations',
  //   image: 'https://via.placeholder.com/50'
  // },
  // {
  //   id: 2,
  //   rating: 5,
  //   text: '"O2.AI has completely transformed how our internal teams operate. Tasks that used to take hours are now automated within minutes. Our ..."',
  //   author: 'Jamie Wilkinson',
  //   role: 'Chief Technology Officer',
  //   image: 'https://via.placeholder.com/50'
  // },
  {
    id: 3,
    rating: 4,
    text: '"O2.AI has completely transformed how our internal teams operate. Tasks that used to take hours are now automated within minutes. Our ..."',
    author: 'Tracy Schuppe',
    role: 'Lead Test Supervisor',
    image: 'https://via.placeholder.com/50'
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-b from-purple-50 to-white flex items-center justify-center py-16 text-[#EBECFF]">
      <div className="text-center my-16">
        <h1 className="text-4xl font-bold text-gray-800  text-[20px] text-[#2E6DCC]">TESTIMONIALS</h1>
        <h2 className=" o2-title font-bold mb-8 text-[55px]">Our Customers Speak for Us</h2>
        <div className="flex justify-center space-x-6 ">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`bg-white shadow-lg rounded-lg w-[400px] transform transition-all duration-500 p-16 ${
                index === currentIndex ? 'opacity-100 scale-100' : 'opacity-90 scale-90'
              }`}
            >
              <div className="flex items-center mb-4 justify-between">
                <div className='flex'>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                </div>
                <div className="ml-2 text-blue-500 flex gap-1 items-center">
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.24772 0C2.79705 0 0 2.79758 0 6.24772C0 9.69839 2.79705 12.4954 6.24772 12.4954C9.69786 12.4954 12.4954 9.69786 12.4954 6.24772C12.4954 2.79758 9.69786 0 6.24772 0ZM4.71715 7.92543C4.71715 8.26308 4.44353 8.53617 4.1064 8.53617C3.76874 8.53617 3.49566 8.26308 3.49566 7.92543V5.32155C3.49566 4.98389 3.76874 4.71027 4.1064 4.71027C4.44353 4.71027 4.71715 4.98389 4.71715 5.32155V7.92543ZM9.03155 7.8815C9.03155 8.35888 8.75263 8.52982 8.27526 8.52982H6.07889C5.60152 8.52982 5.21464 8.14295 5.21464 7.66557V5.50519C5.21464 5.50519 5.17177 5.14584 5.56976 4.80818C5.79469 4.61712 6.12864 4.25247 6.36204 3.81003C6.82566 2.93095 7.10298 2.6748 7.31415 2.7436C8.09637 2.99711 7.70526 4.15668 7.45281 4.64094H8.16729C8.64414 4.64094 9.03155 5.02782 9.03155 5.50519V7.8815Z" fill="#5D5DFF"/>
                    </svg>
                    <span>
                        Testimonial
                    </span>
                </div>
              </div>
              <p className="text-gray-700 mb-4">{testimonial.text}</p>
              {/* <div className="flex items-center">
                <img src={testimonial.image} alt={testimonial.author} className="w-10 h-10 rounded-full mr-4" />
                <div>
                  <p className="text-gray-900 font-semibold">{testimonial.author}</p>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;