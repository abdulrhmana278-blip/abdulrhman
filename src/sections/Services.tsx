import { useLanguage } from '@/hooks/useLanguage';
import { Bot, Server, BookOpen, ArrowUpRight } from 'lucide-react';

interface Service {
  key: string;
  icon: React.ElementType;
  color: string;
}

export default function Services() {
  const { t, language } = useLanguage();

  const services: Service[] = [
    {
      key: 'agents',
      icon: Bot,
      color: 'from-purple-500 to-purple-600',
    },
    {
      key: 'servers',
      icon: Server,
      color: 'from-cyan-500 to-blue-600',
    },
    {
      key: 'training',
      icon: BookOpen,
      color: 'from-pink-500 to-rose-600',
    },
  ];

  return (
    <section id="services" className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-purple-600/10 rounded-full blur-[100px] -translate-y-1/2" />
      <div className="absolute top-1/3 right-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="inline-block px-4 py-2 rounded-full glass text-sm text-purple-400 mb-4">
            {t('services.title') as string}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">{t('services.subtitle') as string}</span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const title = t(`services.items.${service.key}.title`) as string;
            const description = t(`services.items.${service.key}.description`) as string;

            return (
              <div
                key={service.key}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="group relative"
              >
                <div className="relative h-full glass rounded-3xl p-8 card-hover overflow-hidden">
                  {/* Gradient Border Effect */}
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
                    {title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed mb-6">
                    {description}
                  </p>

                  {/* Learn More Link */}
                  <div className="flex items-center gap-2 text-purple-400 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <span className="text-sm font-medium">
                      {t('hero.cta') as string}
                    </span>
                    <ArrowUpRight className="w-4 h-4" />
                  </div>

                  {/* Decorative Corner */}
                  <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
                    <div className={`absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br ${service.color} opacity-20 rounded-full group-hover:scale-150 transition-transform duration-700`} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Specialties Strip */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4" data-aos="fade-up" data-aos-delay="300">
          {[
            {
              value: 'Agents',
              label: language === 'ar' ? 'أنظمة وكلاء ذكية' : 'Intelligent agent systems',
            },
            {
              value: 'RAG',
              label: language === 'ar' ? 'استرجاع معزز بالتوليد' : 'Retrieval-augmented generation',
            },
            {
              value: 'Ubuntu',
              label: language === 'ar' ? 'نشر جاهز للإنتاج' : 'Production-ready deployments',
            },
            {
              value: 'Arabic Data',
              label: language === 'ar' ? 'معالجة البيانات العربية' : 'Arabic data processing',
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="glass rounded-2xl p-4 text-center hover:bg-white/5 transition-colors"
            >
              <div className="text-2xl font-bold gradient-text mb-1">{feature.value}</div>
              <div className="text-xs text-gray-500">{feature.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
