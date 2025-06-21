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
  logo?: string | { light: string; dark: string };
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
  level: string; // Changed from number to descriptive string
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
  title: "Senior Manager, Human Resources",
  about: `Results-driven HR professional with 7+ years of experience elevating organizational performance through strategic initiatives in manufacturing and defense contracting environments. Currently serving as the first HR employee at Ohio Ordnance Works, where I've built comprehensive HR infrastructure while ensuring compliance with defense industry regulations.

My expertise includes implementing HRIS platforms, developing compensation frameworks, managing complex employee relations, and driving organizational change. I've successfully partnered with executives at both mid-size and Fortune 500 companies to align HR strategy with business objectives.

Previous experience includes serving as an HR Business Partner for Eaton Corporation's global finance functions (550+ employees) and managing HR operations for manufacturing facilities. Graduate of West Virginia University's Industrial Labor Relations program with international experience from the University of Strasbourg.`,
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
        "Established HR function as first HR employee for 100+ person defense contractor manufacturing tactical weaponry",
        "Conducted comprehensive compliance review, closing 30+ regulatory risk areas within first six months (EEOC, FLSA, FMLA)",
        "Implemented Rippling HRIS platform in 3 months, reducing administrative time by 60% through automation",
        "Developed data-driven compensation framework with formal job banding and market-aligned pay structures",
        "Enhanced benefits package including purchased vacation option and modernized PTO accrual system",
        "Created manager training programs for FMLA/ADA request handling and documentation procedures"
      ],
      competencies: ["HR Infrastructure Development", "Regulatory Compliance", "HRIS Implementation", "Compensation & Benefits"],
      logo: {
        light: "/logos/ohio-ordnance-logo-color.png",
        dark: "/logos/ohio-ordnance-logo-white.png"
      }
    },
    {
      company: "Eaton Corporation",
      role: "Human Resources Business Partner",
      startDate: "2021-01",
      endDate: "2024-01",
      achievements: [
        "Served as strategic HR partner for global corporate finance functions totaling 550+ employees across Tax, Treasury, Audit, and Operations Finance",
        "Implemented biannual compensation review processes, maintaining 10-12% turnover rate compared to market average",
        "Filled 60+ professional roles in 7 months with nearly 100% voluntary retention after one year",
        "Utilized PowerBI dashboards and large datasets to provide comprehensive talent analytics for CFO and Finance SLT",
        "Led organizational design initiatives supporting finance transformation, including outsourcing of transactional work",
        "Deployed career framework and talent councils across 5000+ corporate employees using SAP SuccessFactors"
      ],
      competencies: ["Strategic Talent Management", "Data Analytics", "Organizational Design", "Executive Partnership"],
      logo: "/logos/eaton-logo.png"
    },
    {
      company: "Eaton Corporation",
      role: "Human Resources Supervisor",
      startDate: "2019-01",
      endDate: "2021-01",
      achievements: [
        "Managed HR operations for 350-person Vehicle Group manufacturing facility as member of plant leadership team",
        "Designed and led workforce reskilling initiative, reducing CNC machining training time from 12 to 6 weeks",
        "Successfully advocated for and managed Voluntary Reduction in Force during business line transfer",
        "Led first major employee guidebook revision in over two decades using ADKAR change management methodology",
        "Created retention interview programs and recognition initiatives, exceeding participation goals by 10%",
        "Managed reduction in force and recall processes while maintaining production quality and safety standards"
      ],
      competencies: ["Manufacturing Operations", "Workforce Planning", "Training Development", "Change Management"],
      logo: "/logos/eaton-logo.png"
    },
    {
      company: "Eaton Corporation",
      role: "Leadership Development Program",
      startDate: "2017-01",
      endDate: "2019-01",
      achievements: [
        "Completed rotational assignments across multiple business units developing cross-functional HR expertise",
        "Created four part-time production shifts at Crouse-Hinds, increasing headcount by 100 while avoiding $100K in annual overhead",
        "Secured $30,000 in community grants and increased United Way contributions by 15% at Roanoke facility",
        "Provided strategic support during collective bargaining negotiations at Cooper Lighting",
        "Founded employee resource groups to improve labor-management relations",
        "Led policy standardization initiatives across departments"
      ],
      competencies: ["Leadership Development", "Labor Relations", "Community Engagement", "Project Management"],
      logo: "/logos/eaton-logo.png"
    }
  ],
  education: [
    {
      institution: 'West Virginia University',
      degree: 'MS, Industrial Labor Relations',
      startDate: '2016',
      endDate: '2017',
      description: 'Semester Abroad: University of Strasbourg, France (2016)'
    },
    {
      institution: 'Georgia Southern University',
      degree: 'BA, Political Science and French',
      startDate: '2011',
      endDate: '2015',
      description: 'Young Alumni Board Member (2023 – Present)'
    }
  ],
  skills: [
    {
      name: "HR Strategy & Leadership",
      skills: [
        { name: "Talent Management", level: "Advanced", category: "Strategic HR" },
        { name: "Organizational Design", level: "Advanced", category: "Strategic HR" },
        { name: "Compensation Strategy", level: "Advanced", category: "Strategic HR" },
        { name: "Change Management (ADKAR)", level: "Proficient", category: "Strategic HR" },
        { name: "Executive Partnership", level: "Advanced", category: "Strategic HR" }
      ],
      featured: true
    },
    {
      name: "HR Operations & Compliance",
      skills: [
        { name: "HRIS Implementation (Rippling)", level: "Advanced", category: "HR Operations" },
        { name: "Compliance Management (EEOC, FLSA, FMLA)", level: "Expert", category: "HR Operations" },
        { name: "Employee Relations", level: "Advanced", category: "HR Operations" },
        { name: "Performance Management", level: "Advanced", category: "HR Operations" },
        { name: "Benefits Administration", level: "Proficient", category: "HR Operations" }
      ],
      featured: true
    },
    {
      name: "Technology & Analytics",
      skills: [
        { name: "SAP SuccessFactors", level: "Proficient", category: "Technology" },
        { name: "PowerBI Analytics", level: "Proficient", category: "Technology" },
        { name: "Rippling HRIS", level: "Advanced", category: "Technology" },
        { name: "Data-Driven Decision Making", level: "Advanced", category: "Technology" },
        { name: "HR Metrics & Reporting", level: "Advanced", category: "Technology" }
      ],
      featured: true
    },
    {
      name: "Industry Expertise",
      skills: [
        { name: "Manufacturing HR", level: "Expert", category: "Industry" },
        { name: "Defense Contracting", level: "Proficient", category: "Industry" },
        { name: "Workforce Planning", level: "Advanced", category: "Industry" },
        { name: "Labor Relations", level: "Proficient", category: "Industry" },
        { name: "Safety Compliance", level: "Intermediate", category: "Industry" }
      ],
      featured: false
    }
  ],
  initiatives: [
    {
      name: "Defense Contractor HR Infrastructure Development",
      description: "Built comprehensive HR function from ground up as first HR employee, establishing all policies, procedures, and systems for 100+ person defense manufacturer",
      competencies: ["Compliance Management", "Policy Development", "HRIS Implementation", "Risk Mitigation"],
      image: "/projects/hr-infrastructure.jpg",
      impact: "Closed 30+ compliance gaps, established EEO-1 and Affirmative Action Plan filing processes, significantly reduced legal exposure",
      featured: true
    },
    {
      name: "Market-Aligned Compensation Framework",
      description: "Conducted comprehensive market analysis and developed formal job banding structure with performance-based merit and bonus systems for defense contractor",
      competencies: ["Compensation Analysis", "Market Research", "Job Evaluation", "Pay Equity"],
      image: "/projects/compensation.jpg",
      impact: "Established transparent pay structure for 100+ employees, eliminated compensation disparities, enabled strategic workforce planning",
      featured: true
    },
    {
      name: "Finance Function Talent Transformation",
      description: "Led talent initiatives for 550+ employee global finance organization, implementing compensation reviews, talent councils, and succession planning",
      competencies: ["Talent Strategy", "Succession Planning", "Data Analytics", "Organizational Development"],
      image: "/projects/talent-transformation.jpg",
      impact: "Achieved 10-12% turnover vs market average, filled 60+ roles with near 100% retention, built robust succession plans",
      featured: true
    },
    {
      name: "Manufacturing Workforce Reskilling",
      description: "Designed and implemented comprehensive reskilling program transitioning assembly workers to CNC machinists during business line transfer",
      competencies: ["Training Design", "Workforce Planning", "Change Management", "Manufacturing Operations"],
      image: "/projects/workforce-reskilling.jpg",
      impact: "Reduced training time by 50% (12 to 6 weeks), maintained production quality, achieved single recordable injury rate",
      featured: false
    }
  ],
  cvUrl: "/Pearson_Gardner_Resume.pdf"
}; 