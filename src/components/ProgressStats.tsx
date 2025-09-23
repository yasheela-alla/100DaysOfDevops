import React from 'react';
import { Progress } from '../types/types';
import { CheckCircle, Video, Code, Trophy } from 'lucide-react';

interface ProgressStatsProps {
  progress: Progress;
}

const ProgressStats: React.FC<ProgressStatsProps> = ({ progress }) => {
  return (
    <div className="card p-8">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl">
          <Trophy className="h-6 w-6 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Progress Overview</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">Track your DevOps learning journey</p>
        </div>
      </div>
      
      {/* Overall Progress */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-3">
          <span className="text-base font-medium text-gray-600 dark:text-gray-300">Overall Progress</span>
          <div className="text-right">
            <span className="text-sm font-semibold text-gray-800 dark:text-white">
              {progress.completedDays}/{progress.totalDays} days
            </span>
            <div className="text-xs text-gray-500 dark:text-gray-400">
              {90 - progress.completedDays} days remaining
            </div>
          </div>
        </div>
        <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-4 overflow-hidden">
          <div
            className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 h-4 rounded-full transition-all duration-700 ease-out relative"
            style={{ width: `${progress.percentage}%` }}
          >
            <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
          </div>
        </div>
        <div className="text-right mt-3">
          <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {progress.percentage}%
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400 ml-1">complete</span>
        </div>
      </div>

      {/* Task Breakdown */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Video Tasks */}
        <div className="bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 rounded-xl p-6 border border-red-100 dark:border-red-800/30 hover-lift">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-red-500 rounded-lg">
              <Video className="h-4 w-4 text-white" />
            </div>
            <div>
              <span className="text-sm font-semibold text-red-600 dark:text-red-400">Video Learning</span>
              <div className="text-xs text-gray-500 dark:text-gray-400">Theory & Concepts</div>
            </div>
          </div>
          <div className="flex items-center justify-between mb-3">
            <span className="text-2xl font-bold text-gray-800 dark:text-white">
              {progress.videoTasks.completed}/{progress.videoTasks.total}
            </span>
            <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
              {Math.round((progress.videoTasks.completed / progress.videoTasks.total) * 100)}%
            </span>
          </div>
          <div className="w-full bg-red-100 dark:bg-red-900/30 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-red-500 to-pink-500 h-2 rounded-full transition-all duration-500"
              style={{ width: `${(progress.videoTasks.completed / progress.videoTasks.total) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Practice Tasks */}
        <div className="bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20 rounded-xl p-6 border border-teal-100 dark:border-teal-800/30 hover-lift">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-teal-500 rounded-lg">
              <Code className="h-4 w-4 text-white" />
            </div>
            <div>
              <span className="text-sm font-semibold text-teal-600 dark:text-teal-400">Hands-on Practice</span>
              <div className="text-xs text-gray-500 dark:text-gray-400">Real-world Projects</div>
            </div>
          </div>
          <div className="flex items-center justify-between mb-3">
            <span className="text-2xl font-bold text-gray-800 dark:text-white">
              {progress.practiceTasks.completed}/{progress.practiceTasks.total}
            </span>
            <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
              {Math.round((progress.practiceTasks.completed / progress.practiceTasks.total) * 100)}%
            </span>
          </div>
          <div className="w-full bg-teal-100 dark:bg-teal-900/30 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-teal-500 to-cyan-500 h-2 rounded-full transition-all duration-500"
              style={{ width: `${(progress.practiceTasks.completed / progress.practiceTasks.total) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressStats;