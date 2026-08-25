/* ============================================================
   EDIT YOUR CONTENT HERE. This is the only file you should need
   to touch — every component reads from this one object. Keep
   the shape (keys/arrays) the same; just swap in your own text,
   numbers, and links.
   ============================================================ */

const DATA = {
  name: "Your Name",
  role: "Cloud Engineer",
  tagline: "I design and operate cloud infrastructure that stays up, scales cleanly, and costs less than the last person's version.",
  location: "Mumbai, IN",
  timezone: "IST (UTC+5:30)",
  availability: "Open to opportunities",
  careerStartYear: 2019, // used to auto-calculate "years of experience"

  status: [
    { label: "region", value: "ap-south-1" },
    { label: "status", value: "available" },
    { label: "clearance", value: "remote / hybrid" }
  ],

  about: [
    "I'm a cloud engineer focused on building infrastructure that other engineers can trust: predictable deploys, clear alerts, and systems that fail loudly instead of silently. Most of my work sits across AWS, infrastructure-as-code, and the CI/CD pipelines that connect the two.",
    "Outside of shipping infrastructure, I spend time on cost optimization and reliability reviews — the unglamorous work that keeps a platform healthy long after launch day."
  ],

  stats: [
    { number: "6+", label: "years in cloud" },
    { number: "40+", label: "systems deployed" },
    { number: "99.95%", label: "avg. uptime" },
    { number: "35%", label: "avg. cost reduction" }
  ],

  skills: [
    {
      category: "Compute & containers",
      tag: "01",
      items: [
        { name: "AWS (EC2, ECS, Lambda)", level: 92 },
        { name: "Kubernetes", level: 85 },
        { name: "Docker", level: 90 }
      ]
    },
    {
      category: "Infrastructure as code",
      tag: "02",
      items: [
        { name: "Terraform", level: 90 },
        { name: "CloudFormation", level: 75 },
        { name: "Ansible", level: 70 }
      ]
    },
    {
      category: "CI/CD & delivery",
      tag: "03",
      items: [
        { name: "GitHub Actions", level: 88 },
        { name: "Jenkins", level: 72 },
        { name: "ArgoCD", level: 65 }
      ]
    },
    {
      category: "Observability & security",
      tag: "04",
      items: [
        { name: "Prometheus / Grafana", level: 80 },
        { name: "Datadog", level: 70 },
        { name: "IAM & security hardening", level: 82 }
      ]
    }
  ],

  certifications: [
    { name: "AWS Certified Solutions Architect – Professional", issuer: "Amazon Web Services", date: "2024" },
    { name: "Certified Kubernetes Administrator (CKA)", issuer: "The Linux Foundation", date: "2023" },
    { name: "HashiCorp Certified: Terraform Associate", issuer: "HashiCorp", date: "2023" },
    { name: "Google Cloud Professional Cloud Architect", issuer: "Google Cloud", date: "2022" }
  ],

  experience: [
    {
      version: "v4.0",
      role: "Senior Cloud Engineer",
      company: "Your Company",
      date: "2023 — Present",
      description: "Own the cloud platform end to end: architecture decisions, cost, and reliability.",
      bullets: [
        "Led migration from monolith to containerized microservices on EKS",
        "Cut monthly cloud spend by 35% through right-sizing and reserved capacity",
        "Built the org's first standardized Terraform module library"
      ],
      stack: ["AWS", "Terraform", "Kubernetes", "GitHub Actions"]
    },
    {
      version: "v3.0",
      role: "Cloud Engineer",
      company: "Previous Company",
      date: "2021 — 2023",
      description: "Built and maintained CI/CD pipelines and infrastructure for a multi-region product.",
      bullets: [
        "Designed a blue/green deployment pipeline that cut release downtime to zero",
        "Implemented centralized logging and alerting across 20+ services"
      ],
      stack: ["AWS", "Docker", "Jenkins", "Prometheus"]
    },
    {
      version: "v2.0",
      role: "DevOps Engineer",
      company: "Earlier Company",
      date: "2019 — 2021",
      description: "Supported infrastructure automation and on-call operations for a growing platform team.",
      bullets: [
        "Automated environment provisioning, reducing setup time from days to hours",
        "Rotated on-call, driving mean time to resolution down quarter over quarter"
      ],
      stack: ["AWS", "Ansible", "Bash"]
    }
  ],

  projects: [
    {
      name: "Multi-region failover platform",
      description: "Active-active infrastructure across two AWS regions with automated failover and health-based routing.",
      metrics: [ { value: "99.99%", label: "uptime" }, { value: "<30s", label: "failover" } ],
      stack: ["AWS", "Terraform", "Route 53"],
      link: "#"
    },
    {
      name: "Internal deployment platform",
      description: "Self-service tool that lets product teams deploy and roll back services without filing infra tickets.",
      metrics: [ { value: "12", label: "teams onboarded" }, { value: "70%", label: "fewer tickets" } ],
      stack: ["Kubernetes", "ArgoCD", "Go"],
      link: "#"
    },
    {
      name: "Cost observability dashboard",
      description: "Real-time cloud spend tracking broken down by team and service, with budget alerts.",
      metrics: [ { value: "35%", label: "cost saved" } ],
      stack: ["AWS Cost Explorer API", "Grafana"],
      link: "#"
    }
  ],

  contact: {
    email: "you@example.com",
    github: "https://github.com/yourhandle",
    linkedin: "https://linkedin.com/in/yourhandle",
    resume: "#" // link to a hosted PDF resume, or "#" to hide the line
  }
};

export default DATA;
