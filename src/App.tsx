import React, { useEffect, useState } from 'react';
import {
  ArrowDown, ArrowUp, ArrowUpRight, CheckCircle2, Cloud, Code2, Container,
  Database, ExternalLink, GitBranch, Globe2, Layers3,
  Mail, MapPin, Menu, Moon, Network, Server, ShieldCheck, Sparkles,
  Terminal, Workflow, X, Zap
} from 'lucide-react';

const skills = [
  { group: 'CI/CD & Source Control', icon: GitBranch, items: [['Git / GitLab','Strong'],['Jenkins','Strong'],['Nexus','Intermediate'],['CI/CD Pipelines','Strong']] },
  { group: 'Infrastructure', icon: Server, items: [['Linux','Strong'],['Nginx','Strong'],['Docker','Intermediate'],['Bash / Shell','Intermediate']] },
  { group: 'Cloud & Automation', icon: Cloud, items: [['AWS','Basic'],['Kubernetes','Basic'],['Terraform','Basic'],['Ansible','Basic']] },
  { group: 'Database & Security', icon: ShieldCheck, items: [['MySQL','Intermediate'],['Fail2ban','Intermediate'],['SSL / TLS','Intermediate'],['Backups','Intermediate']] },
];

const learning = [
  ['AWS','Building stronger cloud fundamentals and deployment workflows.',70],
  ['Kubernetes','Learning container orchestration, services and production patterns.',50],
  ['Terraform','Infrastructure as Code and repeatable environments.',40],
  ['Ansible','Configuration management and server automation.',40],
];

function App() {
  const [dark, setDark] = useState(true);
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? 'dark' : 'light';
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [dark]);

  const closeMenu = () => setMenu(false);

  return (
    <div className="site-shell">
      <header className={`nav ${scrolled ? 'nav-scrolled' : ''}`}>
        <a href="#home" className="brand" onClick={closeMenu}><span>AJ</span><b>AJITHREDDY</b></a>
        <nav className={menu ? 'nav-links open' : 'nav-links'}>
          {['about','skills','learning','projects','experience','contact'].map(id => <a key={id} href={`#${id}`} onClick={closeMenu}>{id}</a>)}
          <a className="nav-cta" href="mailto:ajithreddyavula@gmail.com">Get in touch <ArrowUpRight size={15}/></a>
        </nav>
        <div className="nav-actions">
          <button className="icon-btn" onClick={() => setDark(!dark)} aria-label="Toggle theme">{dark ? <Moon size={17}/> : <Sparkles size={17}/>}</button>
          <button className="menu-btn" onClick={() => setMenu(!menu)} aria-label="Menu">{menu ? <X/> : <Menu/>}</button>
        </div>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="hero-grid-bg" />
          <div className="hero-copy reveal">
            <div className="eyebrow"><span className="pulse-dot"/> DEVOPS ENGINEER · HYDERABAD</div>
            <h1>Automate.<br/><span>Deploy.</span><br/>Operate.</h1>
            <p className="hero-lead">I build reliable deployment workflows, manage Linux infrastructure, and turn development changes into repeatable production releases.</p>
            <div className="hero-actions">
              <a className="btn primary" href="#projects">View Projects <ArrowDown size={17}/></a>
              <a className="btn ghost" href="mailto:ajithreddyavula@gmail.com">Email Me <Mail size={17}/></a>
            </div>
            <div className="quick-stack"><span>Linux</span><span>GitLab</span><span>Jenkins</span><span>Docker</span><span>Nginx</span></div>
          </div>
          <div className="hero-visual reveal delay-1">
            <div className="orbit orbit-one"/><div className="orbit orbit-two"/>
            <div className="photo-card"><div className="photo-glow"/><img src={`${import.meta.env.BASE_URL}ajith.jpg`} alt="Ajithreddy Avula, DevOps Engineer"/><div className="photo-label"><Terminal size={16}/><span>production-ready</span></div></div>
            <div className="float-card pipeline-card"><div className="mini-icon"><Workflow size={17}/></div><div><strong>CI/CD Pipeline</strong><small>GitLab → Jenkins → Server</small></div><CheckCircle2 size={18} className="ok"/></div>
            <div className="float-card infra-card"><Server size={17}/><span>Linux Infrastructure</span></div>
          </div>
        </section>

        <section id="about" className="section about-section">
          <div className="section-heading"><span>01 / ABOUT</span><h2>Building systems that<br/><em>keep moving.</em></h2></div>
          <div className="about-grid">
            <div className="about-text"><p className="big-copy">I'm <strong>Ajithreddy Avula</strong>, a DevOps Engineer focused on automation, deployment, Linux administration and production operations.</p><p>I work across source control, CI/CD, servers, reverse proxies, containers, databases and security. My goal is simple: make deployments repeatable, reduce manual work and keep applications available.</p><div className="identity-row"><div><span>ROLE</span><b>DevOps Engineer</b></div><div><span>COMPANY</span><b>PMRCORETECH.COM</b></div><div><span>LOCATION</span><b>Hyderabad, India</b></div></div></div>
            <div className="feature-grid">
              <Feature icon={<Zap/>} title="Automation" text="CI/CD pipelines, Jenkins jobs and deployment scripts that reduce repetitive work."/>
              <Feature icon={<Network/>} title="Infrastructure" text="Linux servers, Nginx, Docker, networking and production configuration."/>
              <Feature icon={<ShieldCheck/>} title="Reliability" text="Backups, security controls, troubleshooting and stable release workflows."/>
            </div>
          </div>
        </section>

        <section id="skills" className="section skills-section">
          <div className="section-heading centered"><span>02 / SKILLS</span><h2>Tools I use to <em>ship.</em></h2><p>My current DevOps toolkit, grouped by where each technology fits in the delivery lifecycle.</p></div>
          <div className="skill-grid">{skills.map(({group, icon: Icon, items}) => <div className="skill-card" key={group}><div className="skill-title"><div className="skill-icon"><Icon size={20}/></div><h3>{group}</h3></div><div className="skill-list">{items.map(([name, level]) => <div className="skill-item" key={name}><span>{name}</span><small>{level}</small></div>)}</div></div>)}</div>
        </section>

        <section id="learning" className="section learning-section">
          <div className="learning-head"><div className="section-heading"><span>03 / CURRENTLY LEARNING</span><h2>Always improving the<br/><em>next layer.</em></h2></div><div className="learning-note"><Sparkles size={19}/><p>My focus is expanding from strong day-to-day DevOps operations into deeper cloud, orchestration and infrastructure automation.</p></div></div>
          <div className="learning-list">{learning.map(([name, desc, value]) => <div className="learning-item" key={name as string}><div className="learning-top"><div><h3>{name as string}</h3><p>{desc as string}</p></div><strong>{value as number}%</strong></div><div className="progress"><span style={{width:`${value}%`}}/></div></div>)}</div>
        </section>

        <section id="projects" className="section projects-section">
          <div className="section-heading"><span>04 / PROJECTS</span><h2>Work that connects<br/><em>code to production.</em></h2></div>
          <div className="project-list">
            <Project number="01" title="SVUE Smart Water Automation" type="CI/CD · Infrastructure · Deployment" icon={<Container/>} description="A smart water automation platform where I worked on the DevOps delivery workflow, connecting developer changes to repeatable server deployments." tags={['Jenkins','GitLab','Docker','Linux','Nginx','Nexus','MySQL']} />
            <Project number="02" title="Employee Attendance Portal" type="Web Application · Operations" icon={<Database/>} description="An employee attendance platform with attendance rules, work updates, leave requests, location validation, announcements and admin functionality." tags={['PHP','MySQL','JavaScript','HTML','CSS']} />
          </div>
        </section>

        <section className="section flow-section">
          <div className="section-heading centered"><span>05 / DELIVERY FLOW</span><h2>From commit to <em>production.</em></h2></div>
          <div className="flow"><FlowStep icon={<GitBranch/>} label="GitLab"/><FlowLine/><FlowStep icon={<Workflow/>} label="Jenkins"/><FlowLine/><FlowStep icon={<Layers3/>} label="Nexus / Build"/><FlowLine/><FlowStep icon={<Container/>} label="Docker"/><FlowLine/><FlowStep icon={<Server/>} label="Linux + Nginx"/></div>
        </section>

        <section id="experience" className="section experience-section">
          <div className="section-heading"><span>06 / EXPERIENCE</span><h2>DevOps in the<br/><em>real world.</em></h2></div>
          <div className="timeline"><div className="timeline-line"/><div className="timeline-item"><div className="timeline-dot"/><div className="timeline-date">AUG 2025 — PRESENT</div><div className="timeline-content"><h3>DevOps Engineer</h3><h4>PMRCORETECH.COM · Hyderabad</h4><ul><li>Built and maintained CI/CD workflows using GitLab and Jenkins.</li><li>Managed Linux servers, Nginx configuration and application deployments.</li><li>Worked with Docker, Nexus, MySQL backups and production troubleshooting.</li><li>Applied security and operational practices including Fail2ban and TLS configuration.</li></ul></div></div></div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="contact-panel"><div><span className="eyebrow">07 / CONTACT</span><h2>Let's build something<br/><em>reliable.</em></h2><p>Have a DevOps opportunity, project or technical conversation? Let's connect.</p></div><div className="contact-links"><a href="mailto:ajithreddyavula@gmail.com"><Mail/><span><small>EMAIL</small>ajithreddyavula@gmail.com</span><ArrowUpRight/></a><a href="https://github.com/Ajithreddy3515" target="_blank" rel="noreferrer"><Code2/><span><small>GITHUB</small>Ajithreddy3515</span><ArrowUpRight/></a><a href="https://www.linkedin.com/in/ajith-reddy-avula" target="_blank" rel="noreferrer"><Network/><span><small>LINKEDIN</small>Ajith Reddy Avula</span><ArrowUpRight/></a></div></div>
        </section>
      </main>

      <footer><span>© {new Date().getFullYear()} Ajithreddy Avula</span><span>DEVOPS ENGINEER · AUTOMATE · DEPLOY · OPERATE</span><a href="#home"><ArrowUp size={15}/></a></footer>
    </div>
  );
}

function Feature({icon,title,text}:{icon:React.ReactNode;title:string;text:string}) { return <div className="feature-card"><div className="feature-icon">{icon}</div><h3>{title}</h3><p>{text}</p></div> }
function Project({number,title,type,icon,description,tags}:{number:string;title:string;type:string;icon:React.ReactNode;description:string;tags:string[]}) { return <article className="project-card"><div className="project-number">{number}</div><div className="project-main"><div className="project-icon">{icon}</div><div><span className="project-type">{type}</span><h3>{title}</h3><p>{description}</p><div className="tags">{tags.map(t=><span key={t}>{t}</span>)}</div></div></div><a href="#contact" className="project-link">Discuss project <ArrowUpRight size={17}/></a></article> }
function FlowStep({icon,label}:{icon:React.ReactNode;label:string}) { return <div className="flow-step"><div>{icon}</div><span>{label}</span></div> }
function FlowLine(){return <div className="flow-line"><span/></div>}

export default App;
