import React from 'react';
import {ModeToggle} from '../theme/ThemeToggle';
import {Avatar, AvatarFallback, AvatarImage} from '@/components/ui/avatar';
import NotificationMenu from '../Notifications';
import LanguageMenu from '../language-menu';
import ShortCutMenu from '../shortcut-menu';
import SearchDialog from '../search-dialog';
import SideBar from '../side-bar';

const NavBar = () => {
  return (
    <div className="w-[99vw] h-[60px] gap-5 border m-[.5vw] rounded-lg flex justify-between p-5 items-center ">
      <div className='flex items-center gap-5'>
        <SideBar/>
        <SearchDialog />
      </div>
      <div className="flex gap-5 items-center">
        <LanguageMenu />
        <ModeToggle />
        <ShortCutMenu />
        <NotificationMenu />
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default NavBar;
