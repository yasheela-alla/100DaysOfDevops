import React from 'react';
import { Progress } from '../types/types';
import { CheckCircle, Video, Code, Trophy } from 'lucide-react';

interface ProgressStatsProps {
  progress: Progress;
}

const ProgressStats: React.FC<ProgressStatsProps> = ({ progress }) => {
  return (
    <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
      <div className="flex items-center gap-3 mb-6">
        <Trophy className="h-6 w-6 text-yellow-500" />
        <h2 className="text-xl font-semibold text-white">Progress Overview</h2>
      </div>
      
      {/* Overall Progress */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-300">Overall Progress</span>
          <span className="text-sm font-medium text-white">{progress.completedDays}/{progress.totalDays} days</span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-3">
          <div
            className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progress.percentage}%` }}
          ></div>
        </div>
        <div className="text-right mt-1">
          <span className="text-2xl font-bold text-white">{progress.percentage}%</span>
        </div>
      </div>

      {/* Task Breakdown */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Video Tasks */}
        <div className="bg-gray-900 rounded-lg p-4 border border-red-500/20">
          <div className="flex items-center gap-2 mb-2">
            <Video className="h-4 w-4 text-red-400" />
            <span className="text-sm font-medium text-red-400">Video Content</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-green-400" />
            <span className="text-white font-semibold">
              {progress.videoTasks.completed}/{progress.videoTasks.total}
            </span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
            <div
              className="bg-red-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(progress.videoTasks.completed / progress.videoTasks.total) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Practice Tasks */}
        <div className="bg-gray-900 rounded-lg p-4 border border-teal-500/20">
          <div className="flex items-center gap-2 mb-2">
            <Code className="h-4 w-4 text-teal-400" />
            <span className="text-sm font-medium text-teal-400">Hands-on Practice</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-green-400" />
            <span className="text-white font-semibold">
              {progress.practiceTasks.completed}/{progress.practiceTasks.total}
            </span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
            <div
              className="bg-teal-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(progress.practiceTasks.completed / progress.practiceTasks.total) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressStats