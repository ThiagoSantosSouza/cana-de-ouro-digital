import { motion } from "framer-motion";
import { Youtube, Instagram, Facebook, Heart } from "lucide-react";
import logo from "@/assets/logo.png";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-deep text-cream py-16 pb-32">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center text-center">
          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            src={logo}
            alt="Logo Cana de Ouro"
            className="w-16 h-16 mb-6"
          />

          <h3 className="font-heading text-2xl font-bold mb-2">
            Ministério Profético <span className="text-gold">Cana de Ouro</span>
          </h3>

          <p className="text-cream/60 mb-8 max-w-md">
            Um lugar de acolhimento, adoração e transformação através do poder de Deus.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4 mb-8">
            <a
              href="https://www.youtube.com/@igrejacanadeouro1227"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-cream/10 hover:bg-gold/20 transition-colors"
              aria-label="YouTube"
            >
              <Youtube className="w-5 h-5 text-cream hover:text-gold transition-colors" />
            </a>
            <a
              href="https://www.instagram.com/igrejacanadeouro/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-cream/10 hover:bg-gold/20 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 text-cream hover:text-gold transition-colors" />
            </a>
            <a
              href="https://www.facebook.com/MPCANADEOURO/?locale=pt_BR"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-cream/10 hover:bg-gold/20 transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5 text-cream hover:text-gold transition-colors" />
            </a>
          </div>

          <div className="w-full h-px bg-cream/10 mb-8" />

          <p className="text-cream/40 text-sm flex items-center gap-1">
            © {currentYear} Ministério Profético Cana de Ouro. Feito com{" "}
            <Heart className="w-4 h-4 text-gold inline" /> em Salvador, BA.
          </p>
        </div>
      </div>
    </footer>
  );
};
