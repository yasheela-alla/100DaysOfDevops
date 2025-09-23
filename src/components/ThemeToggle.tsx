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
      className="flex items-center gap-2 px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors duration-200"
      title={`Switch to ${settings.theme === 'dark' ? 'light' : 'dark'} theme`}
    >
      {settings.theme === 'dark' ? (
        <>
          <Sun className="h-4 w-4" />
          <span className="hidden sm:inline">Light</span>
        </>
      ) : (
        <>
          <Moon className="h-4 w-4" />
          <span className="hidden sm:inline">Dark</span>
        </>
      )}
    </button>
  );
};

export default ThemeToggle;