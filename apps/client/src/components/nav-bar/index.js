import React from 'react';
import {ModeToggle} from '../theme/ThemeToggle';
import {Avatar, AvatarFallback, AvatarImage} from '@/components/ui/avatar';
import NotificationMenu from '../Notifications';
import LanguageMenu from '../language-menu';
import ShortCutMenu   from "../shortcut-menu";

const NavBar = () => {
  return (
    <div className="w-[99vw] h-[60px] gap-5 border m-[.5vw] rounded-lg flex justify-end p-5 items-center ">
      <LanguageMenu/>
      <ModeToggle />
      <ShortCutMenu/>
      <NotificationMenu/>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  );
};

export default NavBar;
