// components/Mission.tsx
import React from 'react';

const Mission: React.FC = () => {
  return (
    <div className="flex items-center justify-end max-w-7xl mx-auto">
      <div className="max-w-2xl w-full my-16">
        <div className="text-left mb-10 bg-white p-16 rounded-lg desing-boxmission">
          <h1 className="text-4xl md:text-4xl font-bold mb-3 leading-tight o2-title">
            Mission
          </h1>
          <p className="text-[20px]  leading-relaxed mx-auto o2-title">
            Our mission is to advance healthcare, pioneering an AI platform that allows healthcare 
            organizations to build delightful human-centered knowledge with data, with the oversight 
            and governance of this powerful technology.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mission;