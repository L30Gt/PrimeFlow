import React, { useState, useEffect } from 'react';
import { Plus } from 'lucide-react';
import TaskColumn from './TaskColumn';
import TaskModal from './TaskModal';
import { getColumnsData, saveTask, deleteTask, createColumn } from '../services/apiFake';

const Board = () => {
  const [columnsData, setColumnsData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  
  const loadData = () => {
    setColumnsData(getColumnsData());
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleCardClick = (task) => {
    setSelectedTask(task);
    setIsModalOpen(true);
  };

  const handleAddCard = (columnId) => {
    // Passa um molde vazio com a coluna de destino preenchida
    setSelectedTask({ columnId, title: '', description: '', tags: [], assignees: [], priority: '' });
    setIsModalOpen(true);
  };

  const handleSave = (task) => {
    saveTask(task);
    loadData();
    setIsModalOpen(false);
  };

  const handleDelete = (id) => {
    deleteTask(id);
    loadData();
    setIsModalOpen(false);
  };

  const handleAddColumn = () => {
    const title = window.prompt('Digite o nome da nova coluna:');
    if (title && title.trim()) {
      // Vincula automaticamente ao projeto atual
      createColumn(title.trim(), 'proj-001');
      loadData();
    }
  };

  return (
    <div className="flex-1 overflow-auto bg-prime-board-bg px-7 py-6">
      <div className="flex gap-5 items-start min-h-full">
        {columnsData.map((col) => (
          <TaskColumn 
            key={col.id} 
            title={col.title} 
            count={col.tasks.length} 
            tasks={col.tasks} 
            onCardClick={handleCardClick}
            onAddClick={() => handleAddCard(col.id)}
          />
        ))}

        <button 
          onClick={handleAddColumn}
          className="w-[52px] h-[52px] rounded-full border-2 border-prime-branco-bord bg-prime-white text-prime-preto-50 grid place-items-center cursor-pointer shrink-0 self-start mt-1 transition-colors hover:border-prime-azul hover:text-prime-azul"
          title="Adicionar coluna"
        >
          <Plus className="w-[22px] h-[22px]" />
        </button>
      </div>

      <TaskModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        task={selectedTask}
        onSave={handleSave}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default Board;

