export interface ResumeData {
  name: string;
  title: string;
  about: string;
  location: string;
  email: string;
  phone: string;
  social: {
    linkedin: string;
  };
  experience: ExperienceItem[];
  education: EducationItem[];
  skills: SkillCategory[];
  initiatives: Initiative[];
  cvUrl: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  achievements: string[];
  competencies: string[];
  logo?: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  startDate: string;
  endDate: string;
  description?: string;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
  featured: boolean;
}

export interface Skill {
  name: string;
  level: number; // 1-10
  category: string;
}

export interface Initiative {
  name: string;
  description: string;
  competencies: string[];
  image: string;
  impact: string;
  featured: boolean;
}

export const resumeData: ResumeData = {
  name: "Pearson Gardner",
  title: "Senior Human Resources Manager",
  about: `I'm a senior HR professional with over 7 years of experience driving organizational transformation and building comprehensive HR infrastructure. My expertise spans the entire HR spectrum, from strategic talent management to compliance and HRIS implementation.

I specialize in manufacturing environments and defense contracting, with a proven track record of establishing HR functions from the ground up and modernizing existing operations. My approach combines deep HR knowledge with business acumen to create sustainable, scalable solutions.

What sets me apart is my ability to bridge the gap between HR strategy and business outcomes. I don't just manage HR processes—I build systems that drive organizational success. Whether it's implementing comprehensive compliance frameworks, designing compensation structures, or leading digital transformation initiatives, I bring a strategic perspective to every challenge.`,
  location: "Chardon, OH",
  email: "pearsonmgardner@gmail.com",
  phone: "+1 (229) 326-5027",
  social: {
    linkedin: "https://linkedin.com/in/pearsongardner",
  },
  experience: [
    {
      company: "Ohio Ordnance Works",
      role: "Senior Manager, Human Resources",
      startDate: "2024-01",
      endDate: "Present",
      achievements: [
        "Built comprehensive HR infrastructure as first HR employee for 100+ person defense contractor",
        "Closed 30+ compliance risk areas within first six months, establishing proper documentation practices",
        "Implemented Rippling HRIS platform in 3 months, reducing administrative time by 60%",
        "Developed formal job banding structure and performance-based compensation systems"
      ],
      competencies: ["HR Infrastructure", "Compliance Management", "HRIS Implementation", "Compensation Design"],
      logo: "/logos/ohio-ordnance-logo.png"
    },
    {
      company: "Eaton Corporation",
      role: "Human Resources Business Partner",
      startDate: "2021-01",
      endDate: "2024-01",
      achievements: [
        "HR Business Partner for global corporate finance functions with 550+ employees",
        "Implemented biannual compensation reviews reducing turnover to 10-12% vs market",
        "Led organizational design initiatives for Treasury and Compliance functions",
        "Created talent councils and career frameworks for 5000+ corporate employees"
      ],
      competencies: ["Talent Management", "Organizational Design", "Compensation Strategy", "Change Management"],
      logo: "/logos/eaton-logo.png"
    },
    {
      company: "Eaton Corporation",
      role: "Human Resources Supervisor",
      startDate: "2019-01",
      endDate: "2021-01",
      achievements: [
        "HR supervisor for 350-person manufacturing facility within Vehicle Group",
        "Successfully campaigned for Voluntary Reduction in Force and managed workforce reskilling",
        "Reduced CNC machining training time from 12 weeks to 6 weeks",
        "Updated employee guidebook for first time in 25 years using ADKAR change management"
      ],
      competencies: ["Manufacturing HR", "Workforce Planning", "Training & Development", "Employee Relations"],
      logo: "/logos/eaton-logo.png"
    },
    {
      company: "Eaton Corporation",
      role: "Leadership Development Program",
      startDate: "2017-01",
      endDate: "2019-01",
      achievements: [
        "Elite rotational program developing cross-functional HR leadership capabilities",
        "Created four part-time shifts increasing headcount by 100 employees at Crouse-Hinds",
        "Provided critical support during collective bargaining negotiations at Cooper Lighting",
        "Secured $30,000 in community grants while increasing United Way contributions by 15%"
      ],
      competencies: ["Leadership Development", "Labor Relations", "Community Relations", "Strategic Planning"],
      logo: "/logos/eaton-logo.png"
    }
  ],
  education: [
    {
      institution: 'West Virginia University',
      degree: 'MS, Industrial Labor Relations',
      startDate: '2016',
      endDate: '2017',
      description: 'Semester Abroad: University of Strasbourg (2016)'
    },
    {
      institution: 'Georgia Southern University',
      degree: 'BA, Political Science and French',
      startDate: '2011',
      endDate: '2015',
    }
  ],
  skills: [
    {
      name: "Strategic HR",
      skills: [
        { name: "Talent Management", level: 9, category: "Strategic HR" },
        { name: "Organizational Design", level: 8, category: "Strategic HR" },
        { name: "Compensation Strategy", level: 9, category: "Strategic HR" },
        { name: "Change Management", level: 8, category: "Strategic HR" }
      ],
      featured: true
    },
    {
      name: "HR Operations",
      skills: [
        { name: "HRIS Implementation", level: 9, category: "HR Operations" },
        { name: "Compliance Management", level: 9, category: "HR Operations" },
        { name: "Employee Relations", level: 8, category: "HR Operations" },
        { name: "Performance Management", level: 8, category: "HR Operations" }
      ],
      featured: true
    },
    {
      name: "Manufacturing & Defense",
      skills: [
        { name: "Manufacturing HR", level: 9, category: "Industry" },
        { name: "Defense Contracting", level: 8, category: "Industry" },
        { name: "Workforce Planning", level: 8, category: "Industry" },
        { name: "Safety & Compliance", level: 7, category: "Industry" }
      ],
      featured: true
    }
  ],
  initiatives: [
    {
      name: "HR Infrastructure Build",
      description: "Established comprehensive HR function from scratch for growing defense contractor, implementing all policies, systems, and processes",
      competencies: ["HR Infrastructure", "Compliance Management", "Policy Development", "HRIS Implementation"],
      image: "/projects/hr-infrastructure.jpg",
      impact: "Closed 30+ compliance risk areas, established proper documentation practices, reduced legal exposure",
      featured: true
    },
    {
      name: "Compensation Framework Design",
      description: "Developed and implemented formal job banding structure with performance-based merit and bonus systems",
      competencies: ["Compensation Strategy", "Job Analysis", "Market Analysis", "Performance Management"],
      image: "/projects/compensation.jpg",
      impact: "Eliminated compensation disparities, improved retention, aligned pay systems with fiscal planning",
      featured: true
    },
    {
      name: "HRIS Digital Transformation",
      description: "Implemented comprehensive Rippling HRIS platform centralizing payroll, time tracking, benefits, and employee records",
      competencies: ["HRIS Implementation", "Digital Transformation", "Process Optimization", "Data Analytics"],
      image: "/projects/hris.jpg",
      impact: "Streamlined operations, reduced administrative time by 60%, improved analytics and decision-making",
      featured: true
    }
  ],
  cvUrl: "/Pearson_Gardner_Resume.pdf"
}; 