import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  GraduationCap, 
  Globe, 
  Plane, 
  BookOpen, 
  Calendar, 
  CheckCircle, 
  PlayCircle, 
  MapPin, 
  Phone, 
  Mail, 
  ChevronRight,
  ArrowRight,
  Menu,
  X,
  Award,
  Briefcase,
  ChevronDown,
  Facebook,
  Instagram,
  UserCheck,
  MessageCircle
} from 'lucide-react';
import { translations, Language } from './translations';

const TikTokIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 2.23-1.15 4.39-2.95 5.72-1.8 1.33-4.14 1.75-6.3 1.3-2.16-.45-4.04-1.8-5.11-3.69-1.07-1.89-1.22-4.22-.4-6.22.82-2 2.5-3.56 4.54-4.23 2.04-.67 4.31-.46 6.18.57v4.15c-.88-.55-1.92-.8-2.96-.7-1.04.1-2.03.59-2.7 1.39-.67.8-1 1.87-.9 2.93.1 1.06.67 2.03 1.54 2.62.87.59 1.98.81 3.02.59 1.04-.22 1.95-.85 2.5-1.74.55-.89.77-1.97.6-3.01V.02z"/>
  </svg>
);

const FadeIn = ({ children, delay = 0, direction = 'up', className = '' }: { children: React.ReactNode, delay?: number, direction?: 'up' | 'down' | 'left' | 'right', className?: string }) => {
  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
  };

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lang, setLang] = useState<Language>('vi');

  const t = translations[lang];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: t.nav.about, id: 'about' },
    { name: t.nav.pathway, id: 'pathway' },
    { name: t.nav.features, id: 'features' },
    { name: t.nav.admission, id: 'admission' },
    { name: t.nav.videos, id: 'videos' },
  ];

  const features = [
    {
      icon: <BookOpen className="text-blue-500" size={32} />,
      title: t.features.f1Title,
      desc: t.features.f1Desc
    },
    {
      icon: <Plane className="text-red-500" size={32} />,
      title: t.features.f2Title,
      desc: t.features.f2Desc
    },
    {
      icon: <Calendar className="text-yellow-500" size={32} />,
      title: t.features.f3Title,
      desc: t.features.f3Desc
    },
    {
      icon: <Globe className="text-emerald-500" size={32} />,
      title: t.features.f4Title,
      desc: t.features.f4Desc
    }
  ];

  return (
    <div className="min-h-screen font-sans text-slate-800 bg-slate-50 selection:bg-red-200 selection:text-red-900">
      {/* Floating Social Bar */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-2 md:gap-3 p-2 pl-3 md:p-3 bg-white/90 backdrop-blur-md shadow-[-4px_0_15px_rgba(0,0,0,0.1)] rounded-l-xl md:rounded-l-2xl border border-r-0 border-slate-200">
        <a href="https://www.facebook.com/profile.php?id=61576427262006" target="_blank" rel="noopener noreferrer" className="p-2 text-[#1877F2] hover:bg-blue-50 rounded-lg md:rounded-xl transition-colors" title="Facebook">
          <Facebook className="w-6 h-6 md:w-[26px] md:h-[26px]" strokeWidth={2.5} />
        </a>
        <a href="https://www.facebook.com/profile.php?id=61576427262006" target="_blank" rel="noopener noreferrer" className="p-2 text-[#E4405F] hover:bg-pink-50 rounded-lg md:rounded-xl transition-colors" title="Instagram">
          <Instagram className="w-6 h-6 md:w-[26px] md:h-[26px]" strokeWidth={2.5} />
        </a>
        <a href="https://tiktok.com/@tourismdpmcu" target="_blank" rel="noopener noreferrer" className="p-2 text-slate-900 hover:bg-slate-100 rounded-lg md:rounded-xl transition-colors" title="TikTok">
          <TikTokIcon className="w-6 h-6 md:w-[26px] md:h-[26px]" />
        </a>
      </div>

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className={`flex items-center cursor-pointer ${lang === 'vi' ? 'gap-1.5 lg:gap-2' : 'gap-2 sm:gap-3'} flex-1 min-w-0 pr-2`} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <img 
                src="https://tourismdp.mcu.edu.tw/wp-content/uploads/sites/17/2023/02/LOGO-Banner-removebg-preview-1.png" 
                alt="銘傳大學觀光事業學系 Logo" 
                className="h-[61px] md:h-[69px] w-auto object-contain drop-shadow-md shrink-0"
                referrerPolicy="no-referrer"
              />
              <div className="flex flex-col justify-center mt-1 flex-1 min-w-0">
                <span className={`font-bold text-slate-800 leading-tight sm:whitespace-nowrap ${
                  lang === 'vi' ? 'text-[9px] sm:text-[10px] lg:text-[11px] xl:text-[15px] tracking-normal' : 'text-[12px] sm:text-[14px] lg:text-[16px] xl:text-[18px] tracking-wide'
                }`}>
                  {t.nav.program}
                </span>
              </div>
            </div>

            {/* Desktop Nav */}
            <div className={`hidden md:flex items-center ${lang === 'vi' ? 'space-x-1.5 lg:space-x-3 xl:space-x-6' : 'space-x-4 lg:space-x-6 xl:space-x-8'}`}>
              {navLinks.map((link) => (
                <button 
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`font-medium text-slate-700 hover:text-red-600 transition-colors whitespace-nowrap ${
                    lang === 'vi' ? 'text-[10px] lg:text-[11px] xl:text-[14px]' : 'text-[14px] lg:text-[15px] xl:text-[16px]'
                  }`}
                >
                  {link.name}
                </button>
              ))}
              <div className="relative group">
                <button className={`flex items-center gap-1 text-slate-700 hover:text-red-600 font-medium whitespace-nowrap ${
                  lang === 'vi' ? 'text-[10px] lg:text-[11px] xl:text-[14px]' : 'text-[14px] lg:text-[15px] xl:text-[16px]'
                }`}>
                  <Globe size={lang === 'vi' ? 14 : 18} />
                  {lang === 'zh-TW' ? '繁體中文' : lang === 'zh-CN' ? '简体中文' : 'Tiếng Việt'}
                  <ChevronDown size={lang === 'vi' ? 14 : 16} />
                </button>
                <div className="absolute right-0 mt-2 w-36 bg-white rounded-xl shadow-lg border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <button onClick={() => setLang('zh-TW')} className="block w-full text-left px-4 py-2 text-[15px] text-slate-700 hover:bg-slate-50 hover:text-red-600 rounded-t-xl">繁體中文</button>
                  <button onClick={() => setLang('zh-CN')} className="block w-full text-left px-4 py-2 text-[15px] text-slate-700 hover:bg-slate-50 hover:text-red-600">简体中文</button>
                  <button onClick={() => setLang('vi')} className="block w-full text-left px-4 py-2 text-[15px] text-slate-700 hover:bg-slate-50 hover:text-red-600 rounded-b-xl">Tiếng Việt</button>
                </div>
              </div>
              <a 
                href="https://iee.mcu.edu.tw/en/%e5%9c%8b%e9%9a%9b%e5%b0%88%e4%bf%ae%e9%83%a8-%e8%8b%b1%e8%aa%9e/"
                target="_blank"
                rel="noopener noreferrer"
                className={`bg-red-600 hover:bg-red-700 text-white rounded-full font-medium transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 whitespace-nowrap ${
                  lang === 'vi' ? 'px-2.5 py-1 text-[10px] lg:text-[11px] xl:text-[14px]' : 'px-4 py-2 text-[14px] lg:text-[15px] xl:text-[16px]'
                }`}
              >
                {t.nav.apply}
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden shrink-0 ml-1">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-slate-900 p-2 -mr-2"
              >
                {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-slate-100 py-4 px-4 flex flex-col space-y-4"
          >
            {navLinks.map((link) => (
              <button 
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-left font-medium text-slate-700 hover:text-red-600 py-2 border-b border-slate-50"
              >
                {link.name}
              </button>
            ))}
            <div className="flex gap-2 py-2">
              <button onClick={() => setLang('zh-TW')} className={`flex-1 py-2 text-sm rounded-lg ${lang === 'zh-TW' ? 'bg-red-50 text-red-600 font-bold' : 'bg-slate-50 text-slate-600'}`}>繁體</button>
              <button onClick={() => setLang('zh-CN')} className={`flex-1 py-2 text-sm rounded-lg ${lang === 'zh-CN' ? 'bg-red-50 text-red-600 font-bold' : 'bg-slate-50 text-slate-600'}`}>简体</button>
              <button onClick={() => setLang('vi')} className={`flex-1 py-2 text-sm rounded-lg ${lang === 'vi' ? 'bg-red-50 text-red-600 font-bold' : 'bg-slate-50 text-slate-600'}`}>Tiếng Việt</button>
            </div>
            <a 
              href="https://iee.mcu.edu.tw/en/%e5%9c%8b%e9%9a%9b%e5%b0%88%e4%bf%ae%e9%83%a8-%e8%8b%b1%e8%aa%9e/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 text-white px-5 py-3 rounded-xl font-medium text-center shadow-md"
            >
              {t.nav.apply}
            </a>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop" 
            alt="Travel and Tourism" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/40"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-red-100 text-red-700 border border-red-200 font-semibold text-sm mb-6 backdrop-blur-sm shadow-sm">
                {t.hero.badge}
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-4 md:mb-6">
                {t.hero.title1}<span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500">{t.hero.titleHighlight}</span>{t.hero.title2}
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-slate-700 mb-6 md:mb-8 leading-relaxed font-medium">
                {t.hero.desc}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <button onClick={() => scrollToSection('admission')} className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-bold text-base md:text-lg transition-all shadow-lg hover:shadow-red-600/30 flex items-center justify-center gap-2">
                  {t.hero.btnApply} <ChevronRight size={20} />
                </button>
                <button onClick={() => scrollToSection('videos')} className="bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 shadow-md px-6 py-3 md:px-8 md:py-4 rounded-full font-bold text-base md:text-lg transition-all flex items-center justify-center gap-2">
                  <PlayCircle size={20} className="text-red-600" /> {t.hero.btnVideo}
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg className="relative block w-[calc(100%+1.3px)] h-[50px] md:h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.33,195.2,111.5,239.65,106.13,281.43,87.6,321.39,56.44Z" className="fill-slate-50"></path>
          </svg>
        </div>
      </section>

      {/* About Program / Stats */}
      <section id="about" className="py-16 bg-slate-50 relative -mt-10 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            <FadeIn delay={0.1}>
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl shadow-slate-200/50 border-2 border-red-50 flex flex-col items-center text-center transform transition-transform hover:-translate-y-2">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center mb-4 md:mb-6 rotate-3">
                  <UserCheck className="w-7 h-7 md:w-8 md:h-8" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2 md:mb-3">{t.about.title1}</h3>
                <p className="text-sm md:text-base text-slate-600">{t.about.desc1}</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl shadow-slate-200/50 border-2 border-blue-50 flex flex-col items-center text-center transform transition-transform hover:-translate-y-2">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-4 md:mb-6 -rotate-3">
                  <MessageCircle className="w-7 h-7 md:w-8 md:h-8" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2 md:mb-3">{t.about.title2}</h3>
                <p className="text-sm md:text-base text-slate-600">{t.about.desc2}</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl shadow-slate-200/50 border-2 border-yellow-50 flex flex-col items-center text-center transform transition-transform hover:-translate-y-2">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-yellow-50 text-yellow-600 rounded-2xl flex items-center justify-center mb-4 md:mb-6 rotate-3">
                  <GraduationCap className="w-7 h-7 md:w-8 md:h-8" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2 md:mb-3">{t.about.title3}</h3>
                <p className="text-sm md:text-base text-slate-600">{t.about.desc3}</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Admission & Application */}
      <section id="admission" className="py-20 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn direction="up">
            <h2 className="text-xs md:text-sm font-bold text-red-600 tracking-wider uppercase mb-2">{t.admission.subtitle}</h2>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 md:mb-8">{t.admission.title}</h3>
            <div className="text-left max-w-3xl mx-auto mb-8 md:mb-10 space-y-4 md:space-y-6">
              <div className="bg-slate-50 p-5 md:p-6 rounded-2xl border border-slate-100 shadow-sm">
                <h4 className="text-lg md:text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
                  <CheckCircle className="text-red-500 w-5 h-5 md:w-6 md:h-6" />
                  {t.admission.targetTitle}
                </h4>
                <p className="text-sm md:text-base text-slate-600 leading-relaxed ml-7 md:ml-8">{t.admission.targetDesc}</p>
              </div>
              <div className="bg-slate-50 p-5 md:p-6 rounded-2xl border border-slate-100 shadow-sm">
                <h4 className="text-lg md:text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
                  <GraduationCap className="text-red-500 w-5 h-5 md:w-6 md:h-6" />
                  {t.admission.academicTitle}
                </h4>
                <p className="text-sm md:text-base text-slate-600 leading-relaxed ml-7 md:ml-8">{t.admission.academicDesc}</p>
              </div>
              <div className="bg-slate-50 p-5 md:p-6 rounded-2xl border border-slate-100 shadow-sm">
                <h4 className="text-lg md:text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
                  <Globe className="text-red-500 w-5 h-5 md:w-6 md:h-6" />
                  {t.admission.languageTitle}
                </h4>
                <p className="text-sm md:text-base text-slate-600 leading-relaxed ml-7 md:ml-8">{t.admission.languageDesc}</p>
              </div>
            </div>
            
            <a 
              href="https://drive.google.com/file/d/1kO5zgNEerZHvHDdk-aO4x1QynhjNSoUX/view"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-bold text-base md:text-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              {t.admission.btnApply}
              <ArrowRight size={20} />
            </a>
          </FadeIn>
        </div>
      </section>

      {/* Study Pathway */}
      <section id="pathway" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs md:text-sm font-bold text-red-600 tracking-wider uppercase mb-2">{t.pathway.subtitle}</h2>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 md:mb-6">{t.pathway.title}</h3>
            <p className="text-base md:text-lg text-slate-600">{t.pathway.desc}</p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-red-100 via-red-300 to-blue-100 rounded-full"></div>

            <div className="space-y-12 md:space-y-0 relative">
              {/* Year 1 */}
              <FadeIn direction="left">
                <div className="md:flex items-center justify-between w-full mb-12">
                  <div className="md:w-5/12 mb-6 md:mb-0 md:text-right pr-0 md:pr-8">
                    <h4 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">{t.pathway.year1}</h4>
                    <p className="text-sm md:text-base text-slate-600 mb-4">{t.pathway.year1Desc}</p>
                    <ul className="space-y-2 inline-block text-left text-sm md:text-base">
                      <li className="flex items-center gap-2 text-slate-700"><CheckCircle size={16} className="text-red-500" /> {t.pathway.y1_1}</li>
                      <li className="flex items-center gap-2 text-slate-700"><CheckCircle size={16} className="text-red-500" /> {t.pathway.y1_2}</li>
                      <li className="flex items-center gap-2 text-slate-700"><CheckCircle size={16} className="text-red-500" /> {t.pathway.y1_3}</li>
                    </ul>
                  </div>
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-red-600 border-4 border-white shadow-lg items-center justify-center text-white font-bold z-10">
                    1
                  </div>
                  <div className="md:w-5/12 pl-0 md:pl-8">
                    <img src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop" alt="Language learning" className="rounded-2xl shadow-lg object-cover h-64 w-full" referrerPolicy="no-referrer" />
                  </div>
                </div>
              </FadeIn>

              {/* Year 2-5 */}
              <FadeIn direction="right">
                <div className="md:flex items-center justify-between w-full flex-row-reverse mb-12">
                  <div className="md:w-5/12 mb-6 md:mb-0 pl-0 md:pl-8">
                    <h4 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">{t.pathway.year2_5}</h4>
                    <p className="text-sm md:text-base text-slate-600 mb-4">{t.pathway.year2_5Desc}</p>
                    <ul className="space-y-3 text-sm md:text-base">
                      <li className="flex items-start gap-2 text-slate-700">
                        <CheckCircle size={18} className="text-blue-500 mt-0.5 flex-shrink-0" /> 
                        <span>{t.pathway.y2_1}</span>
                      </li>
                      <li className="flex items-start gap-2 text-slate-700">
                        <CheckCircle size={18} className="text-blue-500 mt-0.5 flex-shrink-0" /> 
                        <span>{t.pathway.y2_2}</span>
                      </li>
                      <li className="flex items-start gap-2 text-slate-700">
                        <CheckCircle size={18} className="text-blue-500 mt-0.5 flex-shrink-0" /> 
                        <span>{t.pathway.y2_3}</span>
                      </li>
                      <li className="flex items-start gap-2 text-slate-700">
                        <CheckCircle size={18} className="text-blue-500 mt-0.5 flex-shrink-0" /> 
                        <span>{t.pathway.y2_4}</span>
                      </li>
                    </ul>
                  </div>
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-blue-600 border-4 border-white shadow-lg items-center justify-center text-white font-bold z-10">
                    2-5
                  </div>
                  <div className="md:w-5/12 pr-0 md:pr-8">
                    <img src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop" alt="Tourism studies" className="rounded-2xl shadow-lg object-cover h-64 w-full" referrerPolicy="no-referrer" />
                  </div>
                </div>
              </FadeIn>

              {/* Graduation */}
              <FadeIn direction="left">
                <div className="md:flex items-center justify-between w-full">
                  <div className="md:w-5/12 mb-6 md:mb-0 md:text-right pr-0 md:pr-8">
                    <h4 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">{t.pathway.future}</h4>
                    <p className="text-sm md:text-base text-slate-600 mb-4">{t.pathway.futureDesc}</p>
                    <ul className="space-y-2 inline-block text-left text-sm md:text-base">
                      <li className="flex items-center gap-2 text-slate-700"><CheckCircle size={16} className="text-yellow-500" /> {t.pathway.f1}</li>
                      <li className="flex items-center gap-2 text-slate-700"><CheckCircle size={16} className="text-yellow-500" /> {t.pathway.f2}</li>
                      <li className="flex items-center gap-2 text-slate-700"><CheckCircle size={16} className="text-yellow-500" /> {t.pathway.f3}</li>
                    </ul>
                  </div>
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-yellow-500 border-4 border-white shadow-lg items-center justify-center text-white font-bold z-10">
                    <GraduationCap size={20} />
                  </div>
                  <div className="md:w-5/12 pl-0 md:pl-8">
                    <img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop" alt="Graduation" className="rounded-2xl shadow-lg object-cover h-64 w-full" referrerPolicy="no-referrer" />
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Course Features */}
      <section id="features" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="text-xs md:text-sm font-bold text-red-600 tracking-wider uppercase mb-2">{t.features.subtitle}</h2>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 md:mb-6">{t.features.title}</h3>
            <p className="text-base md:text-lg text-slate-600">{t.features.desc}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="h-full">
                <FadeIn delay={idx * 0.1} direction="up" className="h-full">
                  <div className="bg-white rounded-2xl p-6 md:p-8 shadow-md hover:shadow-xl transition-shadow border border-slate-100 h-full flex flex-col">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-slate-50 flex items-center justify-center mb-4 md:mb-6 shrink-0">
                      {feature.icon}
                    </div>
                    <h4 className="text-lg md:text-xl font-bold text-slate-900 mb-2 md:mb-3">{feature.title}</h4>
                    <p className="text-sm md:text-base text-slate-600 leading-relaxed flex-grow">{feature.desc}</p>
                  </div>
                </FadeIn>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section id="videos" className="py-24 bg-slate-900 text-white overflow-hidden relative">
        {/* Decorative background */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
          <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-red-600 blur-[120px]"></div>
          <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-blue-600 blur-[120px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="text-xs md:text-sm font-bold text-red-400 tracking-wider uppercase mb-2">{t.videos.subtitle}</h2>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 md:mb-6">{t.videos.title}</h3>
            <p className="text-base md:text-lg text-slate-300">{t.videos.desc}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            <FadeIn delay={0.1}>
              <div className="flex flex-col h-full">
                <div className="rounded-2xl overflow-hidden aspect-video bg-slate-800 border border-slate-700 shadow-2xl mb-4 md:mb-5">
                  <iframe 
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/QUDaD-ZFhTE" 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="px-2 text-center">
                  <h4 className="text-xl md:text-2xl font-bold text-white">{t.videos.v1Title}</h4>
                  <p className="text-sm md:text-base text-slate-300 mt-1 md:mt-2">{t.videos.v1Desc}</p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="flex flex-col h-full">
                <div className="group relative rounded-2xl overflow-hidden aspect-video bg-slate-800 border border-slate-700 shadow-2xl cursor-pointer mb-4 md:mb-5">
                  <img src="https://images.unsplash.com/photo-1470076892663-af684e5e15af?q=80&w=1917&auto=format&fit=crop" alt="Lifestyle Video Thumbnail" className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-blue-600/90 flex items-center justify-center text-white transform group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-600/50">
                      <PlayCircle size={32} className="ml-1 md:w-10 md:h-10" />
                    </div>
                  </div>
                </div>
                <div className="px-2 text-center">
                  <h4 className="text-xl md:text-2xl font-bold text-white">{t.videos.v2Title}</h4>
                  <p className="text-sm md:text-base text-slate-300 mt-1 md:mt-2">{t.videos.v2Desc}</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <footer className="bg-slate-100 text-slate-600 py-16 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12 items-center">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 md:gap-4">
                <img 
                  src="https://tourismdp.mcu.edu.tw/wp-content/uploads/sites/17/2023/02/LOGO-Banner-removebg-preview-1.png" 
                  alt="銘傳大學觀光事業學系 Logo" 
                  className="h-12 sm:h-16 md:h-20 w-auto object-contain drop-shadow-sm"
                  referrerPolicy="no-referrer"
                />
                <div className="flex flex-col justify-center mt-1 md:mt-2">
                  <span className="font-bold text-sm sm:text-base md:text-lg text-slate-900 leading-tight">{t.nav.program}</span>
                </div>
              </div>
            </div>

            <div>
              <div className="text-sm leading-relaxed max-w-md space-y-1 mb-4">
                <p>{t.footer.addressLine}</p>
                <p>{t.footer.phoneLine}</p>
                <p>{t.footer.emailLine}</p>
              </div>
              <div className="flex gap-4">
                <a href="https://www.facebook.com/profile.php?id=61576427262006" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#1877F2] transition-colors" title="Facebook">
                  <Facebook size={20} />
                </a>
                <a href="https://www.facebook.com/profile.php?id=61576427262006" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#E4405F] transition-colors" title="Instagram">
                  <Instagram size={20} />
                </a>
                <a href="https://tiktok.com/@tourismdpmcu" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-900 transition-colors" title="TikTok">
                  <TikTokIcon size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-300 text-sm text-center md:text-left flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} {t.footer.rights}</p>
            <div className="mt-4 md:mt-0 space-x-4">
              <a href="#" className="hover:text-slate-900 transition-colors">{t.footer.privacy}</a>
              <a href="#" className="hover:text-slate-900 transition-colors">{t.footer.terms}</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

