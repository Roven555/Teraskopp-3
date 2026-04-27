import { useState } from 'react';
import { Facebook, Instagram, Menu, X, Shovel, Mountain, Droplets, Trees } from 'lucide-react';
import Gallery from './components/Gallery';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('avaleht');
  const [showGallery, setShowGallery] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      {showGallery ? (
        <Gallery onClose={() => setShowGallery(false)} />
      ) : (
    <div className="min-h-screen bg-[#1a1a1a]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/80 to-transparent backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-12 h-12 bg-gradient-to-br from-[#2d5016] to-[#1a3009] rounded-lg flex items-center justify-center">
                <Shovel className="w-6 h-6 text-[#FDB71A]" />
              </div>
              <span className="text-xl font-bold text-[#f5f5dc] tracking-tight">TERASKOPP OÜ</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('avaleht')}
                className={`text-sm font-medium tracking-wide transition-all ${
                  activeSection === 'avaleht'
                    ? 'text-[#f5f5dc] border-b-2 border-[#2d5016] pb-1'
                    : 'text-[#a89f91] hover:text-[#f5f5dc]'
                }`}
              >
                AVALEHT
              </button>
              <button
                onClick={() => scrollToSection('tehtud-tood')}
                className={`text-sm font-medium tracking-wide transition-all ${
                  activeSection === 'tehtud-tood'
                    ? 'text-[#f5f5dc] border-b-2 border-[#2d5016] pb-1'
                    : 'text-[#a89f91] hover:text-[#f5f5dc]'
                }`}
              >
                TEHTUD TÖÖD
              </button>
              <button
                onClick={() => scrollToSection('teenused')}
                className={`text-sm font-medium tracking-wide transition-all ${
                  activeSection === 'teenused'
                    ? 'text-[#f5f5dc] border-b-2 border-[#2d5016] pb-1'
                    : 'text-[#a89f91] hover:text-[#f5f5dc]'
                }`}
              >
                TEENUSED
              </button>
              <button
                onClick={() => scrollToSection('kontakt')}
                className={`text-sm font-medium tracking-wide transition-all ${
                  activeSection === 'kontakt'
                    ? 'text-[#f5f5dc] border-b-2 border-[#2d5016] pb-1'
                    : 'text-[#a89f91] hover:text-[#f5f5dc]'
                }`}
              >
                KONTAKT
              </button>
              <button
                onClick={() => scrollToSection('kontakt')}
                className="bg-[#FDB71A] hover:bg-[#e5a615] text-[#1a1a1a] px-6 py-2.5 rounded-lg font-bold text-sm tracking-wide transition-all shadow-lg shadow-[#FDB71A]/30 hover:shadow-xl hover:shadow-[#FDB71A]/40"
              >
                KÜSI PAKKUMIST
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-[#f5f5dc] hover:text-[#FDB71A] transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-3 border-t border-[#2d5016]/30 pt-4">
              <button
                onClick={() => scrollToSection('avaleht')}
                className="block w-full text-left text-[#a89f91] hover:text-[#f5f5dc] py-2 px-4 rounded transition-colors"
              >
                AVALEHT
              </button>
              <button
                onClick={() => scrollToSection('tehtud-tood')}
                className="block w-full text-left text-[#a89f91] hover:text-[#f5f5dc] py-2 px-4 rounded transition-colors"
              >
                TEHTUD TÖÖD
              </button>
              <button
                onClick={() => scrollToSection('teenused')}
                className="block w-full text-left text-[#a89f91] hover:text-[#f5f5dc] py-2 px-4 rounded transition-colors"
              >
                TEENUSED
              </button>
              <button
                onClick={() => scrollToSection('kontakt')}
                className="block w-full text-left text-[#a89f91] hover:text-[#f5f5dc] py-2 px-4 rounded transition-colors"
              >
                KONTAKT
              </button>
              <button
                onClick={() => scrollToSection('kontakt')}
                className="w-full bg-[#FDB71A] hover:bg-[#e5a615] text-[#1a1a1a] px-6 py-2.5 rounded-lg font-bold text-sm tracking-wide transition-all"
              >
                KÜSI PAKKUMIST
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="avaleht"
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1770764598158-331fa2e83579?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGNhdmF0b3IlMjBmb3Jlc3QlMjB3b3JrfGVufDF8fHx8MTc3NjMzMzY2Mnww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Excavator in forest"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-[#1a1a1a]"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-[#f5f5dc] mb-6 tracking-tight leading-tight">
            USALDUSVÄÄRSED
            <br />
            <span className="text-[#2d5016] drop-shadow-[0_0_30px_rgba(45,80,22,0.8)]">
              KAEVE- JA METSANDUSTEENUSED
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-[#a89f91] mb-10 font-medium tracking-wide">
            Täpsus, võimsus ja kvaliteet igas projektis.
          </p>
          <button
            onClick={() => scrollToSection('kontakt')}
            className="bg-[#FDB71A] hover:bg-[#e5a615] text-[#1a1a1a] px-10 py-5 rounded-xl font-black text-lg tracking-widest transition-all shadow-2xl shadow-[#FDB71A]/50 hover:shadow-[#FDB71A]/70 hover:scale-105 transform"
          >
            KÜSI PAKKUMIST
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-[#f5f5dc]/40 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-[#f5f5dc]/60 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Tehtud Tööd Section */}
      <section id="tehtud-tood" className="py-24 bg-gradient-to-b from-[#1a1a1a] to-[#2d5016]/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-[#f5f5dc] mb-4 tracking-tight">
              TEHTUD TÖÖD
            </h2>
            <p className="text-lg text-[#a89f91] max-w-2xl mx-auto">
              Vaadake meie viimaseid projekte ja veenduge meie kogemuses
            </p>
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {/* Project 1 */}
            <div className="group relative overflow-hidden rounded-xl shadow-2xl hover:shadow-[#FDB71A]/20 transition-all duration-300 hover:scale-105">
              <img
                src="https://images.unsplash.com/photo-1559420902-02121fcdb2b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb25kJTIwZXhjYXZhdGlvbnxlbnwxfHx8fDE3NzYzMzM2NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Pond excavation"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/60 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-2xl font-bold text-[#f5f5dc] mb-2">Tiigi Rajamine</h3>
                  <p className="text-[#a89f91]">Dekoratiivne veekogud</p>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="group relative overflow-hidden rounded-xl shadow-2xl hover:shadow-[#FDB71A]/20 transition-all duration-300 hover:scale-105">
              <img
                src="https://images.unsplash.com/photo-1740485132839-3edd43060988?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYW5kJTIwZ3JhZGluZyUyMGNvbnN0cnVjdGlvbnxlbnwxfHx8fDE3NzYzMzM2NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Land grading"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/60 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-2xl font-bold text-[#f5f5dc] mb-2">Planeerimistööd</h3>
                  <p className="text-[#a89f91]">Maa ettevalmistus ehituseks</p>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="group relative overflow-hidden rounded-xl shadow-2xl hover:shadow-[#FDB71A]/20 transition-all duration-300 hover:scale-105">
              <img
                src="https://images.unsplash.com/photo-1661950571114-35f6979f7eb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3Jlc3QlMjBjbGVhcmluZyUyMG1hY2hpbmVyeXxlbnwxfHx8fDE3NzYzMzM2NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Forest clearing"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/60 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-2xl font-bold text-[#f5f5dc] mb-2">Metsatööd</h3>
                  <p className="text-[#a89f91]">Võsa lõikus ja raie</p>
                </div>
              </div>
            </div>

            {/* Project 4 */}
            <div className="group relative overflow-hidden rounded-xl shadow-2xl hover:shadow-[#FDB71A]/20 transition-all duration-300 hover:scale-105">
              <img
                src="https://images.unsplash.com/photo-1773380498433-f6c511f82e40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXRjaCUyMGV4Y2F2YXRpb258ZW58MXx8fHwxNzc2MzMzNjYyfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Ditch excavation"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/60 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-2xl font-bold text-[#f5f5dc] mb-2">Kraavide Kaevamine</h3>
                  <p className="text-[#a89f91]">Drenaaži süsteemid</p>
                </div>
              </div>
            </div>

            {/* Project 5 */}
            <div className="group relative overflow-hidden rounded-xl shadow-2xl hover:shadow-[#FDB71A]/20 transition-all duration-300 hover:scale-105">
              <img
                src="https://images.unsplash.com/photo-1684600048629-09086734796d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBlcXVpcG1lbnQlMjBzdW5zZXR8ZW58MXx8fHwxNzc2MzMzNjYyfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Construction equipment"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/60 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-2xl font-bold text-[#f5f5dc] mb-2">Suurprojektid</h3>
                  <p className="text-[#a89f91]">Keerukad maatööd</p>
                </div>
              </div>
            </div>

            {/* Project 6 */}
            <div className="group relative overflow-hidden rounded-xl shadow-2xl hover:shadow-[#FDB71A]/20 transition-all duration-300 hover:scale-105">
              <img
                src="https://images.unsplash.com/photo-1770764598158-331fa2e83579?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGNhdmF0b3IlMjBmb3Jlc3QlMjB3b3JrfGVufDF8fHx8MTc3NjMzMzY2Mnww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Forest excavation"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/60 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-2xl font-bold text-[#f5f5dc] mb-2">Metsateed</h3>
                  <p className="text-[#a89f91]">Juurdepääsuteede rajamine</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button onClick={() => setShowGallery(true)} className="bg-[#2d5016] hover:bg-[#3d6a1f] text-[#f5f5dc] px-8 py-4 rounded-lg font-bold text-sm tracking-widest transition-all shadow-lg hover:shadow-xl border-2 border-[#2d5016] hover:border-[#FDB71A]">
              VAATA GALERIID
            </button>
          </div>
        </div>
      </section>

      {/* Teenused Section */}
      <section id="teenused" className="py-24 bg-[#3d2f1f]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-[#f5f5dc] mb-4 tracking-tight">
              TEENUSED
            </h2>
            <p className="text-lg text-[#a89f91] max-w-2xl mx-auto">
              Professionaalsed kaeve- ja metsanduseteenused kõikidele projektidele
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Service 1 */}
            <div className="bg-gradient-to-br from-[#2d2418] to-[#1a1510] rounded-xl p-8 shadow-xl hover:shadow-2xl hover:shadow-[#FDB71A]/10 transition-all border border-[#4a3829] hover:border-[#FDB71A]/50 hover:scale-105 transform">
              <div className="w-16 h-16 bg-[#2d5016] rounded-lg flex items-center justify-center mb-6 shadow-lg">
                <Shovel className="w-8 h-8 text-[#FDB71A]" />
              </div>
              <h3 className="text-2xl font-bold text-[#f5f5dc] mb-3">KRAAVIDE KAEVAMINE</h3>
              <p className="text-[#a89f91] leading-relaxed">
                Professionaalsed kraavitööd, drenaaži süsteemid ja veetööd.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-gradient-to-br from-[#2d2418] to-[#1a1510] rounded-xl p-8 shadow-xl hover:shadow-2xl hover:shadow-[#FDB71A]/10 transition-all border border-[#4a3829] hover:border-[#FDB71A]/50 hover:scale-105 transform">
              <div className="w-16 h-16 bg-[#2d5016] rounded-lg flex items-center justify-center mb-6 shadow-lg">
                <Mountain className="w-8 h-8 text-[#FDB71A]" />
              </div>
              <h3 className="text-2xl font-bold text-[#f5f5dc] mb-3">PLANEERIMISTÖÖD</h3>
              <p className="text-[#a89f91] leading-relaxed">
                Maa planeerimistööd, tasandamine ja ehituseks ettevalmistus.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-gradient-to-br from-[#2d2418] to-[#1a1510] rounded-xl p-8 shadow-xl hover:shadow-2xl hover:shadow-[#FDB71A]/10 transition-all border border-[#4a3829] hover:border-[#FDB71A]/50 hover:scale-105 transform">
              <div className="w-16 h-16 bg-[#2d5016] rounded-lg flex items-center justify-center mb-6 shadow-lg">
                <Droplets className="w-8 h-8 text-[#FDB71A]" />
              </div>
              <h3 className="text-2xl font-bold text-[#f5f5dc] mb-3">TIIGID JA VEEKOGUD</h3>
              <p className="text-[#a89f91] leading-relaxed">
                Dekoratiivsed tiigid, veehoidlad ja veekogude rajamine.
              </p>
            </div>

            {/* Service 4 */}
            <div className="bg-gradient-to-br from-[#2d2418] to-[#1a1510] rounded-xl p-8 shadow-xl hover:shadow-2xl hover:shadow-[#FDB71A]/10 transition-all border border-[#4a3829] hover:border-[#FDB71A]/50 hover:scale-105 transform">
              <div className="w-16 h-16 bg-[#2d5016] rounded-lg flex items-center justify-center mb-6 shadow-lg">
                <Trees className="w-8 h-8 text-[#FDB71A]" />
              </div>
              <h3 className="text-2xl font-bold text-[#f5f5dc] mb-3">VÕSAGILJOTIIN JA RAIETÖÖD</h3>
              <p className="text-[#a89f91] leading-relaxed">
                Võsa lõikustööd, metsaraie ja metsatehnika teenused.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Kontakt Section */}
      <section id="kontakt" className="py-24 bg-gradient-to-b from-[#1a1a1a] to-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-[#f5f5dc] mb-4 tracking-tight">
              VÕTA ÜHENDUST
            </h2>
            <p className="text-lg text-[#a89f91] max-w-2xl mx-auto">
              Küsi pakkumist või konsultatsiooni oma projektile
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gradient-to-br from-[#2d2418] to-[#1a1510] rounded-2xl p-8 shadow-2xl border border-[#4a3829]">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-[#f5f5dc] font-bold mb-2">
                    NIMI
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-[#0d0d0d] border-2 border-[#2d5016] rounded-lg px-4 py-3 text-[#f5f5dc] focus:outline-none focus:border-[#FDB71A] transition-colors"
                    placeholder="Teie nimi"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-[#f5f5dc] font-bold mb-2">
                    E-MAIL
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-[#0d0d0d] border-2 border-[#2d5016] rounded-lg px-4 py-3 text-[#f5f5dc] focus:outline-none focus:border-[#FDB71A] transition-colors"
                    placeholder="teie@email.ee"
                  />
                </div>

                <div>
                  <label htmlFor="project" className="block text-[#f5f5dc] font-bold mb-2">
                    PROJEKTI KIRJELDUS
                  </label>
                  <textarea
                    id="project"
                    rows={6}
                    className="w-full bg-[#0d0d0d] border-2 border-[#2d5016] rounded-lg px-4 py-3 text-[#f5f5dc] focus:outline-none focus:border-[#FDB71A] transition-colors resize-none"
                    placeholder="Kirjeldage oma projekti..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#FDB71A] hover:bg-[#e5a615] text-[#1a1a1a] px-8 py-4 rounded-lg font-black text-lg tracking-widest transition-all shadow-lg shadow-[#FDB71A]/30 hover:shadow-xl hover:shadow-[#FDB71A]/50"
                >
                  SAADA SÕNUM
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Company Details */}
              <div className="bg-gradient-to-br from-[#2d2418] to-[#1a1510] rounded-2xl p-8 shadow-2xl border border-[#4a3829]">
                <h3 className="text-2xl font-bold text-[#f5f5dc] mb-6">KONTAKTANDMED</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-[#a89f91] text-sm font-bold mb-1">TELEFON</p>
                    <p className="text-[#f5f5dc] text-xl font-bold">+372 XXX XXXX</p>
                  </div>
                  <div>
                    <p className="text-[#a89f91] text-sm font-bold mb-1">E-MAIL</p>
                    <p className="text-[#f5f5dc] text-xl font-bold">info@teraskopp.ee</p>
                  </div>
                  <div>
                    <p className="text-[#a89f91] text-sm font-bold mb-1">AADRESS</p>
                    <p className="text-[#f5f5dc] text-xl font-bold">Eesti</p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="bg-gradient-to-br from-[#2d2418] to-[#1a1510] rounded-2xl p-8 shadow-2xl border border-[#4a3829] h-64 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#2d5016] rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8 text-[#FDB71A]"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                  </div>
                  <p className="text-[#a89f91] text-lg">Teenindame kogu Eestit</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0d0d0d] border-t border-[#2d5016]/30 py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#2d5016] to-[#1a3009] rounded-lg flex items-center justify-center">
                <Shovel className="w-5 h-5 text-[#FDB71A]" />
              </div>
              <p className="text-[#a89f91]">© 2024 Teraskopp OÜ. Kõik õigused kaitstud.</p>
            </div>

            <div className="flex items-center space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-[#2d5016] hover:bg-[#FDB71A] rounded-full flex items-center justify-center transition-all group"
              >
                <Facebook className="w-5 h-5 text-[#f5f5dc] group-hover:text-[#1a1a1a]" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[#2d5016] hover:bg-[#FDB71A] rounded-full flex items-center justify-center transition-all group"
              >
                <Instagram className="w-5 h-5 text-[#f5f5dc] group-hover:text-[#1a1a1a]" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
      )}
    </>
  );
}
