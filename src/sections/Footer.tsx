import { useState } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { 
  Send, 
  Linkedin, 
  Github, 
  Mail, 
  AtSign,
  MessageCircle,
  Briefcase,
  Store,
  MapPin, 
  ArrowUpRight,
  CheckCircle,
  Loader2
} from 'lucide-react';

// Formspree endpoint: ضع هنا رابط endpoint الخاص بك بعد إنشاء النموذج على formspree.io
// مثال: 'https://formspree.io/f/xyzabcd'
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xbggrblr';

export default function Footer() {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', message: '', company: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot: hidden field that visitors never see; only spam bots fill it, in which case the submission is ignored.
    if (formData.company) return;

    // إذا لم يتم ضبط endpoint بعد: اعرض رسالة النجاح (وضع تجريبي) وسجل تنبيهاً في وحدة التحكم
    if (!FORMSPREE_ENDPOINT) {
      console.info('Formspree endpoint not configured yet — set FORMSPREE_ENDPOINT in src/sections/Footer.tsx');
      setStatus('success');
      setFormData({ name: '', email: '', message: '', company: '' });
      setTimeout(() => setStatus('idle'), 3000);
      return;
    }

    setStatus('sending');
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: 'رسالة جديدة من موقعك الشخصي (New portfolio message)',
        }),
      });

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '', company: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/abdulrhman-amr-a246353b9', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/abdulrhmana278-blip', label: 'GitHub' },
    { icon: Mail, href: 'mailto:abdulrhmana278@gmail.com', label: 'Gmail' },
    { icon: AtSign, href: 'mailto:abdulrhmanamr@outlook.sa', label: 'Outlook' },
    { icon: MessageCircle, href: 'https://wa.me/201124362572', label: 'WhatsApp' },
    { icon: Send, href: 'https://t.me/mr_3abid', label: 'Telegram' },
    { icon: Briefcase, href: 'https://www.upwork.com/freelancers/~01d74ecc005c745488?mp_source=share', label: 'Upwork' },
    { icon: Store, href: 'https://www.fiverr.com/abdulrhmanam377', label: 'Fiverr' },
  ];

  const quickLinks = [
    { key: 'nav.home', href: '#hero' },
    { key: 'nav.services', href: '#services' },
    { key: 'nav.projects', href: '#projects' },
    { key: 'nav.academic', href: '#academic' },
    { key: 'nav.about', href: '#about' },
  ];

  return (
    <footer id="contact" className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-background" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-600/10 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contact Section */}
        <div className="section-padding">
          <div className="text-center mb-16" data-aos="fade-up">
            <span className="inline-block px-4 py-2 rounded-full glass text-sm text-cyan-400 mb-4">
              {t('footer.subtitle') as string}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">{t('footer.title') as string}</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div data-aos="fade-right">
              <form onSubmit={handleSubmit} className="glass rounded-3xl p-8">
                {status === 'success' ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-4">
                      <CheckCircle className="w-8 h-8 text-green-500" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {t('footer.form.success') as string}
                    </h3>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {/* Honeypot — invisible to humans */}
                    <div className="hidden" aria-hidden="true">
                      <label>Honeypot</label>
                      <input
                        type="text"
                        name="company"
                        tabIndex={-1}
                        autoComplete="off"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">
                        {t('footer.form.name') as string}
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                        placeholder={language === 'ar' ? 'أدخل اسمك' : 'Enter your name'}
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">
                        {t('footer.form.email') as string}
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                        placeholder={language === 'ar' ? 'أدخل بريدك الإلكتروني' : 'Enter your email'}
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">
                        {t('footer.form.message') as string}
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                        placeholder={language === 'ar' ? 'اكتب رسالتك هنا...' : 'Write your message here...'}
                      />
                    </div>
                    {status === 'error' && (
                      <div className="flex items-start gap-2 text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3">
                        <span>{t('footer.form.error') as string}</span>
                      </div>
                    )}
                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {status === 'sending' ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>{t('footer.form.sending') as string}</span>
                        </>
                      ) : (
                        <>
                          <span>{t('footer.form.send') as string}</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                )}
              </form>
            </div>

            {/* Contact Info */}
            <div data-aos="fade-left" className="space-y-8">
              {/* Social Links */}
              <div className="glass rounded-3xl p-8">
                <h3 className="text-lg font-bold text-white mb-6">
                  {t('footer.social') as string}
                </h3>
                <div className="flex flex-wrap gap-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-purple-500/20 transition-all duration-300 hover:scale-110"
                        aria-label={social.label}
                      >
                        <Icon className="w-5 h-5" />
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Contact Details */}
              <div className="glass rounded-3xl p-8 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">
                      {language === 'ar' ? 'البريد الإلكتروني' : 'Email'}
                    </div>
                    <a href="mailto:abdulrhmana278@gmail.com" className="text-white hover:text-purple-400 transition-colors">
                      abdulrhmana278@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                    <AtSign className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Outlook</div>
                    <a href="mailto:abdulrhmanamr@outlook.sa" className="text-white hover:text-cyan-400 transition-colors">
                      abdulrhmanamr@outlook.sa
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">WhatsApp</div>
                    <a href="https://wa.me/201124362572" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-400 transition-colors">
                      01124362572
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                    <Send className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Telegram</div>
                    <a href="https://t.me/mr_3abid" target="_blank" rel="noopener noreferrer" className="text-white hover:text-cyan-400 transition-colors">
                      @mr_3abid
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">
                      {language === 'ar' ? 'الموقع' : 'Location'}
                    </div>
                    <span className="text-white">{language === 'ar' ? 'مصر' : 'Egypt'}</span>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="glass rounded-3xl p-8">
                <h3 className="text-lg font-bold text-white mb-4">
                  {language === 'ar' ? 'روابط سريعة' : 'Quick Links'}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {quickLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      className="flex items-center gap-1 px-4 py-2 rounded-full bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-all text-sm"
                    >
                      {t(link.key) as string}
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Abd El Rahman Amr. {t('footer.rights') as string}
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold gradient-text">AA</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
