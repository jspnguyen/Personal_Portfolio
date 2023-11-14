import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const experience = () => {
  return (
    <>
      <Head>
        <title>Joseph&#39;s Experience</title>
        <meta
          name='description'
          content='Joseph&#39;s Experience'
        />
        <link rel='icon' href='/fav.ico' />
      </Head>

      <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
        <h2 className='text-center'>Experience</h2>
        <div className='bg-[#000000] my-4 p-4 w-full flex justify-between items-center'>
          <h2 className='text-center'>Joseph Nguyen</h2>
          <div className='flex'>
            <a
              href='https://www.linkedin.com/in/jnguyen31/'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href='https://github.com/jspnguyen'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
        </div>
        <div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
          <div className='hidden sm:block'>
            <p>
              Collaborative <span className='px-1'>|</span> Full-Stack Developement{' '}
              <span className='px-1'>|</span> Adapting
            </p>
          </div>
          <div className='block sm:hidden'>
            <p>Collaborative</p>
            <p className='py-2'>Full-Stack Developement</p>
            <p>Adapting</p>
          </div>
        </div>

        {/* Education */}
        <div className='text-left py-4'>
          <h5 className='text-center underline text-[18px] py-2'>Education</h5>
          <div className='py-6'>
          <div className='flex items-center'>
            <p className='font-bold italic flex-1'>University of California, Berkeley</p>
            <p className='text-right italic'>Berkeley, CA</p>
          </div>
            <div className='flex flex-wrap'>
              <p className='text-left py-1 italic flex-1'>Bachelor&#39;s Degree in Computer Science</p>
              <p className='text-right py-1 italic font-bold flex-1'>Expected May 2025</p>
            </div>
            <p className='text-left py-1'>GPA: 3.6/4.0</p>
          </div>
        </div>

        {/* Skills */}
        <div className='text-center py-4'>
          <h5 className='underline text-[18px] py-2'>Skills</h5>
          <div className='flex flex-col items-center justify-center'>
            <p className='flex flex-wrap justify-center gap-2 py-2'>
              <span className='font-bold'>Languages:</span>
              <span> Python | Javascript | Java | C++ | HTML | CSS | R | Solidity</span>
            </p>
            <p className='flex flex-wrap justify-center gap-2 py-2'>
              <span className='font-bold'>Frameworks:</span>
              <span> React.js | Tailwind | Node.js | Flask | OpenCV | React Native | Pandas | NumPy | Selenium</span>
            </p>
            <p className='flex flex-wrap justify-center gap-2 py-2'>
              <span className='font-bold'>Tools:</span>
              <span> AWS | Firebase | MongoDB | DynamoDB | Git | Docker | Linux | Agile</span>
            </p>
          </div>
        </div>

        <h5 className='text-center underline text-[18px] py-4'>
          Professional Experience
        </h5>
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
            OliveX
            </span>
            <span className='px-2'>|</span>Remote
          </p>
          <p className='py-1 italic'>Junior Full Stack Developer (August 2023 - Present)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Modernized Objective-C and React codebases to increase security and 
              efficiency; also implemented new features 
            </li>
            <li>
              Introduced ads using AppLovin SDK, resulting in 43% more revenue 
              from existing fitness apps
            </li>
            <li>
              Developed websites and Discord bots in Python/Javascript for 
              community events and staff management purposes
            </li>
          </ul>
        </div>

        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
              OliveX
            </span>
            <span className='px-2'>|</span>Hong Kong
          </p>
          <p className='py-1 italic'>Software Engineer Intern (June 2023 - August 2023)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Programmed community engagement games with over 
              1,200 users and 20,000+ plays, increasing engagement by 300%
            </li>
            <li>
              Created dashboards in React for company fitness apps to analyze 
              3 years&#39; worth of user exercise data from DynamoDB, allowing the 
              product team to efficiently assign focuses
            </li>
            <li>
              Collaborated with other departments to design and launch quality 
              products ahead of schedule and error-less
            </li>
          </ul>
        </div>
        
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold'>UC Berkeley Law</span>
            <span className='px-2'>|</span>Berkeley, CA
          </p>
          <p className='py-1 italic'>Undergraduate Researcher (Feb 2023 – May 2023)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Developed a Python program utilizing Requests, BeautifulSoup, 
              and Regex to scrape 800+ proposed/final rules across 20+ years 
              from the SEC website
            </li>
            <li>
              Analyzed text data for trends using Spacy, Pandas, and custom 
              models; generated MatPlotLib visualizations with results
            </li>
            <li>
              Presented SEC policy text correlation trends at a Data Science 
              convention to over 100 students and professors
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default experience;
