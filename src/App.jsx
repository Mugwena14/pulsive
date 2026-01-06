import React from 'react';
import { 
  Instagram, 
  Twitter, 
  Facebook, 
  Linkedin, 
  Home, 
  Info, 
  Briefcase, 
  Calendar, 
  Mail,
  Send,
  MessageCircle,
  Zap,
  Music,
  Users
} from 'lucide-react';

const App = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-purple-500/30">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 md:px-16 py-6 bg-black border-b border-white/5">
        <div className="flex items-center gap-2 group cursor-pointer">
          <span className="text-2xl font-black tracking-tighter">PULSE EVENTS</span>
        </div>

        <ul className="hidden lg:flex gap-10 text-[11px] font-bold tracking-[0.2em] text-gray-400">
          <li className="flex items-center gap-2 hover:text-purple-500 cursor-pointer transition-colors uppercase"><Home size={14} /> Home</li>
          <li className="flex items-center gap-2 hover:text-purple-500 cursor-pointer transition-colors uppercase"><Info size={14} /> About</li>
          <li className="flex items-center gap-2 hover:text-purple-500 cursor-pointer transition-colors uppercase"><Briefcase size={14} /> Services</li>
          <li className="flex items-center gap-2 hover:text-purple-500 cursor-pointer transition-colors uppercase"><Calendar size={14} /> Events</li>
          <li className="flex items-center gap-2 hover:text-purple-500 cursor-pointer transition-colors uppercase"><Mail size={14} /> Contact</li>
        </ul>
      </nav>

      {/* Hero Section */}
      <main className="relative min-h-[90vh] flex items-center px-8 md:px-20 py-20 overflow-hidden">
        
        {/* Social Media Sidebar (Left) */}
        <div className="absolute -mt-20 left-8 z-20 hidden xl:flex flex-col gap-6 items-center">
          <div className="w-[1px] h-20 bg-gradient-to-t from-purple-600 to-transparent"></div>
          <Instagram className="w-5 h-5 text-gray-400 hover:text-purple-500 cursor-pointer transition transform hover:scale-110" />
          <Twitter className="w-5 h-5 text-gray-400 hover:text-purple-500 cursor-pointer transition transform hover:scale-110" />
          <Facebook className="w-5 h-5 text-gray-400 hover:text-purple-500 cursor-pointer transition transform hover:scale-110" />
          <Linkedin className="w-5 h-5 text-gray-400 hover:text-purple-500 cursor-pointer transition transform hover:scale-110" />
          <div className="w-[1px] h-20 bg-gradient-to-b from-purple-600 to-transparent"></div>
        </div>

        {/* Background Visuals */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&q=80&w=2070" 
            alt="Venue" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent"></div>
        </div>

        {/* Content Wrapper */}
        <div className="relative z-10 w-full flex flex-col lg:flex-row items-center justify-between gap-16">
          
          {/* Left Side: Hero Text */}
          <div className="max-w-2xl -mt-20">
            <div className="flex items-center gap-3 mb-4 text-purple-400 font-bold tracking-[0.3em] text-sm uppercase">
              <div className="w-8 h-[2px] bg-purple-500"></div>
              Premium Venue Hire
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black leading-[0.9] mb-8">
              Host Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-500 to-purple-600">
                Unforgettable
              </span> <br />
              Moment
            </h1>
            
            <p className="text-gray-300 text-lg mb-10 max-w-lg leading-relaxed font-light">
              Experience the heartbeat of the city's premier event space. Perfect for concerts, weddings, and corporate galas.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="bg-purple-600 rounded-[10px] hover:bg-purple-700 text-white px-8 py-4 font-mono font-bold transition-all transform hover:translate-y-[-2px] uppercase text-xs tracking-widest">
                Explore Venues
              </button>
              <button className="border border-white/20 rounded-[10px] hover:bg-white/10 text-white px-8 py-4 font-mono font-bold transition-all uppercase text-xs tracking-widest backdrop-blur-sm">
                View Gallery
              </button>
            </div>
          </div>

          {/* Right Side: Informative Contact Card */}
          <div className="w-full -mt-5 max-w-md bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-2xl shadow-2xl">
            <h3 className="text-2xl font-black mb-6 tracking-tight">
              Ready to <span className="text-purple-500">Pulse?</span>
            </h3>
            
            {/* Informative Text List */}
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="mt-1 bg-purple-500/20 p-2 rounded-lg text-purple-400"><Zap size={18}/></div>
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-wider">Premium Sound</h4>
                  <p className="text-gray-400 text-sm font-light">Equipped with a world-class L-Acoustics sound system.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 bg-purple-500/20 p-2 rounded-lg text-purple-400"><Users size={18}/></div>
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-wider">Flexible Space</h4>
                  <p className="text-gray-400 text-sm font-light">Modular floor plans to accommodate 50 to 1,200 guests.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 bg-purple-500/20 p-2 rounded-lg text-purple-400"><Music size={18}/></div>
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-wider">In-house Tech</h4>
                  <p className="text-gray-400 text-sm font-light">Full AV support and cinematic LED screens included.</p>
                </div>
              </div>
            </div>

            {/* Direct Contact Buttons */}
            <div className="space-y-3">
              <button className="w-full bg-white text-black font-mono font-bold py-4 rounded-lg hover:bg-purple-500 hover:text-white transition-all flex items-center justify-center gap-2 uppercase text-xs tracking-tighter shadow-lg shadow-white/5">
                <Send size={14} /> Send Email Inquiry
              </button>
              
              <button className="w-full border border-green-500/30 bg-green-500/5 text-green-500 font-mono font-bold py-4 rounded-lg hover:bg-green-500 hover:text-white transition-all flex items-center justify-center gap-2 uppercase text-xs">
                <MessageCircle size={16} /> WhatsApp Support
              </button>
              
              <p className="text-center text-[10px] text-gray-500 font-mono pt-2 uppercase tracking-[0.2em]">
                Average Response Time: 2 Hours
              </p>
            </div>
          </div>

        </div>

        {/* Decorative Pulse Glow */}
        <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      </main>

      {/* Footer */}
      <footer className="grid grid-cols-1 md:grid-cols-3 gap-12 px-8 md:px-20 py-16 border-t border-white/5 bg-[#050505]">
        <div className="space-y-3">
          <h4 className="text-[10px] uppercase tracking-[0.3em] text-purple-500 font-black font-mono">Location</h4>
          <p className="text-gray-400 text-lg font-light leading-snug">123 Event Plaza, Downtown <br />Grand Ballroom District</p>
        </div>
        <div className="space-y-3">
          <h4 className="text-[10px] uppercase tracking-[0.3em] text-purple-500 font-black font-mono">Capacity</h4>
          <p className="text-gray-400 text-lg font-light leading-snug">Standing: 1,200 <br />Seated Banquet: 450</p>
        </div>
        <div className="space-y-3">
          <h4 className="text-[10px] uppercase tracking-[0.3em] text-purple-500 font-black font-mono">Contact</h4>
          <p className="text-gray-300 text-lg font-light">hello@pulseevents.com</p>
          <p className="text-gray-500 font-mono text-xs">+1 (555) 0123-4567</p>
        </div>
      </footer>
    </div>
  );
};

export default App;