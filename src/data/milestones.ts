import { Milestone } from '../types/types';

export const milestones: Milestone[] = [
  {
    id: 'first-step',
    title: 'First Step',
    description: 'Completed your first task',
    icon: '🚀',
    unlocked: false,
    requirement: { type: 'tasks', value: 1 }
  },
  {
    id: 'week-warrior',
    title: 'Week Warrior',
    description: 'Completed 7 days of learning',
    icon: '⚡',
    unlocked: false,
    requirement: { type: 'days', value: 7 }
  },
  {
    id: 'foundation-master',
    title: 'Foundation Master',
    description: 'Completed Phase 1: Foundation & Core Skills',
    icon: '🏗️',
    unlocked: false,
    requirement: { type: 'phase', value: 1 }
  },
  {
    id: 'cloud-explorer',
    title: 'Cloud Explorer',
    description: 'Completed Phase 2: AWS Deep Dive',
    icon: '☁️',
    unlocked: false,
    requirement: { type: 'phase', value: 2 }
  },
  {
    id: 'devops-master',
    title: 'DevOps Master',
    description: 'Completed all 90 days of learning',
    icon: '🏆',
    unlocked: false,
    requirement: { type: 'days', value: 90 }
  },
  {
    id: 'video-enthusiast',
    title: 'Video Enthusiast',
    description: 'Completed 25 video tasks',
    icon: '📹',
    unlocked: false,
    requirement: { type: 'tasks', value: 25 }
  },
  {
    id: 'hands-on-hero',
    title: 'Hands-on Hero',
    description: 'Completed 25 practice tasks',
    icon: '💻',
    unlocked: false,
    requirement: { type: 'tasks', value: 25 }
  },
  {
    id: 'halfway-champion',
    title: 'Halfway Champion',
    description: 'Reached the 45-day milestone',
    icon: '🎯',
    unlocked: false,
    requirement: { type: 'days', value: 45 }
  }
];