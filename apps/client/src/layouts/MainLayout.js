import SideBar from '@/components/navigation/SideBar';
import { ModeToggle } from '@/components/theme/ThemeToggle';
import { ThemeProvider } from '@/components/theme/theme-provider';
import React from 'react';

const MainLayout = ({children}) => {
  return (
    <ThemeProvider
    attribute="class"
    defaultTheme="system"
    enableSystem
    disableTransitionOnChange>

    <div className="flex">
      <ModeToggle></ModeToggle>
      <div className="">
        <SideBar />
      </div>
      <div className="w-screen " style={{marginLeft: '11rem'}}>
        {children}
      </div>
    </div>
    </ThemeProvider>
  );
};

export default MainLayout;
