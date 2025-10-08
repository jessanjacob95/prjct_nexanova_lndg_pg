import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock, MessageSquare, Plus, Minus } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
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

  return (
    <div className="pt-20 overflow-x-hidden">
      <section className="relative py-32 bg-gradient-to-br from-[#0a0a1f] via-[#0d1b3a] to-[#0a0a2e] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Contact us"
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
            Let's <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Talk</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to automate your business? Book a free strategy call and discover what's possible
          </p>
        </div>
      </section>

      <section className="py-24 bg-[#0d1428] relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="mb-12">
                <h2 className="text-3xl md:text-4xl font-black mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    Get in Touch
                  </span>
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Fill out the form and we'll get back to you within 2 hours. Or reach out directly using the contact information below.
                </p>
              </div>

              <div className="space-y-6 mb-12">
                <div className="flex items-start space-x-4 bg-gradient-to-br from-[#0a0a1f] to-[#1a1a3f] p-6 rounded-2xl border border-cyan-500/20">
                  <div className="bg-gradient-to-r from-cyan-600 to-blue-600 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Email</h3>
                    <p className="text-cyan-400">hello@nexanova.ai</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 bg-gradient-to-br from-[#0a0a1f] to-[#1a1a3f] p-6 rounded-2xl border border-cyan-500/20">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Phone</h3>
                    <p className="text-cyan-400">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 bg-gradient-to-br from-[#0a0a1f] to-[#1a1a3f] p-6 rounded-2xl border border-cyan-500/20">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Location</h3>
                    <p className="text-cyan-400">San Francisco, CA</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#0a0a1f] to-[#1a1a3f] p-8 rounded-2xl border border-cyan-500/20">
                <h3 className="text-xl font-bold mb-4 flex items-center space-x-2">
                  <Clock className="w-6 h-6 text-cyan-400" />
                  <span>What to Expect</span>
                </h3>
                <ul className="space-y-3">
                  {[
                    "Response within 2 hours during business hours",
                    "30-minute free strategy consultation",
                    "Custom automation proposal",
                    "No obligation, no pressure"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#0a0a1f] to-[#1a1a3f] p-8 md:p-12 rounded-3xl border border-cyan-500/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500 rounded-full filter blur-[120px] opacity-10"></div>

              <div className="relative">
                <h3 className="text-2xl font-bold mb-6 flex items-center space-x-2">
                  <MessageSquare className="w-7 h-7 text-cyan-400" />
                  <span>Send us a message</span>
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold mb-2 text-gray-300">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#0a0a1f] border border-cyan-500/30 rounded-xl focus:outline-none focus:border-cyan-400 transition-colors text-white"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold mb-2 text-gray-300">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#0a0a1f] border border-cyan-500/30 rounded-xl focus:outline-none focus:border-cyan-400 transition-colors text-white"
                      placeholder="john@company.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold mb-2 text-gray-300">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#0a0a1f] border border-cyan-500/30 rounded-xl focus:outline-none focus:border-cyan-400 transition-colors text-white"
                      placeholder="Your Company"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold mb-2 text-gray-300">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#0a0a1f] border border-cyan-500/30 rounded-xl focus:outline-none focus:border-cyan-400 transition-colors text-white"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold mb-2 text-gray-300">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#0a0a1f] border border-cyan-500/30 rounded-xl focus:outline-none focus:border-cyan-400 transition-colors text-white resize-none"
                      placeholder="Tell us about your automation needs..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 px-8 py-4 rounded-xl text-lg font-bold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg shadow-cyan-500/50"
                  >
                    <span>Send Message</span>
                    <Send className="w-5 h-5" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-[#0d1428] to-[#0a0a1f]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">FAQ</span>
            </h2>
            <p className="text-xl text-gray-400">Quick answers to common questions</p>
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

      <style>{`
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

export default Contact;
