import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {IoSearchOutline} from 'react-icons/io5';
import {Separator} from '../ui/separator';
import {Input} from '../ui/input';

const SearchDialog = () => {
  return (
    <div>
      <Dialog>
        <DialogTrigger>
          <div className="flex items-center gap-2">
            <IoSearchOutline className="w-[1.5rem] h-[1.5rem]" />
            Search 
          </div>
        </DialogTrigger>
        <DialogContent>
          <div className="flex items-center">
            <IoSearchOutline className="w-[1.5rem] h-[1.5rem]" />
            <Input autofocus={true} />
          </div>
          <Separator />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default SearchDialog;
