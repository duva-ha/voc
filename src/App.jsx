import React from 'react';
import Sidebar from './components/Sidebar';
import TaskItem from './components/TaskItem';
import Pomodoro from './components/Pomodoro';
import { Plus, Bell, Search } from 'lucide-react';

function App() {
  return (
    <div className="flex h-screen bg-slate-50 font-sans text-slate-900">
      <Sidebar />
      <main className="flex-1 flex flex-col overflow-hidden">
        <header className="h-20 bg-white/80 backdrop-blur-md border-b border-slate-200 flex items-center justify-between px-8 z-10">
          <div className="relative w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input type="text" placeholder="Tìm kiếm nhanh..." className="w-full pl-10 pr-4 py-2.5 bg-slate-100 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none text-sm transition-all" />
          </div>
          <div className="flex items-center gap-5">
            <button className="relative p-2 text-slate-500 hover:bg-slate-100 rounded-full transition-colors">
              <Bell size={22} />
              <span className="absolute top-2 right-2.5 w-2 h-2 bg-indigo-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="flex items-center gap-3 border-l pl-5 border-slate-200">
              <div className="text-right">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-tight">Thoại Gia</p>
                <p className="text-[10px] text-indigo-500 font-semibold">Pro Plan</p>
              </div>
              <div className="w-10 h-10 bg-indigo-600 rounded-2xl flex items-center justify-center text-white font-bold shadow-lg shadow-indigo-100">GT</div>
            </div>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-between items-end mb-10">
              <div>
                <h2 className="text-3xl font-extrabold tracking-tight italic text-slate-800">Chào buổi sáng! ☀️</h2>
                <p className="text-slate-500 mt-1 font-medium">Bạn có công việc cần hoàn thành trong hôm nay.</p>
              </div>
              <button className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-2xl font-bold shadow-xl shadow-indigo-200 transition-all active:scale-95">
                <Plus size={20} /> Thêm việc mới
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-4">
                <h3 className="font-bold text-slate-400 text-xs uppercase tracking-widest px-2">Danh sách ưu tiên</h3>
                <TaskItem title="Xây dựng API cho Dashboard" time="09:00 - 10:30" priority="High" completed={false} />
                <TaskItem title="Họp bàn về giao diện người dùng" time="11:00 - 12:00" priority="Medium" completed={false} />
                <TaskItem title="Kiểm tra lại responsive trên Mobile" time="14:00 - 15:00" priority="Low" completed={true} />
              </div>
              <div className="space-y-6">
                <div className="bg-indigo-600 p-6 rounded-3xl text-white shadow-2xl shadow-indigo-200">
                  <h3 className="font-semibold opacity-80 text-sm">Tiến độ tổng thể</h3>
                  <div className="text-4xl font-bold my-3 leading-none">65%</div>
                  <div className="w-full bg-white/20 h-2 rounded-full overflow-hidden">
                    <div className="bg-white h-full" style={{ width: '65%' }}></div>
                  </div>
                </div>
                <Pomodoro />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
