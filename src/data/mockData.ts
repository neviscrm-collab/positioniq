export const domains = [
  { id: 1, name: 'Healthcare', icon: '🏥', customers: 2847, revenue: '$18.4M', growth: '+34%', opportunityScore: 94, threatExposure: 87, contentOpportunities: 142, topUSP: 'Compliance Automation', color: '#6366f1', bgColor: '#eef2ff', topRootCause: 'Unpatched Systems' },
  { id: 2, name: 'Banking & Finance', icon: '🏦', customers: 1923, revenue: '$24.1M', growth: '+28%', opportunityScore: 91, threatExposure: 92, contentOpportunities: 128, topUSP: 'Privileged Access Management', color: '#0ea5e9', bgColor: '#f0f9ff', topRootCause: 'Credential Theft' },
  { id: 3, name: 'Government', icon: '🏛️', customers: 1456, revenue: '$31.2M', growth: '+19%', opportunityScore: 89, threatExposure: 95, contentOpportunities: 98, topUSP: 'Zero Trust Architecture', color: '#8b5cf6', bgColor: '#f5f3ff', topRootCause: 'Supply Chain' },
  { id: 4, name: 'Telecom', icon: '📡', customers: 892, revenue: '$12.7M', growth: '+41%', opportunityScore: 86, threatExposure: 78, contentOpportunities: 87, topUSP: 'Network Vulnerability Management', color: '#f59e0b', bgColor: '#fffbeb', topRootCause: 'Misconfiguration' },
  { id: 5, name: 'Manufacturing', icon: '🏭', customers: 1678, revenue: '$15.9M', growth: '+52%', opportunityScore: 88, threatExposure: 81, contentOpportunities: 113, topUSP: 'OT/IT Security Convergence', color: '#10b981', bgColor: '#ecfdf5', topRootCause: 'Legacy Systems' },
  { id: 6, name: 'Education', icon: '🎓', customers: 3241, revenue: '$8.2M', growth: '+67%', opportunityScore: 79, threatExposure: 72, contentOpportunities: 156, topUSP: 'Endpoint Management', color: '#ef4444', bgColor: '#fef2f2', topRootCause: 'Phishing' },
  { id: 7, name: 'Retail', icon: '🛒', customers: 1134, revenue: '$9.8M', growth: '+38%', opportunityScore: 82, threatExposure: 74, contentOpportunities: 94, topUSP: 'POS Security', color: '#ec4899', bgColor: '#fdf2f8', topRootCause: 'Payment Fraud' },
  { id: 8, name: 'Technology', icon: '💻', customers: 2109, revenue: '$22.3M', growth: '+23%', opportunityScore: 85, threatExposure: 83, contentOpportunities: 119, topUSP: 'DevSecOps Integration', color: '#14b8a6', bgColor: '#f0fdfa', topRootCause: 'API Vulnerabilities' },
  { id: 9, name: 'Energy & Utilities', icon: '⚡', customers: 678, revenue: '$19.6M', growth: '+44%', opportunityScore: 90, threatExposure: 93, contentOpportunities: 76, topUSP: 'Critical Infrastructure Protection', color: '#f97316', bgColor: '#fff7ed', topRootCause: 'Nation-State Attacks' },
  { id: 10, name: 'Legal & Compliance', icon: '⚖️', customers: 445, revenue: '$7.4M', growth: '+29%', opportunityScore: 77, threatExposure: 69, contentOpportunities: 64, topUSP: 'Compliance Reporting', color: '#64748b', bgColor: '#f8fafc', topRootCause: 'Data Exfiltration' },
  { id: 11, name: 'Insurance', icon: '🛡️', customers: 567, revenue: '$11.3M', growth: '+31%', opportunityScore: 83, threatExposure: 76, contentOpportunities: 72, topUSP: 'Risk Quantification', color: '#0891b2', bgColor: '#ecfeff', topRootCause: 'Ransomware' },
  { id: 12, name: 'Pharmaceuticals', icon: '💊', customers: 389, revenue: '$16.8M', growth: '+47%', opportunityScore: 87, threatExposure: 89, contentOpportunities: 88, topUSP: 'IP Protection', color: '#7c3aed', bgColor: '#f5f3ff', topRootCause: 'IP Theft' },
];

