import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';
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

  if (!showReminder) return null;

  return (
    <div className="fixed bottom-6 right-6 card-minimal p-4 max-w-sm z-50 animate-slide-in">
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-primary font-medium text-sm">Daily Reminder</h3>
        <button
          onClick={dismissReminder}
          className="text-gray-400 hover:text-white"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
      <p className="text-secondary text-sm mb-4">
        Ready to continue your DevOps journey?
      </p>
      <button
        onClick={dismissReminder}
        className="btn-primary-minimal w-full"
      >
        Let's go!
      </button>
    </div>
  );
};

export default DailyReminder;