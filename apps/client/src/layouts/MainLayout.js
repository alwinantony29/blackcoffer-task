import NavBar from '@/components/nav-bar';
import {ThemeProvider} from '@/components/theme/theme-provider';
import React from 'react';

const MainLayout = ({children}) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <div className="flex">
        <NavBar />
        <div className="w-screen " style={{marginLeft: '11rem'}}>
          {children}
        </div>
      </div>
    </ThemeProvider>
  );
};

export default MainLayout;