export const threats = [
  {
    id: 1, name: 'Salt Typhoon', severity: 'Critical', industry: 'Telecom', year: 2024,
    opportunityScore: 96, productFit: 94, rootCause: 'Nation-State Attack', type: 'APT',
    description: 'Chinese state-sponsored APT group infiltrated major US telecom providers, intercepting communications of government officials.',
    impact: '$2.1B', recordsExposed: '1M+', downtime: '180 days', companies: ['AT&T', 'Verizon', 'T-Mobile'],
    products: ['Endpoint Central', 'Vulnerability Manager Plus', 'PAM360'],
    tags: ['Nation-State', 'Telecom', 'Critical Infrastructure'],
    contentOpportunities: ['Webinar', 'Whitepaper', 'Landing Page'],
    timeline: [
      { date: 'Jan 2024', event: 'Initial intrusion via unpatched network devices' },
      { date: 'Mar 2024', event: 'Lateral movement across telecom infrastructure' },
      { date: 'Aug 2024', event: 'Discovery of wiretapping capabilities' },
      { date: 'Oct 2024', event: 'Public disclosure and congressional testimony' },
    ]
  },
  {
    id: 2, name: 'Change Healthcare', severity: 'Critical', industry: 'Healthcare', year: 2024,
    opportunityScore: 98, productFit: 91, rootCause: 'Missing MFA', type: 'Ransomware',
    description: 'ALPHV/BlackCat ransomware attack on Change Healthcare disrupted prescription processing for thousands of US pharmacies.',
    impact: '$872M', recordsExposed: '100M+', downtime: '22 days', companies: ['UnitedHealth Group', 'Change Healthcare'],
    products: ['ADSelfService Plus', 'PAM360', 'Log360'],
    tags: ['Ransomware', 'Healthcare', 'Supply Chain'],
    timeline: [
      { date: 'Feb 12, 2024', event: 'Initial access via compromised Citrix portal (no MFA)' },
      { date: 'Feb 21, 2024', event: 'Ransomware deployed, systems encrypted' },
      { date: 'Mar 2024', event: 'Pharmacies unable to process prescriptions nationwide' },
      { date: 'Apr 2024', event: 'Ransom payment of $22M reportedly made' },
    ]
  },
  {
    id: 3, name: 'Snowflake Credential Attack', severity: 'High', industry: 'Technology', year: 2024,
    opportunityScore: 89, productFit: 88, rootCause: 'Credential Theft', type: 'Data Breach',
    description: 'Threat actors used stolen credentials to access Snowflake customer accounts, impacting Ticketmaster, Santander, and 165+ organizations.',
    impact: '$1.3B', recordsExposed: '560M+', downtime: '0 days', companies: ['Ticketmaster', 'Santander Bank', 'AT&T'],
    products: ['ADSelfService Plus', 'PAM360', 'ManageEngine SIEM'],
    tags: ['Credential Theft', 'Cloud', 'Multi-Tenant'],
    timeline: [
      { date: 'Apr 2024', event: 'Stolen credentials used to access Snowflake instances' },
      { date: 'May 2024', event: 'Ticketmaster data breach discovered (560M records)' },
      { date: 'Jun 2024', event: 'Snowflake investigation confirms no platform breach' },
      { date: 'Jul 2024', event: 'AT&T breach linked to same campaign (73M records)' },
    ]
  },
  {
    id: 4, name: 'CrowdStrike Outage', severity: 'Critical', industry: 'Technology', year: 2024,
    opportunityScore: 92, productFit: 85, rootCause: 'Faulty Software Update', type: 'Operational',
    description: 'A defective content update from CrowdStrike caused 8.5 million Windows systems to crash, triggering the largest IT outage in history.',
    impact: '$10B+', recordsExposed: '0', downtime: '3 days', companies: ['Airlines', 'Hospitals', 'Banks', 'Media'],
    products: ['Endpoint Central', 'Patch Manager Plus'],
    tags: ['Software Update', 'Operational', 'Business Continuity'],
    timeline: [
      { date: 'Jul 19, 2024 02:09 UTC', event: 'Faulty Falcon sensor update deployed globally' },
      { date: 'Jul 19, 2024 05:27 UTC', event: 'Blue Screen of Death loops begin worldwide' },
      { date: 'Jul 19, 2024', event: 'Airlines, hospitals, banks report mass outages' },
      { date: 'Jul 20, 2024', event: 'Manual fix process begins, recovery estimated weeks' },
    ]
  },
  {
    id: 5, name: 'MGM Resorts', severity: 'High', industry: 'Retail', year: 2023,
    opportunityScore: 87, productFit: 90, rootCause: 'Social Engineering', type: 'Ransomware',
    description: 'Scattered Spider used LinkedIn and vishing to social engineer MGM help desk, leading to a 10-day ransomware attack costing $100M.',
    impact: '$100M', recordsExposed: '37M', downtime: '10 days', companies: ['MGM Resorts International'],
    products: ['ADSelfService Plus', 'PAM360', 'ServiceDesk Plus'],
    tags: ['Social Engineering', 'Ransomware', 'Hospitality'],
    timeline: [
      { date: 'Sep 8, 2023', event: 'Scattered Spider identified MGM employee via LinkedIn' },
      { date: 'Sep 9, 2023', event: '10-minute help desk vishing call grants access' },
      { date: 'Sep 11, 2023', event: 'ALPHV ransomware deployed across MGM systems' },
      { date: 'Sep 19, 2023', event: 'Operations restored after 10-day outage' },
    ]
  },
  {
    id: 6, name: 'SolarWinds Orion', severity: 'Critical', industry: 'Government', year: 2020,
    opportunityScore: 93, productFit: 92, rootCause: 'Supply Chain Attack', type: 'APT',
    description: 'Russian SVR planted backdoor in SolarWinds Orion software update, compromising 18,000 organizations including US federal agencies.',
    impact: '$40B+', recordsExposed: 'Unknown', downtime: 'Unknown', companies: ['US Treasury', 'DHS', 'Microsoft', 'FireEye'],
    products: ['Vulnerability Manager Plus', 'Log360', 'PAM360'],
    tags: ['Supply Chain', 'Nation-State', 'Government'],
    timeline: [
      { date: 'Oct 2019', event: 'SVR gains access to SolarWinds build environment' },
      { date: 'Mar 2020', event: 'SUNBURST backdoor included in Orion update 2019.4' },
      { date: 'Dec 13, 2020', event: 'FireEye discovers breach and reports to NSA' },
      { date: 'Dec 19, 2020', event: 'President declares national security emergency' },
    ]
  },
  {
    id: 7, name: 'LastPass', severity: 'Critical', industry: 'Technology', year: 2022,
    opportunityScore: 85, productFit: 87, rootCause: 'Developer Endpoint Compromise', type: 'Data Breach',
    description: 'Attackers compromised a LastPass developer, then used credential to access cloud storage containing encrypted customer vaults.',
    impact: '$4.4B market cap loss', recordsExposed: '25M', downtime: '0 days', companies: ['LastPass', 'GoTo'],
    products: ['Endpoint Central', 'PAM360', 'ADSelfService Plus'],
    tags: ['Endpoint', 'Cloud', 'Developer Security'],
    timeline: [
      { date: 'Aug 2022', event: 'Developer laptop compromised via vulnerable media software' },
      { date: 'Nov 2022', event: 'Attacker pivots from developer to production cloud storage' },
      { date: 'Dec 22, 2022', event: 'LastPass discloses encrypted vault data was stolen' },
      { date: '2023', event: 'Customers report crypto theft from stolen vaults' },
    ]
  },
  {
    id: 8, name: 'Colonial Pipeline', severity: 'Critical', industry: 'Energy', year: 2021,
    opportunityScore: 91, productFit: 89, rootCause: 'Reused Credentials', type: 'Ransomware',
    description: 'DarkSide ransomware group used a single compromised VPN password to shut down the largest US fuel pipeline, causing regional fuel shortages.',
    impact: '$4.4M ransom + $billions in economic impact', recordsExposed: '0', downtime: '6 days', companies: ['Colonial Pipeline'],
    products: ['PAM360', 'ADSelfService Plus', 'Vulnerability Manager Plus'],
    tags: ['Critical Infrastructure', 'Ransomware', 'Energy'],
    timeline: [
      { date: 'Apr 29, 2021', event: 'DarkSide steals 100GB of data from Colonial' },
      { date: 'May 7, 2021', event: 'Ransomware deployed, pipeline operations halted' },
      { date: 'May 8, 2021', event: 'State of emergency declared across US East Coast' },
      { date: 'May 12, 2021', event: 'Pipeline restored after $4.4M ransom payment' },
    ]
  },
  {
    id: 9, name: 'Equifax', severity: 'Critical', industry: 'Banking & Finance', year: 2017,
    opportunityScore: 88, productFit: 93, rootCause: 'Unpatched Vulnerability', type: 'Data Breach',
    description: 'Unpatched Apache Struts vulnerability exposed sensitive data of 147 million Americans in one of the worst breaches in history.',
    impact: '$1.38B settlement', recordsExposed: '147M', downtime: '78 days undetected', companies: ['Equifax'],
    products: ['Vulnerability Manager Plus', 'Patch Manager Plus', 'Log360'],
    tags: ['Unpatched', 'Finance', 'Consumer Data'],
    timeline: [
      { date: 'Mar 2017', event: 'Apache Struts vulnerability (CVE-2017-5638) disclosed' },
      { date: 'May 13, 2017', event: 'Attackers exploit unpatched Equifax server' },
      { date: 'Jul 29, 2017', event: 'Equifax discovers breach (78 days later)' },
      { date: 'Sep 7, 2017', event: 'Public disclosure shocks 147 million Americans' },
    ]
  },
  {
    id: 10, name: 'WannaCry', severity: 'Critical', industry: 'Healthcare', year: 2017,
    opportunityScore: 90, productFit: 95, rootCause: 'Unpatched Systems (EternalBlue)', type: 'Ransomware',
    description: 'North Korean-linked ransomware exploiting NSA\'s EternalBlue exploit encrypted 230,000 computers across 150 countries, crippling NHS hospitals.',
    impact: '$4B+', recordsExposed: 'Unknown', downtime: 'Days to weeks', companies: ['NHS', 'FedEx', 'Telefonica', 'Renault'],
    products: ['Patch Manager Plus', 'Vulnerability Manager Plus', 'Endpoint Central'],
    tags: ['Ransomware', 'Exploit', 'Healthcare', 'Global'],
    timeline: [
      { date: 'Apr 14, 2017', event: 'NSA\'s EternalBlue exploit leaked by Shadow Brokers' },
      { date: 'May 12, 2017', event: 'WannaCry ransomware begins global spread' },
      { date: 'May 12, 2017', event: 'NHS cancels 19,000 appointments, diverts ambulances' },
      { date: 'May 13, 2017', event: 'Kill switch discovered, slowing spread' },
    ]
  },
];

