import React, { useState } from 'react';
import { LayoutDashboard, Briefcase, Activity, Calendar, FileText, Scale, X } from 'lucide-react';
import Logo from './Logo';
import SidebarItem from './SidebarItem';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  { icon: LayoutDashboard, text: 'Dashboard' },
  { icon: Briefcase, text: 'My Cases' },
  { icon: Activity, text: 'Activities' },
  { icon: Calendar, text: 'Calendar' },
  { icon: FileText, text: 'Files' },
  { icon: Scale, text: 'Open a Dispute' },
];

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const [activeItem, setActiveItem] = useState(0);

  return (
    <>
      {/* Backdrop for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 md:hidden z-20"
          onClick={onClose}
          aria-hidden="true"
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:relative md:translate-x-0 transition-transform duration-300 ease-in-out w-64 bg-white h-screen p-4 border-r border-gray-200 z-30`}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Logo />
          <button onClick={onClose} className="text-gray-500 md:hidden">
            <X size={24} />
          </button>
        </div>

        {/* Navigation Items */}
        <nav className="space-y-2">
          {menuItems.map((item, index) => (
            <SidebarItem
              key={index}
              icon={item.icon}
              text={item.text}
              active={index === activeItem}
              onClick={() => setActiveItem(index)}
            />
          ))}
        </nav>

        {/* Promotional Section */}
        <div className="mt-8 p-4 bg-blue-50 rounded-lg">
          <h3 className="text-sm font-medium mb-2">Get Justice on every Claim</h3>
          <img
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=200"
            alt="Justice scales"
            className="w-full h-32 object-cover rounded-lg"
          />
        </div>
      </div>
    </>
  );
}
