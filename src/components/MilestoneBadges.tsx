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
    <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 mb-6">
      <div className="flex items-center gap-3 mb-4">
        <Trophy className="h-6 w-6 text-yellow-500" />
        <h2 className="text-xl font-semibold text-white">Achievements</h2>
        <div className="flex items-center gap-1 px-2 py-1 bg-yellow-500/20 rounded-full">
          <Sparkles className="h-3 w-3 text-yellow-400" />
          <span className="text-xs font-medium text-yellow-400">
            {unlockedMilestones.length} unlocked
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {displayMilestones.map(milestone => (
          <div
            key={milestone.id}
            className={`relative p-3 rounded-lg border transition-all duration-200 ${
              milestone.unlocked
                ? 'bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border-yellow-500/30 hover:border-yellow-500/50'
                : 'bg-gray-900 border-gray-600 opacity-50'
            }`}
          >
            <div className="text-center">
              <div className="text-2xl mb-2">
                {milestone.unlocked ? milestone.icon : <Lock className="h-6 w-6 mx-auto text-gray-500" />}
              </div>
              <h3 className={`text-sm font-medium mb-1 ${
                milestone.unlocked ? 'text-white' : 'text-gray-400'
              }`}>
                {milestone.title}
              </h3>
              <p className={`text-xs ${
                milestone.unlocked ? 'text-gray-300' : 'text-gray-500'
              }`}>
                {milestone.description}
              </p>
            </div>
            
            {milestone.unlocked && (
              <div className="absolute -top-1 -right-1">
                <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
              </div>
            )}
          </div>
        ))}
      </div>

      {milestones.length > 4 && (
        <div className="mt-4 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-sm text-blue-400 hover:text-blue-300 transition-colors duration-200"
          >
            {showAll ? 'Show less' : `Show all ${milestones.length} achievements`}
          </button>
        </div>
      )}
    </div>
  );
};

export default MilestoneBadges;