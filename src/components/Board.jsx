import React from 'react';
import { Plus } from 'lucide-react';
import TaskColumn from './TaskColumn';

const Board = ({ onCardClick }) => {
  const columns = [
    {
      title: "A Fazer",
      tasks: [
        { title: "Um título de tarefa do projeto.", id: "ABC-123" },
        { title: "Um título de tarefa do projeto.", id: "ABC-123" }
      ]
    },
    {
      title: "Em Andamento",
      tasks: [
        { title: "Um título de tarefa do projeto.", id: "ABC-123" },
        { title: "Um título de tarefa do projeto.", id: "ABC-123" },
        { title: "Um título de tarefa do projeto.", id: "ABC-123" }
      ]
    },
    {
      title: "Concluído",
      tasks: [
        { title: "Um título de tarefa do projeto.", id: "ABC-123" },
        { title: "Um título de tarefa do projeto.", id: "ABC-123" },
        { title: "Um título de tarefa do projeto.", id: "ABC-123" },
        { title: "Um título de tarefa do projeto.", id: "ABC-123" },
        { title: "Um título de tarefa do projeto.", id: "ABC-123" }
      ]
    }
  ];

  return (
    <div className="flex-1 overflow-auto bg-prime-board-bg px-7 py-6">
      <div className="flex gap-5 items-start min-h-full">
        {columns.map((col, idx) => (
          <TaskColumn
            key={idx}
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
