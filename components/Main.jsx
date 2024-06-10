import Link from 'next/link';
import React from 'react';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='uppercase text-sm tracking-widest text-[#BB86FC]'>
            WHAT&#39;S COOKIN
          </p>
          <h1 className='py-4 text-[#BB86FC]'>
            Hi, I&#39;m <span className='text-[#CEEC97]'> Joseph</span>
          </h1>
          <h1 className='py-2 text-[#BB86FC]'>A Software Engineer</h1>
          <p className='py-4 text-[#BB86FC] sm:max-w-[70%] m-auto'>
            I&#39;m a Computer Science and Data Science student at UC Berkeley interested 
            in Full-Stack development, Machine Learning, and Computer Vision.
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <a
              href='https://www.linkedin.com/in/jnguyen31/'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-[#BB86FC] p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href='https://github.com/jspnguyen'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-[#BB86FC] p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaGithub />
              </div>
            </a>
            {/* <Link href='/#contact'>
              <div className='rounded-full shadow-lg shadow-[#BB86FC] p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiOutlineMail />
              </div>
            </Link> */}
            <Link href='/experience'>
              <div className='rounded-full shadow-lg shadow-[#BB86FC] p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <BsFillPersonLinesFill />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
