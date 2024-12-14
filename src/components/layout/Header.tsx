import React, { useState } from 'react';
import { Bell, Menu } from 'lucide-react';

interface HeaderProps {
  onMenuClick: () => void;
}

export default function Header({ onMenuClick }: HeaderProps) {
  const [notifications, setNotifications] = useState(false);

  return (
    <div className="flex justify-between items-center p-4 md:justify-end">
      <button 
        onClick={onMenuClick}
        className="text-gray-900 md:hidden"
      >
        <Menu size={24} />
      </button>
      <div className="flex items-center gap-4">
        <button 
          className="text-blue-600 relative"
          onClick={() => setNotifications(!notifications)}
        >
          <Bell size={24} />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        <button className="w-8 h-8 rounded-full bg-gray-200 hover:ring-2 hover:ring-blue-500 transition-all"></button>
      </div>
    </div>
  );
}