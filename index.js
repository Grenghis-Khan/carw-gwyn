import React, { useState, useEffect } from 'react';
import { Beer, Calendar, MapPin, Scroll, Utensils, X, Menu, ChevronRight, Mail, Instagram, Facebook } from 'lucide-react';

const CarwGwyn = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('home');

  // Load fonts
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700;900&family=MedievalSharp&family=Crimson+Text:ital,wght@0,400;0,600;1,400&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    return () => document.head.removeChild(link);
  }, []);

  const navItems = [
    { id: 'mead', label: 'Our Mead', icon: <Beer className="w-4 h-4" /> },
    { id: 'menu', label: 'Feast Menu', icon: <Utensils className="w-4 h-4" /> },
    { id: 'events', label: 'Events', icon: <Calendar className="w-4 h-4" /> },
    { id: 'about', label: 'About Us', icon: <Scroll className="w-4 h-4" /> },
  ];

  // Custom SVG for the Stag
  const StagIcon = ({ className }) => (
    <svg viewBox="0 0 100 100" className={className} fill="currentColor">
      <path d="M50 20 C 45 10, 30 5, 20 15 C 25 25, 35 30, 40 35 C 30 30, 10 25, 5 40 C 15 45, 35 50, 45 55 L 45 65 C 35 70, 30 80, 30 90 L 40 90 C 40 80, 45 75, 50 75 C 55 75, 60 80, 60 90 L 70 90 C 70 80, 65 70, 55 65 L 55 55 C 65 50, 85 45, 95 40 C 90 25, 70 30, 60 35 C 65 30, 75 25, 80 15 C 70 5, 55 10, 50 20 Z" />
    </svg>
  );

  // Custom SVG for Celtic Corner
  const CelticCorner = ({ className, rotate = 0 }) => (
    <svg viewBox="0 0 100 100" className={className} style={{ transform: `rotate(${rotate}deg)` }} fill="none" stroke="currentColor" strokeWidth="3">
      <path d="M10,90 Q10,10 90,10 M15,90 Q15,15 90,15 M20,90 Q20,20 90,20" opacity="0.6" />
      <path d="M5,95 Q5,5 95,5" strokeWidth="5" />
      <circle cx="15" cy="15" r="5" fill="currentColor" />
    </svg>
  );

  return (
    <div className="min-h-screen bg-[#dcbda1] text-[#2c1810] font-serif overflow-x-hidden relative selection:bg-[#8b4513] selection:text-[#f4e4bc]">
      {/* Parchment Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-40 mix-blend-multiply z-0"
           style={{
             backgroundImage: `url("https://www.transparenttextures.com/patterns/aged-paper.png")`,
             backgroundSize: '300px'
           }}></div>
      
      {/* Heavy Grain Overlay for realism */}
      <div className="fixed inset-0 pointer-events-none opacity-10 z-0"
        style={{
            filter: 'contrast(150%) brightness(100%)'
        }}
      >
        <svg className='w-full h-full opacity-20'>
            <filter id='noiseFilter'>
                <feTurbulence type='fractalNoise' baseFrequency='0.6' stitchTiles='stitch'/>
            </filter>
            <rect width='100%' height='100%' filter='url(#noiseFilter)'/>
        </svg>
      </div>

      <div className="relative z-10 flex flex-col min-h-screen max-w-7xl mx-auto shadow-2xl bg-[#f4e4bc] border-x-8 border-[#3e2723]">
        
        {/* Header */}
        <header className="relative pt-8 pb-12 px-4 text-center bg-[#3e2723] text-[#f4e4bc] border-b-8 border-[#8b4513] shadow-lg">
           {/* Decorative Border Pattern */}
           <div className="absolute bottom-0 left-0 right-0 h-4 bg-[#8b4513] flex items-center justify-center space-x-2 overflow-hidden">
              {[...Array(40)].map((_, i) => (
                  <div key={i} className="w-2 h-2 rotate-45 bg-[#d4af37]"></div>
              ))}
           </div>

          <div className="relative z-10 flex flex-col items-center justify-center">
            <div className="flex items-center justify-center space-x-4 mb-2 animate-fade-in-down">
               <div className="h-[2px] w-12 bg-[#d4af37] hidden md:block"></div>
               <StagIcon className="w-16 h-16 text-[#f4f4f4] drop-shadow-[0_0_10px_rgba(212,175,55,0.5)]" />
               <div className="h-[2px] w-12 bg-[#d4af37] hidden md:block"></div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-['MedievalSharp'] tracking-wider text-[#f4e4bc] drop-shadow-md">
              CARW <span className="text-[#d4af37]">GWYN</span>
            </h1>
            <p className="mt-2 font-['Cinzel'] text-[#d4af37] text-sm md:text-lg tracking-[0.3em] uppercase">
              Est. 2025 • Denver's Premier Mead Hall
            </p>
            <p className="text-xs text-[#a89f91] mt-1 italic">"The White Deer"</p>
          </div>

          {/* Navigation */}
          <nav className="mt-8 flex flex-wrap justify-center gap-4 md:gap-8 font-['Cinzel'] font-bold text-sm md:text-base">
            <button 
                onClick={() => setActiveTab('home')}
                className={`px-6 py-2 border-2 transition-all duration-300 transform hover:scale-105 ${activeTab === 'home' ? 'border-[#d4af37] text-[#d4af37] bg-[#2c1810]' : 'border-transparent hover:border-[#8b4513] hover:bg-[#2c1810]/50'}`}
            >
              Home
            </button>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center space-x-2 px-6 py-2 border-2 transition-all duration-300 transform hover:scale-105 ${activeTab === item.id ? 'border-[#d4af37] text-[#d4af37] bg-[#2c1810]' : 'border-transparent hover:border-[#8b4513] hover:bg-[#2c1810]/50'}`}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            ))}
          </nav>
        </header>

        {/* Main Content Area */}
        <main className="flex-grow p-6 md:p-12 relative">
          
          {/* Corner Decorations */}
          <CelticCorner className="absolute top-4 left-4 w-24 h-24 text-[#8b4513]" />
          <CelticCorner className="absolute top-4 right-4 w-24 h-24 text-[#8b4513]" rotate={90} />
          <CelticCorner className="absolute bottom-4 right-4 w-24 h-24 text-[#8b4513]" rotate={180} />
          <CelticCorner className="absolute bottom-4 left-4 w-24 h-24 text-[#8b4513]" rotate={270} />

          {/* Home Tab */}
          {activeTab === 'home' && (
            <div className="space-y-12 animate-fade-in">
              {/* Hero Image Area */}
              <div className="relative h-[400px] md:h-[500px] w-full rounded-lg overflow-hidden border-4 border-[#3e2723] shadow-2xl group">
                <img 
                  src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                  alt="Mead Hall Toast" 
                  className="w-full h-full object-cover sepia-[.3] transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2c1810] via-transparent to-transparent opacity-90"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-center">
                  <h2 className="text-3xl md:text-5xl font-['MedievalSharp'] text-[#f4e4bc] mb-4 drop-shadow-lg">
                    Drink. Feast. Be Merry.
                  </h2>
                  <button onClick={() => setActiveTab('menu')} className="px-8 py-3 bg-[#8b4513] text-[#f4e4bc] font-['Cinzel'] font-bold border-2 border-[#d4af37] hover:bg-[#d4af37] hover:text-[#2c1810] transition-colors shadow-lg uppercase tracking-widest">
                    View The Menu
                  </button>
                </div>
              </div>

              {/* Intro Text */}
              <div className="max-w-3xl mx-auto text-center space-y-6 px-4">
                <div className="flex items-center justify-center space-x-4 text-[#8b4513]">
                  <div className="h-px w-12 bg-[#8b4513]"></div>
                  <span className="font-['MedievalSharp'] text-2xl">Welcome Traveler</span>
                  <div className="h-px w-12 bg-[#8b4513]"></div>
                </div>
                <p className="font-['Crimson_Text'] text-xl leading-relaxed text-[#3e2723]">
                  Step into <span className="font-bold">Carw Gwyn</span>, Denver's hidden sanctuary of old-world charm. 
                  Here, the mead flows as golden as the sun, and the fire roars with the stories of old. 
                  Whether you seek the sweetness of honey wine or the heartiness of a warrior's feast, 
                  our hall welcomes all who wander.
                </p>
              </div>

              {/* Three Columns */}
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="bg-[#e6d2aa] p-6 rounded-sm border border-[#8b4513] shadow-inner text-center group hover:-translate-y-1 transition-transform duration-300">
                   <div className="w-16 h-16 mx-auto bg-[#3e2723] rounded-full flex items-center justify-center mb-4 border-2 border-[#d4af37]">
                      <Beer className="text-[#d4af37] w-8 h-8" />
                   </div>
                   <h3 className="font-['MedievalSharp'] text-xl mb-2 text-[#3e2723]">Artisan Meads</h3>
                   <p className="font-['Crimson_Text'] italic">Brewed in-house with local Colorado honey and ancient Welsh recipes.</p>
                </div>
                <div className="bg-[#e6d2aa] p-6 rounded-sm border border-[#8b4513] shadow-inner text-center group hover:-translate-y-1 transition-transform duration-300">
                   <div className="w-16 h-16 mx-auto bg-[#3e2723] rounded-full flex items-center justify-center mb-4 border-2 border-[#d4af37]">
                      <Utensils className="text-[#d4af37] w-8 h-8" />
                   </div>
                   <h3 className="font-['MedievalSharp'] text-xl mb-2 text-[#3e2723]">Hearty Fare</h3>
                   <p className="font-['Crimson_Text'] italic">Giant turkey legs, savory stews, and rustic breads to fill your belly.</p>
                </div>
                <div className="bg-[#e6d2aa] p-6 rounded-sm border border-[#8b4513] shadow-inner text-center group hover:-translate-y-1 transition-transform duration-300">
                   <div className="w-16 h-16 mx-auto bg-[#3e2723] rounded-full flex items-center justify-center mb-4 border-2 border-[#d4af37]">
                      <Scroll className="text-[#d4af37] w-8 h-8" />
                   </div>
                   <h3 className="font-['MedievalSharp'] text-xl mb-2 text-[#3e2723]">Live Music</h3>
                   <p className="font-['Crimson_Text'] italic">Bards and minstrels playing folk tunes every Friday and Saturday night.</p>
                </div>
              </div>

              {/* Bottom Illustration Area */}
              <div className="flex justify-between items-end px-4 opacity-80 mt-12 border-t border-[#8b4513]/30 pt-8">
                 <div className="hidden md:block text-center w-1/3">
                    <div className="text-6xl mb-2">🛡️</div>
                    <p className="font-['MedievalSharp'] text-xs">For Valor</p>
                 </div>
                 <div className="w-full md:w-1/3 text-center">
                    <h4 className="font-['MedievalSharp'] text-2xl mb-2 text-[#3e2723]">Join the Guild</h4>
                    <p className="font-['Crimson_Text'] mb-4 text-sm">Subscribe for news of feasts and tournaments.</p>
                    <div className="flex max-w-xs mx-auto">
                       <input type="email" placeholder="Your parchment address..." className="flex-1 bg-[#fff9e6] border border-[#8b4513] px-3 py-1 font-serif text-sm outline-none" />
                       <button className="bg-[#3e2723] text-[#d4af37] px-4 py-1 font-['Cinzel'] text-sm hover:bg-[#5d4037]">Join</button>
                    </div>
                 </div>
                 <div className="hidden md:block text-center w-1/3">
                    <div className="text-6xl mb-2">🏰</div>
                    <p className="font-['MedievalSharp'] text-xs">For Kingdom</p>
                 </div>
              </div>
            </div>
          )}

          {/* Menu Tab */}
          {activeTab === 'menu' && (
            <div className="animate-fade-in space-y-8 max-w-4xl mx-auto">
               <div className="text-center mb-12">
                  <h2 className="text-4xl font-['MedievalSharp'] text-[#3e2723] mb-2">The Feast Hall Menu</h2>
                  <div className="w-24 h-1 bg-[#8b4513] mx-auto"></div>
               </div>
               
               <div className="grid md:grid-cols-2 gap-12">
                  {/* Food */}
                  <div className="bg-[#fff9e6] p-8 shadow-lg border border-[#8b4513] relative">
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#3e2723] text-[#d4af37] px-6 py-1 font-['Cinzel'] text-sm uppercase tracking-widest">
                       Provisions
                    </div>
                    <ul className="space-y-6 mt-4">
                       <li className="flex justify-between items-baseline border-b border-dashed border-[#8b4513]/30 pb-2">
                          <div>
                             <h4 className="font-['MedievalSharp'] text-lg text-[#3e2723]">The King's Turkey Leg</h4>
                             <p className="text-sm italic text-[#5d4037]">Slow roasted, seasoned with sage & thyme</p>
                          </div>
                          <span className="font-bold font-['Cinzel'] text-[#8b4513]">$18</span>
                       </li>
                       <li className="flex justify-between items-baseline border-b border-dashed border-[#8b4513]/30 pb-2">
                          <div>
                             <h4 className="font-['MedievalSharp'] text-lg text-[#3e2723]">Dragonfire Stew</h4>
                             <p className="text-sm italic text-[#5d4037]">Spicy beef & root vegetable stew, served in bread</p>
                          </div>
                          <span className="font-bold font-['Cinzel'] text-[#8b4513]">$14</span>
                       </li>
                       <li className="flex justify-between items-baseline border-b border-dashed border-[#8b4513]/30 pb-2">
                          <div>
                             <h4 className="font-['MedievalSharp'] text-lg text-[#3e2723]">Ploughman's Board</h4>
                             <p className="text-sm italic text-[#5d4037]">Aged cheddar, crusty bread, pickles, cured meats</p>
                          </div>
                          <span className="font-bold font-['Cinzel'] text-[#8b4513]">$22</span>
                       </li>
                    </ul>
                  </div>

                  {/* Drinks */}
                  <div className="bg-[#fff9e6] p-8 shadow-lg border border-[#8b4513] relative">
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#3e2723] text-[#d4af37] px-6 py-1 font-['Cinzel'] text-sm uppercase tracking-widest">
                       Elixirs
                    </div>
                    <ul className="space-y-6 mt-4">
                       <li className="flex justify-between items-baseline border-b border-dashed border-[#8b4513]/30 pb-2">
                          <div>
                             <h4 className="font-['MedievalSharp'] text-lg text-[#3e2723]">Odin's Eye</h4>
                             <p className="text-sm italic text-[#5d4037]">Traditional dry mead, high ABV</p>
                          </div>
                          <span className="font-bold font-['Cinzel'] text-[#8b4513]">$10</span>
                       </li>
                       <li className="flex justify-between items-baseline border-b border-dashed border-[#8b4513]/30 pb-2">
                          <div>
                             <h4 className="font-['MedievalSharp'] text-lg text-[#3e2723]">Maiden's Blush</h4>
                             <p className="text-sm italic text-[#5d4037]">Sweet raspberry and hibiscus mead</p>
                          </div>
                          <span className="font-bold font-['Cinzel'] text-[#8b4513]">$9</span>
                       </li>
                       <li className="flex justify-between items-baseline border-b border-dashed border-[#8b4513]/30 pb-2">
                          <div>
                             <h4 className="font-['MedievalSharp'] text-lg text-[#3e2723]">Black Stag Stout</h4>
                             <p className="text-sm italic text-[#5d4037]">House brewed dark ale, notes of coffee</p>
                          </div>
                          <span className="font-bold font-['Cinzel'] text-[#8b4513]">$8</span>
                       </li>
                    </ul>
                  </div>
               </div>
            </div>
          )}

          {/* About Tab */}
          {activeTab === 'about' && (
             <div className="animate-fade-in max-w-3xl mx-auto text-center">
                <h2 className="text-4xl font-['MedievalSharp'] text-[#3e2723] mb-6">The Legend of the White Deer</h2>
                <div className="bg-[#fff9e6] p-8 border-double border-4 border-[#8b4513] transform rotate-1 shadow-xl">
                    <p className="font-['Crimson_Text'] text-lg leading-loose text-left indent-8 mb-4 text-[#3e2723]">
                       In Welsh mythology, the "Carw Gwyn" (White Stag) is a messenger from the otherworld. It appears when one is ready to embark on a spiritual quest. Here in Denver, we established this hall not just as a bar, but as a gathering place for those seeking something different from the modern world.
                    </p>
                    <p className="font-['Crimson_Text'] text-lg leading-loose text-left indent-8 text-[#3e2723]">
                       Constructed from reclaimed timber and styled after the great halls of the 12th century, Carw Gwyn invites you to leave your digital devices at the door (figuratively speaking) and engage in real conversation, heartfelt toasting, and the enjoyment of simple, well-crafted pleasures.
                    </p>
                    <div className="mt-8 flex justify-center">
                       <StagIcon className="w-24 h-24 text-[#8b4513] opacity-50" />
                    </div>
                </div>
             </div>
          )}

          {/* Events Tab */}
          {activeTab === 'events' && (
             <div className="animate-fade-in max-w-4xl mx-auto">
                <h2 className="text-4xl font-['MedievalSharp'] text-[#3e2723] text-center mb-8">Upcoming Gatherings</h2>
                <div className="space-y-6">
                   {[
                      { date: 'NOV 24', title: 'Bardic Circle Night', desc: 'Bring your instruments and stories. Free mead for performers.' },
                      { date: 'DEC 01', title: 'Yule Feast Reservation', desc: 'A 5-course traditional winter solstice dinner. Tickets required.' },
                      { date: 'DEC 08', title: 'Leatherworking Workshop', desc: 'Learn to make your own tankard strap with Master Craftsman John.' }
                   ].map((event, idx) => (
                      <div key={idx} className="flex flex-col md:flex-row items-center bg-[#e6d2aa] border border-[#8b4513] p-4 hover:bg-[#dcc290] transition-colors cursor-pointer">
                         <div className="bg-[#3e2723] text-[#d4af37] p-4 w-full md:w-32 text-center font-['Cinzel'] border-2 border-[#d4af37] mb-4 md:mb-0 md:mr-6">
                            <span className="block text-xl font-bold">{event.date.split(' ')[0]}</span>
                            <span className="block text-2xl">{event.date.split(' ')[1]}</span>
                         </div>
                         <div className="flex-1 text-center md:text-left">
                            <h3 className="text-xl font-['MedievalSharp'] text-[#3e2723]">{event.title}</h3>
                            <p className="text-[#5d4037] font-['Crimson_Text'] italic">{event.desc}</p>
                         </div>
                         <button className="mt-4 md:mt-0 px-6 py-2 border border-[#3e2723] text-[#3e2723] hover:bg-[#3e2723] hover:text-[#d4af37] font-['Cinzel'] text-sm transition-colors">
                            RSVP
                         </button>
                      </div>
                   ))}
                </div>
             </div>
          )}
        </main>

        {/* Footer */}
        <footer className="bg-[#2c1810] text-[#a89f91] pt-12 pb-6 border-t-8 border-[#8b4513] relative">
            <div className="absolute top-0 left-0 right-0 flex justify-center -mt-4">
               <div className="bg-[#2c1810] px-4 py-1 border-2 border-[#8b4513] rounded-full">
                  <StagIcon className="w-6 h-6 text-[#d4af37]" />
               </div>
            </div>
            <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8 text-center md:text-left">
               <div>
                  <h3 className="font-['MedievalSharp'] text-[#d4af37] text-xl mb-4">Carw Gwyn</h3>
                  <p className="text-sm mb-2">The finest mead hall in the Rockies.</p>
                  <p className="text-xs opacity-60">© 2025 Carw Gwyn Meadery.</p>
               </div>
               <div>
                  <h3 className="font-['MedievalSharp'] text-[#d4af37] text-xl mb-4">Find Us</h3>
                  <div className="flex items-center justify-center md:justify-start space-x-2 mb-2">
                     <MapPin className="w-4 h-4" />
                     <span className="text-sm">1234 Larimer St, Denver, CO 80202</span>
                  </div>
                  <div className="flex items-center justify-center md:justify-start space-x-2">
                     <Mail className="w-4 h-4" />
                     <span className="text-sm">keeper@carwgwyn.com</span>
                  </div>
               </div>
               <div>
                  <h3 className="font-['MedievalSharp'] text-[#d4af37] text-xl mb-4">Hours</h3>
                  <p className="text-sm">Wed - Thu: 4pm - 10pm</p>
                  <p className="text-sm">Fri - Sat: 4pm - 1am</p>
                  <p className="text-sm">Sun: 2pm - 9pm</p>
                  <div className="flex justify-center md:justify-start space-x-4 mt-4">
                     <Instagram className="w-5 h-5 hover:text-[#d4af37] cursor-pointer" />
                     <Facebook className="w-5 h-5 hover:text-[#d4af37] cursor-pointer" />
                  </div>
               </div>
            </div>
        </footer>
      </div>
    </div>
  );
};

export default CarwGwyn;