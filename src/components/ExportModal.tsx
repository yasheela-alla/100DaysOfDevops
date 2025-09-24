import React, { useState } from 'react';
import { Task } from '../types/types';
import { Download, X, Copy, Check } from 'lucide-react';

interface ExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  tasks: Task[];
}

const ExportModal: React.FC<ExportModalProps> = ({ isOpen, onClose, tasks }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const generateMarkdown = () => {
    const completedTasks = tasks.filter(task => task.completed);
    
    let markdown = `# DevOps Learning Progress\n\n`;
    markdown += `**Progress:** ${completedTasks.length}/${tasks.length} tasks completed\n\n`;
    
    const videoTasks = tasks.filter(t => t.type === 'video');
    const practiceTasks = tasks.filter(t => t.type === 'practice');
    const completedVideo = videoTasks.filter(t => t.completed).length;
    const completedPractice = practiceTasks.filter(t => t.completed).length;
    
    markdown += `## Progress Summary\n`;
    markdown += `- 📹 Video Tasks: ${completedVideo}/${videoTasks.length}\n`;
    markdown += `- 💻 Practice Tasks: ${completedPractice}/${practiceTasks.length}\n\n`;
    
    markdown += `## Completed Tasks\n\n`;
    completedTasks.forEach(task => {
      markdown += `- [x] Day ${task.day}: ${task.title} (${task.type})\n`;
    });
    
    return markdown;
  };

  const handleCopy = async () => {
    const markdown = generateMarkdown();
    await navigator.clipboard.writeText(markdown);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const markdown = generateMarkdown();
    const blob = new Blob([markdown], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `devops-progress-${new Date().toISOString().split('T')[0]}.md`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="card-minimal w-full max-w-md">
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <h2 className="text-primary font-semibold">Export Progress</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-6">
          <p className="text-secondary text-sm mb-6">
            Export your learning progress as a Markdown file.
          </p>
          
          <div className="flex gap-3">
            <button
              onClick={handleDownload}
              className="btn-primary-minimal flex items-center gap-2"
            >
              <Download className="h-4 w-4" />
              Download
            </button>
            <button
              onClick={handleCopy}
              className="btn-secondary-minimal flex items-center gap-2"
            >
              {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExportModal;