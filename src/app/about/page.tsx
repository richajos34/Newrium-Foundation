'use client';

import React from 'react';

export default function AboutPage() {
  return (
    <div className="w-full flex flex-col items-center">

      {/* --- ABOUT US HEADER --- */}
      <section className="w-full bg-[#E3E3E3] py-20 flex flex-col items-center text-center px-6">
        <h1 className="text-4xl text-black font-bold tracking-wide">ABOUT US</h1>
      </section>

      {/* --- MISSION SECTION --- */}
      <section className="w-full bg-white py-20 px-6 flex flex-col items-center">
        <div className="max-w-4xl w-full bg-[#55A5BC] text-white rounded-xl shadow-lg p-12">
          <h2 className="text-3xl font-bold mb-8 tracking-wide text-center">OUR MISSION</h2>

          <p className="text-center leading-relaxed">
            At Newrium Foundation, Inc., our mission is to help Gen Z master financial skills, 
            self-motivation, and confidence, giving them the tools to plan ahead and live intentionally.
          </p>
        </div>
      </section>

      {/* --- VALUES SECTION --- */}
      <section className="w-full bg-white py-20 flex flex-col items-center px-6">
        <h2 className="text-3xl text-black font-semibold mb-12 tracking-wide">VALUES</h2>

        {/* Circles Row with varying heights */}
        <div className="flex justify-center gap-12 mb-8 items-start">

          {/* Value 1 */}
          <div className="flex flex-col items-center">
            <div className="w-28 h-28 rounded-full bg-[#55A5BC] flex items-center justify-center shadow-md mb-4">
              <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="5"/>
                <line x1="12" y1="1" x2="12" y2="3"/>
                <line x1="12" y1="21" x2="12" y2="23"/>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                <line x1="1" y1="12" x2="3" y2="12"/>
                <line x1="21" y1="12" x2="23" y2="12"/>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
              </svg>
            </div>
            <div className="w-0.5 h-24 bg-gray-300 mb-4"></div>
            <div className="w-8 h-8 rounded-full bg-[#55A5BC] flex items-center justify-center mb-2">
              <span className="text-white text-sm font-semibold">1</span>
            </div>
            <p className="text-sm text-black font-medium">Inspire</p>
          </div>

          {/* Value 2 */}
          <div className="flex flex-col items-center" style={{marginTop: '40px'}}>
            <div className="w-28 h-28 rounded-full bg-[#C6E2B6] flex items-center justify-center shadow-md mb-4" />
            <div className="w-0.5 h-24 bg-gray-300 mb-4"></div>
            <div className="w-8 h-8 rounded-full bg-[#55A5BC] flex items-center justify-center mb-2">
              <span className="text-white text-sm font-semibold">2</span>
            </div>
            <p className="text-sm text-black font-medium">Value</p>
          </div>

          {/* Value 3 */}
          <div className="flex flex-col items-center">
            <div className="w-28 h-28 rounded-full bg-[#FEAC71] flex items-center justify-center shadow-md mb-4" />
            <div className="w-0.5 h-24 bg-gray-300 mb-4"></div>
            <div className="w-8 h-8 rounded-full bg-[#55A5BC] flex items-center justify-center mb-2">
              <span className="text-white text-sm font-semibold">3</span>
            </div>
            <p className="text-sm text-black font-medium">Value</p>
          </div>

          {/* Value 4 */}
          <div className="flex flex-col items-center" style={{marginTop: '40px'}}>
            <div className="w-28 h-28 rounded-full bg-[#C6E2B6] flex items-center justify-center shadow-md mb-4" />
            <div className="w-0.5 h-24 bg-gray-300 mb-4"></div>
            <div className="w-8 h-8 rounded-full bg-[#55A5BC] flex items-center justify-center mb-2">
              <span className="text-white text-sm font-semibold">4</span>
            </div>
            <p className="text-sm text-black font-medium">Value</p>
          </div>

          {/* Value 5 */}
          <div className="flex flex-col items-center">
            <div className="w-28 h-28 rounded-full bg-[#55A5BC] flex items-center justify-center shadow-md mb-4" />
            <div className="w-0.5 h-24 bg-gray-300 mb-4"></div>
            <div className="w-8 h-8 rounded-full bg-[#55A5BC] flex items-center justify-center mb-2">
              <span className="text-white text-sm font-semibold">5</span>
            </div>
            <p className="text-sm text-black font-medium">Value</p>
          </div>

        </div>
      </section>

      {/* --- TEAM SECTION --- */}
      <section className="w-full bg-white py-20 flex flex-col items-center px-6">
        <h2 className="text-3xl text-black font-semibold tracking-wide mb-20">THE TEAM</h2>

        <div className="flex flex-wrap justify-center gap-30 mb-16">
  
          {/* Member 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-32 h-32 rounded-full bg-[#E3E3E3] shadow-inner border-2 border-[#55A5BC]"></div>
            <p className="mt-4 font-medium text-black">First & Last Name</p>
            <p className="text-sm text-gray-600">Position</p>
          </div>

          {/* CEO */}
          <div className="flex flex-col items-center text-center relative -top-8">
            <div className="w-32 h-32 rounded-full bg-[#E3E3E3] shadow-inner border-2 border-[#FEAC71]"></div>
            <p className="mt-4 font-medium text-black">First & Last Name</p>
            <p className="text-sm text-gray-600">CEO</p>
          </div>

          {/* Member 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-32 h-32 rounded-full bg-[#E3E3E3] shadow-inner border-2 border-[#55A5BC]"></div>
            <p className="mt-4 font-medium text-black">First & Last Name</p>
            <p className="text-sm text-gray-600">Position</p>
          </div>

        </div>


        {/* Bottom Content Block */}
        <div className="w-full max-w-4xl h-64 bg-[#F4F4F4] rounded-xl shadow-md" />
      </section>


    </div>
  );
}
