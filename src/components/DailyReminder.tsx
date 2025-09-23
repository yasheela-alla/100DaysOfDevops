import React, { useEffect, useState } from 'react';
import { Bell, X, Clock } from 'lucide-react';
import { AppSettings } from '../types/types';

interface DailyReminderProps {
  settings: AppSettings;
  onSettingsUpdate: (settings: Partial<AppSettings>) => void;
  completedToday: boolean;
}

const DailyReminder: React.FC<DailyReminderProps> = ({ 
  settings, 
  onSettingsUpdate, 
  completedToday 
}) => {
  const [showReminder, setShowReminder] = useState(false);

  useEffect(() => {
    if (!settings.dailyReminders || completedToday) return;

    const today = new Date().toDateString();
    const lastReminder = settings.lastReminderDate;

    if (lastReminder !== today) {
      // Show reminder after a short delay
      const timer = setTimeout(() => {
        setShowReminder(true);
        onSettingsUpdate({ lastReminderDate: today });
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [settings.dailyReminders, settings.lastReminderDate, completedToday, onSettingsUpdate]);

  const dismissReminder = () => {
    setShowReminder(false);
  };

  const disableReminders = () => {
    onSettingsUpdate({ dailyReminders: false });
    setShowReminder(false);
  };

  if (!showReminder) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-4 shadow-lg border border-blue-500/30 max-w-sm z-50 animate-slide-up">
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0">
          <Bell className="h-6 w-6 text-white" />
        </div>
        <div className="flex-1">
          <h3 className="text-white font-medium mb-1">Daily Learning Reminder</h3>
          <p className="text-blue-100 text-sm mb-3">
            Ready to continue your DevOps journey? You've got this! 💪
          </p>
          <div className="flex items-center gap-2 text-xs text-blue-200">
            <Clock className="h-3 w-3" />
            <span>Recommended: 2.5 hours daily</span>
          </div>
        </div>
        <button
          onClick={dismissReminder}
          className="flex-shrink-0 text-blue-200 hover:text-white transition-colors duration-200"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
      
      <div className="flex gap-2 mt-3">
        <button
          onClick={dismissReminder}
          className="flex-1 px-3 py-1 bg-white/20 hover:bg-white/30 text-white text-sm rounded transition-colors duration-200"
        >
          Got it!
        </button>
        <button
          onClick={disableReminders}
          className="px-3 py-1 text-blue-200 hover:text-white text-sm transition-colors duration-200"
        >
          Disable
        </button>
      </div>
    </div>
  );
};

export default DailyReminder;