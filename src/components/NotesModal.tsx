import React, { useState, useEffect } from 'react';
import { X, Save, Trash2, FileText } from 'lucide-react';

interface NotesModalProps {
  isOpen: boolean;
  onClose: () => void;
  notes: string;
  onSave: (notes: string) => void;
  taskTitle: string;
}

const NotesModal: React.FC<NotesModalProps> = ({ 
  isOpen, 
  onClose, 
  notes, 
  onSave, 
  taskTitle 
}) => {
  const [localNotes, setLocalNotes] = useState(notes);

  useEffect(() => {
    setLocalNotes(notes);
  }, [notes]);

  if (!isOpen) return null;

  const handleSave = () => {
    onSave(localNotes);
    onClose();
  };

  const handleClear = () => {
    setLocalNotes('');
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="card-minimal w-full max-w-2xl max-h-[80vh] flex flex-col">
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <FileText className="h-5 w-5 text-blue-400" />
            <div>
              <h2 className="text-primary font-semibold">Task Notes</h2>
              <p className="text-secondary text-sm">{taskTitle}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 p-6 overflow-hidden">
          <textarea
            value={localNotes}
            onChange={(e) => setLocalNotes(e.target.value)}
            placeholder="Add your notes, thoughts, or key learnings here..."
            className="input-minimal w-full h-64 resize-none text-sm"
            autoFocus
          />
        </div>

        <div className="flex items-center justify-between p-6 border-t border-white/10">
          <button
            onClick={handleClear}
            className="btn-ghost-minimal flex items-center gap-2 text-red-400 hover:text-red-300"
          >
            <Trash2 className="h-4 w-4" />
            Clear
          </button>
          <div className="flex gap-3">
            <button
              onClick={onClose}
              className="btn-secondary-minimal"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="btn-primary-minimal flex items-center gap-2"
            >
              <Save className="h-4 w-4" />
              Save Notes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotesModal;