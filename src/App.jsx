import React, { useState } from 'react';
import { Phone, Mail, MapPin, Paintbrush, Home, Building2, ArrowRight, Star, CheckCircle2, Instagram, Facebook } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-surface font-sans text-gray-900">
      {/* Header */}
      <header className="bg-white sticky top-0 z-50 border-b-4 border-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2">
              {/* Petit rappel drapeau catalan stylisé */}
              <div className="flex flex-col h-8 justify-between py-1">
                <div className="w-1 h-full bg-primary"></div>
                <div className="w-1 h-full bg-secondary"></div>
                <div className="w-1 h-full bg-primary"></div>
                <div className="w-1 h-full bg-secondary"></div>
              </div>
              <a href="#" className="text-2xl font-serif font-bold text-primary tracking-tight">
                PERPIGNAN<span className="text-secondary">PEINTURE</span>
              </a>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-8 items-center">
              <a href="#residentiel" className="text-sm font-medium text-gray-600 hover:text-primary transition uppercase tracking-wider">Résidentiel</a>
              <a href="#commercial" className="text-sm font-medium text-gray-600 hover:text-primary transition uppercase tracking-wider">Commercial</a>
              <a href="#approche" className="text-sm font-medium text-gray-600 hover:text-primary transition uppercase tracking-wider">Notre Approche</a>
              <a href="#contact" className="bg-primary text-white px-6 py-3 rounded-none hover:bg-primary-dark transition text-sm font-semibold tracking-wide">
                DEMANDER UN DEVIS
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600 hover:text-primary">
                <span className="sr-only">Menu</span>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#residentiel" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50">Résidentiel</a>
              <a href="#commercial" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50">Commercial</a>
              <a href="#approche" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50">Notre Approche</a>
              <a href="#contact" className="block px-3 py-2 text-base font-medium text-primary font-bold">Demander un devis</a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative bg-primary-dark text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')" }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-48 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">
            L'Art de la Peinture <br/> <span className="text-secondary italic">en Pays Catalan</span>
          </h1>
          <p className="text-lg md:text-xl mb-10 text-gray-200 max-w-2xl mx-auto font-light">
            Nous transformons vos espaces avec élégance et précision. Une expertise artisanale pour des intérieurs qui vous ressemblent.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#contact" className="bg-secondary text-primary-dark px-8 py-4 rounded-none font-bold hover:bg-white transition tracking-wide">
              ESTIMATION GRATUITE
            </a>
            <a href="#residentiel" className="border border-white text-white px-8 py-4 rounded-none font-bold hover:bg-white hover:text-primary-dark transition tracking-wide">
              NOS RÉALISATIONS
            </a>
          </div>
        </div>
      </section>

      {/* Split Section: Residential vs Commercial */}
      <section className="grid md:grid-cols-2">
        <div id="residentiel" className="relative group h-96 md:h-[600px] overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-110"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1616486338812-3dadae4b4f9d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')" }}
          ></div>
          <div className="absolute inset-0 bg-primary-dark/60 group-hover:bg-primary-dark/50 transition duration-500"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-8 text-center">
            <Home className="w-12 h-12 mb-4 text-secondary" />
            <h2 className="text-3xl font-serif font-bold mb-4">Résidentiel</h2>
            <p className="max-w-md mb-8 text-gray-200">
              De la chambre au salon, nous créons des ambiances chaleureuses et personnalisées pour votre maison.
            </p>
            <a href="#contact" className="inline-flex items-center text-sm font-bold uppercase tracking-widest hover:text-secondary transition">
              En savoir plus <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </div>
        </div>
        <div id="commercial" className="relative group h-96 md:h-[600px] overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-110"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')" }}
          ></div>
          <div className="absolute inset-0 bg-gray-900/60 group-hover:bg-gray-900/50 transition duration-500"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-8 text-center">
            <Building2 className="w-12 h-12 mb-4 text-secondary" />
            <h2 className="text-3xl font-serif font-bold mb-4">Commercial</h2>
            <p className="max-w-md mb-8 text-gray-200">
              Bureaux, boutiques, restaurants. Nous valorisons votre image de marque à travers des finitions impeccables.
            </p>
            <a href="#contact" className="inline-flex items-center text-sm font-bold uppercase tracking-widest hover:text-secondary transition">
              En savoir plus <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Our Approach / Why Us */}
      <section id="approche" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-secondary font-bold tracking-widest uppercase text-sm">Pourquoi nous choisir</span>
            <h2 className="text-4xl font-serif font-bold text-primary mt-2 mb-6">Notre Approche</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Nous allions techniques traditionnelles et produits modernes pour un résultat durable et respectueux de l'environnement.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <FeatureCard
              icon={<Paintbrush className="w-8 h-8 text-secondary" />}
              title="Finitions Soignées"
              description="Le souci du détail est notre signature. Nous préparons méticuleusement chaque surface pour un rendu parfait."
            />
            <FeatureCard
              icon={<CheckCircle2 className="w-8 h-8 text-secondary" />}
              title="Produits Écologiques"
              description="Nous privilégions des peintures à faible teneur en COV, respectueuses de votre santé et de l'environnement."
            />
            <FeatureCard
              icon={<Star className="w-8 h-8 text-secondary" />}
              title="Satisfaction Garantie"
              description="Un chantier propre, des délais respectés et une communication transparente tout au long du projet."
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-12 bg-primary text-white">
                <h2 className="text-3xl font-serif font-bold mb-6">Parlons de votre projet</h2>
                <p className="text-blue-100 mb-12">
                  Remplissez le formulaire ou contactez-nous directement. Nous nous ferons un plaisir de vous répondre sous 24h.
                </p>

                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-secondary mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Téléphone</h3>
                      <p className="text-blue-100">06 XX XX XX XX</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-secondary mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-blue-100">contact@perpignan-peinture.fr</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-secondary mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Zone d'intervention</h3>
                      <p className="text-blue-100">Perpignan et alentours (66)</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-12 border-t border-primary-light">
                  <h3 className="font-semibold mb-4">Suivez-nous</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="text-white hover:text-secondary transition"><Instagram className="w-6 h-6" /></a>
                    <a href="#" className="text-white hover:text-secondary transition"><Facebook className="w-6 h-6" /></a>
                  </div>
                </div>
              </div>

              <div className="p-12">
                <form className="space-y-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Nom</label>
                      <input type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:border-primary focus:ring-0 transition" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Prénom</label>
                      <input type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:border-primary focus:ring-0 transition" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input type="email" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:border-primary focus:ring-0 transition" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Type de projet</label>
                    <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:border-primary focus:ring-0 transition">
                      <option>Peinture Intérieure</option>
                      <option>Ravalement de Façade</option>
                      <option>Revêtement de Sol</option>
                      <option>Autre</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea rows="4" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:border-primary focus:ring-0 transition"></textarea>
                  </div>
                  <button type="submit" className="w-full bg-primary text-white py-4 font-bold hover:bg-primary-dark transition tracking-wide">
                    ENVOYER MA DEMANDE
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              <span className="text-2xl font-serif font-bold text-white tracking-tight mb-4 block">
                PERPIGNAN<span className="text-secondary">PEINTURE</span>
              </span>
              <p className="text-gray-400 max-w-sm">
                Artisans peintres passionnés, nous mettons notre savoir-faire au service de vos projets de décoration et de rénovation dans les Pyrénées-Orientales.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-secondary">Liens Rapides</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#home" className="hover:text-white transition">Accueil</a></li>
                <li><a href="#residentiel" className="hover:text-white transition">Résidentiel</a></li>
                <li><a href="#commercial" className="hover:text-white transition">Commercial</a></li>
                <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-secondary">Légal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Mentions Légales</a></li>
                <li><a href="#" className="hover:text-white transition">Politique de Confidentialité</a></li>
                <li><a href="#" className="hover:text-white transition">CGV</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
            <p>&copy; 2025 PERPIGNAN PEINTURE. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="text-center p-6">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-surface mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-serif font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}

export default App;
