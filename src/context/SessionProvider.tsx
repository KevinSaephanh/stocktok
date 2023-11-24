import { SessionProvider } from 'next-auth/react';
import React from 'react';

const Session = ({ children }: React.ReactNode) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default Session;
