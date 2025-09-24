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
    <div className={`min-h-screen transition-all duration-300 ${
      settings.theme === 'dark' ? 'dark bg-gray-950' : 'light bg-gray-50'
    }`}>
      <Header 
        settings={settings}
        onSettingsUpdate={updateSettings}
        onReset={handleReset}
        onExport={() => setShowExportModal(true)}
      />
      
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        {/* Progress Stats */}
        <div className="animate-fade-in">
          <ProgressStats progress={progress} />
        </div>

        {/* Milestone Badges */}
        <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <MilestoneBadges milestones={milestones} />
        </div>

        {/* Search and Filter */}
        <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
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
        <div className="space-y-8">
          <div className="text-center mb-12 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <h2 className={`text-3xl font-bold mb-2 ${
              settings.theme === 'dark' ? 'text-white' : 'text-gray-800'
            }`}>
              90-Day DevOps Mastery Journey
            </h2>
            <p className={`text-lg max-w-3xl mx-auto leading-relaxed text-balance ${
              settings.theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>
              A comprehensive learning journey covering DevOps fundamentals, AWS cloud services, 
              and advanced automation tools. Master each skill through structured video content and hands-on practice.
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
              <div 
                key={phase.id}
                className="animate-fade-in" 
                style={{ animationDelay: `${0.4 + phase.id * 0.1}s` }}
              >
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
        <footer className={`mt-20 text-center py-12 border-t ${
          settings.theme === 'dark' ? 'border-gray-800' : 'border-gray-100'
        }`}>
          <div className={`space-y-4 ${
            settings.theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            <p className="text-lg font-medium">💪 Stay consistent • 🚀 Build projects • 🎯 Land your DevOps role</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                <span>Daily commitment: <span className={`font-semibold ${
                  settings.theme === 'dark' ? 'text-white' : 'text-gray-800'
                }`}>2.5 hours</span></span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                <span>Morning videos: <span className="font-semibold text-red-500">1 hour</span></span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-teal-500 rounded-full"></span>
                <span>Evening practice: <span className="font-semibold text-teal-500">1.5 hours</span></span>
              </div>
            </div>
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