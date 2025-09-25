// DevOps 100-Day Challenge Data
const phases = [
    {
        id: 1,
        title: "Phase 1: Foundation (Days 1-40)",
        subtitle: "DevOps fundamentals, Linux, Git, and basic automation",
        days: [1, 40]
    },
    {
        id: 2,
        title: "Phase 2: Intermediate (Days 41-70)",
        subtitle: "Cloud platforms, containers, CI/CD, and infrastructure",
        days: [41, 70]
    },
    {
        id: 3,
        title: "Phase 3: Advanced (Days 71-100)",
        subtitle: "Kubernetes, monitoring, security, and advanced practices",
        days: [71, 100]
    }
];

const tasks = [
    // Phase 1: Foundation (Days 1-40)
    { id: 1, day: 1, type: 'video', title: 'DevOps Introduction', description: 'Understanding DevOps culture, principles, and benefits' },
    { id: 2, day: 1, type: 'practice', title: 'Set up development environment', description: 'Install essential tools: VS Code, Git, terminal setup' },
    { id: 3, day: 2, type: 'video', title: 'Linux Fundamentals', description: 'File system, permissions, and basic commands' },
    { id: 4, day: 2, type: 'practice', title: 'Linux command practice', description: 'Practice file operations, text processing, and navigation' },
    { id: 5, day: 3, type: 'video', title: 'Shell Scripting Basics', description: 'Variables, loops, conditions, and functions' },
    { id: 6, day: 3, type: 'practice', title: 'Write your first shell script', description: 'Create a system monitoring script' },
    { id: 7, day: 4, type: 'video', title: 'Git Version Control', description: 'Git workflow, branching, and collaboration' },
    { id: 8, day: 4, type: 'practice', title: 'Git repository setup', description: 'Initialize repo, make commits, create branches' },
    { id: 9, day: 5, type: 'video', title: 'Networking Fundamentals', description: 'TCP/IP, DNS, HTTP/HTTPS, and load balancing' },
    { id: 10, day: 5, type: 'practice', title: 'Network troubleshooting', description: 'Use ping, traceroute, netstat, and curl' },
    { id: 11, day: 6, type: 'video', title: 'Web Servers', description: 'Apache, Nginx configuration and management' },
    { id: 12, day: 6, type: 'practice', title: 'Deploy a web server', description: 'Set up Nginx with SSL certificate' },
    { id: 13, day: 7, type: 'video', title: 'Databases Overview', description: 'SQL vs NoSQL, backup strategies, replication' },
    { id: 14, day: 7, type: 'practice', title: 'Database setup', description: 'Install and configure MySQL/PostgreSQL' },
    { id: 15, day: 8, type: 'video', title: 'Cloud Computing Basics', description: 'IaaS, PaaS, SaaS, and major cloud providers' },
    { id: 16, day: 8, type: 'practice', title: 'Cloud account setup', description: 'Create AWS/Azure/GCP account and explore console' },
    { id: 17, day: 9, type: 'video', title: 'Virtual Machines', description: 'Hypervisors, VM management, and optimization' },
    { id: 18, day: 9, type: 'practice', title: 'Launch your first VM', description: 'Create and configure a cloud VM instance' },
    { id: 19, day: 10, type: 'video', title: 'Infrastructure as Code Intro', description: 'Benefits and tools overview' },
    { id: 20, day: 10, type: 'practice', title: 'Write basic IaC', description: 'Create simple infrastructure template' },
    { id: 21, day: 11, type: 'video', title: 'Configuration Management', description: 'Ansible, Puppet, Chef comparison' },
    { id: 22, day: 11, type: 'practice', title: 'Ansible playbook', description: 'Write playbook to configure multiple servers' },
    { id: 23, day: 12, type: 'video', title: 'Monitoring Fundamentals', description: 'Metrics, logs, alerts, and dashboards' },
    { id: 24, day: 12, type: 'practice', title: 'Set up basic monitoring', description: 'Install and configure monitoring tools' },
    { id: 25, day: 13, type: 'video', title: 'Security Basics', description: 'Authentication, authorization, encryption' },
    { id: 26, day: 13, type: 'practice', title: 'Implement security measures', description: 'Configure firewall and SSH keys' },
    { id: 27, day: 14, type: 'video', title: 'Backup and Recovery', description: 'Backup strategies and disaster recovery' },
    { id: 28, day: 14, type: 'practice', title: 'Create backup solution', description: 'Implement automated backup system' },
    { id: 29, day: 15, type: 'video', title: 'Package Management', description: 'APT, YUM, package repositories' },
    { id: 30, day: 15, type: 'practice', title: 'Custom package creation', description: 'Build and distribute custom packages' },
    { id: 31, day: 16, type: 'video', title: 'Process Management', description: 'Systemd, services, and process monitoring' },
    { id: 32, day: 16, type: 'practice', title: 'Service configuration', description: 'Create and manage system services' },
    { id: 33, day: 17, type: 'video', title: 'Log Management', description: 'Centralized logging and log analysis' },
    { id: 34, day: 17, type: 'practice', title: 'Set up log aggregation', description: 'Configure centralized logging system' },
    { id: 35, day: 18, type: 'video', title: 'Performance Tuning', description: 'System optimization and bottleneck identification' },
    { id: 36, day: 18, type: 'practice', title: 'Performance analysis', description: 'Analyze and optimize system performance' },
    { id: 37, day: 19, type: 'video', title: 'Automation Scripting', description: 'Advanced scripting techniques' },
    { id: 38, day: 19, type: 'practice', title: 'Build automation tools', description: 'Create custom automation scripts' },
    { id: 39, day: 20, type: 'video', title: 'API Fundamentals', description: 'REST APIs, authentication, and testing' },
    { id: 40, day: 20, type: 'practice', title: 'API integration', description: 'Build and consume REST APIs' },
    { id: 41, day: 21, type: 'video', title: 'Load Balancing', description: 'Load balancer types and configuration' },
    { id: 42, day: 21, type: 'practice', title: 'Configure load balancer', description: 'Set up HAProxy or Nginx load balancer' },
    { id: 43, day: 22, type: 'video', title: 'Caching Strategies', description: 'Redis, Memcached, CDN implementation' },
    { id: 44, day: 22, type: 'practice', title: 'Implement caching', description: 'Set up Redis caching layer' },
    { id: 45, day: 23, type: 'video', title: 'Message Queues', description: 'RabbitMQ, Apache Kafka basics' },
    { id: 46, day: 23, type: 'practice', title: 'Message queue setup', description: 'Configure message queue system' },
    { id: 47, day: 24, type: 'video', title: 'High Availability', description: 'Clustering, failover, redundancy' },
    { id: 48, day: 24, type: 'practice', title: 'HA implementation', description: 'Build high availability setup' },
    { id: 49, day: 25, type: 'video', title: 'Disaster Recovery', description: 'DR planning and implementation' },
    { id: 50, day: 25, type: 'practice', title: 'DR testing', description: 'Test disaster recovery procedures' },
    { id: 51, day: 26, type: 'video', title: 'Capacity Planning', description: 'Resource planning and scaling strategies' },
    { id: 52, day: 26, type: 'practice', title: 'Capacity analysis', description: 'Analyze and plan system capacity' },
    { id: 53, day: 27, type: 'video', title: 'DevOps Culture', description: 'Team collaboration and communication' },
    { id: 54, day: 27, type: 'practice', title: 'Process documentation', description: 'Document DevOps processes and procedures' },
    { id: 55, day: 28, type: 'video', title: 'Incident Management', description: 'Incident response and post-mortems' },
    { id: 56, day: 28, type: 'practice', title: 'Incident response plan', description: 'Create incident response procedures' },
    { id: 57, day: 29, type: 'video', title: 'Change Management', description: 'Change control and deployment strategies' },
    { id: 58, day: 29, type: 'practice', title: 'Change process', description: 'Implement change management workflow' },
    { id: 59, day: 30, type: 'video', title: 'Testing Strategies', description: 'Unit, integration, and system testing' },
    { id: 60, day: 30, type: 'practice', title: 'Test automation', description: 'Set up automated testing pipeline' },
    { id: 61, day: 31, type: 'video', title: 'Code Quality', description: 'Code reviews, static analysis, linting' },
    { id: 62, day: 31, type: 'practice', title: 'Quality gates', description: 'Implement code quality checks' },
    { id: 63, day: 32, type: 'video', title: 'Documentation', description: 'Technical writing and documentation tools' },
    { id: 64, day: 32, type: 'practice', title: 'Create documentation', description: 'Build comprehensive system documentation' },
    { id: 65, day: 33, type: 'video', title: 'Troubleshooting', description: 'Systematic problem-solving approaches' },
    { id: 66, day: 33, type: 'practice', title: 'Debug system issues', description: 'Practice troubleshooting scenarios' },
    { id: 67, day: 34, type: 'video', title: 'Performance Monitoring', description: 'APM tools and performance metrics' },
    { id: 68, day: 34, type: 'practice', title: 'APM implementation', description: 'Set up application performance monitoring' },
    { id: 69, day: 35, type: 'video', title: 'Cost Optimization', description: 'Cloud cost management and optimization' },
    { id: 70, day: 35, type: 'practice', title: 'Cost analysis', description: 'Analyze and optimize infrastructure costs' },
    { id: 71, day: 36, type: 'video', title: 'Compliance', description: 'Security compliance and auditing' },
    { id: 72, day: 36, type: 'practice', title: 'Compliance check', description: 'Implement compliance monitoring' },
    { id: 73, day: 37, type: 'video', title: 'DevSecOps', description: 'Security integration in DevOps pipeline' },
    { id: 74, day: 37, type: 'practice', title: 'Security scanning', description: 'Integrate security scans in pipeline' },
    { id: 75, day: 38, type: 'video', title: 'Team Scaling', description: 'Scaling DevOps practices across teams' },
    { id: 76, day: 38, type: 'practice', title: 'Process scaling', description: 'Design scalable DevOps processes' },
    { id: 77, day: 39, type: 'video', title: 'Tool Selection', description: 'Evaluating and choosing DevOps tools' },
    { id: 78, day: 39, type: 'practice', title: 'Tool evaluation', description: 'Compare and select appropriate tools' },
    { id: 79, day: 40, type: 'video', title: 'Foundation Review', description: 'Review Phase 1 concepts and practices' },
    { id: 80, day: 40, type: 'practice', title: 'Foundation project', description: 'Build comprehensive foundation project' },

    // Phase 2: Intermediate (Days 41-70)
    { id: 81, day: 41, type: 'video', title: 'Container Fundamentals', description: 'Docker basics, images, and containers' },
    { id: 82, day: 41, type: 'practice', title: 'Docker setup', description: 'Install Docker and run first containers' },
    { id: 83, day: 42, type: 'video', title: 'Docker Deep Dive', description: 'Dockerfile, multi-stage builds, optimization' },
    { id: 84, day: 42, type: 'practice', title: 'Custom Docker images', description: 'Build optimized Docker images' },
    { id: 85, day: 43, type: 'video', title: 'Container Orchestration', description: 'Docker Compose and container networking' },
    { id: 86, day: 43, type: 'practice', title: 'Multi-container app', description: 'Deploy multi-container application' },
    { id: 87, day: 44, type: 'video', title: 'CI/CD Fundamentals', description: 'Continuous integration and deployment concepts' },
    { id: 88, day: 44, type: 'practice', title: 'Basic CI/CD pipeline', description: 'Set up simple CI/CD pipeline' },
    { id: 89, day: 45, type: 'video', title: 'Jenkins Deep Dive', description: 'Jenkins installation, configuration, plugins' },
    { id: 90, day: 45, type: 'practice', title: 'Jenkins pipeline', description: 'Create Jenkins declarative pipeline' },
    { id: 91, day: 46, type: 'video', title: 'GitLab CI/CD', description: 'GitLab runners and pipeline configuration' },
    { id: 92, day: 46, type: 'practice', title: 'GitLab pipeline', description: 'Implement GitLab CI/CD pipeline' },
    { id: 93, day: 47, type: 'video', title: 'GitHub Actions', description: 'Workflows, actions, and marketplace' },
    { id: 94, day: 47, type: 'practice', title: 'GitHub workflow', description: 'Create GitHub Actions workflow' },
    { id: 95, day: 48, type: 'video', title: 'Terraform Basics', description: 'Infrastructure as Code with Terraform' },
    { id: 96, day: 48, type: 'practice', title: 'Terraform deployment', description: 'Deploy infrastructure with Terraform' },
    { id: 97, day: 49, type: 'video', title: 'Terraform Advanced', description: 'Modules, state management, best practices' },
    { id: 98, day: 49, type: 'practice', title: 'Terraform modules', description: 'Create reusable Terraform modules' },
    { id: 99, day: 50, type: 'video', title: 'AWS Fundamentals', description: 'Core AWS services and concepts' },
    { id: 100, day: 50, type: 'practice', title: 'AWS deployment', description: 'Deploy application on AWS' },
    { id: 101, day: 51, type: 'video', title: 'AWS Advanced Services', description: 'ECS, EKS, Lambda, and serverless' },
    { id: 102, day: 51, type: 'practice', title: 'Serverless deployment', description: 'Deploy serverless application' },
    { id: 103, day: 52, type: 'video', title: 'Azure Fundamentals', description: 'Core Azure services and concepts' },
    { id: 104, day: 52, type: 'practice', title: 'Azure deployment', description: 'Deploy application on Azure' },
    { id: 105, day: 53, type: 'video', title: 'Google Cloud Platform', description: 'GCP services and deployment' },
    { id: 106, day: 53, type: 'practice', title: 'GCP deployment', description: 'Deploy application on GCP' },
    { id: 107, day: 54, type: 'video', title: 'Multi-cloud Strategy', description: 'Multi-cloud deployment and management' },
    { id: 108, day: 54, type: 'practice', title: 'Multi-cloud setup', description: 'Deploy across multiple cloud providers' },
    { id: 109, day: 55, type: 'video', title: 'Container Registries', description: 'Docker Hub, ECR, ACR, GCR' },
    { id: 110, day: 55, type: 'practice', title: 'Registry setup', description: 'Set up private container registry' },
    { id: 111, day: 56, type: 'video', title: 'Artifact Management', description: 'Nexus, Artifactory, package management' },
    { id: 112, day: 56, type: 'practice', title: 'Artifact repository', description: 'Set up artifact repository' },
    { id: 113, day: 57, type: 'video', title: 'Environment Management', description: 'Dev, staging, production environments' },
    { id: 114, day: 57, type: 'practice', title: 'Environment setup', description: 'Create multiple environments' },
    { id: 115, day: 58, type: 'video', title: 'Blue-Green Deployment', description: 'Zero-downtime deployment strategies' },
    { id: 116, day: 58, type: 'practice', title: 'Blue-green setup', description: 'Implement blue-green deployment' },
    { id: 117, day: 59, type: 'video', title: 'Canary Deployment', description: 'Gradual rollout strategies' },
    { id: 118, day: 59, type: 'practice', title: 'Canary implementation', description: 'Set up canary deployment' },
    { id: 119, day: 60, type: 'video', title: 'Feature Flags', description: 'Feature toggles and A/B testing' },
    { id: 120, day: 60, type: 'practice', title: 'Feature flag system', description: 'Implement feature flag system' },
    { id: 121, day: 61, type: 'video', title: 'Prometheus Monitoring', description: 'Metrics collection and alerting' },
    { id: 122, day: 61, type: 'practice', title: 'Prometheus setup', description: 'Deploy Prometheus monitoring stack' },
    { id: 123, day: 62, type: 'video', title: 'Grafana Dashboards', description: 'Visualization and dashboard creation' },
    { id: 124, day: 62, type: 'practice', title: 'Custom dashboards', description: 'Create comprehensive Grafana dashboards' },
    { id: 125, day: 63, type: 'video', title: 'ELK Stack', description: 'Elasticsearch, Logstash, Kibana' },
    { id: 126, day: 63, type: 'practice', title: 'ELK deployment', description: 'Deploy and configure ELK stack' },
    { id: 127, day: 64, type: 'video', title: 'Distributed Tracing', description: 'Jaeger, Zipkin, OpenTelemetry' },
    { id: 128, day: 64, type: 'practice', title: 'Tracing implementation', description: 'Implement distributed tracing' },
    { id: 129, day: 65, type: 'video', title: 'Chaos Engineering', description: 'Chaos Monkey, fault injection' },
    { id: 130, day: 65, type: 'practice', title: 'Chaos experiments', description: 'Run chaos engineering experiments' },
    { id: 131, day: 66, type: 'video', title: 'Site Reliability Engineering', description: 'SRE principles and practices' },
    { id: 132, day: 66, type: 'practice', title: 'SLI/SLO implementation', description: 'Define and monitor SLIs and SLOs' },
    { id: 133, day: 67, type: 'video', title: 'Database DevOps', description: 'Database migrations and versioning' },
    { id: 134, day: 67, type: 'practice', title: 'Database pipeline', description: 'Implement database CI/CD pipeline' },
    { id: 135, day: 68, type: 'video', title: 'Secrets Management', description: 'HashiCorp Vault, AWS Secrets Manager' },
    { id: 136, day: 68, type: 'practice', title: 'Secrets automation', description: 'Implement automated secrets management' },
    { id: 137, day: 69, type: 'video', title: 'GitOps', description: 'Git-based deployment and operations' },
    { id: 138, day: 69, type: 'practice', title: 'GitOps workflow', description: 'Implement GitOps deployment workflow' },
    { id: 139, day: 70, type: 'video', title: 'Intermediate Review', description: 'Review Phase 2 concepts and practices' },
    { id: 140, day: 70, type: 'practice', title: 'Intermediate project', description: 'Build comprehensive intermediate project' },

    // Phase 3: Advanced (Days 71-100)
    { id: 141, day: 71, type: 'video', title: 'Kubernetes Architecture', description: 'K8s components and architecture deep dive' },
    { id: 142, day: 71, type: 'practice', title: 'Kubernetes cluster', description: 'Set up Kubernetes cluster from scratch' },
    { id: 143, day: 72, type: 'video', title: 'Kubernetes Workloads', description: 'Pods, Deployments, StatefulSets, DaemonSets' },
    { id: 144, day: 72, type: 'practice', title: 'K8s deployments', description: 'Deploy various workload types' },
    { id: 145, day: 73, type: 'video', title: 'Kubernetes Services', description: 'Service types, ingress, load balancing' },
    { id: 146, day: 73, type: 'practice', title: 'K8s networking', description: 'Configure services and ingress' },
    { id: 147, day: 74, type: 'video', title: 'Kubernetes Storage', description: 'Persistent volumes, storage classes' },
    { id: 148, day: 74, type: 'practice', title: 'K8s storage', description: 'Implement persistent storage solutions' },
    { id: 149, day: 75, type: 'video', title: 'Kubernetes Security', description: 'RBAC, network policies, pod security' },
    { id: 150, day: 75, type: 'practice', title: 'K8s security', description: 'Implement Kubernetes security measures' },
    { id: 151, day: 76, type: 'video', title: 'Helm Package Manager', description: 'Helm charts and package management' },
    { id: 152, day: 76, type: 'practice', title: 'Helm deployment', description: 'Create and deploy Helm charts' },
    { id: 153, day: 77, type: 'video', title: 'Kubernetes Operators', description: 'Custom resources and operators' },
    { id: 154, day: 77, type: 'practice', title: 'Custom operator', description: 'Build custom Kubernetes operator' },
    { id: 155, day: 78, type: 'video', title: 'Service Mesh', description: 'Istio, Linkerd, service mesh concepts' },
    { id: 156, day: 78, type: 'practice', title: 'Service mesh setup', description: 'Deploy and configure service mesh' },
    { id: 157, day: 79, type: 'video', title: 'Advanced Monitoring', description: 'Kubernetes monitoring and observability' },
    { id: 158, day: 79, type: 'practice', title: 'K8s monitoring', description: 'Implement comprehensive K8s monitoring' },
    { id: 159, day: 80, type: 'video', title: 'Kubernetes Scaling', description: 'HPA, VPA, cluster autoscaling' },
    { id: 160, day: 80, type: 'practice', title: 'Auto-scaling setup', description: 'Configure automatic scaling' },
    { id: 161, day: 81, type: 'video', title: 'Multi-cluster Management', description: 'Federation, multi-cluster deployments' },
    { id: 162, day: 81, type: 'practice', title: 'Multi-cluster setup', description: 'Manage multiple Kubernetes clusters' },
    { id: 163, day: 82, type: 'video', title: 'Advanced Security', description: 'Zero-trust, security scanning, compliance' },
    { id: 164, day: 82, type: 'practice', title: 'Security hardening', description: 'Implement advanced security measures' },
    { id: 165, day: 83, type: 'video', title: 'Performance Optimization', description: 'Resource optimization and tuning' },
    { id: 166, day: 83, type: 'practice', title: 'Performance tuning', description: 'Optimize system performance' },
    { id: 167, day: 84, type: 'video', title: 'Disaster Recovery Advanced', description: 'Cross-region DR, backup strategies' },
    { id: 168, day: 84, type: 'practice', title: 'DR implementation', description: 'Implement comprehensive DR solution' },
    { id: 169, day: 85, type: 'video', title: 'Cost Optimization Advanced', description: 'FinOps, cost allocation, optimization' },
    { id: 170, day: 85, type: 'practice', title: 'Cost optimization', description: 'Implement cost optimization strategies' },
    { id: 171, day: 86, type: 'video', title: 'Machine Learning Ops', description: 'MLOps, model deployment, monitoring' },
    { id: 172, day: 86, type: 'practice', title: 'MLOps pipeline', description: 'Build ML deployment pipeline' },
    { id: 173, day: 87, type: 'video', title: 'Edge Computing', description: 'Edge deployment and management' },
    { id: 174, day: 87, type: 'practice', title: 'Edge deployment', description: 'Deploy applications at the edge' },
    { id: 175, day: 88, type: 'video', title: 'Advanced Automation', description: 'Complex automation workflows' },
    { id: 176, day: 88, type: 'practice', title: 'Automation framework', description: 'Build comprehensive automation framework' },
    { id: 177, day: 89, type: 'video', title: 'DevOps Leadership', description: 'Leading DevOps transformation' },
    { id: 178, day: 89, type: 'practice', title: 'Transformation plan', description: 'Create DevOps transformation roadmap' },
    { id: 179, day: 90, type: 'video', title: 'Future of DevOps', description: 'Emerging trends and technologies' },
    { id: 180, day: 90, type: 'practice', title: 'Innovation project', description: 'Explore cutting-edge DevOps technologies' },
    { id: 181, day: 91, type: 'video', title: 'Platform Engineering', description: 'Internal developer platforms' },
    { id: 182, day: 91, type: 'practice', title: 'Platform setup', description: 'Build internal developer platform' },
    { id: 183, day: 92, type: 'video', title: 'Advanced Observability', description: 'OpenTelemetry, advanced monitoring' },
    { id: 184, day: 92, type: 'practice', title: 'Observability stack', description: 'Implement comprehensive observability' },
    { id: 185, day: 93, type: 'video', title: 'Cloud Native Security', description: 'Container security, runtime protection' },
    { id: 186, day: 93, type: 'practice', title: 'Security automation', description: 'Automate security scanning and response' },
    { id: 187, day: 94, type: 'video', title: 'Advanced CI/CD', description: 'Complex pipeline patterns and optimization' },
    { id: 188, day: 94, type: 'practice', title: 'Pipeline optimization', description: 'Optimize CI/CD pipeline performance' },
    { id: 189, day: 95, type: 'video', title: 'Infrastructure Optimization', description: 'Advanced infrastructure patterns' },
    { id: 190, day: 95, type: 'practice', title: 'Infrastructure patterns', description: 'Implement advanced infrastructure patterns' },
    { id: 191, day: 96, type: 'video', title: 'DevOps Metrics', description: 'DORA metrics, value stream mapping' },
    { id: 192, day: 96, type: 'practice', title: 'Metrics dashboard', description: 'Build comprehensive DevOps metrics dashboard' },
    { id: 193, day: 97, type: 'video', title: 'Continuous Improvement', description: 'Kaizen, retrospectives, optimization' },
    { id: 194, day: 97, type: 'practice', title: 'Improvement process', description: 'Implement continuous improvement process' },
    { id: 195, day: 98, type: 'video', title: 'DevOps at Scale', description: 'Enterprise DevOps, scaling challenges' },
    { id: 196, day: 98, type: 'practice', title: 'Enterprise setup', description: 'Design enterprise-scale DevOps solution' },
    { id: 197, day: 99, type: 'video', title: 'Career Development', description: 'DevOps career paths and growth' },
    { id: 198, day: 99, type: 'practice', title: 'Portfolio project', description: 'Build comprehensive portfolio project' },
    { id: 199, day: 100, type: 'video', title: 'Challenge Completion', description: 'Celebrating 100 days of DevOps learning' },
    { id: 200, day: 100, type: 'practice', title: 'Final capstone project', description: 'Complete comprehensive capstone project' }
];

// Application State
let completedTasks = new Set();
let currentFilter = 'all';
let isDarkTheme = true;

// DOM Elements
const progressText = document.getElementById('progressText');
const progressFill = document.getElementById('progressFill');
const videoProgress = document.getElementById('videoProgress');
const practiceProgress = document.getElementById('practiceProgress');
const taskContainer = document.getElementById('taskContainer');
const themeToggle = document.getElementById('themeToggle');
const exportBtn = document.getElementById('exportBtn');
const resetBtn = document.getElementById('resetBtn');
const filterBtns = document.querySelectorAll('.filter-btn');

// Initialize Application
function init() {
    loadProgress();
    renderTasks();
    updateProgress();
    setupEventListeners();
}

// Load progress from localStorage
function loadProgress() {
    const saved = localStorage.getItem('devops-progress');
    if (saved) {
        completedTasks = new Set(JSON.parse(saved));
    }
    
    const savedTheme = localStorage.getItem('devops-theme');
    if (savedTheme) {
        isDarkTheme = savedTheme === 'dark';
        updateTheme();
    }
}

// Save progress to localStorage
function saveProgress() {
    localStorage.setItem('devops-progress', JSON.stringify([...completedTasks]));
}

// Update theme
function updateTheme() {
    document.body.className = isDarkTheme ? '' : 'light';
    themeToggle.textContent = isDarkTheme ? '🌙 Dark' : '☀️ Light';
    localStorage.setItem('devops-theme', isDarkTheme ? 'dark' : 'light');
}

// Setup event listeners
function setupEventListeners() {
    // Theme toggle
    themeToggle.addEventListener('click', () => {
        isDarkTheme = !isDarkTheme;
        updateTheme();
    });

    // Filter buttons
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.dataset.filter;
            renderTasks();
        });
    });

    // Export button
    exportBtn.addEventListener('click', exportProgress);

    // Reset button
    resetBtn.addEventListener('click', () => {
        if (confirm('Are you sure you want to reset all progress? This cannot be undone.')) {
            completedTasks.clear();
            saveProgress();
            renderTasks();
            updateProgress();
        }
    });
}

// Render tasks
function renderTasks() {
    taskContainer.innerHTML = '';
    
    phases.forEach(phase => {
        const phaseTasks = tasks.filter(task => 
            task.day >= phase.days[0] && task.day <= phase.days[1]
        );
        
        // Filter tasks based on current filter
        const filteredTasks = phaseTasks.filter(task => {
            const isCompleted = completedTasks.has(task.id);
            switch (currentFilter) {
                case 'completed': return isCompleted;
                case 'pending': return !isCompleted;
                default: return true;
            }
        });

        if (filteredTasks.length === 0) return;

        // Create phase section
        const phaseElement = document.createElement('div');
        phaseElement.className = 'phase';
        
        phaseElement.innerHTML = `
            <div class="phase-header">
                <h2 class="phase-title">${phase.title}</h2>
                <p class="phase-subtitle">${phase.subtitle}</p>
            </div>
            <div class="task-list" id="phase-${phase.id}"></div>
        `;
        
        taskContainer.appendChild(phaseElement);
        
        const taskList = document.getElementById(`phase-${phase.id}`);
        
        // Render tasks
        filteredTasks.forEach(task => {
            const taskElement = createTaskElement(task);
            taskList.appendChild(taskElement);
        });
    });
}

// Create task element
function createTaskElement(task) {
    const isCompleted = completedTasks.has(task.id);
    
    const taskElement = document.createElement('div');
    taskElement.className = `task ${isCompleted ? 'completed' : ''}`;
    
    taskElement.innerHTML = `
        <div class="task-checkbox"></div>
        <div class="task-content">
            <div class="task-header">
                <span class="task-day">Day ${task.day}</span>
                <span class="task-type ${task.type}">${task.type}</span>
            </div>
            <h3 class="task-title">${task.title}</h3>
            <p class="task-description">${task.description}</p>
        </div>
    `;
    
    taskElement.addEventListener('click', () => {
        toggleTask(task.id);
    });
    
    return taskElement;
}

// Toggle task completion
function toggleTask(taskId) {
    if (completedTasks.has(taskId)) {
        completedTasks.delete(taskId);
    } else {
        completedTasks.add(taskId);
    }
    
    saveProgress();
    renderTasks();
    updateProgress();
}

// Update progress display
function updateProgress() {
    const total = tasks.length;
    const completed = completedTasks.size;
    const percentage = Math.round((completed / total) * 100);
    
    // Update progress text and bar
    progressText.textContent = `${completed}/${total} completed`;
    progressFill.style.width = `${percentage}%`;
    
    // Update video/practice progress
    const videoTasks = tasks.filter(t => t.type === 'video');
    const practiceTasks = tasks.filter(t => t.type === 'practice');
    
    const completedVideo = videoTasks.filter(t => completedTasks.has(t.id)).length;
    const completedPractice = practiceTasks.filter(t => completedTasks.has(t.id)).length;
    
    videoProgress.textContent = `Video: ${completedVideo}/${videoTasks.length}`;
    practiceProgress.textContent = `Practice: ${completedPractice}/${practiceTasks.length}`;
}

