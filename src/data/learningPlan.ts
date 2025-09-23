import { Task, Phase } from '../types/types';

export const learningTasks: Task[] = [
  // Phase 1: Days 1-44
  // Week 1 (Days 1-7)
  { id: 'day1-video', day: 1, type: 'video', title: 'Fundamentals of DevOps', description: 'Abhishek DevOps Videos - Morning (1 hour)', completed: false },
  { id: 'day1-practice', day: 1, type: 'practice', title: 'Linux User Setup with Non-Interactive Shell', description: 'KodeKloud Tasks - Evening (1.5 hours)', completed: false },
  
  { id: 'day2-video', day: 2, type: 'video', title: 'Improve SDLC with DevOps', description: 'Abhishek DevOps Videos - Morning (1 hour)', completed: false },
  { id: 'day2-practice', day: 2, type: 'practice', title: 'Temporary User Setup with Expiry', description: 'KodeKloud Tasks - Evening (1.5 hours)', completed: false },
  
  { id: 'day3-video', day: 3, type: 'video', title: 'Virtual Machines Part-1', description: 'Abhishek DevOps Videos - Morning (1 hour)', completed: false },
  { id: 'day3-practice', day: 3, type: 'practice', title: 'Secure Root SSH Access', description: 'KodeKloud Tasks - Evening (1.5 hours)', completed: false },
  
  { id: 'day4-video', day: 4, type: 'video', title: 'AWS & Azure - VM Creation', description: 'Abhishek DevOps Videos - Morning (1 hour)', completed: false },
  { id: 'day4-practice', day: 4, type: 'practice', title: 'Script Execution Permissions', description: 'KodeKloud Tasks - Evening (1.5 hours)', completed: false },
  
  { id: 'day5-video', day: 5, type: 'video', title: 'AWS CLI Full Guide', description: 'Abhishek DevOps Videos - Morning (1 hour)', completed: false },
  { id: 'day5-practice', day: 5, type: 'practice', title: 'SElinux Installation and Configuration', description: 'KodeKloud Tasks - Evening (1.5 hours)', completed: false },
  
  { id: 'day6-video', day: 6, type: 'video', title: 'Linux & Shell Scripting', description: 'Abhishek DevOps Videos - Morning (1 hour)', completed: false },
  { id: 'day6-practice', day: 6, type: 'practice', title: 'Create a Cron Job', description: 'KodeKloud Tasks - Evening (1.5 hours)', completed: false },
  
  { id: 'day7-video', day: 7, type: 'video', title: 'Live AWS Shell Scripting Project', description: 'Abhishek DevOps Videos - Morning (1 hour)', completed: false },
  { id: 'day7-practice', day: 7, type: 'practice', title: 'Linux SSH Authentication', description: 'KodeKloud Tasks - Evening (1.5 hours)', completed: false },

  // Week 2 (Days 8-14)
  { id: 'day8-video', day: 8, type: 'video', title: 'Shell Scripting GitHub API Project', description: 'Abhishek DevOps Videos - Morning (1 hour)', completed: false },
  { id: 'day8-practice', day: 8, type: 'practice', title: 'Install Ansible', description: 'KodeKloud Tasks - Evening (1.5 hours)', completed: false },
  
  { id: 'day9-video', day: 9, type: 'video', title: 'Networking Concepts', description: 'Abhishek DevOps Videos - Morning (1 hour)', completed: false },
  { id: 'day9-practice', day: 9, type: 'practice', title: 'MariaDB Troubleshooting', description: 'KodeKloud Tasks - Evening (1.5 hours)', completed: false },
  
  { id: 'day10-video', day: 10, type: 'video', title: 'Git and GitHub', description: 'Abhishek DevOps Videos - Morning (1 hour)', completed: false },
  { id: 'day10-practice', day: 10, type: 'practice', title: 'Linux Bash Scripts', description: 'KodeKloud Tasks - Evening (1.5 hours)', completed: false },
  
  { id: 'day11-video', day: 11, type: 'video', title: 'Git Branching Strategy', description: 'Abhishek DevOps Videos - Morning (1 hour)', completed: false },
  { id: 'day11-practice', day: 11, type: 'practice', title: 'Install and Configure Tomcat Server', description: 'KodeKloud Tasks - Evening (1.5 hours)', completed: false },
  
  { id: 'day12-video', day: 12, type: 'video', title: 'Git Interview Q&A', description: 'Abhishek DevOps Videos - Morning (1 hour)', completed: false },
  { id: 'day12-practice', day: 12, type: 'practice', title: 'Linux Network Services', description: 'KodeKloud Tasks - Evening (1.5 hours)', completed: false },
  
  { id: 'day13-video', day: 13, type: 'video', title: 'Deploy First App to AWS', description: 'Abhishek DevOps Videos - Morning (1 hour)', completed: false },
  { id: 'day13-practice', day: 13, type: 'practice', title: 'IPtables Installation And Configuration', description: 'KodeKloud Tasks - Evening (1.5 hours)', completed: false },
  
  { id: 'day14-video', day: 14, type: 'video', title: 'Top 15 AWS Services', description: 'Abhishek DevOps Videos - Morning (1 hour)', completed: false },
  { id: 'day14-practice', day: 14, type: 'practice', title: 'Linux Process Troubleshooting', description: 'KodeKloud Tasks - Evening (1.5 hours)', completed: false },

  // Week 3 (Days 15-21)
  { id: 'day15-video', day: 15, type: 'video', title: 'Configuration Management with Ansible', description: 'Abhishek DevOps Videos - Morning (1 hour)', completed: false },
  { id: 'day15-practice', day: 15, type: 'practice', title: 'Setup SSL for Nginx', description: 'KodeKloud Tasks - Evening (1.5 hours)', completed: false },
  
  { id: 'day16-video', day: 16, type: 'video', title: 'Ansible Zero to Hero', description: 'Abhishek DevOps Videos - Morning (1 hour)', completed: false },
  { id: 'day16-practice', day: 16, type: 'practice', title: 'Install and Configure Nginx as LBR', description: 'KodeKloud Tasks - Evening (1.5 hours)', completed: false },
  
  { id: 'day17-video', day: 17, type: 'video', title: 'Infrastructure as Code (Terraform)', description: 'Abhishek DevOps Videos - Morning (1 hour)', completed: false },
  { id: 'day17-practice', day: 17, type: 'practice', title: 'Install and Configure PostgreSQL', description: 'KodeKloud Tasks - Evening (1.5 hours)', completed: false },
  
  { id: 'day18-video', day: 18, type: 'video', title: 'Everything about Terraform', description: 'Abhishek DevOps Videos - Morning (1 hour)', completed: false },
  { id: 'day18-practice', day: 18, type: 'practice', title: 'Configure LAMP server', description: 'KodeKloud Tasks - Evening (1.5 hours)', completed: false },
  
  { id: 'day19-video', day: 19, type: 'video', title: 'What is CI/CD?', description: 'Abhishek DevOps Videos - Morning (1 hour)', completed: false },
  { id: 'day19-practice', day: 19, type: 'practice', title: 'Install and Configure Web Application', description: 'KodeKloud Tasks - Evening (1.5 hours)', completed: false },
  
  { id: 'day20-video', day: 20, type: 'video', title: 'Jenkins Zero to Hero', description: 'Abhishek DevOps Videos - Morning (1 hour)', completed: false },
  { id: 'day20-practice', day: 20, type: 'practice', title: 'Configure Nginx + PHP-FPM', description: 'KodeKloud Tasks - Evening (1.5 hours)', completed: false },
  
  { id: 'day21-video', day: 21, type: 'video', title: 'GitHub Actions', description: 'Abhishek DevOps Videos - Morning (1 hour)', completed: false },
  { id: 'day21-practice', day: 21, type: 'practice', title: 'Set Up Git Repository on Storage Server', description: 'KodeKloud Tasks - Evening (1.5 hours)', completed: false },

  // Week 4 (Days 22-28)
  { id: 'day22-video', day: 22, type: 'video', title: 'GitHub Actions Self Hosted Runners', description: 'Abhishek DevOps Videos - Morning (1 hour)', completed: false },
  { id: 'day22-practice', day: 22, type: 'practice', title: 'Clone Git Repository', description: 'KodeKloud Tasks - Evening (1.5 hours)', completed: false },
  
  { id: 'day23-video', day: 23, type: 'video', title: 'CI/CD Interview Questions', description: 'Abhishek DevOps Videos - Morning (1 hour)', completed: false },
  { id: 'day23-practice', day: 23, type: 'practice', title: 'Fork a Git Repository', description: 'KodeKloud Tasks - Evening (1.5 hours)', completed: false },
  
  { id: 'day24-video', day: 24, type: 'video', title: 'Project Management tools', description: 'Abhishek DevOps Videos - Morning (1 hour)', completed: false },
  { id: 'day24-practice', day: 24, type: 'practice', title: 'Git Create Branches', description: 'KodeKloud Tasks - Evening (1.5 hours)', completed: false },
  
  { id: 'day25-video', day: 25, type: 'video', title: 'JIRA Workflow', description: 'Abhishek DevOps Videos - Morning (1 hour)', completed: false },
  { id: 'day25-practice', day: 25, type: 'practice', title: 'Git Merge Branches', description: 'KodeKloud Tasks - Evening (1.5 hours)', completed: false },
  
  { id: 'day26-video', day: 26, type: 'video', title: 'Introduction to Containers', description: 'Abhishek DevOps Videos - Morning (1 hour)', completed: false },
  { id: 'day26-practice', day: 26, type: 'practice', title: 'Git Manage Remotes', description: 'KodeKloud Tasks - Evening (1.5 hours)', completed: false },
  
  { id: 'day27-video', day: 27, type: 'video', title: 'Docker Zero to Hero Part-1', description: 'Abhishek DevOps Videos - Morning (1 hour)', completed: false },
  { id: 'day27-practice', day: 27, type: 'practice', title: 'Git Revert Some Changes', description: 'KodeKloud Tasks - Evening (1.5 hours)', completed: false },
  
  { id: 'day28-video', day: 28, type: 'video', title: 'Docker Containerization for Django', description: 'Abhishek DevOps Videos - Morning (1 hour)', completed: false },
  { id: 'day28-practice', day: 28, type: 'practice', title: 'Git Cherry Pick', description: 'KodeKloud Tasks - Evening (1.5 hours)', completed: false },

  // Week 5 (Days 29-35)
  { id: 'day29-video', day: 29, type: 'video', title: 'Multi Stage Docker Builds', description: 'Abhishek DevOps Videos - Morning (1 hour)', completed: false },
  { id: 'day29-practice', day: 29, type: 'practice', title: 'Manage Git Pull Requests', description: 'KodeKloud Tasks - Evening (1.5 hours)', completed: false },
  
  { id: 'day30-video', day: 30, type: 'video', title: 'Docker Volumes and Bind Mounts', description: 'Abhishek DevOps Videos - Morning (1 hour)', completed: false },
  { id: 'day30-practice', day: 30, type: 'practice', title: 'Git hard reset', description: 'KodeKloud Tasks - Evening (1.5 hours)', completed: false },
  
  { id: 'day31-video', day: 31, type: 'video', title: 'Docker Networking', description: 'Abhishek DevOps Videos - Morning (1 hour)', completed: false },
  { id: 'day31-practice', day: 31, type: 'practice', title: 'Git Stash', description: 'KodeKloud Tasks - Evening (1.5 hours)', completed: false },
  
  { id: 'day32-video', day: 32, type: 'video', title: 'Docker Interview Questions', description: 'Abhishek DevOps Videos - Morning (1 hour)', completed: false },
  { id: 'day32-practice', day: 32, type: 'practice', title: 'Git Rebase', description: 'KodeKloud Tasks - Evening (1.5 hours)', completed: false },
  
  { id: 'day33-video', day: 33, type: 'video', title: 'Docker Compose Guide', description: 'Abhishek DevOps Videos - Morning (1 hour)', completed: false },
  { id: 'day33-practice', day: 33, type: 'practice', title: 'Resolve Git Merge Conflicts', description: 'KodeKloud Tasks - Evening (1.5 hours)', completed: false },
  
  { id: 'day34-video', day: 34, type: 'video', title: 'MERN Stack with Docker Compose', description: 'Abhishek DevOps Videos - Morning (1 hour)', completed: false },
  { id: 'day34-practice', day: 34, type: 'practice', title: 'Git Hook', description: 'KodeKloud Tasks - Evening (1.5 hours)', completed: false },
  
  { id: 'day35-video', day: 35, type: 'video', title: 'Kubernetes Introduction', description: 'Abhishek DevOps Videos - Morning (1 hour)', completed: false },
  { id: 'day35-practice', day: 35, type: 'practice', title: 'Install Docker and Start Service', description: 'KodeKloud Tasks - Evening (1.5 hours)', completed: false },

  // Week 6 (Days 36-42)
  { id: 'day36-video', day: 36, type: 'video', title: 'Kubernetes Architecture', description: 'Abhishek DevOps Videos - Morning (1 hour)', completed: false },
  { id: 'day36-practice', day: 36, type: 'practice', title: 'Deploy Nginx Container', description: 'KodeKloud Tasks - Evening (1.5 hours)', completed: false },
  
  { id: 'day37-video', day: 37, type: 'video', title: 'Manage Kubernetes clusters with KOPS', description: 'Abhishek DevOps Videos - Morning (1 hour)', completed: false },
  { id: 'day37-practice', day: 37, type: 'practice', title: 'Copy File to Docker Container', description: 'KodeKloud Tasks - Evening (1.5 hours)', completed: false },
  
  { id: 'day38-video', day: 38, type: 'video', title: 'Kubernetes Pods', description: 'Abhishek DevOps Videos - Morning (1 hour)', completed: false },
  { id: 'day38-practice', day: 38, type: 'practice', title: 'Pull Docker Image', description: 'KodeKloud Tasks - Evening (1.5 hours)', completed: false },
  
  { id: 'day39-video', day: 39, type: 'video', title: 'Kubernetes Deployment & ReplicaSets', description: 'Abhishek DevOps Videos - Morning (1 hour)', completed: false },
  { id: 'day39-practice', day: 39, type: 'practice', title: 'Create Docker Image From Container', description: 'KodeKloud Tasks - Evening (1.5 hours)', completed: false },
  
  { id: 'day40-video', day: 40, type: 'video', title: 'Kubernetes Services', description: 'Abhishek DevOps Videos - Morning (1 hour)', completed: false },
  { id: 'day40-practice', day: 40, type: 'practice', title: 'Docker EXEC Operations', description: 'KodeKloud Tasks - Evening (1.5 hours)', completed: false },
  
  { id: 'day41-video', day: 41, type: 'video', title: 'Kubernetes Interview Questions Part-1', description: 'Abhishek DevOps Videos - Morning (1 hour)', completed: false },
  { id: 'day41-practice', day: 41, type: 'practice', title: 'Write a Docker File', description: 'KodeKloud Tasks - Evening (1.5 hours)', completed: false },
  
  { id: 'day42-video', day: 42, type: 'video', title: 'Kubernetes Services Deep Dive', description: 'Abhishek DevOps Videos - Morning (1 hour)', completed: false },
  { id: 'day42-practice', day: 42, type: 'practice', title: 'Create a Docker Network', description: 'KodeKloud Tasks - Evening (1.5 hours)', completed: false },

  // Week 7 (Days 43-44)
  { id: 'day43-video', day: 43, type: 'video', title: 'Kubernetes Ingress', description: 'Abhishek DevOps Videos - Morning (1 hour)', completed: false },
  { id: 'day43-practice', day: 43, type: 'practice', title: 'Docker Ports Mapping', description: 'KodeKloud Tasks - Evening (1.5 hours)', completed: false },
  
  { id: 'day44-video', day: 44, type: 'video', title: 'Course Completion & What\'s Next', description: 'Abhishek DevOps Videos - Morning (1 hour)', completed: false },
  { id: 'day44-practice', day: 44, type: 'practice', title: 'Write a Docker Compose File', description: 'KodeKloud Tasks - Evening (1.5 hours)', completed: false },

  // Phase 2: Days 45-75
  // Week 7-8 (Days 45-51)
  { id: 'day45-video', day: 45, type: 'video', title: 'AWS Course Details', description: 'Abhishek AWS Videos - Morning (1 hour)', completed: false },
  { id: 'day45-practice', day: 45, type: 'practice', title: 'Resolve Dockerfile Issues', description: 'KodeKloud Tasks - Evening (1.5 hours)', completed: false },
  
  { id: 'day46-video', day: 46, type: 'video', title: 'Introduction to AWS', description: 'Abhishek AWS Videos - Morning (1 hour)', completed: false },
  { id: 'day46-practice', day: 46, type: 'practice', title: 'Deploy App on Docker Containers', description: 'KodeKloud Tasks - Evening (1.5 hours)', completed: false },
  
  { id: 'day47-video', day: 47, type: 'video', title: 'AWS IAM Deep Dive', description: 'Abhishek AWS Videos - Morning (1 hour)', completed: false },
  { id: 'day47-practice', day: 47, type: 'practice', title: 'Docker Python App', description: 'KodeKloud Tasks - Evening (1.5 hours)', completed: false },
  
  { id: 'day48-video', day: 48, type: 'video', title: 'EC2 Deep Dive & Jenkins Deploy', description: 'Abhishek AWS Videos - Morning (1 hour)', completed: false },
  { id: 'day48-practice', day: 48, type: 'practice', title: 'Deploy Pods in Kubernetes', description: 'KodeKloud Tasks - Evening (1.5 hours)', completed: false },
  
  { id: 'day49-video', day: 49, type: 'video', title: 'VPC Explanation', description: 'Abhishek AWS Videos - Morning (1 hour)', completed: false },
  { id: 'day49-practice', day: 49, type: 'practice', title: 'Kubernetes Deployments', description: 'KodeKloud Tasks - Evening (1.5 hours)', completed: false },
  
  { id: 'day50-video', day: 50, type: 'video', title: 'Security Groups and NACL', description: 'Abhishek AWS Videos - Morning (1 hour)', completed: false },
  { id: 'day50-practice', day: 50, type: 'practice', title: 'Set Resource Limits in K8s Pods', description: 'KodeKloud Tasks - Evening (1.5 hours)', completed: false },
  
  { id: 'day51-video', day: 51, type: 'video', title: 'Route53', description: 'Abhishek AWS Videos - Morning (1 hour)', completed: false },
  { id: 'day51-practice', day: 51, type: 'practice', title: 'Execute Rolling Updates in K8s', description: 'KodeKloud Tasks - Evening (1.5 hours)', completed: false },

  // Week 9 (Days 52-58)
  { id: 'day52-video', day: 52, type: 'video', title: 'AWS Production Project', description: 'Abhishek AWS Videos - Morning (1 hour)', completed: false },
  { id: 'day52-practice', day: 52, type: 'practice', title: 'Revert K8s Deployment', description: 'KodeKloud Tasks - Evening (1.5 hours)', completed: false },
  
  { id: 'day53-video', day: 53, type: 'video', title: 'AWS Interview Questions (EC2/IAM/VPC)', description: 'Abhishek AWS Videos - Morning (1 hour)', completed: false },
  { id: 'day53-practice', day: 53, type: 'practice', title: 'Resolve VolumeMounts Issue', description: 'KodeKloud Tasks - Evening (1.5 hours)', completed: false },
  
  { id: 'day54-video', day: 54, type: 'video', title: 'S3 Buckets Deep Dive', description: 'Abhishek AWS Videos - Morning (1 hour)', completed: false },
  { id: 'day54-practice', day: 54, type: 'practice', title: 'Kubernetes Shared Volumes', description: 'KodeKloud Tasks - Evening (1.5 hours)', completed: false },
  
  { id: 'day55-video', day: 55, type: 'video', title: 'AWS CLI Deep Dive', description: 'Abhishek AWS Videos - Morning (1 hour)', completed: false },
  { id: 'day55-practice', day: 55, type: 'practice', title: 'Kubernetes Sidecar Containers', description: 'KodeKloud Tasks - Evening (1.5 hours)', completed: false },
  
  { id: 'day56-video', day: 56, type: 'video', title: 'IaC with CloudFormation', description: 'Abhishek AWS Videos - Morning (1 hour)', completed: false },
  { id: 'day56-practice', day: 56, type: 'practice', title: 'Deploy Nginx on K8s', description: 'KodeKloud Tasks - Evening (1.5 hours)', completed: false },
  
  { id: 'day57-video', day: 57, type: 'video', title: 'AWS CodeCommit', description: 'Abhishek AWS Videos - Morning (1 hour)', completed: false },
  { id: 'day57-practice', day: 57, type: 'practice', title: 'Print Environment Variables', description: 'KodeKloud Tasks - Evening (1.5 hours)', completed: false },
  
  { id: 'day58-video', day: 58, type: 'video', title: 'AWS Code Pipeline', description: 'Abhishek AWS Videos - Morning (1 hour)', completed: false },
  { id: 'day58-practice', day: 58, type: 'practice', title: 'Deploy Grafana on K8s', description: 'KodeKloud Tasks - Evening (1.5 hours)', completed: false },

  // Week 10 (Days 59-65)
  { id: 'day59-video', day: 59, type: 'video', title: 'AWS End to End CI', description: 'Abhishek AWS Videos - Morning (1 hour)', completed: false },
  { id: 'day59-practice', day: 59, type: 'practice', title: 'Troubleshoot K8s Deployment', description: 'KodeKloud Tasks - Evening (1.5 hours)', completed: false },
  
  { id: 'day60-video', day: 60, type: 'video', title: 'AWS Ultimate CI/CD Pipeline', description: 'Abhishek AWS Videos - Morning (1 hour)', completed: false },
  { id: 'day60-practice', day: 60, type: 'practice', title: 'Persistent Volumes in K8s', description: 'KodeKloud Tasks - Evening (1.5 hours)', completed: false },
  
  { id: 'day61-video', day: 61, type: 'video', title: 'CloudWatch Deep Dive', description: 'Abhishek AWS Videos - Morning (1 hour)', completed: false },
  { id: 'day61-practice', day: 61, type: 'practice', title: 'Init Containers in K8s', description: 'KodeKloud Tasks - Evening (1.5 hours)', completed: false },
  
  { id: 'day62-video', day: 62, type: 'video', title: 'Lambda Introduction', description: 'Abhishek AWS Videos - Morning (1 hour)', completed: false },
  { id: 'day62-practice', day: 62, type: 'practice', title: 'Manage Secrets in K8s', description: 'KodeKloud Tasks - Evening (1.5 hours)', completed: false },
  
  { id: 'day63-video', day: 63, type: 'video', title: 'AWS Cost Optimization', description: 'Abhishek AWS Videos - Morning (1 hour)', completed: false },
  { id: 'day63-practice', day: 63, type: 'practice', title: 'Deploy Iron Gallery App', description: 'KodeKloud Tasks - Evening (1.5 hours)', completed: false },
  
  { id: 'day64-video', day: 64, type: 'video', title: 'CloudFront CDN', description: 'Abhishek AWS Videos - Morning (1 hour)', completed: false },
  { id: 'day64-practice', day: 64, type: 'practice', title: 'Fix Python App on K8s', description: 'KodeKloud Tasks - Evening (1.5 hours)', completed: false },
  
  { id: 'day65-video', day: 65, type: 'video', title: 'AWS ECR', description: 'Abhishek AWS Videos - Morning (1 hour)', completed: false },
  { id: 'day65-practice', day: 65, type: 'practice', title: 'Deploy Redis on K8s', description: 'KodeKloud Tasks - Evening (1.5 hours)', completed: false },

  // Week 11 (Days 66-72)
  { id: 'day66-video', day: 66, type: 'video', title: 'AWS ECS', description: 'Abhishek AWS Videos - Morning (1 hour)', completed: false },
  { id: 'day66-practice', day: 66, type: 'practice', title: 'Deploy MySQL on K8s', description: 'KodeKloud Tasks - Evening (1.5 hours)', completed: false },
  
  { id: 'day67-video', day: 67, type: 'video', title: 'K8s on EKS Project', description: 'Abhishek AWS Videos - Morning (1 hour)', completed: false },
  { id: 'day67-practice', day: 67, type: 'practice', title: 'Deploy Guest Book App', description: 'KodeKloud Tasks - Evening (1.5 hours)', completed: false },
  
  { id: 'day68-video', day: 68, type: 'video', title: 'Secret Management on AWS', description: 'Abhishek AWS Videos - Morning (1 hour)', completed: false },
  { id: 'day68-practice', day: 68, type: 'practice', title: 'Set Up Jenkins Server', description: 'KodeKloud Tasks - Evening (1.5 hours)', completed: false },
  
  { id: 'day69-video', day: 69, type: 'video', title: 'Terraform with AWS Project', description: 'Abhishek AWS Videos - Morning (1 hour)', completed: false },
  { id: 'day69-practice', day: 69, type: 'practice', title: 'Install Jenkins Plugins', description: 'KodeKloud Tasks - Evening (1.5 hours)', completed: false },
  
  { id: 'day70-video', day: 70, type: 'video', title: 'AWS Config', description: 'Abhishek AWS Videos - Morning (1 hour)', completed: false },
  { id: 'day70-practice', day: 70, type: 'practice', title: 'Configure Jenkins User Access', description: 'KodeKloud Tasks - Evening (1.5 hours)', completed: false },
  
  { id: 'day71-video', day: 71, type: 'video', title: 'Load Balancers', description: 'Abhishek AWS Videos - Morning (1 hour)', completed: false },
  { id: 'day71-practice', day: 71, type: 'practice', title: 'Jenkins Job for Package Installation', description: 'KodeKloud Tasks - Evening (1.5 hours)', completed: false },
  
  { id: 'day72-video', day: 72, type: 'video', title: 'AWS Interview Q&A', description: 'Abhishek AWS Videos - Morning (1 hour)', completed: false },
  { id: 'day72-practice', day: 72, type: 'practice', title: 'Jenkins Parameterized Builds', description: 'KodeKloud Tasks - Evening (1.5 hours)', completed: false },

  // Week 12 (Days 73-75)
  { id: 'day73-video', day: 73, type: 'video', title: 'Migrating Apps to AWS', description: 'Abhishek AWS Videos - Morning (1 hour)', completed: false },
  { id: 'day73-practice', day: 73, type: 'practice', title: 'Jenkins Scheduled Jobs', description: 'KodeKloud Tasks - Evening (1.5 hours)', completed: false },
  
  { id: 'day74-video', day: 74, type: 'video', title: 'How to Crack AWS DevOps Job', description: 'Abhishek AWS Videos - Morning (1 hour)', completed: false },
  { id: 'day74-practice', day: 74, type: 'practice', title: 'Jenkins Database Backup Job', description: 'KodeKloud Tasks - Evening (1.5 hours)', completed: false },
  
  { id: 'day75-video', day: 75, type: 'video', title: 'Three-Tier Architecture on AWS', description: 'Abhishek AWS Videos - Morning (1 hour)', completed: false },
  { id: 'day75-practice', day: 75, type: 'practice', title: 'Jenkins Slave Nodes', description: 'KodeKloud Tasks - Evening (1.5 hours)', completed: false },

  // Phase 3: Days 76-90
  // Week 13 (Days 76-82)
  { id: 'day76-video', day: 76, type: 'video', title: 'E-Commerce Three Tier App', description: 'Review & AWS Advanced Videos - Morning (1 hour)', completed: false },
  { id: 'day76-practice', day: 76, type: 'practice', title: 'Jenkins Project Security', description: 'KodeKloud Tasks - Evening (1.5 hours)', completed: false },
  
  { id: 'day77-video', day: 77, type: 'video', title: 'EKS with Terraform', description: 'Review & AWS Advanced Videos - Morning (1 hour)', completed: false },
  { id: 'day77-practice', day: 77, type: 'practice', title: 'Jenkins Deploy Pipeline', description: 'KodeKloud Tasks - Evening (1.5 hours)', completed: false },
  
  { id: 'day78-video', day: 78, type: 'video', title: 'AWS Shell Scripting Project', description: 'Review & AWS Advanced Videos - Morning (1 hour)', completed: false },
  { id: 'day78-practice', day: 78, type: 'practice', title: 'Jenkins Conditional Pipeline', description: 'KodeKloud Tasks - Evening (1.5 hours)', completed: false },
  
  { id: 'day79-video', day: 79, type: 'video', title: 'AWS Billing Best Practices', description: 'Review & AWS Advanced Videos - Morning (1 hour)', completed: false },
  { id: 'day79-practice', day: 79, type: 'practice', title: 'Jenkins Deployment Job', description: 'KodeKloud Tasks - Evening (1.5 hours)', completed: false },
  
  { id: 'day80-video', day: 80, type: 'video', title: 'DevOps on AWS Learning Guide', description: 'Review & AWS Advanced Videos - Morning (1 hour)', completed: false },
  { id: 'day80-practice', day: 80, type: 'practice', title: 'Jenkins Chained Builds', description: 'KodeKloud Tasks - Evening (1.5 hours)', completed: false },
  
  { id: 'day81-video', day: 81, type: 'video', title: 'Review DevOps concepts', description: 'Review & AWS Advanced Videos - Morning (1 hour)', completed: false },
  { id: 'day81-practice', day: 81, type: 'practice', title: 'Jenkins Multistage Pipeline', description: 'KodeKloud Tasks - Evening (1.5 hours)', completed: false },
  
  { id: 'day82-video', day: 82, type: 'video', title: 'Review AWS concepts', description: 'Review & AWS Advanced Videos - Morning (1 hour)', completed: false },
  { id: 'day82-practice', day: 82, type: 'practice', title: 'Ansible Inventory', description: 'KodeKloud Tasks - Evening (1.5 hours)', completed: false },

  // Week 14 (Days 83-89)
  { id: 'day83-video', day: 83, type: 'video', title: 'Plan Portfolio Project 1', description: 'Portfolio Projects - Morning (1 hour)', completed: false },
  { id: 'day83-practice', day: 83, type: 'practice', title: 'Ansible Playbook Troubleshooting', description: 'KodeKloud Tasks - Evening (1.5 hours)', completed: false },
  
  { id: 'day84-video', day: 84, type: 'video', title: 'Build CI/CD Pipeline Project', description: 'Portfolio Projects - Morning (1 hour)', completed: false },
  { id: 'day84-practice', day: 84, type: 'practice', title: 'Copy Data with Ansible', description: 'KodeKloud Tasks - Evening (1.5 hours)', completed: false },
  
  { id: 'day85-video', day: 85, type: 'video', title: 'Continue Project Development', description: 'Portfolio Projects - Morning (1 hour)', completed: false },
  { id: 'day85-practice', day: 85, type: 'practice', title: 'Create Files with Ansible', description: 'KodeKloud Tasks - Evening (1.5 hours)', completed: false },
  
  { id: 'day86-video', day: 86, type: 'video', title: 'Plan Portfolio Project 2', description: 'Portfolio Projects - Morning (1 hour)', completed: false },
  { id: 'day86-practice', day: 86, type: 'practice', title: 'Ansible Ping Module', description: 'KodeKloud Tasks - Evening (1.5 hours)', completed: false },
  
  { id: 'day87-video', day: 87, type: 'video', title: 'Build Infrastructure Project', description: 'Portfolio Projects - Morning (1 hour)', completed: false },
  { id: 'day87-practice', day: 87, type: 'practice', title: 'Ansible Install Package', description: 'KodeKloud Tasks - Evening (1.5 hours)', completed: false },
  
  { id: 'day88-video', day: 88, type: 'video', title: 'Continue Project Development', description: 'Portfolio Projects - Morning (1 hour)', completed: false },
  { id: 'day88-practice', day: 88, type: 'practice', title: 'Ansible Blockinfile Module', description: 'KodeKloud Tasks - Evening (1.5 hours)', completed: false },
  
  { id: 'day89-video', day: 89, type: 'video', title: 'Plan Portfolio Project 3', description: 'Portfolio Projects - Morning (1 hour)', completed: false },
  { id: 'day89-practice', day: 89, type: 'practice', title: 'Ansible Manage Services', description: 'KodeKloud Tasks - Evening (1.5 hours)', completed: false },

  // Week 15 (Day 90)
  { id: 'day90-video', day: 90, type: 'video', title: 'Complete Portfolio Project 3', description: 'Portfolio Projects - Morning (2 hours)', completed: false },
  { id: 'day90-practice', day: 90, type: 'practice', title: 'Managing ACLs Using Ansible', description: 'KodeKloud Final Task - Evening (1.5 hours)', completed: false },
];

export const phases: Phase[] = [
  {
    id: 1,
    title: 'Foundation & Core Skills',
    description: 'Master the fundamentals of DevOps, Linux, Git, and containerization',
    dayRange: 'Days 1-44',
    weeks: [
      { weekNumber: 1, days: [1, 2, 3, 4, 5, 6, 7], title: 'DevOps Fundamentals & Linux Basics' },
      { weekNumber: 2, days: [8, 9, 10, 11, 12, 13, 14], title: 'Networking, Git & AWS Introduction' },
      { weekNumber: 3, days: [15, 16, 17, 18, 19, 20, 21], title: 'Ansible, Terraform & CI/CD Basics' },
      { weekNumber: 4, days: [22, 23, 24, 25, 26, 27, 28], title: 'GitHub Actions & Docker Introduction' },
      { weekNumber: 5, days: [29, 30, 31, 32, 33, 34, 35], title: 'Docker Deep Dive & Kubernetes Intro' },
      { weekNumber: 6, days: [36, 37, 38, 39, 40, 41, 42], title: 'Kubernetes Deep Dive' },
      { weekNumber: 7, days: [43, 44], title: 'Kubernetes Advanced Concepts' },
    ]
  },
  {
    id: 2,
    title: 'AWS Deep Dive & Advanced DevOps',
    description: 'Comprehensive AWS services and advanced DevOps practices',
    dayRange: 'Days 45-75',
    weeks: [
      { weekNumber: 8, days: [45, 46, 47, 48, 49, 50, 51], title: 'AWS Core Services & Docker Advanced' },
      { weekNumber: 9, days: [52, 53, 54, 55, 56, 57, 58], title: 'AWS Projects & Kubernetes Production' },
      { weekNumber: 10, days: [59, 60, 61, 62, 63, 64, 65], title: 'AWS CI/CD & Advanced K8s' },
      { weekNumber: 11, days: [66, 67, 68, 69, 70, 71, 72], title: 'AWS ECS, EKS & Jenkins Advanced' },
      { weekNumber: 12, days: [73, 74, 75], title: 'AWS Architecture & Job Preparation' },
    ]
  },
  {
    id: 3,
    title: 'Advanced Tools & Integration',
    description: 'Portfolio projects and mastering advanced DevOps integrations',
    dayRange: 'Days 76-90',
    weeks: [
      { weekNumber: 13, days: [76, 77, 78, 79, 80, 81, 82], title: 'Advanced Projects & Jenkins Mastery' },
      { weekNumber: 14, days: [83, 84, 85, 86, 87, 88, 89], title: 'Portfolio Projects & Ansible Mastery' },
      { weekNumber: 15, days: [90], title: 'Final Portfolio Project & Course Completion' },
    ]
  }
];