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
    <header className={`sticky top-0 z-50 glass-effect border-b ${
      settings.theme === 'dark' 
        ? 'bg-gray-900/80 border-gray-700' 
        : 'bg-white/80 border-gray-100'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl">
              <Code2 className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className={`text-xl font-bold ${
                settings.theme === 'dark' ? 'text-white' : 'text-gray-800'
              }`}>
                DevOps Learning Tracker
              </h1>
              <p className={`text-xs ${
                settings.theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
              }`}>
                90-Day Mastery Journey
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <button
              onClick={onExport}
              className={`flex items-center gap-2 px-3 py-2 text-sm rounded-lg transition-all duration-200 hover-lift ${
                settings.theme === 'dark'
                  ? 'text-blue-400 hover:text-blue-300 hover:bg-gray-800'
                  : 'text-blue-600 hover:text-blue-700 hover:bg-blue-50'
              }`}
            >
              <Download className="h-4 w-4" />
              <span className="hidden sm:inline">Export</span>
            </button>
            
            <ThemeToggle settings={settings} onSettingsUpdate={onSettingsUpdate} />
            
            <button
              onClick={onReset}
              className={`flex items-center gap-2 px-3 py-2 text-sm rounded-lg transition-all duration-200 hover-lift ${
                settings.theme === 'dark'
                  ? 'text-red-400 hover:text-red-300 hover:bg-gray-800'
                  : 'text-red-600 hover:text-red-700 hover:bg-red-50'
              }`}
            >
              <RotateCcw className="h-4 w-4" />
              <span className="hidden sm:inline">Reset Progress</span>
            </button>
            
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 px-3 py-2 text-sm rounded-lg transition-all duration-200 hover-lift ${
                settings.theme === 'dark'
                  ? 'text-gray-400 hover:text-white hover:bg-gray-800'
                  : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
              }`}
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

export default Header;