import React, { useState } from 'react';
import { X, Search, FileText, Calendar, Video, Code } from 'lucide-react';
import { Task } from '../types/types';

interface GlobalNotesModalProps {
  isOpen: boolean;
  onClose: () => void;
  tasks: Task[];
  onTaskNotesUpdate: (taskId: string, notes: string) => void;
}

const GlobalNotesModal: React.FC<GlobalNotesModalProps> = ({ 
  isOpen, 
  onClose, 
  tasks, 
  onTaskNotesUpdate 
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [editingNotes, setEditingNotes] = useState('');

  if (!isOpen) return null;

  const tasksWithNotes = tasks.filter(task => task.notes && task.notes.trim() !== '');
  const filteredTasks = tasksWithNotes.filter(task => 
    task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    task.notes?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleTaskSelect = (task: Task) => {
    setSelectedTask(task);
    setEditingNotes(task.notes || '');
  };

  const handleSaveNotes = () => {
    if (selectedTask) {
      onTaskNotesUpdate(selectedTask.id, editingNotes);
      setSelectedTask(null);
      setEditingNotes('');
    }
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="card-minimal w-full max-w-6xl max-h-[90vh] flex">
        {/* Sidebar */}
        <div className="w-1/3 border-r border-white/10 flex flex-col">
          <div className="p-6 border-b border-white/10">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-primary font-semibold">All Notes</h2>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
              <input
                type="text"
                placeholder="Search notes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="input-minimal pl-10 w-full"
              />
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-2">
            {filteredTasks.length === 0 ? (
              <div className="text-center py-8">
                <FileText className="h-12 w-12 text-gray-500 mx-auto mb-3" />
                <p className="text-secondary text-sm">
                  {tasksWithNotes.length === 0 ? 'No notes yet' : 'No matching notes'}
                </p>
              </div>
            ) : (
              filteredTasks.map(task => (
                <div
                  key={task.id}
                  onClick={() => handleTaskSelect(task)}
                  className={`p-3 rounded-lg cursor-pointer transition-all duration-150 ${
                    selectedTask?.id === task.id 
                      ? 'bg-white/10 border border-white/20' 
                      : 'hover:bg-white/5'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    {task.type === 'video' ? (
                      <Video className="h-3 w-3 text-red-400" />
                    ) : (
                      <Code className="h-3 w-3 text-blue-400" />
                    )}
                    <span className="text-xs text-gray-400">Day {task.day}</span>
                  </div>
                  <h4 className="text-sm font-medium text-primary mb-1 line-clamp-2">
                    {task.title}
                  </h4>
                  <p className="text-xs text-secondary line-clamp-2">
                    {task.notes}
                  </p>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {selectedTask ? (
            <>
              <div className="p-6 border-b border-white/10">
                <div className="flex items-center gap-2 mb-2">
                  {selectedTask.type === 'video' ? (
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
                  <div className="badge-day">Day {selectedTask.day}</div>
                </div>
                <h3 className="text-primary font-semibold">{selectedTask.title}</h3>
                <p className="text-secondary text-sm mt-1">{selectedTask.description}</p>
              </div>

              <div className="flex-1 p-6">
                <textarea
                  value={editingNotes}
                  onChange={(e) => setEditingNotes(e.target.value)}
                  placeholder="Edit your notes..."
                  className="input-minimal w-full h-full resize-none"
                />
              </div>

              <div className="p-6 border-t border-white/10 flex justify-end gap-3">
                <button
                  onClick={() => setSelectedTask(null)}
                  className="btn-secondary-minimal"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSaveNotes}
                  className="btn-primary-minimal"
                >
                  Save Changes
                </button>
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <FileText className="h-16 w-16 text-gray-500 mx-auto mb-4" />
                <h3 className="text-primary font-medium mb-2">Select a note to edit</h3>
                <p className="text-secondary text-sm">
                  Choose a task from the sidebar to view and edit its notes
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GlobalNotesModal;