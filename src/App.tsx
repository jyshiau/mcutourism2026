import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  GraduationCap, 
  Globe, 
  Plane, 
  BookOpen, 
  Users, 
  Calendar, 
  CheckCircle, 
  PlayCircle, 
  MapPin, 
  Phone, 
  Mail, 
  ChevronRight,
  Menu,
  X,
  Award,
  Briefcase
} from 'lucide-react';

const FadeIn = ({ children, delay = 0, direction = 'up' }: { children: React.ReactNode, delay?: number, direction?: 'up' | 'down' | 'left' | 'right' }) => {
  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
  };

  return (
    <motion.div
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
    { name: '關於專班', id: 'about' },
    { name: '修讀流程', id: 'pathway' },
    { name: '課程特色', id: 'features' },
    { name: '招生與申請', id: 'admission' },
    { name: '影音專區', id: 'videos' },
  ];

  const features = [
    {
      icon: <BookOpen className="text-blue-500" size={32} />,
      title: "智慧觀光與科技應用",
      desc: "涵蓋人工智慧概論、程式設計、旅遊電子商務與數據應用，結合數位科技培養創新觀光人才。"
    },
    {
      icon: <Plane className="text-red-500" size={32} />,
      title: "航空與旅行業經營",
      desc: "學習航空客運票務、空地勤服務管理、旅行業經營與訂位系統，掌握旅遊產業核心實務。"
    },
    {
      icon: <Calendar className="text-yellow-500" size={32} />,
      title: "會展與節慶活動策劃",
      desc: "深入會議與展覽管理、節慶活動規劃設計、觀光整合行銷傳播，具備大型活動策展能力。"
    },
    {
      icon: <Globe className="text-emerald-500" size={32} />,
      title: "永續觀光與全球實習",
      desc: "接軌國際趨勢，學習ESG觀光企業永續經營，並提供海內外企業實習與職場實務專題。"
    }
  ];

  return (
    <div className="min-h-screen font-sans text-slate-800 bg-slate-50 selection:bg-red-200 selection:text-red-900">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <img 
                src="https://tourismdp.mcu.edu.tw/wp-content/uploads/sites/17/2023/02/LOGO-Banner-removebg-preview-1.png" 
                alt="銘傳大學觀光事業學系 Logo" 
                className="h-14 md:h-16 w-auto object-contain drop-shadow-md"
                referrerPolicy="no-referrer"
              />
              <div className="flex flex-col justify-center mt-1">
                <span className="font-bold text-sm md:text-base tracking-wide text-slate-800">
                  國際專修部(越南專班)
                </span>
              </div>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <button 
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="font-medium text-sm text-slate-700 hover:text-red-600 transition-colors"
                >
                  {link.name}
                </button>
              ))}
              <a 
                href="https://iee.mcu.edu.tw/%E5%9C%8B%E9%9A%9B%E5%B0%88%E4%BF%AE%E9%83%A8/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-full font-medium text-sm transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                立即報名
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-slate-900"
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
            <a 
              href="https://iee.mcu.edu.tw/%E5%9C%8B%E9%9A%9B%E5%B0%88%E4%BF%AE%E9%83%A8/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 text-white px-5 py-3 rounded-xl font-medium text-center shadow-md"
            >
              立即報名
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
                熱烈招生中
              </span>
              <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
                啟動你的<span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500">國際觀光</span>夢想！
              </h1>
              <p className="text-lg md:text-xl text-slate-700 mb-8 leading-relaxed font-medium">
                專為越南高中生打造的「1+4」升學計畫。第一年強化華語能力，後四年深入學習觀光專業，接軌國際就業市場，讓世界成為你的舞台！
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={() => scrollToSection('admission')} className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-red-600/30 flex items-center justify-center gap-2">
                  了解申請資訊 <ChevronRight size={20} />
                </button>
                <button onClick={() => scrollToSection('videos')} className="bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 shadow-md px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2">
                  <PlayCircle size={20} className="text-red-600" /> 觀看宣傳影片
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FadeIn delay={0.1}>
              <div className="bg-white rounded-2xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col items-center text-center transform transition-transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 rotate-3">
                  <Globe size={32} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">免華語基礎</h3>
                <p className="text-slate-600">入學免提供華語檢定證明，第一年密集培訓，從零開始打好語言基礎。</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="bg-white rounded-2xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col items-center text-center transform transition-transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center mb-6 -rotate-3">
                  <Award size={32} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">1+4 完整學制</h3>
                <p className="text-slate-600">1年華語先修 + 4年觀光專業課程，畢業取得銘傳大學正式學士學位。</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="bg-white rounded-2xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col items-center text-center transform transition-transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-yellow-50 text-yellow-600 rounded-2xl flex items-center justify-center mb-6 rotate-3">
                  <Briefcase size={32} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">實務就業導向</h3>
                <p className="text-slate-600">豐富的產學合作與海內外實習機會，畢業即具備國際觀光產業即戰力。</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Study Pathway */}
      <section id="pathway" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-red-600 tracking-wider uppercase mb-2">Study Pathway</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">修讀流程 (1+4 計畫)</h3>
            <p className="text-lg text-slate-600">為越南學生量身打造的五年學習藍圖，從語言學習到專業養成，步步邁向成功。</p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-red-100 via-red-300 to-blue-100 rounded-full"></div>

            <div className="space-y-12 md:space-y-0 relative">
              {/* Year 1 */}
              <FadeIn direction="left">
                <div className="md:flex items-center justify-between w-full mb-12">
                  <div className="md:w-5/12 mb-6 md:mb-0 md:text-right pr-0 md:pr-8">
                    <h4 className="text-2xl font-bold text-slate-900 mb-2">第 1 年：華語先修</h4>
                    <p className="text-slate-600 mb-4">在國際專修部進行密集的華語訓練，適應台灣生活環境。</p>
                    <ul className="space-y-2 inline-block text-left">
                      <li className="flex items-center gap-2 text-slate-700"><CheckCircle size={16} className="text-red-500" /> 零基礎入學，專業華語師資</li>
                      <li className="flex items-center gap-2 text-slate-700"><CheckCircle size={16} className="text-red-500" /> 目標考取 TOCFL A2/B1 證照</li>
                      <li className="flex items-center gap-2 text-slate-700"><CheckCircle size={16} className="text-red-500" /> 專屬越南語輔導員協助生活適應</li>
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
                    <h4 className="text-2xl font-bold text-slate-900 mb-2">第 2-5 年：觀光專業課程</h4>
                    <p className="text-slate-600 mb-4">正式進入「智慧旅遊與觀光傳播國際專班」，循序漸進培養專業能力：</p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2 text-slate-700">
                        <CheckCircle size={18} className="text-blue-500 mt-0.5 flex-shrink-0" /> 
                        <span><strong>大一 (第2年) 基礎與智慧觀光：</strong>觀光學概論、智慧觀光、人工智慧概論、程式設計與國際禮儀。</span>
                      </li>
                      <li className="flex items-start gap-2 text-slate-700">
                        <CheckCircle size={18} className="text-blue-500 mt-0.5 flex-shrink-0" /> 
                        <span><strong>大二 (第3年) 核心與航空票務：</strong>旅行業經營學、航空客運與票務、空地勤服務管理、觀光行銷與外語。</span>
                      </li>
                      <li className="flex items-start gap-2 text-slate-700">
                        <CheckCircle size={18} className="text-blue-500 mt-0.5 flex-shrink-0" /> 
                        <span><strong>大三 (第4年) 進階與行程規劃：</strong>旅遊產品策略與行程設計、旅行業訂位系統、節慶活動與會展管理。</span>
                      </li>
                      <li className="flex items-start gap-2 text-slate-700">
                        <CheckCircle size={18} className="text-blue-500 mt-0.5 flex-shrink-0" /> 
                        <span><strong>大四 (第5年) 實習與職場接軌：</strong>觀光企業實習、海外進階實習、ESG觀光企業永續經營與職場實務專題。</span>
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
                    <h4 className="text-2xl font-bold text-slate-900 mb-2">畢業與未來發展</h4>
                    <p className="text-slate-600 mb-4">具備多語能力與觀光專業，成為跨國人才。</p>
                    <ul className="space-y-2 inline-block text-left">
                      <li className="flex items-center gap-2 text-slate-700"><CheckCircle size={16} className="text-yellow-500" /> 留台就業 (適用評點制)</li>
                      <li className="flex items-center gap-2 text-slate-700"><CheckCircle size={16} className="text-yellow-500" /> 返國擔任跨國企業幹部</li>
                      <li className="flex items-center gap-2 text-slate-700"><CheckCircle size={16} className="text-yellow-500" /> 繼續攻讀碩士學位</li>
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
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-red-600 tracking-wider uppercase mb-2">Course Features</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">觀光系課程特色</h3>
            <p className="text-lg text-slate-600">結合學術理論與產業實務，培養具備國際競爭力的觀光專業人才。</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <div key={idx}>
                <FadeIn delay={idx * 0.1} direction="up">
                  <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow border border-slate-100 h-full">
                    <div className="w-14 h-14 rounded-xl bg-slate-50 flex items-center justify-center mb-6">
                      {feature.icon}
                    </div>
                    <h4 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h4>
                    <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
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
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-red-400 tracking-wider uppercase mb-2">Campus Life</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold mb-6">預見你的銘傳生活</h3>
            <p className="text-lg text-slate-300">透過影片，帶你搶先體驗在銘傳大學觀光系的學習與台灣豐富的生活樣貌。</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeIn delay={0.1}>
              <div className="group relative rounded-2xl overflow-hidden aspect-video bg-slate-800 border border-slate-700 shadow-2xl cursor-pointer">
                <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop" alt="Learning Video Thumbnail" className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-red-600/90 flex items-center justify-center text-white mb-4 transform group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-red-600/50">
                    <PlayCircle size={40} className="ml-1" />
                  </div>
                  <h4 className="text-2xl font-bold text-white drop-shadow-md">學習篇 (即將上線)</h4>
                  <p className="text-slate-200 mt-2 font-medium">Learning in MCU</p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="group relative rounded-2xl overflow-hidden aspect-video bg-slate-800 border border-slate-700 shadow-2xl cursor-pointer">
                <img src="https://images.unsplash.com/photo-1470076892663-af684e5e15af?q=80&w=1917&auto=format&fit=crop" alt="Lifestyle Video Thumbnail" className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-blue-600/90 flex items-center justify-center text-white mb-4 transform group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-600/50">
                    <PlayCircle size={40} className="ml-1" />
                  </div>
                  <h4 className="text-2xl font-bold text-white drop-shadow-md">生活篇 (即將上線)</h4>
                  <p className="text-slate-200 mt-2 font-medium">Life in Taiwan</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Admission & Application */}
      <section id="admission" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Admission Channels */}
            <FadeIn direction="right">
              <div>
                <h2 className="text-sm font-bold text-red-600 tracking-wider uppercase mb-2">Admission</h2>
                <h3 className="text-3xl font-extrabold text-slate-900 mb-8">招生管道與資格</h3>
                
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-red-50 text-red-600 flex items-center justify-center flex-shrink-0">
                      <Users size={24} />
                    </div>
                    <div>
                      <h5 className="text-lg font-bold text-slate-900 mb-1">招生對象</h5>
                      <p className="text-slate-600">具備越南國籍，對觀光相關產業有高度熱忱，並有意願來台升學之高中畢業生(或應屆畢業生)。</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                      <GraduationCap size={24} />
                    </div>
                    <div>
                      <h5 className="text-lg font-bold text-slate-900 mb-1">學歷要求</h5>
                      <p className="text-slate-600">具備越南當地政府認可之高級中學畢業學歷。</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-red-50 text-red-600 flex items-center justify-center flex-shrink-0">
                      <Globe size={24} />
                    </div>
                    <div>
                      <h5 className="text-lg font-bold text-slate-900 mb-1">語言門檻</h5>
                      <p className="text-slate-600"><strong className="text-red-600">免華語基礎！</strong>申請時無需提供TOCFL成績證明，入學後由國際專修部提供一年密集華語培訓。</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-yellow-50 text-yellow-600 flex items-center justify-center flex-shrink-0">
                      <Calendar size={24} />
                    </div>
                    <div>
                      <h5 className="text-lg font-bold text-slate-900 mb-1">入學時間</h5>
                      <p className="text-slate-600">詳細報名時程請見本校國教處公告。</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Application Process */}
            <FadeIn direction="left">
              <div className="bg-slate-900 rounded-3xl p-8 md:p-10 text-white shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-red-600 rounded-full blur-[100px] opacity-20 pointer-events-none"></div>
                
                <h3 className="text-2xl font-bold mb-8 relative z-10">申請流程 6 步驟</h3>
                
                <div className="space-y-6 relative z-10">
                  {[
                    { step: "01", title: "準備文件", desc: "高中畢業證書、成績單、護照影本、財力證明等。" },
                    { step: "02", title: "線上報名", desc: "透過銘傳大學國際學生線上申請系統填寫資料。" },
                    { step: "03", title: "資格審查", desc: "由學系進行書面資料審查，必要時安排線上口試。" },
                    { step: "04", title: "錄取通知", desc: "審查通過後，發放正式錄取信與入學許可。" },
                    { step: "05", title: "簽證辦理", desc: "持入學許可至駐越台北經濟文化辦事處辦理學生簽證。" },
                    { step: "06", title: "抵台報到", desc: "學校安排專人接機，協助入住宿舍，展開留學生活！" }
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="text-red-400 font-mono font-bold text-xl pt-1">{item.step}</div>
                      <div>
                        <h5 className="text-lg font-bold text-white mb-1">{item.title}</h5>
                        <p className="text-slate-400 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-10 relative z-10">
                  <a 
                    href="https://iee.mcu.edu.tw/%E5%9C%8B%E9%9A%9B%E5%B0%88%E4%BF%AE%E9%83%A8/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex justify-center items-center bg-red-600 hover:bg-red-700 text-white py-4 rounded-xl font-bold text-lg transition-colors shadow-lg shadow-red-600/30"
                  >
                    前往線上申請系統
                  </a>
                </div>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-100 text-slate-600 py-16 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src="https://tourismdp.mcu.edu.tw/wp-content/uploads/sites/17/2023/02/LOGO-Banner-removebg-preview-1.png" 
                  alt="銘傳大學觀光事業學系 Logo" 
                  className="h-16 md:h-20 w-auto object-contain drop-shadow-sm"
                  referrerPolicy="no-referrer"
                />
                <div className="flex flex-col justify-center mt-2">
                  <span className="font-bold text-lg text-slate-900">國際專修部(越南專班)</span>
                </div>
              </div>
              <p className="text-sm leading-relaxed max-w-md mb-6">
                培育具備國際視野、專業技能與創新思維的觀光產業領導人才。歡迎加入我們，開啟你的全球觀光職涯！
              </p>
            </div>

            <div>
              <h3 className="text-slate-900 font-bold mb-6">聯絡資訊</h3>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="text-red-600 mt-0.5 flex-shrink-0" />
                  <span>桃園校區：桃園市龜山區德明路五號</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={18} className="text-red-600 flex-shrink-0" />
                  <span>分機 3203</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={18} className="text-red-600 flex-shrink-0" />
                  <span>jychao@mail.mcu.edu.tw</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-300 text-sm text-center md:text-left flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} 銘傳大學觀光事業學系 版權所有</p>
            <div className="mt-4 md:mt-0 space-x-4">
              <a href="#" className="hover:text-slate-900 transition-colors">隱私權政策</a>
              <a href="#" className="hover:text-slate-900 transition-colors">使用條款</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

