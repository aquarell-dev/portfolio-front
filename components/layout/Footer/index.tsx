import { FC, ReactNode } from 'react';

import { MarginContainer } from '../../ui/Container';

import { SiGmail } from 'react-icons/si';
import { BsGithub, BsTelegram } from 'react-icons/bs';

interface IContact {
  element: ReactNode;
  href: string;
}

const contacts: IContact[] = [
  {
    element: <BsGithub size="100%"/>,
    href: 'https://github.com/aquarell-dev'
  },
  {
    element: <BsTelegram size="100%"/>,
    href: '123'
  },
  {
    element: <SiGmail size="100%"/>,
    href: '123'
  },
];

const Footer: FC = () => {
  return (
    <div className="sticky top-[100vh] mb-3">
      <MarginContainer>
        <div className="flex justify-end items-center space-x-4">
          {contacts.map((contact, idx) => (
            <div
              className="w-8 cursor-pointer"
              key={idx}
            >
              <a
                href={contact.href}
                target="_blank"
                rel="noreferrer"
              >{contact.element}</a>
            </div>
          ))}
        </div>
      </MarginContainer>
    </div>
  );
};

export default Footer;
