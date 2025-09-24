import React, { useState } from 'react';
import { Task, AppSettings } from '../types/types';
import { Video, Code, Check, MessageSquare } from 'lucide-react';

interface TaskCardProps {
  task: Task;
  onToggle: (taskId: string) => void;
  onNotesUpdate: (taskId: string, notes: string) => void;
  settings: AppSettings;
}

const TaskCard: React.FC<TaskCardProps> = ({ task, onToggle, onNotesUpdate }) => {
  const isVideo = task.type === 'video';
  const [showNotes, setShowNotes] = useState(false);
  const [notes, setNotes] = useState(task.notes || '');

  const handleSaveNotes = () => {
    onNotesUpdate(task.id, notes);
  };
  
  return (
    <div className={`card-minimal card-hover-minimal ${task.completed ? 'opacity-60' : ''}`}>
      <div 
        className="p-4 cursor-pointer"
        onClick={() => onToggle(task.id)}
      >
        <div className="flex items-start gap-3">
          {/* Checkbox */}
          <div className={`flex-shrink-0 mt-0.5 transition-all duration-150 ${
            task.completed ? 'text-white' : 'text-gray-500 hover:text-white'
          }`}>
            <div className={`w-4 h-4 rounded border transition-all duration-150 flex items-center justify-center ${
              task.completed 
                ? 'bg-white border-white' 
                : 'border-white/30 hover:border-white/50'
            }`}>
              {task.completed && <Check className="h-3 w-3 text-black" />}
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
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
              setShowNotes(!showNotes);
            }}
            className={`flex-shrink-0 p-1 rounded transition-all duration-150 ${
              task.notes 
                ? 'text-blue-400 bg-blue-500/20' 
                : 'text-gray-500 hover:text-white hover:bg-white/10'
            }`}
          >
            <MessageSquare className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Notes Section */}
      {showNotes && (
        <div className="border-t border-white/10 p-4 bg-black/20">
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Add your notes..."
            className="input-minimal w-full resize-none text-sm"
            rows={3}
            onClick={(e) => e.stopPropagation()}
          />
          <div className="flex justify-end mt-2">
            <button
              onClick={handleSaveNotes}
              className="btn-primary-minimal text-xs"
            >
              Save
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskCard;