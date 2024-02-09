import SideBar from '@/components/navigation/SideBar';
import React from 'react';

const MainLayout = ({children}) => {
  return (
    <div className="flex">
      <div className="">
        <SideBar />
      </div>
      <div className="w-screen " style={{marginLeft: '11rem'}}>
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
