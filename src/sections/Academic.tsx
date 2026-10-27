import { useLanguage } from '@/hooks/useLanguage';
import { Award, BadgeCheck, Cloud, GraduationCap, ShieldCheck } from 'lucide-react';

export default function Academic() {
  const { t, language } = useLanguage();

  const stats = [
    { key: 'google', value: '8', icon: BadgeCheck },
    { key: 'microsoft', value: '12', icon: Award },
    { key: 'aws', value: '3', icon: Cloud },
  ];

  const certifications = [
    {
      name: 'AI, AI Agents & Multi-Agent Concepts',
      org: 'Google Cloud Skills Badges',
      icon: BadgeCheck,
    },
    {
      name: 'AI Agents & Multi-Agent Architecture',
      org: 'Microsoft Azure',
      icon: Award,
    },
    {
      name: 'Cloud Skills Badges',
      org: 'Amazon AWS',
      icon: Cloud,
    },
    {
      name: 'Text Analysis & NLP Applications',
      org: 'Azure AI Foundry',
      icon: GraduationCap,
    },
    {
      name: 'Cybersecurity & Ethical Hacking',
      org: 'Ethical Hacking Certification',
      icon: ShieldCheck,
    },
  ];

  const skills = [
    {
      ar: 'أنظمة الوكلاء والوكلاء المتعددة',
      en: 'AI Agents & Multi-Agent Systems',
    },
    {
      ar: 'الاسترجاع المعزز بالتوليد (RAG)',
      en: 'Retrieval-Augmented Generation (RAG)',
    },
    {
      ar: 'تكامل واجهات البرمجة والأنظمة',
      en: 'APIs & System Integration',
    },
    {
      ar: 'تدريب النماذج وجودة البيانات',
      en: 'AI Model Training & Data Quality',
    },
    {
      ar: 'إدارة خوادم Ubuntu',
      en: 'Ubuntu Server Administration',
    },
  ];

  return (
    <section id="academic" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-purple-900/5 to-background" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div data-aos="fade-right">
            <span className="inline-block px-4 py-2 rounded-full glass text-sm text-cyan-400 mb-4">
              {t('academic.subtitle') as string}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">{t('academic.title') as string}</span>
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed mb-8">
              {t('academic.description') as string}
            </p>

            {/* Certifications */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white mb-4">
                {language === 'ar' ? 'الشهادات المعتمدة' : 'Certifications'}
              </h3>
              {certifications.map((cert, index) => {
                const Icon = cert.icon;
                return (
                  <div
                    key={index}
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                    className="flex items-center gap-4 glass rounded-xl p-4 hover:bg-white/5 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">{cert.name}</div>
                      <div className="text-sm text-gray-400">{cert.org}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Content - Stats */}
          <div className="grid gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              const label = t(`academic.stats.${stat.key}`) as string;
              
              return (
                <div
                  key={stat.key}
                  data-aos="fade-left"
                  data-aos-delay={index * 100}
                  className="glass rounded-3xl p-8 relative overflow-hidden group hover:scale-105 transition-transform duration-500"
                >
                  {/* Background Glow */}
                  <div className="absolute -right-20 -top-20 w-40 h-40 bg-purple-500/20 rounded-full blur-[60px] group-hover:bg-purple-500/30 transition-colors" />
                  
                  <div className="flex items-center gap-6 relative z-10">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <div>
                      <div className="text-5xl font-bold gradient-text mb-2">{stat.value}</div>
                      <div className="text-gray-400">{label}</div>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Training Areas */}
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="glass rounded-3xl p-6"
            >
              <h3 className="text-lg font-semibold text-white mb-4">
                {language === 'ar' ? 'المهارات التقنية' : 'Technical Skills'}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((area, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 rounded-full text-sm bg-purple-500/20 text-purple-300 border border-purple-500/30"
                  >
                    {language === 'ar' ? area.ar : area.en}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
