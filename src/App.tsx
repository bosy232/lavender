import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Menu, X, ChevronDown, Heart, Users, Mail, FileText, LogIn } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services'; 
import Gallery from './components/Gallery';
import Documents from './components/Documents';
import Contact from './components/Contact';
import PaymentSection from './components/PaymentSection';
import Footer from './components/Footer';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Services />  
        <Gallery />  
        <Documents />
        <PaymentSection />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;