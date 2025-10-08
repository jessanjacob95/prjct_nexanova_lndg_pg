import { useState, useEffect } from 'react';
import Spline from '@splinetool/react-spline';
import {
  Menu, X, ArrowRight, ChevronDown, MessageSquare, Database, Calendar,
  PhoneCall, Share2, Globe, Shield, TrendingUp, Zap, CheckCircle2,
  Users, Clock, DollarSign, Target, Activity, Plus, Minus, Sparkles
} from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [stats, setStats] = useState({ hours: 0, conversions: 0, businesses: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.id === 'stats') {
            animateStats();
          }
        });
      },
      { threshold: 0.5 }
    );

    const statsElement = document.getElementById('stats');
    if (statsElement) {
      observer.observe(statsElement);
    }

    return () => observer.disconnect();
  }, []);

  const animateStats = () => {
    const duration = 2000;
    const steps = 60;
    const increment = duration / steps;

    let step = 0;
    const interval = setInterval(() => {
      step++;
      const progress = step / steps;

      setStats({
        hours: Math.floor(10000 * progress),
        conversions: Math.floor(30 * progress),
        businesses: Math.floor(50 * progress)
      });

      if (step >= steps) {
        clearInterval(interval);
        setStats({ hours: 10000, conversions: 30, businesses: 50 });
      }
    }, increment);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const faqs: FAQItem[] = [
    {
      question: "How long does it take to set up automation?",
      answer: "Most basic automations can be set up within 1-2 weeks. Complex enterprise solutions typically take 4-6 weeks. We'll provide a detailed timeline during your free strategy call based on your specific needs."
    },
    {
      question: "Will this work with my existing CRM?",
      answer: "Yes! We integrate with all major CRM platforms including Salesforce, HubSpot, Zoho, Pipedrive, and more. Our solutions are designed to enhance your current tech stack, not replace it."
    },
    {
      question: "Do I need technical knowledge?",
      answer: "Not at all. We handle all the technical implementation and provide intuitive dashboards for your team. We also offer training and ongoing support to ensure everyone is comfortable with the new systems."
    },
    {
      question: "What industries can benefit from this?",
      answer: "Our AI automation solutions work across virtually any industry - from e-commerce and healthcare to finance, real estate, professional services, and manufacturing. If you have repetitive processes, we can automate them."
    },
    {
      question: "What's the ROI on AI automation?",
      answer: "Most clients see ROI within 2-3 months through time savings, increased conversion rates, and reduced operational costs. On average, businesses save 20-30 hours per week and increase revenue by 15-40%."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const automations = [
    {
      icon: MessageSquare,
      title: "Customer Support Automation",
      description: "24/7 AI chatbots and intelligent ticketing systems that never sleep",
      color: "from-cyan-500 to-blue-600"
    },
    {
      icon: Database,
      title: "CRM Integration",
      description: "Seamless data sync with automated lead scoring and pipeline management",
      color: "from-blue-600 to-purple-600"
    },
    {
      icon: Calendar,
      title: "Appointment Setting",
      description: "Smart scheduling with automated reminders and calendar sync",
      color: "from-purple-600 to-pink-600"
    },
    {
      icon: TrendingUp,
      title: "Sales Outreach Automation",
      description: "AI-powered email sequences and personalized outreach at scale",
      color: "from-pink-600 to-red-600"
    },
    {
      icon: PhoneCall,
      title: "Call Automation",
      description: "AI voice agents for inbound and outbound calls that convert",
      color: "from-red-600 to-orange-600"
    },
    {
      icon: Share2,
      title: "Social Media Automation",
      description: "Consistent engagement across all platforms from one dashboard",
      color: "from-orange-600 to-yellow-600"
    },
    {
      icon: Globe,
      title: "Website Building",
      description: "Conversion-optimized sites with embedded AI chatbots",
      color: "from-yellow-600 to-green-600"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a1f] text-white overflow-x-hidden">
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#0a0a1f]/95 backdrop-blur-lg shadow-lg shadow-blue-500/10' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 group">
              <div className="relative">
                <Zap className="w-8 h-8 text-cyan-400 animate-pulse" />
                <div className="absolute inset-0 w-8 h-8 bg-cyan-400 blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
              </div>
              <span className="text-2xl font-bold tracking-tight bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Nexanova.ai
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('automations')} className="text-gray-300 hover:text-cyan-400 transition-colors">
                Solutions
              </button>
              <button onClick={() => scrollToSection('how-it-works')} className="text-gray-300 hover:text-cyan-400 transition-colors">
                How It Works
              </button>
              <button onClick={() => scrollToSection('proof')} className="text-gray-300 hover:text-cyan-400 transition-colors">
                Case Studies
              </button>
              <button onClick={() => scrollToSection('faq')} className="text-gray-300 hover:text-cyan-400 transition-colors">
                FAQ
              </button>
              <button
                onClick={() => scrollToSection('cta')}
                className="relative bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 px-6 py-2.5 rounded-full font-medium transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 shadow-lg shadow-cyan-500/50"
              >
                <span>Book Free Call</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <button
              className="md:hidden text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-4 animate-fadeIn">
              <button onClick={() => scrollToSection('automations')} className="block w-full text-left text-gray-300 hover:text-cyan-400 transition-colors py-2">
                Solutions
              </button>
              <button onClick={() => scrollToSection('how-it-works')} className="block w-full text-left text-gray-300 hover:text-cyan-400 transition-colors py-2">
                How It Works
              </button>
              <button onClick={() => scrollToSection('proof')} className="block w-full text-left text-gray-300 hover:text-cyan-400 transition-colors py-2">
                Case Studies
              </button>
              <button onClick={() => scrollToSection('faq')} className="block w-full text-left text-gray-300 hover:text-cyan-400 transition-colors py-2">
                FAQ
              </button>
              <button
                onClick={() => scrollToSection('cta')}
                className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 px-6 py-2.5 rounded-full font-medium flex items-center justify-center space-x-2"
              >
                <span>Book Free Call</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </nav>

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <div className="absolute inset-0 w-full h-full">
            <Spline
              scene="https://prod.spline.design/2ca76fa7-6f14-4023-b55b-7addd114e6e5/scene.splinecode"
              className="w-full h-full"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a1f]/85 via-[#0d1b3a]/80 to-[#0a0a2e]/85"></div>
        </div>

        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500 rounded-full filter blur-[120px] opacity-15 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full filter blur-[120px] opacity-15 animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="tech-grid" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(6, 182, 212, 0.3)" strokeWidth="0.5"/>
                <circle cx="0" cy="0" r="1.5" fill="rgba(6, 182, 212, 0.5)"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#tech-grid)" />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-20 text-center z-10">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full mb-8 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-400 text-sm font-medium">AI-Powered Business Automation</span>
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-6 leading-none tracking-tight">
            <span className="block mb-2">Automate.</span>
            <span className="block mb-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient">
              Scale.
            </span>
            <span className="block">Dominate.</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            AI-driven automation for customer support, sales, and growth — tailored for modern businesses.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection('cta')}
              className="group relative bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 px-12 py-6 rounded-full text-xl font-bold transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 shadow-2xl shadow-cyan-500/50 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover:opacity-20 transition-opacity"></div>
              <span className="relative">Book a Free Strategy Call</span>
              <ArrowRight className="w-6 h-6 relative group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollToSection('automations')}
              className="group border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 px-12 py-6 rounded-full text-xl font-bold transition-all duration-300 flex items-center space-x-2 backdrop-blur-sm"
            >
              <span>See How It Works</span>
              <ChevronDown className="w-6 h-6 group-hover:translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-[#0a0a1f] to-[#0d1428] relative">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(6, 182, 212, 0.5) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              Your Business Runs 24/7.<br />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Why Shouldn't Your Growth?
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="group relative bg-gradient-to-br from-[#0d1428] to-[#1a1a3f] p-8 rounded-2xl border border-red-500/30 hover:border-red-500/60 transition-all duration-300">
              <div className="absolute inset-0 bg-red-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <div className="bg-red-500/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Clock className="w-8 h-8 text-red-400" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-red-400">Missed Leads → Lost Revenue</h3>
                <p className="text-gray-400 leading-relaxed">Every delayed response is money walking out the door</p>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-[#0d1428] to-[#1a1a3f] p-8 rounded-2xl border border-orange-500/30 hover:border-orange-500/60 transition-all duration-300">
              <div className="absolute inset-0 bg-orange-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <div className="bg-orange-500/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Activity className="w-8 h-8 text-orange-400" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-orange-400">Repetitive Tasks Waste Time</h3>
                <p className="text-gray-400 leading-relaxed">Your team buried in busywork instead of growth activities</p>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-[#0d1428] to-[#1a1a3f] p-8 rounded-2xl border border-yellow-500/30 hover:border-yellow-500/60 transition-all duration-300">
              <div className="absolute inset-0 bg-yellow-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <div className="bg-yellow-500/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Users className="w-8 h-8 text-yellow-400" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-yellow-400">Poor Experience = Churn</h3>
                <p className="text-gray-400 leading-relaxed">Slow support and manual processes drive customers away</p>
              </div>
            </div>
          </div>

          <div className="relative mt-20">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-30"></div>
            </div>
            <div className="relative flex justify-center">
              <div className="bg-gradient-to-r from-cyan-600 to-blue-600 p-1 rounded-2xl shadow-lg shadow-cyan-500/50">
                <div className="bg-[#0a0a1f] px-8 py-4 rounded-xl flex items-center space-x-3">
                  <Zap className="w-8 h-8 text-cyan-400" />
                  <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    AI Fixes Everything
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="automations" className="py-24 bg-[#0d1428] relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/8438918/pexels-photo-8438918.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Digital Automation"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-[#0d1428]/85"></div>
        </div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500 rounded-full filter blur-[150px] opacity-10"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-[150px] opacity-10"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-4">
              Our Core <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Automations</span>
            </h2>
            <p className="text-xl text-gray-400">Hover to activate each automation system</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {automations.map((automation, index) => {
              const Icon = automation.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-[#0a0a1f] to-[#1a1a3f] p-8 rounded-2xl border border-cyan-500/20 hover:border-cyan-500/60 transition-all duration-500 cursor-pointer overflow-hidden"
                  onMouseEnter={() => setActiveCard(index)}
                  onMouseLeave={() => setActiveCard(null)}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${automation.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                  <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${automation.color} rounded-full filter blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>

                  <div className="relative">
                    <div className={`bg-gradient-to-br ${automation.color} p-4 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                      <Icon className={`w-8 h-8 text-white ${activeCard === index ? 'animate-pulse' : ''}`} />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">
                      {automation.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                      {automation.description}
                    </p>

                    <div className={`mt-4 flex items-center space-x-2 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}>
                      <span className="text-sm font-semibold">Activate</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="py-24 bg-gradient-to-b from-[#0d1428] to-[#0a0a1f] relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black mb-4">
              How It <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Works</span>
            </h2>
            <p className="text-xl text-gray-400">Three steps to complete automation</p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500 transform -translate-x-1/2 hidden md:block"></div>

            <div className="space-y-20">
              <div className="relative flex items-center">
                <div className="flex-1 md:text-right md:pr-16">
                  <div className="inline-block md:block">
                    <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold mb-4 inline-block">
                      STEP 1
                    </div>
                    <h3 className="text-3xl font-bold mb-3">Audit & Strategy</h3>
                    <p className="text-gray-400 text-lg">We analyze your workflows and identify automation opportunities</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex">
                  <div className="bg-gradient-to-r from-cyan-600 to-blue-600 w-20 h-20 rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/50">
                    <Target className="w-10 h-10 text-white" />
                  </div>
                </div>
                <div className="flex-1 md:pl-16"></div>
              </div>

              <div className="relative flex items-center">
                <div className="flex-1 md:pr-16"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-20 h-20 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/50">
                    <Zap className="w-10 h-10 text-white" />
                  </div>
                </div>
                <div className="flex-1 md:pl-16">
                  <div className="inline-block md:block">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-bold mb-4 inline-block">
                      STEP 2
                    </div>
                    <h3 className="text-3xl font-bold mb-3">AI Automation Setup</h3>
                    <p className="text-gray-400 text-lg">Custom tools integrated seamlessly with your CRM and platforms</p>
                  </div>
                </div>
              </div>

              <div className="relative flex items-center">
                <div className="flex-1 md:text-right md:pr-16">
                  <div className="inline-block md:block">
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-bold mb-4 inline-block">
                      STEP 3
                    </div>
                    <h3 className="text-3xl font-bold mb-3">Scale & Optimize</h3>
                    <p className="text-gray-400 text-lg">We keep refining while you focus on growth</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 w-20 h-20 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/50">
                    <TrendingUp className="w-10 h-10 text-white" />
                  </div>
                </div>
                <div className="flex-1 md:pl-16"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="proof" className="py-24 bg-[#0a0a1f] relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Business Success"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-[#0a0a1f]/90"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-4">
              Trusted by <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Modern Businesses</span>
            </h2>
          </div>

          <div id="stats" className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <div className="relative bg-gradient-to-br from-[#0d1428] to-[#1a1a3f] p-10 rounded-2xl border border-cyan-500/30 text-center">
                <div className="text-6xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                  {stats.hours.toLocaleString()}+
                </div>
                <div className="text-xl text-gray-400 font-semibold">Hours Saved</div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <div className="relative bg-gradient-to-br from-[#0d1428] to-[#1a1a3f] p-10 rounded-2xl border border-blue-500/30 text-center">
                <div className="text-6xl font-black bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
                  {stats.conversions}%
                </div>
                <div className="text-xl text-gray-400 font-semibold">Sales Conversion Increase</div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <div className="relative bg-gradient-to-br from-[#0d1428] to-[#1a1a3f] p-10 rounded-2xl border border-purple-500/30 text-center">
                <div className="text-6xl font-black bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-2">
                  {stats.businesses}+
                </div>
                <div className="text-xl text-gray-400 font-semibold">Businesses Automated</div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#0d1428] to-[#1a1a3f] p-12 rounded-3xl border border-cyan-500/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500 rounded-full filter blur-[120px] opacity-10"></div>

            <div className="relative">
              <div className="flex items-start space-x-6 mb-8">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-cyan-600 to-blue-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-cyan-500/50">
                  <span className="text-3xl font-black text-white">SC</span>
                </div>
                <div>
                  <h4 className="text-2xl font-bold mb-2">Sarah Chen</h4>
                  <p className="text-cyan-400 font-semibold">CEO, TechFlow Solutions</p>
                </div>
              </div>

              <div className="relative mb-6">
                <div className="absolute -left-4 top-0 text-6xl text-cyan-500 opacity-20 font-serif">"</div>
                <p className="text-2xl text-gray-300 leading-relaxed italic pl-8">
                  They transformed our sales process — automation booked us 5x more calls in the first month. The ROI was immediate.
                </p>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <CheckCircle2 key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <div className="h-px w-12 bg-gradient-to-r from-cyan-500 to-transparent"></div>
                <span className="text-cyan-400 font-bold">5x More Meetings Booked</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 opacity-40">
            {['TechFlow', 'GrowthLabs', 'HealthHub', 'InnovateCo'].map((company, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm px-8 py-6 rounded-xl border border-white/10 text-center">
                <p className="text-2xl font-bold text-gray-300">{company}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="cta" className="py-32 bg-gradient-to-br from-cyan-600 via-blue-600 to-purple-700 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/6153354/pexels-photo-6153354.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Growth and Innovation"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/90 via-blue-600/90 to-purple-700/90"></div>
        </div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full opacity-30">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full filter blur-[150px]"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-300 rounded-full filter blur-[150px]"></div>
          </div>
        </div>

        <div className="relative max-w-5xl mx-auto px-6 text-center z-10">
          <h2 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            Ready to Automate<br />Your Growth?
          </h2>
          <p className="text-2xl md:text-3xl mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
            No fluff. Just results. 30 minutes to change your business forever.
          </p>
          <button className="group bg-white text-blue-700 hover:bg-gray-50 px-16 py-8 rounded-full text-2xl font-black transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-3 shadow-2xl">
            <span>Book Your Free Strategy Call</span>
            <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
          </button>
          <p className="mt-8 text-white/90 text-lg font-semibold">
            ⚡ Average response time: Under 2 hours
          </p>
        </div>
      </section>

      <section id="faq" className="py-24 bg-[#0a0a1f]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">FAQ</span>
            </h2>
            <p className="text-xl text-gray-400">Everything you need to know</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#0d1428] to-[#1a1a3f] rounded-2xl border border-cyan-500/20 overflow-hidden hover:border-cyan-500/40 transition-all"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-white/5 transition-all"
                >
                  <h3 className="text-xl font-bold pr-8">{faq.question}</h3>
                  <div className={`flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 flex items-center justify-center transition-transform ${openFAQ === index ? 'rotate-180' : ''}`}>
                    {openFAQ === index ? (
                      <Minus className="w-5 h-5 text-white" />
                    ) : (
                      <Plus className="w-5 h-5 text-white" />
                    )}
                  </div>
                </button>
                {openFAQ === index && (
                  <div className="px-8 pb-6 animate-fadeIn">
                    <p className="text-gray-300 text-lg leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-[#0a0a1f] border-t border-cyan-500/10 py-16 relative">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(6, 182, 212, 0.5) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4 group">
                <Zap className="w-10 h-10 text-cyan-400" />
                <span className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Nexanova.ai
                </span>
              </div>
              <p className="text-xl text-cyan-400 font-bold mb-6">Future-Proof Your Business</p>
              <p className="text-gray-400 leading-relaxed max-w-md">
                AI-powered automation that transforms your workflows, scales your operations, and dominates your market.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4 text-cyan-400">Solutions</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Customer Support</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Sales Automation</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">CRM Integration</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">AI Chatbots</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4 text-cyan-400">Company</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Case Studies</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-cyan-500/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex space-x-6 text-gray-500 text-sm">
                <a href="#" className="hover:text-cyan-400 transition-colors">Privacy</a>
                <a href="#" className="hover:text-cyan-400 transition-colors">Terms</a>
                <a href="#" className="hover:text-cyan-400 transition-colors">Cookies</a>
              </div>
              <div className="text-gray-500 text-sm">
                <p>&copy; 2025 Nexanova.ai. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}

export default App;
