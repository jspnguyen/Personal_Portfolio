import Image from 'next/image';
import React from 'react';
import secImg from '../public/assets/projects/sec_project.jpg';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const twitch = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={secImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-[#BB86FC] z-10 p-2'>
          <h2 className='py-2'>SEC Rule Textual Analysis</h2>
          <h3>Python / Sklearn</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            LOREM IPSUM
          </p>
          <a
            href='https://sec-rule-project.github.io/'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 shadow-[#BB86FC] text-[#03DAC6] hover:scale-105 ease-in duration-300'>Code</button>
          </a>

        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-[#BB86FC] rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-[#BB86FC] py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Python
              </p>
              <p className='text-[#BB86FC] py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> BeautifulSoup4
              </p>
              <p className='text-[#BB86FC] py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Sklearn
              </p>
              <p className='text-[#BB86FC] py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Pandas
              </p>
              <p className='text-[#BB86FC] py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> MatPlotLib
              </p>
              <p className='text-[#BB86FC] py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Spacy
              </p>
            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
  );
};

export default twitch;
