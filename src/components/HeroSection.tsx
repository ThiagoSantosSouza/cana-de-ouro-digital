import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { ImageCarousel } from "./ImageCarousel";
import logo from "@/assets/logo.png";

export const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Carousel */}
      <div className="absolute inset-0">
        <ImageCarousel />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/80 via-navy-deep/60 to-navy-deep/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <img
            src={logo}
            alt="Logo Cana de Ouro"
            className="w-24 h-24 md:w-32 md:h-32 mx-auto animate-float"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-cream mb-4"
        >
          Ministério Profético
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mb-8"
        >
          <span className="text-gradient-gold font-heading text-3xl md:text-5xl lg:text-6xl font-bold">
            Cana de Ouro
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="text-lg md:text-xl text-cream/90 font-body font-light max-w-2xl mx-auto mb-12"
        >
          Um lugar de acolhimento, adoração e transformação através do poder de Deus
        </motion.p>

        <motion.a
          href="#sobre"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-gold text-navy-deep font-semibold rounded-full shadow-gold hover:shadow-lg transition-all hover:scale-105"
        >
          Conhecer Mais
        </motion.a>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-24 left-1/2 -translate-x-1/2"
        >
          <ChevronDown className="w-8 h-8 text-gold animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
};
