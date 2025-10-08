import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MessageSquare, Database, Calendar, PhoneCall, Share2, Globe, TrendingUp,
  ArrowRight, CheckCircle2, Target, Zap
} from 'lucide-react';

function Solutions() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const automations = [
    {
      icon: MessageSquare,
      title: "Customer Support Automation",
      description: "24/7 AI chatbots and intelligent ticketing systems that never sleep",
      features: [
        "Instant response to customer queries",
        "Multi-language support",
        "Smart ticket routing",
        "Sentiment analysis"
      ],
      color: "from-cyan-500 to-blue-600"
    },
    {
      icon: Database,
      title: "CRM Integration",
      description: "Seamless data sync with automated lead scoring and pipeline management",
      features: [
        "Automatic data synchronization",
        "Lead scoring and qualification",
        "Pipeline management",
        "Custom workflow automation"
      ],
      color: "from-blue-600 to-purple-600"
    },
    {
      icon: Calendar,
      title: "Appointment Setting",
      description: "Smart scheduling with automated reminders and calendar sync",
      features: [
        "Intelligent calendar management",
        "Automated reminders",
        "Timezone detection",
        "No-show reduction"
      ],
      color: "from-purple-600 to-pink-600"
    },
    {
      icon: TrendingUp,
      title: "Sales Outreach Automation",
      description: "AI-powered email sequences and personalized outreach at scale",
      features: [
        "Personalized email sequences",
        "A/B testing",
        "Performance analytics",
        "Follow-up automation"
      ],
      color: "from-pink-600 to-red-600"
    },
    {
      icon: PhoneCall,
      title: "Call Automation",
      description: "AI voice agents for inbound and outbound calls that convert",
      features: [
        "Natural voice conversations",
        "Call transcription",
        "Lead qualification",
        "24/7 availability"
      ],
      color: "from-red-600 to-orange-600"
    },
    {
      icon: Share2,
      title: "Social Media Automation",
      description: "Consistent engagement across all platforms from one dashboard",
      features: [
        "Multi-platform posting",
        "Content scheduling",
        "Engagement tracking",
        "Analytics dashboard"
      ],
      color: "from-orange-600 to-yellow-600"
    },
    {
      icon: Globe,
      title: "Website Building",
      description: "Conversion-optimized sites with embedded AI chatbots",
      features: [
        "Mobile-responsive design",
        "SEO optimization",
        "Integrated chatbots",
        "Analytics tracking"
      ],
      color: "from-yellow-600 to-green-600"
    }
  ];

  return (
    <div className="pt-20 overflow-x-hidden">
      <section className="relative py-32 bg-gradient-to-br from-[#0a0a1f] via-[#0d1b3a] to-[#0a0a2e] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/8438918/pexels-photo-8438918.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Digital Automation"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a1f]/90 via-[#0d1b3a]/85 to-[#0a0a2e]/90"></div>
        </div>

        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-500 rounded-full filter blur-[150px] opacity-20"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500 rounded-full filter blur-[150px] opacity-20"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 text-center z-10">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full mb-8 backdrop-blur-sm">
            <Zap className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-400 text-sm font-medium">Complete Automation Suite</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            Our Core <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Automations</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive AI-powered solutions designed to transform every aspect of your business operations
          </p>
        </div>
      </section>

      <section className="py-24 bg-[#0d1428] relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                    <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors mb-6">
                      {automation.description}
                    </p>

                    <ul className="space-y-2">
                      {automation.features.map((feature, i) => (
                        <li key={i} className="flex items-start space-x-2 text-sm text-gray-400 group-hover:text-gray-300">
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className={`mt-6 flex items-center space-x-2 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}>
                      <span className="text-sm font-semibold">Learn More</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-[#0d1428] to-[#0a0a1f] relative">
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
            Ready to Transform<br />Your Business?
          </h2>
          <p className="text-2xl md:text-3xl mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
            Let's discuss which solutions are right for you
          </p>
          <Link to="/contact" className="group bg-white text-blue-700 hover:bg-gray-50 px-16 py-8 rounded-full text-2xl font-black transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-3 shadow-2xl">
            <span>Book Your Free Consultation</span>
            <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Solutions;
