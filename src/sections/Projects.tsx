import { useLanguage } from '@/hooks/useLanguage';
import {
  Bot,
  Building2,
  Feather,
  MessageCircle,
  Type,
  Pill,
  ArrowUpRight,
  Github,
} from 'lucide-react';

interface Project {
  key: string;
  icon: React.ElementType;
  color: string;
  tags: string[];
  link?: string;
}

export default function Projects() {
  const { t } = useLanguage();

  const projects: Project[] = [
    {
      key: 'argus',
      icon: Bot,
      color: 'from-purple-500 to-purple-600',
      tags: ['Multi-Agent', 'Python', 'LangChain'],
    },
    {
      key: 'vira',
      icon: Building2,
      color: 'from-cyan-500 to-blue-600',
      tags: ['Multi-Agent', 'Python', 'LangChain'],
    },
    {
      key: 'yaqut',
      icon: Feather,
      color: 'from-pink-500 to-rose-600',
      tags: ['Multi-Agent', 'RAG', 'Embeddings', 'Vector DB'],
    },
    {
      key: 'stok',
      icon: MessageCircle,
      color: 'from-green-500 to-emerald-600',
      tags: ['WhatsApp API', 'AI Agents', 'Automation'],
    },
    {
      key: 'nlp',
      icon: Type,
      color: 'from-purple-500 to-blue-600',
      tags: ['Arabic NLP', 'Data Annotation', '250K Context'],
    },
    {
      key: 'pharm',
      icon: Pill,
      color: 'from-cyan-500 to-purple-600',
      tags: ['Multi-Agent', 'RAG', 'Vector DB'],
    },
  ];

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/3 left-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-600/10 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="inline-block px-4 py-2 rounded-full glass text-sm text-purple-400 mb-4">
            {t('projects.title') as string}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">{t('projects.subtitle') as string}</span>
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            const title = t(`projects.items.${project.key}.title`) as string;
            const description = t(`projects.items.${project.key}.description`) as string;

            return (
              <div
                key={project.key}
                data-aos="fade-up"
                data-aos-delay={(index % 3) * 100}
                className="group relative"
              >
                <div className="relative h-full glass rounded-3xl p-8 card-hover overflow-hidden">
                  {/* Gradient Border Effect */}
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
                    {title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed mb-6">
                    {description}
                  </p>

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full text-xs bg-white/5 text-gray-400 border border-white/10 group-hover:border-purple-500/30 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Project Link */}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span className="text-sm font-medium">GitHub</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  )}

                  {/* Decorative Corner */}
                  <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
                    <div className={`absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br ${project.color} opacity-20 rounded-full group-hover:scale-150 transition-transform duration-700`} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
