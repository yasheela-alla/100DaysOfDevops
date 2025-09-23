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
    <div className={`group relative bg-gray-800 rounded-lg border transition-all duration-200 ${
      isVideo 
        ? 'border-red-500/30 hover:border-red-500/50' 
        : 'border-teal-500/30 hover:border-teal-500/50'
    } ${task.completed ? 'opacity-75' : ''}`}>
      <div 
        className="p-4 cursor-pointer hover:bg-gray-750 transition-colors duration-200"
        onClick={() => onToggle(task.id)}
      >
        <div className="flex items-start gap-3">
          {/* Checkbox */}
          <div className={`flex-shrink-0 mt-0.5 transition-colors duration-200 ${task.completed ? 'text-green-400' : 'text-gray-400'}`}>
            <CheckCircle2 
              className={`h-5 w-5 transition-all duration-200 ${task.completed ? 'fill-current' : 'hover:text-green-400'}`} 
            />
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              {isVideo ? (
                <Video className="h-4 w-4 text-red-400 flex-shrink-0" />
              ) : (
                <Code className="h-4 w-4 text-teal-400 flex-shrink-0" />
              )}
              <span className={`text-xs font-medium ${isVideo ? 'text-red-400' : 'text-teal-400'}`}>
                Day {task.day} • {isVideo ? 'Video' : 'Practice'}
              </span>
            </div>
            
            <h3 className={`font-medium text-white mb-1 leading-tight ${task.completed ? 'line-through' : ''}`}>
              {task.title}
            </h3>
            
            <p className="text-sm text-gray-400 leading-relaxed">
              {task.description}
            </p>
          </div>

          {/* Notes Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowNotes(!showNotes);
            }}
            className={`flex-shrink-0 p-1 rounded transition-colors duration-200 ${
              task.notes ? 'text-blue-400 hover:text-blue-300' : 'text-gray-500 hover:text-gray-400'
            }`}
          >
            <StickyNote className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Notes Section */}
      {showNotes && (
        <div className="border-t border-gray-700 p-4">
          <div className="flex items-center gap-2 mb-2">
            <StickyNote className="h-4 w-4 text-blue-400" />
            <span className="text-sm font-medium text-blue-400">Notes</span>
          </div>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Add your notes for this task..."
            className="w-full p-2 bg-gray-700 border border-gray-600 rounded text-white placeholder-gray-400 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            rows={3}
            onClick={(e) => e.stopPropagation()}
          />
          <div className="flex justify-end mt-2">
            <button
              onClick={handleSaveNotes}
              disabled={isSaving}
              className="flex items-center gap-1 px-3 py-1 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 text-white text-sm rounded transition-colors duration-200"
            >
              <Save className="h-3 w-3" />
              {isSaving ? 'Saving...' : 'Save'}
            </button>
          </div>
        </div>
      )}

      {/* Completion indicator */}
      {task.completed && (
        <div className="absolute top-2 right-2">
          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
        </div>
      )}
    </div>
  );
};

export default TaskCard