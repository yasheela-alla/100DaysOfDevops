import React, { useState } from 'react';
import { Phase, Task, AppSettings } from '../types/types';
import { ChevronDown, ChevronUp, Calendar, Target } from 'lucide-react';
import TaskCard from './TaskCard';

interface PhaseSectionProps {
  phase: Phase;
  tasks: Task[];
  onToggleTask: (taskId: string) => void;
  onNotesUpdate: (taskId: string, notes: string) => void;
  settings: AppSettings;
}

const PhaseSection: React.FC<PhaseSectionProps> = ({ phase, tasks, onToggleTask, onNotesUpdate, settings }) => {
  const [isExpanded, setIsExpanded] = useState(phase.id === 1); // First phase expanded by default
  
  const phaseTasks = tasks.filter(task => {
    const phaseRanges = {
      1: [1, 44],
      2: [45, 75],
      3: [76, 90]
    };
    const [start, end] = phaseRanges[phase.id as keyof typeof phaseRanges];
    return task.day >= start && task.day <= end;
  });

  const completedTasks = phaseTasks.filter(task => task.completed).length;
  const progressPercentage = Math.round((completedTasks / phaseTasks.length) * 100);

  return (
    <div className="card overflow-hidden hover-lift">
      {/* Phase Header */}
      <div
        className={`p-8 cursor-pointer transition-all duration-200 ${
          settings.theme === 'dark' 
            ? 'hover:bg-gray-750' 
            : 'hover:bg-gray-50'
        }`}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-3">
              <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl">
                <Target className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-1">
                  Phase {phase.id}: {phase.title}
                </h2>
                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">
                    {phase.dayRange}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {phaseTasks.length} tasks
                  </span>
                </div>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-6 text-balance leading-relaxed">
              {phase.description}
            </p>
            
            {/* Progress Bar */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Progress</span>
                <div className="text-right">
                  <span className="text-lg font-bold text-gray-800 dark:text-white">
                    {completedTasks}/{phaseTasks.length}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">
                    ({progressPercentage}%)
                  </span>
                </div>
              </div>
              <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all duration-700 ease-out relative"
                  style={{ width: `${progressPercentage}%` }}
                >
                  <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="ml-6">
            <div className={`p-2 rounded-lg transition-colors duration-200 ${
              settings.theme === 'dark' 
                ? 'bg-gray-800 text-gray-400' 
                : 'bg-gray-100 text-gray-600'
            }`}>
              {isExpanded ? (
                <ChevronUp className="h-5 w-5" />
              ) : (
                <ChevronDown className="h-5 w-5" />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Phase Content */}
      {isExpanded && (
        <div className="px-8 pb-8">
          {phase.weeks.map(week => {
            const weekTasks = phaseTasks.filter(task => 
              week.days.includes(task.day)
            ).sort((a, b) => a.day - b.day);

            return (
              <div key={week.weekNumber} className="mb-10 last:mb-0">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg">
                    <Calendar className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                      Week {week.weekNumber}: {week.title}
                    </h3>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      Days {Math.min(...week.days)}-{Math.max(...week.days)}
                    </span>
                  </div>
                </div>
                
                <div className="grid gap-4">
                  {weekTasks.map(task => (
                    <TaskCard
                      key={task.id}
                      task={task}
                      onToggle={onToggleTask}
                      onNotesUpdate={onNotesUpdate}
                      settings={settings}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default PhaseSection;