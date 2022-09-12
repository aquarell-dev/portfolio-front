import { FC } from 'react';

import { IProjectPreview } from '../project.types';

const ProjectCard: FC<IProjectPreview> = ({ title, photo, description, tags }) => {
  return (
    <div className="relative w-[240px] min-h-[250px] pb-1 rounded shadow-xl cursor-pointer mt-8 bg-white">
      <img
        className="h-[90px] w-full object-cover rounded-t"
        src={photo}
        alt="Card"
      />
      <div className="px-4 py-2 responsive w-full h-full">
        <p className="font-bold text-md text-slate-600">{title}</p>
        <p className="text-slate-400">{description}</p>
      </div>
      <div className="absolute bottom-0 text-black px-2 py-3 flex overflow-x-auto items-center space-x-3">
        {tags.map((tag, idx) => (
          <div
            className="rounded-lg bg-indigo-300 hover:bg-indigo-400 transition duration-300 ease-in-out px-2 py-0.5"
            key={idx}
          >
            <p className="text-sm">#{tag}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
