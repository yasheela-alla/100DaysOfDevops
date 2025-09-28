import React, { useState } from 'react';
import { Task, AppSettings } from '../types/types';
import { Video, Code, Check, MessageSquare, StickyNote } from 'lucide-react';
import NotesModal from './NotesModal';

interface TaskCardProps {
  task: Task;
  onToggle: (taskId: string) => void;
  onNotesUpdate: (taskId: string, notes: string) => void;
  settings: AppSettings;
}

const TaskCard: React.FC<TaskCardProps> = ({ task, onToggle, onNotesUpdate }) => {
  const isVideo = task.type === 'video';
  const [showNotesModal, setShowNotesModal] = useState(false);

  const handleSaveNotes = (notes: string) => {
    onNotesUpdate(task.id, notes);
  };
  
  return (
    <>
      <div className={`card-minimal card-hover-minimal ${task.completed ? 'opacity-60' : ''}`}>
        <div className="p-4">
          <div className="flex items-start gap-3">
            {/* Checkbox */}
            <div 
              className={`flex-shrink-0 mt-0.5 transition-all duration-150 cursor-pointer ${
                task.completed ? 'text-white' : 'text-gray-500 hover:text-white'
              }`}
              onClick={() => onToggle(task.id)}
            >
              <div className={`w-4 h-4 rounded border transition-all duration-150 flex items-center justify-center ${
                task.completed 
                  ? 'bg-white border-white' 
                  : 'border-white/30 hover:border-white/50'
              }`}>
                {task.completed && <Check className="h-3 w-3 text-black" />}
              </div>
            </div>

            {/* Content */}
            <div 
              className="flex-1 min-w-0 cursor-pointer"
              onClick={() => onToggle(task.id)}
            >
              <div className="flex items-center gap-2 mb-2">
                {isVideo ? (
                  <div className="badge-video">
                    <Video className="h-3 w-3 inline mr-1" />
                    Video
                  </div>
                ) : (
                  <div className="badge-practice">
                    <Code className="h-3 w-3 inline mr-1" />
                    Practice
                  </div>
                )}
                <div className="badge-day">Day {task.day}</div>
              </div>
              
              <h3 className={`text-primary font-medium text-sm mb-1 ${
                task.completed ? 'line-through opacity-75' : ''
              }`}>
                {task.title}
              </h3>
              
              <p className="text-secondary text-xs leading-relaxed">
                {task.description}
              </p>
            </div>

            {/* Notes Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowNotesModal(true);
              }}
              className={`flex-shrink-0 p-2 rounded transition-all duration-150 ${
                task.notes && task.notes.trim() !== ''
                  ? 'text-blue-400 bg-blue-500/20 hover:bg-blue-500/30' 
                  : 'text-gray-500 hover:text-white hover:bg-white/10'
              }`}
              title={task.notes && task.notes.trim() !== '' ? 'Edit notes' : 'Add notes'}
            >
              <StickyNote className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      <NotesModal
        isOpen={showNotesModal}
        onClose={() => setShowNotesModal(false)}
        notes={task.notes || ''}
        onSave={handleSaveNotes}
        taskTitle={task.title}
      />
    </>
  );
};

export default TaskCard;