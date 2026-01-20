import { motion } from "framer-motion";
import { Home, Info, Flame, MapPin, Users, Calendar } from "lucide-react";

const navItems = [
  { icon: Home, label: "Início", href: "#inicio" },
  { icon: Info, label: "Sobre", href: "#sobre" },
  { icon: Calendar, label: "Agenda", href: "#agenda" },
  { icon: Flame, label: "Mudança de Vida", href: "#mudanca" },
  { icon: Users, label: "Comunidade", href: "#comunidade" },
  { icon: MapPin, label: "Localização", href: "#localizacao" },
];

export const FloatingNav = () => {
  return (
    <motion.nav
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed bottom-6 left-0 right-0 z-50 flex justify-center pointer-events-none"
    >
      <div className="flex items-center gap-1 sm:gap-2 px-3 sm:px-6 py-3 sm:py-4 rounded-full bg-card/95 backdrop-blur-md border border-border shadow-elegant pointer-events-auto">
        {navItems.map((item, index) => (
          <motion.a
            key={item.label}
            href={item.href}
            className="flex flex-col items-center gap-1 px-2 sm:px-4 py-2 rounded-xl hover:bg-accent/10 transition-colors group"
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 + index * 0.1 }}
          >
            <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-muted-foreground group-hover:text-gold transition-colors" />
            <span className="text-[10px] sm:text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors hidden sm:block">
              {item.label}
            </span>
          </motion.a>
        ))}
      </div>
    </motion.nav>
  );
};
