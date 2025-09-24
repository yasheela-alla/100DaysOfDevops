import React, { useState } from 'react';
import { Phase, Task, AppSettings } from '../types/types';
import { ChevronDown, ChevronRight } from 'lucide-react';
import TaskCard from './TaskCard';

interface PhaseSectionProps {
  phase: Phase;
  tasks: Task[];
  onToggleTask: (taskId: string) => void;
  onNotesUpdate: (taskId: string, notes: string) => void;
  settings: AppSettings;
}

const PhaseSection: React.FC<PhaseSectionProps> = ({ phase, tasks, onToggleTask, onNotesUpdate, settings }) => {
  const [isExpanded, setIsExpanded] = useState(phase.id === 1);
  
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
    <div className="card-minimal">
      {/* Phase Header */}
      <div
        className="p-6 cursor-pointer hover-minimal"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="text-white">
              {isExpanded ? (
                <ChevronDown className="h-5 w-5" />
              ) : (
                <ChevronRight className="h-5 w-5" />
              )}
            </div>
            <div>
              <h2 className="text-primary text-lg font-semibold">
                Phase {phase.id}: {phase.title}
              </h2>
              <p className="text-secondary text-sm mt-1">{phase.dayRange}</p>
            </div>
          </div>
          
          <div className="text-right">
            <div className="text-primary font-medium text-sm">
              {completedTasks}/{phaseTasks.length}
            </div>
            <div className="text-secondary text-xs">{progressPercentage}%</div>
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="progress-minimal h-1 mt-4">
          <div
            className="progress-fill-minimal h-1"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </div>

      {/* Phase Content */}
      {isExpanded && (
        <div className="border-t border-white/10">
          {phase.weeks.map(week => {
            const weekTasks = phaseTasks.filter(task => 
              week.days.includes(task.day)
            ).sort((a, b) => a.day - b.day);

            return (
              <div key={week.weekNumber} className="p-6 border-b border-white/5 last:border-b-0">
                <div className="mb-4">
                  <h3 className="text-primary font-medium text-sm">
                    Week {week.weekNumber}: {week.title}
                  </h3>
                  <p className="text-secondary text-xs mt-1">
                    Days {Math.min(...week.days)}-{Math.max(...week.days)}
                  </p>
                </div>
                
                <div className="space-y-2">
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