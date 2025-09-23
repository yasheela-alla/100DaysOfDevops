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
    <div className="bg-gray-800 rounded-xl p-4 border border-gray-700 mb-6">
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Search */}
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search tasks..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          {searchTerm && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        {/* Filter Toggle */}
        <button
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-white transition-colors duration-200"
        >
          <Filter className="h-4 w-4" />
          <span>Filters</span>
        </button>
      </div>

      {/* Filter Options */}
      {isFilterOpen && (
        <div className="mt-4 pt-4 border-t border-gray-700">
          <div className="flex flex-wrap gap-3">
            {/* Task Type Filter */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-300">Type:</span>
              <div className="flex gap-1">
                <button
                  onClick={() => onFilterChange('all')}
                  className={`px-3 py-1 rounded-md text-sm transition-colors duration-200 ${
                    filterType === 'all'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  All
                </button>
                <button
                  onClick={() => onFilterChange('video')}
                  className={`flex items-center gap-1 px-3 py-1 rounded-md text-sm transition-colors duration-200 ${
                    filterType === 'video'
                      ? 'bg-red-600 text-white'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  <Video className="h-3 w-3" />
                  Video
                </button>
                <button
                  onClick={() => onFilterChange('practice')}
                  className={`flex items-center gap-1 px-3 py-1 rounded-md text-sm transition-colors duration-200 ${
                    filterType === 'practice'
                      ? 'bg-teal-600 text-white'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  <Code className="h-3 w-3" />
                  Practice
                </button>
              </div>
            </div>

            {/* Completion Filter */}
            <div className="flex items-center gap-2">
              <label className="flex items-center gap-2 text-sm text-gray-300 cursor-pointer">
                <input
                  type="checkbox"
                  checked={showCompleted}
                  onChange={(e) => onShowCompletedChange(e.target.checked)}
                  className="rounded border-gray-600 bg-gray-700 text-blue-600 focus:ring-blue-500 focus:ring-offset-0"
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