// Export progress as markdown
function exportProgress() {
    const total = tasks.length;
    const completed = completedTasks.size;
    const percentage = Math.round((completed / total) * 100);
    
    let markdown = `# DevOps 100-Day Challenge Progress\n\n`;
    markdown += `**Overall Progress:** ${completed}/${total} tasks completed (${percentage}%)\n\n`;
    
    // Progress by type
    const videoTasks = tasks.filter(t => t.type === 'video');
    const practiceTasks = tasks.filter(t => t.type === 'practice');
    const completedVideo = videoTasks.filter(t => completedTasks.has(t.id)).length;
    const completedPractice = practiceTasks.filter(t => completedTasks.has(t.id)).length;
    
    markdown += `**Video Tasks:** ${completedVideo}/${videoTasks.length}\n`;
    markdown += `**Practice Tasks:** ${completedPractice}/${practiceTasks.length}\n\n`;
    
    // Progress by phase
    phases.forEach(phase => {
        const phaseTasks = tasks.filter(task => 
            task.day >= phase.days[0] && task.day <= phase.days[1]
        );
        const phaseCompleted = phaseTasks.filter(t => completedTasks.has(t.id)).length;
        const phasePercentage = Math.round((phaseCompleted / phaseTasks.length) * 100);
        
        markdown += `## ${phase.title}\n`;
        markdown += `**Progress:** ${phaseCompleted}/${phaseTasks.length} (${phasePercentage}%)\n\n`;
        
        // Completed tasks in this phase
        const completedPhaseTasks = phaseTasks.filter(t => completedTasks.has(t.id));
        if (completedPhaseTasks.length > 0) {
            markdown += `### Completed Tasks:\n`;
            completedPhaseTasks.forEach(task => {
                markdown += `- [x] Day ${task.day}: ${task.title} (${task.type})\n`;
            });
            markdown += `\n`;
        }
        
        // Pending tasks in this phase
        const pendingPhaseTasks = phaseTasks.filter(t => !completedTasks.has(t.id));
        if (pendingPhaseTasks.length > 0) {
            markdown += `### Pending Tasks:\n`;
            pendingPhaseTasks.forEach(task => {
                markdown += `- [ ] Day ${task.day}: ${task.title} (${task.type})\n`;
            });
            markdown += `\n`;
        }
    });
    
    markdown += `---\n`;
    markdown += `*Generated on ${new Date().toLocaleDateString()}*\n`;
    
    // Download the markdown file
    const blob = new Blob([markdown], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `devops-100-day-progress-${new Date().toISOString().split('T')[0]}.md`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// Initialize the application
init();