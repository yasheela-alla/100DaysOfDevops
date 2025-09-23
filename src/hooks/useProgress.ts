import { useState, useEffect } from 'react';
import { Task, Progress, Milestone, AppSettings } from '../types/types';
import { learningTasks } from '../data/learningPlan';
import { milestones as initialMilestones } from '../data/milestones';

const STORAGE_KEY = 'devops-learning-progress';
const NOTES_STORAGE_KEY = 'devops-learning-notes';
const MILESTONES_STORAGE_KEY = 'devops-learning-milestones';
const SETTINGS_STORAGE_KEY = 'devops-learning-settings';

export const useProgress = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [milestones, setMilestones] = useState<Milestone[]>(initialMilestones);
  const [settings, setSettings] = useState<AppSettings>({
    theme: 'dark',
    dailyReminders: true
  });

  useEffect(() => {
    // Load saved progress
    const savedProgress = localStorage.getItem(STORAGE_KEY);
    const savedNotes = localStorage.getItem(NOTES_STORAGE_KEY);
    const savedMilestones = localStorage.getItem(MILESTONES_STORAGE_KEY);
    const savedSettings = localStorage.getItem(SETTINGS_STORAGE_KEY);
    
    let notesMap: Record<string, string> = {};
    if (savedNotes) {
      try {
        notesMap = JSON.parse(savedNotes);
      } catch (error) {
        console.error('Error loading saved notes:', error);
      }
    }

    if (savedProgress) {
      try {
        const completedTaskIds = JSON.parse(savedProgress);
        const updatedTasks = learningTasks.map(task => ({
          ...task,
          completed: completedTaskIds.includes(task.id),
          notes: notesMap[task.id] || ''
        }));
        setTasks(updatedTasks);
      } catch (error) {
        console.error('Error loading saved progress:', error);
        setTasks(learningTasks.map(task => ({ ...task, notes: notesMap[task.id] || '' })));
      }
    } else {
      setTasks(learningTasks.map(task => ({ ...task, notes: notesMap[task.id] || '' })));
    }

    // Load milestones
    if (savedMilestones) {
      try {
        setMilestones(JSON.parse(savedMilestones));
      } catch (error) {
        console.error('Error loading saved milestones:', error);
      }
    }

    // Load settings
    if (savedSettings) {
      try {
        setSettings(JSON.parse(savedSettings));
      } catch (error) {
        console.error('Error loading saved settings:', error);
      }
    }
  }, []);

  // Check for milestone unlocks
  useEffect(() => {
    const progress = calculateProgress();
    const updatedMilestones = milestones.map(milestone => {
      if (milestone.unlocked) return milestone;

      let shouldUnlock = false;
      switch (milestone.requirement.type) {
        case 'tasks':
          const totalCompleted = progress.videoTasks.completed + progress.practiceTasks.completed;
          shouldUnlock = totalCompleted >= milestone.requirement.value;
          break;
        case 'days':
          shouldUnlock = progress.completedDays >= milestone.requirement.value;
          break;
        case 'phase':
          const phaseRanges = { 1: [1, 44], 2: [45, 75], 3: [76, 90] };
          const [start, end] = phaseRanges[milestone.requirement.value as keyof typeof phaseRanges];
          const phaseTasks = tasks.filter(task => task.day >= start && task.day <= end);
          const phaseCompleted = phaseTasks.every(task => task.completed);
          shouldUnlock = phaseCompleted && phaseTasks.length > 0;
          break;
      }

      return { ...milestone, unlocked: shouldUnlock };
    });

    if (JSON.stringify(updatedMilestones) !== JSON.stringify(milestones)) {
      setMilestones(updatedMilestones);
      localStorage.setItem(MILESTONES_STORAGE_KEY, JSON.stringify(updatedMilestones));
    }
  }, [tasks, milestones]);

  const toggleTask = (taskId: string) => {
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);

    // Save progress to localStorage
    const completedTaskIds = updatedTasks.filter(task => task.completed).map(task => task.id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(completedTaskIds));
  };

  const updateTaskNotes = (taskId: string, notes: string) => {
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, notes } : task
    );
    setTasks(updatedTasks);

    // Save notes to localStorage
    const notesMap = updatedTasks.reduce((acc, task) => {
      if (task.notes) {
        acc[task.id] = task.notes;
      }
      return acc;
    }, {} as Record<string, string>);
    localStorage.setItem(NOTES_STORAGE_KEY, JSON.stringify(notesMap));
  };

  const updateSettings = (newSettings: Partial<AppSettings>) => {
    const updatedSettings = { ...settings, ...newSettings };
    setSettings(updatedSettings);
    localStorage.setItem(SETTINGS_STORAGE_KEY, JSON.stringify(updatedSettings));
  };

  const calculateProgress = (): Progress => {
    const totalDays = 90;
    const completedDays = new Set(
      tasks.filter(task => task.completed).map(task => task.day)
    ).size;
    
    const videoTasks = tasks.filter(task => task.type === 'video');
    const practiceTasks = tasks.filter(task => task.type === 'practice');
    
    return {
      totalDays,
      completedDays,
      percentage: Math.round((completedDays / totalDays) * 100),
      videoTasks: {
        total: videoTasks.length,
        completed: videoTasks.filter(task => task.completed).length
      },
      practiceTasks: {
        total: practiceTasks.length,
        completed: practiceTasks.filter(task => task.completed).length
      }
    };
  };

  const resetProgress = () => {
    const resetTasks = learningTasks.map(task => ({ ...task, completed: false }));
    setTasks(resetTasks);
    setMilestones(initialMilestones);
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(NOTES_STORAGE_KEY);
    localStorage.removeItem(MILESTONES_STORAGE_KEY);
  };

  return {
    tasks,
    milestones,
    settings,
    toggleTask,
    updateTaskNotes,
    updateSettings,
    progress: calculateProgress(),
    resetProgress
  };
};