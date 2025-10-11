import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    setShowTooltip(false);
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        {isOpen && (
          <div className="mb-4 bg-gradient-to-br from-[#0d1428] to-[#1a1a3f] rounded-3xl shadow-2xl border border-cyan-500/30 overflow-hidden animate-slideUp">
            <div className="bg-gradient-to-r from-cyan-600 to-blue-600 p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-white">Nexanova Assistant</h3>
                  <p className="text-xs text-cyan-100">Ask us anything!</p>
                </div>
              </div>
              <button
                onClick={toggleChat}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>

            <div className="w-[380px] h-[600px] md:w-[400px] md:h-[650px]">
              <iframe
                src="https://creator.voiceflow.com/share/68d420c091c5ab19193c6efb/production"
                width="100%"
                height="100%"
                frameBorder="0"
                allow="microphone"
                title="Voiceflow Chat Assistant"
                className="bg-white"
              />
            </div>
          </div>
        )}

        <div className="relative">
          {showTooltip && !isOpen && (
            <div className="absolute bottom-full right-0 mb-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-4 py-2 rounded-full whitespace-nowrap shadow-lg animate-fadeIn">
              <span className="text-sm font-semibold">Chat with us 🤖</span>
              <div className="absolute top-full right-6 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-blue-600"></div>
            </div>
          )}

          <button
            onClick={toggleChat}
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            className="group relative w-16 h-16 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 rounded-full shadow-2xl shadow-cyan-500/50 flex items-center justify-center transition-all duration-300 transform hover:scale-110"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full opacity-0 group-hover:opacity-20 transition-opacity animate-pulse"></div>
            {isOpen ? (
              <X className="w-7 h-7 text-white relative z-10" />
            ) : (
              <MessageCircle className="w-7 h-7 text-white relative z-10 group-hover:scale-110 transition-transform" />
            )}
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 border-2 border-[#0a0a1f] rounded-full animate-pulse"></div>
          </button>
        </div>
      </div>

      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
      `}</style>
    </>
  );
}

export default ChatWidget;
