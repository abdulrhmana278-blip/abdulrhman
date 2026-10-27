import { useLanguage } from '@/hooks/useLanguage';
import { Target, Eye, Zap, Shield, Rocket, Heart } from 'lucide-react';

export default function About() {
  const { t, language } = useLanguage();

  const values = [
    {
      icon: Zap,
      title: language === 'ar' ? 'الابتكار' : 'Innovation',
      description:
        language === 'ar'
          ? 'تبني أحدث تقنيات الوكلاء والنماذج التوليدية لتحقيق نتائج استثنائية'
          : 'Embracing latest agent and generative technologies for exceptional results',
    },
    {
      icon: Shield,
      title: language === 'ar' ? 'الجودة' : 'Quality',
      description: language === 'ar'
        ? 'التزام بأعلى معايير الجودة في كل مشروع'
        : 'Commitment to highest quality standards in every project',
    },
    {
      icon: Rocket,
      title: language === 'ar' ? 'التميز' : 'Excellence',
      description: language === 'ar'
        ? 'السعي المستمر لتحقيق التميز والتفوق'
        : 'Continuous pursuit of excellence and superiority',
    },
    {
      icon: Heart,
      title: language === 'ar' ? 'الشغف' : 'Passion',
      description: language === 'ar'
        ? 'شغف حقيقي بما أقوم به يقود كل إنجاز'
        : 'Genuine passion for what I do drives every achievement',
    },
  ];

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="inline-block px-4 py-2 rounded-full glass text-sm text-purple-400 mb-4">
            {t('about.title') as string}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">{t('about.subtitle') as string}</span>
          </h2>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Left - Description */}
          <div data-aos="fade-right" className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              {t('about.description1') as string}
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              {t('about.description2') as string}
            </p>

            {/* Mission & Vision */}
            <div className="grid sm:grid-cols-2 gap-6 mt-8">
              <div className="glass rounded-2xl p-6 hover:bg-white/5 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {t('about.mission') as string}
                </h3>
                <p className="text-sm text-gray-400">
                  {t('about.missionText') as string}
                </p>
              </div>

              <div className="glass rounded-2xl p-6 hover:bg-white/5 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-4">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {t('about.vision') as string}
                </h3>
                <p className="text-sm text-gray-400">
                  {t('about.visionText') as string}
                </p>
              </div>
            </div>
          </div>

          {/* Right - Image/Visual */}
          <div data-aos="fade-left" className="relative">
            <div className="relative h-full min-h-[400px] glass rounded-3xl overflow-hidden">
              {/* Abstract Tech Visual */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-cyan-900/30" />
              
              {/* Animated Circles */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="relative w-64 h-64">
                  <div className="absolute inset-0 border-2 border-purple-500/30 rounded-full animate-ping" style={{ animationDuration: '3s' }} />
                  <div className="absolute inset-4 border-2 border-cyan-500/30 rounded-full animate-ping" style={{ animationDuration: '3s', animationDelay: '0.5s' }} />
                  <div className="absolute inset-8 border-2 border-purple-500/30 rounded-full animate-ping" style={{ animationDuration: '3s', animationDelay: '1s' }} />
                  
                  {/* Center Content */}
                  <div className="absolute inset-16 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center">
                    <span className="text-4xl font-bold text-white">AA</span>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute top-10 left-10 glass rounded-xl px-4 py-2 float">
                <span className="text-sm text-purple-300">
                  {language === 'ar' ? 'متخصص وكلاء AI' : 'AI Agents Specialist'}
                </span>
              </div>
              <div className="absolute bottom-10 right-10 glass rounded-xl px-4 py-2 float" style={{ animationDelay: '1s' }}>
                <span className="text-sm text-cyan-300">
                  {language === 'ar' ? 'سحابة وبنية تحتية' : 'Cloud & Infrastructure'}
                </span>
              </div>
              <div className="absolute top-1/4 right-5 glass rounded-xl px-4 py-2 float" style={{ animationDelay: '2s' }}>
                <span className="text-sm text-pink-300">
                  {language === 'ar' ? 'بيانات عربية' : 'Arabic Data'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div>
          <h3 
            data-aos="fade-up"
            className="text-2xl font-bold text-center mb-10"
          >
            <span className="gradient-text">
              {language === 'ar' ? 'قيمي' : 'My Values'}
            </span>
          </h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className="glass rounded-2xl p-6 text-center group hover:bg-white/5 transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="font-bold text-white mb-2">{value.title}</h4>
                  <p className="text-sm text-gray-400">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
