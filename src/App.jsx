import React, { useState } from 'react';
import { Phone, Mail, MapPin, Paintbrush, Home, Shield, ArrowRight, Star, CheckCircle2, Instagram, Facebook, Menu, X, Droplets, Clock, FileCheck, Sparkles, ChevronDown, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import BeforeAfterSlider from './components/BeforeAfterSlider';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1562663474-6cbb3eaa4d14?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')" }}
        ></div>
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
      <section id="assurances" className="bg-gray-100 border-b border-gray-200 py-8">
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
      <a 
        href="tel:0600000000" 
        className="fixed bottom-6 right-6 z-50 bg-catalan-red text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 flex items-center gap-2 group border-2 border-white"
        aria-label="Appeler maintenant"
      >
        <Phone className="w-6 h-6 fill-current" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap font-bold">
          Appeler
        </span>
      </a>
    </div>
  );
}

export default App;
