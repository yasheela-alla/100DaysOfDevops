import React from 'react';
import { Progress } from '../types/types';
import { Video, Code } from 'lucide-react';

interface ProgressStatsProps {
  progress: Progress;
}

const ProgressStats: React.FC<ProgressStatsProps> = ({ progress }) => {
  return (
    <div className="card-minimal p-6">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-secondary text-sm">Progress</span>
          <span className="text-primary font-medium">
            {progress.completedDays}/{progress.totalDays} days
          </span>
        </div>
        <div className="progress-minimal h-2">
          <div
            className="progress-fill-minimal h-2"
            style={{ width: `${progress.percentage}%` }}
          />
        </div>
        <div className="text-right mt-2">
          <span className="text-primary text-2xl font-bold">{progress.percentage}%</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="card-minimal p-4">
          <div className="flex items-center gap-2 mb-2">
            <Video className="h-4 w-4 text-red-400" />
            <span className="text-secondary text-sm">Video</span>
          </div>
          <div className="text-primary font-semibold">
            {progress.videoTasks.completed}/{progress.videoTasks.total}
          </div>
          <div className="progress-minimal h-1 mt-2">
            <div
              className="bg-red-500 h-1 rounded-full transition-all duration-500"
              style={{ width: `${(progress.videoTasks.completed / progress.videoTasks.total) * 100}%` }}
            />
          </div>
        </div>

        <div className="card-minimal p-4">
          <div className="flex items-center gap-2 mb-2">
            <Code className="h-4 w-4 text-blue-400" />
            <span className="text-secondary text-sm">Practice</span>
          </div>
          <div className="text-primary font-semibold">
            {progress.practiceTasks.completed}/{progress.practiceTasks.total}
          </div>
          <div className="progress-minimal h-1 mt-2">
            <div
              className="bg-blue-500 h-1 rounded-full transition-all duration-500"
              style={{ width: `${(progress.practiceTasks.completed / progress.practiceTasks.total) * 100}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressStats;