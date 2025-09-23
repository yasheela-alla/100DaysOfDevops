import React, { useState } from 'react';
import { Task } from '../types/types';
import { Video, Code, CheckCircle2, StickyNote, Save } from 'lucide-react';

interface TaskCardProps {
  task: Task;
  onToggle: (taskId: string) => void;
  onNotesUpdate: (taskId: string, notes: string) => void;
}

const TaskCard: React.FC<TaskCardProps> = ({ task, onToggle, onNotesUpdate }) => {
  const isVideo = task.type === 'video';
  const [showNotes, setShowNotes] = useState(false);
  const [notes, setNotes] = useState(task.notes || '');
  const [isSaving, setIsSaving] = useState(false);

  const handleSaveNotes = async () => {
    setIsSaving(true);
    onNotesUpdate(task.id, notes);
    setTimeout(() => setIsSaving(false), 500);
  };
  
  return (
    <div className={`group relative card transition-all duration-200 hover-lift ${
      isVideo 
        ? 'border-l-4 border-l-red-500 hover:border-l-red-600' 
        : 'border-l-4 border-l-teal-500 hover:border-l-teal-600'
    } ${task.completed ? 'opacity-80' : ''}`}>
      <div 
        className={`p-6 cursor-pointer transition-all duration-200 ${
          task.completed 
            ? 'bg-gray-50 dark:bg-gray-800/50' 
            : 'hover:bg-gray-50 dark:hover:bg-gray-800/50'
        }`}
        onClick={() => onToggle(task.id)}
      >
        <div className="flex items-start gap-3">
          {/* Checkbox */}
          <div className={`flex-shrink-0 mt-1 transition-all duration-200 ${
            task.completed 
              ? 'text-green-500 scale-110' 
              : 'text-gray-400 dark:text-gray-500 hover:text-green-500'
          }`}>
            <CheckCircle2 
              className={`h-6 w-6 transition-all duration-200 ${
                task.completed ? 'fill-current animate-pulse-glow' : 'hover:scale-110'
              }`} 
            />
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 mb-2">
              {isVideo ? (
                <div className="flex items-center gap-2 px-3 py-1 bg-red-100 dark:bg-red-900/30 rounded-full">
                  <Video className="h-3 w-3 text-red-600 dark:text-red-400" />
                  <span className="text-xs font-medium text-red-600 dark:text-red-400">Video</span>
                </div>
              ) : (
                <div className="flex items-center gap-2 px-3 py-1 bg-teal-100 dark:bg-teal-900/30 rounded-full">
                  <Code className="h-3 w-3 text-teal-600 dark:text-teal-400" />
                  <span className="text-xs font-medium text-teal-600 dark:text-teal-400">Practice</span>
                </div>
              )}
              <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                Day {task.day}
              </span>
            </div>
            
            <h3 className={`font-semibold text-gray-800 dark:text-white mb-2 leading-tight ${
              task.completed ? 'line-through opacity-75' : ''
            }`}>
              {task.title}
            </h3>
            
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              {task.description}
            </p>
          </div>

          {/* Notes Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowNotes(!showNotes);
            }}
            className={`flex-shrink-0 p-2 rounded-lg transition-all duration-200 hover-lift ${
              task.notes 
                ? 'text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30' 
                : 'text-gray-400 dark:text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20'
            }`}
          >
            <StickyNote className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Notes Section */}
      {showNotes && (
        <div className="border-t border-gray-100 dark:border-gray-700 p-6 bg-gray-50 dark:bg-gray-800/30">
          <div className="flex items-center gap-2 mb-3">
            <StickyNote className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">Personal Notes</span>
          </div>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Add your notes for this task..."
            className={`w-full p-3 rounded-lg text-sm resize-none transition-all duration-200 focus-ring ${
              settings.theme === 'dark'
                ? 'bg-gray-700 border border-gray-600 text-white placeholder-gray-400'
                : 'bg-white border border-gray-200 text-gray-800 placeholder-gray-500'
            }`}
            rows={3}
            onClick={(e) => e.stopPropagation()}
          />
          <div className="flex justify-end mt-3">
            <button
              onClick={handleSaveNotes}
              disabled={isSaving}
              className="btn-primary text-sm disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Save className="h-3 w-3" />
              {isSaving ? 'Saving...' : 'Save'}
            </button>
          </div>
        </div>
      )}

      {/* Completion indicator */}
      {task.completed && (
        <div className="absolute top-4 right-4">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
        </div>
      )}
    </div>
  );
};

export default TaskCard;