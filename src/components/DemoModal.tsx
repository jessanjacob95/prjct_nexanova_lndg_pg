import { useEffect } from 'react';
import { X, PhoneCall } from 'lucide-react';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  demoTitle: string;
}

function DemoModal({ isOpen, onClose, demoTitle }: DemoModalProps) {
  useEffect(() => {
    if (isOpen && demoTitle === 'Call Automation') {
      const script = document.createElement('script');
      script.src = 'https://unpkg.com/@vapi-ai/client-sdk-react/dist/embed/widget.umd.js';
      script.async = true;
      script.type = 'text/javascript';
      document.body.appendChild(script);

      return () => {
        const existingScript = document.querySelector('script[src="https://unpkg.com/@vapi-ai/client-sdk-react/dist/embed/widget.umd.js"]');
        if (existingScript) {
          document.body.removeChild(existingScript);
        }
      };
    }

    if (isOpen && demoTitle === 'Website Building') {
      const script = document.createElement('script');
      script.src = 'https://player.vimeo.com/api/player.js';
      script.async = true;
      document.body.appendChild(script);

      return () => {
        const existingScript = document.querySelector('script[src="https://player.vimeo.com/api/player.js"]');
        if (existingScript) {
          document.body.removeChild(existingScript);
        }
      };
    }
  }, [isOpen, demoTitle]);

  if (!isOpen) return null;

  const isCallAutomation = demoTitle === 'Call Automation';
  const isWebsiteBuilding = demoTitle === 'Website Building';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fadeIn">
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-md"
        onClick={onClose}
      ></div>

      <div className={`relative bg-gradient-to-br from-[#0d1428] to-[#1a1a3f] rounded-3xl p-8 md:p-12 ${isWebsiteBuilding ? 'w-[75vw] h-[75vh]' : 'max-w-2xl w-full'} border border-cyan-500/30 shadow-2xl shadow-cyan-500/50 animate-scaleIn overflow-hidden`}>
        <div className="absolute -top-32 -right-32 w-64 h-64 bg-cyan-500 rounded-full filter blur-[120px] opacity-20"></div>
        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-blue-500 rounded-full filter blur-[120px] opacity-20"></div>

        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110 group z-10"
        >
          <X className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
        </button>

        <div className={`${isWebsiteBuilding ? 'h-full flex flex-col' : 'text-center'} relative`}>
          {isCallAutomation ? (
            <>
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r from-red-600 to-orange-600 mb-6 shadow-2xl shadow-red-500/50 animate-pulse">
                <PhoneCall className="w-10 h-10 text-white" />
              </div>

              <h2 className="text-3xl md:text-4xl font-black mb-4 bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
                {demoTitle}
              </h2>

              <p className="text-lg text-gray-300 mb-6">
                Experience our AI voice assistant in action. Click the button below to start a conversation!
              </p>

              <div className="bg-[#0a0a1f]/70 rounded-2xl p-8 mb-6 border border-cyan-500/30 backdrop-blur-sm min-h-[500px] flex flex-col items-center justify-center">
                <vapi-widget
                  public-key="89e97f60-3f7c-4f9e-baa8-9939172cc8e7"
                  assistant-id="cf78f71c-0c8a-487a-9599-b41ff1c5d4a9"
                  mode="voice"
                  theme="dark"
                  base-bg-color="#000000"
                  accent-color="#1438b8"
                  cta-button-color="#000000"
                  cta-button-text-color="#ffffff"
                  border-radius="large"
                  size="tiny"
                  position="bottom-left"
                  title="NEXA CALL"
                  start-button-text="Start"
                  end-button-text="End Call"
                  chat-first-message="Hey, How can I help you today?"
                  chat-placeholder="Type your message..."
                  voice-show-transcript="true"
                  consent-required="true"
                  consent-title="Terms and conditions"
                  consent-content="By clicking &quot;Agree,&quot; and each time I interact with this AI agent, I consent to the recording, storage, and sharing of my communications with third-party service providers, and as otherwise described in our Terms of Service."
                  consent-storage-key="vapi_widget_consent"
                ></vapi-widget>
              </div>

              <p className="text-sm text-gray-400 leading-relaxed">
                This is a live demo of our AI call automation system. Experience how our AI can handle customer inquiries, book appointments, and provide support 24/7.
              </p>
            </>
          ) : isWebsiteBuilding ? (
            <>
              <h2 className="text-3xl md:text-4xl font-black mb-6 bg-gradient-to-r from-yellow-400 to-green-500 bg-clip-text text-transparent text-center">
                {demoTitle}
              </h2>
              <div className="flex-1 relative rounded-2xl overflow-hidden">
                <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
                  <iframe
                    src="https://player.vimeo.com/video/1137870220?badge=0&autopause=0&player_id=0&app_id=58479"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                    title="Website Building Demo"
                  ></iframe>
                </div>
              </div>
            </>
          ) : (
            <>
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
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default DemoModal;
