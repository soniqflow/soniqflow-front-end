import React from 'react';

const NotificationBar = () => {
  return (
    <div className="w-full bg-[#000000] text-white">
      <div className="container mx-auto px-6 py-[14px] flex justify-center items-center text-center">
        <div className="text-[14px] leading-[1.6] font-normal tracking-[-0.01em]">
          <span className="opacity-100">
            Get 50% off on all templates until Dec 3, 11:59pm PT! Code:{" "}
          </span>
          <strong className="font-semibold text-white">
            1128CWWFTS123
          </strong>
        </div>
      </div>
    </div>
  );
};

export default NotificationBar;