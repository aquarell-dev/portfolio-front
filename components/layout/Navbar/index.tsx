import { FC } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';

import { MarginContainer } from '../../ui/Container';

import { cn } from '../../../utils/utils';

interface ILink {
  title: string;
  href: string;
}

const links: ILink[] = [
  {
    title: 'Projects',
    href: '/projects'
  },
];

const Navbar: FC = () => {
  const router = useRouter();

  return (
    <div className={cn("w-full", router.pathname !== '/' ? "border-b": '')}>
      <MarginContainer>
        <div
          className={cn(
            'h-16 flex items-center justify-between',
            router.pathname === '/' ? 'text-white' : 'text-gray-800'
          )}
        >
          <div className="flex space-x-2 md:space-x-4 items-center">
            <Link href="/">
              <p className="cursor-pointer text-xl md:text-2xl font-medium">Aquarell.dev</p>
            </Link>
            {links.map((link, idx) => (
              <Link
                href={link.href}
                key={idx}
              >
                <p className="text-sm md:text-lg hover:underline transition-all duration-300 ease-in-out cursor-pointer">
                  {link.title}
                </p>
              </Link>
            ))}
          </div>
          <div className="hidden sm:block">
            <Link href="/">
              <div className="flex space-x-1 items-center cursor-pointer hover:text-gray-500 transition duration-300">
                <p className="font-medium text-sm md:text-lg">Let&apos;s connect</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 font-medium"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </MarginContainer>
    </div>
  );
};

export default Navbar;
