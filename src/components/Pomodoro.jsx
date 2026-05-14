import React from 'react';
import { Play, RotateCcw } from 'lucide-react';

const Pomodoro = () => (
  <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex flex-col items-center">
    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 italic text-center">Focus Timer</span>
    <div className="text-5xl font-mono font-bold text-slate-800 mb-6 tracking-tighter">25:00</div>
    <div className="flex gap-2 w-full">
      <button className="flex-1 flex items-center justify-center gap-2 py-3 bg-slate-900 text-white rounded-2xl font-bold hover:bg-black transition-all text-sm">
        <Play size={16} fill="currentColor" /> Bắt đầu
      </button>
      <button className="p-3 border-2 border-slate-100 rounded-2xl hover:bg-slate-50 transition-colors text-slate-400">
        <RotateCcw size={20} />
      </button>
    </div>
  </div>
);

export default Pomodoro;
