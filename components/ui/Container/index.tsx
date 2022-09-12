import { FC, PropsWithChildren } from 'react';

export const PaddingContainer: FC<PropsWithChildren> = (
  {children}
) => <div className='px-4 md:px-5 lg:px-[117px]'>{children}</div>;

export const MarginContainer: FC<PropsWithChildren> = (
  {children}
) => <div className='mx-4 md:mx-5 lg:mx-[117px]'>{children}</div>;
