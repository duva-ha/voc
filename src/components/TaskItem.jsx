import React from 'react';
import { Clock, MoreVertical } from 'lucide-react';

const TaskItem = ({ title, time, priority, completed }) => {
  const priorityColors = {
    High: 'bg-red-100 text-red-600',
    Medium: 'bg-amber-100 text-amber-600',
    Low: 'bg-emerald-100 text-emerald-600'
  };

  return (
    <div className="flex items-center justify-between p-4 bg-white border border-slate-100 rounded-2xl hover:shadow-md transition-all group">
      <div className="flex items-center gap-4">
        <input type="checkbox" defaultChecked={completed} className="w-5 h-5 rounded-md border-slate-300 text-indigo-600" />
        <div>
          <h4 className={`font-semibold ${completed ? 'line-through text-slate-400' : 'text-slate-700'}`}>{title}</h4>
          <div className="flex items-center gap-3 mt-1">
            <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider ${priorityColors[priority]}`}>{priority}</span>
            <span className="text-xs text-slate-400 flex items-center gap-1"><Clock size={12} /> {time}</span>
          </div>
        </div>
      </div>
      <button className="text-slate-300 hover:text-slate-600"><MoreVertical size={18} /></button>
    </div>
  );
};

export default TaskItem;
