import React, { useState } from 'react';
import { Milestone } from '../types/types';
import { Trophy, Lock, Sparkles } from 'lucide-react';

interface MilestoneBadgesProps {
  milestones: Milestone[];
}

const MilestoneBadges: React.FC<MilestoneBadgesProps> = ({ milestones }) => {
  const [showAll, setShowAll] = useState(false);
  
  const unlockedMilestones = milestones.filter(m => m.unlocked);
  const displayMilestones = showAll ? milestones : unlockedMilestones.slice(0, 4);

  if (unlockedMilestones.length === 0) {
    return null;
  }

  return (
    <div className="card p-8">
      <div className="flex items-center gap-4 mb-6">
        <div className="p-3 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl">
          <Trophy className="h-6 w-6 text-white" />
        </div>
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Achievements</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">Celebrate your learning milestones</p>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-yellow-900/30 dark:to-orange-900/30 rounded-full border border-yellow-200 dark:border-yellow-800/30">
          <Sparkles className="h-4 w-4 text-yellow-600 dark:text-yellow-400" />
          <span className="text-sm font-semibold text-yellow-700 dark:text-yellow-400">
            {unlockedMilestones.length} unlocked
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {displayMilestones.map(milestone => (
          <div
            key={milestone.id}
            className={`relative p-6 rounded-xl border-2 transition-all duration-300 hover-lift ${
              milestone.unlocked
                ? 'bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 border-yellow-200 dark:border-yellow-800/30 hover:border-yellow-300 dark:hover:border-yellow-700/50 shadow-lg'
                : 'bg-gray-50 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700 opacity-60'
            }`}
          >
            <div className="text-center">
              <div className="text-3xl mb-3">
                {milestone.unlocked ? (
                  <span className="animate-pulse-glow">{milestone.icon}</span>
                ) : (
                  <Lock className="h-8 w-8 mx-auto text-gray-400 dark:text-gray-500" />
                )}
              </div>
              <h3 className={`text-sm font-bold mb-2 ${
                milestone.unlocked 
                  ? 'text-gray-800 dark:text-white' 
                  : 'text-gray-500 dark:text-gray-400'
              }`}>
                {milestone.title}
              </h3>
              <p className={`text-xs leading-relaxed ${
                milestone.unlocked 
                  ? 'text-gray-600 dark:text-gray-300' 
                  : 'text-gray-400 dark:text-gray-500'
              }`}>
                {milestone.description}
              </p>
            </div>
            
            {milestone.unlocked && (
              <div className="absolute -top-2 -right-2">
                <div className="w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-pulse shadow-lg"></div>
              </div>
            )}
          </div>
        ))}
      </div>

      {milestones.length > 4 && (
        <div className="mt-4 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors duration-200"
          >
            {showAll ? 'Show less' : `Show all ${milestones.length} achievements`}
          </button>
        </div>
      )}
    </div>
  );
};

export default MilestoneBadges;