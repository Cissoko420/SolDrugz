import React, { useEffect, useState } from 'react';
import DrugzSolana from './DrugzSolana';

const Layout = ({ children }) => {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Toggle between 0 and 1
      setImageIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const flip = imageIndex === 1;
  const imageSrc = `/images/solana-logo_2${imageIndex === 0 ? '_blue' : '_red'}.png`;

  return (
    <div className='bg-r-gradient-bb min-w-[100vw] min-h-[100vh] flex flex-col items-center justify-center gap-5'>
        <DrugzSolana />
      <div className={`w-[150px] sm:w-[20%] ${flip ? 'scale-x-[-1]' : 'scale-x-100'} transition durantion-500 ease-in-out mb-7`}>
        <img src={imageSrc} alt="Logo" className='min-w-[150px] object-cover sm:w-full'/>
      </div>
      <span className='text-white leading-normal text-3xl font-bold sm:text-[3rem]'>{children}</span>
    </div>
  );
};

export default Layout;
