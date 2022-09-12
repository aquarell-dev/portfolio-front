import { NextPage } from 'next';
import { useState } from 'react';

import { MarginContainer } from '../../components/ui/Container';

import ProjectCard from '../../components/screens/Projects/components/ProjectCard';
import ProjectsSearch from '../../components/screens/Projects/components/ProjectsSearch';

import { IProjectPreview } from '../../components/screens/Projects/project.types';

import CardEx from '/assets/card-top.jpg';

const project: IProjectPreview = {
  title: 'Weather web app',
  photo: CardEx.src,
  description: 'serwrwerwr',
  tags: ['react', 'nextjs']
};

const projects = [project, project, project, project, project];

const Projects: NextPage = () => {
  const [searchString, setSearchString] = useState<string>('');

  return (
    <MarginContainer>
      <div className='flex justify-between mx-8 items-center my-8'>
        <h1 className='text-black text-xl font-medium text-center'>Projects</h1>
        <ProjectsSearch value={searchString} setValue={setSearchString} />
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 place-items-center mb-8'>
        {projects.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    </MarginContainer>
  );
};

export default Projects;
