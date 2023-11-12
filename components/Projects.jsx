import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import botImg from '../public/assets/projects/intern_bot.png';
import gameImg from '../public/assets/projects/escape_game.png'
import healthyImg from '../public/assets/projects/healthy_habits.png'
import secImg from '../public/assets/projects/sec_project.jpg'
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#3700B3]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Internship Finder'
            backgroundImg={botImg}
            projectUrl='/internbot'
            tech='Discord.py'
          />
          <ProjectItem
            title='Escape the Dungeon'
            backgroundImg={gameImg}
            projectUrl='/escapegame'
            tech='Java'

          />
          <ProjectItem
            title='Healthy Habits'
            backgroundImg={healthyImg}
            projectUrl='/healthyhabits'
            tech='Reflex/OpenCV'

          />
          <ProjectItem
            title='SEC Rule Analysis'
            backgroundImg={secImg}
            projectUrl='/secproj'
            tech='Sklearn'

          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
