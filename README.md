# DevOps 90-Day Learning Tracker

A structured, interactive, and responsive web-based tracker designed to guide learners through a **90-day DevOps roadmap**.  
The tracker provides real-time progress monitoring, collapsible weeks, and a clean Notion-style UI optimized for both desktop and mobile.

---

## Features

### Design & UI
- Dark, minimal Notion-inspired theme  
- Responsive layout for desktop and mobile  
- Smooth gradient accents and animations  
- Color-coded tasks for clarity:  
  - **Red** → Video learning  
  - **Teal** → Hands-on practice  

### Progress Tracking
- Interactive checkboxes for each task  
- Real-time statistics: completed days, task counts, and overall percentage  
- Animated progress bar that fills as you progress  
- Automatic day completion (requires both video + practice tasks)  
- Celebration animation when all 90 days are completed  

### Organization
- 3 distinct learning phases with clear headers  
- Collapsible weeks for easy navigation  
- Structured content for all 90 days with separate video and practice tasks  

### Interactive Features
- Export progress as JSON  
- Reset option to restart from day 1  
- Keyboard shortcuts:  
  - `Ctrl + E` → Export progress  
  - `Ctrl + R` → Reset progress  
  - `Ctrl + F` → Search tasks  
- Search functionality to quickly locate tasks  

### Mobile Optimization
- Fully responsive design for small screens  
- Touch-friendly controls and navigation  
- Optimized mobile layout  

### Learning Structure
- **Phase 1 (Days 1–44):** Foundation & Core Skills  
- **Phase 2 (Days 45–75):** AWS Deep Dive & Advanced DevOps  
- **Phase 3 (Days 76–90):** Advanced Tools & Integration  

---

## Usage
1. Check off tasks as you complete them.  
2. The progress bar and statistics update automatically.  
3. A day is marked complete only when both video and practice tasks are done.  
4. Export your progress anytime, or reset to start over.  
5. For demo purposes, progress is stored in memory (resets on page refresh).  
   - In production, `localStorage` can be used for persistence.  

---

## License
This project is released under the MIT License.  
