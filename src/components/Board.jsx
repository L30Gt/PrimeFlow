import React, { useState, useEffect } from 'react';
import { Plus } from 'lucide-react';
import TaskColumn from './TaskColumn';
import { columns as initialColumns, tasks as initialTasks } from '../dados';

const Board = ({ onCardClick }) => {
  const [columnsData, setColumnsData] = useState([]);
  
  useEffect(() => {
    // Simula a união relacional entre Colunas e Tarefas
    const mappedColumns = initialColumns.map(col => {
      return {
        ...col,
        tasks: col.taskIds.map(taskId => initialTasks.find(t => t.id === taskId)).filter(Boolean)
      };
    });
    setColumnsData(mappedColumns);
  }, []);

  return (
    <div className="flex-1 overflow-auto bg-prime-board-bg px-7 py-6">
      <div className="flex gap-5 items-start min-h-full">
        {columnsData.map((col) => (
          <TaskColumn 
            key={col.id} 
            title={col.title}
            count={col.tasks.length}
            tasks={col.tasks}
            onCardClick={onCardClick}
          />
        ))}

        <button
          className="w-[52px] h-[52px] rounded-full border-2 border-prime-branco-bord bg-prime-white text-prime-preto-50 grid place-items-center cursor-pointer shrink-0 self-start mt-1 transition-colors hover:border-prime-azul hover:text-prime-azul"
          title="Adicionar coluna"
        >
          <Plus className="w-[22px] h-[22px]" />
        </button>
      </div>
    </div>
  );
};

export default Board;
