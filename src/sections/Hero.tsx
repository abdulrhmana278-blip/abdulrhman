import { useEffect, useRef } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { ArrowDown, Sparkles, Cpu, Code2, Brain } from 'lucide-react';

export default function Hero() {
  const { t, language } = useLanguage();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Particle Animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
    }

    const particles: Particle[] = [];
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2,
      });
    }

    let animationId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, i) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(139, 92, 246, ${particle.opacity})`;
        ctx.fill();

        // Connect particles
        particles.slice(i + 1).forEach((other) => {
          const dx = particle.x - other.x;
          const dy = particle.y - other.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = `rgba(139, 92, 246, ${0.1 * (1 - distance / 150)})`;
            ctx.stroke();
          }
        });
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
      />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background z-10" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[128px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[128px]" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-50 z-0" />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Floating Icons */}
        <div className="absolute top-20 left-10 float opacity-50">
          <Cpu className="w-8 h-8 text-purple-500" />
        </div>
        <div className="absolute top-40 right-20 float opacity-50" style={{ animationDelay: '1s' }}>
          <Code2 className="w-6 h-6 text-cyan-500" />
        </div>
        <div className="absolute bottom-40 left-20 float opacity-50" style={{ animationDelay: '2s' }}>
          <Brain className="w-10 h-10 text-purple-400" />
        </div>

        {/* Badge */}
        <div
          data-aos="fade-down"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
        >
          <Sparkles className="w-4 h-4 text-purple-400" />
          <span className="text-sm text-gray-300">
            {t('hero.greeting') as string}
          </span>
        </div>

        {/* Name */}
        <h1
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
        >
          <span className="gradient-text neon-text-purple">
            {t('hero.name') as string}
          </span>
        </h1>

        {/* Title */}
        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-xl md:text-2xl lg:text-3xl text-gray-300 max-w-4xl mx-auto mb-6 leading-relaxed"
        >
          {t('hero.title') as string}
        </p>

        {/* Subtitle */}
        <p
          data-aos="fade-up"
          data-aos-delay="300"
          className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto mb-12"
        >
          {t('hero.subtitle') as string}
        </p>

        {/* CTA Button */}
        <div data-aos="zoom-in" data-aos-delay="400">
          <button
            onClick={scrollToContact}
            className="btn-primary inline-flex items-center gap-3 group"
          >
            <span>{t('hero.cta') as string}</span>
            <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </button>
        </div>

        {/* Stats */}
        <div
          data-aos="fade-up"
          data-aos-delay="500"
          className="mt-20 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
        >
          {[
            {
              value: '23',
              label: language === 'ar' ? 'شارات وشهادات معتمدة' : 'Certified Badges & Certifications',
            },
            {
              value: '6',
              label: language === 'ar' ? 'تخصصات تقنية' : 'Technical Specialties',
            },
            {
              value: '3',
              label: language === 'ar' ? 'خدمات احترافية' : 'Professional Services',
            },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl md:text-3xl font-bold gradient-text mb-1">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <div className="w-6 h-10 rounded-full border-2 border-purple-500/50 flex justify-center pt-2">
          <div className="w-1 h-2 bg-purple-500 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
