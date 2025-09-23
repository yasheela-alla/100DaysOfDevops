import React from 'react';
import { Code2, RotateCcw, Github, Download, Settings } from 'lucide-react';
import { AppSettings } from '../types/types';
import ThemeToggle from './ThemeToggle';

interface HeaderProps {
  settings: AppSettings;
  onSettingsUpdate: (settings: Partial<AppSettings>) => void;
  onReset: () => void;
  onExport: () => void;
}

const Header: React.FC<HeaderProps> = ({ settings, onSettingsUpdate, onReset, onExport }) => {
  return (
    <header className="bg-gray-900 border-b border-gray-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <Code2 className="h-8 w-8 text-blue-400" />
            <div>
              <h1 className="text-xl font-bold text-white">DevOps Learning Tracker</h1>
              <p className="text-xs text-gray-400">100-Day Mastery Plan</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <button
              onClick={onExport}
              className="flex items-center gap-2 px-3 py-2 text-sm text-blue-400 hover:text-blue-300 hover:bg-gray-800 rounded-lg transition-colors duration-200"
            >
              <Download className="h-4 w-4" />
              <span className="hidden sm:inline">Export</span>
            </button>
            
            <ThemeToggle settings={settings} onSettingsUpdate={onSettingsUpdate} />
            
            <button
              onClick={onReset}
              className="flex items-center gap-2 px-3 py-2 text-sm text-red-400 hover:text-red-300 hover:bg-gray-800 rounded-lg transition-colors duration-200"
            >
              <RotateCcw className="h-4 w-4" />
              <span className="hidden sm:inline">Reset Progress</span>
            </button>
            
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors duration-200"
            >
              <Github className="h-4 w-4" />
              <span className="hidden sm:inline">GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header