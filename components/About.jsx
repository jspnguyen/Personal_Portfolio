import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about.jpg';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#3700B3]'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-[#CEEC97]'>
          Hey there, I&#39;m Joseph Nguyen, a Computer Science and Data Science student currently studying at UC Berkeley. 
          I have experience in different areas of development such as: Full-Stack,
          Database, Machine Learning, and Computer Vision. I enjoy building all kinds of projects that rely
          on different stacks, and as of lately I&#39;ve been working on Blockchain.
          </p>
          <p className='py-2 text-[#CEEC97]'>
            In my free time, I enjoy playing badminton with my friends 
            and biking through trails whenever I have the chance. Now 
            that I&#39;m a college student, I&#39;ve been going around the Bay
            trying out as much good-looking food as possible.
          </p>
          <Link href='/#projects'>
            <p className='py-2 text-[#E3DCC2] underline cursor-pointer'>
              Check out my projects
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-[#BB86FC] rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;
