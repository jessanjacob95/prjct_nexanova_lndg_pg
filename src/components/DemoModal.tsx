import { X } from 'lucide-react';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  demoTitle: string;
}

function DemoModal({ isOpen, onClose, demoTitle }: DemoModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fadeIn">
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      <div className="relative bg-gradient-to-br from-[#0d1428] to-[#1a1a3f] rounded-3xl p-8 md:p-12 max-w-2xl w-full border border-cyan-500/30 shadow-2xl shadow-cyan-500/20 animate-scaleIn">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors group"
        >
          <X className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
        </button>

        <div className="text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r from-cyan-600 to-blue-600 mb-6 shadow-lg shadow-cyan-500/50">
            <span className="text-4xl">🚀</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-black mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            {demoTitle}
          </h2>

          <div className="bg-[#0a0a1f]/50 rounded-2xl p-8 mb-6 border border-cyan-500/20">
            <p className="text-xl text-gray-300 mb-4">
              Demo Coming Soon!
            </p>
            <p className="text-gray-400 leading-relaxed">
              We're currently building an interactive demo for this automation. In the meantime, book a free strategy call to see it in action and learn how it can transform your business.
            </p>
          </div>

          <button
            onClick={onClose}
            className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/30"
          >
            Got It
          </button>

          <p className="mt-4 text-sm text-gray-500">
            Want to see it now?{' '}
            <a href="#cta" className="text-cyan-400 hover:text-cyan-300 font-semibold transition-colors">
              Book a free call
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default DemoModal;
