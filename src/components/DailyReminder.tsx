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
    <div className="fixed bottom-6 right-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 shadow-2xl border border-blue-500/30 max-w-sm z-50 animate-slide-up">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <div className="p-2 bg-white/20 rounded-lg">
            <Bell className="h-5 w-5 text-white" />
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-white font-bold mb-2">Daily Learning Reminder</h3>
          <p className="text-blue-100 text-sm mb-4 leading-relaxed">
            Ready to continue your DevOps journey? You've got this! 💪
          </p>
          <div className="flex items-center gap-2 text-xs text-blue-200 bg-white/10 rounded-lg px-3 py-2">
            <Clock className="h-3 w-3" />
            <span>Recommended: 2.5 hours daily</span>
          </div>
        </div>
        <button
          onClick={dismissReminder}
          className="flex-shrink-0 p-1 text-blue-200 hover:text-white hover:bg-white/20 rounded-lg transition-all duration-200"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
      
      <div className="flex gap-3 mt-4">
        <button
          onClick={dismissReminder}
          className="flex-1 px-4 py-2 bg-white/20 hover:bg-white/30 text-white text-sm font-medium rounded-lg transition-all duration-200 hover-lift"
        >
          Got it!
        </button>
        <button
          onClick={disableReminders}
          className="px-4 py-2 text-blue-200 hover:text-white hover:bg-white/10 text-sm font-medium rounded-lg transition-all duration-200"
        >
          Disable
        </button>
      </div>
    </div>
  );
};

export default DailyReminder;