export const usps = [
  { id: 1, name: 'Automated Vulnerability Remediation', winRate: 67, revenueInfluence: '$12.4M', customers: 2847, industries: ['Healthcare', 'Banking', 'Manufacturing'], relatedThreats: ['WannaCry', 'Equifax', 'Change Healthcare'], contentOpportunities: 38, score: 94 },
  { id: 2, name: 'Unified Endpoint Management', winRate: 71, revenueInfluence: '$18.7M', customers: 4231, industries: ['Education', 'Technology', 'Retail'], relatedThreats: ['CrowdStrike Outage', 'LastPass'], contentOpportunities: 52, score: 96 },
  { id: 3, name: 'Compliance Automation', winRate: 62, revenueInfluence: '$9.8M', customers: 1923, industries: ['Healthcare', 'Banking', 'Government'], relatedThreats: ['Change Healthcare', 'Equifax'], contentOpportunities: 31, score: 88 },
  { id: 4, name: 'Patch Management at Scale', winRate: 74, revenueInfluence: '$15.2M', customers: 3156, industries: ['Manufacturing', 'Healthcare', 'Education'], relatedThreats: ['WannaCry', 'Equifax', 'CrowdStrike Outage'], contentOpportunities: 44, score: 92 },
  { id: 5, name: 'Privileged Access Management', winRate: 58, revenueInfluence: '$22.1M', customers: 1445, industries: ['Banking', 'Government', 'Energy'], relatedThreats: ['SolarWinds', 'Colonial Pipeline', 'Change Healthcare'], contentOpportunities: 29, score: 91 },
  { id: 6, name: 'Zero Trust Architecture', winRate: 63, revenueInfluence: '$19.4M', customers: 987, industries: ['Government', 'Technology', 'Banking'], relatedThreats: ['SolarWinds', 'Salt Typhoon'], contentOpportunities: 35, score: 89 },
  { id: 7, name: 'IT Asset Discovery', winRate: 69, revenueInfluence: '$7.6M', customers: 2678, industries: ['Technology', 'Manufacturing', 'Education'], relatedThreats: ['SolarWinds', 'Equifax'], contentOpportunities: 27, score: 85 },
  { id: 8, name: 'SIEM & Log Analytics', winRate: 55, revenueInfluence: '$14.3M', customers: 1234, industries: ['Banking', 'Government', 'Healthcare'], relatedThreats: ['Salt Typhoon', 'MGM Resorts'], contentOpportunities: 41, score: 87 },
  { id: 9, name: 'Identity Threat Detection', winRate: 61, revenueInfluence: '$17.8M', customers: 891, industries: ['Banking', 'Technology', 'Government'], relatedThreats: ['Snowflake', 'MGM Resorts', 'Colonial Pipeline'], contentOpportunities: 33, score: 90 },
  { id: 10, name: 'OT/IT Security Convergence', winRate: 72, revenueInfluence: '$28.3M', customers: 445, industries: ['Manufacturing', 'Energy', 'Utilities'], relatedThreats: ['Colonial Pipeline', 'Salt Typhoon'], contentOpportunities: 22, score: 93 },
];

export const products = [
  { id: 1, name: 'Endpoint Central', customers: 45000, industries: ['Education', 'Healthcare', 'Manufacturing'], topUSPs: ['Unified Endpoint Management', 'Patch Management at Scale', 'IT Asset Discovery'], threatCoverage: 87, opportunityScore: 93, campaigns: 24, revenue: '$31.2M' },
  { id: 2, name: 'Vulnerability Manager Plus', customers: 18000, industries: ['Healthcare', 'Banking', 'Government'], topUSPs: ['Automated Vulnerability Remediation', 'Patch Management at Scale'], threatCoverage: 91, opportunityScore: 94, campaigns: 19, revenue: '$24.7M' },
  { id: 3, name: 'PAM360', customers: 8400, industries: ['Banking', 'Government', 'Energy'], topUSPs: ['Privileged Access Management', 'Zero Trust Architecture'], threatCoverage: 88, opportunityScore: 91, campaigns: 15, revenue: '$22.1M' },
  { id: 4, name: 'ADSelfService Plus', customers: 22000, industries: ['Technology', 'Healthcare', 'Education'], topUSPs: ['Identity Threat Detection', 'Zero Trust Architecture'], threatCoverage: 84, opportunityScore: 89, campaigns: 18, revenue: '$17.8M' },
  { id: 5, name: 'Log360', customers: 11000, industries: ['Banking', 'Government', 'Healthcare'], topUSPs: ['SIEM & Log Analytics', 'Compliance Automation'], threatCoverage: 86, opportunityScore: 88, campaigns: 16, revenue: '$14.3M' },
  { id: 6, name: 'Patch Manager Plus', customers: 29000, industries: ['Manufacturing', 'Education', 'Healthcare'], topUSPs: ['Patch Management at Scale', 'Automated Vulnerability Remediation'], threatCoverage: 92, opportunityScore: 90, campaigns: 21, revenue: '$15.2M' },
];

export const campaigns = [
  { id: 1, name: 'Healthcare Ransomware Defense', threat: 'Change Healthcare', domain: 'Healthcare', usp: 'Patch Management at Scale', product: 'Patch Manager Plus', stage: 'Active', leads: 847, pipeline: '$3.2M', status: 'running' },
  { id: 2, name: 'Telecom Nation-State Defense', threat: 'Salt Typhoon', domain: 'Telecom', usp: 'Zero Trust Architecture', product: 'PAM360', stage: 'Planning', leads: 234, pipeline: '$5.8M', status: 'planning' },
  { id: 3, name: 'Cloud Identity Security', threat: 'Snowflake Credential Attack', domain: 'Technology', usp: 'Identity Threat Detection', product: 'ADSelfService Plus', stage: 'Active', leads: 1203, pipeline: '$4.1M', status: 'running' },
  { id: 4, name: 'Critical Infrastructure Protection', threat: 'Colonial Pipeline', domain: 'Energy', usp: 'OT/IT Security Convergence', product: 'PAM360', stage: 'Active', leads: 389, pipeline: '$8.7M', status: 'running' },
  { id: 5, name: 'Government Supply Chain Security', threat: 'SolarWinds Orion', domain: 'Government', usp: 'Privileged Access Management', product: 'Log360', stage: 'Completed', leads: 562, pipeline: '$12.3M', status: 'completed' },
  { id: 6, name: 'Manufacturing Endpoint Security', threat: 'WannaCry', domain: 'Manufacturing', usp: 'Unified Endpoint Management', product: 'Endpoint Central', stage: 'Active', leads: 678, pipeline: '$2.9M', status: 'running' },
];

export const customerStories = [
  { id: 1, company: 'Banner Health', domain: 'Healthcare', outcome: 'Reduced patch deployment time by 78%', product: 'Patch Manager Plus', usp: 'Patch Management at Scale', quote: 'We went from 6 weeks to patch 18,000 endpoints to just 3 days.', size: 'Enterprise' },
  { id: 2, company: 'First National Bank', domain: 'Banking', outcome: 'Achieved SOX compliance in 60 days', product: 'Log360', usp: 'Compliance Automation', quote: 'Our auditors were impressed. ManageEngine made compliance systematic.', size: 'Enterprise' },
  { id: 3, company: 'US County Government', domain: 'Government', outcome: 'Blocked 3 ransomware attempts in Q1 2024', product: 'PAM360', usp: 'Privileged Access Management', quote: 'Privileged access was our #1 risk. PAM360 gave us complete control.', size: 'Mid-Market' },
  { id: 4, company: 'Texas School District', domain: 'Education', outcome: 'Managed 45,000 student devices from one console', product: 'Endpoint Central', usp: 'Unified Endpoint Management', quote: 'One IT admin managing 45,000 devices. That\'s the power of Endpoint Central.', size: 'Mid-Market' },
  { id: 5, company: 'German Auto Manufacturer', domain: 'Manufacturing', outcome: 'Secured OT/IT convergence across 12 factories', product: 'Vulnerability Manager Plus', usp: 'OT/IT Security Convergence', quote: 'Our factory floor is now as secure as our headquarters.', size: 'Enterprise' },
];

export const contentAssets = [
  { id: 1, title: 'The CISO\'s Guide to Ransomware Defense in 2024', type: 'Whitepaper', domain: 'Healthcare', threat: 'Change Healthcare', product: 'Patch Manager Plus', stage: 'Published', views: 12847, leads: 892, pipeline: '$2.1M' },
  { id: 2, title: 'How Nation-State Actors Target Telecom Infrastructure', type: 'Webinar', domain: 'Telecom', threat: 'Salt Typhoon', product: 'PAM360', stage: 'Scheduled', views: 0, leads: 0, pipeline: '$0' },
  { id: 3, title: '5 Identity Security Mistakes that Led to the Snowflake Breach', type: 'Blog', domain: 'Technology', threat: 'Snowflake', product: 'ADSelfService Plus', stage: 'Published', views: 28341, leads: 1243, pipeline: '$891K' },
  { id: 4, title: 'Zero Trust Implementation Roadmap for Government Agencies', type: 'Landing Page', domain: 'Government', threat: 'SolarWinds', product: 'PAM360', stage: 'Published', views: 8923, leads: 567, pipeline: '$4.3M' },
  { id: 5, title: 'Endpoint Security Battlecard: ManageEngine vs CrowdStrike', type: 'Battlecard', domain: 'Technology', threat: 'CrowdStrike Outage', product: 'Endpoint Central', stage: 'Draft', views: 0, leads: 0, pipeline: '$0' },
  { id: 6, title: 'Manufacturing OT Security: Protecting the Factory Floor', type: 'Whitepaper', domain: 'Manufacturing', threat: 'WannaCry', product: 'Vulnerability Manager Plus', stage: 'Published', views: 6782, leads: 389, pipeline: '$3.8M' },
];

export const competitors = [
  { id: 1, name: 'CrowdStrike', winRate: 42, lossRate: 58, primaryDomain: 'Technology', topWeakness: 'High Cost & Complexity', ourAdvantage: 'Unified Platform + Price', deals: 234 },
  { id: 2, name: 'Microsoft Intune', winRate: 61, lossRate: 39, primaryDomain: 'Education', topWeakness: 'Limited Non-Windows Support', ourAdvantage: 'True Cross-Platform Management', deals: 567 },
  { id: 3, name: 'Tenable', winRate: 55, lossRate: 45, primaryDomain: 'Healthcare', topWeakness: 'No Remediation Automation', ourAdvantage: 'Scan-to-Patch Automation', deals: 389 },
  { id: 4, name: 'CyberArk', winRate: 38, lossRate: 62, primaryDomain: 'Banking', topWeakness: 'Complex Implementation', ourAdvantage: 'Faster Time to Value', deals: 178 },
  { id: 5, name: 'Ivanti', winRate: 67, lossRate: 33, primaryDomain: 'Manufacturing', topWeakness: 'Poor UX & Support', ourAdvantage: 'Superior UX + 24/7 Support', deals: 445 },
];

export const kpiData = {
  customers: 12542,
  domains: 32,
  usps: 148,
  contentOpportunities: 1284,
  activeThreats: 127,
  influencedPipeline: '$42.5M',
};

export const threatTrendData = [
  { month: 'Jan', threats: 8, opportunities: 6 },
  { month: 'Feb', threats: 12, opportunities: 9 },
  { month: 'Mar', threats: 9, opportunities: 8 },
  { month: 'Apr', threats: 15, opportunities: 12 },
  { month: 'May', threats: 11, opportunities: 10 },
  { month: 'Jun', threats: 18, opportunities: 15 },
  { month: 'Jul', threats: 22, opportunities: 19 },
  { month: 'Aug', threats: 19, opportunities: 16 },
  { month: 'Sep', threats: 24, opportunities: 21 },
  { month: 'Oct', threats: 28, opportunities: 24 },
  { month: 'Nov', threats: 31, opportunities: 27 },
  { month: 'Dec', threats: 27, opportunities: 23 },
];

export const domainOpportunityData = [
  { domain: 'Healthcare', x: 78, y: 91, z: 18.4, color: '#6366f1' },
  { domain: 'Banking', x: 85, y: 88, z: 24.1, color: '#0ea5e9' },
  { domain: 'Government', x: 92, y: 82, z: 31.2, color: '#8b5cf6' },
  { domain: 'Manufacturing', x: 65, y: 94, z: 15.9, color: '#10b981' },
  { domain: 'Education', x: 55, y: 79, z: 8.2, color: '#ef4444' },
  { domain: 'Energy', x: 88, y: 96, z: 19.6, color: '#f97316' },
  { domain: 'Telecom', x: 74, y: 86, z: 12.7, color: '#f59e0b' },
  { domain: 'Technology', x: 71, y: 83, z: 22.3, color: '#14b8a6' },
];

export const contentPerformanceData = [
  { type: 'Whitepaper', views: 45200, leads: 3240, pipeline: 8900000 },
  { type: 'Webinar', views: 28900, leads: 4100, pipeline: 12400000 },
  { type: 'Blog', views: 142000, leads: 1890, pipeline: 3200000 },
  { type: 'Landing Page', views: 67800, leads: 5670, pipeline: 18700000 },
  { type: 'Battlecard', views: 12400, leads: 890, pipeline: 4100000 },
  { type: 'Email', views: 89000, leads: 2340, pipeline: 5600000 },
];

export const industryThreatData = [
  { industry: 'Healthcare', threats: 28 },
  { industry: 'Banking', threats: 24 },
  { industry: 'Government', threats: 22 },
  { industry: 'Technology', threats: 19 },
  { industry: 'Energy', threats: 16 },
  { industry: 'Telecom', threats: 14 },
  { industry: 'Manufacturing', threats: 11 },
  { industry: 'Education', threats: 9 },
];
