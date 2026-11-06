// EDIT EVERYTHING HERE. All sections read from this file.
export const profile = {
  name: 'Mohamed Sameer M',
  title: 'AI & Data Science | Data Analyst | Data Science Fresher',
  tagline: 'Turning Data Into Meaningful Insights.',
  email: 'mmsameer2006@gmail.com',
  github: 'https://github.com/mmsameer2006',
  linkedin: 'https://www.linkedin.com/in/mohamed-sameer-m-13893636b/',
  resume: '/resume.pdf', // replace the file at public/resume.pdf
  about: 'Final-year B.Tech Artificial Intelligence and Data Science student with hands-on project experience in Python, SQL, Power BI and data science. Built analytical dashboards, cleaned and visualized real-world datasets, and applied foundational machine learning techniques through academic and personal projects. Completed a Power BI internship and seeking Data Analyst or Data Science fresher roles.',
}

export const skillGroups = {
  Programming: ['Python', 'Object-Oriented Programming (OOP)'],
  'Data Analytics': ['Data Cleaning', 'Data Preprocessing', 'Exploratory Data Analysis (EDA)', 'Statistics', 'Data Analysis'],
  'Visualization & BI': ['Power BI', 'DAX', 'Power Query', 'Excel', 'Data Visualization', 'KPI Development', 'Matplotlib', 'Seaborn'],
  Database: ['SQL', 'PostgreSQL'],
  'Data Science / ML': ['Pandas', 'NumPy', 'Scikit-learn', 'Regression', 'Classification', 'Clustering', 'Model Evaluation'],
  Tools: ['Jupyter Notebook', 'VS Code', 'Git', 'GitHub'],
}

// Taken from your resume. `repo` adds a Source code button (GitHub repo name); `demo` adds a Live demo button.
export const projects = [
  { title: 'Google Pay Expense Sharing System', // no public GitHub repo yet: add repo: 'name' to show a Source code button
    overview: "Object-oriented Python application inspired by Google Pay split expenses to log shared trip costs, validate payer names and amounts, and compute each person's equal share and net balance. Uses a two-pointer greedy settlement algorithm to minimize payments, settling a ₹4,805 three-person trip in 2 transactions.",
    tech: ['Python', 'OOP', 'Greedy Algorithm', 'Jupyter Notebook'] },
  { title: 'HR Analytics Dashboard', repo: 'HR---Analytics-Dashboard',
    overview: 'Multi-page interactive Power BI dashboard analyzing headcount, attrition, performance and salary trends for a 1,000-employee dataset. Data prepared with Power Query, with DAX measures for KPIs such as active headcount, attrition rate and average salary.',
    tech: ['Power BI', 'DAX', 'Power Query', 'Excel'] },
  { title: 'Python Sales Data Analyzer', repo: 'python-sales-data-analyzer',
    overview: 'Python pipeline to clean sales data (duplicates, nulls, invalid values) and compute 10 business KPIs including revenue, order value and top products, with visualizations of monthly trends and sales by category, city, product and payment mode.',
    tech: ['Python', 'Pandas', 'NumPy', 'Matplotlib'] },
]

export const experience = [
  { role: 'Power BI Intern', org: 'Cognifyz IT Solutions (Remote)', status: 'Completed', period: 'Aug 2026 – Sep 2026',
    points: ['Developed interactive Power BI dashboards using structured datasets.', 'Performed data transformation and preparation for analytical reporting.', 'Created KPI-driven visualizations and dashboard navigation.', 'Completed assigned Power BI internship tasks and delivered business-oriented reports.'] },
]

export const education = [
  { title: 'B.Tech – Artificial Intelligence and Data Science', note: 'Final Year', place: 'Dhanalakshmi Srinivasan Engineering College, Perambalur, Tamil Nadu · Final Year' },
  { title: 'Data Science Course', place: 'HCL GUVI · Currently pursuing' },
]

// Add real certificates: { title, issuer, image: '/certs/file.png', link: 'https://...' }
export const certificates = [{ title: 'HCL GUVI – Data Science', issuer: 'Currently pursuing' }]