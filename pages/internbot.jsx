import Image from 'next/image';
import React from 'react';
import botImg from '../public/assets/projects/intern_bot.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const property = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={botImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-[#BB86FC] z-10 p-2'>
          <h2 className='py-2'>Internship Finder Discord Bot</h2>
          <h3>Discord.py, Requests, BeautifulSoup4</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            This bot was created with the purpose of helping Computer Science students find tech internships and provide a way for them
            to check for new postings while on Discord. As a student looking for internships myself, I understood the struggle of going 
            through many sites to look for new internships and wanted to aggregate it all onto Discord. I built this bot using Discord.py 
            and scraped data from Simplify&#39;s lists of Tech Internships on GitHub using Requests and BeautifulSoup4.
            Credit: https://github.com/SimplifyJobs/Summer2024-Internships.
          </p>
          <a
            href='https://github.com/jspnguyen/InternshipBot'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8 shadow-[#BB86FC] text-[#03DAC6] hover:scale-105 ease-in duration-300'>Code</button>
          </a>
          <a
            href='https://discord.gg/Rtp9mrFST9'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 shadow-[#BB86FC] text-[#03DAC6] hover:scale-105 ease-in duration-300'>Demo</button>
          </a>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-[#BB86FC] rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1 text-[#BB86FC]'>
              <p className='text-[#BB86FC] py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Discord.py
              </p>
              <p className='text-[#BB86FC] py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Python
              </p>
              <p className='text-[#BB86FC] py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Requests
              </p>
              <p className='text-[#BB86FC] py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> BeautifulSoup4
              </p>
              <p className='text-[#BB86FC] py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Regex
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

export default property;
