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

      {/* A. Header / Navigation (Sticky) */}
      <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all duration-300">
        {/* Catalan Strip (Sang et Or) */}
        <div className="h-1 w-full flex">
          <div className="flex-1 bg-catalan-red"></div>
          <div className="flex-1 bg-catalan-yellow"></div>
          <div className="flex-1 bg-catalan-red"></div>
          <div className="flex-1 bg-catalan-yellow"></div>
          <div className="flex-1 bg-catalan-red"></div>
          <div className="flex-1 bg-catalan-yellow"></div>
          <div className="flex-1 bg-catalan-red"></div>
          <div className="flex-1 bg-catalan-yellow"></div>
          <div className="flex-1 bg-catalan-red"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="bg-primary p-2 rounded-lg">
                <Paintbrush className="w-6 h-6 text-secondary" />
              </div>
              <a href="#" className="text-xl md:text-2xl font-heading font-bold text-primary tracking-tight">
                PERPIGNAN PEINTURE
              </a>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#accueil" className="text-sm font-medium text-text hover:text-secondary transition">Accueil</a>
              <a href="#realisations" className="text-sm font-medium text-text hover:text-secondary transition">Réalisations</a>
              <a href="#expertises" className="text-sm font-medium text-text hover:text-secondary transition">Expertises</a>
              <a href="#assurances" className="text-sm font-medium text-text hover:text-secondary transition">Assurances</a>
              <a href="#contact" className="text-sm font-medium text-text hover:text-secondary transition">Contact</a>

              <a href="#contact" className="bg-secondary text-white px-6 py-3 rounded-full font-bold hover:bg-secondary-light transition shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 duration-200 text-sm tracking-wide">
                Demander un Devis
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-text hover:text-primary p-2">
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
              <a href="#accueil" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-text hover:text-secondary hover:bg-gray-50 rounded-lg">Accueil</a>
              <a href="#realisations" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-text hover:text-secondary hover:bg-gray-50 rounded-lg">Réalisations</a>
              <a href="#expertises" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-text hover:textsecondary hover:bg-gray-50 rounded-lg">Expertises</a>
              <a href="#assurances" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-text hover:text-secondary hover:bg-gray-50 rounded-lg">Assurances</a>
              <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 text-base font-bold text-secondary bg-gray-50 rounded-lg mt-4">Demander un Devis</a>
            </div>
          </motion.div>
        )}
      </header>

      {/* B. Hero Section (Above the Fold) */}
      <section id="accueil" className="relative pt-20 min-h-screen flex items-center overflow-hidden">
        {/* Background Image with Parallax */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1562663474-6cbb3eaa4d14?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
            y: y1
          }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-primary/40 z-10"></div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center md:text-left">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-3xl"
          >
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 leading-tight">
              L'Art de la Peinture <br/> & de la Rénovation <br/>
              <span className="text-secondary relative inline-block">
                à Perpignan.
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-catalan-red via-catalan-yellow to-catalan-red rounded-full opacity-80"></span>
              </span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-lg md:text-2xl text-gray-200 mb-10 font-light leading-relaxed max-w-2xl">
              Finitions haut de gamme et remise en état après sinistre. <br/>
              L'excellence artisanale au service de votre intérieur.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="#contact" className="bg-secondary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-secondary-light transition shadow-xl hover:shadow-2xl transform hover:-translate-y-1 duration-300 flex items-center justify-center gap-2">
                Demander un Devis <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#realisations" className="bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition flex items-center justify-center">
                Voir nos Réalisations
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* C. The "Insurance Trust" Bar */}
      <section id="assurances" className="bg-gray-100 border-b border-gray-200 py-8 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <p className="text-text-light font-medium text-sm md:text-base uppercase tracking-wider text-center md:text-left">
              Nous intervenons pour vos dossiers <span className="text-primary font-bold">Assurances & Sinistres</span>
            </p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-12 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
              {/* Placeholder Logos using text for now, ideally SVGs */}
              <span className="font-heading font-bold text-xl text-gray-500">AXA</span>
              <span className="font-heading font-bold text-xl text-gray-500">ALLIANZ</span>
              <span className="font-heading font-bold text-xl text-gray-500">MAAF</span>
              <span className="font-heading font-bold text-xl text-gray-500">GMF</span>
              <span className="font-heading font-bold text-xl text-gray-500">GROUPAMA</span>
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION: Key Statistics (Animated) */}
      <section className="py-16 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-4">
              <div className="text-4xl md:text-5xl font-heading font-bold text-secondary mb-2">15+</div>
              <div className="text-sm md:text-base text-gray-300 uppercase tracking-wider font-medium">Années d'Expérience</div>
            </div>
            <div className="p-4">
              <div className="text-4xl md:text-5xl font-heading font-bold text-secondary mb-2">500+</div>
              <div className="text-sm md:text-base text-gray-300 uppercase tracking-wider font-medium">Chantiers Réalisés</div>
            </div>
            <div className="p-4">
              <div className="text-4xl md:text-5xl font-heading font-bold text-secondary mb-2">100%</div>
              <div className="text-sm md:text-base text-gray-300 uppercase tracking-wider font-medium">Clients Satisfaits</div>
            </div>
            <div className="p-4">
              <div className="text-4xl md:text-5xl font-heading font-bold text-secondary mb-2">10</div>
              <div className="text-sm md:text-base text-gray-300 uppercase tracking-wider font-medium">Garantie Décennale</div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION: Manifesto / Philosophy */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Sparkles className="w-12 h-12 text-secondary mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-8">Plus qu'un Peintre, un Partenaire</h2>
          <p className="text-xl text-text-light leading-relaxed italic font-serif">
            "Chez Perpignan Peinture, nous croyons que chaque mur a une histoire à raconter. Notre mission n'est pas seulement d'appliquer de la couleur, mais de révéler le potentiel de votre habitat. Nous allions techniques traditionnelles et matériaux modernes pour un résultat qui traverse le temps."
          </p>
          <div className="mt-8 flex justify-center">
            <div className="h-1 w-24 bg-gradient-to-r from-catalan-red to-catalan-yellow rounded-full"></div>
          </div>
          <p className="mt-4 text-sm font-bold text-primary uppercase tracking-widest">Thomas, Fondateur</p>
        </div>
      </section>

      {/* D. Portfolio Feature: "Before/After" Slider (MOVED UP) */}
      <section id="realisations" className="py-24 bg-white relative overflow-hidden">
        {/* Subtle Catalan Accent Background */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-catalan-yellow/5 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">La Preuve par l'Image</h2>
            <p className="text-text-light max-w-2xl mx-auto">Découvrez la qualité de nos finitions à travers nos transformations.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <BeforeAfterSlider
              beforeImage="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" // Construction/Messy
              afterImage="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" // Clean/Modern
            />
          </motion.div>
        </div>
      </section>

      {/* E. Services Grid (Bento Grid Layout) */}
      <section id="expertises" className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">Nos Domaines d'Expertise</h2>
            <p className="text-text-light max-w-2xl mx-auto">Une approche globale pour sublimer et protéger votre patrimoine.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Peinture Décorative */}
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-50 relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-catalan-red opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
                <Paintbrush className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold text-primary mb-3">Peinture Décorative</h3>
              <p className="text-text-light leading-relaxed">
                Création d'ambiances uniques, effets de matière, stucs et finitions haut de gamme pour un intérieur qui vous ressemble.
              </p>
            </motion.div>

            {/* Card 2: Rénovation & Façades */}
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-50 md:mt-8 relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-catalan-yellow opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="w-14 h-14 bg-yellow-50 rounded-2xl flex items-center justify-center mb-6">
                <Home className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-heading font-bold text-primary mb-3">Rénovation & Façades</h3>
              <p className="text-text-light leading-relaxed">
                Ravalement de façade, traitement des fissures et protection durable de vos murs extérieurs contre les intempéries.
              </p>
            </motion.div>

            {/* Card 3: Sinistres */}
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-50 relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-catalan-red opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center mb-6">
                <Droplets className="w-8 h-8 text-red-500" />
              </div>
              <h3 className="text-xl font-heading font-bold text-primary mb-3">Sinistres & Dégâts des Eaux</h3>
              <p className="text-text-light leading-relaxed">
                Intervention rapide et soignée pour la remise en état après sinistre. Gestion simplifiée avec votre assurance.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* NEW SECTION: Processus (Timeline) */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">Un Chantier en Toute Sérénité</h2>
            <p className="text-text-light max-w-2xl mx-auto">Notre méthode de travail rigoureuse vous garantit un résultat parfait, sans stress.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gray-100 -z-10"></div>

            {/* Step 1 */}
            <div className="relative bg-white p-6 rounded-xl border border-gray-50 shadow-sm hover:shadow-md transition text-center group">
              <div className="w-24 h-24 mx-auto bg-surface rounded-full flex items-center justify-center mb-6 border-4 border-white shadow-sm group-hover:border-catalan-yellow transition-colors">
                <FileCheck className="w-10 h-10 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-lg mb-2">1. Devis & Conseil</h3>
              <p className="text-sm text-text-light">Visite technique gratuite, écoute de vos besoins et conseils couleurs.</p>
            </div>

            {/* Step 2 */}
            <div className="relative bg-white p-6 rounded-xl border border-gray-50 shadow-sm hover:shadow-md transition text-center group">
              <div className="w-24 h-24 mx-auto bg-surface rounded-full flex items-center justify-center mb-6 border-4 border-white shadow-sm group-hover:border-catalan-red transition-colors">
                <Shield className="w-10 h-10 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-lg mb-2">2. Protection Totale</h3>
              <p className="text-sm text-text-light">Bâchage complet des sols et meubles. Nous protégeons votre intérieur comme le nôtre.</p>
            </div>

            {/* Step 3 */}
            <div className="relative bg-white p-6 rounded-xl border border-gray-50 shadow-sm hover:shadow-md transition text-center group">
              <div className="w-24 h-24 mx-auto bg-surface rounded-full flex items-center justify-center mb-6 border-4 border-white shadow-sm group-hover:border-catalan-yellow transition-colors">
                <Paintbrush className="w-10 h-10 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-lg mb-2">3. Application Soignée</h3>
              <p className="text-sm text-text-light">Préparation des supports (enduit, ponçage) et application des peintures haut de gamme.</p>
            </div>

            {/* Step 4 */}
            <div className="relative bg-white p-6 rounded-xl border border-gray-50 shadow-sm hover:shadow-md transition text-center group">
              <div className="w-24 h-24 mx-auto bg-surface rounded-full flex items-center justify-center mb-6 border-4 border-white shadow-sm group-hover:border-catalan-red transition-colors">
                <Sparkles className="w-10 h-10 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-lg mb-2">4. Nettoyage & Réception</h3>
              <p className="text-sm text-text-light">Nettoyage fin de chantier et validation conjointe des travaux. Zéro trace.</p>
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
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">L'Art de la Matière</h2>
              <p className="text-text-light text-lg mb-8 leading-relaxed">
                La peinture n'est pas qu'une couleur, c'est une texture, un toucher, une profondeur. Nous sélectionnons les pigments les plus fins et les enduits les plus nobles pour créer des surfaces qui accrochent la lumière.
              </p>

              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-20 h-20 rounded-full bg-gray-100 flex-shrink-0 overflow-hidden border-2 border-secondary">
                    <img src="https://images.unsplash.com/photo-1562663474-6cbb3eaa4d14?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" alt="Texture Mat" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">Mat Profond</h3>
                    <p className="text-sm text-text-light">Idéal pour les plafonds et salons feutrés. Absorbe la lumière pour une ambiance cocooning et masque les imperfections.</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-20 h-20 rounded-full bg-gray-100 flex-shrink-0 overflow-hidden border-2 border-catalan-yellow">
                    <img src="https://images.unsplash.com/photo-1595428774223-ef52624120d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" alt="Texture Satin" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">Velours Soyeux</h3>
                    <p className="text-sm text-text-light">Le compromis parfait. Un toucher soyeux, lessivable et résistant, parfait pour les pièces de vie et couloirs.</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-20 h-20 rounded-full bg-gray-100 flex-shrink-0 overflow-hidden border-2 border-catalan-red">
                    <img src="https://images.unsplash.com/photo-1615529182904-14819c35db37?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" alt="Texture Stuc" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">Effets Décoratifs</h3>
                    <p className="text-sm text-text-light">Chaux, béton ciré, stuc... Des finitions artisanales pour donner du caractère et de l'authenticité à vos murs.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1594040226829-7f251ab46d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Application Peinture"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-8">
                <div className="text-white">
                  <p className="font-serif italic text-2xl mb-2">"Le détail fait la perfection, et la perfection n'est pas un détail."</p>
                  <p className="text-sm opacity-80 uppercase tracking-widest">Léonard de Vinci</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* F. Testimonials & CTA */}
      <section className="py-24 bg-surface overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex justify-center gap-1 mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-6 h-6 text-secondary fill-current" />
              ))}
            </div>
            <h2 className="text-3xl md:text-4xl font-serif italic text-primary mb-8">
              "Un travail d'orfèvre. L'équipe a su redonner vie à notre salon avec une propreté exemplaire."
            </h2>
            <p className="font-bold text-text">Sophie & Marc L.</p>
            <p className="text-sm text-text-light">Propriétaires à Canet-en-Roussillon</p>
          </div>

          {/* NEW SECTION: Intervention Zone (Marquee/List) */}
          <div className="mb-24 border-t border-b border-gray-200 py-12">
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
