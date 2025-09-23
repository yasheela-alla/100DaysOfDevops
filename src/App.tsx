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
    if (window.confirm('Are you sure you want to reset all progress? This cannot be undone.')) {
      resetProgress();
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      settings.theme === 'dark' ? 'bg-gray-950' : 'bg-gray-50'
    }`}>
      <Header 
        settings={settings}
        onSettingsUpdate={updateSettings}
        onReset={handleReset}
        onExport={() => setShowExportModal(true)}
      />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Progress Stats */}
        <div className="mb-8">
          <ProgressStats progress={progress} />
        </div>

        {/* Milestone Badges */}
        <MilestoneBadges milestones={milestones} />

        {/* Search and Filter */}
        <SearchAndFilter
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          filterType={filterType}
          onFilterChange={setFilterType}
          showCompleted={showCompleted}
          onShowCompletedChange={setShowCompleted}
        />

        {/* Learning Plan */}
        <div className="space-y-6">
          <div className="text-center mb-8">
            <h2 className={`text-3xl font-bold mb-2 ${
              settings.theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              100-Day DevOps Mastery Plan
            </h2>
            <p className={`max-w-2xl mx-auto ${
              settings.theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
              A comprehensive learning journey covering DevOps fundamentals, AWS cloud services, 
              and advanced tools. Track your progress as you master each skill with hands-on practice.
            </p>
          </div>

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

            // Only show phase if it has matching tasks
            if (phaseTasks.length === 0) return null;

            return (
              <PhaseSection
                key={phase.id}
                phase={phase}
                tasks={phaseTasks}
                onToggleTask={toggleTask}
                onNotesUpdate={updateTaskNotes}
              />
            );
          })}
        </div>

        {/* Footer */}
        <footer className={`mt-16 text-center py-8 border-t ${
          settings.theme === 'dark' ? 'border-gray-800' : 'border-gray-200'
        }`}>
          <div className={`space-y-2 ${
            settings.theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}>
            <p>💪 Stay consistent • 🚀 Build projects • 🎯 Land your DevOps role</p>
            <p className="text-sm">
              Daily commitment: <span className={`font-medium ${
                settings.theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>2.5 hours</span> 
              {' '} • Morning videos: <span className="text-red-500">1 hour</span>
              {' '} • Evening practice: <span className="text-teal-500">1.5 hours</span>
            </p>
          </div>
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