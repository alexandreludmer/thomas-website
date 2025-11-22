import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Paintbrush, Home, Shield, ArrowRight, Star, CheckCircle2, Instagram, Facebook, Menu, X, Droplets, Clock, FileCheck, Sparkles, ChevronDown, MessageCircle, Users, Trophy, Calendar, Palette, Ruler, Hammer } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import BeforeAfterSlider from './components/BeforeAfterSlider';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const { scrollYProgress } = useScroll();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  // FAQ Data
  const faqs = [
    { question: "Les devis sont-ils gratuits ?", answer: "Oui, tous nos déplacements et devis sont 100% gratuits et sans engagement sur Perpignan et les alentours." },
    { question: "Intervenez-vous après un dégât des eaux ?", answer: "Absolument. Nous sommes experts en gestion de sinistres et travaillons en direct avec les assurances pour faciliter vos démarches." },
    { question: "Protégez-vous les meubles et les sols ?", answer: "C'est notre priorité. Aucun chantier ne commence sans une protection méticuleuse (bâchage, scotch de précision) de votre mobilier et de vos sols." },
    { question: "Avez-vous une garantie décennale ?", answer: "Oui, tous nos travaux sont couverts par une garantie décennale et une responsabilité civile professionnelle à jour." }
  ];

  return (
    <div className="min-h-screen bg-surface font-sans text-text selection:bg-secondary selection:text-white">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-catalan-red origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />

      {/* A. Header / Navigation (Sticky & Minimalist) */}
      <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            {/* Logo */}
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-catalan-red to-catalan-yellow rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
                <div className="relative bg-white border border-gray-100 p-2.5 rounded-lg shadow-sm group-hover:shadow-md transition duration-300">
                  <Paintbrush className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-heading font-bold text-primary tracking-tight leading-none">PERPIGNAN</span>
                <span className="text-xs font-medium text-secondary tracking-[0.2em] uppercase">Peinture & Rénovation</span>
              </div>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-10">
              {['Accueil', 'Réalisations', 'Expertises', 'Philosophie', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`}
                  className="text-sm font-medium text-text-light hover:text-primary transition relative group py-2"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-catalan-red to-catalan-yellow transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}

              <a href="#contact" className="bg-primary text-white px-7 py-3 rounded-full font-bold hover:bg-primary-light transition shadow-lg hover:shadow-primary/30 transform hover:-translate-y-0.5 duration-300 text-sm tracking-wide flex items-center gap-2">
                <span>Devis Gratuit</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-primary hover:bg-gray-50 p-2 rounded-lg transition">
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-4 pb-6 space-y-2">
              {['Accueil', 'Réalisations', 'Expertises', 'Philosophie', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-4 py-3 text-base font-medium text-text hover:text-primary hover:bg-gray-50 rounded-lg transition"
                >
                  {item}
                </a>
              ))}
              <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block px-4 py-3 text-base font-bold text-center text-white bg-primary rounded-lg mt-4 shadow-lg">
                Demander un Devis
              </a>
            </div>
          </motion.div>
        )}
      </header>

      {/* B. Hero Section (Cinematic & Minimalist) */}
      <section id="accueil" className="relative h-screen flex items-center overflow-hidden">
        {/* Background Image with Parallax */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')", // More architectural/clean image
            y: y1,
            scale: 1.1
          }}
        />
        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/40 to-transparent z-10"></div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-3xl"
          >
            <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-secondary"></div>
              <span className="text-secondary font-medium tracking-[0.2em] uppercase text-sm">Artisan Peintre à Perpignan</span>
            </motion.div>

            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-white mb-8 leading-tight">
              L'Excellence <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                Sur Vos Murs.
              </span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-gray-300 mb-12 font-light leading-relaxed max-w-xl border-l-2 border-catalan-red pl-6">
              Nous transformons vos espaces avec une précision chirurgicale et des matériaux d'exception. Rénovation, décoration et sinistres.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-6">
              <a href="#contact" className="group bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition shadow-xl flex items-center justify-center gap-3">
                <span>Démarrer mon Projet</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#realisations" className="group px-8 py-4 rounded-full font-bold text-lg text-white border border-white/30 hover:bg-white/10 transition flex items-center justify-center gap-3">
                <span>Voir le Portfolio</span>
                <div className="w-2 h-2 bg-catalan-yellow rounded-full group-hover:scale-150 transition-transform"></div>
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 1, duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white/50 flex flex-col items-center gap-2"
        >
          <span className="text-xs uppercase tracking-widest">Découvrir</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/0 via-white/50 to-white/0"></div>
        </motion.div>
      </section>

      {/* C. Trust & Partners (Minimalist) */}
      <section id="assurances" className="bg-white border-b border-gray-50 py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-gray-50 rounded-full">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <p className="text-text font-medium text-sm uppercase tracking-widest">
                Partenaire Agréé Assurances
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-12 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
              {['AXA', 'ALLIANZ', 'MAAF', 'GMF', 'GROUPAMA'].map((brand) => (
                <span key={brand} className="font-heading font-bold text-xl text-gray-400 hover:text-primary transition-colors cursor-default">{brand}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION: Manifesto / Philosophy (Editorial Style) */}
      <section id="philosophie" className="py-32 bg-surface relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Sparkles className="w-8 h-8 text-secondary mx-auto mb-8" />
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-12 leading-tight">
              "Nous ne peignons pas seulement des murs,<br/> nous créons des atmosphères."
            </h2>
            <div className="flex flex-col md:flex-row gap-12 items-center text-left">
              <div className="flex-1">
                <p className="text-lg text-text-light leading-relaxed mb-6">
                  Chez Perpignan Peinture, nous croyons que chaque habitat mérite une attention particulière. Notre approche artisanale mêle techniques traditionnelles et innovations modernes pour garantir des finitions d'une qualité irréprochable.
                </p>
                <p className="text-lg text-text-light leading-relaxed">
                  Du simple rafraîchissement à la rénovation complète après sinistre, nous nous engageons sur la durabilité et l'esthétique de chaque intervention.
                </p>
              </div>
              <div className="flex-1 border-l-4 border-catalan-yellow pl-8 py-2">
                <div className="text-6xl font-heading font-bold text-gray-100 mb-2">15+</div>
                <p className="font-bold text-primary uppercase tracking-widest text-sm mb-1">Années d'Expérience</p>
                <p className="text-sm text-text-light">Une expertise reconnue dans tout le 66.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* E. Services (Large Cards / Editorial) */}
      <section id="expertises" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20">
            <div className="max-w-2xl">
              <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">Nos Expertises</span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary leading-tight">
                Des Solutions Sur-Mesure <br/> Pour Chaque Surface.
              </h2>
            </div>
            <a href="#contact" className="hidden md:flex items-center gap-2 text-primary font-bold hover:text-secondary transition group">
              Discuter de mon projet <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <motion.div
              whileHover={{ y: -10 }}
              className="group relative h-[500px] rounded-2xl overflow-hidden cursor-pointer"
            >
              <div className="absolute inset-0 bg-gray-900/20 group-hover:bg-gray-900/10 transition-colors z-10"></div>
              <img
                src="https://images.unsplash.com/photo-1562663474-6cbb3eaa4d14?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Peinture Décorative"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 p-8 flex flex-col justify-end z-20 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center mb-6 border border-white/20">
                  <Palette className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-white mb-3">Peinture Décorative</h3>
                <p className="text-gray-300 mb-6 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  Stucs, effets de matière et couleurs profondes pour un intérieur unique.
                </p>
                <div className="h-1 w-12 bg-catalan-red rounded-full"></div>
              </div>
            </motion.div>

            {/* Service 2 */}
            <motion.div
              whileHover={{ y: -10 }}
              className="group relative h-[500px] rounded-2xl overflow-hidden cursor-pointer lg:-mt-12"
            >
              <div className="absolute inset-0 bg-gray-900/20 group-hover:bg-gray-900/10 transition-colors z-10"></div>
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Rénovation"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 p-8 flex flex-col justify-end z-20 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center mb-6 border border-white/20">
                  <Home className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-white mb-3">Rénovation & Façades</h3>
                <p className="text-gray-300 mb-6 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  Protection durable et embellissement de vos extérieurs.
                </p>
                <div className="h-1 w-12 bg-catalan-yellow rounded-full"></div>
              </div>
            </motion.div>

            {/* Service 3 */}
            <motion.div
              whileHover={{ y: -10 }}
              className="group relative h-[500px] rounded-2xl overflow-hidden cursor-pointer"
            >
              <div className="absolute inset-0 bg-gray-900/20 group-hover:bg-gray-900/10 transition-colors z-10"></div>
              <img
                src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Sinistres"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 p-8 flex flex-col justify-end z-20 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center mb-6 border border-white/20">
                  <Droplets className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-white mb-3">Après Sinistre</h3>
                <p className="text-gray-300 mb-6 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  Intervention rapide et gestion directe avec votre assurance.
                </p>
                <div className="h-1 w-12 bg-catalan-red rounded-full"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* D. Portfolio (Full Width & Immersive) */}
      <section id="realisations" className="py-32 bg-surface relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 flex flex-col md:flex-row justify-between items-end">
          <div>
            <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">Portfolio</span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary leading-tight">
              La Preuve par l'Image.
            </h2>
          </div>
          <p className="text-text-light max-w-md text-right hidden md:block">
            Découvrez la métamorphose de nos chantiers. <br/> Glissez pour révéler la qualité de nos finitions.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="shadow-2xl rounded-2xl overflow-hidden border-4 border-white"
          >
            <BeforeAfterSlider
              beforeImage="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
              afterImage="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
            />
          </motion.div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            <img src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" className="rounded-lg h-48 w-full object-cover hover:opacity-80 transition cursor-pointer" alt="Gallery 1" />
            <img src="https://images.unsplash.com/photo-1560185127-6ed189bf02f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" className="rounded-lg h-48 w-full object-cover hover:opacity-80 transition cursor-pointer" alt="Gallery 2" />
            <img src="https://images.unsplash.com/photo-1484154218962-a1c002085d2f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" className="rounded-lg h-48 w-full object-cover hover:opacity-80 transition cursor-pointer" alt="Gallery 3" />
            <div className="bg-primary rounded-lg h-48 w-full flex items-center justify-center cursor-pointer group hover:bg-primary-light transition">
              <div className="text-center">
                <span className="block text-3xl font-bold text-white mb-1">+20</span>
                <span className="text-xs text-gray-300 uppercase tracking-widest group-hover:text-white">Projets</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION: Processus (Minimalist Steps) */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">Méthodologie</span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-8 leading-tight">
                Un Chantier <br/> Sans Surprise.
              </h2>
              <p className="text-lg text-text-light mb-12 leading-relaxed">
                Nous savons que les travaux peuvent être source de stress. C'est pourquoi nous avons mis en place un protocole rigoureux pour garantir votre tranquillité d'esprit, du premier contact à la réception finale.
              </p>

              <div className="space-y-8">
                {[
                  { title: "1. Devis & Conseil", desc: "Visite technique gratuite et expertise couleur.", icon: FileCheck },
                  { title: "2. Protection Totale", desc: "Bâchage méticuleux de vos sols et mobiliers.", icon: Shield },
                  { title: "3. Application", desc: "Préparation des supports et finitions haut de gamme.", icon: Paintbrush },
                  { title: "4. Réception", desc: "Nettoyage complet et validation conjointe.", icon: Sparkles }
                ].map((step, idx) => (
                  <div key={idx} className="flex gap-6 group">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-surface flex items-center justify-center border border-gray-100 group-hover:border-secondary transition-colors">
                      <step.icon className="w-5 h-5 text-primary group-hover:text-secondary transition-colors" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary mb-1">{step.title}</h3>
                      <p className="text-text-light text-sm">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-catalan-red to-catalan-yellow rounded-2xl blur-2xl opacity-20"></div>
              <img
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Architecte d'intérieur"
                className="relative rounded-2xl shadow-2xl w-full object-cover h-[600px]"
              />
              <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-xl shadow-xl max-w-xs hidden md:block">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex -space-x-4">
                    {[1,2,3].map(i => (
                      <div key={i} className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white"></div>
                    ))}
                  </div>
                  <span className="font-bold text-primary">+500</span>
                </div>
                <p className="text-sm text-text-light font-medium">Clients satisfaits nous recommandent à leurs proches.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION: FAQ (Accordion) */}
      <section className="py-24 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">Questions Fréquentes</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details key={index} className="group bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-lg text-primary hover:bg-gray-50 transition">
                  <span>{faq.question}</span>
                  <span className="transition group-open:rotate-180">
                    <ChevronDown className="w-5 h-5 text-secondary" />
                  </span>
                </summary>
                <div className="text-text-light px-6 pb-6 leading-relaxed animate-fadeIn">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* NEW SECTION: Material Showcase (Qualitative Touch) */}
      <section className="py-32 bg-surface overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">Finitions</span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">L'Art de la Matière</h2>
            <p className="text-text-light text-lg max-w-2xl mx-auto">
              La peinture n'est pas qu'une couleur. C'est une texture qui joue avec la lumière.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Material 1 */}
            <div className="group cursor-pointer">
              <div className="relative h-80 rounded-2xl overflow-hidden mb-6">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img src="https://images.unsplash.com/photo-1562663474-6cbb3eaa4d14?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Mat Profond" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-primary mb-2 group-hover:text-secondary transition-colors">Mat Profond</h3>
              <p className="text-text-light leading-relaxed">Absorbe la lumière pour une ambiance feutrée et masque les imperfections. Idéal pour les salons et plafonds.</p>
            </div>

            {/* Material 2 */}
            <div className="group cursor-pointer mt-12 md:mt-0">
              <div className="relative h-80 rounded-2xl overflow-hidden mb-6">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img src="https://images.unsplash.com/photo-1595428774223-ef52624120d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Velours Soyeux" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-primary mb-2 group-hover:text-secondary transition-colors">Velours Soyeux</h3>
              <p className="text-text-light leading-relaxed">Le compromis parfait entre esthétique et résistance. Un toucher soyeux, lessivable, pour les pièces de vie.</p>
            </div>

            {/* Material 3 */}
            <div className="group cursor-pointer">
              <div className="relative h-80 rounded-2xl overflow-hidden mb-6">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img src="https://images.unsplash.com/photo-1615529182904-14819c35db37?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Effets Décoratifs" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-primary mb-2 group-hover:text-secondary transition-colors">Effets Décoratifs</h3>
              <p className="text-text-light leading-relaxed">Chaux, béton ciré, stuc... Des finitions artisanales pour donner du caractère et de l'authenticité.</p>
            </div>
          </div>
        </div>
      </section>

      {/* F. Testimonials (Dark Mode for Contrast) */}
      <section className="py-32 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <div className="flex justify-center gap-2 mb-8">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="w-6 h-6 text-secondary fill-current" />
            ))}
          </div>
          <h2 className="text-3xl md:text-5xl font-serif italic leading-tight mb-12">
            "Un travail d'orfèvre. L'équipe a su redonner vie à notre salon avec une propreté exemplaire. Le résultat dépasse nos espérances."
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
               {/* Placeholder Avatar */}
               <div className="w-full h-full bg-gradient-to-br from-gray-400 to-gray-600"></div>
            </div>
            <div className="text-left">
              <p className="font-bold text-white text-lg">Sophie & Marc L.</p>
              <p className="text-sm text-gray-400">Propriétaires à Canet-en-Roussillon</p>
            </div>
          </div>
        </div>
      </section>

      {/* G. Intervention Zone & Final CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Intervention Zone (Marquee/List) */}
          <div className="mb-24 border-t border-b border-gray-100 py-12">
            <div className="text-center mb-8">
              <h3 className="text-xl font-heading font-bold text-primary uppercase tracking-widest">Nous intervenons dans tout le 66</h3>
            </div>
            <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-gray-400 font-medium uppercase tracking-wider text-sm md:text-base">
              <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-catalan-red" /> Perpignan</span>
              <span className="hidden md:inline text-gray-300">•</span>
              <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-catalan-yellow" /> Canet-en-Roussillon</span>
              <span className="hidden md:inline text-gray-300">•</span>
              <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-catalan-red" /> Saint-Cyprien</span>
              <span className="hidden md:inline text-gray-300">•</span>
              <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-catalan-yellow" /> Argelès-sur-Mer</span>
              <span className="hidden md:inline text-gray-300">•</span>
              <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-catalan-red" /> Cabestany</span>
              <span className="hidden md:inline text-gray-300">•</span>
              <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-catalan-yellow" /> Rivesaltes</span>
            </div>
          </div>

          {/* Final Footer CTA */}
          <div className="bg-primary rounded-3xl p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-8">
                Prêt à sublimer votre intérieur ?
              </h2>
              <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
                Contactez-nous dès aujourd'hui pour une estimation gratuite et sans engagement.
              </p>
              <a href="#contact" className="inline-block bg-secondary text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-secondary-light transition shadow-lg hover:shadow-2xl transform hover:-translate-y-1 duration-300">
                Commencer mon Projet
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-primary-dark text-white py-16 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Enhanced Contact Form Section */}
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden mb-16 transform -translate-y-24 border-4 border-secondary/20">
            <div className="grid md:grid-cols-2">
              <div className="p-12 bg-surface text-text">
                <h3 className="text-2xl font-heading font-bold text-primary mb-6">Contactez-nous</h3>
                <p className="text-text-light mb-8">Remplissez ce formulaire pour recevoir votre devis gratuit sous 48h.</p>

                <form className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Nom</label>
                      <input type="text" className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition" placeholder="Votre nom" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Téléphone</label>
                      <input type="tel" className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition" placeholder="06..." />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Type de Projet</label>
                    <div className="grid grid-cols-3 gap-3">
                      <label className="cursor-pointer">
                        <input type="radio" name="projectType" className="peer sr-only" />
                        <div className="p-3 rounded-lg border border-gray-200 text-center hover:bg-gray-50 peer-checked:border-secondary peer-checked:bg-secondary/10 peer-checked:text-primary transition">
                          <Paintbrush className="w-6 h-6 mx-auto mb-1 text-gray-400 peer-checked:text-secondary" />
                          <span className="text-xs font-bold">Peinture</span>
                        </div>
                      </label>
                      <label className="cursor-pointer">
                        <input type="radio" name="projectType" className="peer sr-only" />
                        <div className="p-3 rounded-lg border border-gray-200 text-center hover:bg-gray-50 peer-checked:border-secondary peer-checked:bg-secondary/10 peer-checked:text-primary transition">
                          <Home className="w-6 h-6 mx-auto mb-1 text-gray-400 peer-checked:text-secondary" />
                          <span className="text-xs font-bold">Rénovation</span>
                        </div>
                      </label>
                      <label className="cursor-pointer">
                        <input type="radio" name="projectType" className="peer sr-only" />
                        <div className="p-3 rounded-lg border border-gray-200 text-center hover:bg-gray-50 peer-checked:border-secondary peer-checked:bg-secondary/10 peer-checked:text-primary transition">
                          <Droplets className="w-6 h-6 mx-auto mb-1 text-gray-400 peer-checked:text-secondary" />
                          <span className="text-xs font-bold">Sinistre</span>
                        </div>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                    <textarea rows="3" className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition" placeholder="Décrivez brièvement votre projet..."></textarea>
                  </div>

                  <button type="submit" className="w-full bg-primary text-white py-4 rounded-lg font-bold text-lg hover:bg-primary-light transition shadow-lg flex items-center justify-center gap-2">
                    Envoyer ma Demande <ArrowRight className="w-5 h-5" />
                  </button>
                </form>
              </div>

              <div className="p-12 bg-primary relative overflow-hidden flex flex-col justify-between">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center opacity-20"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-heading font-bold text-white mb-6">Coordonnées</h3>
                  <ul className="space-y-6">
                    <li className="flex items-start gap-4">
                      <div className="bg-white/10 p-3 rounded-lg backdrop-blur-sm">
                        <Phone className="w-6 h-6 text-secondary" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400 uppercase tracking-wider font-bold">Téléphone</p>
                        <p className="text-xl font-bold">04 68 XX XX XX</p>
                        <p className="text-sm text-gray-400">Lun - Ven: 8h - 19h</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="bg-white/10 p-3 rounded-lg backdrop-blur-sm">
                        <Mail className="w-6 h-6 text-secondary" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400 uppercase tracking-wider font-bold">Email</p>
                        <p className="text-lg">contact@perpignan-peinture.fr</p>
                        <p className="text-sm text-gray-400">Réponse sous 24h</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="bg-white/10 p-3 rounded-lg backdrop-blur-sm">
                        <MapPin className="w-6 h-6 text-secondary" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400 uppercase tracking-wider font-bold">Siège Social</p>
                        <p className="text-lg">Perpignan, France</p>
                        <p className="text-sm text-gray-400">Intervention dans tout le 66</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <Paintbrush className="w-6 h-6 text-secondary" />
                <span className="text-2xl font-heading font-bold tracking-tight">
                  PERPIGNAN PEINTURE
                </span>
              </div>
              <p className="text-gray-400 max-w-sm leading-relaxed">
                Artisans peintres passionnés, nous mettons notre savoir-faire au service de vos projets de décoration et de rénovation dans les Pyrénées-Orientales.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-secondary uppercase tracking-wider text-sm">Contact</h4>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-center gap-3"><Phone className="w-5 h-5 text-secondary" /> 04 68 XX XX XX</li>
                <li className="flex items-center gap-3"><Mail className="w-5 h-5 text-secondary" /> contact@perpignan-peinture.fr</li>
                <li className="flex items-center gap-3"><MapPin className="w-5 h-5 text-secondary" /> Perpignan, France</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-secondary uppercase tracking-wider text-sm">Légal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Mentions Légales</a></li>
                <li><a href="#" className="hover:text-white transition">Politique de Confidentialité</a></li>
                <li><a href="#" className="hover:text-white transition">CGV</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
            <p>&copy; 2025 PERPIGNAN PEINTURE. Tous droits réservés.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-secondary transition"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="hover:text-secondary transition"><Facebook className="w-5 h-5" /></a>
            </div>
          </div>
        </div>
      </footer>

      {/* NEW: Floating Action Button (Mobile/Desktop) */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
        {/* Back to Top Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: showScrollTop ? 1 : 0, scale: showScrollTop ? 1 : 0 }}
          onClick={scrollToTop}
          className="bg-white text-primary p-4 rounded-full shadow-lg hover:bg-gray-50 transition-colors border border-gray-100"
          aria-label="Retour en haut"
        >
          <ArrowRight className="w-6 h-6 -rotate-90" />
        </motion.button>

        {/* Call Button */}
        <a
          href="tel:0468XXXXXX"
          className="bg-secondary text-white p-4 rounded-full shadow-lg hover:bg-secondary-light transition-colors animate-bounce-slow flex items-center justify-center"
          aria-label="Appeler maintenant"
        >
          <Phone className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
}

export default App;
