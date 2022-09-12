import { FC, PropsWithChildren } from 'react';

import Navbar from './Navbar';

import { useRouter } from 'next/router';

const Layout: FC<PropsWithChildren> = ({ children }) => {
  const router = useRouter();

  return (
    <div style={{ minHeight: '100vh', backgroundImage: router.pathname === '/' ? 'linear-gradient(to left bottom, #051937, #001f33, #002125, #002114, #171f05)': '' }}>
      <Navbar />
      {children}
    </div>
  )
};

export default Layout;
