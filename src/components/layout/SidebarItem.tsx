import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SidebarItemProps {
  icon: LucideIcon;
  text: string;
  active?: boolean;
  onClick: () => void;
}

export default function SidebarItem({ icon: Icon, text, active, onClick }: SidebarItemProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg transition-all ${
        active
          ? 'text-blue-600 bg-blue-50 shadow-sm'
          : 'text-gray-600 hover:bg-gray-50'
      }`}
    >
      <Icon size={20} />
      <span>{text}</span>
    </button>
  );
}