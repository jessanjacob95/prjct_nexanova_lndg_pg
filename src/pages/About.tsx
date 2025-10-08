import { Link } from 'react-router-dom';
import { ArrowRight, Target, Users, Zap, Shield, TrendingUp, Clock } from 'lucide-react';

function About() {
  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "We're on a mission to democratize AI automation for businesses of all sizes"
    },
    {
      icon: Shield,
      title: "Trust & Security",
      description: "Your data security and privacy are our top priorities in every solution we build"
    },
    {
      icon: TrendingUp,
      title: "Results-Focused",
      description: "We measure our success by the tangible results we deliver to your business"
    },
    {
      icon: Zap,
      title: "Innovation First",
      description: "We stay at the forefront of AI technology to give you a competitive edge"
    }
  ];

  const team = [
    {
      name: "Alex Chen",
      role: "CEO & Founder",
      bio: "Former ML engineer at Google, passionate about making AI accessible to everyone",
      initial: "AC"
    },
    {
      name: "Sarah Martinez",
      role: "Head of AI Solutions",
      bio: "15+ years in enterprise automation, led digital transformation at Fortune 500 companies",
      initial: "SM"
    },
    {
      name: "David Park",
      role: "Chief Technology Officer",
      bio: "Built scalable AI systems for startups to enterprises, specializing in NLP and automation",
      initial: "DP"
    },
    {
      name: "Emily Johnson",
      role: "Customer Success Lead",
      bio: "Dedicated to ensuring every client achieves their automation goals and beyond",
      initial: "EJ"
    }
  ];

  return (
    <div className="pt-20 overflow-x-hidden">
      <section className="relative py-32 bg-gradient-to-br from-[#0a0a1f] via-[#0d1b3a] to-[#0a0a2e] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Team collaboration"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a1f]/90 via-[#0d1b3a]/85 to-[#0a0a2e]/90"></div>
        </div>

        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-500 rounded-full filter blur-[150px] opacity-20"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500 rounded-full filter blur-[150px] opacity-20"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 text-center z-10">
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            About <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Nexanova.ai</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We're building the future of business automation, one intelligent solution at a time
          </p>
        </div>
      </section>

      <section className="py-24 bg-[#0d1428] relative">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-gradient-to-br from-[#0a0a1f] to-[#1a1a3f] p-12 md:p-16 rounded-3xl border border-cyan-500/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500 rounded-full filter blur-[120px] opacity-10"></div>

            <div className="relative">
              <h2 className="text-3xl md:text-5xl font-black mb-8">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Our Story</span>
              </h2>
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <p>
                  Nexanova.ai was founded in 2023 with a simple belief: every business, regardless of size, deserves access to cutting-edge AI automation that can transform their operations and accelerate growth.
                </p>
                <p>
                  After witnessing countless businesses struggle with manual processes, missed opportunities, and overwhelmed teams, our founders came together to create something different. We built a company that doesn't just implement technology—we partner with businesses to reimagine what's possible.
                </p>
                <p>
                  Today, we've helped over 50 businesses save thousands of hours, increase conversion rates, and scale their operations efficiently. But we're just getting started.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-[#0d1428] to-[#0a0a1f] relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-4">
              Our <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Values</span>
            </h2>
            <p className="text-xl text-gray-400">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="group relative bg-gradient-to-br from-[#0d1428] to-[#1a1a3f] p-8 rounded-2xl border border-cyan-500/20 hover:border-cyan-500/60 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/5 group-hover:to-blue-500/5 rounded-2xl transition-all duration-300"></div>

                  <div className="relative">
                    <div className="bg-gradient-to-r from-cyan-600 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-cyan-500/50">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                      {value.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0a0a1f] relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Team working"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-[#0a0a1f]/90"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-4">
              Meet Our <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Team</span>
            </h2>
            <p className="text-xl text-gray-400">The experts behind your automation success</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="group relative bg-gradient-to-br from-[#0d1428] to-[#1a1a3f] p-6 rounded-2xl border border-cyan-500/20 hover:border-cyan-500/60 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/5 group-hover:to-blue-500/5 rounded-2xl transition-all duration-300"></div>

                <div className="relative text-center">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/50 group-hover:scale-110 transition-transform">
                    <span className="text-2xl font-black text-white">{member.initial}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-1 group-hover:text-cyan-400 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-cyan-400 font-semibold text-sm mb-3">{member.role}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-[#0a0a1f] to-[#0d1428] relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <div className="relative bg-gradient-to-br from-[#0d1428] to-[#1a1a3f] p-10 rounded-2xl border border-cyan-500/30 text-center">
                <div className="text-6xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                  50+
                </div>
                <div className="text-xl text-gray-400 font-semibold">Businesses Transformed</div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <div className="relative bg-gradient-to-br from-[#0d1428] to-[#1a1a3f] p-10 rounded-2xl border border-blue-500/30 text-center">
                <div className="text-6xl font-black bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
                  10K+
                </div>
                <div className="text-xl text-gray-400 font-semibold">Hours Saved</div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <div className="relative bg-gradient-to-br from-[#0d1428] to-[#1a1a3f] p-10 rounded-2xl border border-purple-500/30 text-center">
                <div className="flex items-center justify-center mb-2">
                  <Clock className="w-10 h-10 text-purple-400 mr-2" />
                  <div className="text-6xl font-black bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                    2h
                  </div>
                </div>
                <div className="text-xl text-gray-400 font-semibold">Average Response Time</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-cyan-600 via-blue-600 to-purple-700 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/6153354/pexels-photo-6153354.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Growth and Innovation"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/90 via-blue-600/90 to-purple-700/90"></div>
        </div>

        <div className="relative max-w-5xl mx-auto px-6 text-center z-10">
          <h2 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            Join Us on<br />This Journey
          </h2>
          <p className="text-2xl md:text-3xl mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
            Let's build the future of your business together
          </p>
          <Link to="/contact" className="group bg-white text-blue-700 hover:bg-gray-50 px-16 py-8 rounded-full text-2xl font-black transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-3 shadow-2xl">
            <span>Get Started Today</span>
            <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default About;
