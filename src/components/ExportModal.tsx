import React, { useState } from 'react';
import { Task } from '../types/types';
import { Download, Github, FileText, X, Copy, Check } from 'lucide-react';

interface ExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  tasks: Task[];
}

const ExportModal: React.FC<ExportModalProps> = ({ isOpen, onClose, tasks }) => {
  const [exportType, setExportType] = useState<'markdown' | 'github'>('markdown');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const generateMarkdown = () => {
    const completedTasks = tasks.filter(task => task.completed);
    const tasksWithNotes = tasks.filter(task => task.notes && task.notes.trim());
    
    let markdown = `# DevOps Learning Progress\n\n`;
    markdown += `**Progress:** ${completedTasks.length}/${tasks.length} tasks completed\n\n`;
    
    // Progress by type
    const videoTasks = tasks.filter(t => t.type === 'video');
    const practiceTasks = tasks.filter(t => t.type === 'practice');
    const completedVideo = videoTasks.filter(t => t.completed).length;
    const completedPractice = practiceTasks.filter(t => t.completed).length;
    
    markdown += `## Progress Summary\n`;
    markdown += `- 📹 Video Tasks: ${completedVideo}/${videoTasks.length}\n`;
    markdown += `- 💻 Practice Tasks: ${completedPractice}/${practiceTasks.length}\n\n`;
    
    // Tasks with notes
    if (tasksWithNotes.length > 0) {
      markdown += `## Notes\n\n`;
      tasksWithNotes.forEach(task => {
        markdown += `### Day ${task.day}: ${task.title}\n`;
        markdown += `**Type:** ${task.type === 'video' ? '📹 Video' : '💻 Practice'}\n`;
        markdown += `**Status:** ${task.completed ? '✅ Completed' : '⏳ In Progress'}\n\n`;
        markdown += `${task.notes}\n\n---\n\n`;
      });
    }
    
    // All completed tasks
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
    a.download = `devops-learning-progress-${new Date().toISOString().split('T')[0]}.md`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-800 rounded-xl border border-gray-700 w-full max-w-2xl max-h-[80vh] overflow-hidden">
        <div className="flex items-center justify-between p-6 border-b border-gray-700">
          <h2 className="text-xl font-semibold text-white">Export Progress</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors duration-200"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="p-6">
          <div className="flex gap-4 mb-6">
            <button
              onClick={() => setExportType('markdown')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors duration-200 ${
                exportType === 'markdown'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              <FileText className="h-4 w-4" />
              Markdown
            </button>
            <button
              onClick={() => setExportType('github')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors duration-200 ${
                exportType === 'github'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              <Github className="h-4 w-4" />
              GitHub Ready
            </button>
          </div>

          {exportType === 'markdown' && (
            <div>
              <p className="text-gray-300 mb-4">
                Export your progress and notes as a Markdown file for offline record keeping.
              </p>
              <div className="flex gap-3">
                <button
                  onClick={handleDownload}
                  className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors duration-200"
                >
                  <Download className="h-4 w-4" />
                  Download Markdown
                </button>
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200"
                >
                  {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  {copied ? 'Copied!' : 'Copy to Clipboard'}
                </button>
              </div>
            </div>
          )}

          {exportType === 'github' && (
            <div>
              <p className="text-gray-300 mb-4">
                Create a GitHub repository to track your DevOps learning journey. Copy the markdown content and commit it to your repo.
              </p>
              <div className="bg-gray-900 rounded-lg p-4 mb-4">
                <h3 className="text-white font-medium mb-2">Suggested Repository Structure:</h3>
                <pre className="text-sm text-gray-300">
{`devops-learning-journey/
├── README.md (your progress)
├── notes/
│   ├── day-01-devops-fundamentals.md
│   ├── day-02-sdlc-improvement.md
│   └── ...
└── projects/
    ├── shell-scripts/
    ├── docker-configs/
    └── kubernetes-manifests/`}
                </pre>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200"
                >
                  {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  {copied ? 'Copied!' : 'Copy Markdown'}
                </button>
                <a
                  href="https://github.com/new"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors duration-200"
                >
                  <Github className="h-4 w-4" />
                  Create GitHub Repo
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExportModal;