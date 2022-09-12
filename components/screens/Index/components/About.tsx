import React, { FC } from 'react';
import { IAboutProperty } from '../index.types';
import { cn } from '../../../../utils/utils';

const About: FC<{ about: IAboutProperty[] }> = ({ about }) => {
  return (
    <div className="responsive flex justify-center mt-10">
      <div className="grid grid-cols-1 gap-y-4 md:grid-cols-2 w-fit">
        {about.map((ab, idx) => (
          <div
            className={cn(
              'flex text-white items-center mt-4',
              idx % 2 === 0 ? 'flex-row' : 'md:flex-row-reverse'
            )}
            key={idx}
          >
            <div className={cn(
              "w-12 lg:w-16 h-12 lg:h-16 flex flex-shrink-0 justify-center " +
              "items-center rounded-md border-2 border-white",
              idx % 2 === 0 ? 'mr-3' : 'mr-3 md:ml-3'
            )}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={cn(
                  'w-6 h-6 text-white'
                )}
              >
                {ab.icon}
              </svg>
            </div>
            <div
              className={cn(
                "flex flex-col justify-between md:justify-around max-w-[400px]",
                idx % 2 === 0 ? 'text-left' : 'md:text-right'
              )}
              style={{ flex: '0 0 auto' }}
            >
              <p className="text-white text-sm lg:text-[16px] font-medium">{ab.title}</p>
              <div>
                <p className="text-[12px] text-gray-300 md:text-sm">{ab.content}</p>
                <p className="text-[10px] md:text-sm text-gray-400">{ab.addition}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
