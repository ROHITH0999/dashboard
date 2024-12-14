import React from 'react';
import { LayoutDashboard, Briefcase, Activity, Calendar, FileText, Scale } from 'lucide-react';

const menuItems = [
  { icon: LayoutDashboard, text: 'Dashboard', active: true },
  { icon: Briefcase, text: 'My Cases' },
  { icon: Activity, text: 'Activities' },
  { icon: Calendar, text: 'Calendar' },
  { icon: FileText, text: 'Files' },
  { icon: Scale, text: 'Open a Dispute' },
];

export default function Sidebar() {
  return (
    <div className="w-64 bg-white h-screen p-4 border-r border-gray-200">
      <div className="flex items-center gap-2 mb-8">
        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
          <span className="text-white font-semibold">J</span>
        </div>
        <span className="text-xl font-semibold">Jur</span>
      </div>
      
      <nav className="space-y-2">
        {menuItems.map((item, index) => (
          <a
            key={index}
            href="#"
            className={`flex items-center gap-3 px-4 py-2 rounded-lg ${
              item.active
                ? 'text-blue-600 bg-blue-50'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <item.icon size={20} />
            <span>{item.text}</span>
          </a>
        ))}
      </nav>

      <div className="mt-8 p-4 bg-blue-50 rounded-lg">
        <h3 className="text-sm font-medium mb-2">Get Justice on every Claims</h3>
        <img
          src="https://images.unsplash.com/photo-1589578228447-e1a4e481c6c8?auto=format&fit=crop&w=200"
          alt="Justice illustration"
          className="w-full h-32 object-cover rounded-lg"
          
        />
      </div>
    </div>
  );
}