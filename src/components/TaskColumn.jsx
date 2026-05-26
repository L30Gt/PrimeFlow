import React from 'react';
import { Plus } from 'lucide-react';
import TaskCard from './TaskCard';

const TaskColumn = ({ title, count, tasks, onCardClick }) => {
  return (
    <div className="bg-prime-white border border-prime-branco-bord rounded-col w-[302px] shrink-0 flex flex-col overflow-hidden">
      <div className="px-5 pt-4 pb-3.5 border-b border-prime-branco-bord text-[15px] font-bold text-prime-preto flex items-center justify-between">
        {title}
        <span className="text-[11px] font-semibold bg-prime-board-bg border border-prime-branco-bord rounded-full px-2 py-[1px] text-prime-preto-50">
          {count}
        </span>
      </div>

      <div className="p-3.5 flex flex-col gap-3 overflow-y-auto max-h-[calc(100vh-200px)]">
        {tasks.map((task) => (
          <TaskCard 
            key={task.id} 
            task={task}
            onClick={() => onCardClick(task)}
          />
        ))}

        <button className="flex items-center justify-center gap-1.5 h-10 border-[2.5px] border-dashed border-prime-azul rounded-card bg-transparent text-prime-azul text-[14px] font-medium cursor-pointer w-full transition-colors hover:bg-[rgba(17,111,152,0.06)]">
          <Plus className="w-[15px] h-[15px]" />
          Criar Tarefa
        </button>
      </div>
    </div>
  );
};

export default TaskColumn;
