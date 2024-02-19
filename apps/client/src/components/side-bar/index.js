import React from 'react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { CiMenuBurger } from "react-icons/ci";

const SideBar = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <CiMenuBurger className='h-[1.5rem] w-[1.5rem]'/>
      </SheetTrigger>
      <SheetContent side={'left'}>
        {/* <SheetHeader>
          <SheetTitle>Are you absolutely sure?</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </SheetDescription>
        </SheetHeader> */}
      </SheetContent>
    </Sheet>
  );
};

export default SideBar;
