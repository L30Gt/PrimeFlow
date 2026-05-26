import React, { useState, useEffect } from 'react';
import { Calendar, ChevronDown, X } from 'lucide-react';
import { users, tags } from '../dados';

const TaskModal = ({ isOpen, onClose, task }) => {
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    if (task) {
      setFormData(task);
    }
  }, [task]);

  if (!isOpen || !formData) return null;

  // Busca os dados das tags mockadas se existir
  const tagData = formData.tags?.length > 0 
    ? tags.find(t => t.id === formData.tags[0]) 
    : null;
    
  // Formata a data (se existir) do mock
  const formatData = (dateString) => {
    if (!dateString) return 'DD/MM/AAAA';
    return new Date(dateString).toLocaleDateString('pt-BR');
  };

  return (
    <div 
      className="fixed inset-0 z-[100] bg-prime-preto-60 flex items-center justify-center p-8"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-prime-branco-bord rounded-modal shadow-[8px_8px_10px_0_rgba(0,0,0,0.10)] w-[900px] max-h-[calc(100vh-64px)] flex flex-col overflow-hidden relative">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-[18px] right-5 w-7 h-7 rounded-full border-none bg-transparent grid place-items-center cursor-pointer text-prime-azul text-[20px] leading-none font-light hover:bg-prime-azul-25"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top */}
        <div className="px-8 pt-7 pb-5 shrink-0">
          <div className="text-[28px] font-semibold text-prime-preto mb-1">
            {formData.title}
          </div>
          <div className="text-[15px] font-medium text-prime-preto">
            {formData.id}
          </div>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto px-8 pb-6 grid grid-cols-1 md:grid-cols-[1fr_320px] gap-7">
          
          {/* Left Column: Description */}
          <div className="flex flex-col">
            <div className="bg-prime-azul-25 rounded-desc py-4 px-5 flex-1 min-h-[280px] flex flex-col">
              <div className="text-[17px] font-medium text-prime-azul mb-2.5 shrink-0">
                Descrição
              </div>
              <textarea 
                className="flex-1 border-none bg-transparent outline-none font-sans text-[14px] text-prime-preto resize-none leading-[1.55] placeholder:text-[rgba(17,111,152,0.45)]" 
                placeholder="Escreva uma descrição para a tarefa..."
                defaultValue={formData.description}
              ></textarea>
            </div>
          </div>

          {/* Right Column: Info */}
          <div className="pt-0 flex flex-col gap-0.5">
            <div className="text-[17px] font-medium text-prime-azul mb-3.5">
              Informações
            </div>

            {/* Tag */}
            <div className="grid grid-cols-[110px_1fr] items-center gap-2.5 py-2.5 border-b border-[rgba(17,111,152,0.10)]">
              <span className="text-[14px] font-normal text-prime-azul whitespace-nowrap">Tag</span>
              <div className="bg-prime-azul-25 rounded-form h-[30px] flex items-center px-2.5 cursor-pointer relative">
                <span className="flex-1 text-[12px] font-normal text-prime-azul">
                  {tagData ? tagData.label : 'Selecione uma opção'}
                </span>
                <ChevronDown className="w-3.5 h-3.5 text-prime-azul shrink-0 ml-1.5" />
              </div>
            </div>

            {/* Início */}
            <div className="grid grid-cols-[110px_1fr] items-center gap-2.5 py-2.5 border-b border-[rgba(17,111,152,0.10)]">
              <span className="text-[14px] font-normal text-prime-azul whitespace-nowrap">Início</span>
              <div className="bg-prime-azul-25 rounded-form h-[30px] flex items-center px-2.5 cursor-pointer relative">
                <span className="flex-1 text-[12px] font-normal text-prime-azul">{formatData(formData.startDate)}</span>
                <Calendar className="w-4 h-4 text-prime-azul shrink-0 ml-1.5" />
              </div>
            </div>

            {/* Prazo */}
            <div className="grid grid-cols-[110px_1fr] items-center gap-2.5 py-2.5 border-b border-[rgba(17,111,152,0.10)]">
              <span className="text-[14px] font-normal text-prime-azul whitespace-nowrap">Prazo</span>
              <div className="bg-prime-azul-25 rounded-form h-[30px] flex items-center px-2.5 cursor-pointer relative">
                <span className="flex-1 text-[12px] font-normal text-prime-azul">{formatData(formData.endDate)}</span>
                <Calendar className="w-4 h-4 text-prime-azul shrink-0 ml-1.5" />
              </div>
            </div>

            {/* Colaboradores */}
            <div className="grid grid-cols-[110px_1fr] items-center gap-2.5 py-2.5 border-b border-[rgba(17,111,152,0.10)]">
              <span className="text-[14px] font-normal text-prime-azul whitespace-nowrap">Colaboradores</span>
              <div className="bg-prime-azul-25 rounded-form min-h-[30px] h-auto flex items-center flex-wrap gap-1 py-1 px-2 cursor-pointer relative">
                
                {formData.assignees?.map(assigneeId => {
                  const u = users.find(u => u.id === assigneeId);
                  if (!u) return null;
                  return (
                    <div key={u.id} className="inline-flex items-center gap-[5px] bg-prime-azul-25 rounded-form py-0.5 pr-1.5 pl-1 text-[11px] text-prime-azul">
                      <div className="w-4 h-4 rounded-full bg-prime-azul text-white grid place-items-center text-[8px] font-bold">
                        {u.name.charAt(0).toUpperCase()}
                      </div>
                      {u.name.split(' ')[0]}
                      <X className="w-3 h-3 cursor-pointer text-prime-azul ml-0.5 hover:text-[#a00]" />
                    </div>
                  );
                })}

              </div>
            </div>

            {/* Prioridade */}
            <div className="grid grid-cols-[110px_1fr] items-center gap-2.5 py-2.5">
              <span className="text-[14px] font-normal text-prime-azul whitespace-nowrap">Prioridade</span>
              <div className="bg-prime-azul-25 rounded-form h-[30px] flex items-center px-2.5 cursor-pointer relative">
                <span className="flex-1 text-[12px] font-normal text-prime-azul">{formData.priority || 'Selecione uma opção'}</span>
                <ChevronDown className="w-3.5 h-3.5 text-prime-azul shrink-0 ml-1.5" />
              </div>
            </div>

          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-8 py-4 pb-6 shrink-0">
          <button className="text-[14px] font-semibold text-prime-azul bg-transparent border-none cursor-pointer underline underline-offset-2 hover:text-[#a00]">
            Excluir Tarefa
          </button>
          <button className="bg-prime-azul text-white border-none rounded-btn h-10 px-9 font-sans text-[15px] font-semibold cursor-pointer transition-colors hover:bg-[#0d5878]">
            Salvar Tarefa
          </button>
        </div>

      </div>
    </div>
  );
};

export default TaskModal;
