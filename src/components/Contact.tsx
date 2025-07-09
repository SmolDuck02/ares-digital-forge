
import React from 'react';
import GlitchText from './GlitchText';
import TerminalWindow from './TerminalWindow';
import { Mail, MessageSquare, Zap, Github, Twitter } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-brutalist font-black mb-6 text-white">
            <GlitchText text="READY TO BUILD" />
          </h2>
          <div className="text-3xl md:text-4xl font-brutalist text-ares-red mb-8">
            SOMETHING INSANE?
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Direct Contact */}
          <TerminalWindow title="direct_contact.exe">
            <div className="space-y-4">
              <div className="text-ares-red font-bold">{'>'} WANNA BUILD SOMETHING LEGENDARY?</div>
              <div className="text-ares-green">Ping us. No suits allowed.</div>
              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="text-ares-blue" size={20} />
                  <span className="font-terminal text-white">forge@ares.dev</span>
                </div>
                <div className="flex items-center gap-3">
                  <MessageSquare className="text-ares-green" size={20} />
                  <span className="font-terminal text-white">Slack: #ares-forge</span>
                </div>
                <div className="flex items-center gap-3">
                  <Zap className="text-ares-red" size={20} />
                  <span className="font-terminal text-white">Discord: AresCollective</span>
                </div>
              </div>
            </div>
          </TerminalWindow>

          {/* Rules of Engagement */}
          <TerminalWindow title="engagement_rules.txt">
            <div className="space-y-3 text-sm">
              <div className="text-ares-red">[WARNING] ENGAGEMENT PROTOCOL:</div>
              <div className="text-gray-300">
                • Bring ideas that scare you<br/>
                • No corporate buzzword bingo<br/>
                • Ready for digital warfare<br/>
                • Budget for chaos & glory<br/>
                • Expect the unexpected
              </div>
              <div className="text-ares-green mt-4">✓ READY FOR LEGENDARY STATUS</div>
            </div>
          </TerminalWindow>
        </div>

        {/* Social Links */}
        <div className="text-center mb-12">
          <div className="text-xl font-terminal text-ares-green mb-6">
            FIND US IN THE DIGITAL UNDERGROUND
          </div>
          <div className="flex justify-center gap-8">
            <a
              href="#"
              className="text-ares-red hover:text-white transition-colors group"
            >
              <Github size={32} className="group-hover:animate-pulse" />
            </a>
            <a
              href="#"
              className="text-ares-blue hover:text-white transition-colors group"
            >
              <Twitter size={32} className="group-hover:animate-pulse" />
            </a>
            <a
              href="#"
              className="text-ares-violet hover:text-white transition-colors group"
            >
              <MessageSquare size={32} className="group-hover:animate-pulse" />
            </a>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <div className="neon-border border-ares-red p-8 mb-8">
            <div className="text-2xl font-brutalist text-white mb-4">
              NOT READY FOR THE FORGE?
            </div>
            <div className="text-lg font-terminal text-gray-300 mb-6">
              Check out our sibling site for more traditional approaches:
            </div>
            <button className="px-6 py-3 border-2 border-ares-blue text-ares-blue font-brutalist uppercase tracking-wider hover:bg-ares-blue hover:text-ares-black transition-all duration-200">
              VISIT 4J STUDIOS
            </button>
          </div>

          <div className="font-terminal text-ares-green text-sm">
            <div>System Status: READY FOR DEPLOYMENT</div>
            <div className="text-gray-500 mt-2">
              © 2024 ARES Digital Forge • Chaos by Design • Legends by Code
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
