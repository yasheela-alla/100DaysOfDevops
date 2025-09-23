import React, { useState } from 'react';
import { Phase, Task } from '../types/types';
import { ChevronDown, ChevronUp, Calendar, Target } from 'lucide-react';
import TaskCard from './TaskCard';

interface PhaseSectionProps {
  phase: Phase;
  tasks: Task[];
  onToggleTask: (taskId: string) => void;
  onNotesUpdate: (taskId: string, notes: string) => void;
}

const PhaseSection: React.FC<PhaseSectionProps> = ({ phase, tasks, onToggleTask, onNotesUpdate }) => {
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
    <div className="bg-gray-900 rounded-xl border border-gray-700 overflow-hidden">
      {/* Phase Header */}
      <div
        className="p-6 cursor-pointer hover:bg-gray-800 transition-colors duration-200"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <Target className="h-6 w-6 text-blue-400" />
              <h2 className="text-xl font-semibold text-white">
                Phase {phase.id}: {phase.title}
              </h2>
              <span className="text-sm text-gray-400 bg-gray-800 px-2 py-1 rounded">
                {phase.dayRange}
              </span>
            </div>
            <p className="text-gray-300 mb-3">{phase.description}</p>
            
            {/* Progress Bar */}
            <div className="flex items-center gap-4">
              <div className="flex-1">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-400">Progress</span>
                  <span className="text-white font-medium">{completedTasks}/{phaseTasks.length}</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                </div>
              </div>
              <span className="text-lg font-bold text-white">{progressPercentage}%</span>
            </div>
          </div>
          
          <div className="ml-4">
            {isExpanded ? (
              <ChevronUp className="h-6 w-6 text-gray-400" />
            ) : (
              <ChevronDown className="h-6 w-6 text-gray-400" />
            )}
          </div>
        </div>
      </div>

      {/* Phase Content */}
      {isExpanded && (
        <div className="px-6 pb-6">
          {phase.weeks.map(week => {
            const weekTasks = phaseTasks.filter(task => 
              week.days.includes(task.day)
            ).sort((a, b) => a.day - b.day);

            return (
              <div key={week.weekNumber} className="mb-8 last:mb-0">
                <div className="flex items-center gap-2 mb-4">
                  <Calendar className="h-4 w-4 text-purple-400" />
                  <h3 className="text-lg font-medium text-white">
                    Week {week.weekNumber}: {week.title}
                  </h3>
                  <span className="text-sm text-gray-400 bg-gray-800 px-2 py-1 rounded">
                    Days {Math.min(...week.days)}-{Math.max(...week.days)}
                  </span>
                </div>
                
                <div className="grid gap-3">
                  {weekTasks.map(task => (
                    <TaskCard
                      key={task.id}
                      task={task}
                      onToggle={onToggleTask}
                      onNotesUpdate={onNotesUpdate}
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

export default PhaseSection