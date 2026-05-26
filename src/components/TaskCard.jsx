import React from 'react';
import { Calendar, ChevronsDown } from 'lucide-react';

const TaskCard = ({ title, id, onClick }) => {
  return (
    <div
      className="bg-prime-card-bg rounded-card p-4 pb-3.5 flex flex-col gap-2 cursor-pointer transition-shadow hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)]"
      onClick={onClick}
    >
      <div className="text-[15px] font-bold text-prime-preto leading-[1.4]">
        {title || 'Um título de tarefa do projeto.'}
      </div>

      <div>
        <div className="inline-flex items-center gap-[5px] border border-prime-azul rounded-prazo px-2 py-0.5 text-[11px] text-prime-azul">
          <Calendar className="w-[11px] h-[11px] shrink-0" />
          DD/MM/AAAA
        </div>
      </div>

      <hr className="border-none border-t border-[#e0e0e0] my-1" />

      <div className="flex items-center justify-between">
        <span className="text-[14px] font-normal text-prime-preto">{id || 'ABC-123'}</span>
        <div className="flex items-center gap-2">
          <span className="text-prime-preto-50 flex items-center">
            <ChevronsDown className="w-3.5 h-3.5" />
          </span>
          <div className="w-7 h-7 rounded-full bg-prime-azul text-white grid place-items-center text-[11px] font-bold">
            R
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
