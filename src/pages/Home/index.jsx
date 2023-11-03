import React from 'react';

export default function Home() {
  return (
    <div
      className="mx-auto flex justify-center items-center border border-black rounded-3xl grid grid-cols-2 gap-x-4 gap-y-2 h-[550px] max-w-[1150px]"
      style={{
        backgroundImage: 'linear-gradient(to right, black, blue)',
      }}
    >
      <div className="text-white p-20">
        <p className="text-5xl">Elevate Your Style</p>
        <p className='text-2xl pt-5'> Your One-Stop Destination for All Your Needs!</p>
      </div>
      <img className='overflow-hidden object-contain h-full w-full'
        src="https://assets-global.website-files.com/6493dcfff5da93a7486cd781/6494062b71fbb5f238835e71_Hero-p-500.png"
        alt=""
      />
    </div>
  );
}