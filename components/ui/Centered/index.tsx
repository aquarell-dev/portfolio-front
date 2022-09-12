import { FC, PropsWithChildren } from 'react';

export const AbsoluteCentered: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className='responsive'>
      <div className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2'>
        {children}
      </div>
    </div>
  );
};
