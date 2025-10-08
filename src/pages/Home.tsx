import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown, Clock, Activity, Users, Sparkles, Zap } from 'lucide-react';

function Home() {
  const [stats, setStats] = useState({ hours: 0, conversions: 0, businesses: 0 });

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
    }
  };

  return (
    <div className="overflow-x-hidden">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="AI Technology Background"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a1f]/95 via-[#0d1b3a]/90 to-[#0a0a2e]/95"></div>
        </div>

        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500 rounded-full filter blur-[120px] opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full filter blur-[120px] opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500 rounded-full filter blur-[150px] opacity-10"></div>
        </div>

        <div className="absolute inset-0 opacity-20">
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
            <Link
              to="/contact"
              className="group relative bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 px-12 py-6 rounded-full text-xl font-bold transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 shadow-2xl shadow-cyan-500/50 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover:opacity-20 transition-opacity"></div>
              <span className="relative">Book a Free Strategy Call</span>
              <ArrowRight className="w-6 h-6 relative group-hover:translate-x-1 transition-transform" />
            </Link>
            <button
              onClick={() => scrollToSection('problems')}
              className="group border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 px-12 py-6 rounded-full text-xl font-bold transition-all duration-300 flex items-center space-x-2 backdrop-blur-sm"
            >
              <span>See How It Works</span>
              <ChevronDown className="w-6 h-6 group-hover:translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      <section id="problems" className="py-24 bg-gradient-to-b from-[#0a0a1f] to-[#0d1428] relative">
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
                <h3 className="text-2xl font-bold mb-3 text-red-400">Missed Leads = Lost Revenue</h3>
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

      <section id="stats" className="py-24 bg-[#0a0a1f] relative overflow-hidden">
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
        </div>
      </section>

      <section className="py-32 bg-gradient-to-br from-cyan-600 via-blue-600 to-purple-700 relative overflow-hidden">
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
          <Link to="/contact" className="group bg-white text-blue-700 hover:bg-gray-50 px-16 py-8 rounded-full text-2xl font-black transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-3 shadow-2xl">
            <span>Book Your Free Strategy Call</span>
            <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
          </Link>
          <p className="mt-8 text-white/90 text-lg font-semibold">
            Average response time: Under 2 hours
          </p>
        </div>
      </section>

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

export default Home;
