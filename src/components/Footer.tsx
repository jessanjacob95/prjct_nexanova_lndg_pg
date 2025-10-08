import { Link } from 'react-router-dom';
import { Zap } from 'lucide-react';

function Footer() {
  return (
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
            <h4 className="font-bold text-lg mb-4 text-cyan-400">Quick Links</h4>
            <ul className="space-y-3 text-gray-400">
              <li><Link to="/" className="hover:text-cyan-400 transition-colors">Home</Link></li>
              <li><Link to="/solutions" className="hover:text-cyan-400 transition-colors">Solutions</Link></li>
              <li><Link to="/about" className="hover:text-cyan-400 transition-colors">About</Link></li>
              <li><Link to="/case-studies" className="hover:text-cyan-400 transition-colors">Case Studies</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-cyan-400">Company</h4>
            <ul className="space-y-3 text-gray-400">
              <li><Link to="/contact" className="hover:text-cyan-400 transition-colors">Contact</Link></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Careers</a></li>
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
  );
}

export default Footer;
