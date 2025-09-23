export interface Task {
  id: string;
  day: number;
  type: 'video' | 'practice';
  title: string;
  description: string;
  completed: boolean;
  notes?: string;
}

export interface Week {
  weekNumber: number;
  days: number[];
  title: string;
}

export interface Phase {
  id: number;
  title: string;
  description: string;
  dayRange: string;
  weeks: Week[];
}

export interface Progress {
  totalDays: number;
  completedDays: number;
  percentage: number;
  videoTasks: {
    total: number;
    completed: number;
  };
  practiceTasks: {
    total: number;
    completed: number;
  };
}

export interface Milestone {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlocked: boolean;
  requirement: {
    type: 'phase' | 'tasks' | 'days';
    value: number;
  };
}

export interface AppSettings {
  theme: 'dark' | 'light';
  dailyReminders: boolean;
  lastReminderDate?: string;
}