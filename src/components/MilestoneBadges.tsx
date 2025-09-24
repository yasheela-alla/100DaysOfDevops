import React from 'react';
import { Milestone } from '../types/types';

interface MilestoneBadgesProps {
  milestones: Milestone[];
}

const MilestoneBadges: React.FC<MilestoneBadgesProps> = ({ milestones }) => {
  const unlockedMilestones = milestones.filter(m => m.unlocked);

  if (unlockedMilestones.length === 0) {
    return null;
  }

  return (
    <div className="card-minimal p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-primary font-semibold">Achievements</h2>
        <span className="text-secondary text-sm">{unlockedMilestones.length} unlocked</span>
      </div>

      <div className="grid grid-cols-4 sm:grid-cols-6 gap-3">
        {unlockedMilestones.slice(0, 6).map(milestone => (
          <div
            key={milestone.id}
            className="text-center p-3 card-minimal"
            title={milestone.description}
          >
            <div className="text-2xl mb-1">{milestone.icon}</div>
            <div className="text-xs text-secondary">{milestone.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MilestoneBadges;