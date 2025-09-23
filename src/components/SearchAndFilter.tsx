import React, { useState } from 'react';
import { Search, Filter, X, Video, Code } from 'lucide-react';

interface SearchAndFilterProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  filterType: 'all' | 'video' | 'practice';
  onFilterChange: (type: 'all' | 'video' | 'practice') => void;
  showCompleted: boolean;
  onShowCompletedChange: (show: boolean) => void;
}

const SearchAndFilter: React.FC<SearchAndFilterProps> = ({
  searchTerm,
  onSearchChange,
  filterType,
  onFilterChange,
  showCompleted,
  onShowCompletedChange
}) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <div className="card p-6">
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
        {/* Search */}
        <div className="flex-1 relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 dark:text-gray-500" />
          <input
            type="text"
            placeholder="Search tasks..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className={`w-full pl-12 pr-4 py-3 rounded-xl text-sm transition-all duration-200 focus-ring ${
              settings.theme === 'dark'
                ? 'bg-gray-700 border border-gray-600 text-white placeholder-gray-400'
                : 'bg-gray-50 border border-gray-200 text-gray-800 placeholder-gray-500'
            }`}
          />
          {searchTerm && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-white transition-colors duration-200"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        {/* Filter Toggle */}
        <button
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className={`flex items-center gap-2 px-4 py-3 rounded-xl font-medium transition-all duration-200 hover-lift ${
            settings.theme === 'dark'
              ? 'bg-gray-700 hover:bg-gray-600 text-white'
              : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
          }`}
        >
          <Filter className="h-4 w-4" />
          <span>Filters</span>
        </button>
      </div>

      {/* Filter Options */}
      {isFilterOpen && (
        <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-700">
          <div className="flex flex-wrap gap-3">
            {/* Task Type Filter */}
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-gray-600 dark:text-gray-300">Type:</span>
              <div className="flex gap-1">
                <button
                  onClick={() => onFilterChange('all')}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover-lift ${
                    filterType === 'all'
                      ? 'bg-blue-600 text-white shadow-lg'
                      : settings.theme === 'dark'
                        ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  All
                </button>
                <button
                  onClick={() => onFilterChange('video')}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover-lift ${
                    filterType === 'video'
                      ? 'bg-red-600 text-white shadow-lg'
                      : settings.theme === 'dark'
                        ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <Video className="h-3 w-3" />
                  Video
                </button>
                <button
                  onClick={() => onFilterChange('practice')}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover-lift ${
                    filterType === 'practice'
                      ? 'bg-teal-600 text-white shadow-lg'
                      : settings.theme === 'dark'
                        ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <Code className="h-3 w-3" />
                  Practice
                </button>
              </div>
            </div>

            {/* Completion Filter */}
            <div className="flex items-center gap-2">
              <label className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300 cursor-pointer font-medium">
                <input
                  type="checkbox"
                  checked={showCompleted}
                  onChange={(e) => onShowCompletedChange(e.target.checked)}
                  className={`rounded border-2 text-blue-600 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 ${
                    settings.theme === 'dark'
                      ? 'border-gray-600 bg-gray-700 focus:ring-offset-gray-800'
                      : 'border-gray-300 bg-white focus:ring-offset-white'
                  }`}
                />
                Show completed
              </label>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchAndFilter;