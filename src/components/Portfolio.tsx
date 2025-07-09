
import React, { useState } from 'react';
import TerminalWindow from './TerminalWindow';
import { Code, Zap, Flame, Terminal, ExternalLink } from 'lucide-react';

interface Project {
  id: string;
  name: string;
  type: 'webapp' | 'api' | 'mobile' | 'desktop';
  status: 'deployed' | 'building' | 'chaos-mode';
  description: string;
  tags: string[];
  color: string;
}

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projects: Project[] = [
    {
      id: '001',
      name: 'NEXUS_CORE',
      type: 'webapp',
      status: 'deployed',
      description: 'Revolutionary SaaS platform that redefined user engagement',
      tags: ['React', 'Node.js', 'AI/ML', 'Real-time'],
      color: 'ares-red'
    },
    {
      id: '002', 
      name: 'QUANTUM_API',
      type: 'api',
      status: 'chaos-mode',
      description: 'High-performance API handling millions of requests per second',
      tags: ['Go', 'Redis', 'PostgreSQL', 'Docker'],
      color: 'ares-blue'
    },
    {
      id: '003',
      name: 'SHADOW_MOBILE',
      type: 'mobile',
      status: 'building',
      description: 'Next-gen mobile experience with AR integration',
      tags: ['React Native', 'AR/VR', 'WebGL', 'Firebase'],
      color: 'ares-green'
    },
    {
      id: '004',
      name: 'FORGE_DESKTOP',
      type: 'desktop',
      status: 'deployed',
      description: 'Cross-platform development environment for power users',
      tags: ['Electron', 'Tauri', 'WebAssembly', 'AI'],
      color: 'ares-violet'
    }
  ];

  const filters = [
    { key: 'all', label: 'ALL_PROJECTS', icon: Terminal },
    { key: 'webapp', label: 'WEB_APPS', icon: Code },
    { key: 'api', label: 'APIs', icon: Zap },
    { key: 'mobile', label: 'MOBILE', icon: Flame }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.type === activeFilter);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'deployed': return 'text-ares-green';
      case 'building': return 'text-ares-blue';
      case 'chaos-mode': return 'text-ares-red animate-flicker';
      default: return 'text-gray-400';
    }
  };

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-brutalist font-black mb-6 text-white">
            DIGITAL_ARSENAL
          </h2>
          <p className="text-xl font-terminal text-ares-green">
            Projects forged in the fires of controlled chaos
          </p>
        </div>

        {/* Terminal Filter Interface */}
        <TerminalWindow title="project_filter.exe" className="mb-12">
          <div className="mb-4">
            <span className="text-ares-green">ares@forge:~$ </span>
            <span className="text-white">ls --filter-by-category</span>
          </div>
          <div className="flex flex-wrap gap-4">
            {filters.map(({ key, label, icon: Icon }) => (
              <button
                key={key}
                onClick={() => setActiveFilter(key)}
                className={`flex items-center gap-2 px-4 py-2 border transition-all duration-200 font-terminal ${
                  activeFilter === key
                    ? 'border-ares-green bg-ares-green text-ares-black'
                    : 'border-gray-600 text-gray-400 hover:border-ares-green hover:text-ares-green'
                }`}
              >
                <Icon size={16} />
                {label}
              </button>
            ))}
          </div>
        </TerminalWindow>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`neon-border border-${project.color} p-6 group hover:scale-105 transition-transform duration-300`}
            >
              {/* Project Header */}
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className={`text-2xl font-brutalist text-${project.color} mb-2`}>
                    {project.name}
                  </h3>
                  <div className="flex items-center gap-2 text-sm font-terminal">
                    <span className="text-gray-400">STATUS:</span>
                    <span className={`${getStatusColor(project.status)} uppercase`}>
                      {project.status}
                    </span>
                  </div>
                </div>
                <div className={`text-${project.color} opacity-70 group-hover:opacity-100 transition-opacity`}>
                  <ExternalLink size={24} />
                </div>
              </div>

              {/* Project Description */}
              <p className="text-gray-300 font-terminal mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-ares-gray border border-gray-600 text-xs font-terminal text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Project ID */}
              <div className="text-xs font-terminal text-gray-500 text-right">
                PROJECT_ID: {project.id}
              </div>
            </div>
          ))}
        </div>

        {/* Terminal Command */}
        <div className="mt-16 text-center">
          <TerminalWindow title="deploy.sh">
            <div className="space-y-2">
              <div><span className="text-ares-green">ares@forge:~$ </span>./deploy_legendary_project.sh</div>
              <div className="text-ares-blue">Initializing chaos protocol...</div>
              <div className="text-ares-green">✓ Ready to forge your next digital legend</div>
            </div>
          </TerminalWindow>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
