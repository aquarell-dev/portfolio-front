import React, { FC } from 'react';
import { useRouter } from 'next/router';

import Avatar from '../../../../assets/avatar.png';

import { IIndexPageInfo } from '../index.types';

const Info: FC<IIndexPageInfo> = ({ location, age, avatar }) => {
  const router = useRouter();

  return (
    <>
      <div className="flex flex-col space-y-2 md:spacy-y-0 mb-2 md:flex-row items-center max-w-[500px] mx-auto">
        <p className="font-medium hidden md:block">{age}</p>
        <img
          src={avatar}
          alt="Aquarell.dev"
          className="w-20 h-20 md:w-32 md:h-32 rounded-full mx-auto bg-gray-600"
        />
        <p className="font-medium hidden md:block">{location}</p>
        <p className="font-medium block md:hidden text-sm">{age}, {location}</p>
      </div>
      <div className="text-lg sm:text-xl md:text-3xl lg:text-4xl text-center">
        <p>Hello&#128075;, i&apos;m a full-stack web developer from&nbsp;Russia&nbsp;&#127479;&#127482;</p>
        <p>You should check out my recent&nbsp;
          <span
            className="text-indigo-300 hover:text-indigo-500 cursor-pointer underline transition duration-300 ease-in-out"
            onClick={() => router.push('/projects')}
          >
              projects
            </span>.
        </p>
      </div>
    </>
  );
};

export default Info;
