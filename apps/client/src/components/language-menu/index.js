import React from 'react';
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from '../ui/dropdown-menu';
import {Button} from '../ui/button';
import { IoLanguage as LanguageIcon } from "react-icons/io5";

const LanguageMenu = () => {
    
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button size="icon" variant="secondary">
            <LanguageIcon className="h-[1.2rem] w-[1.2rem]" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem >
            English
          </DropdownMenuItem>
          <DropdownMenuItem >
            French
          </DropdownMenuItem>
          <DropdownMenuItem >
            Arabic
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default LanguageMenu;
