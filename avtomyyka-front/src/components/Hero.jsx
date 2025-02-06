import React from 'react'

const Hero = () => {
  return (
    <div className='hero-container g'>
      <div className='hero-text'>
        <div className='text-reveal'>
          <p className=' xl:text-9xl lg:text-7xl md:text-6xl sm:text-5xl max-sm:text-3xl text-shadow'>Автомийка</p>
          <p className='xl:text-7xl lg:text-6xl md:text-5xl sm:text-4xl max-sm:text-2xl text-shadow'>На Львівській Площі</p>
        </div>
        <br />
        <br className='xl:hidden max-md:hidden'/>
        <div className='flex-col justify-center items-center'>
          <p className='xl:text-3xl lg:text-[1.7rem] md:text-xl sm:text-md max-sm:text-[0.7rem] leading-none text-shadow p-reveal'>Комплексний догляд за вашим авто</p>
          <img src="/pidkresl4.png" alt="linear" className='leading-none image-reveal absolute w-[80%] h-auto ml-[23%]'/>
        </div>
      </div>
    </div>
  )
}

export default Hero
