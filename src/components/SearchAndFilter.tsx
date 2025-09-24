import React from 'react';
import { Search, Video, Code } from 'lucide-react';
import { AppSettings } from '../types/types';

interface SearchAndFilterProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  filterType: 'all' | 'video' | 'practice';
  onFilterChange: (type: 'all' | 'video' | 'practice') => void;
  showCompleted: boolean;
  onShowCompletedChange: (show: boolean) => void;
  settings: AppSettings;
}

const SearchAndFilter: React.FC<SearchAndFilterProps> = ({
  searchTerm,
  onSearchChange,
  filterType,
  onFilterChange,
  showCompleted,
  onShowCompletedChange,
}) => {
  return (
    <div className="card-minimal p-4">
      <div className="flex flex-col sm:flex-row gap-3">
        {/* Search */}
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
          <input
            type="text"
            placeholder="Search tasks..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="input-minimal pl-10 w-full"
          />
        </div>

        {/* Filters */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => onFilterChange('all')}
            className={`btn-minimal ${
              filterType === 'all' ? 'bg-white text-black' : 'text-gray-400 hover:text-white'
            }`}
          >
            All
          </button>
          <button
            onClick={() => onFilterChange('video')}
            className={`btn-minimal flex items-center gap-1 ${
              filterType === 'video' ? 'bg-red-500 text-white' : 'text-gray-400 hover:text-white'
            }`}
          >
            <Video className="h-3 w-3" />
            Video
          </button>
          <button
            onClick={() => onFilterChange('practice')}
            className={`btn-minimal flex items-center gap-1 ${
              filterType === 'practice' ? 'bg-blue-500 text-white' : 'text-gray-400 hover:text-white'
            }`}
          >
            <Code className="h-3 w-3" />
            Practice
          </button>
        </div>

        {/* Show completed toggle */}
        <label className="flex items-center gap-2 text-sm text-secondary cursor-pointer">
          <input
            type="checkbox"
            checked={showCompleted}
            onChange={(e) => onShowCompletedChange(e.target.checked)}
            className="checkbox-minimal"
          />
          Show completed
        </label>
      </div>
    </div>
  );
};

export default SearchAndFilter;