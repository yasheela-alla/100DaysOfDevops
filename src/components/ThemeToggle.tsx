import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { AppSettings } from '../types/types';

interface ThemeToggleProps {
  settings: AppSettings;
  onSettingsUpdate: (settings: Partial<AppSettings>) => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ settings, onSettingsUpdate }) => {
  const toggleTheme = () => {
    onSettingsUpdate({ theme: settings.theme === 'dark' ? 'light' : 'dark' });
  };

  return (
    <button
      onClick={toggleTheme}
      className={`flex items-center gap-2 px-3 py-2 text-sm rounded-lg transition-all duration-200 hover-lift ${
        settings.theme === 'dark'
          ? 'text-gray-400 hover:text-white hover:bg-gray-800'
          : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
      }`}
      title={`Switch to ${settings.theme === 'dark' ? 'light' : 'dark'} theme`}
    >
      {settings.theme === 'dark' ? (
        <>
          <Sun className="h-4 w-4 text-yellow-500" />
          <span className="hidden sm:inline">Light</span>
        </>
      ) : (
        <>
          <Moon className="h-4 w-4 text-blue-600" />
          <span className="hidden sm:inline">Dark</span>
        </>
      )}
    </button>
  );
};

export default ThemeToggle;