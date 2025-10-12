import { X } from 'lucide-react';
import { useEffect } from 'react';

interface VapiModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function VapiModal({ isOpen, onClose }: VapiModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    const script = document.createElement('script');
    script.src = 'https://unpkg.com/@vapi-ai/client-sdk-react/dist/embed/widget.umd.js';
    script.async = true;
    script.type = 'text/javascript';
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fadeIn">
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-md"
        onClick={onClose}
      ></div>

      <div className="relative bg-gradient-to-br from-[#0d1428] to-[#1a1a3f] rounded-3xl p-8 md:p-10 max-w-2xl w-full border border-cyan-500/30 shadow-2xl shadow-cyan-500/30 animate-scaleIn">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 group z-10 backdrop-blur-sm border border-white/10"
        >
          <X className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
        </button>

        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r from-red-600 to-orange-600 mb-4 shadow-lg shadow-red-500/50">
            <span className="text-4xl">📞</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-black mb-2 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Talk to Our AI Agent
          </h2>

          <p className="text-gray-400 text-lg">
            Experience our call automation in action
          </p>
        </div>

        <div className="bg-[#0a0a1f]/50 rounded-2xl border border-cyan-500/20 overflow-hidden">
          <div className="h-[500px] flex items-center justify-center">
            <vapi-widget
              assistant-id="cf78f71c-0c8a-487a-9599-b41ff1c5d4a9"
              public-key="89e97f60-3f7c-4f9e-baa8-9939172cc8e7"
            />
          </div>
        </div>

        <p className="mt-6 text-sm text-gray-500 text-center">
          Click the microphone icon to start talking with our AI assistant
        </p>
      </div>
    </div>
  );
}

export default VapiModal;
