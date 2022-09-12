import { FC } from 'react';
import { IProjectsSearch } from '../project.types';

const ProjectsSearch: FC<IProjectsSearch> = ({ value, setValue }) => {
  return (
    <div>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder='Search...'
        className='outline-none bg-gray-100 w-52 md:w-60 lg:w-80 rounded px-4 py-2 text-slate-800'
      />
    </div>
  );
};

export default ProjectsSearch;
