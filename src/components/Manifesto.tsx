
import React from 'react';
import TerminalWindow from './TerminalWindow';
import GlitchText from './GlitchText';
import { Flame, Code, Zap, Shield } from 'lucide-react';

const Manifesto: React.FC = () => {
  return (
    <section className="py-20 px-4 relative">
      {/* Background ASCII art */}
      <div className="absolute inset-0 opacity-5 font-terminal text-xs overflow-hidden">
        <pre className="text-ares-green leading-3">
{`
██████╗ ███████╗██████╗ ███████╗██╗     ██╗     ██╗ ██████╗ ███╗   ██╗
██╔══██╗██╔════╝██╔══██╗██╔════╝██║     ██║     ██║██╔═══██╗████╗  ██║
██████╔╝█████╗  ██████╔╝█████╗  ██║     ██║     ██║██║   ██║██╔██╗ ██║
██╔══██╗██╔══╝  ██╔══██╗██╔══╝  ██║     ██║     ██║██║   ██║██║╚██╗██║
██║  ██║███████╗██████╔╝███████╗███████╗███████╗██║╚██████╔╝██║ ╚████║
╚═╝  ╚═╝╚══════╝╚═════╝ ╚══════╝╚══════╝╚══════╝╚═╝ ╚═════╝ ╚═╝  ╚═══╝
`}
        </pre>
      </div>

      <div className="max-w-4xl mx-auto">
        <TerminalWindow title="manifesto.exe" className="mb-12">
          <div className="space-y-4">
            <div className="text-ares-red">{'>'} ./initialize_ares_protocol.sh</div>
            <div className="text-ares-blue">Loading manifesto...</div>
            <div className="text-ares-green">✓ Digital berserker mode: ACTIVATED</div>
          </div>
        </TerminalWindow>

        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-brutalist font-black mb-8">
            <GlitchText text="WE ARE ARES" className="text-ares-red" />
          </h2>
          <div className="text-2xl font-terminal text-ares-blue mb-4">
            The loud and unapologetic sibling of 4J
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="neon-border border-ares-red p-6">
            <div className="flex items-center gap-3 mb-4">
              <Flame className="text-ares-red" size={32} />
              <h3 className="text-2xl font-brutalist text-ares-red">REBELLIOUS</h3>
            </div>
            <p className="font-terminal text-gray-300">
              We don't follow the rules. We rewrite them. Every line of code is an act of rebellion 
              against the ordinary, the safe, the boring.
            </p>
          </div>

          <div className="neon-border border-ares-blue p-6">
            <div className="flex items-center gap-3 mb-4">
              <Zap className="text-ares-blue" size={32} />
              <h3 className="text-2xl font-brutalist text-ares-blue">LOUD</h3>
            </div>
            <p className="font-terminal text-gray-300">
              Our work screams. Our design roars. We build software that demands attention 
              and refuses to be ignored in a world of whispers.
            </p>
          </div>

          <div className="neon-border border-ares-green p-6">
            <div className="flex items-center gap-3 mb-4">
              <Code className="text-ares-green" size={32} />
              <h3 className="text-2xl font-brutalist text-ares-green">FREE</h3>
            </div>
            <p className="font-terminal text-gray-300">
              Unleashed from conventions. Liberated from limitations. We craft code 
              with the fury of creation itself, bound by nothing but imagination.
            </p>
          </div>

          <div className="neon-border border-ares-violet p-6">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="text-ares-violet" size={32} />
              <h3 className="text-2xl font-brutalist text-ares-violet">LEGENDARY</h3>
            </div>
            <p className="font-terminal text-gray-300">
              We don't just build software. We forge digital legends. Projects that live 
              in memory long after the code is deployed.
            </p>
          </div>
        </div>

        <div className="text-center">
          <div className="text-3xl md:text-4xl font-brutalist text-white mb-6">
            <GlitchText text="YOU DON'T COME TO US FOR SAFE." />
          </div>
          <div className="text-2xl md:text-3xl font-brutalist text-ares-red">
            YOU COME FOR LEGENDARY.
          </div>
          
          <div className="mt-12 p-8 bg-ares-gray border-l-4 border-ares-red">
            <p className="text-xl font-terminal text-gray-300 leading-relaxed">
              "In the forge of chaos, where pixels burn bright and code screams truth, 
              we are the architects of digital rebellion. Every commit is a battle cry. 
              Every deployment, a declaration of war against the mundane."
            </p>
            <div className="text-right mt-4 text-ares-red font-brutalist">
              — THE ARES COLLECTIVE
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Manifesto;
