import Image from 'next/image';
import gifImage from "../../public/images/FnT_animated_circle.gif";
import React from 'react';

const uiData = (itemContent: any, index: number) => {
  switch (itemContent) {
    default:
      return null;
  }
};

export default function Home() {
  return (
  
      <div className="wrapper">

        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="fixed inset-0 bg-black opacity-75"></div>
          <div
            className="relative"
            style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
          >
            <Image
              src={gifImage}
              width={200}
              height={200}
              loading="eager" alt={''} />
          </div>
        </div>

      </div>
    
  );
}
