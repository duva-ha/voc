import React from 'react';
import { LayoutDashboard, CheckSquare, Calendar, Settings, LogOut } from 'lucide-react';

const Sidebar = () => {
  const menuItems = [
    { icon: <LayoutDashboard size={20} />, label: 'Tổng quan', active: true },
    { icon: <CheckSquare size={20} />, label: 'Công việc', active: false },
    { icon: <Calendar size={20} />, label: 'Lịch trình', active: false },
    { icon: <Settings size={20} />, label: 'Cài đặt', active: false },
  ];

  return (
    <aside className="w-64 bg-white border-r border-slate-200 flex flex-col h-full">
      <div className="p-6">
        <h1 className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent italic">
          MY DASHBOARD
        </h1>
      </div>
      <nav className="flex-1 px-4 space-y-1">
        {menuItems.map((item, index) => (
          <button key={index} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${item.active ? 'bg-indigo-50 text-indigo-600' : 'text-slate-500 hover:bg-slate-50'}`}>
            {item.icon}
            <span className="font-medium">{item.label}</span>
          </button>
        ))}
      </nav>
      <div className="p-4 border-t border-slate-100">
        <button className="w-full flex items-center gap-3 px-4 py-3 text-slate-500 hover:text-red-500 transition-colors">
          <LogOut size={20} />
          <span className="font-medium">Đăng xuất</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
