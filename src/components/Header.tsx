import React from 'react';
import { RotateCcw, Download, Sun, Moon, StickyNote } from 'lucide-react';
import { AppSettings } from '../types/types';

interface HeaderProps {
  settings: AppSettings;
  onSettingsUpdate: (settings: Partial<AppSettings>) => void;
  onReset: () => void;
  onExport: () => void;
  onNotesOpen: () => void;
}

const Header: React.FC<HeaderProps> = ({ settings, onSettingsUpdate, onReset, onExport, onNotesOpen }) => {
  const toggleTheme = () => {
    onSettingsUpdate({ theme: settings.theme === 'dark' ? 'light' : 'dark' });
  };

  return (
    <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center">
              <span className="text-black font-bold text-sm">D</span>
            </div>
            <div>
              <h1 className="text-white font-semibold text-lg">DevOps Tracker</h1>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <button
              onClick={onNotesOpen}
              className="btn-ghost-minimal"
              title="View all notes"
            >
              <StickyNote className="h-4 w-4" />
            </button>
            
            <button
              onClick={onExport}
              className="btn-ghost-minimal"
              title="Export progress"
            >
              <Download className="h-4 w-4" />
            </button>
            
            <button
              onClick={toggleTheme}
              className="btn-ghost-minimal"
              title="Toggle theme"
            >
              {settings.theme === 'dark' ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </button>
            
            <button
              onClick={onReset}
              className="btn-ghost-minimal text-red-400 hover:text-red-300"
              title="Reset progress"
            >
              <RotateCcw className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;