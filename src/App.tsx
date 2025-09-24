import React, { useState, useMemo } from 'react';
import { useProgress } from './hooks/useProgress';
import { phases } from './data/learningPlan';
import Header from './components/Header';
import ProgressStats from './components/ProgressStats';
import PhaseSection from './components/PhaseSection';
import SearchAndFilter from './components/SearchAndFilter';
import MilestoneBadges from './components/MilestoneBadges';
import ExportModal from './components/ExportModal';
import DailyReminder from './components/DailyReminder';

function App() {
  const { 
    tasks, 
    milestones, 
    settings, 
    toggleTask, 
    updateTaskNotes, 
    updateSettings, 
    progress, 
    resetProgress 
  } = useProgress();
  
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState<'all' | 'video' | 'practice'>('all');
  const [showCompleted, setShowCompleted] = useState(true);
  const [showExportModal, setShowExportModal] = useState(false);

  // Filter tasks based on search and filters
  const filteredTasks = useMemo(() => {
    return tasks.filter(task => {
      const matchesSearch = task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           task.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesType = filterType === 'all' || task.type === filterType;
      const matchesCompletion = showCompleted || !task.completed;
      
      return matchesSearch && matchesType && matchesCompletion;
    });
  }, [tasks, searchTerm, filterType, showCompleted]);

  // Check if user completed any task today
  const completedToday = useMemo(() => {
    const today = new Date().toDateString();
    return tasks.some(task => {
      const taskDate = localStorage.getItem(`task-${task.id}-completed-date`);
      return task.completed && taskDate === today;
    });
  }, [tasks]);

  const handleReset = () => {
    if (window.confirm('Reset all progress? This cannot be undone.')) {
      resetProgress();
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Header 
        settings={settings}
        onSettingsUpdate={updateSettings}
        onReset={handleReset}
        onExport={() => setShowExportModal(true)}
      />
      
      <main className="max-w-4xl mx-auto px-6 py-8 space-y-6">
        {/* Progress Stats */}
        <div className="animate-fade-in">
          <ProgressStats progress={progress} />
        </div>

        {/* Milestone Badges */}
        <div className="animate-fade-in">
          <MilestoneBadges milestones={milestones} />
        </div>

        {/* Search and Filter */}
        <div className="animate-fade-in">
          <SearchAndFilter
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            filterType={filterType}
            onFilterChange={setFilterType}
            showCompleted={showCompleted}
            onShowCompletedChange={setShowCompleted}
            settings={settings}
          />
        </div>

        {/* Learning Plan */}
        <div className="space-y-6">
          {phases.map(phase => {
            const phaseTasks = filteredTasks.filter(task => {
              const phaseRanges = {
                1: [1, 44],
                2: [45, 75],
                3: [76, 90]
              };
              const [start, end] = phaseRanges[phase.id as keyof typeof phaseRanges];
              return task.day >= start && task.day <= end;
            });

            if (phaseTasks.length === 0) return null;

            return (
              <div key={phase.id} className="animate-fade-in">
                <PhaseSection
                  phase={phase}
                  tasks={phaseTasks}
                  onToggleTask={toggleTask}
                  onNotesUpdate={updateTaskNotes}
                  settings={settings}
                />
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <footer className="text-center py-8 border-t border-white/10 mt-12">
          <p className="text-secondary text-sm">
            90-day DevOps mastery journey • Stay consistent, build projects, land your role
          </p>
        </footer>
      </main>

      {/* Export Modal */}
      <ExportModal
        isOpen={showExportModal}
        onClose={() => setShowExportModal(false)}
        tasks={tasks}
      />

      {/* Daily Reminder */}
      <DailyReminder
        settings={settings}
        onSettingsUpdate={updateSettings}
        completedToday={completedToday}
      />
    </div>
  );
}

export default App;