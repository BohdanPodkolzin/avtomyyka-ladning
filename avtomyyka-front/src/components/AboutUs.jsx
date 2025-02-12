import React from 'react'
import about1 from "/about-us-1.jpg";
import about2 from "/about-us-2.jpg";

const AboutUs = () => {
  return (
    <div className="relative bg-[#191919] overflow-hidden">
        <div className="lights-bg z-1">
            <div className="light"></div>
            <div className="light"></div>
            <div className="light"></div>
            <div className="light"></div>
        </div>

        <div className='relative z-10 flex flex-col justify-between items-col mb-10 mt-10'>
            <div className='flex max-sm:flex-col items-center justify-center gap-[20%]'>
                <img src={about2} className='h-[15%] w-[15%]' alt="" /> 
                <p>1123</p>
            </div>
            <br />
            <div className='flex flex-row-reverse max-sm:flex-col justify-center sm:gap-[20%] items-center'>
                <img src={about1} alt="" className='h-[15%] w-[15%]' />
                <p>222</p>
            </div>
        </div>
    </div>
  )
}

export default AboutUs
