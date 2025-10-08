import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Users, Clock, DollarSign, CheckCircle2, Target } from 'lucide-react';

function CaseStudies() {
  const caseStudies = [
    {
      company: "TechFlow Solutions",
      industry: "SaaS",
      challenge: "Manual lead qualification consuming 20+ hours weekly, resulting in slow response times and missed opportunities",
      solution: "Implemented AI chatbot with intelligent lead scoring and automated CRM integration",
      results: [
        { metric: "5x", label: "More qualified leads", icon: Users },
        { metric: "85%", label: "Time saved", icon: Clock },
        { metric: "40%", label: "Revenue increase", icon: DollarSign }
      ],
      testimonial: "They transformed our sales process — automation booked us 5x more calls in the first month. The ROI was immediate.",
      author: "Sarah Chen",
      role: "CEO",
      gradient: "from-cyan-500 to-blue-600"
    },
    {
      company: "HealthHub Medical",
      industry: "Healthcare",
      challenge: "Appointment no-shows at 30% rate and manual scheduling overwhelming staff",
      solution: "Smart scheduling system with automated reminders and patient communication",
      results: [
        { metric: "80%", label: "Reduction in no-shows", icon: Target },
        { metric: "15h", label: "Saved per week", icon: Clock },
        { metric: "95%", label: "Patient satisfaction", icon: Users }
      ],
      testimonial: "Our staff can now focus on patient care instead of phone calls. The automated system is a game-changer.",
      author: "Dr. Michael Rodriguez",
      role: "Practice Owner",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      company: "GrowthLabs Marketing",
      industry: "Digital Marketing",
      challenge: "Managing multiple client campaigns manually with inconsistent results",
      solution: "Multi-platform social media automation with AI-powered content scheduling",
      results: [
        { metric: "3x", label: "More content output", icon: TrendingUp },
        { metric: "60%", label: "Engagement increase", icon: Users },
        { metric: "25h", label: "Saved per week", icon: Clock }
      ],
      testimonial: "We can now manage 3x more clients with the same team size. The automation pays for itself many times over.",
      author: "Emily Thompson",
      role: "Founder",
      gradient: "from-purple-500 to-pink-600"
    }
  ];

  return (
    <div className="pt-20 overflow-x-hidden">
      <section className="relative py-32 bg-gradient-to-br from-[#0a0a1f] via-[#0d1b3a] to-[#0a0a2e] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Success stories"
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
            Success <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Stories</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Real businesses, real results, real transformation through AI automation
          </p>
        </div>
      </section>

      <section className="py-24 bg-[#0d1428] relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-20">
            {caseStudies.map((study, index) => (
              <div key={index} className="relative">
                <div className="bg-gradient-to-br from-[#0a0a1f] to-[#1a1a3f] rounded-3xl border border-cyan-500/20 overflow-hidden">
                  <div className={`h-3 bg-gradient-to-r ${study.gradient}`}></div>

                  <div className="p-8 md:p-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                      <div>
                        <div className="flex items-center space-x-4 mb-6">
                          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${study.gradient} flex items-center justify-center shadow-lg`}>
                            <span className="text-2xl font-black text-white">
                              {study.company.split(' ').map(w => w[0]).join('')}
                            </span>
                          </div>
                          <div>
                            <h3 className="text-2xl md:text-3xl font-black">{study.company}</h3>
                            <p className="text-cyan-400 font-semibold">{study.industry}</p>
                          </div>
                        </div>

                        <div className="space-y-6 mb-8">
                          <div>
                            <h4 className="text-lg font-bold text-red-400 mb-2">The Challenge</h4>
                            <p className="text-gray-400 leading-relaxed">{study.challenge}</p>
                          </div>

                          <div>
                            <h4 className="text-lg font-bold text-cyan-400 mb-2">The Solution</h4>
                            <p className="text-gray-400 leading-relaxed">{study.solution}</p>
                          </div>
                        </div>

                        <div className="bg-gradient-to-br from-[#0d1428] to-[#1a1a3f] p-6 rounded-2xl border border-cyan-500/20">
                          <div className="relative mb-4">
                            <div className="absolute -left-2 top-0 text-4xl text-cyan-500 opacity-20 font-serif">"</div>
                            <p className="text-lg text-gray-300 italic pl-6">
                              {study.testimonial}
                            </p>
                          </div>
                          <div className="flex items-center space-x-3 pl-6">
                            <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${study.gradient} flex items-center justify-center`}>
                              <span className="text-sm font-black text-white">
                                {study.author.split(' ').map(w => w[0]).join('')}
                              </span>
                            </div>
                            <div>
                              <p className="font-bold">{study.author}</p>
                              <p className="text-sm text-cyan-400">{study.role}</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col justify-center">
                        <h4 className="text-2xl font-bold mb-6 text-center">
                          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                            The Results
                          </span>
                        </h4>

                        <div className="space-y-6">
                          {study.results.map((result, i) => {
                            const Icon = result.icon;
                            return (
                              <div key={i} className="relative group">
                                <div className={`absolute inset-0 bg-gradient-to-r ${study.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity`}></div>
                                <div className="relative bg-gradient-to-br from-[#0d1428] to-[#1a1a3f] p-6 rounded-2xl border border-cyan-500/30 group-hover:border-cyan-500/60 transition-all">
                                  <div className="flex items-center space-x-4">
                                    <div className={`bg-gradient-to-r ${study.gradient} w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0`}>
                                      <Icon className="w-7 h-7 text-white" />
                                    </div>
                                    <div>
                                      <div className={`text-4xl font-black bg-gradient-to-r ${study.gradient} bg-clip-text text-transparent mb-1`}>
                                        {result.metric}
                                      </div>
                                      <div className="text-gray-400 font-semibold">{result.label}</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-[#0d1428] to-[#0a0a1f] relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              What All Our Clients <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Have in Common</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Reduced operational costs by 40-60%",
              "Increased team productivity significantly",
              "Improved customer response times",
              "Scaled operations without hiring",
              "Better data insights and reporting",
              "Achieved ROI within 2-3 months"
            ].map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4 bg-gradient-to-br from-[#0d1428] to-[#1a1a3f] p-6 rounded-2xl border border-cyan-500/20 group hover:border-cyan-500/60 transition-all">
                <CheckCircle2 className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                <p className="text-lg text-gray-300 group-hover:text-white transition-colors">{benefit}</p>
              </div>
            ))}
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
            Ready to Write<br />Your Success Story?
          </h2>
          <p className="text-2xl md:text-3xl mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
            Join the growing list of businesses transforming with AI automation
          </p>
          <Link to="/contact" className="group bg-white text-blue-700 hover:bg-gray-50 px-16 py-8 rounded-full text-2xl font-black transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-3 shadow-2xl">
            <span>Start Your Transformation</span>
            <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default CaseStudies;
