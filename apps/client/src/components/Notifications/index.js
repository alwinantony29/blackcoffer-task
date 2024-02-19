import {BellIcon} from '@radix-ui/react-icons';
import React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import {Button} from '../ui/button';
import {Separator} from '@/components/ui/separator';
import { NotificationList } from './notification-list';

const sampleNotifications = [
  {
    title: "Your call has been confirmed.",
    description: "1 hour ago",
  },
  {
    title: "You have a new message!",
    description: "1 hour ago",
  },
  {
    title: "Your subscription is expiring soon!",
    description: "2 hours ago",
  },
]

const NotificationMenu = ({notifications = sampleNotifications}) => {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button size="icon" variant="secondary">
            <BellIcon className="h-[1.2rem] w-[1.2rem]" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <NotificationList notifications={notifications}/>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default NotificationMenu;
